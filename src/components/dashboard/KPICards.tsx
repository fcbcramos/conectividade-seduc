import { Card, CardContent } from "@/components/ui/card";
import { kpiData } from "@/data/contractData";
import { Wallet, TrendingUp, Layers, Clock, Building, Calendar } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

const KPICards = () => {
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
      title: "Fonte Lei 14.172",
      value: formatCurrency(kpiData.fonte14172),
      subtitle: "FUST - Escolas Conectadas",
      icon: TrendingUp,
      color: "accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Fonte Tesouro",
      value: formatCurrency(kpiData.fontTesouro),
      subtitle: "Recursos estaduais",
      icon: Wallet,
      color: "secondary",
      bgColor: "bg-secondary/20"
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
      value: kpiData.contractModel,
      subtitle: "Pagamento por resultados",
      icon: Building,
      color: "primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "Status",
      value: kpiData.status,
      subtitle: `Início: ${kpiData.startDate}`,
      icon: Calendar,
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
