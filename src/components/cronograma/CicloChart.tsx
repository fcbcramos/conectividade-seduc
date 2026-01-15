import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";
import { ciclosResumo, isPrioridade } from "@/data/cronogramaData";

const CicloChart = () => {
  const chartData = Object.entries(ciclosResumo).map(([nome, dados]) => ({
    ciclo: nome.replace("CICLO ", ""),
    escolas: dados.escolas,
    mesInicio: dados.mesInicio,
    prioridade: dados.prioridade,
    fullName: nome
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-background border rounded-lg shadow-lg p-3">
          <p className="font-bold text-foreground">{data.fullName}</p>
          <p className="text-sm text-muted-foreground">
            Escolas: <span className="font-semibold text-foreground">{data.escolas}</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Início: <span className="font-semibold text-foreground">{data.mesInicio}</span>
          </p>
          {data.prioridade && (
            <Badge variant="destructive" className="mt-1 text-xs">PRIORIDADE</Badge>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Distribuição de Escolas por Ciclo</CardTitle>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-destructive" />
              <span className="text-muted-foreground">Prioritário</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded bg-primary" />
              <span className="text-muted-foreground">Normal</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 5, right: 60, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" domain={[0, 110]} />
              <YAxis 
                type="category" 
                dataKey="ciclo" 
                width={70}
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="escolas" 
                radius={[0, 4, 4, 0]}
                maxBarSize={35}
              >
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.prioridade ? 'hsl(var(--destructive))' : 'hsl(var(--primary))'} 
                  />
                ))}
                <LabelList 
                  dataKey="escolas" 
                  position="right" 
                  fill="hsl(var(--foreground))"
                  fontSize={12}
                  fontWeight="bold"
                />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Timeline visual */}
        <div className="mt-6 border-t pt-4">
          <p className="text-sm font-medium text-muted-foreground mb-3">Cronograma de Atendimento</p>
          <div className="flex justify-between items-center">
            {chartData.map((ciclo, index) => (
              <div key={ciclo.fullName} className="flex flex-col items-center flex-1">
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${
                    ciclo.prioridade 
                      ? 'bg-destructive text-destructive-foreground' 
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {ciclo.ciclo}
                </div>
                <span className="text-xs text-muted-foreground mt-1">{ciclo.mesInicio}</span>
                {ciclo.prioridade && (
                  <Badge variant="destructive" className="text-[10px] mt-1 px-1">🔴</Badge>
                )}
                {index < chartData.length - 1 && (
                  <div className="absolute w-full h-0.5 bg-muted top-4 left-1/2 -z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CicloChart;
