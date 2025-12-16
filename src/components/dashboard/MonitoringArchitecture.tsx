import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Activity, Shield, Wifi, Server, AlertTriangle, CheckCircle,
  School, LayoutDashboard, MapPin, Code, BarChart3, Headphones, Users
} from "lucide-react";

const MonitoringArchitecture = () => {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="text-lg">Arquitetura do Sistema de Monitoramento e Fluxo de Dados</CardTitle>
        <p className="text-sm text-muted-foreground">
          Visão end-to-end desde a coleta nas escolas até a integração com sistemas SEDUC-PI
        </p>
      </CardHeader>
      <CardContent>
        <div className="relative py-6">
          {/* Layer 1 - Data Collection (Schools) */}
          <div className="mb-2">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
                style={{ backgroundColor: 'rgba(0, 121, 50, 0.1)', color: '#007932' }}>
                Camada de Coleta
              </span>
            </div>
            <div className="flex justify-center gap-6">
              {/* SIMET Box */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#007932', borderColor: '#007932' }}
                >
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#007932' }}>
                  Sonda SIMET
                </span>
                <span className="text-[10px] text-muted-foreground">631 unidades</span>
              </div>

              {/* Firewall */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#007932', borderColor: '#007932' }}
                >
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#007932' }}>
                  Firewall
                </span>
                <span className="text-[10px] text-muted-foreground">631 unidades</span>
              </div>

              {/* Access Points */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#007932', borderColor: '#007932' }}
                >
                  <Wifi className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#007932' }}>
                  Access Points
                </span>
                <span className="text-[10px] text-muted-foreground">3.726 unidades</span>
              </div>
            </div>
          </div>

          {/* Connection Lines - Collection to NOC */}
          <div className="flex justify-center my-2">
            <svg width="200" height="40" className="overflow-visible">
              <defs>
                <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#007932" />
                </marker>
              </defs>
              <line x1="30" y1="5" x2="100" y2="35" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-green)" />
              <line x1="100" y1="5" x2="100" y2="35" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
              <line x1="170" y1="5" x2="100" y2="35" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" />
            </svg>
          </div>

          {/* Layer 2 - NOC/Transport */}
          <div className="mb-2">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
                style={{ backgroundColor: 'rgba(3, 78, 162, 0.1)', color: '#034ea2' }}>
                Centro de Operações (NOC)
              </span>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#034ea2', borderColor: '#034ea2' }}
                >
                  <Server className="w-8 h-8 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#034ea2' }}>
                  NOC / Coletores
                </span>
                <span className="text-[10px] text-muted-foreground">Zabbix / Grafana</span>
              </div>
            </div>
          </div>

          {/* Connection Line - NOC to Processing */}
          <div className="flex justify-center my-2">
            <svg width="200" height="30" className="overflow-visible">
              <defs>
                <marker id="arrowhead-blue" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#034ea2" />
                </marker>
              </defs>
              <line x1="100" y1="0" x2="60" y2="25" stroke="#034ea2" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-blue)" />
              <line x1="100" y1="0" x2="140" y2="25" stroke="#034ea2" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-blue)" />
            </svg>
          </div>

          {/* Layer 3 - Processing Engine */}
          <div className="mb-2">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
                style={{ backgroundColor: 'rgba(253, 185, 19, 0.1)', color: '#fdb913' }}>
                Motor de Processamento
              </span>
            </div>
            <div className="flex justify-center gap-8">
              {/* Alert Engine */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#fdb913', borderColor: '#fdb913' }}
                >
                  <AlertTriangle className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#fdb913' }}>
                  Motor de Alertas
                </span>
                <span className="text-[10px] text-muted-foreground">Regras e Thresholds</span>
              </div>

              {/* Compliance Analysis */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#fdb913', borderColor: '#fdb913' }}
                >
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#fdb913' }}>
                  Conformidade
                </span>
                <span className="text-[10px] text-muted-foreground">SLA e Qualidade</span>
              </div>
            </div>
          </div>

          {/* Connection Lines - Processing to Dashboards */}
          <div className="flex justify-center my-2">
            <svg width="280" height="30" className="overflow-visible">
              <defs>
                <marker id="arrowhead-yellow" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#fdb913" />
                </marker>
              </defs>
              <line x1="100" y1="0" x2="60" y2="25" stroke="#fdb913" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-yellow)" />
              <line x1="140" y1="0" x2="140" y2="25" stroke="#fdb913" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-yellow)" />
              <line x1="180" y1="0" x2="220" y2="25" stroke="#fdb913" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-yellow)" />
            </svg>
          </div>

          {/* Layer 4 - Dashboards */}
          <div className="mb-2">
            <div className="text-center mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
                style={{ backgroundColor: 'rgba(3, 78, 162, 0.1)', color: '#034ea2' }}>
                Camada de Apresentação
              </span>
            </div>
            <div className="flex justify-center gap-6">
              {/* Individual Dashboard */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#034ea2', borderColor: '#034ea2' }}
                >
                  <School className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#034ea2' }}>
                  Dashboard
                </span>
                <span className="text-[10px] text-muted-foreground">Por INEP</span>
              </div>

              {/* Macro Dashboard */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#034ea2', borderColor: '#034ea2' }}
                >
                  <LayoutDashboard className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#034ea2' }}>
                  Visão Macro
                </span>
                <span className="text-[10px] text-muted-foreground">Rede Estadual</span>
              </div>

              {/* Georeferenced Maps */}
              <div className="flex flex-col items-center">
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center shadow-md border-2"
                  style={{ backgroundColor: '#034ea2', borderColor: '#034ea2' }}
                >
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <span className="text-xs font-semibold mt-2" style={{ color: '#034ea2' }}>
                  Mapas
                </span>
                <span className="text-[10px] text-muted-foreground">Georreferenciados</span>
              </div>
            </div>
          </div>

          {/* Connection Lines - Dashboards to API & Support */}
          <div className="flex justify-center my-2">
            <svg width="320" height="40" className="overflow-visible">
              <defs>
                <marker id="arrowhead-green-api" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#007932" />
                </marker>
                <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="#ef4123" />
                </marker>
              </defs>
              <line x1="100" y1="5" x2="80" y2="35" stroke="#007932" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-green-api)" />
              <line x1="220" y1="5" x2="240" y2="35" stroke="#ef4123" strokeWidth="2" strokeDasharray="4,2" markerEnd="url(#arrowhead-red)" />
            </svg>
          </div>

          {/* Layer 5 & 6 - API & Support (Side by Side) */}
          <div className="flex justify-center gap-16">
            {/* API Integration */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
                  style={{ backgroundColor: 'rgba(0, 121, 50, 0.1)', color: '#007932' }}>
                  Integração API
                </span>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border-2"
                    style={{ backgroundColor: '#007932', borderColor: '#007932' }}
                  >
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold mt-1" style={{ color: '#007932' }}>
                    REST/JSON
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border-2"
                    style={{ backgroundColor: '#007932', borderColor: '#007932' }}
                  >
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold mt-1" style={{ color: '#007932' }}>
                    B.I./ERP
                  </span>
                </div>
              </div>
            </div>

            {/* Technical Support */}
            <div className="flex flex-col items-center">
              <div className="text-center mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full" 
                  style={{ backgroundColor: 'rgba(239, 65, 35, 0.1)', color: '#ef4123' }}>
                  Suporte Técnico
                </span>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border-2"
                    style={{ backgroundColor: '#ef4123', borderColor: '#ef4123' }}
                  >
                    <Headphones className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold mt-1" style={{ color: '#ef4123' }}>
                    Service Desk
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md border-2"
                    style={{ backgroundColor: '#ef4123', borderColor: '#ef4123' }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-[10px] font-semibold mt-1" style={{ color: '#ef4123' }}>
                    Field Service
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-8 pt-4 border-t">
            <div className="flex flex-wrap justify-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#007932' }} />
                <span className="text-muted-foreground">Coleta / Integração</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#034ea2' }} />
                <span className="text-muted-foreground">NOC / Dashboards</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#fdb913' }} />
                <span className="text-muted-foreground">Processamento</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: '#ef4123' }} />
                <span className="text-muted-foreground">Suporte Técnico</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="20" height="10">
                  <line x1="0" y1="5" x2="20" y2="5" stroke="#666" strokeWidth="2" strokeDasharray="4,2" />
                </svg>
                <span className="text-muted-foreground">Fluxo de dados</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MonitoringArchitecture;