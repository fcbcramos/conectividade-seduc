import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, X, AlertTriangle } from "lucide-react";
import { gresList, CICLOS_PRIORITARIOS, ciclosResumo } from "@/data/cronogramaData";

export interface FilterState {
  search: string;
  ciclo: string;
  gre: string;
  localizacao: string;
  tipologia: string;
  apenasPrioritarios: boolean;
}

interface CronogramaFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  totalResults: number;
  filteredResults: number;
}

const CronogramaFilters = ({ 
  filters, 
  onFiltersChange,
  totalResults,
  filteredResults 
}: CronogramaFiltersProps) => {
  const ciclos = Object.keys(ciclosResumo);

  const handleFilterChange = (key: keyof FilterState, value: string | boolean) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      ciclo: "all",
      gre: "all",
      localizacao: "all",
      tipologia: "all",
      apenasPrioritarios: false
    });
  };

  const hasActiveFilters = 
    filters.search !== "" ||
    filters.ciclo !== "all" ||
    filters.gre !== "all" ||
    filters.localizacao !== "all" ||
    filters.tipologia !== "all" ||
    filters.apenasPrioritarios;

  return (
    <Card className="p-4 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <h3 className="font-semibold text-foreground">Filtros</h3>
        </div>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="w-4 h-4 mr-1" />
            Limpar filtros
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
        {/* Busca */}
        <div className="lg:col-span-2">
          <Label htmlFor="search" className="text-xs text-muted-foreground">Buscar escola</Label>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              id="search"
              placeholder="Nome, INEP, município..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        {/* Ciclo */}
        <div>
          <Label htmlFor="ciclo" className="text-xs text-muted-foreground">Ciclo</Label>
          <Select value={filters.ciclo} onValueChange={(v) => handleFilterChange("ciclo", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Todos os ciclos" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos os ciclos</SelectItem>
              {ciclos.map((ciclo) => (
                <SelectItem key={ciclo} value={ciclo}>
                  {CICLOS_PRIORITARIOS.includes(ciclo) && "🔴 "}
                  {ciclo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* GRE */}
        <div>
          <Label htmlFor="gre" className="text-xs text-muted-foreground">GRE</Label>
          <Select value={filters.gre} onValueChange={(v) => handleFilterChange("gre", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Todas as GREs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as GREs</SelectItem>
              {gresList.map((gre) => (
                <SelectItem key={gre} value={gre}>{gre}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Localização */}
        <div>
          <Label htmlFor="localizacao" className="text-xs text-muted-foreground">Localização</Label>
          <Select value={filters.localizacao} onValueChange={(v) => handleFilterChange("localizacao", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="Urbana">Urbana</SelectItem>
              <SelectItem value="Rural">Rural</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tipologia */}
        <div>
          <Label htmlFor="tipologia" className="text-xs text-muted-foreground">Tipologia</Label>
          <Select value={filters.tipologia} onValueChange={(v) => handleFilterChange("tipologia", v)}>
            <SelectTrigger>
              <SelectValue placeholder="Todas" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas</SelectItem>
              <SelectItem value="CETI">CETI</SelectItem>
              <SelectItem value="UE">UE</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Filtro de prioridade em destaque */}
      <div className="mt-4 pt-4 border-t flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Checkbox
            id="prioritarios"
            checked={filters.apenasPrioritarios}
            onCheckedChange={(checked) => handleFilterChange("apenasPrioritarios", checked === true)}
          />
          <Label 
            htmlFor="prioritarios" 
            className="flex items-center gap-2 cursor-pointer text-destructive font-medium"
          >
            <AlertTriangle className="w-4 h-4" />
            Apenas Ciclos Prioritários (001, 002, 003)
          </Label>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Exibindo <span className="font-bold text-foreground">{filteredResults}</span> de {totalResults} escolas
        </p>
      </div>
    </Card>
  );
};

export default CronogramaFilters;
