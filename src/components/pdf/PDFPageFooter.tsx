import mecLogo from "@/assets/mec-gov-federal-logo.png";
import escolasConectadasLogo from "@/assets/escolas-conectadas-logo.png";

interface PDFPageFooterProps {
  pageNumber: number;
  totalPages: number;
}

const PDFPageFooter = ({ pageNumber, totalPages }: PDFPageFooterProps) => {
  const generationDate = new Date().toLocaleDateString('pt-BR');

  return (
    <footer className="absolute bottom-0 left-0 right-0 flex items-center justify-between py-2 px-8 border-t border-border bg-white text-[10px] h-[30px]">
      <div className="flex items-center gap-3">
        <img 
          src={mecLogo} 
          alt="MEC" 
          className="h-4 w-auto object-contain opacity-70"
        />
        <img 
          src={escolasConectadasLogo} 
          alt="Escolas Conectadas" 
          className="h-4 w-auto object-contain opacity-70"
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

export default PDFPageFooter;
