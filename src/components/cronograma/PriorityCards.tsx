import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Calendar, School, ChevronRight } from "lucide-react";
import { ciclosResumo, CICLOS_PRIORITARIOS } from "@/data/cronogramaData";
import { Button } from "@/components/ui/button";

interface PriorityCardsProps {
  onCicloClick?: (ciclo: string) => void;
}

const PriorityCards = ({ onCicloClick }: PriorityCardsProps) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-destructive" />
        <h2 className="text-xl font-bold text-foreground">Ciclos Prioritários</h2>
        <Badge variant="destructive" className="ml-2">
          Atenção Especial
        </Badge>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CICLOS_PRIORITARIOS.map((cicloNome) => {
          const ciclo = ciclosResumo[cicloNome];
          return (
            <Card 
              key={cicloNome}
              className="border-2 border-destructive/50 bg-destructive/5 hover:bg-destructive/10 transition-colors cursor-pointer shadow-lg"
              onClick={() => onCicloClick?.(cicloNome)}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-bold text-destructive flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-destructive animate-pulse" />
                    {cicloNome}
                  </CardTitle>
                  <Badge variant="destructive" className="text-xs">
                    PRIORIDADE
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-foreground">
                  <School className="w-4 h-4 text-destructive" />
                  <span className="text-2xl font-bold">{ciclo.escolas}</span>
                  <span className="text-sm text-muted-foreground">escolas</span>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>Início: <span className="font-semibold text-foreground">{ciclo.mesInicio}</span></span>
                </div>
                
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">Urbana:</span> {ciclo.urbana} | <span className="font-medium">Rural:</span> {ciclo.rural}
                </div>
                
                <div className="text-xs text-muted-foreground">
                  <span className="font-medium">GREs:</span> {ciclo.gres.slice(0, 2).join(", ")}
                  {ciclo.gres.length > 2 && ` +${ciclo.gres.length - 2}`}
                </div>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full mt-2 text-destructive hover:text-destructive hover:bg-destructive/10"
                >
                  Ver detalhes
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PriorityCards;
