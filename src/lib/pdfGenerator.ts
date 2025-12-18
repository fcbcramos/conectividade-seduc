import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFOptions {
  filename?: string;
  quality?: number;
  onProgress?: (progress: number, message: string) => void;
}

// Aguardar carregamento de todas as imagens
const waitForImages = (container: HTMLElement): Promise<void> => {
  const images = container.querySelectorAll('img');
  const promises = Array.from(images).map((img) => {
    if (img.complete) return Promise.resolve();
    return new Promise<void>((resolve) => {
      img.onload = () => resolve();
      img.onerror = () => resolve();
    });
  });
  return Promise.all(promises).then(() => {});
};

export const generateSinglePagePDF = async (
  contentSelector: string,
  options: PDFOptions = {}
) => {
  const { 
    filename = 'REGC-Relatorio-Executivo.pdf', 
    quality = 2,
    onProgress 
  } = options;

  const container = document.querySelector(contentSelector) as HTMLElement;
  if (!container) throw new Error('Conteúdo não encontrado');

  onProgress?.(5, 'Preparando conteúdo...');

  // Scroll para o topo
  window.scrollTo(0, 0);

  // Aguardar carregamento de imagens
  onProgress?.(10, 'Carregando imagens...');
  await waitForImages(container);

  // Delay para renderização completa
  await new Promise(resolve => setTimeout(resolve, 500));

  onProgress?.(15, 'Identificando seções...');

  // Seletor específico para evitar duplicatas
  const sections = container.querySelectorAll(
    '.pdf-cover-page, .pdf-toc-page, .pdf-section-content'
  );

  // Se não encontrou seções específicas, captura o container inteiro
  const elementsToCapture = sections.length > 0 
    ? Array.from(sections) as HTMLElement[]
    : [container];

  console.log(`Encontradas ${elementsToCapture.length} seções para capturar`);

  // Criar PDF A4 landscape
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4', // 297 x 210 mm
  });

  const pageWidth = 297;
  const pageHeight = 210;
  const margin = 8;
  const contentWidth = pageWidth - (margin * 2);
  const contentHeight = pageHeight - (margin * 2);

  let totalPages = 0;

  for (let i = 0; i < elementsToCapture.length; i++) {
    const section = elementsToCapture[i];
    
    onProgress?.(20 + (i / elementsToCapture.length) * 70, `Capturando seção ${i + 1} de ${elementsToCapture.length}...`);

    // Scroll para a seção
    section.scrollIntoView({ behavior: 'instant', block: 'start' });
    await new Promise(resolve => setTimeout(resolve, 100));

    // Capturar seção
    const canvas = await html2canvas(section, {
      scale: quality,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    if (canvas.width === 0 || canvas.height === 0) {
      console.warn(`Seção ${i + 1} vazia, pulando...`);
      continue;
    }

    // Calcular altura da seção em mm (proporcionalmente à largura do conteúdo)
    const canvasHeightInMM = (canvas.height / canvas.width) * contentWidth;
    
    // Se a seção é mais alta que uma página A4, dividir em múltiplas páginas
    if (canvasHeightInMM > contentHeight) {
      const numPages = Math.ceil(canvasHeightInMM / contentHeight);
      const sourceHeightPerPage = canvas.height / numPages;
      
      for (let page = 0; page < numPages; page++) {
        if (totalPages > 0) pdf.addPage();
        totalPages++;
        
        // Criar canvas parcial para esta página
        const partialCanvas = document.createElement('canvas');
        partialCanvas.width = canvas.width;
        partialCanvas.height = sourceHeightPerPage;
        
        const ctx = partialCanvas.getContext('2d');
        if (ctx) {
          const sourceY = page * sourceHeightPerPage;
          ctx.drawImage(
            canvas, 
            0, sourceY, canvas.width, sourceHeightPerPage,
            0, 0, canvas.width, sourceHeightPerPage
          );
        }
        
        const imgData = partialCanvas.toDataURL('image/jpeg', 0.92);
        pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, contentHeight);
      }
    } else {
      // Seção cabe em uma página
      if (totalPages > 0) pdf.addPage();
      totalPages++;

      // Calcular dimensões mantendo proporção
      const imgAspect = canvas.width / canvas.height;
      const pageAspect = contentWidth / contentHeight;
      
      let imgWidth: number, imgHeight: number;
      if (imgAspect > pageAspect) {
        imgWidth = contentWidth;
        imgHeight = contentWidth / imgAspect;
      } else {
        imgHeight = contentHeight;
        imgWidth = contentHeight * imgAspect;
      }

      // Centralizar na página
      const x = margin + (contentWidth - imgWidth) / 2;
      const y = margin + (contentHeight - imgHeight) / 2;

      const imgData = canvas.toDataURL('image/jpeg', 0.92);
      pdf.addImage(imgData, 'JPEG', x, y, imgWidth, imgHeight);
    }
  }

  onProgress?.(95, 'Salvando arquivo...');

  pdf.save(filename);

  onProgress?.(100, 'Concluído!');
};
