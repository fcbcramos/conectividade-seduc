import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  School, 
  Calendar, 
  AlertTriangle, 
  MapPin,
  Building2,
  TreePine,
  Wifi
} from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";
import {
  PriorityCards,
  CicloChart,
  CicloAccordion,
  CronogramaFilters,
  EscolasTable,
  FilterState
} from "@/components/cronograma";
import { 
  escolasCronograma, 
  estatisticasCronograma,
  isPrioridade 
} from "@/data/cronogramaData";

const Section15 = () => {
  const [expandedCiclo, setExpandedCiclo] = useState<string | undefined>();
  const [filters, setFilters] = useState<FilterState>({
    search: "",
    ciclo: "all",
    gre: "all",
    localizacao: "all",
    tipologia: "all",
    apenasPrioritarios: false
  });

  // Contagem de resultados filtrados
  const filteredCount = useMemo(() => {
    return escolasCronograma.filter((escola) => {
      if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        const matchSearch = 
          escola.nomeEscola.toLowerCase().includes(searchLower) ||
          escola.inep.includes(filters.search) ||
          escola.municipio.toLowerCase().includes(searchLower) ||
          escola.gre.toLowerCase().includes(searchLower);
        if (!matchSearch) return false;
      }
      if (filters.ciclo !== "all" && escola.cicloAtendimento !== filters.ciclo) return false;
      if (filters.gre !== "all" && escola.gre !== filters.gre) return false;
      if (filters.localizacao !== "all" && escola.localizacao !== filters.localizacao) return false;
      if (filters.tipologia !== "all" && escola.tipologia !== filters.tipologia) return false;
      if (filters.apenasPrioritarios && !isPrioridade(escola.cicloAtendimento)) return false;
      return true;
    }).length;
  }, [filters]);

  const handleCicloClick = (ciclo: string) => {
    setExpandedCiclo(ciclo);
    // Scroll to accordion
    setTimeout(() => {
      document.getElementById('ciclo-accordion')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const kpis = [
    { 
      icon: School, 
      label: "Total de Escolas", 
      value: estatisticasCronograma.totalEscolas,
      color: "text-primary"
    },
    { 
      icon: Calendar, 
      label: "Ciclos de Atendimento", 
      value: estatisticasCronograma.totalCiclos,
      color: "text-primary"
    },
    { 
      icon: AlertTriangle, 
      label: "Ciclos Prioritários", 
      value: estatisticasCronograma.ciclosPrioritarios,
      color: "text-destructive"
    },
    { 
      icon: School, 
      label: "Escolas Prioritárias", 
      value: estatisticasCronograma.escolasPrioritarias,
      color: "text-destructive"
    },
    { 
      icon: MapPin, 
      label: "GREs Envolvidas", 
      value: estatisticasCronograma.totalGres,
      color: "text-accent"
    },
    { 
      icon: Wifi, 
      label: "CETIs", 
      value: estatisticasCronograma.totalCetis,
      color: "text-primary"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={15} />
      
      {/* Header */}
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 15</Badge>
        <h1 className="text-3xl font-bold text-foreground">Cronograma de Atendimento</h1>
        <p className="text-muted-foreground mt-2">
          Detalhamento das 584 escolas distribuídas em 6 ciclos de atendimento, 
          com destaque para os <span className="text-destructive font-semibold">ciclos prioritários</span>
        </p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label} className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className={`w-10 h-10 mx-auto rounded-full bg-muted flex items-center justify-center mb-2`}>
                <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
              </div>
              <p className="text-2xl font-bold text-foreground">{kpi.value}</p>
              <p className="text-xs text-muted-foreground">{kpi.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Distribuição Urbana x Rural */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {estatisticasCronograma.escolasUrbanas}
                </p>
                <p className="text-sm text-muted-foreground">Escolas Urbanas</p>
              </div>
              <div className="ml-auto">
                <Badge variant="secondary">
                  {Math.round((estatisticasCronograma.escolasUrbanas / estatisticasCronograma.totalEscolas) * 100)}%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TreePine className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">
                  {estatisticasCronograma.escolasRurais}
                </p>
                <p className="text-sm text-muted-foreground">Escolas Rurais</p>
              </div>
              <div className="ml-auto">
                <Badge variant="secondary">
                  {Math.round((estatisticasCronograma.escolasRurais / estatisticasCronograma.totalEscolas) * 100)}%
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ciclos Prioritários */}
      <PriorityCards onCicloClick={handleCicloClick} />

      {/* Gráfico de Ciclos */}
      <CicloChart />

      {/* Acordeão de Ciclos */}
      <div id="ciclo-accordion">
        <CicloAccordion 
          expandedCiclo={expandedCiclo}
          onExpandChange={setExpandedCiclo}
        />
      </div>

      {/* Filtros e Tabela */}
      <CronogramaFilters
        filters={filters}
        onFiltersChange={setFilters}
        totalResults={estatisticasCronograma.totalEscolas}
        filteredResults={filteredCount}
      />

      <EscolasTable 
        escolas={escolasCronograma}
        filters={filters}
      />

      <SectionNavigation currentSection={15} />
    </div>
  );
};

export default Section15;
