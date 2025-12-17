import { navigationItems } from "@/data/contractData";

interface PDFTableOfContentsProps {
  includeDashboard?: boolean;
}

const PDFTableOfContents = ({ includeDashboard = true }: PDFTableOfContentsProps) => {
  return (
    <div className="pdf-page pdf-toc bg-white min-h-[297mm] w-[210mm] p-12">
      <h2 className="text-3xl font-bold text-[#034ea2] mb-8">Sumário</h2>
      
      <div className="space-y-1">
        {includeDashboard && (
          <div className="flex items-center py-2 border-b border-dashed border-border">
            <span className="font-semibold text-foreground">Dashboard Executivo</span>
            <span className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30" />
            <span className="text-muted-foreground font-medium">3</span>
          </div>
        )}
        
        {navigationItems.map((item, index) => (
          <div key={item.id} className="flex items-center py-2 border-b border-dashed border-border">
            <span className="w-8 text-muted-foreground font-medium">{item.id}.</span>
            <span className="font-semibold text-foreground">{item.title}</span>
            <span className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30" />
            <span className="text-muted-foreground font-medium">{includeDashboard ? index + 5 : index + 3}</span>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg">
        <h3 className="font-semibold text-foreground mb-3">Sobre este documento</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Este Relatório Executivo de Governança Contratual (REGC) apresenta a estrutura completa 
          de gestão e acompanhamento do contrato de conectividade para a Rede Estadual de Educação 
          do Piauí, contemplando aspectos técnicos, operacionais, financeiros e de qualidade.
        </p>
      </div>
    </div>
  );
};

export default PDFTableOfContents;
