import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { slaMetrics } from "@/data/contractData";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const SLAGauges = () => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg">Indicadores de SLA</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {slaMetrics.map((metric) => (
            <div 
              key={metric.metric}
              className="bg-muted/30 rounded-lg p-4 border border-border/50"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                  {metric.metric}
                </p>
                {metric.status === "Conforme" ? (
                  <CheckCircle className="w-4 h-4 text-accent" />
                ) : metric.status === "Planejado" ? (
                  <Clock className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <AlertCircle className="w-4 h-4 text-destructive" />
                )}
              </div>
              
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-foreground">{metric.current}</span>
                <span className="text-xs text-muted-foreground">/ {metric.target}</span>
              </div>
              
              <Badge 
                variant={metric.status === "Conforme" ? "default" : metric.status === "Planejado" ? "secondary" : "destructive"}
                className={`mt-2 text-xs ${
                  metric.status === "Conforme" 
                    ? "bg-accent/10 text-accent hover:bg-accent/20" 
                    : metric.status === "Planejado"
                    ? "bg-muted text-muted-foreground hover:bg-muted/80"
                    : ""
                }`}
              >
                {metric.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SLAGauges;
