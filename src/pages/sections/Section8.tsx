import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, Eye, FileCheck, BarChart3, Search, ArrowRight } from "lucide-react";

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

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
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
    </div>
  );
};

export default Section8;
