import seducLogo from "@/assets/logo-seduc.png";
import { basicInfo } from "@/data/contractData";

interface PDFHeaderProps {
  sectionTitle?: string;
}

const PDFHeader = ({ sectionTitle }: PDFHeaderProps) => {
  return (
    <header className="pdf-header flex items-center justify-between py-3 px-4 border-b border-border bg-white">
      <div className="flex items-center gap-3">
        <img 
          src={seducLogo} 
          alt="SEDUC" 
          className="h-8 w-auto object-contain"
        />
        <div className="h-6 w-px bg-border" />
        <div className="text-xs">
          <p className="font-semibold text-foreground">REGC - Relatório Executivo de Governança Contratual</p>
          {sectionTitle && (
            <p className="text-muted-foreground">{sectionTitle}</p>
          )}
        </div>
      </div>
      <div className="text-right text-xs text-muted-foreground">
        <p>Processo nº {basicInfo.processNumber}</p>
      </div>
    </header>
  );
};

export default PDFHeader;
