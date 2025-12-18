import seducLogo from "@/assets/logo-seduc.png";
import { basicInfo } from "@/data/contractData";

interface PDFPageHeaderProps {
  sectionTitle?: string;
}

const PDFPageHeader = ({ sectionTitle }: PDFPageHeaderProps) => {
  return (
    <header className="flex items-center justify-between py-2 px-8 border-b border-border bg-white h-[50px]">
      <div className="flex items-center gap-3">
        <img 
          src={seducLogo} 
          alt="SEDUC" 
          className="h-7 w-auto object-contain"
        />
        <div className="h-5 w-px bg-border" />
        <div className="text-xs">
          <p className="font-semibold text-foreground leading-tight">REGC - Relatório Executivo de Governança Contratual</p>
          {sectionTitle && (
            <p className="text-muted-foreground text-[10px] leading-tight">{sectionTitle}</p>
          )}
        </div>
      </div>
      <div className="text-right text-[10px] text-muted-foreground">
        <p>Processo nº {basicInfo.processNumber}</p>
      </div>
    </header>
  );
};

export default PDFPageHeader;
