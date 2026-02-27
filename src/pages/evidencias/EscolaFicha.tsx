import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ArrowLeft, MapPin, FileCheck, Camera, ClipboardList, Activity,
  CheckCircle, Clock, AlertCircle, ExternalLink,
} from "lucide-react";
import { evidenciasEscolas, checklistCampoDefault, type StatusFase } from "@/data/evidenciasData";
import DadosExemploBanner from "@/components/evidencias/DadosExemploBanner";

const statusConfig: Record<StatusFase, { icon: typeof CheckCircle; color: string; bg: string }> = {
  "Concluído": { icon: CheckCircle, color: "text-accent", bg: "bg-accent/10 border-accent/30" },
  "Em Andamento": { icon: Clock, color: "text-secondary-foreground", bg: "bg-secondary/10 border-secondary/30" },
  "Pendente": { icon: AlertCircle, color: "text-muted-foreground", bg: "bg-muted border-border" },
  "N/A": { icon: AlertCircle, color: "text-muted-foreground/50", bg: "bg-muted border-border" },
};

const EscolaFicha = () => {
  const { inep } = useParams<{ inep: string }>();
  const navigate = useNavigate();
  const escola = evidenciasEscolas.find(e => e.inep === inep);
  const [checklist, setChecklist] = useState(checklistCampoDefault.map(c => ({ ...c })));

  if (!escola) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-muted-foreground">Escola não encontrada (INEP: {inep})</p>
        <Button onClick={() => navigate("/evidencias/escolas")}>Voltar à lista</Button>
      </div>
    );
  }

  const toggleCheck = (id: string) => {
    setChecklist(prev => prev.map(c => c.id === id ? { ...c, concluido: !c.concluido } : c));
  };

  const fases = [
    { id: 1, nome: "Pré-Instalação (PPI)", status: escola.statusPPI, icon: FileCheck, cor: "border-primary", action: "Abrir PPI", path: `/evidencias/ppi/${escola.inep}` },
    { id: 2, nome: "Execução em Campo", status: escola.statusCampo, icon: Camera, cor: "border-secondary", action: "Ver Checklist", path: null },
    { id: 3, nome: "Pós-Instalação (PDI)", status: escola.statusPDI, icon: ClipboardList, cor: "border-accent", action: "Abrir PDI", path: `/evidencias/pdi/${escola.inep}` },
    { id: 4, nome: "Monitoramento SQS/SIMET", status: escola.statusSQS, icon: Activity, cor: "border-destructive", action: "Ver Métricas", path: `/evidencias/pdi/${escola.inep}` },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/evidencias/escolas")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-xl font-bold text-foreground">{escola.nomeEscola}</h1>
          <p className="text-sm text-muted-foreground">INEP: {escola.inep} • {escola.municipio}</p>
        </div>
      </div>

      <DadosExemploBanner />

      {/* Info Card */}
      <Card>
        <CardContent className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-semibold">INEP</p>
              <p className="font-mono text-sm font-bold">{escola.inep}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-semibold">GRE</p>
              <p className="text-sm">{escola.gre}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-semibold">Município</p>
              <p className="text-sm">{escola.municipio}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-semibold">Zona</p>
              <Badge variant="outline" className={`text-xs ${escola.zona === "RURAL" ? "border-destructive/30 text-destructive" : "border-primary/30 text-primary"}`}>
                {escola.zona}
              </Badge>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-semibold">Tipo de Link</p>
              <Badge variant="outline" className={`text-xs ${escola.tipoLink === "Satelital" ? "border-destructive/30 text-destructive" : "border-accent/30 text-accent"}`}>
                {escola.tipoLink}
              </Badge>
            </div>
            <div>
              <p className="text-[10px] uppercase text-muted-foreground font-semibold">Ciclo</p>
              <p className="text-sm font-medium">{escola.ciclo}</p>
            </div>
          </div>
          {(escola.latitude || escola.endereco) && (
            <div className="mt-4 pt-4 border-t flex items-start gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground">{escola.endereco}</p>
                {escola.latitude && escola.longitude && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Lat: {escola.latitude} | Long: {escola.longitude}
                  </p>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Timeline de Fases */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Timeline de Evidências</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {fases.map((fase, index) => {
              const cfg = statusConfig[fase.status];
              const Icon = cfg.icon;
              return (
                <div key={fase.id} className="flex gap-4">
                  {/* Linha vertical */}
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center ${cfg.bg}`}>
                      <Icon className={`w-5 h-5 ${cfg.color}`} />
                    </div>
                    {index < fases.length - 1 && (
                      <div className="w-0.5 h-full bg-border flex-1 mt-1" />
                    )}
                  </div>
                  {/* Conteúdo */}
                  <div className={`flex-1 border-l-4 ${fase.cor} rounded-lg p-4 mb-2`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-muted-foreground">FASE {fase.id}</span>
                        <h3 className="font-semibold text-sm">{fase.nome}</h3>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className={`text-xs ${cfg.bg}`}>
                          {fase.status}
                        </Badge>
                        {fase.path && (
                          <Button variant="outline" size="sm" className="h-7 text-xs gap-1" onClick={() => navigate(fase.path!)}>
                            {fase.action}
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Checklist de Campo */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Camera className="w-5 h-5 text-secondary-foreground" />
            Checklist de Execução em Campo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {checklist.map((item) => (
              <div key={item.id} className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                <Checkbox
                  checked={item.concluido}
                  onCheckedChange={() => toggleCheck(item.id)}
                />
                <span className={`text-sm ${item.concluido ? "line-through text-muted-foreground" : ""}`}>
                  {item.item}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-3 border-t">
            <p className="text-xs text-muted-foreground">
              {checklist.filter(c => c.concluido).length} de {checklist.length} itens concluídos
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EscolaFicha;
