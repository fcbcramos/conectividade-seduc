import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, PlayCircle, Settings, Monitor, CheckCircle, Circle } from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const Section5 = () => {
  const phases = [
    {
      name: "Mobilização",
      description: "Preparação inicial, planejamento detalhado e alocação de recursos",
      icon: PlayCircle,
      duration: "2 meses",
      period: "Jan-Fev/2026",
      status: "Pendente",
      activities: ["Planejamento técnico", "Alocação de equipe", "Definição de cronograma"]
    },
    {
      name: "Implantação",
      description: "Instalação física da infraestrutura nas unidades escolares",
      icon: Settings,
      duration: "5 meses",
      period: "Mar-Jul/2026",
      status: "Pendente",
      activities: ["Instalação de links", "Configuração Wi-Fi", "Testes de qualidade"]
    },
    {
      name: "Estabilização",
      description: "Ajustes finos e validação do funcionamento",
      icon: Clock,
      duration: "5 meses",
      period: "Ago-Dez/2026",
      status: "Pendente",
      activities: ["Otimização de rede", "Correção de falhas", "Validação de SLAs"]
    },
    {
      name: "Operação",
      description: "Funcionamento pleno com monitoramento contínuo",
      icon: Monitor,
      duration: "24 meses",
      period: "Jan/2027-Dez/2028",
      status: "Pendente",
      activities: ["Monitoramento 24x7", "Suporte técnico", "Manutenção preventiva"]
    },
    {
      name: "Encerramento",
      description: "Finalização do contrato e transferência de conhecimento",
      icon: CheckCircle,
      duration: "3 meses",
      period: "Out-Dez/2028",
      status: "Pendente",
      activities: ["Documentação final", "Transferência de ativos", "Relatório de encerramento"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-accent/10 text-accent";
      case "Em andamento": return "bg-secondary/20 text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={5} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 5</Badge>
        <h1 className="text-3xl font-bold text-foreground">Ciclo de Vida da Execução</h1>
        <p className="text-muted-foreground mt-2">
          As cinco fases do ciclo de vida do contrato de conectividade
        </p>
      </div>

      {/* Timeline horizontal */}
      <Card className="shadow-card overflow-hidden">
        <CardContent className="p-6">
          <div className="flex overflow-x-auto pb-4">
            {phases.map((phase, index) => (
              <div key={phase.name} className="flex items-center min-w-[200px]">
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                    phase.status === "Concluída" ? "bg-accent text-accent-foreground" :
                    phase.status === "Em andamento" ? "bg-secondary text-secondary-foreground" :
                    "bg-muted text-muted-foreground"
                  }`}>
                    <phase.icon className="w-8 h-8" />
                  </div>
                  <p className="font-bold mt-3 text-center">{phase.name}</p>
                  <Badge variant="outline" className="mt-1 text-xs">{phase.duration}</Badge>
                  <span className="text-xs text-muted-foreground mt-1">{phase.period}</span>
                  <Badge className={`mt-2 text-xs ${getStatusColor(phase.status)}`}>
                    {phase.status}
                  </Badge>
                </div>
                {index < phases.length - 1 && (
                  <div className={`h-1 w-16 mx-2 ${
                    phase.status === "Concluída" ? "bg-accent" : "bg-muted"
                  }`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Phase Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {phases.map((phase) => (
          <Card key={phase.name} className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg flex items-center gap-2">
                  <phase.icon className={`w-5 h-5 ${
                    phase.status === "Concluída" ? "text-accent" :
                    phase.status === "Em andamento" ? "text-secondary" : "text-muted-foreground"
                  }`} />
                  {phase.name}
                </CardTitle>
                <Badge className={`text-xs ${getStatusColor(phase.status)}`}>
                  {phase.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">{phase.description}</p>
              <p className="text-xs font-medium text-primary mb-4">Período: {phase.period}</p>
              <div className="space-y-2">
                {phase.activities.map((activity) => (
                  <div key={activity} className="flex items-center gap-2 text-sm">
                    {phase.status === "Concluída" ? (
                      <CheckCircle className="w-4 h-4 text-accent" />
                    ) : (
                      <Circle className="w-4 h-4 text-muted-foreground" />
                    )}
                    {activity}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <SectionNavigation currentSection={5} />
    </div>
  );
};

export default Section5;
