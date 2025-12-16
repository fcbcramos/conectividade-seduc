import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ClipboardCheck, Eye, FileCheck, BarChart3, Search, ArrowRight,
  ClipboardList, FileText, AlertTriangle, Package, Camera, MapPin, 
  CheckCircle2, Clock, Users, Wrench, Settings, ArrowDown
} from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const Section8 = () => {
  const fiscalizationDimensions = [
    {
      title: "Fiscalização Técnica",
      description: "Acompanhamento da qualidade técnica das entregas e conformidade com especificações",
      icon: Search,
      color: "bg-primary",
      items: ["Qualidade da conexão", "Configuração de equipamentos", "Conformidade com projeto"]
    },
    {
      title: "Fiscalização Administrativa",
      description: "Controle documental e verificação de obrigações contratuais",
      icon: FileCheck,
      color: "bg-secondary",
      items: ["Documentação fiscal", "Certidões", "Relatórios obrigatórios"]
    },
    {
      title: "Fiscalização por Indicadores",
      description: "Monitoramento de métricas de desempenho e SLAs",
      icon: BarChart3,
      color: "bg-accent",
      items: ["Disponibilidade", "Latência", "Tempo de atendimento"]
    },
    {
      title: "Fiscalização por Evidências",
      description: "Verificação in loco e análise de provas documentais",
      icon: Eye,
      color: "bg-primary",
      items: ["Visitas técnicas", "Fotos e vídeos", "Logs de sistema"]
    }
  ];

  const processSteps = [
    { step: 1, title: "Coleta", description: "Coleta de dados e evidências" },
    { step: 2, title: "Análise", description: "Análise técnica e documental" },
    { step: 3, title: "Validação", description: "Validação de conformidade" },
    { step: 4, title: "Registro", description: "Registro em sistema" },
    { step: 5, title: "Atestação", description: "Emissão de parecer" }
  ];

  const ratSteps = [
    { step: 1, title: "Abertura", description: "Técnico inicia RAT via app mobile", icon: ClipboardList },
    { step: 2, title: "Execução", description: "Registro de atividades e fotos", icon: Camera },
    { step: 3, title: "Validação", description: "Conferência técnica automatizada", icon: CheckCircle2 },
    { step: 4, title: "Assinatura", description: "Assinatura digital do responsável", icon: FileCheck },
    { step: 5, title: "Arquivamento", description: "Armazenamento com indexação", icon: Package }
  ];

  const osTypes = [
    { type: "Implantação", color: "bg-[#007932]", description: "Instalação inicial de infraestrutura" },
    { type: "Manutenção Preventiva", color: "bg-primary", description: "Ações programadas de manutenção" },
    { type: "Manutenção Corretiva", color: "bg-[#fdb913]", description: "Correção de falhas e incidentes" },
    { type: "Desativação", color: "bg-[#ef4123]", description: "Remoção de equipamentos" }
  ];

  const osLifecycle = [
    { step: "Criação", icon: FileText },
    { step: "Classificação", icon: BarChart3 },
    { step: "Designação", icon: Users },
    { step: "Execução", icon: Wrench },
    { step: "Encerramento", icon: CheckCircle2 },
    { step: "Faturamento", icon: FileCheck }
  ];

  const incidentLevels = [
    { level: "P1", name: "Crítico", sla: "4h", description: "Indisponibilidade total", color: "bg-[#ef4123]" },
    { level: "P2", name: "Alto", sla: "8h", description: "Degradação severa", color: "bg-[#fdb913]" },
    { level: "P3", name: "Médio", sla: "24h", description: "Degradação parcial", color: "bg-primary" },
    { level: "P4", name: "Baixo", sla: "48h", description: "Impacto mínimo", color: "bg-[#007932]" }
  ];

  const assetLifecycle = [
    { phase: "Recebimento", description: "Conferência e etiquetagem" },
    { phase: "Instalação", description: "Vínculo com escola/local" },
    { phase: "Operação", description: "Monitoramento contínuo" },
    { phase: "Manutenção", description: "Histórico de intervenções" },
    { phase: "Desativação", description: "Baixa e destinação" }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={8} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 8</Badge>
        <h1 className="text-3xl font-bold text-foreground">Modelo de Fiscalização</h1>
        <p className="text-muted-foreground mt-2">
          Dimensões e processos de acompanhamento da execução contratual
        </p>
      </div>

      {/* Dimensions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {fiscalizationDimensions.map((dimension) => (
          <Card key={dimension.title} className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${dimension.color} flex items-center justify-center`}>
                  <dimension.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg">{dimension.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{dimension.description}</p>
              <div className="space-y-2">
                {dimension.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Process Flow */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ClipboardCheck className="w-5 h-5 text-primary" />
            Fluxo de Fiscalização
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between flex-wrap gap-4 py-4">
            {processSteps.map((step, index) => (
              <div key={step.step} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <p className="font-semibold mt-2">{step.title}</p>
                  <p className="text-xs text-muted-foreground max-w-[100px]">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-4" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Responsible Parties */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Responsáveis pela Fiscalização</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary">Fiscal Técnico</p>
              <p className="text-sm text-muted-foreground mt-1">
                Responsável pela verificação da qualidade técnica das entregas
              </p>
            </div>
            <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
              <p className="font-semibold text-accent">Fiscal Administrativo</p>
              <p className="text-sm text-muted-foreground mt-1">
                Responsável pelo controle documental e financeiro
              </p>
            </div>
            <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/30">
              <p className="font-semibold">Gestor do Contrato</p>
              <p className="text-sm text-muted-foreground mt-1">
                Coordenação geral e tomada de decisões
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* SGI Section Header */}
      <div className="pt-6 border-t border-border">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Settings className="w-5 h-5 text-primary" />
          Sistema de Gestão Integrada (SGI) - Módulos Operacionais
        </h2>
        <p className="text-muted-foreground text-sm mt-1">
          Metodologias e processos do SGI que suportam a fiscalização técnica e administrativa
        </p>
      </div>

      {/* RAT - Relatório de Atividade Técnica */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <ClipboardList className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Metodologia RAT - Relatório de Atividade Técnica</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Documento formal de registro das atividades técnicas em campo
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* RAT Workflow */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Workflow do RAT</h4>
            <div className="flex items-start justify-between flex-wrap gap-3">
              {ratSteps.map((step, index) => (
                <div key={step.step} className="flex items-center">
                  <div className="flex flex-col items-center text-center min-w-[90px]">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border-2 border-primary flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="outline" className="mt-2 text-xs">{step.step}</Badge>
                    <p className="font-semibold text-sm mt-1">{step.title}</p>
                    <p className="text-xs text-muted-foreground max-w-[90px]">{step.description}</p>
                  </div>
                  {index < ratSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-primary/40 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RAT Required Elements */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { icon: Clock, label: "Data/Hora" },
              { icon: MapPin, label: "Geolocalização" },
              { icon: Camera, label: "Fotos Antes/Depois" },
              { icon: CheckCircle2, label: "Checklist Técnico" },
              { icon: FileCheck, label: "Assinatura Digital" }
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
                <item.icon className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ordens de Serviço */}
      <Card className="shadow-card border-l-4 border-l-[#fdb913]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#fdb913] flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Fluxo de Ordens de Serviço</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Gestão completa do ciclo de vida das ordens de serviço
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* OS Types */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Tipos de OS</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {osTypes.map((os) => (
                <div key={os.type} className="p-3 rounded-lg border border-border/50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${os.color}`} />
                    <span className="font-semibold text-sm">{os.type}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{os.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* OS Lifecycle */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Ciclo de Vida da OS</h4>
            <div className="flex items-center justify-between flex-wrap gap-2 bg-[#fdb913]/5 p-4 rounded-xl">
              {osLifecycle.map((phase, index) => (
                <div key={phase.step} className="flex items-center">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-full bg-[#fdb913] text-white flex items-center justify-center">
                      <phase.icon className="w-5 h-5" />
                    </div>
                    <p className="text-xs font-medium mt-2">{phase.step}</p>
                  </div>
                  {index < osLifecycle.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#fdb913]/50 mx-2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Gestão de Incidentes */}
      <Card className="shadow-card border-l-4 border-l-[#ef4123]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ef4123] flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Processo de Gestão de Incidentes</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Metodologia ITIL adaptada para tratamento de ocorrências
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Incident Classification */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Classificação de Incidentes</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {incidentLevels.map((incident) => (
                <div key={incident.level} className={`p-4 rounded-lg border-2 ${
                  incident.level === 'P1' ? 'border-[#ef4123] bg-[#ef4123]/5' :
                  incident.level === 'P2' ? 'border-[#fdb913] bg-[#fdb913]/5' :
                  incident.level === 'P3' ? 'border-primary bg-primary/5' :
                  'border-[#007932] bg-[#007932]/5'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className={`${incident.color} text-white`}>{incident.level}</Badge>
                    <span className="font-bold text-sm">{incident.name}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{incident.description}</p>
                  <div className="mt-2 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs font-semibold">SLA: {incident.sla}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Escalation Flow */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Fluxo de Escalonamento</h4>
            <div className="flex items-center justify-center gap-4 p-4 bg-[#ef4123]/5 rounded-xl">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#ef4123]/20 border-2 border-[#ef4123] flex items-center justify-center mx-auto">
                  <span className="font-bold text-[#ef4123]">N1</span>
                </div>
                <p className="text-sm font-semibold mt-2">Service Desk</p>
                <p className="text-xs text-muted-foreground">Primeiro atendimento</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#ef4123]/50" />
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#fdb913]/20 border-2 border-[#fdb913] flex items-center justify-center mx-auto">
                  <span className="font-bold text-[#fdb913]">N2</span>
                </div>
                <p className="text-sm font-semibold mt-2">Suporte Especializado</p>
                <p className="text-xs text-muted-foreground">Análise técnica</p>
              </div>
              <ArrowRight className="w-6 h-6 text-[#ef4123]/50" />
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center mx-auto">
                  <span className="font-bold text-primary">N3</span>
                </div>
                <p className="text-sm font-semibold mt-2">Engenharia</p>
                <p className="text-xs text-muted-foreground">Resolução avançada</p>
              </div>
            </div>
          </div>

          <div className="p-3 bg-muted/30 rounded-lg flex items-center gap-2">
            <Settings className="w-4 h-4 text-primary" />
            <span className="text-sm"><strong>Integração:</strong> Abertura automática de incidentes via monitoramento NOC</span>
          </div>
        </CardContent>
      </Card>

      {/* Gestão de Inventário */}
      <Card className="shadow-card border-l-4 border-l-[#007932]">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#007932] flex items-center justify-center">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-lg">Gestão de Inventário e Ativos</span>
              <p className="text-sm font-normal text-muted-foreground mt-1">
                Controle completo de equipamentos, licenças e contratos de manutenção
              </p>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Asset Lifecycle */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Ciclo de Vida do Ativo</h4>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#007932]/30" />
              <div className="space-y-4">
                {assetLifecycle.map((phase, index) => (
                  <div key={phase.phase} className="flex items-start gap-4 relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 ${
                      index === assetLifecycle.length - 1 ? 'bg-[#ef4123]' : 'bg-[#007932]'
                    } text-white font-bold`}>
                      {index + 1}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className="font-semibold">{phase.phase}</p>
                      <p className="text-sm text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Traceability */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-[#007932]/5 rounded-lg border border-[#007932]/20">
              <p className="font-semibold text-[#007932]">Código de Barras</p>
              <p className="text-sm text-muted-foreground mt-1">Identificação única de cada equipamento</p>
            </div>
            <div className="p-4 bg-[#007932]/5 rounded-lg border border-[#007932]/20">
              <p className="font-semibold text-[#007932]">QR Code</p>
              <p className="text-sm text-muted-foreground mt-1">Acesso rápido ao histórico do ativo</p>
            </div>
            <div className="p-4 bg-[#007932]/5 rounded-lg border border-[#007932]/20">
              <p className="font-semibold text-[#007932]">Histórico Completo</p>
              <p className="text-sm text-muted-foreground mt-1">Rastreabilidade de todas as intervenções</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <SectionNavigation currentSection={8} />
    </div>
  );
};

export default Section8;
