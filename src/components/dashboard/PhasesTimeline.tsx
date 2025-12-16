import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phases } from "@/data/contractData";
import { Circle, Calendar } from "lucide-react";

const PhasesTimeline = () => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg">Fases do Projeto</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
          
          <div className="space-y-4">
            {phases.map((phase) => (
              <div key={phase.id} className="relative flex items-start gap-4 pl-2">
                {/* Timeline dot */}
                <div className="relative z-10 bg-card p-1">
                  <Circle className="w-5 h-5 text-primary" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono text-xs">
                      {phase.id}
                    </Badge>
                    <Badge className="text-xs bg-primary/10 text-primary border-primary/30">
                      Planejado
                    </Badge>
                    <div className="flex items-center gap-1 ml-auto text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{phase.month}</span>
                    </div>
                  </div>
                  <h4 className="font-medium text-sm mt-1 truncate">{phase.name}</h4>
                  
                  {/* Progress bar - empty for planned */}
                  <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-primary/30" style={{ width: "0%" }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PhasesTimeline;
