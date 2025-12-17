import { useState } from "react";
import { FileDown, FileText, Settings2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePDFGeneration, PDFExportOptions } from "@/hooks/usePDFGeneration";
import { navigationItems } from "@/data/contractData";

interface PDFExportButtonProps {
  mode?: "full" | "section";
  sectionNumber?: number;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  showLabel?: boolean;
}

const PDFExportButton = ({ 
  mode = "full", 
  sectionNumber,
  variant = "outline",
  size = "default",
  showLabel = true
}: PDFExportButtonProps) => {
  const [open, setOpen] = useState(false);
  const [exportMode, setExportMode] = useState<"full" | "section">(mode);
  const [selectedSection, setSelectedSection] = useState<string>(sectionNumber?.toString() || "1");
  const [includeCover, setIncludeCover] = useState(true);
  const [includeTOC, setIncludeTOC] = useState(true);
  const [includePageNumbers, setIncludePageNumbers] = useState(true);
  const [quality, setQuality] = useState<"high" | "medium">("high");

  const { generatePDF, isGenerating } = usePDFGeneration();

  const handleExport = () => {
    const options: PDFExportOptions = {
      mode: exportMode,
      sectionNumber: exportMode === "section" ? parseInt(selectedSection) : undefined,
      includeCover,
      includeTOC: exportMode === "full" ? includeTOC : false,
      includePageNumbers,
      quality
    };

    generatePDF(options);
    setOpen(false);
  };

  const sectionTitle = sectionNumber 
    ? navigationItems.find(item => item.id === sectionNumber)?.title 
    : undefined;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={variant} size={size} className="gap-2">
          <FileDown className="h-4 w-4" />
          {showLabel && (
            <span className="hidden sm:inline">
              {mode === "section" ? "Exportar Seção" : "Exportar PDF"}
            </span>
          )}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" />
            Exportar Relatório em PDF
          </DialogTitle>
          <DialogDescription>
            Configure as opções de exportação do relatório executivo.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Modo de exportação */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">Modo de Exportação</Label>
            <RadioGroup 
              value={exportMode} 
              onValueChange={(value) => setExportMode(value as "full" | "section")}
              className="space-y-2"
            >
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="full" id="full" />
                <Label htmlFor="full" className="flex-1 cursor-pointer">
                  <div className="font-medium">Relatório Completo</div>
                  <div className="text-xs text-muted-foreground">
                    Dashboard + 14 seções (~35-45 páginas)
                  </div>
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                <RadioGroupItem value="section" id="section" />
                <Label htmlFor="section" className="flex-1 cursor-pointer">
                  <div className="font-medium">Seção Individual</div>
                  <div className="text-xs text-muted-foreground">
                    Exportar apenas uma seção específica
                  </div>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Seleção de seção (quando modo = section) */}
          {exportMode === "section" && (
            <div className="space-y-2">
              <Label>Selecionar Seção</Label>
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger>
                  <SelectValue placeholder="Escolha uma seção" />
                </SelectTrigger>
                <SelectContent>
                  {navigationItems.map((item) => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.id}. {item.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Opções de conteúdo */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              <Settings2 className="h-4 w-4" />
              Opções de Conteúdo
            </Label>
            <div className="space-y-3 pl-1">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="cover" 
                  checked={includeCover} 
                  onCheckedChange={(checked) => setIncludeCover(checked as boolean)}
                />
                <Label htmlFor="cover" className="text-sm cursor-pointer">
                  Incluir capa institucional
                </Label>
              </div>
              {exportMode === "full" && (
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="toc" 
                    checked={includeTOC} 
                    onCheckedChange={(checked) => setIncludeTOC(checked as boolean)}
                  />
                  <Label htmlFor="toc" className="text-sm cursor-pointer">
                    Incluir sumário
                  </Label>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="pageNumbers" 
                  checked={includePageNumbers} 
                  onCheckedChange={(checked) => setIncludePageNumbers(checked as boolean)}
                />
                <Label htmlFor="pageNumbers" className="text-sm cursor-pointer">
                  Incluir numeração de páginas
                </Label>
              </div>
            </div>
          </div>

          {/* Qualidade */}
          <div className="space-y-2">
            <Label>Qualidade de Exportação</Label>
            <Select value={quality} onValueChange={(value) => setQuality(value as "high" | "medium")}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">
                  <div>
                    <span className="font-medium">Alta qualidade</span>
                    <span className="text-xs text-muted-foreground ml-2">(arquivo maior)</span>
                  </div>
                </SelectItem>
                <SelectItem value="medium">
                  <div>
                    <span className="font-medium">Qualidade padrão</span>
                    <span className="text-xs text-muted-foreground ml-2">(arquivo menor)</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>
          <Button onClick={handleExport} disabled={isGenerating} className="gap-2">
            <FileDown className="h-4 w-4" />
            Gerar PDF
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PDFExportButton;
