import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { solutionArchitecture } from "@/data/contractData";
import { Globe, Shield, Activity, Wifi, Network, LayoutDashboard, Server, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Shield,
  Activity,
  Wifi,
  Network,
  LayoutDashboard,
};

const SolutionArchitecture = () => {
  const flowLayers = solutionArchitecture.filter(l => !["sdn", "sgi"].includes(l.id));
  const managementLayers = solutionArchitecture.filter(l => ["sdn", "sgi"].includes(l.id));

  return (
    <Card className="shadow-card overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
        <CardTitle className="flex items-center gap-2">
          <Server className="w-5 h-5 text-primary" />
          Arquitetura da Solução
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Conectividade end-to-end: do Core da internet até o dispositivo do aluno
        </p>
      </CardHeader>
      <CardContent className="pt-6">
        {/* Main Flow - Horizontal */}
        <div className="mb-6">
          <div className="flex items-center gap-1 overflow-x-auto pb-4">
            {flowLayers.map((layer, index) => {
              const IconComponent = iconMap[layer.icon] || Globe;
              const isLast = index === flowLayers.length - 1;
              
              return (
                <div key={layer.id} className="flex items-center">
                  <div 
                    className="relative flex flex-col items-center min-w-[140px] p-3 rounded-xl border-2 bg-card hover:shadow-lg transition-all group"
                    style={{ borderColor: layer.color }}
                  >
                    {/* Layer number badge */}
                    <div 
                      className="absolute -top-2 -left-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-md"
                      style={{ backgroundColor: layer.color }}
                    >
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: `${layer.color}15` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: layer.color }} />
                    </div>
                    
                    {/* Short name badge */}
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-full mb-1"
                      style={{ backgroundColor: layer.color, color: 'white' }}
                    >
                      {layer.shortName}
                    </span>
                    
                    {/* Tooltip on hover */}
                    <div className="opacity-0 group-hover:opacity-100 absolute -bottom-20 left-1/2 -translate-x-1/2 w-48 p-2 bg-popover border rounded-lg shadow-lg z-10 transition-opacity pointer-events-none">
                      <p className="text-[10px] text-muted-foreground leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Arrow connector */}
                  {!isLast && (
                    <ChevronRight className="w-5 h-5 text-muted-foreground/40 mx-1 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Management Layers - Side by side below */}
        <div className="border-t pt-4">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider font-medium">
            Camadas de Gestão
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {managementLayers.map((layer, index) => {
              const IconComponent = iconMap[layer.icon] || Globe;
              
              return (
                <div
                  key={layer.id}
                  className="flex items-start gap-3 p-3 rounded-lg border bg-muted/30 hover:bg-muted/50 transition-colors"
                  style={{ borderLeftWidth: 4, borderLeftColor: layer.color }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${layer.color}15` }}
                  >
                    <IconComponent className="w-5 h-5" style={{ color: layer.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-[10px] font-bold px-2 py-0.5 rounded"
                        style={{ backgroundColor: layer.color, color: 'white' }}
                      >
                        {layer.shortName}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {layer.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {layer.components.slice(0, 3).map((comp) => (
                        <span
                          key={comp}
                          className="text-[9px] px-1.5 py-0.5 rounded bg-background text-muted-foreground"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionArchitecture;
