import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  School, 
  MapPin, 
  Building2, 
  TreePine,
  Calendar,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { 
  ciclosResumo, 
  isPrioridade, 
  escolasCronograma,
  EscolaCronograma 
} from "@/data/cronogramaData";

interface CicloAccordionProps {
  expandedCiclo?: string;
  onExpandChange?: (ciclo: string) => void;
}

const ESCOLAS_POR_PAGINA = 15;

const CicloAccordion = ({ expandedCiclo, onExpandChange }: CicloAccordionProps) => {
  const [paginaAtual, setPaginaAtual] = useState<Record<string, number>>({});

  const ciclosOrdenados = Object.entries(ciclosResumo).sort((a, b) => {
    if (a[1].prioridade && !b[1].prioridade) return -1;
    if (!a[1].prioridade && b[1].prioridade) return 1;
    return a[0].localeCompare(b[0]);
  });

  const getEscolasPorCiclo = (cicloNome: string): { escolas: EscolaCronograma[]; total: number; pagina: number; totalPaginas: number } => {
    const todasEscolas = escolasCronograma.filter(e => e.cicloAtendimento === cicloNome);
    const pagina = paginaAtual[cicloNome] || 0;
    const inicio = pagina * ESCOLAS_POR_PAGINA;
    const escolasPaginadas = todasEscolas.slice(inicio, inicio + ESCOLAS_POR_PAGINA);
    const totalPaginas = Math.ceil(todasEscolas.length / ESCOLAS_POR_PAGINA);
    
    return {
      escolas: escolasPaginadas,
      total: todasEscolas.length,
      pagina,
      totalPaginas
    };
  };

  const handlePaginaAnterior = (cicloNome: string) => {
    setPaginaAtual(prev => ({
      ...prev,
      [cicloNome]: Math.max(0, (prev[cicloNome] || 0) - 1)
    }));
  };

  const handleProximaPagina = (cicloNome: string, totalPaginas: number) => {
    setPaginaAtual(prev => ({
      ...prev,
      [cicloNome]: Math.min(totalPaginas - 1, (prev[cicloNome] || 0) + 1)
    }));
  };

  return (
    <Card className="shadow-card">
      <div className="p-4 border-b">
        <h3 className="text-lg font-semibold text-foreground">Detalhamento por Ciclo</h3>
        <p className="text-sm text-muted-foreground">Clique para expandir e ver as escolas de cada ciclo</p>
      </div>
      
      <Accordion 
        type="single" 
        collapsible 
        value={expandedCiclo}
        onValueChange={onExpandChange}
        className="px-4 pb-4"
      >
        {ciclosOrdenados.map(([cicloNome, dados]) => {
          const { escolas, total, pagina, totalPaginas } = getEscolasPorCiclo(cicloNome);
          const prioridade = isPrioridade(cicloNome);
          const inicioExibicao = pagina * ESCOLAS_POR_PAGINA + 1;
          const fimExibicao = Math.min((pagina + 1) * ESCOLAS_POR_PAGINA, total);
          
          return (
            <AccordionItem 
              key={cicloNome} 
              value={cicloNome}
              className={`border rounded-lg mb-2 ${
                prioridade 
                  ? 'border-destructive/50 bg-destructive/5' 
                  : 'border-border'
              }`}
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline">
                <div className="flex items-center justify-between w-full pr-4">
                  <div className="flex items-center gap-3">
                    {prioridade && (
                      <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                    )}
                    <span className={`font-bold ${prioridade ? 'text-destructive' : 'text-foreground'}`}>
                      {cicloNome}
                    </span>
                    <Badge variant="secondary" className="text-xs">
                      {total} escolas
                    </Badge>
                    {prioridade ? (
                      <Badge variant="destructive" className="text-xs">
                        IMPLANTAÇÃO
                      </Badge>
                    ) : (
                      <Badge className="text-xs bg-blue-500 hover:bg-blue-600">
                        MODERNIZAÇÃO
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {dados.mesInicio}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-4 pb-4">
                <div className="space-y-4">
                  {/* Resumo do ciclo */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <School className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <p className="text-lg font-bold text-foreground">{total}</p>
                      <p className="text-xs text-muted-foreground">Total</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <Building2 className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <p className="text-lg font-bold text-foreground">{dados.urbana}</p>
                      <p className="text-xs text-muted-foreground">Urbana</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <TreePine className="w-5 h-5 mx-auto mb-1 text-accent" />
                      <p className="text-lg font-bold text-foreground">{dados.rural}</p>
                      <p className="text-xs text-muted-foreground">Rural</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-3 text-center">
                      <MapPin className="w-5 h-5 mx-auto mb-1 text-destructive" />
                      <p className="text-lg font-bold text-foreground">{dados.gres.length}</p>
                      <p className="text-xs text-muted-foreground">GREs</p>
                    </div>
                  </div>
                  
                  {/* GREs */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">Gerências Regionais (GREs)</p>
                    <div className="flex flex-wrap gap-2">
                      {dados.gres.map((gre) => (
                        <Badge key={gre} variant="outline" className="text-xs">
                          {gre}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {/* Tabela de escolas */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Escolas do Ciclo (mostrando {inicioExibicao}-{fimExibicao} de {total})
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left py-2 px-2 font-medium text-muted-foreground">INEP</th>
                            <th className="text-left py-2 px-2 font-medium text-muted-foreground">Escola</th>
                            <th className="text-left py-2 px-2 font-medium text-muted-foreground">Município</th>
                            <th className="text-left py-2 px-2 font-medium text-muted-foreground">Tipo</th>
                            <th className="text-center py-2 px-2 font-medium text-muted-foreground">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {escolas.map((escola) => (
                            <tr key={escola.inep} className="border-b border-muted">
                              <td className="py-2 px-2 font-mono text-xs">{escola.inep}</td>
                              <td className="py-2 px-2 text-xs max-w-[200px] truncate" title={escola.nomeEscola}>
                                {escola.nomeEscola}
                              </td>
                              <td className="py-2 px-2 text-xs">{escola.municipio}</td>
                              <td className="py-2 px-2">
                                <Badge variant={escola.tipologia === "CETI" ? "default" : "secondary"} className="text-xs">
                                  {escola.tipologia.split(' ')[0]}
                                </Badge>
                              </td>
                              <td className="py-2 px-2 text-center">
                                <Badge 
                                  variant={escola.statusMeta2026 === "CONFORME" ? "default" : "outline"} 
                                  className={`text-xs ${escola.statusMeta2026 === "NÃO CONFORME" ? 'border-amber-500 text-amber-600' : ''}`}
                                >
                                  {escola.statusMeta2026 === "NÃO CONFORME" ? "NC" : "C"}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    
                    {/* Controles de paginação */}
                    {totalPaginas > 1 && (
                      <div className="flex items-center justify-between mt-4 pt-3 border-t">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handlePaginaAnterior(cicloNome)}
                          disabled={pagina === 0}
                          className="flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Anterior
                        </Button>
                        <span className="text-sm text-muted-foreground">
                          Página {pagina + 1} de {totalPaginas}
                        </span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleProximaPagina(cicloNome, totalPaginas)}
                          disabled={pagina >= totalPaginas - 1}
                          className="flex items-center gap-1"
                        >
                          Próxima
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Card>
  );
};

export default CicloAccordion;
