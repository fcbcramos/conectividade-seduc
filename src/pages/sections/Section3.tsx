import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Server } from "lucide-react";
import SolutionArchitecture from "@/components/dashboard/SolutionArchitecture";

const Section3 = () => {
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
          <CardTitle className="flex items-center gap-2">
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
    </div>
  );
};

export default Section3;
