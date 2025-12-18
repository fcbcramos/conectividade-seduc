import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Loader2, FileDown, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import PDFCoverPage from "@/components/pdf/PDFCoverPage";
import PDFTableOfContents from "@/components/pdf/PDFTableOfContents";
import { PDFProvider } from "@/contexts/PDFContext";
import { generatePDFFromPages } from "@/lib/pdfGenerator";
import governoPiauiLogo from "@/assets/governo-piaui-logo.png";

// Import PDF section components
import { 
  PDFDashboard, 
  PDFSection1, 
  PDFSection2, 
  PDFSection3, 
  PDFSection4, 
  PDFSection5,
  PDFSection6 
} from "@/components/pdf/sections";

const PDFPreview = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressMessage, setProgressMessage] = useState('');

  const mode = searchParams.get("mode") || "full";

  // Total de páginas: Capa(1) + Sumário(1) + Dashboard(1) + Seções(6) = 9
  const totalPages = 9;

  useEffect(() => {
    const timer = setTimeout(() => {
      const images = document.querySelectorAll('.pdf-mode img');
      const allLoaded = Array.from(images).every(img => (img as HTMLImageElement).complete);
      
      if (allLoaded) {
        setIsReady(true);
      } else {
        setTimeout(() => setIsReady(true), 1500);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleGeneratePDF = async () => {
    try {
      setIsGenerating(true);
      setIsReady(false);
      
      await generatePDFFromPages('.pdf-mode', {
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

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Control Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="font-semibold text-sm">Relatório Completo (Page-First)</h1>
              <p className="text-xs text-muted-foreground">{totalPages} páginas A4 landscape</p>
            </div>
          </div>

          <Button onClick={handleGeneratePDF} disabled={!isReady || isGenerating} className="gap-2">
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
          <div className="bg-white p-8 rounded-lg shadow-xl max-w-sm w-full mx-4 text-center">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img src={governoPiauiLogo} alt="" className="absolute inset-0 w-full h-full object-contain grayscale opacity-40" />
              <img src={governoPiauiLogo} alt="" className="absolute inset-0 w-full h-full object-contain transition-all duration-300"
                style={{ clipPath: `inset(${100 - progress}% 0 0 0)` }} />
            </div>
            <span className="font-semibold text-lg block mb-2">Gerando PDF...</span>
            <p className="text-sm text-muted-foreground mb-4">{progressMessage}</p>
            <div className="h-2 bg-muted rounded-full overflow-hidden mb-2">
              <div className="h-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
            <p className="text-sm font-medium text-primary">{progress.toFixed(2).replace('.', ',')}%</p>
          </div>
        </div>
      )}

      {/* PDF Content - Fixed A4 Landscape Pages */}
      <div className="pt-20 pb-8 px-4">
        <div className="text-center text-sm text-muted-foreground mb-4">
          Pré-visualização • Cada página é A4 landscape (297mm × 210mm)
        </div>

        <PDFProvider isPDFMode={true}>
          <div className="pdf-mode flex flex-col items-center gap-4">
            {/* Page 1: Cover */}
            <PDFCoverPage />
            
            {/* Page 2: Table of Contents */}
            <PDFTableOfContents />
            
            {/* Page 3: Dashboard */}
            <PDFDashboard startPage={3} totalPages={totalPages} />
            
            {/* Page 4: Section 1 */}
            <PDFSection1 startPage={4} totalPages={totalPages} />
            
            {/* Page 5: Section 2 */}
            <PDFSection2 startPage={5} totalPages={totalPages} />
            
            {/* Page 6: Section 3 */}
            <PDFSection3 startPage={6} totalPages={totalPages} />
            
            {/* Page 7: Section 4 */}
            <PDFSection4 startPage={7} totalPages={totalPages} />
            
            {/* Page 8: Section 5 */}
            <PDFSection5 startPage={8} totalPages={totalPages} />
            
            {/* Page 9: Section 6 */}
            <PDFSection6 startPage={9} totalPages={totalPages} />
          </div>
        </PDFProvider>
      </div>
    </div>
  );
};

export default PDFPreview;
