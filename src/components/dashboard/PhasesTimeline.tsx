import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phases } from "@/data/contractData";
import { CheckCircle, Clock, Circle } from "lucide-react";

const PhasesTimeline = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Concluída": return <CheckCircle className="w-5 h-5 text-accent" />;
      case "Em andamento": return <Clock className="w-5 h-5 text-secondary" />;
      default: return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-accent/10 text-accent border-accent/30";
      case "Em andamento": return "bg-secondary/20 text-secondary-foreground border-secondary/30";
      default: return "bg-muted text-muted-foreground border-muted";
    }
  };

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
            {phases.map((phase, index) => (
              <div key={phase.id} className="relative flex items-start gap-4 pl-2">
                {/* Timeline dot */}
                <div className="relative z-10 bg-card p-1">
                  {getStatusIcon(phase.status)}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge variant="outline" className="font-mono text-xs">
                      {phase.id}
                    </Badge>
                    <Badge className={`text-xs ${getStatusColor(phase.status)}`}>
                      {phase.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground ml-auto">
                      {phase.percentage}%
                    </span>
                  </div>
                  <h4 className="font-medium text-sm mt-1 truncate">{phase.name}</h4>
                  
                  {/* Progress bar */}
                  <div className="mt-2 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        phase.status === "Concluída" ? "bg-accent" :
                        phase.status === "Em andamento" ? "bg-secondary" : "bg-muted"
                      }`}
                      style={{ 
                        width: phase.status === "Concluída" ? "100%" : 
                               phase.status === "Em andamento" ? "60%" : "0%" 
                      }}
                    />
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
