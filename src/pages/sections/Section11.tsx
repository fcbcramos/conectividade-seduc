import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { riskMatrix } from "@/data/contractData";
import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

const Section11 = () => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Alto": return "bg-destructive/10 text-destructive border-destructive/30";
      case "Médio": return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      default: return "bg-muted text-muted-foreground border-muted";
    }
  };

  const getProbabilityColor = (prob: string) => {
    switch (prob) {
      case "Alta": return "bg-destructive";
      case "Média": return "bg-secondary";
      default: return "bg-accent";
    }
  };

  // Risk matrix visualization data
  const matrixData = [
    { prob: "Alta", low: 0, med: 0, high: 0 },
    { prob: "Média", low: 0, med: 2, high: 0 },
    { prob: "Baixa", low: 0, med: 1, high: 2 }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 11</Badge>
        <h1 className="text-3xl font-bold text-foreground">Gestão de Riscos</h1>
        <p className="text-muted-foreground mt-2">
          Identificação, análise e estratégias de mitigação de riscos contratuais
        </p>
      </div>

      {/* Risk Matrix Visual */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Matriz de Riscos (Probabilidade x Impacto)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="w-24"></th>
                  <th className="text-center p-3 text-sm font-medium">Baixo</th>
                  <th className="text-center p-3 text-sm font-medium">Médio</th>
                  <th className="text-center p-3 text-sm font-medium">Alto</th>
                </tr>
              </thead>
              <tbody>
                {matrixData.map((row) => (
                  <tr key={row.prob}>
                    <td className="text-sm font-medium p-3">{row.prob}</td>
                    <td className="p-2">
                      <div className={`h-16 rounded-lg flex items-center justify-center ${
                        row.prob === "Alta" ? "bg-secondary/30" :
                        row.prob === "Média" ? "bg-accent/20" : "bg-accent/10"
                      }`}>
                        {row.low > 0 && <span className="font-bold text-lg">{row.low}</span>}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className={`h-16 rounded-lg flex items-center justify-center ${
                        row.prob === "Alta" ? "bg-destructive/30" :
                        row.prob === "Média" ? "bg-secondary/30" : "bg-secondary/20"
                      }`}>
                        {row.med > 0 && <span className="font-bold text-lg">{row.med}</span>}
                      </div>
                    </td>
                    <td className="p-2">
                      <div className={`h-16 rounded-lg flex items-center justify-center ${
                        row.prob === "Alta" ? "bg-destructive" :
                        row.prob === "Média" ? "bg-destructive/50" : "bg-destructive/30"
                      }`}>
                        {row.high > 0 && <span className="font-bold text-lg text-white">{row.high}</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Eixo X: Impacto | Eixo Y: Probabilidade
          </p>
        </CardContent>
      </Card>

      {/* Risk Cards */}
      <div className="space-y-4">
        {riskMatrix.map((risk) => (
          <Card key={risk.id} className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getProbabilityColor(risk.probability)}`}>
                  <span className="text-white font-bold">{risk.id}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h3 className="font-semibold">{risk.risk}</h3>
                    <div className="flex gap-2">
                      <Badge variant="outline">{risk.category}</Badge>
                      <Badge className={getImpactColor(risk.impact)}>
                        Impacto {risk.impact}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 mt-3 text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 rounded-full ${getProbabilityColor(risk.probability)}`} />
                      <span className="text-muted-foreground">Probabilidade: {risk.probability}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-start gap-2">
                      <Shield className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-accent">Estratégia de Mitigação</p>
                        <p className="text-sm text-muted-foreground mt-1">{risk.mitigation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Risk Categories */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Categorias de Risco</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Operacional", "Financeiro", "Tecnológico", "Técnico"].map((category) => {
              const count = riskMatrix.filter(r => r.category === category).length;
              return (
                <div key={category} className="text-center p-4 bg-muted/30 rounded-lg">
                  <p className="text-2xl font-bold text-primary">{count}</p>
                  <p className="text-sm text-muted-foreground">{category}</p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section11;
