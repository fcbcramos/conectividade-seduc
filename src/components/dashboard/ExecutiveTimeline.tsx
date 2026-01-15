import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { disbursementData } from "@/data/contractData";

const formatCurrencyShort = (value: number) => {
  return `R$ ${(value / 1000000).toFixed(1)}M`;
};

const formatCurrencyFull = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

const ExecutiveTimeline = () => {
  const months = ["Fev/26", "Mar/26", "Abr/26", "Mai/26", "Jun/26", "Jul/26", "Ago/26"];
  const totalValue = disbursementData.reduce((acc, item) => acc + item.value, 0);

  const getBarColor = (type: string) => {
    switch (type) {
      case "planejamento": return "bg-accent";
      case "mobilizacao": return "bg-secondary";
      case "execucao": return "bg-primary";
      case "entrega": return "bg-[#8B5CF6]";
      default: return "bg-muted";
    }
  };

  const getBarColorHex = (type: string) => {
    switch (type) {
      case "planejamento": return "hsl(var(--accent))";
      case "mobilizacao": return "hsl(var(--secondary))";
      case "execucao": return "hsl(var(--primary))";
      case "entrega": return "#8B5CF6";
      default: return "hsl(var(--muted))";
    }
  };

  const legendItems = [
    { label: "Planejamento", color: "bg-accent", type: "planejamento" },
    { label: "Mobilização", color: "bg-secondary", type: "mobilizacao" },
    { label: "Execução", color: "bg-primary", type: "execucao" },
    { label: "Entrega", color: "bg-[#8B5CF6]", type: "entrega" }
  ];

  return (
    <Card className="shadow-card">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <CardTitle className="text-lg">Cronograma Executivo de Desembolso</CardTitle>
          <div className="flex items-center gap-4">
            {legendItems.map((item) => (
              <div key={item.type} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded ${item.color}`} />
                <span className="text-xs text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Timeline Header - Months */}
        <div className="mb-6">
          <div className="grid grid-cols-[120px_1fr] gap-4">
            <div className="text-xs font-medium text-muted-foreground">Fase</div>
            <div className="grid grid-cols-7 gap-1">
              {months.map((month) => (
                <div key={month} className="text-xs font-medium text-center text-muted-foreground">
                  {month}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Rows */}
        <div className="space-y-3">
          {disbursementData.map((item, index) => {
            const monthIndex = months.indexOf(item.month);
            const barWidthPercent = (1 / 7) * 100;
            const barLeftPercent = (monthIndex / 7) * 100;

            return (
              <div key={item.phase} className="grid grid-cols-[120px_1fr] gap-4 items-center">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{item.phase}</span>
                  <span className="text-xs text-muted-foreground">{item.name}</span>
                </div>
                <div className="relative h-10 bg-muted/30 rounded-lg overflow-hidden">
                  {/* Grid lines */}
                  <div className="absolute inset-0 grid grid-cols-7">
                    {months.map((_, i) => (
                      <div key={i} className={`border-r border-border/30 ${i === 0 ? 'border-l' : ''}`} />
                    ))}
                  </div>
                  
                  {/* Bar */}
                  <div
                    className={`absolute top-1 bottom-1 rounded-md ${getBarColor(item.type)} flex items-center justify-center transition-all duration-500`}
                    style={{
                      left: `calc(${barLeftPercent}% + 4px)`,
                      width: `calc(${barWidthPercent}% - 8px)`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <span className="text-xs font-bold text-white drop-shadow-sm">
                      {formatCurrencyShort(item.value)}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer - Total */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Previsão de Desembolso (Implantação):</span>
              <span className="text-xl font-bold text-primary">{formatCurrencyFull(totalValue)}</span>
            </div>
            <div className="text-xs text-muted-foreground">
              Período: Fevereiro - Agosto 2026
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveTimeline;
