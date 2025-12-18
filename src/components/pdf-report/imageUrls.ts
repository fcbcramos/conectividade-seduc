// URLs base para imagens no PDF
// @react-pdf/renderer requer URLs absolutas ou base64
// Em produção, use a URL completa do seu domínio

const getBaseUrl = () => {
  // Em ambiente de produção, retorna a URL base
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return '';
};

export const pdfImages = {
  governoPiauiLogo: '/images/governo-piaui-logo.png',
  seducLogo: '/images/logo-seduc.png',
  mecLogo: '/images/mec-gov-federal-logo.png',
  escolasConectadasLogo: '/images/escolas-conectadas-logo.png',
  novoPacLogo: '/images/novo-pac-logo.png',
};

// Função para obter URL absoluta
export const getAbsoluteImageUrl = (path: string): string => {
  const baseUrl = getBaseUrl();
  return `${baseUrl}${path}`;
};
