import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft, Save, CheckCircle, ClipboardCheck, HardDrive,
  Camera, Map, Activity, Upload, AlertTriangle,
} from "lucide-react";
import { evidenciasEscolas, fotosObrigatorias, metricasSQSMock } from "@/data/evidenciasData";
import DadosExemploBanner from "@/components/evidencias/DadosExemploBanner";
import { toast } from "@/hooks/use-toast";

const PDIFormulario = () => {
  const { inep } = useParams<{ inep: string }>();
  const navigate = useNavigate();
  const escola = evidenciasEscolas.find(e => e.inep === inep);

  const [checklistAprovacao, setChecklistAprovacao] = useState([
    { id: "1", item: "Resumo do projeto concluído", status: false },
    { id: "2", item: "Descritivo de infraestrutura validado", status: false },
    { id: "3", item: "Lista de materiais conferida", status: false },
    { id: "4", item: "Inventário de equipamentos com números de série", status: false },
    { id: "5", item: "Relatório fotográfico (20 fotos) completo", status: false },
    { id: "6", item: "Mapa de cobertura as-built 2,4 GHz validado", status: false },
    { id: "7", item: "Mapa de cobertura as-built 5 GHz validado", status: false },
  ]);

  const [aterramento, setAterramento] = useState(false);
  const [tensaoFN, setTensaoFN] = useState("");
  const [tensaoFT, setTensaoFT] = useState("");
  const [tensaoNT, setTensaoNT] = useState("");
  const [disjuntor, setDisjuntor] = useState(false);
  const [cabeamento, setCabeamento] = useState(false);
  const [descServicos, setDescServicos] = useState("");
  const [descArquitetura, setDescArquitetura] = useState("");

  const [inventario, setInventario] = useState([
    { tipo: "Access Point Indoor", modelo: "", numSerie: "", firmware: "", local: "" },
    { tipo: "Access Point Outdoor", modelo: "", numSerie: "", firmware: "", local: "" },
    { tipo: "Switch PoE", modelo: "", numSerie: "", firmware: "", local: "" },
    { tipo: "Firewall/Router", modelo: "", numSerie: "", firmware: "", local: "" },
    { tipo: "Sonda SQS (SIMET Box)", modelo: "SIMET Box v3", numSerie: "", firmware: "", local: "" },
    { tipo: "Nobreak", modelo: "", numSerie: "", firmware: "", local: "" },
  ]);

  const [fotos] = useState(fotosObrigatorias.map(f => ({ ...f })));

  if (!escola) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-muted-foreground">Escola não encontrada (INEP: {inep})</p>
        <Button onClick={() => navigate("/evidencias/escolas")}>Voltar</Button>
      </div>
    );
  }

  const toggleChecklist = (id: string) => {
    setChecklistAprovacao(prev => prev.map(c => c.id === id ? { ...c, status: !c.status } : c));
  };

  const updateInventario = (index: number, field: string, value: string) => {
    setInventario(prev => prev.map((item, i) => i === index ? { ...item, [field]: value } : item));
  };

  const handleSave = (finalizar: boolean) => {
    toast({
      title: finalizar ? "PDI Finalizado" : "Rascunho Salvo",
      description: `PDI da escola ${escola.nomeEscola} ${finalizar ? "finalizado" : "salvo como rascunho"} com sucesso. (Protótipo — dados não persistidos)`,
    });
  };

  const tensaoNTValue = parseFloat(tensaoNT);
  const alertaNT = !isNaN(tensaoNTValue) && tensaoNTValue > 5;

  return (
    <div className="space-y-6">
      <DadosExemploBanner />
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={() => navigate(`/evidencias/escola/${inep}`)}>
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h1 className="text-xl font-bold text-foreground">PDI — Projeto Definitivo de Instalação</h1>
            <p className="text-sm text-muted-foreground">{escola.nomeEscola} • INEP: {escola.inep}</p>
          </div>
        </div>
        <Badge className="bg-accent text-accent-foreground">Pós-Instalação</Badge>
      </div>

      <Tabs defaultValue="checklist" className="space-y-4">
        <TabsList className="grid grid-cols-6 w-full">
          <TabsTrigger value="checklist" className="text-xs gap-1"><ClipboardCheck className="w-3.5 h-3.5" />Checklist</TabsTrigger>
          <TabsTrigger value="infra" className="text-xs gap-1"><HardDrive className="w-3.5 h-3.5" />Infra</TabsTrigger>
          <TabsTrigger value="inventario" className="text-xs gap-1"><HardDrive className="w-3.5 h-3.5" />Inventário</TabsTrigger>
          <TabsTrigger value="fotos" className="text-xs gap-1"><Camera className="w-3.5 h-3.5" />Fotos</TabsTrigger>
          <TabsTrigger value="mapas" className="text-xs gap-1"><Map className="w-3.5 h-3.5" />Mapas</TabsTrigger>
          <TabsTrigger value="sqs" className="text-xs gap-1"><Activity className="w-3.5 h-3.5" />SQS</TabsTrigger>
        </TabsList>

        {/* Aba 1: Checklist de Aprovação */}
        <TabsContent value="checklist">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Checklist de Aprovação (7 itens)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {checklistAprovacao.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/30 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-muted-foreground w-5">{item.id}.</span>
                      <span className="text-sm">{item.item}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{item.status ? "Aprovado" : "Pendente"}</span>
                      <Switch checked={item.status} onCheckedChange={() => toggleChecklist(item.id)} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t">
                <p className="text-xs text-muted-foreground">
                  {checklistAprovacao.filter(c => c.status).length} de {checklistAprovacao.length} itens aprovados
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 2: Infraestrutura */}
        <TabsContent value="infra">
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Descritivo de Infraestrutura</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs">Serviços Realizados</Label>
                  <Textarea value={descServicos} onChange={(e) => setDescServicos(e.target.value)} placeholder="Descreva os serviços realizados na instalação..." rows={3} />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Arquitetura Implantada</Label>
                  <Textarea value={descArquitetura} onChange={(e) => setDescArquitetura(e.target.value)} placeholder="Descreva a arquitetura de rede implantada..." rows={3} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Verificação Elétrica (ABNT NBR 5410)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label className="text-sm">Aterramento existente e conectado</Label>
                    <Switch checked={aterramento} onCheckedChange={setAterramento} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label className="text-sm">Disjuntor 25A curva C dedicado</Label>
                    <Switch checked={disjuntor} onCheckedChange={setDisjuntor} />
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg border">
                    <Label className="text-sm">Cabeamento 4,0mm² anti-chama</Label>
                    <Switch checked={cabeamento} onCheckedChange={setCabeamento} />
                  </div>
                  <div className="space-y-1.5 p-3 rounded-lg border">
                    <Label className="text-xs">Tensão Fase/Neutro (V)</Label>
                    <Input value={tensaoFN} onChange={(e) => setTensaoFN(e.target.value)} placeholder="220" className="h-8" />
                  </div>
                  <div className="space-y-1.5 p-3 rounded-lg border">
                    <Label className="text-xs">Tensão Fase/Terra (V)</Label>
                    <Input value={tensaoFT} onChange={(e) => setTensaoFT(e.target.value)} placeholder="220" className="h-8" />
                  </div>
                  <div className={`space-y-1.5 p-3 rounded-lg border ${alertaNT ? "border-destructive bg-destructive/5" : ""}`}>
                    <Label className="text-xs flex items-center gap-1">
                      Tensão Neutro/Terra (V)
                      {alertaNT && <AlertTriangle className="w-3 h-3 text-destructive" />}
                    </Label>
                    <Input value={tensaoNT} onChange={(e) => setTensaoNT(e.target.value)} placeholder="< 5V" className="h-8" />
                    {alertaNT && <p className="text-[10px] text-destructive">⚠ Valor acima de 5V — verificar aterramento!</p>}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Aba 3: Inventário */}
        <TabsContent value="inventario">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Inventário de Equipamentos com Números de Série</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Modelo</TableHead>
                    <TableHead>Nº Série</TableHead>
                    <TableHead>Firmware</TableHead>
                    <TableHead>Local de Instalação</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {inventario.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm font-medium">{item.tipo}</TableCell>
                      <TableCell><Input value={item.modelo} onChange={(e) => updateInventario(i, "modelo", e.target.value)} className="h-8 text-xs" /></TableCell>
                      <TableCell><Input value={item.numSerie} onChange={(e) => updateInventario(i, "numSerie", e.target.value)} className="h-8 text-xs font-mono" placeholder="SN-XXXXX" /></TableCell>
                      <TableCell><Input value={item.firmware} onChange={(e) => updateInventario(i, "firmware", e.target.value)} className="h-8 text-xs" placeholder="v1.0.0" /></TableCell>
                      <TableCell><Input value={item.local} onChange={(e) => updateInventario(i, "local", e.target.value)} className="h-8 text-xs" placeholder="Sala X / Rack" /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 4: Relatório Fotográfico */}
        <TabsContent value="fotos">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Relatório Fotográfico — 20 Fotos Obrigatórias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {fotos.map((foto) => (
                  <div key={foto.id} className="border-2 border-dashed rounded-lg p-3 text-center hover:border-primary/50 transition-colors cursor-pointer group">
                    <div className="aspect-[4/3] flex flex-col items-center justify-center bg-muted/30 rounded mb-2 group-hover:bg-primary/5 transition-colors">
                      <Camera className="w-6 h-6 text-muted-foreground/40 mb-1" />
                      <span className="text-[10px] text-muted-foreground/60">Upload</span>
                    </div>
                    <p className="text-[10px] font-medium leading-tight">{foto.id.toString().padStart(2, "0")}. {foto.rotulo}</p>
                    <Badge variant="outline" className="mt-1 text-[8px] px-1 py-0">{foto.categoria}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-3 border-t">
                <p className="text-xs text-muted-foreground">
                  {fotos.filter(f => f.uploaded).length} de {fotos.length} fotos enviadas
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 5: Mapas As-Built */}
        <TabsContent value="mapas">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Cobertura As-Built — 2,4 GHz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Upload mapa 2,4 GHz</p>
                  <p className="text-xs mt-1">Cobertura real medida em campo</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Cobertura As-Built — 5 GHz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium">Upload mapa 5 GHz</p>
                  <p className="text-xs mt-1">Cobertura real medida em campo</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Aba 6: Métricas SQS/SIMET */}
        <TabsContent value="sqs">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2">
                <Activity className="w-5 h-5 text-destructive" />
                Monitoramento SQS/SIMET — Sonda de Qualidade
              </CardTitle>
              <p className="text-xs text-muted-foreground">
                Tipo de link: <Badge variant="outline" className={`text-xs ${escola.tipoLink === "Satelital" ? "border-destructive/30 text-destructive" : "border-accent/30 text-accent"}`}>{escola.tipoLink}</Badge>
              </p>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Métrica</TableHead>
                    <TableHead>Meta (Dedicado)</TableHead>
                    <TableHead>Meta (Satelital)</TableHead>
                    <TableHead>Valor Atual</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {metricasSQSMock.map((m) => (
                    <TableRow key={m.metrica}>
                      <TableCell className="font-medium text-sm">{m.metrica}</TableCell>
                      <TableCell className="text-sm">{m.metaDedicado}</TableCell>
                      <TableCell className="text-sm">{m.metaSatelital}</TableCell>
                      <TableCell className="text-sm font-mono">{m.valorAtual}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={`text-xs ${
                          m.status === "Conforme" ? "bg-accent/15 text-accent border-accent/30" :
                          m.status === "Alerta" ? "bg-secondary/15 text-secondary-foreground border-secondary/30" :
                          m.status === "Crítico" ? "bg-destructive/15 text-destructive border-destructive/30" :
                          "bg-muted text-muted-foreground"
                        }`}>
                          {m.status}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-destructive">
                  <CardContent className="p-4 space-y-2">
                    <h4 className="text-sm font-semibold">Evidências Operacionais</h4>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />Diagnóstico de causa raiz (falha elétrica vs enlace)</li>
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />Conformidade de velocidade (tolerância 10%)</li>
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />Análise de saturação (operadora vs demanda)</li>
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-destructive/60" />Estabilidade / Flapping</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-l-4 border-primary">
                  <CardContent className="p-4 space-y-2">
                    <h4 className="text-sm font-semibold">Rastreabilidade e Auditoria</h4>
                    <ul className="text-xs text-muted-foreground space-y-1.5">
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />Chave INEP por escola</li>
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />~6 medições diárias (a cada 4h)</li>
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />Série histórica diária/semanal/mensal</li>
                      <li className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-primary/60" />Status IPv4/IPv6 (Dual Stack)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Botões de ação */}
      <div className="flex justify-end gap-3 pb-8">
        <Button variant="outline" onClick={() => handleSave(false)} className="gap-2">
          <Save className="w-4 h-4" />
          Salvar Rascunho
        </Button>
        <Button onClick={() => handleSave(true)} className="gap-2 bg-accent hover:bg-accent/90">
          <CheckCircle className="w-4 h-4" />
          Finalizar PDI
        </Button>
      </div>
    </div>
  );
};

export default PDIFormulario;
