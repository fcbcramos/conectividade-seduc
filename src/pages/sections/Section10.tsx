import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { slaMetrics } from "@/data/contractData";
import { CheckCircle, AlertTriangle, XCircle, Gauge, TrendingDown } from "lucide-react";

const Section10 = () => {
  const glosaRules = [
    { violation: "Disponibilidade < 99%", glosa: "5% do valor mensal", severity: "Alta" },
    { violation: "Latência > 100ms", glosa: "3% do valor mensal", severity: "Média" },
    { violation: "TMA > 6h", glosa: "2% do valor mensal", severity: "Média" },
    { violation: "Não entrega de relatório", glosa: "1% do valor mensal", severity: "Baixa" }
  ];

  const penalties = [
    { type: "Advertência", condition: "1ª ocorrência de descumprimento leve", icon: AlertTriangle },
    { type: "Multa 0,5%", condition: "Reincidência ou descumprimento moderado", icon: TrendingDown },
    { type: "Multa 2%", condition: "Descumprimento grave ou reiterado", icon: XCircle },
    { type: "Rescisão", condition: "Descumprimento total ou abandono", icon: XCircle }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 10</Badge>
        <h1 className="text-3xl font-bold text-foreground">Gestão de SLA, Glosas e Penalidades</h1>
        <p className="text-muted-foreground mt-2">
          Regras de aferição, cálculo de glosas e regime sancionatório
        </p>
      </div>

      {/* SLA Dashboard */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-primary" />
            Dashboard de SLA
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {slaMetrics.map((metric) => (
              <div 
                key={metric.metric}
                className={`p-4 rounded-lg border-2 text-center ${
                  metric.status === "Conforme" 
                    ? "border-accent/30 bg-accent/5" 
                    : "border-destructive/30 bg-destructive/5"
                }`}
              >
                <div className="flex justify-center mb-2">
                  {metric.status === "Conforme" ? (
                    <CheckCircle className="w-8 h-8 text-accent" />
                  ) : (
                    <XCircle className="w-8 h-8 text-destructive" />
                  )}
                </div>
                <p className="text-xs text-muted-foreground truncate">{metric.metric}</p>
                <p className="text-xl font-bold mt-1">{metric.current}</p>
                <p className="text-xs text-muted-foreground">Meta: {metric.target}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Glosa Rules */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Matriz de Glosas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {glosaRules.map((rule) => (
                <div 
                  key={rule.violation}
                  className={`p-4 rounded-lg border-l-4 ${
                    rule.severity === "Alta" ? "border-l-destructive bg-destructive/5" :
                    rule.severity === "Média" ? "border-l-secondary bg-secondary/10" :
                    "border-l-muted bg-muted/30"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm">{rule.violation}</p>
                      <p className="text-xs text-muted-foreground mt-1">Desconto: {rule.glosa}</p>
                    </div>
                    <Badge className={
                      rule.severity === "Alta" ? "bg-destructive/10 text-destructive" :
                      rule.severity === "Média" ? "bg-secondary/20 text-secondary-foreground" :
                      "bg-muted text-muted-foreground"
                    }>
                      {rule.severity}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Penalties */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Regime Sancionatório</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {penalties.map((penalty, index) => (
                <div 
                  key={penalty.type}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    index === 0 ? "bg-secondary/20" :
                    index === 1 ? "bg-secondary" :
                    index === 2 ? "bg-destructive/80" :
                    "bg-destructive"
                  }`}>
                    <penalty.icon className={`w-5 h-5 ${
                      index === 0 ? "text-secondary-foreground" : "text-white"
                    }`} />
                  </div>
                  <div>
                    <p className="font-semibold">{penalty.type}</p>
                    <p className="text-sm text-muted-foreground">{penalty.condition}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Calculation Formula */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Fórmula de Cálculo de Glosa</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted/30 p-6 rounded-lg font-mono text-center">
            <p className="text-lg">
              <span className="text-primary font-bold">Glosa</span> = 
              (Meta<sub>SLA</sub> - Resultado<sub>Aferido</sub>) × 
              <span className="text-accent font-bold"> Fator</span> × 
              Valor<sub>Mensal</sub>
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <p className="font-semibold text-primary">Meta SLA</p>
              <p className="text-sm text-muted-foreground">Valor contratual definido</p>
            </div>
            <div className="text-center p-4 bg-accent/5 rounded-lg">
              <p className="font-semibold text-accent">Fator</p>
              <p className="text-sm text-muted-foreground">Peso por tipo de métrica</p>
            </div>
            <div className="text-center p-4 bg-secondary/10 rounded-lg">
              <p className="font-semibold">Valor Mensal</p>
              <p className="text-sm text-muted-foreground">Base de cálculo</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section10;
