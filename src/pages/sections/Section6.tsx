import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phases } from "@/data/contractData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Circle, Milestone, Calendar } from "lucide-react";

const Section6 = () => {
  const totalPercentage = phases.reduce((acc, p) => acc + p.percentage, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 6</Badge>
        <h1 className="text-3xl font-bold text-foreground">Fases do Projeto e Marcos</h1>
        <p className="text-muted-foreground mt-2">
          Detalhamento das entregas contratuais e critérios de aceite - Previsão 2026
        </p>
      </div>

      {/* Summary Card */}
      <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Milestone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Total de Fases</p>
                <p className="text-3xl font-bold">{phases.length} fases</p>
                <p className="text-xs text-muted-foreground mt-1">Início: Janeiro/2026</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Desembolso na Implantação</p>
              <p className="text-3xl font-bold text-accent">{totalPercentage}%</p>
              <p className="text-xs text-muted-foreground mt-1">do valor total</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Phases Accordion */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Detalhamento das Fases</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {phases.map((phase) => (
              <AccordionItem key={phase.id} value={phase.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-4 text-left">
                    <Circle className="w-5 h-5 text-primary" />
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono">{phase.id}</Badge>
                        <span className="font-semibold">{phase.name}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className="text-xs bg-primary/10 text-primary">
                          Planejado
                        </Badge>
                        <span className="text-xs text-muted-foreground">{phase.percentage}% do valor</span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          <span>{phase.month}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-9 space-y-4">
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                    
                    <div>
                      <p className="text-sm font-semibold mb-2">Entregas Previstas:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {phase.deliverables.map((deliverable, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"
                          >
                            <Circle className="w-4 h-4 text-muted-foreground" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress bar - 0% for planned */}
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progresso da fase</span>
                        <span>0%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-primary/30" style={{ width: "0%" }} />
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section6;
