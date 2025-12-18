import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader2, Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDFCoverPage from "@/components/pdf/PDFCoverPage";
import PDFTableOfContents from "@/components/pdf/PDFTableOfContents";
import PDFSectionHeader from "@/components/pdf/PDFSectionHeader";
import { navigationItems } from "@/data/contractData";
import { PDFProvider } from "@/contexts/PDFContext";

// Import all section components
import Section1 from "@/pages/sections/Section1";
import Section2 from "@/pages/sections/Section2";
import Section3 from "@/pages/sections/Section3";
import Section4 from "@/pages/sections/Section4";
import Section5 from "@/pages/sections/Section5";
import Section6 from "@/pages/sections/Section6";
import Section7 from "@/pages/sections/Section7";
import Section8 from "@/pages/sections/Section8";
import Section9 from "@/pages/sections/Section9";
import Section10 from "@/pages/sections/Section10";
import Section11 from "@/pages/sections/Section11";
import Section12 from "@/pages/sections/Section12";
import Section13 from "@/pages/sections/Section13";
import Section14 from "@/pages/sections/Section14";
import Dashboard from "@/pages/Dashboard";

const sectionComponents: { [key: number]: React.ComponentType } = {
  1: Section1,
  2: Section2,
  3: Section3,
  4: Section4,
  5: Section5,
  6: Section6,
  7: Section7,
  8: Section8,
  9: Section9,
  10: Section10,
  11: Section11,
  12: Section12,
  13: Section13,
  14: Section14,
};

const PDFPreview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);

  // Parse options from URL
  const mode = searchParams.get("mode") || "full";
  const sectionNumber = searchParams.get("section") ? parseInt(searchParams.get("section")!) : 1;
  const includeCover = searchParams.get("cover") !== "false";
  const includeTOC = searchParams.get("toc") !== "false";

  // Wait for content to render before allowing PDF generation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleGeneratePDF = () => {
    // Calcular altura total do conteúdo para página única
    const pdfContent = document.querySelector('.pdf-mode');
    if (pdfContent) {
      const totalHeight = pdfContent.scrollHeight;
      
      // Criar estilo dinâmico com altura calculada
      const styleSheet = document.createElement('style');
      styleSheet.id = 'dynamic-page-size';
      styleSheet.textContent = `
        @page {
          size: 297mm ${totalHeight + 40}px !important;
          margin: 10mm 12mm !important;
        }
      `;
      document.head.appendChild(styleSheet);
      
      // Imprimir após aplicar estilo
      setTimeout(() => {
        window.print();
        // Remover estilo após impressão
        setTimeout(() => {
          document.getElementById('dynamic-page-size')?.remove();
        }, 1000);
      }, 100);
    } else {
      window.print();
    }
  };

  const SectionComponent = mode === "section" ? sectionComponents[sectionNumber] : null;
  const sectionTitle = mode === "section" 
    ? navigationItems.find(item => item.id === sectionNumber)?.title 
    : undefined;

  return (
    <div className="min-h-screen bg-muted/30 print:bg-white">
      {/* Control Bar - Hidden when printing */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm print:hidden">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate(-1)}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="font-semibold text-sm">
                {mode === "full" ? "Relatório Completo" : `Seção ${sectionNumber}: ${sectionTitle}`}
              </h1>
              <p className="text-xs text-muted-foreground">
                Visualização para impressão
              </p>
            </div>
          </div>

          <Button 
            onClick={handleGeneratePDF}
            disabled={!isReady}
            className="gap-2"
          >
            {!isReady ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Preparando...
              </>
            ) : (
              <>
                <Printer className="h-4 w-4" />
                Imprimir / Salvar PDF
              </>
            )}
          </Button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="pt-20 pb-8 px-4 print:pt-0 print:pb-0 print:px-0">
        <div className="max-w-[297mm] mx-auto print:max-w-none">
          {/* Preview indicator - Hidden when printing */}
          <div className="text-center text-sm text-muted-foreground mb-4 print:hidden">
            Pré-visualização • Clique em "Imprimir / Salvar PDF" e selecione "Salvar como PDF"
          </div>

          {/* PDF Target Container */}
          <PDFProvider isPDFMode={true}>
            <div className="pdf-mode bg-white shadow-2xl print:shadow-none">
              
              {/* Cover Page - Isolated page */}
              {includeCover && (
                <div className="pdf-cover-page">
                  <PDFCoverPage />
                </div>
              )}

              {/* Table of Contents - Isolated page */}
              {mode === "full" && includeTOC && (
                <div className="pdf-toc-page">
                  <PDFTableOfContents />
                </div>
              )}

              {/* Content Flow */}
              {mode === "full" ? (
                <div className="pdf-content-flow">
                  {/* Dashboard Section */}
                  <article className="pdf-section-content">
                    <PDFSectionHeader sectionNumber="Visão Geral" title="Dashboard Executivo" />
                    <div className="pdf-section-body">
                      <Dashboard />
                    </div>
                  </article>

                  {/* All Sections */}
                  {Object.entries(sectionComponents).map(([num, Component]) => {
                    const title = navigationItems.find(item => item.id === parseInt(num))?.title || '';
                    return (
                      <article key={num} className="pdf-section-content">
                        <PDFSectionHeader sectionNumber={parseInt(num)} title={title} />
                        <div className="pdf-section-body">
                          <Component />
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                /* Single Section */
                SectionComponent && (
                  <div className="pdf-content-flow">
                    <article className="pdf-section-content">
                      <PDFSectionHeader sectionNumber={sectionNumber} title={sectionTitle || ''} />
                      <div className="pdf-section-body">
                        <SectionComponent />
                      </div>
                    </article>
                  </div>
                )
              )}
            </div>
          </PDFProvider>
        </div>
      </div>
    </div>
  );
};

export default PDFPreview;
