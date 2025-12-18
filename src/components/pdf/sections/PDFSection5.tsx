import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, PlayCircle, Settings, Monitor, CheckCircle, Circle } from "lucide-react";

interface PDFSection5Props {
  startPage: number;
  totalPages: number;
}

const PDFSection5 = ({ startPage, totalPages }: PDFSection5Props) => {
  const phases = [
    {
      name: "Mobilização",
      description: "Preparação inicial, planejamento e alocação de recursos",
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

  return (
    <>
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Seção 5 - Ciclo de Vida da Execução">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 pb-2 border-b-2 border-primary">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">5</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seção 5</p>
              <h2 className="text-xl font-bold text-foreground">Ciclo de Vida da Execução</h2>
            </div>
          </div>

          {/* Timeline Visual */}
          <Card className="border shadow-sm">
            <CardContent className="py-4">
              <div className="flex items-center justify-between">
                {phases.map((phase, index) => (
                  <div key={phase.name} className="flex items-center">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center">
                        <phase.icon className="w-5 h-5" />
                      </div>
                      <p className="font-semibold text-[10px] mt-1">{phase.name}</p>
                      <Badge variant="outline" className="mt-0.5 text-[8px]">{phase.duration}</Badge>
                      <span className="text-[8px] text-muted-foreground mt-0.5">{phase.period}</span>
                    </div>
                    {index < phases.length - 1 && (
                      <div className="h-0.5 w-8 bg-muted mx-1" />
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Phase Details Grid */}
          <div className="grid grid-cols-5 gap-2">
            {phases.map((phase) => (
              <Card key={phase.name} className="border shadow-sm">
                <CardHeader className="py-2 pb-1">
                  <div className="flex items-center gap-1">
                    <phase.icon className="w-4 h-4 text-muted-foreground" />
                    <CardTitle className="text-[10px]">{phase.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="py-2">
                  <p className="text-[8px] text-muted-foreground mb-1">{phase.description}</p>
                  <p className="text-[8px] font-medium text-primary mb-2">{phase.period}</p>
                  <div className="space-y-0.5">
                    {phase.activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-1 text-[8px]">
                        <Circle className="w-2 h-2 text-muted-foreground" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </PDFPage>
    </>
  );
};

export default PDFSection5;
