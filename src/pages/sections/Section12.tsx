import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { riskMatrix, Risk, RiskAction } from "@/data/contractData";
import { Shield, AlertTriangle, CheckCircle, ChevronDown, Target, Activity, Users, FileText, AlertCircle, TrendingUp } from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Section12 = () => {
  // Escalas de probabilidade e impacto conforme documento
  const probabilityScale = [
    { label: "Muito Alta", value: 0.90, description: "Evento esperado ou certo" },
    { label: "Alta", value: 0.70, description: "Evento muito provável" },
    { label: "Provável", value: 0.50, description: "Evento com chances razoáveis" },
    { label: "Pouco Provável", value: 0.30, description: "Evento improvável, mas possível" },
    { label: "Raro", value: 0.10, description: "Evento quase impossível" }
  ];

  const impactScale = [
    { label: "Muito Alto", value: 0.80, description: "Catastrófico" },
    { label: "Alto", value: 0.40, description: "Crítico" },
    { label: "Moderado", value: 0.20, description: "Significativo" },
    { label: "Baixo", value: 0.10, description: "Menor" },
    { label: "Muito Baixo", value: 0.05, description: "Insignificante" }
  ];

  // Matriz 5x5 para visualização
  const matrixCells = [
    // Muito Alta (0.90)
    { prob: 0.90, impact: 0.05, level: "Baixo" },
    { prob: 0.90, impact: 0.10, level: "Médio" },
    { prob: 0.90, impact: 0.20, level: "Médio" },
    { prob: 0.90, impact: 0.40, level: "Alto" },
    { prob: 0.90, impact: 0.80, level: "Alto" },
    // Alta (0.70)
    { prob: 0.70, impact: 0.05, level: "Baixo" },
    { prob: 0.70, impact: 0.10, level: "Baixo" },
    { prob: 0.70, impact: 0.20, level: "Médio" },
    { prob: 0.70, impact: 0.40, level: "Alto" },
    { prob: 0.70, impact: 0.80, level: "Alto" },
    // Provável (0.50)
    { prob: 0.50, impact: 0.05, level: "Baixo" },
    { prob: 0.50, impact: 0.10, level: "Baixo" },
    { prob: 0.50, impact: 0.20, level: "Médio" },
    { prob: 0.50, impact: 0.40, level: "Médio" },
    { prob: 0.50, impact: 0.80, level: "Alto" },
    // Pouco Provável (0.30)
    { prob: 0.30, impact: 0.05, level: "Baixo" },
    { prob: 0.30, impact: 0.10, level: "Baixo" },
    { prob: 0.30, impact: 0.20, level: "Baixo" },
    { prob: 0.30, impact: 0.40, level: "Médio" },
    { prob: 0.30, impact: 0.80, level: "Médio" },
    // Raro (0.10)
    { prob: 0.10, impact: 0.05, level: "Baixo" },
    { prob: 0.10, impact: 0.10, level: "Baixo" },
    { prob: 0.10, impact: 0.20, level: "Baixo" },
    { prob: 0.10, impact: 0.40, level: "Baixo" },
    { prob: 0.10, impact: 0.80, level: "Baixo" }
  ];

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "Alto": return "bg-destructive text-destructive-foreground";
      case "Médio": return "bg-secondary text-secondary-foreground";
      default: return "bg-accent text-accent-foreground";
    }
  };

  const getRiskLevelBgColor = (level: string) => {
    switch (level) {
      case "Alto": return "bg-destructive/80";
      case "Médio": return "bg-secondary/80";
      default: return "bg-accent/30";
    }
  };

  const getPhaseColor = (phase: string) => {
    return phase === "PCTIC" 
      ? "bg-gov-blue/10 text-gov-blue border-gov-blue/30" 
      : "bg-gov-green/10 text-gov-green border-gov-green/30";
  };

  const getTreatmentIcon = (treatment: string) => {
    return treatment === "Mitigar" ? Shield : CheckCircle;
  };

  // Contar riscos por célula da matriz
  const countRisksInCell = (prob: number, impact: number) => {
    return riskMatrix.filter(r => r.probability === prob && r.impact === impact).length;
  };

  // Estatísticas
  const risksByLevel = {
    alto: riskMatrix.filter(r => r.riskLevel === "Alto").length,
    medio: riskMatrix.filter(r => r.riskLevel === "Médio").length,
    baixo: riskMatrix.filter(r => r.riskLevel === "Baixo").length
  };

  const risksByPhase = {
    pctic: riskMatrix.filter(r => r.phase === "PCTIC").length,
    gctic: riskMatrix.filter(r => r.phase === "GCTIC").length
  };

  const impactLabels = ["Muito Baixo", "Baixo", "Moderado", "Alto", "Muito Alto"];
  const impactValues = [0.05, 0.10, 0.20, 0.40, 0.80];
  const probLabels = ["Muito Alta", "Alta", "Provável", "Pouco Provável", "Raro"];
  const probValues = [0.90, 0.70, 0.50, 0.30, 0.10];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={12} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 12</Badge>
        <h1 className="text-3xl font-bold text-foreground">Gestão de Riscos</h1>
        <p className="text-muted-foreground mt-2">
          Matriz de Riscos e Responsabilidades conforme Lei nº 14.133/2021
        </p>
      </div>

      {/* Introdução */}
      <Card className="shadow-card">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            A Matriz de Riscos apresenta os eventos de risco identificados nas fases de <strong>Planejamento da Contratação de TIC (PCTIC)</strong> e <strong>Gestão do Contrato de TIC (GCTIC)</strong>, 
            classificados segundo sua probabilidade de ocorrência e impacto potencial. Para cada risco são definidas ações preventivas e de contingência, 
            bem como os responsáveis por sua execução, em conformidade com a Lei nº 14.133/2021.
          </p>
        </CardContent>
      </Card>

      {/* Resumo por Nível e Fase */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-foreground">{riskMatrix.length}</p>
            <p className="text-xs text-muted-foreground">Total de Riscos</p>
          </CardContent>
        </Card>
        <Card className="shadow-card border-l-4 border-l-destructive">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-destructive">{risksByLevel.alto}</p>
            <p className="text-xs text-muted-foreground">Nível Alto</p>
          </CardContent>
        </Card>
        <Card className="shadow-card border-l-4 border-l-secondary">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-secondary">{risksByLevel.medio}</p>
            <p className="text-xs text-muted-foreground">Nível Médio</p>
          </CardContent>
        </Card>
        <Card className="shadow-card border-l-4 border-l-accent">
          <CardContent className="pt-4 text-center">
            <p className="text-3xl font-bold text-accent">{risksByLevel.baixo}</p>
            <p className="text-xs text-muted-foreground">Nível Baixo</p>
          </CardContent>
        </Card>
        <Card className="shadow-card">
          <CardContent className="pt-4 text-center">
            <div className="flex justify-center gap-4">
              <div>
                <p className="text-lg font-bold text-gov-blue">{risksByPhase.pctic}</p>
                <p className="text-xs text-muted-foreground">PCTIC</p>
              </div>
              <div className="border-l pl-4">
                <p className="text-lg font-bold text-gov-green">{risksByPhase.gctic}</p>
                <p className="text-xs text-muted-foreground">GCTIC</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Escalas de Probabilidade e Impacto */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Activity className="w-4 h-4 text-primary" />
              Escala de Probabilidade
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">Nível</TableHead>
                  <TableHead className="w-16 text-center">Peso</TableHead>
                  <TableHead>Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {probabilityScale.map((p) => (
                  <TableRow key={p.label}>
                    <TableCell className="font-medium text-xs">{p.label}</TableCell>
                    <TableCell className="text-center text-xs">{(p.value * 100).toFixed(0)}%</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{p.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm flex items-center gap-2">
              <Target className="w-4 h-4 text-primary" />
              Escala de Impacto
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-24">Nível</TableHead>
                  <TableHead className="w-16 text-center">Peso</TableHead>
                  <TableHead>Descrição</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {impactScale.map((i) => (
                  <TableRow key={i.label}>
                    <TableCell className="font-medium text-xs">{i.label}</TableCell>
                    <TableCell className="text-center text-xs">{(i.value * 100).toFixed(0)}%</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{i.description}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Matriz Visual 5x5 */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-primary" />
            Matriz de Riscos (Probabilidade × Impacto)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-28 p-2 text-xs font-medium text-muted-foreground text-left">Probabilidade</th>
                  {impactLabels.map((label, i) => (
                    <th key={label} className="p-2 text-xs font-medium text-center">
                      <div>{label}</div>
                      <div className="text-muted-foreground font-normal">({(impactValues[i] * 100).toFixed(0)}%)</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {probLabels.map((probLabel, pi) => (
                  <tr key={probLabel}>
                    <td className="p-2 text-xs font-medium">
                      <div>{probLabel}</div>
                      <div className="text-muted-foreground font-normal">({(probValues[pi] * 100).toFixed(0)}%)</div>
                    </td>
                    {impactValues.map((impactVal, ii) => {
                      const cell = matrixCells.find(c => c.prob === probValues[pi] && c.impact === impactVal);
                      const count = countRisksInCell(probValues[pi], impactVal);
                      const risksInCell = riskMatrix.filter(r => r.probability === probValues[pi] && r.impact === impactVal);
                      return (
                        <td key={`${pi}-${ii}`} className="p-1">
                          <div 
                            className={`h-14 rounded-lg flex flex-col items-center justify-center ${getRiskLevelBgColor(cell?.level || "Baixo")}`}
                            title={risksInCell.map(r => r.id).join(", ")}
                          >
                            {count > 0 && (
                              <>
                                <span className="font-bold text-lg">{count}</span>
                                <span className="text-[10px] opacity-80">
                                  {risksInCell.map(r => r.id).join(", ")}
                                </span>
                              </>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-accent/30" />
              <span>Baixo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-secondary/80" />
              <span>Médio</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-destructive/80" />
              <span>Alto</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabela Resumo de Riscos */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="w-5 h-5 text-primary" />
            Resumo dos Riscos Identificados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16">ID</TableHead>
                  <TableHead>Risco</TableHead>
                  <TableHead className="w-20 text-center">Fase</TableHead>
                  <TableHead className="w-16 text-center">P</TableHead>
                  <TableHead className="w-16 text-center">I</TableHead>
                  <TableHead className="w-20 text-center">Score</TableHead>
                  <TableHead className="w-20 text-center">Nível</TableHead>
                  <TableHead className="w-20 text-center">Tratamento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {riskMatrix.map((risk) => (
                  <TableRow key={risk.id}>
                    <TableCell className="font-mono font-bold">{risk.id}</TableCell>
                    <TableCell className="text-sm">{risk.risk}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant="outline" className={`text-xs ${getPhaseColor(risk.phase)}`}>
                        {risk.phase}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-xs">{(risk.probability * 100).toFixed(0)}%</TableCell>
                    <TableCell className="text-center text-xs">{(risk.impact * 100).toFixed(0)}%</TableCell>
                    <TableCell className="text-center text-xs font-mono">{risk.riskScore.toFixed(2)}</TableCell>
                    <TableCell className="text-center">
                      <Badge className={`text-xs ${getRiskLevelColor(risk.riskLevel)}`}>
                        {risk.riskLevel}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center text-xs">{risk.treatment}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Cards Detalhados por Risco */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-primary" />
          Detalhamento dos Riscos
        </h2>
        
        <Accordion type="multiple" className="space-y-3">
          {riskMatrix.map((risk) => {
            const TreatmentIcon = getTreatmentIcon(risk.treatment);
            return (
              <AccordionItem 
                key={risk.id} 
                value={risk.id}
                className="border rounded-lg shadow-card overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/30">
                  <div className="flex items-center gap-4 w-full">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${getRiskLevelColor(risk.riskLevel)}`}>
                      <span className="font-bold text-sm">{risk.id}</span>
                    </div>
                    <div className="flex-1 text-left">
                      <p className="font-medium text-sm">{risk.risk}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="outline" className={`text-xs ${getPhaseColor(risk.phase)}`}>
                          {risk.phase}
                        </Badge>
                        <Badge className={`text-xs ${getRiskLevelColor(risk.riskLevel)}`}>
                          {risk.riskLevel}
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                          P: {risk.probabilityLabel} | I: {risk.impactLabel}
                        </span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="space-y-4 pt-2">
                    {/* Métricas */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      <div className="bg-muted/30 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground">Probabilidade</p>
                        <p className="font-bold">{(risk.probability * 100).toFixed(0)}%</p>
                        <p className="text-xs text-muted-foreground">{risk.probabilityLabel}</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground">Impacto</p>
                        <p className="font-bold">{(risk.impact * 100).toFixed(0)}%</p>
                        <p className="text-xs text-muted-foreground">{risk.impactLabel}</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground">Score (P×I)</p>
                        <p className="font-bold font-mono">{risk.riskScore.toFixed(2)}</p>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground">Tratamento</p>
                        <div className="flex items-center justify-center gap-1">
                          <TreatmentIcon className="w-4 h-4" />
                          <p className="font-bold">{risk.treatment}</p>
                        </div>
                      </div>
                    </div>

                    {/* Dano Potencial */}
                    <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-3">
                      <p className="text-xs font-medium text-destructive mb-1">Dano Potencial</p>
                      <p className="text-sm text-muted-foreground">{risk.damage}</p>
                    </div>

                    {/* Ações Preventivas */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-gov-green/10 px-3 py-2 border-b flex items-center gap-2">
                        <Shield className="w-4 h-4 text-gov-green" />
                        <span className="text-sm font-medium text-gov-green">Ações Preventivas</span>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-24">ID</TableHead>
                            <TableHead>Ação</TableHead>
                            <TableHead className="w-40">Responsável</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {risk.preventiveActions.map((action) => (
                            <TableRow key={action.id}>
                              <TableCell className="font-mono text-xs">{action.id}</TableCell>
                              <TableCell className="text-sm">{action.action}</TableCell>
                              <TableCell className="text-xs text-muted-foreground">{action.responsible}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Ações de Contingência */}
                    <div className="border rounded-lg overflow-hidden">
                      <div className="bg-secondary/20 px-3 py-2 border-b flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-secondary" />
                        <span className="text-sm font-medium text-secondary-foreground">Ações de Contingência</span>
                      </div>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-24">ID</TableHead>
                            <TableHead>Ação</TableHead>
                            <TableHead className="w-40">Responsável</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {risk.contingencyActions.map((action) => (
                            <TableRow key={action.id}>
                              <TableCell className="font-mono text-xs">{action.id}</TableCell>
                              <TableCell className="text-sm">{action.action}</TableCell>
                              <TableCell className="text-xs text-muted-foreground">{action.responsible}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      <SectionNavigation currentSection={12} />
    </div>
  );
};

export default Section12;
