import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phases } from "@/data/contractData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Clock, Circle, Milestone } from "lucide-react";

const Section5 = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Concluída": return <CheckCircle className="w-5 h-5 text-accent" />;
      case "Em andamento": return <Clock className="w-5 h-5 text-secondary" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-accent/10 text-accent";
      case "Em andamento": return "bg-secondary/20 text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const completedPhases = phases.filter(p => p.status === "Concluída").length;
  const totalPercentage = phases.filter(p => p.status === "Concluída").reduce((acc, p) => acc + p.percentage, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 5</Badge>
        <h1 className="text-3xl font-bold text-foreground">Fases do Projeto e Marcos</h1>
        <p className="text-muted-foreground mt-2">
          Detalhamento das entregas contratuais e critérios de aceite
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
                <p className="text-sm text-muted-foreground">Progresso Geral</p>
                <p className="text-3xl font-bold">{completedPhases}/{phases.length} fases</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground">Desembolso Acumulado</p>
              <p className="text-3xl font-bold text-accent">{totalPercentage}%</p>
            </div>
          </div>
          <div className="mt-4 h-3 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-accent rounded-full transition-all duration-1000"
              style={{ width: `${totalPercentage}%` }}
            />
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
                    {getStatusIcon(phase.status)}
                    <div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="font-mono">{phase.id}</Badge>
                        <span className="font-semibold">{phase.name}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={`text-xs ${getStatusColor(phase.status)}`}>
                          {phase.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{phase.percentage}% do valor</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-9 space-y-4">
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                    
                    <div>
                      <p className="text-sm font-semibold mb-2">Entregas e Evidências:</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        {phase.deliverables.map((deliverable, index) => (
                          <div 
                            key={index}
                            className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg text-sm"
                          >
                            <CheckCircle className={`w-4 h-4 ${
                              phase.status === "Concluída" ? "text-accent" : "text-muted-foreground"
                            }`} />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div>
                      <div className="flex justify-between text-xs text-muted-foreground mb-1">
                        <span>Progresso da fase</span>
                        <span>
                          {phase.status === "Concluída" ? "100%" : 
                           phase.status === "Em andamento" ? "60%" : "0%"}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            phase.status === "Concluída" ? "bg-accent" :
                            phase.status === "Em andamento" ? "bg-secondary" : "bg-muted"
                          }`}
                          style={{ 
                            width: phase.status === "Concluída" ? "100%" : 
                                   phase.status === "Em andamento" ? "60%" : "0%" 
                          }}
                        />
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

export default Section5;
