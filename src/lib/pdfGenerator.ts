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

  onProgress?.(20, 'Capturando conteúdo...');

  // Capturar com configurações otimizadas
  const canvas = await html2canvas(container, {
    scale: quality,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: true,
    windowWidth: container.scrollWidth,
    windowHeight: container.scrollHeight,
    scrollX: 0,
    scrollY: 0,
    x: 0,
    y: 0,
    width: container.scrollWidth,
    height: container.scrollHeight,
  });

  console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);

  if (canvas.width === 0 || canvas.height === 0) {
    throw new Error('Falha na captura: canvas vazio');
  }

  onProgress?.(60, 'Gerando PDF...');

  // Dimensões A4 landscape
  const pageWidth = 297; // mm
  const margin = 12; // mm
  const contentWidth = pageWidth - (margin * 2);

  // Calcular altura proporcional
  const aspectRatio = canvas.height / canvas.width;
  const contentHeight = contentWidth * aspectRatio;
  const pageHeight = contentHeight + (margin * 2);

  // Criar PDF com página única de altura dinâmica
  const pdf = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: [pageWidth, pageHeight],
  });

  onProgress?.(80, 'Finalizando...');

  // Adicionar imagem ao PDF
  const imgData = canvas.toDataURL('image/jpeg', 0.92);
  pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, contentHeight);

  onProgress?.(95, 'Salvando arquivo...');

  // SALVAR DIRETAMENTE - Download automático!
  pdf.save(filename);

  onProgress?.(100, 'Concluído!');
};
