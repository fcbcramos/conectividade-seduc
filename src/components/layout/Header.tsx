import { FileText, Calendar } from "lucide-react";

const Header = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <header className="gradient-header text-primary-foreground py-4 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4">
          {/* SEDUC-PI Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20">
              <FileText className="w-5 h-5" />
              <div className="hidden sm:block">
                <p className="text-sm font-bold leading-tight">SEDUC-PI</p>
                <p className="text-xs opacity-80 leading-tight">Secretaria da Educação</p>
              </div>
            </div>
          </div>
          
          {/* Título Central */}
          <div className="flex-1 text-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-extrabold tracking-tight">
              Relatório Executivo de Governança Contratual
            </h1>
            <p className="text-xs sm:text-sm opacity-80 mt-0.5">
              Conectividade à Internet e Infraestrutura Wi-Fi - Rede Estadual
            </p>
          </div>

          {/* Data e Processo */}
          <div className="hidden md:flex items-center gap-2 text-right text-sm">
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-1.5 text-xs opacity-70">
                <Calendar className="w-3.5 h-3.5" />
                <span>{currentDate}</span>
              </div>
              <span className="text-xs font-medium opacity-90">
                Contrato nº 045/2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
