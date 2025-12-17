import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { usePDF } from "react-to-pdf";
import { Loader2, Download, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDFCoverPage from "@/components/pdf/PDFCoverPage";
import PDFTableOfContents from "@/components/pdf/PDFTableOfContents";
import PDFHeader from "@/components/pdf/PDFHeader";
import PDFFooter from "@/components/pdf/PDFFooter";
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
  const includePageNumbers = searchParams.get("pageNumbers") !== "false";
  const quality = searchParams.get("quality") || "high";

  // Generate filename
  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10);
  const timeStr = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }).replace(':', 'h');
  const filename = mode === "full" 
    ? `REGC_Caravana_Digital_${dateStr}_${timeStr}.pdf`
    : `REGC_Secao_${sectionNumber}_${dateStr}_${timeStr}.pdf`;

  const { targetRef: pdfTargetRef } = usePDF({
    filename,
    page: {
      format: 'A4',
      orientation: 'portrait',
      margin: 5,
    },
    canvas: {
      mimeType: 'image/png',
      qualityRatio: quality === 'high' ? 1 : 0.8,
      useCORS: true,
      logging: false,
    },
    overrides: {
      canvas: {
        useCORS: true,
        allowTaint: false,
        scale: quality === 'high' ? 2 : 1.5,
      }
    }
  });

  // Wait for content to render before allowing PDF generation
  useEffect(() => {
    const timer = setTimeout(() => {
      // Verify content is rendered
      if (pdfTargetRef.current && pdfTargetRef.current.offsetHeight > 0) {
        setIsReady(true);
      } else {
        // Retry if not ready
        setTimeout(() => setIsReady(true), 1000);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [pdfTargetRef]);

  const handleGeneratePDF = async () => {
    // Abordagem robusta: impressão nativa do navegador (Salvar como PDF / impressão física)
    window.print();
  };

  // Calculate estimated pages
  const estimatedPages = mode === "full" 
    ? (includeCover ? 1 : 0) + (includeTOC ? 1 : 0) + 2 + 14 * 2 // cover + toc + dashboard + sections
    : (includeCover ? 1 : 0) + 3;

  const SectionComponent = mode === "section" ? sectionComponents[sectionNumber] : null;
  const sectionTitle = mode === "section" 
    ? navigationItems.find(item => item.id === sectionNumber)?.title 
    : undefined;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Control Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm pdf-control-bar">
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
                ~{estimatedPages} páginas estimadas
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
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
                  <Download className="h-4 w-4" />
                  Imprimir / Salvar PDF
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Content Preview */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-[210mm] mx-auto space-y-4">
          {/* Preview indicator */}
          <div className="text-center text-sm text-muted-foreground mb-4 pdf-preview-indicator">
            Pré-visualização do PDF • Para exportar, clique em “Imprimir / Salvar PDF” e selecione “Salvar como PDF”.
          </div>

          {/* PDF Target Container */}
          <PDFProvider isPDFMode={true}>
            <div 
              ref={pdfTargetRef} 
              className="pdf-mode bg-white shadow-2xl"
              style={{ width: '210mm', minHeight: '297mm' }}
            >
              {/* Cover Page */}
              {includeCover && <PDFCoverPage />}

              {/* Table of Contents */}
              {mode === "full" && includeTOC && <PDFTableOfContents />}

              {/* Content */}
              {mode === "full" ? (
                <>
                  {/* Dashboard */}
                  <div className="pdf-page bg-white pdf-section">
                    <PDFHeader sectionTitle="Dashboard Executivo" />
                    <div className="p-4 pdf-content">
                      <Dashboard />
                    </div>
                    {includePageNumbers && <PDFFooter pageNumber={includeCover && includeTOC ? 3 : includeCover ? 2 : 1} totalPages={estimatedPages} />}
                  </div>

                  {/* All Sections */}
                  {Object.entries(sectionComponents).map(([num, Component], index) => {
                    const title = navigationItems.find(item => item.id === parseInt(num))?.title;
                    const pageNum = (includeCover ? 1 : 0) + (includeTOC ? 1 : 0) + 2 + index;
                    return (
                      <div key={num} className="pdf-page bg-white pdf-section">
                        <PDFHeader sectionTitle={`Seção ${num} - ${title}`} />
                        <div className="p-4 pdf-content">
                          <Component />
                        </div>
                        {includePageNumbers && <PDFFooter pageNumber={pageNum} totalPages={estimatedPages} />}
                      </div>
                    );
                  })}
                </>
              ) : (
                /* Single Section */
                SectionComponent && (
                  <div className="pdf-page bg-white">
                    <PDFHeader sectionTitle={`Seção ${sectionNumber} - ${sectionTitle}`} />
                    <div className="p-4 pdf-content">
                      <SectionComponent />
                    </div>
                    {includePageNumbers && <PDFFooter pageNumber={includeCover ? 2 : 1} totalPages={estimatedPages} />}
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
