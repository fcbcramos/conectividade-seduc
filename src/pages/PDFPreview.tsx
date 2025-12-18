import { useNavigate } from "react-router-dom";
import { ArrowLeft, FileDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import PDFDocument from "@/components/pdf-report/PDFDocument";

const PDFPreview = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Control Bar */}
      <div className="bg-background border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </Button>
            <div className="h-6 w-px bg-border" />
            <div>
              <h1 className="font-semibold text-sm">Relatório Executivo de Governança Contratual</h1>
              <p className="text-xs text-muted-foreground">PDF A4 Portrait • @react-pdf/renderer</p>
            </div>
          </div>

          <PDFDownloadLink 
            document={<PDFDocument />} 
            fileName="REGC-Relatorio-Executivo-Governanca.pdf"
          >
            {({ loading }) => (
              <Button disabled={loading} className="gap-2">
                <FileDown className="h-4 w-4" />
                {loading ? 'Gerando...' : 'Baixar PDF'}
              </Button>
            )}
          </PDFDownloadLink>
        </div>
      </div>

      {/* PDF Viewer */}
      <div className="flex-1">
        <PDFViewer width="100%" height="100%" className="border-0">
          <PDFDocument />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PDFPreview;
