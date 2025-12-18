import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFOptions {
  filename?: string;
  quality?: number;
  onProgress?: (progress: number, message: string) => void;
}

export const generatePDFFromPages = async (
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
  await new Promise(resolve => setTimeout(resolve, 300));

  onProgress?.(10, 'Identificando páginas...');

  // Selecionar todas as páginas PDF com tamanho fixo
  const pages = container.querySelectorAll('.pdf-page');
  
  if (pages.length === 0) {
    throw new Error('Nenhuma página PDF encontrada');
  }

  console.log(`Encontradas ${pages.length} páginas para capturar`);

  // Criar PDF A4 landscape
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4', // 297 x 210 mm
  });

  const pageWidth = 297;
  const pageHeight = 210;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i] as HTMLElement;
    
    const progressPercent = 15 + (i / pages.length) * 80;
    onProgress?.(progressPercent, `Capturando página ${i + 1} de ${pages.length}...`);

    // Adicionar nova página (exceto para a primeira)
    if (i > 0) pdf.addPage();

    // Capturar página com html2canvas
    const canvas = await html2canvas(page, {
      scale: quality,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      logging: false,
      width: page.offsetWidth,
      height: page.offsetHeight,
    });

    if (canvas.width === 0 || canvas.height === 0) {
      console.warn(`Página ${i + 1} vazia, pulando...`);
      continue;
    }

    // Converter para imagem e adicionar ao PDF
    const imgData = canvas.toDataURL('image/jpeg', 0.92);
    pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
  }

  onProgress?.(95, 'Salvando arquivo...');
  pdf.save(filename);
  onProgress?.(100, 'Concluído!');
};

// Manter função antiga para compatibilidade
export const generateSinglePagePDF = generatePDFFromPages;
