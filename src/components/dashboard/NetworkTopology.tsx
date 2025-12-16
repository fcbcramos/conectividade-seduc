import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Shield, Activity, Network, Wifi } from "lucide-react";

const NetworkTopology = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Topologia de Rede por Escola</CardTitle>
        <p className="text-sm text-muted-foreground">
          Arquitetura de conectividade redundante implementada em cada unidade escolar
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative py-6">
          {/* WAN Links Row */}
          <div className="flex justify-center gap-16 mb-2">
            {/* Link Principal */}
            <div className="flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md border-2"
                style={{ backgroundColor: '#034ea2', borderColor: '#034ea2' }}
              >
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-semibold mt-2 text-center" style={{ color: '#034ea2' }}>
                Link Principal
              </span>
              <span className="text-[10px] text-muted-foreground">WAN Dedicado</span>
            </div>

            {/* Link Secundário */}
            <div className="flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md border-2"
                style={{ backgroundColor: '#007932', borderColor: '#007932' }}
              >
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-semibold mt-2 text-center" style={{ color: '#007932' }}>
                Link Secundário
              </span>
              <span className="text-[10px] text-muted-foreground">Redundância</span>
            </div>
          </div>

          {/* Connection Lines - WAN to Edge */}
          <div className="flex justify-center mb-2">
            <svg width="200" height="40" className="overflow-visible">
              <line x1="30" y1="0" x2="100" y2="35" stroke="#034ea2" strokeWidth="2" strokeDasharray="4,2" />
              <line x1="170" y1="0" x2="100" y2="35" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
            </svg>
          </div>

          {/* Edge Layer - Firewall + SQS */}
          <div className="flex justify-center gap-8 mb-2">
            {/* Firewall */}
            <div className="flex flex-col items-center">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                style={{ backgroundColor: '#ef4123', borderColor: '#ef4123' }}
              >
                <Shield className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-semibold mt-2" style={{ color: '#ef4123' }}>
                Firewall
              </span>
              <span className="text-[10px] text-muted-foreground">QoS/IPS</span>
            </div>

            {/* Horizontal connection */}
            <div className="flex items-center">
              <div className="w-8 h-0.5 bg-muted-foreground/30" />
            </div>

            {/* Sonda SQS */}
            <div className="flex flex-col items-center">
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                style={{ backgroundColor: '#fdb913', borderColor: '#fdb913' }}
              >
                <Activity className="w-7 h-7 text-white" />
              </div>
              <span className="text-xs font-semibold mt-2" style={{ color: '#fdb913' }}>
                Sonda SQS
              </span>
              <span className="text-[10px] text-muted-foreground">SIMET</span>
            </div>
          </div>

          {/* Connection Line - Edge to Switch */}
          <div className="flex justify-center mb-2">
            <div className="w-0.5 h-8 bg-muted-foreground/30" />
          </div>

          {/* Distribution Layer - Switch */}
          <div className="flex justify-center mb-2">
            <div className="flex flex-col items-center">
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md border-2"
                style={{ backgroundColor: '#034ea2', borderColor: '#034ea2' }}
              >
                <Network className="w-8 h-8 text-white" />
              </div>
              <span className="text-xs font-semibold mt-2" style={{ color: '#034ea2' }}>
                Switch PoE
              </span>
              <span className="text-[10px] text-muted-foreground">Distribuição</span>
            </div>
          </div>

          {/* Connection Lines - Switch to APs */}
          <div className="flex justify-center mb-2">
            <svg width="280" height="30" className="overflow-visible">
              <line x1="140" y1="0" x2="35" y2="25" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
              <line x1="140" y1="0" x2="95" y2="25" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
              <line x1="140" y1="0" x2="185" y2="25" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
              <line x1="140" y1="0" x2="245" y2="25" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
            </svg>
          </div>

          {/* Access Layer - Wi-Fi APs */}
          <div className="flex justify-center gap-6">
            {[1, 2, 3, 4].map((ap) => (
              <div key={ap} className="flex flex-col items-center">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#007932', borderColor: '#007932' }}
                >
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <span className="text-[10px] font-semibold mt-1" style={{ color: '#007932' }}>
                  AP {ap}
                </span>
                <span className="text-[9px] text-muted-foreground">Wi-Fi 6</span>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="mt-8 pt-4 border-t">
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#034ea2' }} />
                <span className="text-muted-foreground">WAN/Distribuição</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#007932' }} />
                <span className="text-muted-foreground">Redundância/Wi-Fi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#ef4123' }} />
                <span className="text-muted-foreground">Segurança</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#fdb913' }} />
                <span className="text-muted-foreground">Medição</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NetworkTopology;
