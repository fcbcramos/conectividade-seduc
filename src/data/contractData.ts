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
  implantationValue: 54134450.00,
  disbursedValue: 0,
  totalPhases: 7,
  completedPhases: 0,
  executionPeriod: "60 meses",
  startDate: "Janeiro/2026",
  contractModel: "Integrada, Lote Único, As a Service"
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
  { id: 3, title: "Papéis e Responsabilidades", path: "/secao/3" },
  { id: 4, title: "Ciclo de Vida da Execução", path: "/secao/4" },
  { id: 5, title: "Fases do Projeto e Marcos", path: "/secao/5" },
  { id: 6, title: "Cronograma de Desembolso", path: "/secao/6" },
  { id: 7, title: "Modelo de Fiscalização", path: "/secao/7" },
  { id: 8, title: "Artefatos Contratuais", path: "/secao/8" },
  { id: 9, title: "Instrumentos de Medição", path: "/secao/9" },
  { id: 10, title: "Gestão de SLA e Penalidades", path: "/secao/10" },
  { id: 11, title: "Gestão de Riscos", path: "/secao/11" },
  { id: 12, title: "Governança da Operação", path: "/secao/12" },
  { id: 13, title: "Encerramento e Legado", path: "/secao/13" }
];
