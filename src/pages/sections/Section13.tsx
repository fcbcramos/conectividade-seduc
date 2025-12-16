import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flag, CheckSquare, FileText, Users, ArrowRight, BookOpen } from "lucide-react";

const Section13 = () => {
  const encerramento = [
    { item: "Relatório Técnico Final (RTF)", status: "Pendente" },
    { item: "Documentação As-Built completa", status: "Pendente" },
    { item: "Transferência de ativos", status: "Pendente" },
    { item: "Quitação de obrigações financeiras", status: "Pendente" },
    { item: "Devolução de garantias", status: "Pendente" },
    { item: "Termo de encerramento", status: "Pendente" }
  ];

  const legado = [
    {
      title: "Infraestrutura Instalada",
      description: "Rede de conectividade e Wi-Fi em 1000+ escolas",
      icon: FileText
    },
    {
      title: "Conhecimento Transferido",
      description: "Documentação técnica e operacional completa",
      icon: BookOpen
    },
    {
      title: "Capacitação de Equipes",
      description: "Equipes da SEDUC treinadas para gestão",
      icon: Users
    },
    {
      title: "Base para Continuidade",
      description: "Processos definidos para próxima contratação",
      icon: ArrowRight
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 13</Badge>
        <h1 className="text-3xl font-bold text-foreground">Encerramento Contratual e Legado</h1>
        <p className="text-muted-foreground mt-2">
          Procedimentos de encerramento e garantia de continuidade dos serviços
        </p>
      </div>

      {/* Encerramento Checklist */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flag className="w-5 h-5 text-primary" />
            Checklist de Encerramento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {encerramento.map((item, index) => (
              <div 
                key={item.item}
                className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg"
              >
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <CheckSquare className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1">{item.item}</span>
                <Badge className="bg-muted text-muted-foreground">
                  {item.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Transfer Process */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Processo de Transferência</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between flex-wrap gap-4 py-4">
            {[
              { step: 1, title: "Preparação", desc: "Consolidação de documentos" },
              { step: 2, title: "Validação", desc: "Verificação de entregas" },
              { step: 3, title: "Transferência", desc: "Passagem de conhecimento" },
              { step: 4, title: "Aceite", desc: "Validação final" },
              { step: 5, title: "Encerramento", desc: "Formalização" }
            ].map((item, index) => (
              <div key={item.step} className="flex items-center">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <p className="font-semibold mt-2 text-sm">{item.title}</p>
                  <p className="text-xs text-muted-foreground max-w-[100px]">{item.desc}</p>
                </div>
                {index < 4 && (
                  <ArrowRight className="w-6 h-6 text-muted-foreground mx-4" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Legacy */}
      <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Legado do Contrato
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {legado.map((item) => (
              <div 
                key={item.title}
                className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Continuity Plan */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Plano de Continuidade</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
              <h4 className="font-semibold text-accent">Garantia de Serviços Essenciais</h4>
              <p className="text-sm text-muted-foreground mt-2">
                O contrato prevê mecanismos para garantir a continuidade dos serviços de conectividade
                mesmo após o encerramento, incluindo período de transição e suporte à nova contratação.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">90 dias</p>
                <p className="text-sm text-muted-foreground">Período de transição</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Documentação entregue</p>
              </div>
              <div className="text-center p-4 bg-muted/30 rounded-lg">
                <p className="text-2xl font-bold text-primary">Garantido</p>
                <p className="text-sm text-muted-foreground">Suporte pós-contrato</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section13;
