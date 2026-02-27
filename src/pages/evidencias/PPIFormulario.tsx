import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import {
  ArrowLeft, Save, CheckCircle, School, Package, Wifi, Map, Upload,
} from "lucide-react";
import { evidenciasEscolas, equipamentosPPIPadrao } from "@/data/evidenciasData";
import DadosExemploBanner from "@/components/evidencias/DadosExemploBanner";
import { toast } from "@/hooks/use-toast";

const PPIFormulario = () => {
  const { inep } = useParams<{ inep: string }>();
  const navigate = useNavigate();
  const escola = evidenciasEscolas.find(e => e.inep === inep);
  const [equipamentos, setEquipamentos] = useState(equipamentosPPIPadrao.map(e => ({ ...e })));
  const [obs24, setObs24] = useState("");
  const [obs5, setObs5] = useState("");
  const [obsSite, setObsSite] = useState("");

  if (!escola) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-4">
        <p className="text-muted-foreground">Escola não encontrada (INEP: {inep})</p>
        <Button onClick={() => navigate("/evidencias/escolas")}>Voltar</Button>
      </div>
    );
  }

  const handleSave = (finalizar: boolean) => {
    toast({
      title: finalizar ? "PPI Finalizado" : "Rascunho Salvo",
      description: `PPI da escola ${escola.nomeEscola} ${finalizar ? "finalizado" : "salvo como rascunho"} com sucesso. (Protótipo — dados não persistidos)`,
    });
  };

  const updateEquipamento = (index: number, field: string, value: string | number) => {
    setEquipamentos(prev => prev.map((e, i) => i === index ? { ...e, [field]: value } : e));
  };

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
            <h1 className="text-xl font-bold text-foreground">PPI — Projeto Provisório de Instalação</h1>
            <p className="text-sm text-muted-foreground">{escola.nomeEscola} • INEP: {escola.inep}</p>
          </div>
        </div>
        <Badge className="bg-primary text-primary-foreground">Pré-Instalação</Badge>
      </div>

      <Tabs defaultValue="dados" className="space-y-4">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="dados" className="text-xs gap-1"><School className="w-3.5 h-3.5" />Dados</TabsTrigger>
          <TabsTrigger value="equipamentos" className="text-xs gap-1"><Package className="w-3.5 h-3.5" />Equipamentos</TabsTrigger>
          <TabsTrigger value="mapa24" className="text-xs gap-1"><Wifi className="w-3.5 h-3.5" />2,4 GHz</TabsTrigger>
          <TabsTrigger value="mapa5" className="text-xs gap-1"><Wifi className="w-3.5 h-3.5" />5 GHz</TabsTrigger>
          <TabsTrigger value="site" className="text-xs gap-1"><Map className="w-3.5 h-3.5" />Site Survey</TabsTrigger>
        </TabsList>

        {/* Aba 1: Dados da Escola */}
        <TabsContent value="dados">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Dados da Escola</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs">Código INEP</Label>
                  <Input value={escola.inep} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label className="text-xs">Nome da Escola</Label>
                  <Input value={escola.nomeEscola} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Município</Label>
                  <Input value={escola.municipio} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">GRE</Label>
                  <Input value={escola.gre} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Ciclo de Atendimento</Label>
                  <Input value={escola.ciclo} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Zona</Label>
                  <Input value={escola.zona} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Tipo de Link</Label>
                  <Input value={escola.tipoLink} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Tipo de Intervenção</Label>
                  <Input value={escola.tipoIntervencao} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Latitude</Label>
                  <Input value={escola.latitude || "—"} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Longitude</Label>
                  <Input value={escola.longitude || "—"} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5 md:col-span-2">
                  <Label className="text-xs">Endereço</Label>
                  <Input value={escola.endereco || "—"} readOnly className="bg-muted" />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs">Contato do Gestor Escolar</Label>
                  <Input placeholder="Nome e telefone do gestor" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 2: Equipamentos */}
        <TabsContent value="equipamentos">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Lista de Equipamentos Planejados</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo</TableHead>
                    <TableHead>Modelo</TableHead>
                    <TableHead>Fabricante</TableHead>
                    <TableHead className="w-24">Qtd</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {equipamentos.map((eq, i) => (
                    <TableRow key={i}>
                      <TableCell className="text-sm font-medium">{eq.tipo}</TableCell>
                      <TableCell>
                        <Input value={eq.modelo} onChange={(e) => updateEquipamento(i, "modelo", e.target.value)} className="h-8 text-xs" />
                      </TableCell>
                      <TableCell>
                        <Input value={eq.fabricante} onChange={(e) => updateEquipamento(i, "fabricante", e.target.value)} className="h-8 text-xs" />
                      </TableCell>
                      <TableCell>
                        <Input type="number" value={eq.quantidade} onChange={(e) => updateEquipamento(i, "quantidade", Number(e.target.value))} className="h-8 text-xs w-16" />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 3: Mapa 2,4 GHz */}
        <TabsContent value="mapa24">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Mapa de Cobertura Estimado — 2,4 GHz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">Upload do heatmap 2,4 GHz</p>
                <p className="text-xs mt-1">Arraste ou clique para selecionar (PNG, JPG, PDF)</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Observações</Label>
                <Textarea
                  value={obs24}
                  onChange={(e) => setObs24(e.target.value)}
                  placeholder="Observações sobre a cobertura estimada em 2,4 GHz..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 4: Mapa 5 GHz */}
        <TabsContent value="mapa5">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Mapa de Cobertura Estimado — 5 GHz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">Upload do heatmap 5 GHz</p>
                <p className="text-xs mt-1">Arraste ou clique para selecionar (PNG, JPG, PDF)</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Observações</Label>
                <Textarea
                  value={obs5}
                  onChange={(e) => setObs5(e.target.value)}
                  placeholder="Observações sobre a cobertura estimada em 5 GHz..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Aba 5: Site Survey */}
        <TabsContent value="site">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Site Survey / Planta Baixa</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed rounded-lg p-8 text-center text-muted-foreground hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="text-sm font-medium">Upload da planta baixa / site survey</p>
                <p className="text-xs mt-1">Arraste ou clique para selecionar (PNG, JPG, PDF, DWG)</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs">Observações sobre posicionamento dos APs</Label>
                <Textarea
                  value={obsSite}
                  onChange={(e) => setObsSite(e.target.value)}
                  placeholder="Detalhes sobre o posicionamento planejado dos Access Points..."
                  rows={4}
                />
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
        <Button onClick={() => handleSave(true)} className="gap-2">
          <CheckCircle className="w-4 h-4" />
          Finalizar PPI
        </Button>
      </div>
    </div>
  );
};

export default PPIFormulario;
