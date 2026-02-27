import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  ClipboardList,
  School,
  FileCheck,
  HardDrive,
  Wifi,
  ArrowRight,
  ChevronRight,
  Camera,
  MapPin,
  Radio,
  Activity,
} from "lucide-react";
import { getContadores, getProgressoPorGRE, getProgressoPorCiclo } from "@/data/evidenciasData";
import DadosExemploBanner from "@/components/evidencias/DadosExemploBanner";

const EvidenciasDashboard = () => {
  const navigate = useNavigate();
  const contadores = getContadores();
  const progressoGRE = getProgressoPorGRE();
  const progressoCiclo = getProgressoPorCiclo();

  const kpis = [
    { label: "Total de Escolas", value: contadores.total, icon: School, color: "text-primary" },
    { label: "PPI Concluídos", value: contadores.ppiConcluido, icon: FileCheck, color: "text-primary" },
    { label: "PDI Concluídos", value: contadores.pdiConcluido, icon: ClipboardList, color: "text-accent" },
    { label: "Sondas SQS Ativas", value: contadores.sqsAtivo, icon: Radio, color: "text-destructive" },
    { label: "Em Campo", value: contadores.campoEmAndamento, icon: MapPin, color: "text-secondary-foreground" },
  ];

  const fases = [
    {
      titulo: "Pré-Instalação",
      subtitulo: "PPI",
      evidencias: 5,
      cor: "border-primary bg-primary/5",
      corBadge: "bg-primary text-primary-foreground",
      icon: FileCheck,
      items: ["Ficha da escola", "Lista de equipamentos", "Mapa 2,4 GHz", "Mapa 5 GHz", "Site survey"],
    },
    {
      titulo: "Execução em Campo",
      subtitulo: "CAMPO",
      evidencias: 4,
      cor: "border-secondary bg-secondary/5",
      corBadge: "bg-secondary text-secondary-foreground",
      icon: Camera,
      items: ["20 fotos padronizadas", "Geolocalização", "Checklist elétrico", "Certificação cabos"],
    },
    {
      titulo: "Pós-Instalação",
      subtitulo: "PDI",
      evidencias: 6,
      cor: "border-accent bg-accent/5",
      corBadge: "bg-accent text-accent-foreground",
      icon: ClipboardList,
      items: ["Checklist aprovação", "Infraestrutura", "Materiais", "Inventário", "Mapas as-built", "Certificação"],
    },
    {
      titulo: "Monitoramento",
      subtitulo: "SQS/SIMET",
      evidencias: 10,
      cor: "border-destructive bg-destructive/5",
      corBadge: "bg-destructive text-destructive-foreground",
      icon: Activity,
      items: ["Disponibilidade", "Latência", "Jitter", "Perda pacotes", "Velocidade", "Diagnóstico", "Saturação", "Estabilidade", "IPv4/IPv6", "Histórico"],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Coleta de Evidências</h1>
          <p className="text-muted-foreground mt-1">
            Controle de evidências das instalações — PPI, Campo, PDI e Monitoramento SQS/SIMET
          </p>
        </div>
        <Button onClick={() => navigate("/evidencias/escolas")} className="gap-2">
          <School className="w-4 h-4" />
          Ver Escolas
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <DadosExemploBanner />

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="card-hover">
            <CardContent className="p-4 flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-muted`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Fluxo das 4 fases */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <HardDrive className="w-5 h-5 text-primary" />
            Fluxo de Coleta de Evidências
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {fases.map((fase, i) => (
              <div key={fase.subtitulo} className="relative">
                <div className={`border-l-4 ${fase.cor} rounded-lg p-4 h-full`}>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className={fase.corBadge}>{fase.subtitulo}</Badge>
                    <span className="text-xs text-muted-foreground font-medium">{fase.evidencias} evidências</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-3">{fase.titulo}</h3>
                  <ul className="space-y-1">
                    {fase.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {i < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progresso por Ciclo */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Progresso por Ciclo de Atendimento</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {progressoCiclo.map((ciclo) => (
              <div key={ciclo.ciclo} className="border rounded-lg p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">{ciclo.ciclo.replace("CICLO ", "C")}</span>
                  {ciclo.prioridade && (
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 border-destructive text-destructive">
                      Prioritário
                    </Badge>
                  )}
                </div>
                <p className="text-lg font-bold">{ciclo.total} escolas</p>
                <div className="space-y-1.5">
                  <div>
                    <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
                      <span>PPI</span>
                      <span>{ciclo.ppiOk}/{ciclo.total}</span>
                    </div>
                    <Progress value={(ciclo.ppiOk / ciclo.total) * 100} className="h-1.5" />
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] text-muted-foreground mb-0.5">
                      <span>PDI</span>
                      <span>{ciclo.pdiOk}/{ciclo.total}</span>
                    </div>
                    <Progress value={(ciclo.pdiOk / ciclo.total) * 100} className="h-1.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Progresso por GRE */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Progresso por GRE</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            {progressoGRE.map((gre) => (
              <div key={gre.gre} className="flex items-center gap-4">
                <div className="w-48 flex-shrink-0">
                  <p className="text-xs font-medium truncate" title={gre.gre}>{gre.gre}</p>
                  <p className="text-[10px] text-muted-foreground">{gre.total} escolas</p>
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] w-6 text-muted-foreground">PPI</span>
                    <Progress value={gre.ppiPercent} className="h-2 flex-1" />
                    <span className="text-[10px] w-8 text-right font-medium">{gre.ppiPercent}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] w-6 text-muted-foreground">PDI</span>
                    <Progress value={gre.pdiPercent} className="h-2 flex-1" />
                    <span className="text-[10px] w-8 text-right font-medium">{gre.pdiPercent}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EvidenciasDashboard;
