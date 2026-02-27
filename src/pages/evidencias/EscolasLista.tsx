import { useState, useMemo, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Search, Eye, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, ArrowLeft } from "lucide-react";
import {
  evidenciasEscolas,
  gresListEvidencias,
  zonaList,
  tipoLinkList,
  cicloList,
  statusEvidenciaList,
  type EvidenciaEscola,
  type StatusFase,
} from "@/data/evidenciasData";
import DadosExemploBanner from "@/components/evidencias/DadosExemploBanner";

const ITEMS_PER_PAGE = 20;

const StatusBadge = ({ status }: { status: StatusFase }) => {
  const variants: Record<StatusFase, string> = {
    "Concluído": "bg-accent/15 text-accent border-accent/30",
    "Em Andamento": "bg-secondary/15 text-secondary-foreground border-secondary/30",
    "Pendente": "bg-muted text-muted-foreground border-border",
    "N/A": "bg-muted text-muted-foreground/50 border-border",
  };
  return (
    <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${variants[status]}`}>
      {status}
    </Badge>
  );
};

const EscolasLista = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [greFilter, setGreFilter] = useState("all");
  const [zonaFilter, setZonaFilter] = useState("all");
  const [tipoLinkFilter, setTipoLinkFilter] = useState("all");
  const [cicloFilter, setCicloFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [faseFilter, setFaseFilter] = useState("all");

  useEffect(() => {
    const fase = searchParams.get("fase");
    if (fase && ["ppi", "pdi", "campo", "sqs"].includes(fase)) {
      setFaseFilter(fase);
    }
  }, [searchParams]);

  const filtered = useMemo(() => {
    return evidenciasEscolas.filter((e: EvidenciaEscola) => {
      if (search && !e.nomeEscola.toLowerCase().includes(search.toLowerCase()) && !e.inep.includes(search)) return false;
      if (greFilter !== "all" && e.gre !== greFilter) return false;
      if (zonaFilter !== "all" && e.zona !== zonaFilter) return false;
      if (tipoLinkFilter !== "all" && e.tipoLink !== tipoLinkFilter) return false;
      if (cicloFilter !== "all" && e.ciclo !== cicloFilter) return false;
      if (statusFilter !== "all" && e.statusGeral !== statusFilter) return false;
      if (faseFilter === "ppi" && e.statusPPI === "N/A") return false;
      if (faseFilter === "pdi" && e.statusPDI === "N/A") return false;
      if (faseFilter === "sqs" && e.statusSQS === "N/A") return false;
      if (faseFilter === "campo" && e.statusPPI === "N/A") return false;
      return true;
    });
  }, [search, greFilter, zonaFilter, tipoLinkFilter, cicloFilter, statusFilter, faseFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  const clearFilters = () => {
    setSearch(""); setGreFilter("all"); setZonaFilter("all");
    setTipoLinkFilter("all"); setCicloFilter("all"); setStatusFilter("all");
    setFaseFilter("all");
    setPage(1);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate("/evidencias")}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h1 className="text-2xl font-bold text-foreground">Escolas — Coleta de Evidências</h1>
          <p className="text-muted-foreground text-sm">
            {filtered.length} de {evidenciasEscolas.length} escolas
          </p>
        </div>
      </div>

      <DadosExemploBanner />

      {/* Filtros */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
            <Select value={faseFilter} onValueChange={(v) => { setFaseFilter(v); setPage(1); }}>
              <SelectTrigger><SelectValue placeholder="Fase" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Fases</SelectItem>
                <SelectItem value="ppi">PPI</SelectItem>
                <SelectItem value="campo">Campo</SelectItem>
                <SelectItem value="pdi">PDI</SelectItem>
                <SelectItem value="sqs">SQS/SIMET</SelectItem>
              </SelectContent>
            </Select>
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por INEP ou nome..."
                value={search}
                onChange={(e) => { setSearch(e.target.value); setPage(1); }}
                className="pl-9"
              />
            </div>
            <Select value={greFilter} onValueChange={(v) => { setGreFilter(v); setPage(1); }}>
              <SelectTrigger><SelectValue placeholder="GRE" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as GREs</SelectItem>
                {gresListEvidencias.map(g => <SelectItem key={g} value={g}>{g}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={zonaFilter} onValueChange={(v) => { setZonaFilter(v); setPage(1); }}>
              <SelectTrigger><SelectValue placeholder="Zona" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas as Zonas</SelectItem>
                {zonaList.map(z => <SelectItem key={z} value={z}>{z}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={tipoLinkFilter} onValueChange={(v) => { setTipoLinkFilter(v); setPage(1); }}>
              <SelectTrigger><SelectValue placeholder="Tipo Link" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Links</SelectItem>
                {tipoLinkList.map(t => <SelectItem key={t} value={t}>{t}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={cicloFilter} onValueChange={(v) => { setCicloFilter(v); setPage(1); }}>
              <SelectTrigger><SelectValue placeholder="Ciclo" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Ciclos</SelectItem>
                {cicloList.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={(v) => { setStatusFilter(v); setPage(1); }}>
              <SelectTrigger><SelectValue placeholder="Status" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os Status</SelectItem>
                {statusEvidenciaList.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          {(search || greFilter !== "all" || zonaFilter !== "all" || tipoLinkFilter !== "all" || cicloFilter !== "all" || statusFilter !== "all" || faseFilter !== "all") && (
            <div className="mt-3 flex justify-end">
              <Button variant="ghost" size="sm" onClick={clearFilters}>Limpar filtros</Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Tabela */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-24">INEP</TableHead>
                <TableHead>Escola</TableHead>
                <TableHead className="w-28">Município</TableHead>
                <TableHead className="w-36">GRE</TableHead>
                <TableHead className="w-20">Zona</TableHead>
                <TableHead className="w-24">Link</TableHead>
                <TableHead className="w-20">Ciclo</TableHead>
                <TableHead className="w-20 text-center">PPI</TableHead>
                <TableHead className="w-20 text-center">PDI</TableHead>
                <TableHead className="w-20 text-center">SQS</TableHead>
                <TableHead className="w-16"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={11} className="text-center py-8 text-muted-foreground">
                    Nenhuma escola encontrada com os filtros aplicados.
                  </TableCell>
                </TableRow>
              ) : (
                paginated.map((e) => (
                  <TableRow key={e.inep} className="cursor-pointer hover:bg-muted/50" onClick={() => navigate(`/evidencias/escola/${e.inep}`)}>
                    <TableCell className="font-mono text-xs">{e.inep}</TableCell>
                    <TableCell className="font-medium text-xs max-w-[200px] truncate" title={e.nomeEscola}>{e.nomeEscola}</TableCell>
                    <TableCell className="text-xs">{e.municipio}</TableCell>
                    <TableCell className="text-xs truncate" title={e.gre}>{e.gre.split(" - ")[0]}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[10px] ${e.zona === "RURAL" ? "border-destructive/30 text-destructive" : "border-primary/30 text-primary"}`}>
                        {e.zona}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-[10px] ${e.tipoLink === "Satelital" ? "border-destructive/30 text-destructive" : "border-accent/30 text-accent"}`}>
                        {e.tipoLink}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs">{e.ciclo.replace("CICLO ", "C")}</TableCell>
                    <TableCell className="text-center"><StatusBadge status={e.statusPPI} /></TableCell>
                    <TableCell className="text-center"><StatusBadge status={e.statusPDI} /></TableCell>
                    <TableCell className="text-center"><StatusBadge status={e.statusSQS} /></TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Eye className="w-3.5 h-3.5" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>

          {/* Paginação */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between p-4 border-t">
              <p className="text-xs text-muted-foreground">
                Página {page} de {totalPages}
              </p>
              <div className="flex items-center gap-1">
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setPage(1)} disabled={page === 1}>
                  <ChevronsLeft className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setPage(p => p - 1)} disabled={page === 1}>
                  <ChevronLeft className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Button>
                <Button variant="outline" size="icon" className="h-7 w-7" onClick={() => setPage(totalPages)} disabled={page === totalPages}>
                  <ChevronsRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default EscolasLista;
