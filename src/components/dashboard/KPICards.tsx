import { Card, CardContent } from "@/components/ui/card";
import { kpiData } from "@/data/contractData";
import { Wallet, TrendingUp, Layers, Clock, Building, CheckCircle } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const KPICards = () => {
  const progressPercentage = (kpiData.completedPhases / kpiData.totalPhases) * 100;
  const disbursementPercentage = (kpiData.disbursedValue / kpiData.totalValue) * 100;

  const kpis = [
    {
      title: "Valor Total do Contrato",
      value: formatCurrency(kpiData.totalValue),
      subtitle: "R$ 89,9 milhões",
      icon: Wallet,
      color: "primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Desembolso Realizado",
      value: formatCurrency(kpiData.disbursedValue),
      subtitle: `${disbursementPercentage.toFixed(1)}% do total`,
      icon: TrendingUp,
      color: "accent",
      bgColor: "bg-accent/10",
      progress: disbursementPercentage
    },
    {
      title: "Fases Concluídas",
      value: `${kpiData.completedPhases}/${kpiData.totalPhases}`,
      subtitle: `${progressPercentage.toFixed(0)}% concluído`,
      icon: Layers,
      color: "secondary",
      bgColor: "bg-secondary/20",
      progress: progressPercentage
    },
    {
      title: "Prazo de Execução",
      value: kpiData.executionPeriod,
      subtitle: "Vigência contratual",
      icon: Clock,
      color: "primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Modelo de Contratação",
      value: "Integrada",
      subtitle: "Lote Único, As a Service",
      icon: Building,
      color: "primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Status Geral",
      value: "Em Execução",
      subtitle: "Dentro do cronograma",
      icon: CheckCircle,
      color: "accent",
      bgColor: "bg-accent/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
      {kpis.map((kpi, index) => (
        <Card 
          key={kpi.title} 
          className="shadow-card hover:shadow-card-hover transition-shadow animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {kpi.title}
                </p>
                <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{kpi.subtitle}</p>
                
                {kpi.progress !== undefined && (
                  <div className="mt-3">
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-1000 ${
                          kpi.color === 'accent' ? 'bg-accent' : 'bg-secondary'
                        }`}
                        style={{ width: `${kpi.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
              <div className={`${kpi.bgColor} p-3 rounded-lg`}>
                <kpi.icon className={`w-6 h-6 ${
                  kpi.color === 'primary' ? 'text-primary' : 
                  kpi.color === 'accent' ? 'text-accent' : 'text-secondary-foreground'
                }`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default KPICards;
