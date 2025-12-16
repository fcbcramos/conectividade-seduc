import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Users, FileCheck, MessageSquare, ArrowRight } from "lucide-react";

const Section2 = () => {
  const governanceStructure = [
    {
      level: "Estratégico",
      description: "Decisões de alto nível e diretrizes contratuais",
      actors: ["Secretário de Educação", "Diretor UTD"],
      color: "bg-primary"
    },
    {
      level: "Tático",
      description: "Planejamento e coordenação da execução",
      actors: ["Gerência Operacional", "Gerência Estratégica"],
      color: "bg-secondary"
    },
    {
      level: "Operacional",
      description: "Execução e fiscalização diária",
      actors: ["Fiscais Técnicos", "Equipe de Campo"],
      color: "bg-accent"
    }
  ];

  const channels = [
    { name: "Reuniões de Governança", frequency: "Mensal", icon: Users },
    { name: "Relatórios de Desempenho", frequency: "Mensal", icon: FileCheck },
    { name: "Sistema de Chamados", frequency: "Contínuo", icon: MessageSquare },
    { name: "Portal de Monitoramento", frequency: "Tempo real", icon: Network }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 2</Badge>
        <h1 className="text-3xl font-bold text-foreground">Modelo de Governança Contratual</h1>
        <p className="text-muted-foreground mt-2">
          Estrutura organizacional e processos decisórios para gestão do contrato
        </p>
      </div>

      {/* Governance Diagram */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-primary" />
            Estrutura de Governança
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {governanceStructure.map((level, index) => (
              <div key={level.level} className="relative">
                <div className={`${level.color} rounded-lg p-4 text-white`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">Nível {level.level}</h3>
                      <p className="text-sm opacity-90">{level.description}</p>
                    </div>
                    <div className="text-right">
                      {level.actors.map((actor) => (
                        <Badge key={actor} variant="secondary" className="ml-2 mb-1 bg-white/20 text-white hover:bg-white/30">
                          {actor}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                {index < governanceStructure.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Communication Channels */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Canais de Comunicação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {channels.map((channel) => (
              <div key={channel.name} className="text-center p-4 bg-muted/30 rounded-lg">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <channel.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-medium text-sm">{channel.name}</p>
                <Badge variant="outline" className="mt-2 text-xs">{channel.frequency}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Decision Flow */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Fluxo Decisório</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between flex-wrap gap-4">
            {["Identificação", "Análise", "Deliberação", "Execução", "Monitoramento"].map((step, index) => (
              <div key={step} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-sm mt-2 font-medium">{step}</p>
                </div>
                {index < 4 && <ArrowRight className="w-6 h-6 text-muted-foreground mx-2" />}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section2;
