import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Users, FileCheck, MessageSquare, Briefcase, Settings, Wrench, Building2, Scale, FileText, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface PDFSection2Props {
  startPage: number;
  totalPages: number;
}

const PDFSection2 = ({ startPage, totalPages }: PDFSection2Props) => {
  const governanceLevels = [
    {
      level: "Estratégico",
      subtitle: "Direcionamento e Decisão",
      actors: ["Secretário de Educação", "Superintendente Executivo", "Diretor UTD"],
      responsibilities: ["Aprovação de mudanças estratégicas", "Decisão sobre aditivos", "Diretrizes de priorização", "Avaliação de desempenho global"],
      color: "bg-[#034ea2]",
      icon: Briefcase
    },
    {
      level: "Tático",
      subtitle: "Gestão da Execução",
      actors: ["Gerência Estratégica", "Gerência Operacional", "Coord. Redes", "Coord. Suporte"],
      responsibilities: ["Planejamento operacional", "Gestão de SLA e indicadores", "Consolidação de relatórios", "Interface entre níveis"],
      color: "bg-[#fdb913]",
      icon: Settings
    },
    {
      level: "Operacional",
      subtitle: "Execução e Fiscalização",
      actors: ["Fiscais Técnicos", "Equipes de Campo"],
      responsibilities: ["Execução técnica", "Registro de ocorrências", "Evidências de conformidade", "Comunicação de riscos"],
      color: "bg-[#007932]",
      icon: Wrench
    }
  ];

  const transversalLayer = [
    { name: "Assessoria Jurídica", icon: Scale },
    { name: "Assessoria Administrativa", icon: FileText },
    { name: "Controle Interno", icon: ShieldCheck }
  ];

  const channels = [
    { name: "Reuniões de Governança", frequency: "Mensal", icon: Users },
    { name: "Relatórios de Desempenho", frequency: "Mensal", icon: FileCheck },
    { name: "Sistema de Chamados", frequency: "Contínuo", icon: MessageSquare },
    { name: "Portal de Monitoramento", frequency: "Tempo real", icon: Network }
  ];

  return (
    <>
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Seção 2 - Modelo de Governança Contratual">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center gap-3 pb-2 border-b-2 border-primary">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">2</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seção 2</p>
              <h2 className="text-xl font-bold text-foreground">Modelo de Governança Contratual</h2>
            </div>
          </div>

          {/* Estrutura de Governança */}
          <Card className="border shadow-sm">
            <CardHeader className="py-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Network className="w-4 h-4 text-primary" />
                Estrutura de Governança
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="flex gap-4">
                {/* Camada Transversal */}
                <div className="w-32">
                  <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded p-2 text-white h-full">
                    <p className="text-[10px] font-bold text-center mb-2">Camada Transversal</p>
                    <div className="space-y-1">
                      {transversalLayer.map((item) => (
                        <div key={item.name} className="flex items-center gap-1 bg-white/10 rounded p-1">
                          <item.icon className="w-3 h-3" />
                          <span className="text-[8px]">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Níveis */}
                <div className="flex-1 space-y-2">
                  {governanceLevels.map((level) => (
                    <div key={level.level} className={`${level.color} rounded p-2 text-white`}>
                      <div className="flex items-center gap-2 mb-1">
                        <level.icon className="w-4 h-4" />
                        <span className="font-bold text-sm">Nível {level.level}</span>
                        <span className="text-[10px] opacity-80">— {level.subtitle}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {level.actors.map((actor) => (
                          <Badge key={actor} className="bg-white/20 text-white text-[8px] py-0">{actor}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsabilidades por Nível */}
          <Card className="border shadow-sm">
            <CardHeader className="py-2">
              <CardTitle className="text-sm">Responsabilidades por Nível</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <div className="grid grid-cols-3 gap-3">
                {governanceLevels.map((level) => (
                  <div key={level.level} className="border rounded overflow-hidden">
                    <div className={`${level.color} p-1.5 text-white flex items-center gap-1`}>
                      <level.icon className="w-3 h-3" />
                      <span className="text-xs font-semibold">{level.level}</span>
                    </div>
                    <div className="p-2">
                      <ul className="space-y-1">
                        {level.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-1 text-[9px]">
                            <CheckCircle2 className="w-2.5 h-2.5 text-green-600 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Canais de Comunicação e Fluxo Decisório */}
          <div className="grid grid-cols-2 gap-3">
            <Card className="border shadow-sm">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Canais de Comunicação</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="grid grid-cols-2 gap-2">
                  {channels.map((channel) => (
                    <div key={channel.name} className="text-center p-2 bg-muted/30 rounded">
                      <channel.icon className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-[9px] font-medium">{channel.name}</p>
                      <Badge variant="outline" className="mt-1 text-[8px]">{channel.frequency}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Fluxo Decisório</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="flex items-center justify-between px-2">
                  {["Identificação", "Análise", "Deliberação", "Execução", "Monitoramento"].map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className="flex flex-col items-center">
                        <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-[10px] font-bold">
                          {index + 1}
                        </div>
                        <p className="text-[8px] mt-1 text-center max-w-[45px]">{step}</p>
                      </div>
                      {index < 4 && <ArrowRight className="w-3 h-3 text-muted-foreground mx-0.5" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PDFPage>
    </>
  );
};

export default PDFSection2;
