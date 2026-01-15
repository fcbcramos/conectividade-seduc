import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  ChevronLeft, 
  ChevronRight, 
  ChevronsLeft, 
  ChevronsRight,
  MapPin,
  ExternalLink
} from "lucide-react";
import { EscolaCronograma, isPrioridade } from "@/data/cronogramaData";
import { FilterState } from "./CronogramaFilters";

interface EscolasTableProps {
  escolas: EscolaCronograma[];
  filters: FilterState;
}

const ITEMS_PER_PAGE = 20;

const EscolasTable = ({ escolas, filters }: EscolasTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortField, setSortField] = useState<keyof EscolaCronograma>("cicloAtendimento");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  // Filtragem
  const filteredEscolas = useMemo(() => {
    return escolas.filter((escola) => {
      // Busca por texto
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchSearch = 
          escola.nomeEscola.toLowerCase().includes(searchLower) ||
          escola.inep.includes(filters.search) ||
          escola.municipio.toLowerCase().includes(searchLower) ||
          escola.gre.toLowerCase().includes(searchLower);
        if (!matchSearch) return false;
      }

      // Filtro de ciclo
      if (filters.ciclo !== "all" && escola.cicloAtendimento !== filters.ciclo) {
        return false;
      }

      // Filtro de GRE
      if (filters.gre !== "all" && escola.gre !== filters.gre) {
        return false;
      }

      // Filtro de localização
      if (filters.localizacao !== "all" && escola.localizacao !== filters.localizacao) {
        return false;
      }

      // Filtro de tipologia
      if (filters.tipologia !== "all" && escola.tipologia !== filters.tipologia) {
        return false;
      }

      // Filtro apenas prioritários
      if (filters.apenasPrioritarios && !isPrioridade(escola.cicloAtendimento)) {
        return false;
      }

      return true;
    });
  }, [escolas, filters]);

  // Ordenação
  const sortedEscolas = useMemo(() => {
    return [...filteredEscolas].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortDirection === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      
      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortDirection === "asc" 
          ? aValue - bValue
          : bValue - aValue;
      }
      
      return 0;
    });
  }, [filteredEscolas, sortField, sortDirection]);

  // Paginação
  const totalPages = Math.ceil(sortedEscolas.length / ITEMS_PER_PAGE);
  const paginatedEscolas = sortedEscolas.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (field: keyof EscolaCronograma) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const SortableHeader = ({ field, children }: { field: keyof EscolaCronograma; children: React.ReactNode }) => (
    <TableHead 
      className="cursor-pointer hover:bg-muted/50 transition-colors"
      onClick={() => handleSort(field)}
    >
      <div className="flex items-center gap-1">
        {children}
        {sortField === field && (
          <span className="text-primary">{sortDirection === "asc" ? "↑" : "↓"}</span>
        )}
      </div>
    </TableHead>
  );

  // Reset page when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [filters]);

  return (
    <Card className="shadow-card overflow-hidden">
      <div className="p-4 border-b">
        <h3 className="font-semibold text-foreground">Listagem Completa de Escolas</h3>
        <p className="text-sm text-muted-foreground">
          Clique nos cabeçalhos para ordenar
        </p>
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <SortableHeader field="cicloAtendimento">Ciclo</SortableHeader>
              <SortableHeader field="inep">INEP</SortableHeader>
              <SortableHeader field="nomeEscola">Escola</SortableHeader>
              <SortableHeader field="municipio">Município</SortableHeader>
              <SortableHeader field="gre">GRE</SortableHeader>
              <SortableHeader field="localizacao">Local</SortableHeader>
              <SortableHeader field="tipologia">Tipo</SortableHeader>
              <SortableHeader field="metaWifi2026">Meta APs</SortableHeader>
              <SortableHeader field="statusMeta2026">Status</SortableHeader>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedEscolas.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-8 text-muted-foreground">
                  Nenhuma escola encontrada com os filtros selecionados
                </TableCell>
              </TableRow>
            ) : (
              paginatedEscolas.map((escola) => {
                const prioridade = isPrioridade(escola.cicloAtendimento);
                return (
                  <TableRow 
                    key={escola.inep}
                    className={prioridade ? "bg-destructive/5" : ""}
                  >
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {prioridade && (
                          <span className="w-2 h-2 rounded-full bg-destructive" />
                        )}
                        <Badge 
                          variant={prioridade ? "destructive" : "secondary"}
                          className="text-xs font-mono"
                        >
                          {escola.cicloAtendimento.replace("CICLO ", "")}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-xs">{escola.inep}</TableCell>
                    <TableCell className="max-w-[200px]">
                      <span className="truncate block" title={escola.nomeEscola}>
                        {escola.nomeEscola}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm">{escola.municipio}</TableCell>
                    <TableCell className="text-xs text-muted-foreground">{escola.gre}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {escola.localizacao === "Urbana" ? "🏙️" : "🌾"} {escola.localizacao}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={escola.tipologia === "CETI" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {escola.tipologia}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center font-bold">{escola.metaWifi2026}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={escola.statusMeta2026 === "C" ? "default" : "outline"}
                        className={`text-xs ${
                          escola.statusMeta2026 === "NC" 
                            ? "border-amber-500 text-amber-600 bg-amber-50" 
                            : escola.statusMeta2026 === "EP"
                            ? "border-blue-500 text-blue-600 bg-blue-50"
                            : ""
                        }`}
                      >
                        {escola.statusMeta2026 === "NC" && "⚠️ "}
                        {escola.statusMeta2026 === "EP" && "🔄 "}
                        {escola.statusMeta2026 === "C" && "✅ "}
                        {escola.statusMeta2026}
                      </Badge>
                    </TableCell>
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Paginação */}
      {totalPages > 1 && (
        <div className="p-4 border-t flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages} • {sortedEscolas.length} escolas
          </p>
          
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex items-center gap-1 mx-2">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? "default" : "outline"}
                    size="icon"
                    onClick={() => setCurrentPage(pageNum)}
                    className="w-8 h-8"
                  >
                    {pageNum}
                  </Button>
                );
              })}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default EscolasTable;
