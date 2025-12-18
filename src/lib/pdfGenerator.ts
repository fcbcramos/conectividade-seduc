import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PDFOptions {
  filename?: string;
  quality?: number;
  onProgress?: (progress: number, message: string) => void;
}

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

  onProgress?.(10, 'Capturando conteúdo...');

  // Capturar todo o conteúdo como imagem
  const canvas = await html2canvas(container, {
    scale: quality,
    useCORS: true,
    allowTaint: true,
    backgroundColor: '#ffffff',
    logging: false,
    windowWidth: 1120, // ~297mm em 96dpi
  });

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
