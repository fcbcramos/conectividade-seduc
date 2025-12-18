import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { basicInfo, kpiData, disbursementData, slaMetrics } from "@/data/contractData";
import { TrendingUp, Wallet, Calendar, Clock, Target, CheckCircle } from "lucide-react";

interface PDFDashboardProps {
  startPage: number;
  totalPages: number;
}

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

const PDFDashboard = ({ startPage, totalPages }: PDFDashboardProps) => {
  return (
    <>
      {/* Dashboard Page 1: KPIs e Resumo */}
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Dashboard Executivo">
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <Target className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Dashboard Executivo</h2>
              <p className="text-sm text-muted-foreground">Visão consolidada do contrato de conectividade</p>
            </div>
          </div>

          {/* Informações Básicas */}
          <Card className="border shadow-sm">
            <CardHeader className="py-3">
              <CardTitle className="text-sm">Informações do Contrato</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div>
                  <p className="text-muted-foreground">Processo</p>
                  <p className="font-semibold">{basicInfo.processNumber}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Unidade Demandante</p>
                  <p className="font-semibold">{basicInfo.requestingArea}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Modelo</p>
                  <p className="font-semibold">{kpiData.contractModel}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* KPIs Grid */}
          <div className="grid grid-cols-4 gap-3">
            <Card className="border shadow-sm">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Valor Total</p>
                    <p className="text-sm font-bold">{formatCurrency(kpiData.totalValue)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border shadow-sm">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-xs text-muted-foreground">Fonte Lei 14.172</p>
                    <p className="text-sm font-bold text-accent">{formatCurrency(kpiData.fonte14172)}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border shadow-sm">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Prazo</p>
                    <p className="text-sm font-bold">{kpiData.executionPeriod}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border shadow-sm">
              <CardContent className="p-3">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-xs text-muted-foreground">Início Previsto</p>
                    <p className="text-sm font-bold">{kpiData.startDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cronograma de Desembolso */}
          <Card className="border shadow-sm">
            <CardHeader className="py-3">
              <CardTitle className="text-sm">Cronograma de Desembolso - Fase de Implantação</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-2">Fase</th>
                    <th className="text-left py-2 px-2">Descrição</th>
                    <th className="text-center py-2 px-2">Mês</th>
                    <th className="text-right py-2 px-2">%</th>
                    <th className="text-right py-2 px-2">Valor</th>
                    <th className="text-center py-2 px-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {disbursementData.map((item) => (
                    <tr key={item.phase} className="border-b">
                      <td className="py-1.5 px-2 font-semibold">{item.phase}</td>
                      <td className="py-1.5 px-2 text-muted-foreground">{item.name}</td>
                      <td className="text-center py-1.5 px-2">{item.month}</td>
                      <td className="text-right py-1.5 px-2">{item.percentage}%</td>
                      <td className="text-right py-1.5 px-2 font-medium">{formatCurrency(item.value)}</td>
                      <td className="text-center py-1.5 px-2">
                        <Badge className="bg-primary/10 text-primary text-[10px]">{item.status}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* SLA Metrics */}
          <Card className="border shadow-sm">
            <CardHeader className="py-3">
              <CardTitle className="text-sm">Indicadores de Nível de Serviço (SLA)</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="grid grid-cols-6 gap-2">
                {slaMetrics.map((metric) => (
                  <div key={metric.metric} className="p-2 bg-muted/30 rounded text-center">
                    <p className="text-[10px] text-muted-foreground mb-1">{metric.metric}</p>
                    <p className="text-xs font-bold text-primary">{metric.target}</p>
                    <Badge variant="outline" className="mt-1 text-[9px]">{metric.status}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </PDFPage>
    </>
  );
};

export default PDFDashboard;
