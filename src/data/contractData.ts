export const basicInfo = {
  processNumber: "00011.034037/2025-79",
  requestingArea: "Unidade de Transformação Digital - UTD",
  director: "Marcel Rufino de Carvalho",
  operationalManager: "Heulem Veras Barros",
  strategyManager: "Lorena Mendes Silva Almeida",
  purchasingManager: "Clarice Mauriz Lira",
  elaborationDate: new Date().toLocaleDateString('pt-BR'),
  elaboratedBy: "Vanilson Carvalho Fontenele",
  object: "Contratação Integrada de Serviços de Conectividade à Internet e Infraestrutura de Rede Wi-Fi para Unidades Escolares da Rede Estadual da Secretaria da Educação do Estado do Piauí (SEDUC-PI).",
  normativeReference: "Lei nº 14.133/2021, Lei nº 14.172/2021, Decreto nº 11.004/2022 (Regulamenta a Lei que institui FUST).",
  financingSources: "Recursos do Fundo de Universalização dos Serviços de Telecomunicações (FUST) alocados conforme Lei nº 14.172/2021, complementados por outras fontes orçamentárias da SEDUC-PI, se necessário."
};

export const kpiData = {
  totalValue: 89971275.00,
  fonte14172: 54134450.00,
  fontTesouro: 35836825.00,
  disbursedValue: 0,
  totalPhases: 7,
  completedPhases: 0,
  executionPeriod: "36 meses",
  startDate: "Janeiro/2026",
  contractModel: "Integrada, Lote Único, As a Service",
  status: "Aguardando"
};

export const disbursementData = [
  { phase: "RPTI", name: "Planejamento", value: 8997127.50, percentage: 10, month: "Jan/26", status: "Planejado", type: "planejamento" },
  { phase: "PEP-I", name: "Mobilização", value: 5416478.70, percentage: 6, month: "Fev/26", status: "Planejado", type: "mobilizacao" },
  { phase: "PEP-M1", name: "Onda 1", value: 8124717.00, percentage: 9, month: "Mar/26", status: "Planejado", type: "execucao" },
  { phase: "PEP-M2", name: "Onda 2", value: 9027464.50, percentage: 10, month: "Abr/26", status: "Planejado", type: "execucao" },
  { phase: "PEP-M3", name: "Onda 3", value: 9027464.50, percentage: 10, month: "Mai/26", status: "Planejado", type: "execucao" },
  { phase: "PEP-F", name: "Finalização", value: 8124717.00, percentage: 9, month: "Jun/26", status: "Planejado", type: "execucao" },
  { phase: "RTF", name: "Entrega", value: 5416480.80, percentage: 6, month: "Jul/26", status: "Planejado", type: "entrega" }
];

export const slaMetrics = [
  { metric: "Disponibilidade WAN", target: "99.5%", current: "-", status: "Planejado" },
  { metric: "Latência Máxima", target: "≤80ms", current: "-", status: "Planejado" },
  { metric: "Jitter Máximo", target: "≤30ms", current: "-", status: "Planejado" },
  { metric: "Perda de Pacotes", target: "≤1%", current: "-", status: "Planejado" },
  { metric: "TMA Suporte", target: "≤4h", current: "-", status: "Planejado" },
  { metric: "TMR Incidentes", target: "≤8h", current: "-", status: "Planejado" }
];

export const riskMatrix = [
  { id: 1, risk: "Descontinuidade do serviço", category: "Operacional", probability: "Baixa", impact: "Alto", mitigation: "Plano de contingência e backup de conectividade" },
  { id: 2, risk: "Atraso nas entregas", category: "Operacional", probability: "Média", impact: "Médio", mitigation: "Cronograma detalhado com marcos e penalidades" },
  { id: 3, risk: "Inadimplência contratual", category: "Financeiro", probability: "Baixa", impact: "Alto", mitigation: "Garantias contratuais e fiscalização rigorosa" },
  { id: 4, risk: "Obsolescência tecnológica", category: "Tecnológico", probability: "Média", impact: "Médio", mitigation: "Cláusulas de atualização tecnológica" },
  { id: 5, risk: "Falha na integração", category: "Técnico", probability: "Baixa", impact: "Médio", mitigation: "Testes de integração e homologação" }
];

