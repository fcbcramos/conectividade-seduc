import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Server, Key, Headphones, CheckCircle, School, Signal, AlertTriangle, 
  Activity, Gauge, TrendingUp, Waves, LayoutDashboard, MapPin, BarChart3,
  Code, Database, Phone, Globe, Mail, MessageCircle, Clock, Users
} from "lucide-react";
import SolutionArchitecture from "@/components/dashboard/SolutionArchitecture";
import NetworkTopology from "@/components/dashboard/NetworkTopology";
import MonitoringArchitecture from "@/components/dashboard/MonitoringArchitecture";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const Section3 = () => {
  const turnKeyResponsibilities = [
    "Site Survey (projeto executivo)",
    "Adequação de infraestrutura física (cabeamento/elétrica)",
    "Instalação e configuração lógica",
    "Manutenção preventiva e corretiva",
    "Substituição de equipamentos (RMA)",
    "Atualização tecnológica"
  ];

  const individualMetrics = [
    { icon: Signal, title: "Status do Link", description: "Indicação visual UP/DOWN em tempo real" },
    { icon: AlertTriangle, title: "Diagnóstico de Indisponibilidade", description: "Classificação automática: falha elétrica vs. rompimento de enlace" },
    { icon: Activity, title: "Qualidade do Enlace", description: "Latência, jitter e perda de pacotes contínuos" },
    { icon: Gauge, title: "Conformidade de Velocidade", description: "Comparativo contratada vs. entregue com % conformidade" },
    { icon: TrendingUp, title: "Análise de Saturação", description: "Consumo de banda atual e pico para diferenciar gargalos" },
    { icon: Waves, title: "Estabilidade", description: "Registro de flapping, quedas intermitentes e perda de sinal" }
  ];

  const slaLevels = [
    { level: "Crítico", description: "Parada Total", ttr: "30 min", tmr: "4 horas", color: "#ef4123" },
    { level: "Alto", description: "Degradação Severa", ttr: "1 hora", tmr: "8 horas úteis", color: "#fdb913" },
    { level: "Normal", description: "Solicitação/Dúvida", ttr: "4 horas", tmr: "24 horas úteis", color: "#007932" }
  ];

  const apiData = [
    { title: "Granularidade", items: ["Por INEP (escola individual)", "Por GRE", "Por Município", "Rede Total"] },
    { title: "Dados Obrigatórios", items: ["Status atual", "Velocidade Contratada vs. Medida", "Métricas de Qualidade", "Histórico de Eventos", "Índice de Conformidade"] },
    { title: "Padrões", items: ["Campos padronizados", "Timestamps universais", "Identificadores únicos", "Rastreabilidade e auditoria"] }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={3} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 3</Badge>
        <h1 className="text-3xl font-bold text-foreground">Especificações Técnicas da Solução</h1>
        <p className="text-muted-foreground mt-2">
          Visão geral da arquitetura tecnológica e componentes da solução de conectividade
        </p>
      </div>

      {/* Introduction Card */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Server className="w-5 h-5 text-primary" />
            Visão Geral
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-relaxed text-muted-foreground">
            A solução tecnológica objeto desta contratação foi concebida como um <strong className="text-foreground">ecossistema integrado de alta disponibilidade, segurança e performance</strong>, estruturado para prover conectividade fim a fim (end-to-end) desde o Core da internet até o dispositivo do aluno em sala de aula. A arquitetura de referência é composta por camadas funcionais interdependentes, cuja integração e interoperabilidade são responsabilidade integral da Contratada.
          </p>
        </CardContent>
      </Card>

      {/* Solution Architecture Diagram */}
      <SolutionArchitecture />

      {/* Network Topology Diagram */}
      <NetworkTopology />

      {/* Provisioning and Sustainability Model Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Modelo de Provisionamento e Sustentação
        </h2>

        {/* Turn-Key/HaaS Card */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#fdb913' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Key className="w-5 h-5" style={{ color: '#fdb913' }} />
              Modelo de Entrega Turn-Key / HaaS
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A solução será entregue na modalidade <strong className="text-foreground">Turn-Key (chave na mão)</strong> e operada como <strong className="text-foreground">Hardware as a Service (HaaS)</strong>. Isso implica que a Contratada é responsável por todo o ciclo de vida dos equipamentos e serviços.
            </p>
            
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Responsabilidades da Contratada:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {turnKeyResponsibilities.map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#007932' }} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* NOC/Service Desk Card */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#007932' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Headphones className="w-5 h-5" style={{ color: '#007932' }} />
              Centro de Operações (NOC / Service Desk)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A operação é suportada por um <strong className="text-foreground">Centro de Gerência de Rede (NOC)</strong> e uma estrutura de <strong className="text-foreground">Service Desk multinível</strong>, assegurando a continuidade do serviço.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="text-white" style={{ backgroundColor: '#034ea2' }}>Proativo</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Detecção antecipada de falhas através de monitoramento contínuo e alertas automatizados
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="text-white" style={{ backgroundColor: '#ef4123' }}>Reativo</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Atendimento a incidentes com resposta rápida e escalonamento multinível conforme SLAs
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section 3.5 - Monitoramento, Inteligência de Dados e Suporte Técnico */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">
          Monitoramento, Inteligência de Dados e Suporte Técnico
        </h2>

        {/* Monitoring Architecture Diagram */}
        <MonitoringArchitecture />

        {/* 3.5.1 - Visão Individual por Unidade Escolar */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#034ea2' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <School className="w-5 h-5" style={{ color: '#034ea2' }} />
              Visão Individual por Unidade Escolar (Chave INEP)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A Contratada deverá disponibilizar ferramenta de monitoramento (ex: Zabbix, Grafana ou similar) que permita à fiscalização da SEDUC-PI, mediante autenticação, acessar um <strong className="text-foreground">painel detalhado para cada escola</strong> (identificada pelo código INEP), contendo em tempo real e histórico:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {individualMetrics.map((metric) => (
                <div key={metric.title} className="p-3 rounded-lg bg-muted/50 border">
                  <div className="flex items-center gap-2 mb-2">
                    <metric.icon className="w-4 h-4" style={{ color: '#034ea2' }} />
                    <span className="text-sm font-medium text-foreground">{metric.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{metric.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 3.5.2 - Visão Macro e Gerencial */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#fdb913' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <LayoutDashboard className="w-5 h-5" style={{ color: '#fdb913' }} />
              Visão Macro e Gerencial (Rede Estadual)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Disponibilização de <strong className="text-foreground">dashboards executivos e operacionais</strong> que consolidem a visão de toda a rede, permitindo a gestão por exceção e a rápida tomada de decisão:
            </p>

            {/* Totalizadores */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Totalizadores em Tempo Real:</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="p-3 rounded-lg text-center border" style={{ backgroundColor: 'rgba(0, 121, 50, 0.1)', borderColor: '#007932' }}>
                  <span className="text-xs font-medium" style={{ color: '#007932' }}>Total UP</span>
                </div>
                <div className="p-3 rounded-lg text-center border" style={{ backgroundColor: 'rgba(239, 65, 35, 0.1)', borderColor: '#ef4123' }}>
                  <span className="text-xs font-medium" style={{ color: '#ef4123' }}>Total DOWN</span>
                </div>
                <div className="p-3 rounded-lg text-center border" style={{ backgroundColor: 'rgba(253, 185, 19, 0.1)', borderColor: '#fdb913' }}>
                  <span className="text-xs font-medium" style={{ color: '#fdb913' }}>Degradadas</span>
                </div>
                <div className="p-3 rounded-lg text-center border" style={{ backgroundColor: 'rgba(3, 78, 162, 0.1)', borderColor: '#034ea2' }}>
                  <span className="text-xs font-medium" style={{ color: '#034ea2' }}>Não Conformes</span>
                </div>
              </div>
            </div>

            {/* Alertas e Mapas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="w-4 h-4" style={{ color: '#ef4123' }} />
                  <span className="text-sm font-medium text-foreground">Alertas Operacionais</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Painel em tempo real para eventos de indisponibilidade e degradação, segmentado por GRE e Município
                </p>
              </div>
              
              <div className="p-4 rounded-lg bg-muted/50 border">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4" style={{ color: '#007932' }} />
                  <span className="text-sm font-medium text-foreground">Mapas Georreferenciados</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Visualização espacial com marcadores coloridos: Verde=Normal, Vermelho=Down, Amarelo=Degradado
                </p>
              </div>
            </div>

            {/* Séries Históricas */}
            <div className="p-4 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4" style={{ color: '#034ea2' }} />
                <span className="text-sm font-medium text-foreground">Séries Históricas</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Gráficos de evolução diária, semanal e mensal dos indicadores de disponibilidade e conformidade, permitindo análise de tendências
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 3.5.3 - Integração e API */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#007932' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Code className="w-5 h-5" style={{ color: '#007932' }} />
              Integração e Disponibilização de Dados (API)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Todos os dados coletados e exibidos nos painéis de monitoramento devem ser acessíveis via <strong className="text-foreground">endpoints de API (REST/JSON)</strong> seguros e documentados, permitindo a integração com sistemas de gestão próprios da SEDUC-PI (B.I., ERP).
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {apiData.map((section) => (
                <div key={section.title} className="p-4 rounded-lg bg-muted/50 border">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4" style={{ color: '#007932' }} />
                    <span className="text-sm font-medium text-foreground">{section.title}</span>
                  </div>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item} className="text-xs text-muted-foreground flex items-start gap-1">
                        <span className="text-muted-foreground">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs" style={{ borderColor: '#007932', color: '#007932' }}>
                Integração com B.I. e ERP da SEDUC-PI
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* 3.5.4 - Suporte Técnico e Service Desk */}
        <Card className="shadow-card border-l-4" style={{ borderLeftColor: '#ef4123' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Headphones className="w-5 h-5" style={{ color: '#ef4123' }} />
              Estrutura de Suporte Técnico e Service Desk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              A Contratada deverá manter uma estrutura de atendimento técnico multinível, operando como <strong className="text-foreground">ponto único de contato (Single Point of Contact - SPOC)</strong> para todas as demandas relacionadas à solução.
            </p>

            {/* Canais de Atendimento */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Canais de Atendimento:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Phone className="w-3 h-3" /> 0800 (Gratuito)
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Globe className="w-3 h-3" /> Portal Web
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Mail className="w-3 h-3" /> E-mail
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <MessageCircle className="w-3 h-3" /> Chat/WhatsApp
                </Badge>
              </div>
            </div>

            {/* Matriz de SLA */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">Níveis de Serviço (SLA) de Atendimento:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3 font-medium text-foreground">Nível</th>
                      <th className="text-left py-2 px-3 font-medium text-foreground">Descrição</th>
                      <th className="text-center py-2 px-3 font-medium text-foreground">TTR</th>
                      <th className="text-center py-2 px-3 font-medium text-foreground">TMR</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slaLevels.map((sla) => (
                      <tr key={sla.level} className="border-b last:border-b-0">
                        <td className="py-2 px-3">
                          <Badge className="text-white text-xs" style={{ backgroundColor: sla.color }}>
                            {sla.level}
                          </Badge>
                        </td>
                        <td className="py-2 px-3 text-muted-foreground">{sla.description}</td>
                        <td className="py-2 px-3 text-center text-muted-foreground">{sla.ttr}</td>
                        <td className="py-2 px-3 text-center text-muted-foreground">{sla.tmr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Legenda TTR e TMR */}
              <div className="mt-3 p-3 rounded-lg bg-muted/30 border border-dashed">
                <p className="text-xs text-muted-foreground">
                  <strong className="text-foreground">TTR</strong> = Tempo de Tomada de Responsabilidade (tempo máximo para assumir o chamado) | 
                  <strong className="text-foreground ml-2">TMR</strong> = Tempo Máximo de Resolução (tempo máximo para solucionar o problema)
                </p>
              </div>
            </div>

            {/* Field Service */}
            <div className="p-4 rounded-lg bg-muted/50 border">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4" style={{ color: '#ef4123' }} />
                <span className="text-sm font-medium text-foreground">Equipes de Campo (Field Service)</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Dimensionamento de equipes técnicas e estoques de sobressalentes (spares) distribuídos regionalmente para garantir o cumprimento dos SLAs de atendimento presencial em todas as <strong className="text-foreground">21 GREs</strong> do estado.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <SectionNavigation currentSection={3} />
    </div>
  );
};

export default Section3;
