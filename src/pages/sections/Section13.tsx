import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, Users, FileText, RefreshCw, Settings, FileSignature, 
  FolderKanban, ShieldCheck, LayoutDashboard, ArrowRight, Clock,
  Bell, CheckCircle2, AlertTriangle, TrendingUp, MapPin, Activity,
  Target, ClipboardList, Eye, BarChart3
} from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

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

  const contractLifecycle = [
    { phase: "Vigência", icon: Clock, description: "Controle de prazos" },
    { phase: "Aditivos", icon: FileText, description: "Alterações contratuais" },
    { phase: "Medições", icon: ClipboardList, description: "Aferição de entregas" },
    { phase: "Faturamento", icon: CheckCircle2, description: "Validação de pagamento" },
    { phase: "Penalidades", icon: AlertTriangle, description: "Glosas e multas" }
  ];

  const projectPhases = [
    { phase: "Iniciação", color: "bg-primary" },
    { phase: "Planejamento", color: "bg-[#fdb913]" },
    { phase: "Execução", color: "bg-[#007932]" },
    { phase: "Monitoramento", color: "bg-accent" },
    { phase: "Encerramento", color: "bg-[#ef4123]" }
  ];

  const auditTypes = [
    { type: "Técnica", description: "Conformidade de instalações e configurações", frequency: "Trimestral", color: "bg-primary" },
    { type: "Documental", description: "Verificação de RATs, OSs, certificações", frequency: "Mensal", color: "bg-[#fdb913]" },
    { type: "SLA", description: "Validação de indicadores de desempenho", frequency: "Mensal", color: "bg-[#007932]" },
    { type: "Financeira", description: "Conferência de medições e pagamentos", frequency: "Semestral", color: "bg-[#ef4123]" }
  ];

  const auditMethodology = [
    { step: 1, name: "Planejamento", description: "Definição de escopo e amostragem" },
    { step: 2, name: "Execução", description: "Coleta de evidências" },
    { step: 3, name: "Análise", description: "Identificação de não-conformidades" },
    { step: 4, name: "Relatório", description: "Documentação de achados" },
    { step: 5, name: "Acompanhamento", description: "Verificação de correções" }
  ];

  const dashboardViews = [
    { view: "Mapa de Calor", icon: MapPin, description: "Status das escolas por região" },
    { view: "Disponibilidade", icon: Activity, description: "Percentual de uptime da rede" },
    { view: "SLA Compliance", icon: Target, description: "Aderência aos níveis de serviço" },
    { view: "Financeiro", icon: TrendingUp, description: "Execução orçamentária x planejado" },
    { view: "Projetos", icon: FolderKanban, description: "Status de implantação" }
  ];

  const accessLevels = [
    { level: "Estratégico", description: "Visão consolidada para gestores", color: "bg-primary" },
    { level: "Tático", description: "Detalhamento por região/lote", color: "bg-[#fdb913]" },
    { level: "Operacional", description: "Detalhamento por escola", color: "bg-[#007932]" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={13} />
      
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

      {/* SGI Section Header */}
      <div className="pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          Sistema de Gestão Integrada (SGI) - Módulos Gerenciais
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Metodologias de gestão contratual, projetos e auditoria que suportam a governança estratégica
        </p>
      </div>

      {/* Gestão de Contratos */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <FileSignature className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Metodologia de Gestão de Contratos</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Acompanhamento completo do ciclo de vida contratual
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Contract Lifecycle */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Ciclo de Vida Contratual</h4>
            <div className="flex items-center justify-between flex-wrap gap-3 bg-primary/5 p-4 rounded-xl">
              {contractLifecycle.map((phase, index) => (
                <div key={phase.phase} className="flex items-center">
                  <div className="flex flex-col items-center text-center min-w-[80px]">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center">
                      <phase.icon className="w-5 h-5" />
                    </div>
                    <p className="font-semibold text-sm mt-2">{phase.phase}</p>
                    <p className="text-xs text-muted-foreground">{phase.description}</p>
                  </div>
                  {index < contractLifecycle.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-primary/40 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#fdb913]/10 rounded-lg border border-[#fdb913]/30 flex items-start gap-3">
              <Bell className="w-5 h-5 text-[#fdb913] mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Alertas de Vencimento</p>
                <p className="text-xs text-muted-foreground mt-1">Notificações automáticas de prazos</p>
              </div>
            </div>
            <div className="p-4 bg-primary/10 rounded-lg border border-primary/30 flex items-start gap-3">
              <Target className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Marcos Contratuais</p>
                <p className="text-xs text-muted-foreground mt-1">Acompanhamento de entregas-chave</p>
              </div>
            </div>
            <div className="p-4 bg-[#ef4123]/10 rounded-lg border border-[#ef4123]/30 flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[#ef4123] mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Inadimplências</p>
                <p className="text-xs text-muted-foreground mt-1">Controle de obrigações pendentes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gestão de Projetos */}
      <Card className="shadow-card border-l-4 border-l-[#fdb913]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#fdb913] flex items-center justify-center">
              <FolderKanban className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Gestão de Projetos e Portfólio</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Metodologia de execução de projetos de implantação
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Project Phases */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Fases do Projeto</h4>
            <div className="flex items-center justify-between flex-wrap gap-2">
              {projectPhases.map((phase, index) => (
                <div key={phase.phase} className="flex items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-xl ${phase.color} text-white flex items-center justify-center font-bold`}>
                      {index + 1}
                    </div>
                    <p className="font-semibold text-sm mt-2">{phase.phase}</p>
                  </div>
                  {index < projectPhases.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-muted-foreground/50 mx-3" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Project Management Elements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: "Cronograma", description: "Planejamento temporal" },
              { label: "Recursos", description: "Alocação de equipes" },
              { label: "Riscos", description: "Mitigação proativa" },
              { label: "Gates", description: "Pontos de decisão" }
            ].map((item) => (
              <div key={item.label} className="p-3 bg-[#fdb913]/5 rounded-lg border border-[#fdb913]/20 text-center">
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="p-3 bg-muted/30 rounded-lg flex items-center gap-2">
            <Eye className="w-4 h-4 text-[#fdb913]" />
            <span className="text-sm"><strong>Visão de Portfólio:</strong> Dashboard consolidado de todos os projetos de implantação</span>
          </div>
        </CardContent>
      </Card>

      {/* Auditoria Contínua */}
      <Card className="shadow-card border-l-4 border-l-[#007932]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#007932] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Processo de Auditoria Contínua</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Verificação sistemática de conformidade e desempenho
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Audit Types */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Tipos de Auditoria</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {auditTypes.map((audit) => (
                <div key={audit.type} className="p-4 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${audit.color}`} />
                    <span className="font-bold text-sm">{audit.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">{audit.description}</p>
                  <Badge variant="outline" className="text-xs">{audit.frequency}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Methodology */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Metodologia de Auditoria</h4>
            <div className="flex items-center justify-between flex-wrap gap-2 bg-[#007932]/5 p-4 rounded-xl">
              {auditMethodology.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div className="flex flex-col items-center text-center min-w-[80px]">
                    <div className="w-10 h-10 rounded-full bg-[#007932] text-white flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <p className="font-semibold text-xs mt-2">{step.name}</p>
                    <p className="text-xs text-muted-foreground max-w-[80px]">{step.description}</p>
                  </div>
                  {index < auditMethodology.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#007932]/40 mx-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboards e Indicadores */}
      <Card className="shadow-card border-l-4 border-l-[#ef4123]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ef4123] flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Dashboards e Indicadores Gerenciais</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Visão executiva consolidada para tomada de decisão
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Dashboard Views */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Visões Disponíveis</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {dashboardViews.map((dashboard) => (
                <div key={dashboard.view} className="p-3 bg-[#ef4123]/5 rounded-lg border border-[#ef4123]/20 text-center">
                  <dashboard.icon className="w-6 h-6 text-[#ef4123] mx-auto mb-2" />
                  <p className="font-semibold text-xs">{dashboard.view}</p>
                  <p className="text-xs text-muted-foreground mt-1">{dashboard.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Access Levels */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Níveis de Acesso</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {accessLevels.map((access) => (
                <div key={access.level} className={`p-4 rounded-lg border-2 ${
                  access.level === 'Estratégico' ? 'border-primary bg-primary/5' :
                  access.level === 'Tático' ? 'border-[#fdb913] bg-[#fdb913]/5' :
                  'border-[#007932] bg-[#007932]/5'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${access.color}`} />
                    <span className="font-bold">{access.level}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{access.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Update Frequency */}
          <div className="p-4 bg-muted/30 rounded-lg">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <RefreshCw className="w-4 h-4 text-primary" />
              Periodicidade de Atualização
            </h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <Badge className="bg-[#007932] text-white">Real-time</Badge>
                <p className="text-xs text-muted-foreground mt-2">Operacional</p>
              </div>
              <div>
                <Badge className="bg-[#fdb913] text-white">Diário</Badge>
                <p className="text-xs text-muted-foreground mt-2">Tático</p>
              </div>
              <div>
                <Badge className="bg-primary text-white">Diário</Badge>
                <p className="text-xs text-muted-foreground mt-2">Estratégico</p>
              </div>
            </div>
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
              { label: "Reuniões realizadas", value: "0/12", status: "Planejado" },
              { label: "Relatórios entregues", value: "0/12", status: "Planejado" },
              { label: "Auditorias concluídas", value: "0/4", status: "Planejado" },
              { label: "Decisões pendentes", value: "0", status: "Aguardando" }
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

      <SectionNavigation currentSection={13} />
    </div>
  );
};

export default Section13;
