import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { solutionArchitecture } from "@/data/contractData";
import { Globe, Shield, Activity, Wifi, Network, LayoutDashboard, ArrowDown, Server } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Shield,
  Activity,
  Wifi,
  Network,
  LayoutDashboard,
};

const SolutionArchitecture = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Server className="w-5 h-5 text-primary" />
          Arquitetura da Solução
        </CardTitle>
        <p className="text-sm text-muted-foreground mt-2">
          Ecossistema integrado de alta disponibilidade, segurança e performance para conectividade end-to-end
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {solutionArchitecture.map((layer, index) => {
            const IconComponent = iconMap[layer.icon] || Globe;
            const isLast = index === solutionArchitecture.length - 1;
            const isManagement = layer.id === "sdn" || layer.id === "sgi";
            
            return (
              <div key={layer.id}>
                {/* Management layers side by side */}
                {layer.id === "sdn" ? (
                  <div className="grid grid-cols-2 gap-3">
                    {solutionArchitecture.filter(l => l.id === "sdn" || l.id === "sgi").map((mgmtLayer) => {
                      const MgmtIcon = iconMap[mgmtLayer.icon] || Globe;
                      const fullName = mgmtLayer.id === "sdn" 
                        ? "Software-Defined Networking" 
                        : "Sistema de Gestão Integrada";
                      return (
                        <div
                          key={mgmtLayer.id}
                          className="relative p-4 rounded-lg border-2 bg-card hover:shadow-md transition-shadow"
                          style={{ borderColor: mgmtLayer.color }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-1"
                              style={{ backgroundColor: `${mgmtLayer.color}20` }}
                            >
                              <MgmtIcon className="w-5 h-5" style={{ color: mgmtLayer.color }} />
                            </div>
                            <div className="flex-1 text-center">
                              <div className="flex items-center justify-center gap-2 mb-1">
                                <span
                                  className="text-xs font-bold px-2 py-0.5 rounded"
                                  style={{ backgroundColor: mgmtLayer.color, color: 'white' }}
                                >
                                  {mgmtLayer.shortName}
                                </span>
                                <span className="text-sm font-medium text-foreground">
                                  {fullName}
                                </span>
                              </div>
                              <p className="text-xs text-muted-foreground leading-relaxed">
                                {mgmtLayer.description}
                              </p>
                              <div className="flex flex-wrap justify-center gap-1 mt-2">
                                {mgmtLayer.components.slice(0, 2).map((comp) => (
                                  <span
                                    key={comp}
                                    className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                                  >
                                    {comp}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : !isManagement && (
                  <>
                    <div
                      className="relative p-4 rounded-lg border-2 bg-card hover:shadow-md transition-shadow"
                      style={{ borderColor: layer.color }}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0 mt-1"
                          style={{ backgroundColor: `${layer.color}20` }}
                        >
                          <IconComponent className="w-6 h-6" style={{ color: layer.color }} />
                        </div>
                        <div className="flex-1 min-w-0 text-center">
                          <div className="flex items-center justify-center gap-2 mb-1">
                            <span className="text-sm font-medium text-foreground">
                              {layer.name.replace(` (${layer.shortName})`, '')}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">
                            {layer.description}
                          </p>
                          <div className="flex flex-wrap justify-center gap-1 mt-2">
                            {layer.components.map((comp) => (
                              <span
                                key={comp}
                                className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground"
                              >
                                {comp}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Arrow connector - skip for layer before management */}
                    {index < solutionArchitecture.length - 3 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                    )}
                    {index === solutionArchitecture.length - 3 && (
                      <div className="flex justify-center py-1">
                        <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default SolutionArchitecture;
