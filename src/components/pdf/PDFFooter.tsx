import mecLogo from "@/assets/mec-gov-federal-logo.png";
import escolasConectadasLogo from "@/assets/escolas-conectadas-logo.png";

interface PDFFooterProps {
  pageNumber: number;
  totalPages: number;
}

const PDFFooter = ({ pageNumber, totalPages }: PDFFooterProps) => {
  const generationDate = new Date().toLocaleDateString('pt-BR');

  return (
    <footer className="pdf-footer flex items-center justify-between py-3 px-4 border-t border-border bg-white text-xs">
      <div className="flex items-center gap-4">
        <img 
          src={mecLogo} 
          alt="MEC" 
          className="h-6 w-auto object-contain opacity-70"
        />
        <img 
          src={escolasConectadasLogo} 
          alt="Escolas Conectadas" 
          className="h-5 w-auto object-contain opacity-70"
        />
      </div>
      
      <div className="text-muted-foreground font-medium">
        Página {pageNumber} de {totalPages}
      </div>
      
      <div className="text-muted-foreground">
        Gerado em {generationDate}
      </div>
    </footer>
  );
};

export default PDFFooter;
