import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Server, Key, Headphones, CheckCircle, Signal, Activity, Gauge, TrendingUp, Clock } from "lucide-react";

interface PDFSection3Props {
  startPage: number;
  totalPages: number;
}

const PDFSection3 = ({ startPage, totalPages }: PDFSection3Props) => {
  const turnKeyResponsibilities = [
    "Site Survey (projeto executivo)",
    "Adequação de infraestrutura física",
    "Instalação e configuração lógica",
    "Manutenção preventiva e corretiva",
    "Substituição de equipamentos (RMA)",
    "Atualização tecnológica"
  ];

  const individualMetrics = [
    { icon: Signal, title: "Status do Link", description: "UP/DOWN em tempo real" },
    { icon: Activity, title: "Qualidade do Enlace", description: "Latência, jitter, perda" },
    { icon: Gauge, title: "Conformidade", description: "Contratada vs entregue" },
    { icon: TrendingUp, title: "Saturação", description: "Consumo atual e pico" },
  ];

  const slaLevels = [
    { level: "Crítico", description: "Parada Total", ttr: "30 min", tmr: "4 horas", color: "#ef4123" },
    { level: "Alto", description: "Degradação Severa", ttr: "1 hora", tmr: "8 horas", color: "#fdb913" },
    { level: "Normal", description: "Solicitação/Dúvida", ttr: "4 horas", tmr: "24 horas", color: "#007932" }
  ];

  return (
    <>
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Seção 3 - Especificações Técnicas">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center gap-3 pb-2 border-b-2 border-primary">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">3</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seção 3</p>
              <h2 className="text-xl font-bold text-foreground">Especificações Técnicas da Solução</h2>
            </div>
          </div>

          {/* Visão Geral */}
          <Card className="border shadow-sm border-l-4 border-l-primary">
            <CardHeader className="py-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Server className="w-4 h-4 text-primary" />
                Visão Geral
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-[10px] leading-relaxed text-muted-foreground">
                Ecossistema integrado de alta disponibilidade, segurança e performance, estruturado para prover 
                conectividade fim a fim desde o Core da internet até o dispositivo do aluno em sala de aula.
              </p>
            </CardContent>
          </Card>

          {/* Turn-Key e NOC */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border shadow-sm border-l-4" style={{ borderLeftColor: '#fdb913' }}>
              <CardHeader className="py-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Key className="w-4 h-4" style={{ color: '#fdb913' }} />
                  Modelo Turn-Key / HaaS
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-[9px] text-muted-foreground mb-2">
                  Contratada responsável por todo o ciclo de vida dos equipamentos e serviços.
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {turnKeyResponsibilities.map((item) => (
                    <div key={item} className="flex items-start gap-1">
                      <CheckCircle className="w-2.5 h-2.5 mt-0.5" style={{ color: '#007932' }} />
                      <span className="text-[8px] text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm border-l-4" style={{ borderLeftColor: '#007932' }}>
              <CardHeader className="py-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Headphones className="w-4 h-4" style={{ color: '#007932' }} />
                  NOC / Service Desk
                </CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2 rounded bg-muted/50 border">
                    <Badge className="text-white text-[8px]" style={{ backgroundColor: '#034ea2' }}>Proativo</Badge>
                    <p className="text-[8px] text-muted-foreground mt-1">Detecção antecipada via monitoramento 24/7</p>
                  </div>
                  <div className="p-2 rounded bg-muted/50 border">
                    <Badge className="text-white text-[8px]" style={{ backgroundColor: '#ef4123' }}>Reativo</Badge>
                    <p className="text-[8px] text-muted-foreground mt-1">Atendimento a incidentes com escalonamento</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Métricas Individuais */}
          <Card className="border shadow-sm">
            <CardHeader className="py-2">
              <CardTitle className="text-sm">Visão Individual por Unidade Escolar (INEP)</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="grid grid-cols-4 gap-2">
                {individualMetrics.map((metric) => (
                  <div key={metric.title} className="p-2 rounded bg-muted/50 border text-center">
                    <metric.icon className="w-5 h-5 mx-auto mb-1" style={{ color: '#034ea2' }} />
                    <p className="text-[9px] font-medium">{metric.title}</p>
                    <p className="text-[8px] text-muted-foreground">{metric.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Níveis de SLA de Atendimento */}
          <Card className="border shadow-sm">
            <CardHeader className="py-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Níveis de Serviço (SLA) de Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-1.5 px-2">Nível</th>
                    <th className="text-left py-1.5 px-2">Descrição</th>
                    <th className="text-center py-1.5 px-2">TTR</th>
                    <th className="text-center py-1.5 px-2">TMR</th>
                  </tr>
                </thead>
                <tbody>
                  {slaLevels.map((level) => (
                    <tr key={level.level} className="border-b">
                      <td className="py-1.5 px-2">
                        <Badge style={{ backgroundColor: level.color }} className="text-white text-[8px]">{level.level}</Badge>
                      </td>
                      <td className="py-1.5 px-2 text-muted-foreground">{level.description}</td>
                      <td className="text-center py-1.5 px-2 font-semibold">{level.ttr}</td>
                      <td className="text-center py-1.5 px-2 font-semibold">{level.tmr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </PDFPage>
    </>
  );
};

export default PDFSection3;
