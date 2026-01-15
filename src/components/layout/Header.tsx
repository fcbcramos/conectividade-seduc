import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Header = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  // Cálculo de dias restantes até o início do projeto
  const startDate = new Date('2026-02-02');
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = startDate.getTime() - today.getTime();
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

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

          {/* Data e Contador */}
          <div className="hidden md:flex flex-col items-end text-right gap-1">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span className="text-base font-semibold">{currentDate}</span>
            </div>
            <span className="text-xs opacity-80">
              Início: 02/02/2026
            </span>
            <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-0 text-xs">
              <Clock className="w-3 h-3 mr-1" />
              {daysRemaining > 0 ? `${daysRemaining} dias para iniciar` : 'Projeto iniciado'}
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
