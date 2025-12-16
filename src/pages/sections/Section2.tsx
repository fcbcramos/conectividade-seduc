import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Network, 
  Users, 
  FileCheck, 
  MessageSquare, 
  ArrowRight,
  ArrowLeftRight,
  Scale,
  FileText,
  ShieldCheck,
  Briefcase,
  Settings,
  Wrench,
  Building2,
  Calendar,
  Target,
  CheckCircle2,
  AlertTriangle,
  ClipboardList,
  UserCheck
} from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const Section2 = () => {
  const governanceLevels = [
    {
      level: "Estratégico",
      subtitle: "Direcionamento e Decisão",
      description: "Decisões de alto impacto, diretrizes contratuais e gestão institucional do contrato",
      actors: ["Secretário de Educação", "Superintendente Executivo", "Diretor UTD"],
      responsibilities: [
        "Aprovação de mudanças estratégicas",
        "Decisão sobre aditivos relevantes",
        "Diretrizes de priorização e expansão",
        "Avaliação executiva de desempenho global"
      ],
      color: "bg-[#034ea2]",
      icon: Briefcase
    },
    {
      level: "Tático",
      subtitle: "Gestão da Execução",
      description: "Planejamento, coordenação e controle da execução contratual",
      actors: ["Gerência Estratégica", "Gerência Operacional", "Coord. Redes", "Coord. Suporte"],
      responsibilities: [
        "Planejamento operacional",
        "Gestão de SLA e indicadores",
        "Consolidação de relatórios",
        "Tratamento de desvios recorrentes",
        "Interface entre Estratégico e Operacional"
      ],
      color: "bg-[#fdb913]",
      icon: Settings
    },
    {
      level: "Operacional",
      subtitle: "Execução e Fiscalização",
      description: "Execução diária, fiscalização técnica e coleta de evidências",
      actors: ["Fiscais Técnicos", "Equipes de Campo"],
      responsibilities: [
        "Execução técnica",
        "Registro de ocorrências",
        "Evidências de conformidade",
        "Validação de medições",
        "Comunicação de riscos e falhas"
      ],
      color: "bg-[#007932]",
      icon: Wrench
    }
  ];

  const transversalLayer = [
    {
      name: "Assessoria Jurídica",
      icon: Scale,
      functions: [
        "Pareceres sobre aditivos, penalidades e glosas",
        "Reequilíbrio econômico-financeiro",
        "Interpretação contratual",
        "Mitigação de risco jurídico",
        "Apoio aos fiscais e gestores"
      ]
    },
    {
      name: "Assessoria Administrativa",
      icon: FileText,
      functions: [
        "Validação de medições e faturamento",
        "Controle de prazos e marcos",
        "Gestão documental do contrato",
        "Instrução processual",
        "Conformidade administrativa"
      ]
    },
    {
      name: "Controle Interno / Governança",
      icon: ShieldCheck,
      functions: [
        "Auditoria de conformidade",
        "Avaliação de riscos",
        "Monitoramento de aderência às normas",
        "Acompanhamento de indicadores"
      ]
    }
  ];

  const committees = [
    {
      name: "Comitê de Governança do Contrato",
      composition: ["Representantes do Nível Estratégico", "Representantes do Nível Tático", "Assessoria Jurídica (consultiva)"],
      periodicity: "Mensal ou Bimestral",
      functions: ["Avaliação de desempenho", "Decisão sobre exceções", "Validação de mudanças relevantes"],
      icon: Building2,
      color: "border-[#034ea2]"
    },
    {
      name: "Comitê Técnico-Operacional",
      composition: ["Gerência Operacional", "Coordenações", "Fiscais Técnicos"],
      periodicity: "Semanal ou Quinzenal",
      functions: ["Acompanhamento da execução", "Tratamento de incidentes", "Ajustes operacionais"],
      icon: Users,
      color: "border-[#007932]"
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
      <SectionNavigation currentSection={2} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 2</Badge>
        <h1 className="text-3xl font-bold text-foreground">Modelo de Governança Contratual</h1>
        <p className="text-muted-foreground mt-2">
          Estrutura organizacional e processos decisórios para gestão do contrato
        </p>
      </div>

      {/* Institutional Text */}
      <Card className="shadow-card border-l-4 border-l-[#034ea2] bg-muted/30">
        <CardContent className="pt-6">
          <p className="text-sm text-foreground leading-relaxed italic">
            "A execução contratual será estruturada em níveis estratégico, tático e operacional, apoiados por uma 
            <strong> camada transversal de governança, compliance e controle</strong>, responsável por assegurar a 
            conformidade jurídica, administrativa e contratual, mitigando riscos e garantindo a aderência às normas 
            legais e às diretrizes institucionais."
          </p>
        </CardContent>
      </Card>

      {/* Main Governance Structure Diagram */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="w-5 h-5 text-primary" />
            Estrutura de Governança
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Transversal Layer - Left Side */}
            <div className="lg:w-1/4">
              <div className="bg-gradient-to-b from-purple-600 to-purple-800 rounded-lg p-4 text-white h-full flex flex-col">
                <div className="text-center mb-4">
                  <h3 className="font-bold text-sm uppercase tracking-wide">Camada Transversal</h3>
                  <p className="text-xs opacity-80 mt-1">Governança, Compliance e Controle</p>
                </div>
                <div className="space-y-3 flex-1">
                  {transversalLayer.map((item) => (
                    <div key={item.name} className="flex items-center gap-2 bg-white/10 rounded p-2">
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="text-xs font-medium">{item.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 text-center">
                  <ArrowLeftRight className="w-5 h-5 mx-auto opacity-70" />
                  <p className="text-xs opacity-70 mt-1">Atuação contínua</p>
                </div>
              </div>
            </div>

            {/* Governance Levels - Right Side */}
            <div className="lg:w-3/4 space-y-4">
              {governanceLevels.map((level, index) => (
                <div key={level.level} className="relative">
                  <div className={`${level.color} rounded-lg p-4 text-white`}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                        <level.icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-lg">Nível {level.level}</h3>
                          <span className="text-sm opacity-80">— {level.subtitle}</span>
                        </div>
                        <p className="text-sm opacity-90 mb-3">{level.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {level.actors.map((actor) => (
                            <Badge key={actor} variant="secondary" className="bg-white/20 text-white hover:bg-white/30 text-xs">
                              {actor}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {index < governanceLevels.length - 1 && (
                    <div className="flex justify-center py-2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Responsibilities by Level */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" />
            Responsabilidades por Nível
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {governanceLevels.map((level) => (
              <div key={level.level} className="border rounded-lg overflow-hidden">
                <div className={`${level.color} p-3 text-white`}>
                  <div className="flex items-center gap-2">
                    <level.icon className="w-4 h-4" />
                    <h4 className="font-semibold text-sm">{level.level}</h4>
                  </div>
                </div>
                <div className="p-3 bg-card">
                  <ul className="space-y-2">
                    {level.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
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

      {/* Transversal Layer Detail */}
      <Card className="shadow-card border-t-4 border-t-purple-600">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-purple-600" />
            Camada Transversal de Governança, Compliance e Controle
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-1">
            Atuação: Preventiva • Orientativa • Validatória • Corretiva
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {transversalLayer.map((item) => (
              <div key={item.name} className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-sm">{item.name}</h4>
                </div>
                <ul className="space-y-2">
                  {item.functions.map((func, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <Target className="w-3 h-3 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>{func}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Formal Governance Instances */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Instâncias Formais de Governança
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {committees.map((committee) => (
              <div key={committee.name} className={`border-2 ${committee.color} rounded-lg overflow-hidden`}>
                <div className="p-4 bg-muted/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <committee.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-bold text-sm">{committee.name}</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Composição</p>
                      <div className="flex flex-wrap gap-1">
                        {committee.composition.map((member, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {member}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-xs font-medium">{committee.periodicity}</span>
                    </div>
                    
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase mb-1">Funções</p>
                      <ul className="space-y-1">
                        {committee.functions.map((func, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs">
                            <UserCheck className="w-3 h-3 text-green-600" />
                            <span>{func}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
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

      <SectionNavigation currentSection={2} />
    </div>
  );
};

export default Section2;
