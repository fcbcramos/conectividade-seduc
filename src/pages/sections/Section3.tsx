import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Key, Headphones, CheckCircle } from "lucide-react";
import SolutionArchitecture from "@/components/dashboard/SolutionArchitecture";
import NetworkTopology from "@/components/dashboard/NetworkTopology";

const Section3 = () => {
  const turnKeyResponsibilities = [
    "Site Survey (projeto executivo)",
    "Adequação de infraestrutura física (cabeamento/elétrica)",
    "Instalação e configuração lógica",
    "Manutenção preventiva e corretiva",
    "Substituição de equipamentos (RMA)",
    "Atualização tecnológica"
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 3</Badge>
        <h1 className="text-3xl font-bold text-foreground">Especificações Técnicas da Solução</h1>
        <p className="text-muted-foreground mt-2">
          Visão geral da arquitetura tecnológica e componentes da solução de conectividade
        </p>
      </div>

      {/* Introduction Card */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Server className="w-5 h-5 text-primary" />
            Visão Geral
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A solução tecnológica objeto desta contratação foi concebida como um <strong className="text-foreground">ecossistema integrado de alta disponibilidade, segurança e performance</strong>, estruturado para prover conectividade fim a fim (end-to-end) desde o Core da internet até o dispositivo do aluno em sala de aula. A arquitetura de referência é composta por camadas funcionais interdependentes, cuja integração e interoperabilidade são responsabilidade integral da Contratada.
          </p>
        </CardContent>
      </Card>

      {/* Solution Architecture Diagram */}
      <SolutionArchitecture />

      {/* Network Topology Diagram */}
      <NetworkTopology />

      {/* Provisioning and Sustainability Model Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Modelo de Provisionamento e Sustentação
        </h2>

        {/* Turn-Key/HaaS Card */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#fdb913' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Key className="w-5 h-5" style={{ color: '#fdb913' }} />
              Modelo de Entrega Turn-Key / HaaS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A solução será entregue na modalidade <strong className="text-foreground">Turn-Key (chave na mão)</strong> e operada como <strong className="text-foreground">Hardware as a Service (HaaS)</strong>. Isso implica que a Contratada é responsável por todo o ciclo de vida dos equipamentos e serviços.
            </p>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Responsabilidades da Contratada:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {turnKeyResponsibilities.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#007932' }} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NOC/Service Desk Card */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#007932' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Headphones className="w-5 h-5" style={{ color: '#007932' }} />
              Centro de Operações (NOC / Service Desk)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A operação é suportada por um <strong className="text-foreground">Centro de Gerência de Rede (NOC)</strong> e uma estrutura de <strong className="text-foreground">Service Desk multinível</strong>, assegurando a continuidade do serviço.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="text-white" style={{ backgroundColor: '#034ea2' }}>Proativo</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detecção antecipada de falhas através de monitoramento contínuo e alertas automatizados
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="text-white" style={{ backgroundColor: '#ef4123' }}>Reativo</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atendimento a incidentes com resposta rápida e escalonamento multinível conforme SLAs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Section3;
