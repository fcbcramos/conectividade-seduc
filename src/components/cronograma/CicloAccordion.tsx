import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  School, 
  MapPin, 
  Building2, 
  TreePine,
  Calendar
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

const CicloAccordion = ({ expandedCiclo, onExpandChange }: CicloAccordionProps) => {
  const ciclosOrdenados = Object.entries(ciclosResumo).sort((a, b) => {
    // Prioritários primeiro
    if (a[1].prioridade && !b[1].prioridade) return -1;
    if (!a[1].prioridade && b[1].prioridade) return 1;
    // Depois por número do ciclo
    return a[0].localeCompare(b[0]);
  });

  const getEscolasPorCiclo = (cicloNome: string): EscolaCronograma[] => {
    return escolasCronograma.filter(e => e.cicloAtendimento === cicloNome).slice(0, 10);
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
          const escolas = getEscolasPorCiclo(cicloNome);
          const prioridade = isPrioridade(cicloNome);
          
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
                      {dados.escolas} escolas
                    </Badge>
                    {prioridade && (
                      <Badge variant="destructive" className="text-xs">
                        PRIORIDADE
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
                      <p className="text-lg font-bold text-foreground">{dados.escolas}</p>
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
                  
                  {/* Mini tabela de escolas */}
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">
                      Amostra de escolas ({Math.min(10, escolas.length)} de {dados.escolas})
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
                                  {escola.tipologia}
                                </Badge>
                              </td>
                              <td className="py-2 px-2 text-center">
                                <Badge 
                                  variant={escola.statusMeta2026 === "C" ? "default" : "outline"} 
                                  className={`text-xs ${escola.statusMeta2026 === "NC" ? 'border-amber-500 text-amber-600' : ''}`}
                                >
                                  {escola.statusMeta2026}
                                </Badge>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
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
