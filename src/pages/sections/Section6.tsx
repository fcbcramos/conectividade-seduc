import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { disbursementData } from "@/data/contractData";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from "recharts";
import { Wallet, TrendingUp } from "lucide-react";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const Section6 = () => {
  const totalValue = disbursementData.reduce((acc, item) => acc + item.value, 0);
  const completedValue = disbursementData.filter(d => d.status === "Concluída").reduce((acc, item) => acc + item.value, 0);

  const getBarColor = (status: string) => {
    switch (status) {
      case "Concluída": return "hsl(150, 100%, 24%)";
      case "Em andamento": return "hsl(43, 98%, 53%)";
      default: return "hsl(214, 20%, 75%)";
    }
  };

  const pieData = [
    { name: "Concluído", value: completedValue, color: "hsl(150, 100%, 24%)" },
    { name: "Pendente", value: totalValue - completedValue, color: "hsl(214, 20%, 88%)" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 6</Badge>
        <h1 className="text-3xl font-bold text-foreground">Cronograma de Desembolso</h1>
        <p className="text-muted-foreground mt-2">
          Distribuição financeira por fase e acompanhamento de pagamentos
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
                <p className="text-xs text-muted-foreground uppercase">Valor Total</p>
                <p className="text-xl font-bold">{formatCurrency(totalValue)}</p>
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
                <p className="text-xs text-muted-foreground uppercase">Desembolsado</p>
                <p className="text-xl font-bold text-accent">{formatCurrency(completedValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <Wallet className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Pendente</p>
                <p className="text-xl font-bold">{formatCurrency(totalValue - completedValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <Card className="shadow-card lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Desembolso por Fase</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={disbursementData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(214, 20%, 88%)" />
                  <XAxis 
                    dataKey="phase" 
                    tick={{ fontSize: 12, fill: "hsl(215, 15%, 45%)" }}
                  />
                  <YAxis 
                    tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                    tick={{ fontSize: 11, fill: "hsl(215, 15%, 45%)" }}
                  />
                  <Tooltip 
                    formatter={(value: number) => [formatCurrency(value), "Valor"]}
                    contentStyle={{ borderRadius: "8px" }}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {disbursementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getBarColor(entry.status)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Distribuição</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip formatter={(value: number) => formatCurrency(value)} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

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
                  <th className="text-right py-3 px-4">Percentual</th>
                  <th className="text-right py-3 px-4">Valor (R$)</th>
                  <th className="text-center py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {disbursementData.map((item) => (
                  <tr key={item.phase} className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-medium">{item.phase}</td>
                    <td className="text-right py-3 px-4">{item.percentage}%</td>
                    <td className="text-right py-3 px-4">{formatCurrency(item.value)}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className={
                        item.status === "Concluída" ? "bg-accent/10 text-accent" :
                        item.status === "Em andamento" ? "bg-secondary/20 text-secondary-foreground" :
                        "bg-muted text-muted-foreground"
                      }>
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold bg-muted/30">
                  <td className="py-3 px-4">Total</td>
                  <td className="text-right py-3 px-4">100%</td>
                  <td className="text-right py-3 px-4">{formatCurrency(totalValue)}</td>
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

export default Section6;