export const phases = [
  {
    id: "RPTI",
    name: "Relatório de Planejamento Técnico Inicial",
    description: "Documento técnico contendo o planejamento detalhado da execução, incluindo dimensionamento de recursos, cronograma de atividades e metodologia de implantação.",
    deliverables: ["Cronograma executivo", "Plano de recursos", "Metodologia de implantação"],
    percentage: 10,
    month: "Jan/26",
    status: "Planejado"
  },
  {
    id: "PEP-I",
    name: "Plano de Execução do Projeto - Inicial",
    description: "Etapa de mobilização operacional e início da execução, contemplando a instalação piloto e validação dos processos de implantação.",
    deliverables: ["Mobilização de equipes", "Instalações piloto", "Validação de processos"],
    percentage: 6,
    month: "Fev/26",
    status: "Planejado"
  },
  {
    id: "PEP-M1",
    name: "Plano de Execução do Projeto - Onda 1",
    description: "Continuidade da implantação com ampliação dos serviços de conectividade para o primeiro grupo de escolas da rede estadual.",
    deliverables: ["Escolas conectadas (Onda 1)", "Infraestrutura Wi-Fi instalada", "Relatório de aceite"],
    percentage: 9,
    month: "Mar/26",
    status: "Planejado"
  },
  {
    id: "PEP-M2",
    name: "Plano de Execução do Projeto - Onda 2",
    description: "Expansão da cobertura para o segundo grupo de escolas, com instalação de infraestrutura e ativação de serviços.",
    deliverables: ["Escolas conectadas (Onda 2)", "Ativos de rede configurados", "Testes de qualidade"],
    percentage: 10,
    month: "Abr/26",
    status: "Planejado"
  },
  {
    id: "PEP-M3",
    name: "Plano de Execução do Projeto - Onda 3",
    description: "Terceira onda de implantação, consolidando a expansão da conectividade para mais unidades escolares.",
    deliverables: ["Escolas conectadas (Onda 3)", "Monitoramento ativo", "Relatório de desempenho"],
    percentage: 10,
    month: "Mai/26",
    status: "Planejado"
  },
  {
    id: "PEP-F",
    name: "Plano de Execução do Projeto - Final",
    description: "Conclusão da implantação e estabilização dos serviços, com foco na operação assistida e ajustes finais.",
    deliverables: ["Operação estabilizada", "Suporte técnico ativo", "Relatórios mensais"],
    percentage: 9,
    month: "Jun/26",
    status: "Planejado"
  },
  {
    id: "RTF",
    name: "Relatório Técnico Final",
    description: "Documento conclusivo que apresenta a consolidação dos resultados, documentação técnica completa e transferência de conhecimento.",
    deliverables: ["Documentação as-built", "Manual operacional", "Termo de encerramento"],
    percentage: 6,
    month: "Jul/26",
    status: "Planejado"
  }
];

export const governanceRoles = {
  contractor: {
    name: "A definir",
    responsibilities: [
      "Fornecimento de conectividade à internet",
      "Instalação de infraestrutura Wi-Fi",
      "Suporte técnico e manutenção",
      "Monitoramento 24x7",
      "Relatórios mensais de desempenho",
      "Atendimento aos SLAs contratuais"
    ]
  },
  contracting: {
    name: "SEDUC-PI",
    responsibilities: [
      "Fiscalização técnica do contrato",
      "Acompanhamento de entregas",
      "Validação de relatórios",
      "Gestão de pagamentos",
      "Coordenação com unidades escolares",
      "Tomada de decisões estratégicas"
    ]
  }
};

export const artifacts = [
  { name: "RPTI", description: "Relatório de Planejamento Técnico Inicial", periodicity: "Única", status: "Planejado" },
  { name: "PEP", description: "Plano de Execução do Projeto", periodicity: "Por fase", status: "Planejado" },
  { name: "RMD", description: "Relatório Mensal de Desempenho", periodicity: "Mensal", status: "Planejado" },
  { name: "RSQ", description: "Relatório de SLA e Qualidade", periodicity: "Mensal", status: "Planejado" },
  { name: "RAI", description: "Relatório de Ativos Instalados", periodicity: "Por fase", status: "Planejado" },
  { name: "RTF", description: "Relatório Técnico Final", periodicity: "Única", status: "Planejado" }
];

