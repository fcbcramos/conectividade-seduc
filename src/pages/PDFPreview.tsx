import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader2, FileDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import PDFCoverPage from "@/components/pdf/PDFCoverPage";
import PDFTableOfContents from "@/components/pdf/PDFTableOfContents";
import PDFSectionHeader from "@/components/pdf/PDFSectionHeader";
import { navigationItems } from "@/data/contractData";
import { PDFProvider } from "@/contexts/PDFContext";
import { generateSinglePagePDF } from "@/lib/pdfGenerator";

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
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');

  // Parse options from URL
  const mode = searchParams.get("mode") || "full";
  const sectionNumber = searchParams.get("section") ? parseInt(searchParams.get("section")!) : 1;
  const includeCover = searchParams.get("cover") !== "false";
  const includeTOC = searchParams.get("toc") !== "false";

  // Wait for content and images to render before allowing PDF generation
  useEffect(() => {
    const timer = setTimeout(() => {
      const images = document.querySelectorAll('.pdf-mode img');
      const allLoaded = Array.from(images).every(img => (img as HTMLImageElement).complete);
      
      if (allLoaded) {
        setIsReady(true);
      } else {
        // Wait more for images to load
        setTimeout(() => setIsReady(true), 1500);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGeneratePDF = async () => {
    try {
      setIsGenerating(true);
      setIsReady(false);
      
      await generateSinglePagePDF('.pdf-mode', {
        filename: 'REGC-Relatorio-Executivo-Governanca.pdf',
        quality: 2,
        onProgress: (prog, msg) => {
          setProgress(prog);
          setProgressMessage(msg);
        }
      });
      
      toast.success('PDF salvo com sucesso!');
    } catch (error) {
      console.error('Erro ao gerar PDF:', error);
      toast.error('Erro ao gerar PDF. Tente novamente.');
    } finally {
      setIsGenerating(false);
      setIsReady(true);
      setProgress(0);
      setProgressMessage('');
    }
  };

  const SectionComponent = mode === "section" ? sectionComponents[sectionNumber] : null;
  const sectionTitle = mode === "section" 
    ? navigationItems.find(item => item.id === sectionNumber)?.title 
    : undefined;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Control Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
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
                Pré-visualização para exportação
              </p>
            </div>
          </div>

          <Button 
            onClick={handleGeneratePDF}
            disabled={!isReady || isGenerating}
            className="gap-2"
          >
            {!isReady || isGenerating ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                {isGenerating ? 'Gerando...' : 'Preparando...'}
              </>
            ) : (
              <>
                <FileDown className="h-4 w-4" />
                Baixar PDF
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Progress Modal */}
      {isGenerating && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60]">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <div className="flex items-center gap-3 mb-4">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <span className="font-medium">Gerando PDF...</span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">{progressMessage}</p>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-300" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">{progress}%</p>
          </div>
        </div>
      )}

      {/* PDF Content */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-[297mm] mx-auto">
          {/* Preview indicator */}
          <div className="text-center text-sm text-muted-foreground mb-4">
            Pré-visualização • Clique em "Baixar PDF" para salvar o documento
          </div>

          {/* PDF Target Container */}
          <PDFProvider isPDFMode={true}>
            <div className="pdf-mode bg-white shadow-2xl" style={{ width: '1120px', margin: '0 auto' }}>
              
              {/* Cover Page */}
              {includeCover && (
                <div className="pdf-cover-page">
                  <PDFCoverPage />
                </div>
              )}

              {/* Table of Contents */}
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
