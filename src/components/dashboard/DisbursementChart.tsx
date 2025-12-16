import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { disbursementData } from "@/data/contractData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from "recharts";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    notation: 'compact',
    maximumFractionDigits: 1
  }).format(value);
};

const DisbursementChart = () => {
  const getBarColor = (status: string) => {
    switch (status) {
      case "Concluída": return "hsl(150, 100%, 24%)"; // Green
      case "Em andamento": return "hsl(43, 98%, 53%)"; // Yellow
      default: return "hsl(214, 20%, 88%)"; // Gray
    }
  };

  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg">Cronograma de Desembolso por Fase</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={disbursementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
              <XAxis 
                dataKey="phase" 
                tick={{ fontSize: 12, fill: "hsl(215, 15%, 45%)" }}
                axisLine={{ stroke: "hsl(214, 20%, 88%)" }}
              />
              <YAxis 
                tickFormatter={formatCurrency}
                tick={{ fontSize: 11, fill: "hsl(215, 15%, 45%)" }}
                axisLine={{ stroke: "hsl(214, 20%, 88%)" }}
              />
              <Tooltip 
                formatter={(value: number) => [formatCurrency(value), "Valor"]}
                labelStyle={{ color: "hsl(215, 25%, 15%)" }}
                contentStyle={{ 
                  backgroundColor: "white", 
                  border: "1px solid hsl(214, 20%, 88%)",
                  borderRadius: "8px"
                }}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {disbursementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4 pt-4 border-t">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-accent" />
            <span className="text-sm text-muted-foreground">Concluída</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-secondary" />
            <span className="text-sm text-muted-foreground">Em andamento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-muted" />
            <span className="text-sm text-muted-foreground">Pendente</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DisbursementChart;