export const measurementDimensions = [
  {
    name: "WAN",
    description: "Qualidade da conexão à internet",
    metrics: ["Disponibilidade", "Latência", "Jitter", "Perda de pacotes"],
    tool: "SIMET/SQS"
  },
  {
    name: "LAN/WLAN",
    description: "Infraestrutura de rede local e Wi-Fi",
    metrics: ["Disponibilidade de ativos", "Cobertura Wi-Fi", "Throughput"],
    tool: "Sistema de Monitoramento"
  },
  {
    name: "Suporte",
    description: "Qualidade do atendimento técnico",
    metrics: ["TMA - Tempo Médio de Atendimento", "TMR - Tempo Médio de Resolução"],
    tool: "Sistema de Chamados"
  }
];

export const navigationItems = [
  { id: 1, title: "Visão Geral do Contrato", path: "/secao/1" },
  { id: 2, title: "Modelo de Governança", path: "/secao/2" },
  { id: 3, title: "Especificações Técnicas", path: "/secao/3" },
  { id: 4, title: "Papéis e Responsabilidades", path: "/secao/4" },
  { id: 5, title: "Ciclo de Vida da Execução", path: "/secao/5" },
  { id: 6, title: "Fases do Projeto e Marcos", path: "/secao/6" },
  { id: 7, title: "Cronograma de Desembolso", path: "/secao/7" },
  { id: 8, title: "Modelo de Fiscalização", path: "/secao/8" },
  { id: 9, title: "Artefatos Contratuais", path: "/secao/9" },
  { id: 10, title: "Instrumentos de Medição", path: "/secao/10" },
  { id: 11, title: "Gestão de SLA e Penalidades", path: "/secao/11" },
  { id: 12, title: "Gestão de Riscos", path: "/secao/12" },
  { id: 13, title: "Governança da Operação", path: "/secao/13" },
  { id: 14, title: "Encerramento e Legado", path: "/secao/14" }
];

export const solutionArchitecture = [
  {
    id: "wan",
    name: "Camada de Acesso (WAN)",
    shortName: "WAN",
    icon: "Globe",
    color: "hsl(var(--gov-green))",
    description: "Tráfego de internet via Links Dedicados (Fibra Óptica) com redundância automática via Links Secundários (Banda Larga ou Satélite)",
    components: ["Link Primário (Fibra Óptica)", "Link Secundário (Backup)", "CPE/ONU Gerenciado"]
  },
  {
    id: "edge",
    name: "Camada de Segurança e Controle (Edge)",
    shortName: "EDGE",
    icon: "Shield",
    color: "hsl(var(--gov-red))",
    description: "Appliance Firewall dedicado para inspeção, balanceamento de carga, filtragem de conteúdo, prevenção de intrusão e QoS",
    components: ["Balanceamento de carga", "Filtragem de conteúdo", "Prevenção de intrusão (IPS)", "Políticas de QoS"]
  },
  {
    id: "sqs",
    name: "Camada de Medição e Auditoria (SQS)",
    shortName: "SQS",
    icon: "Activity",
    color: "hsl(var(--gov-yellow))",
    description: "Sonda de Qualidade de Serviços (SIMET Box) para medições contínuas, independentes e auditáveis dos parâmetros de qualidade",
    components: ["Medição de velocidade", "Medição de latência", "Medição de perda de pacotes", "Conformidade SLA"]
  },
  {
    id: "lan",
    name: "Camada de Distribuição e Acesso (LAN/WLAN)",
    shortName: "LAN/WLAN",
    icon: "Wifi",
    color: "hsl(var(--gov-blue))",
    description: "Rede local gerenciada com Switches PoE e Access Points Wi-Fi 6 de alta densidade para cobertura 100% dos ambientes",
    components: ["Switches PoE", "Access Points Wi-Fi 6", "Cobertura 100%", "Alta densidade"]
  },
  {
    id: "sdn",
    name: "Gestão Centralizada (SDN)",
    shortName: "SDN",
    icon: "Network",
    color: "hsl(var(--primary))",
    description: "Plataforma Software Defined Networking para gestão massiva de ativos de rede com segregação do plano de gerência",
    components: ["Provisionamento remoto", "Configuração centralizada", "Monitoramento em tempo real", "Gestão apartada do Firewall"]
  },
  {
    id: "sgi",
    name: "Gestão Administrativa e Operacional (SGI)",
    shortName: "SGI",
    icon: "LayoutDashboard",
    color: "hsl(var(--gov-green))",
    description: "Sistema de Gestão Integrada (Web/Mobile) para orquestração do ciclo de vida do contrato e interface de fiscalização",
    components: ["Cadastro técnico", "Inventário de ativos", "Gestão de OS/RATs", "Controle de SLA"]
  }
];
