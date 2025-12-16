import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { disbursementData, kpiData } from "@/data/contractData";
import { Wallet, TrendingUp, Calendar } from "lucide-react";
import ExecutiveTimeline from "@/components/dashboard/ExecutiveTimeline";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const Section7 = () => {
  const totalImplantation = disbursementData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 7</Badge>
        <h1 className="text-3xl font-bold text-foreground">Cronograma de Desembolso</h1>
        <p className="text-muted-foreground mt-2">
          Distribuição financeira por fase do projeto - Previsão para 2026
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Valor Total do Contrato</p>
                <p className="text-xl font-bold">{formatCurrency(kpiData.totalValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Fase de Implantação</p>
                <p className="text-xl font-bold text-accent">{formatCurrency(totalImplantation)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Início Previsto</p>
                <p className="text-xl font-bold">Janeiro/2026</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Executive Timeline - Gantt Style */}
      <ExecutiveTimeline />

      {/* Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Detalhamento por Fase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Fase</th>
                  <th className="text-left py-3 px-4">Descrição</th>
                  <th className="text-center py-3 px-4">Mês</th>
                  <th className="text-right py-3 px-4">%</th>
                  <th className="text-right py-3 px-4">Valor (R$)</th>
                  <th className="text-center py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {disbursementData.map((item) => (
                  <tr key={item.phase} className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-semibold">{item.phase}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.name}</td>
                    <td className="text-center py-3 px-4">{item.month}</td>
                    <td className="text-right py-3 px-4">{item.percentage}%</td>
                    <td className="text-right py-3 px-4 font-medium">{formatCurrency(item.value)}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className="bg-primary/10 text-primary">
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold bg-muted/30">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">Implantação</td>
                  <td className="text-center py-3 px-4">Jan-Jul/26</td>
                  <td className="text-right py-3 px-4">60%</td>
                  <td className="text-right py-3 px-4">{formatCurrency(totalImplantation)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section7;
