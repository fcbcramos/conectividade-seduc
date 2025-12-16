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
  disbursedValue: 54134450.00,
  totalPhases: 7,
  completedPhases: 4,
  executionPeriod: "60 meses",
  contractModel: "Integrada, Lote Único, As a Service"
};

export const disbursementData = [
  { phase: "RPTI", value: 4498563.75, percentage: 5, status: "Concluída" },
  { phase: "PEP-I", value: 13495691.25, percentage: 15, status: "Concluída" },
  { phase: "PEP-M1", value: 13495691.25, percentage: 15, status: "Concluída" },
  { phase: "PEP-M2", value: 13495691.25, percentage: 15, status: "Concluída" },
  { phase: "PEP-M3", value: 13495691.25, percentage: 15, status: "Em andamento" },
  { phase: "PEP-F", value: 22492818.75, percentage: 25, status: "Pendente" },
  { phase: "RTF", value: 8997127.50, percentage: 10, status: "Pendente" }
];

export const slaMetrics = [
  { metric: "Disponibilidade WAN", target: "99.5%", current: "99.7%", status: "Conforme" },
  { metric: "Latência Máxima", target: "≤80ms", current: "45ms", status: "Conforme" },
  { metric: "Jitter Máximo", target: "≤30ms", current: "12ms", status: "Conforme" },
  { metric: "Perda de Pacotes", target: "≤1%", current: "0.2%", status: "Conforme" },
  { metric: "TMA Suporte", target: "≤4h", current: "2.5h", status: "Conforme" },
  { metric: "TMR Incidentes", target: "≤8h", current: "5h", status: "Conforme" }
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
    description: "Planejamento detalhado da implantação com cronograma, recursos e metodologia.",
    deliverables: ["Cronograma executivo", "Plano de recursos", "Metodologia de implantação"],
    percentage: 5,
    status: "Concluída"
  },
  {
    id: "PEP-I",
    name: "Plano de Execução do Projeto - Inicial",
    description: "Primeira fase de implantação cobrindo 25% das escolas prioritárias.",
    deliverables: ["250 escolas conectadas", "Infraestrutura Wi-Fi instalada", "Relatório de aceite"],
    percentage: 15,
    status: "Concluída"
  },
  {
    id: "PEP-M1",
    name: "Plano de Execução do Projeto - Marco 1",
    description: "Expansão para 50% das escolas da rede estadual.",
    deliverables: ["500 escolas conectadas", "Ativos de rede configurados", "Testes de qualidade"],
    percentage: 15,
    status: "Concluída"
  },
  {
    id: "PEP-M2",
    name: "Plano de Execução do Projeto - Marco 2",
    description: "Expansão para 75% das escolas da rede estadual.",
    deliverables: ["750 escolas conectadas", "Monitoramento ativo", "Relatório de desempenho"],
    percentage: 15,
    status: "Concluída"
  },
  {
    id: "PEP-M3",
    name: "Plano de Execução do Projeto - Marco 3",
    description: "Conclusão da implantação em 100% das escolas.",
    deliverables: ["1000 escolas conectadas", "Sistema de monitoramento", "Documentação completa"],
    percentage: 15,
    status: "Em andamento"
  },
  {
    id: "PEP-F",
    name: "Plano de Execução do Projeto - Final",
    description: "Estabilização e operação assistida da infraestrutura.",
    deliverables: ["Operação estabilizada", "Suporte técnico ativo", "Relatórios mensais"],
    percentage: 25,
    status: "Pendente"
  },
  {
    id: "RTF",
    name: "Relatório Técnico Final",
    description: "Documentação final e transferência de conhecimento.",
    deliverables: ["Documentação as-built", "Manual operacional", "Termo de encerramento"],
    percentage: 10,
    status: "Pendente"
  }
];

export const governanceRoles = {
  contractor: {
    name: "Piauí Link",
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
  { name: "RPTI", description: "Relatório de Planejamento Técnico Inicial", periodicity: "Única", status: "Entregue" },
  { name: "PEP", description: "Plano de Execução do Projeto", periodicity: "Por fase", status: "Em andamento" },
  { name: "RMD", description: "Relatório Mensal de Desempenho", periodicity: "Mensal", status: "Ativo" },
  { name: "RSQ", description: "Relatório de SLA e Qualidade", periodicity: "Mensal", status: "Ativo" },
  { name: "RAI", description: "Relatório de Ativos Instalados", periodicity: "Por fase", status: "Em andamento" },
  { name: "RTF", description: "Relatório Técnico Final", periodicity: "Única", status: "Pendente" }
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
