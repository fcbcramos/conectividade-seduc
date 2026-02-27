import { AlertTriangle } from "lucide-react";

const DadosExemploBanner = () => (
  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-secondary/40 bg-secondary/10 text-secondary-foreground">
    <AlertTriangle className="w-4 h-4 flex-shrink-0" />
    <p className="text-xs font-medium">
      <span className="font-bold">Dados de exemplo</span> — As informações exibidas neste módulo são simuladas para fins de prototipação e não representam dados reais de produção.
    </p>
  </div>
);

export default DadosExemploBanner;
