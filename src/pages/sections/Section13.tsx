import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, FileText, RefreshCw, Settings } from "lucide-react";

const Section13 = () => {
  const routines = [
    { name: "Reunião de Governança", frequency: "Mensal", participants: "SEDUC + Piauí Link", icon: Users },
    { name: "Relatório de Desempenho", frequency: "Mensal", participants: "Piauí Link", icon: FileText },
    { name: "Auditoria de SLA", frequency: "Trimestral", participants: "SEDUC", icon: RefreshCw },
    { name: "Revisão Contratual", frequency: "Anual", participants: "SEDUC + Piauí Link", icon: Settings }
  ];

  const meetingStructure = [
    { type: "Operacional", frequency: "Semanal", focus: "Acompanhamento de implantação e incidentes" },
    { type: "Tático", frequency: "Quinzenal", focus: "Análise de indicadores e ajustes de rota" },
    { type: "Estratégico", frequency: "Mensal", focus: "Decisões de alto nível e diretrizes" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 13</Badge>
        <h1 className="text-3xl font-bold text-foreground">Governança da Operação Contínua</h1>
        <p className="text-muted-foreground mt-2">
          Rotinas de acompanhamento e estrutura de governança durante a operação
        </p>
      </div>

      {/* Calendar of Routines */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary" />
            Calendário de Rotinas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {routines.map((routine) => (
              <div 
                key={routine.name}
                className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg border border-border/50"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <routine.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">{routine.name}</h3>
                <Badge variant="outline" className="mt-2 text-xs">{routine.frequency}</Badge>
                <p className="text-xs text-muted-foreground mt-2">{routine.participants}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Meeting Structure */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Estrutura de Reuniões
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {meetingStructure.map((meeting, index) => (
              <div 
                key={meeting.type}
                className={`p-4 rounded-lg border-l-4 ${
                  index === 0 ? "border-l-accent bg-accent/5" :
                  index === 1 ? "border-l-secondary bg-secondary/10" :
                  "border-l-primary bg-primary/5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Nível {meeting.type}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{meeting.focus}</p>
                  </div>
                  <Badge className={
                    index === 0 ? "bg-accent/10 text-accent" :
                    index === 1 ? "bg-secondary/20 text-secondary-foreground" :
                    "bg-primary/10 text-primary"
                  }>
                    {meeting.frequency}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Annual Timeline */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Linha do Tempo Anual</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-8">
              {[
                { month: "Jan-Mar", event: "Auditoria Q1", type: "audit" },
                { month: "Abr-Jun", event: "Auditoria Q2", type: "audit" },
                { month: "Jul", event: "Revisão Semestral", type: "review" },
                { month: "Jul-Set", event: "Auditoria Q3", type: "audit" },
                { month: "Out-Dez", event: "Auditoria Q4", type: "audit" },
                { month: "Dez", event: "Revisão Anual", type: "review" }
              ].map((item, index) => (
                <div key={item.month} className={`flex items-center gap-4 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Badge variant="outline">{item.month}</Badge>
                    <p className="font-medium mt-1">{item.event}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full z-10 ${
                    item.type === "review" ? "bg-primary" : "bg-accent"
                  }`} />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Governance Indicators */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Indicadores de Governança</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "Reuniões realizadas", value: "12/12", status: "100%" },
              { label: "Relatórios entregues", value: "11/12", status: "92%" },
              { label: "Auditorias concluídas", value: "3/4", status: "75%" },
              { label: "Decisões pendentes", value: "2", status: "Em análise" }
            ].map((indicator) => (
              <div key={indicator.label} className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">{indicator.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{indicator.label}</p>
                <Badge variant="outline" className="mt-2 text-xs">{indicator.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section13;
