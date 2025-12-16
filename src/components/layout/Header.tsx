import { FileText, Calendar } from "lucide-react";

const Header = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="gradient-header text-primary-foreground py-5 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* Título Central */}
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight">
              Relatório Executivo de Governança Contratual
            </h1>
            <p className="text-sm opacity-80 mt-1">
              Conectividade à Internet e Infraestrutura Wi-Fi - Rede Estadual do Piauí
            </p>
          </div>

          {/* Data e Processo */}
          <div className="hidden md:flex flex-col items-end text-right text-sm">
            <div className="flex items-center gap-1.5 opacity-80">
              <Calendar className="w-4 h-4" />
              <span>{currentDate}</span>
            </div>
            <span className="text-xs font-medium opacity-90 mt-0.5">
              Início previsto: Janeiro/2026
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
