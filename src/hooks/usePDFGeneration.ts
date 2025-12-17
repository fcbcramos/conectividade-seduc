import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export interface PDFExportOptions {
  mode: "full" | "section";
  sectionNumber?: number;
  includeCover: boolean;
  includeTOC: boolean;
  includePageNumbers: boolean;
  quality: "high" | "medium";
}

export const usePDFGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const generatePDF = useCallback(async (options: PDFExportOptions) => {
    setIsGenerating(true);
    setProgress(0);
    setError(null);

    try {
      // Encode options in URL params
      const params = new URLSearchParams({
        mode: options.mode,
        ...(options.sectionNumber !== undefined && { section: options.sectionNumber.toString() }),
        cover: options.includeCover.toString(),
        toc: options.includeTOC.toString(),
        pageNumbers: options.includePageNumbers.toString(),
        quality: options.quality
      });

      // Navigate to PDF preview page which will handle the generation
      navigate(`/pdf-preview?${params.toString()}`);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao gerar PDF");
      setIsGenerating(false);
    }
  }, [navigate]);

  const resetState = useCallback(() => {
    setIsGenerating(false);
    setProgress(0);
    setError(null);
  }, []);

  return {
    isGenerating,
    progress,
    error,
    generatePDF,
    resetState,
    setProgress
  };
};
