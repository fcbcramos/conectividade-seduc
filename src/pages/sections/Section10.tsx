import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { measurementDimensions } from "@/data/contractData";
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts";
import { Gauge, Wifi, Globe, Headphones, Activity, Info, ArrowRight } from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const Section10 = () => {
  const radarData = [
    { dimension: "Disponibilidade", value: 0, fullMark: 100, meta: 99.5 },
    { dimension: "Latência", value: 0, fullMark: 100, meta: 100 },
    { dimension: "Jitter", value: 0, fullMark: 100, meta: 100 },
    { dimension: "Throughput", value: 0, fullMark: 100, meta: 100 },
    { dimension: "TMA", value: 0, fullMark: 100, meta: 100 },
    { dimension: "TMR", value: 0, fullMark: 100, meta: 100 }
  ];

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    "WAN": Globe,
    "LAN/WLAN": Wifi,
    "Suporte": Headphones
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={11} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 11</Badge>
        <h1 className="text-3xl font-bold text-foreground">Instrumentos de Medição</h1>
        <p className="text-muted-foreground mt-2">
          Ferramentas e metodologias para aferição da qualidade dos serviços
        </p>
      </div>

      {/* SIMET/SQS Card */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Sondas de Qualidade - SIMET/SQS
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Sistema de medição automatizada instalado nas unidades escolares para coleta contínua 
            de métricas de qualidade da conexão, permitindo aferição objetiva dos SLAs contratuais.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="text-2xl font-bold text-primary">24/7</p>
              <p className="text-xs text-muted-foreground">Monitoramento</p>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <p className="text-2xl font-bold text-accent">631</p>
              <p className="text-xs text-muted-foreground">Sondas planejadas</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="text-2xl font-bold">Tempo real</p>
              <p className="text-xs text-muted-foreground">Coleta de dados</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Referência Cruzada - Seção 11 */}
      <Alert className="border-primary/30 bg-primary/5">
        <Info className="h-4 w-4 text-primary" />
        <AlertDescription className="text-sm">
          <span className="font-semibold">Instrumento Oficial de Medição:</span> A Sonda SIMET/SQS constitui a 
          <span className="font-semibold text-primary"> "verdade oficial"</span> para aferição dos indicadores técnicos (IC-1 a IC-4), 
          sobrepondo-se a relatórios manuais ou sistemas proprietários da Contratada.
          <span className="flex items-center gap-1 mt-2 text-primary font-medium">
            <ArrowRight className="h-3 w-3" />
            Metodologia completa e fórmulas de cálculo definidas na Seção 11 — Gestão de SLA, Glosas e Penalidades
          </span>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Gauge className="w-5 h-5 text-primary" />
              Metas de Qualidade por Dimensão
            </CardTitle>
            <p className="text-xs text-muted-foreground">Valores a aferir após início da execução (Mar/2026)</p>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(214, 20%, 88%)" />
                  <PolarAngleAxis 
                    dataKey="dimension" 
                    tick={{ fontSize: 11, fill: "hsl(215, 15%, 45%)" }}
                  />
                  <PolarRadiusAxis 
                    angle={30} 
                    domain={[0, 100]}
                    tick={{ fontSize: 10, fill: "hsl(215, 15%, 45%)" }}
                  />
                  <Radar
                    name="Índice"
                    dataKey="value"
                    stroke="hsl(213, 97%, 32%)"
                    fill="hsl(213, 97%, 32%)"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Dimensions Cards */}
        <div className="space-y-4">
          {measurementDimensions.map((dimension) => {
            const Icon = iconMap[dimension.name] || Activity;
            return (
              <Card key={dimension.name} className="shadow-card">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{dimension.name}</h3>
                        <Badge variant="outline" className="text-xs">{dimension.tool}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{dimension.description}</p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {dimension.metrics.map((metric) => (
                          <Badge key={metric} className="bg-primary/10 text-primary text-xs">
                            {metric}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Metrics Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Métricas Auditáveis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left py-3 px-4">Métrica</th>
                  <th className="text-center py-3 px-4">Unidade</th>
                  <th className="text-center py-3 px-4">Meta SLA</th>
                  <th className="text-center py-3 px-4">Método de Coleta</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { metric: "Disponibilidade", unit: "%", target: "≥99.5%", method: "SIMET" },
                  { metric: "Latência", unit: "ms", target: "≤80ms", method: "SIMET" },
                  { metric: "Jitter", unit: "ms", target: "≤30ms", method: "SIMET" },
                  { metric: "Perda de Pacotes", unit: "%", target: "≤1%", method: "SIMET" },
                  { metric: "TMA", unit: "horas", target: "≤4h", method: "Sistema de Chamados" },
                  { metric: "TMR", unit: "horas", target: "≤8h", method: "Sistema de Chamados" }
                ].map((item) => (
                  <tr key={item.metric} className="border-b hover:bg-muted/20">
                    <td className="py-3 px-4 font-medium">{item.metric}</td>
                    <td className="text-center py-3 px-4">{item.unit}</td>
                    <td className="text-center py-3 px-4">
                      <Badge variant="outline">{item.target}</Badge>
                    </td>
                    <td className="text-center py-3 px-4 text-muted-foreground">{item.method}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <SectionNavigation currentSection={11} />
    </div>
  );
};

export default Section10;
