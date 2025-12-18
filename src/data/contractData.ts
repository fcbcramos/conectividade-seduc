export const basicInfo = {
  processNumber: "00011.034037/2025-79",
  requestingArea: "Unidade de Transformação Digital - UTD",
  elaborationDate: new Date().toLocaleDateString('pt-BR'),
  object: "Contratação Integrada de Serviços de Conectividade à Internet e Infraestrutura de Rede Wi-Fi para Unidades Escolares da Rede Estadual da Secretaria da Educação do Estado do Piauí (SEDUC-PI).",
  normativeReference: "Lei nº 14.133/2021, Lei nº 14.172/2021, Decreto nº 11.004/2022 (Regulamenta a Lei que institui FUST).",
  financingSources: "Recursos do Fundo de Universalização dos Serviços de Telecomunicações (FUST) alocados conforme Lei nº 14.172/2021, complementados por outras fontes orçamentárias da SEDUC-PI, se necessário.",
  
  // Grupo Técnico de Planejamento
  team: [
    { role: "Diretoria de Tecnologia", name: "Marcel Rufino de Carvalho" },
    { role: "Diretoria de Licitação", name: "Larissa Rocha Pires Ferreira" },
    { role: "Assessoria Jurídica e Administrativa", name: "Vanilson Carvalho Fontenele" },
    { role: "Gerência Operacional", name: "Heulem Veras Barros" },
    { role: "Gerência de Compras", name: "Clarice Mauriz Lira" },
    { role: "Coordenação de Suporte", name: "Felipe Castelo Branco Crisóstomo Ramos" },
    { role: "Coordenação de Redes", name: "Danilo César Ribeiro da Silva Mendes" }
  ]
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

export interface RiskAction {
  id: string;
  action: string;
  responsible: string;
}

export interface Risk {
  id: string;
  risk: string;
  phase: "PCTIC" | "GCTIC";
  probability: number;
  probabilityLabel: string;
  impact: number;
  impactLabel: string;
  riskScore: number;
  riskLevel: "Baixo" | "Médio" | "Alto";
  damage: string;
  treatment: string;
  preventiveActions: RiskAction[];
  contingencyActions: RiskAction[];
}

export const riskMatrix: Risk[] = [
  {
    id: "R01",
    risk: "Questionamentos por órgãos de controle externo",
    phase: "PCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.40,
    impactLabel: "Alto",
    riskScore: 0.12,
    riskLevel: "Médio",
    damage: "Atrasos na execução contratual, necessidade de ajustes formais e retrabalho administrativo",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R01-AP-01", action: "Fundamentar tecnicamente ETP, TR e decisões relevantes", responsible: "Equipe de Planejamento" },
      { id: "R01-AP-02", action: "Garantir aderência às normas e boas práticas de TIC", responsible: "Área Técnica / Jurídica" },
      { id: "R01-AP-03", action: "Manter registros formais e rastreabilidade", responsible: "Gestor do Contrato" }
    ],
    contingencyActions: [
      { id: "R01-AC-01", action: "Atender diligências dos órgãos de controle", responsible: "Gestor do Contrato" },
      { id: "R01-AC-02", action: "Ajustar documentos e procedimentos", responsible: "Área Técnica / Jurídica" }
    ]
  },
  {
    id: "R02",
    risk: "Especificações de nível de serviço aquém das necessidades da SEDUC-PI",
    phase: "PCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.40,
    impactLabel: "Alto",
    riskScore: 0.12,
    riskLevel: "Médio",
    damage: "Entregas com desempenho insuficiente ou não condizentes com a real demanda pedagógica e administrativa",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R02-AP-01", action: "Realizar levantamento técnico detalhado das demandas", responsible: "Equipe de Planejamento" },
      { id: "R02-AP-02", action: "Consultar benchmarks de conectividade educacional", responsible: "Área Técnica" }
    ],
    contingencyActions: [
      { id: "R02-AC-01", action: "Revisar SLAs e negociar ajustes com a contratada", responsible: "Gestor do Contrato" },
      { id: "R02-AC-02", action: "Reavaliar dimensionamento técnico", responsible: "Área Técnica" }
    ]
  },
  {
    id: "R03",
    risk: "Licitação deserta ou fracassada",
    phase: "PCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.40,
    impactLabel: "Alto",
    riskScore: 0.12,
    riskLevel: "Médio",
    damage: "Atraso na contratação, risco de descontinuidade do serviço público essencial",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R03-AP-01", action: "Estudar viabilidade técnica e econômica do mercado fornecedor", responsible: "Equipe de Planejamento" },
      { id: "R03-AP-02", action: "Estruturar lotes de forma atrativa e sustentável", responsible: "Área Técnica" },
      { id: "R03-AP-03", action: "Realizar pesquisa de preços ampla", responsible: "Setor de Licitações" }
    ],
    contingencyActions: [
      { id: "R03-AC-01", action: "Revisar modelo de contratação e republicar edital", responsible: "Setor de Licitações" },
      { id: "R03-AC-02", action: "Consultar empresas para ajuste de condições", responsible: "Área Técnica" }
    ]
  },
  {
    id: "R04",
    risk: "Estimativa de preços acima do mercado e/ou fora de referências oficiais",
    phase: "PCTIC",
    probability: 0.50,
    probabilityLabel: "Provável",
    impact: 0.20,
    impactLabel: "Moderado",
    riskScore: 0.10,
    riskLevel: "Médio",
    damage: "Risco de sobrepreço, questionamentos em auditorias, reprovação do processo licitatório",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R04-AP-01", action: "Utilizar múltiplas fontes de referência (PNCP, fornecedores, estudos de mercado)", responsible: "Equipe de Planejamento" },
      { id: "R04-AP-02", action: "Documentar metodologia de formação de preços", responsible: "Setor de Compras" }
    ],
    contingencyActions: [
      { id: "R04-AC-01", action: "Ajustar valores e justificar tecnicamente", responsible: "Área Técnica / Jurídica" },
      { id: "R04-AC-02", action: "Renegociar preços com licitantes ou republicar edital", responsible: "Setor de Licitações" }
    ]
  },
  {
    id: "R05",
    risk: "Descumprimento contratual (parcial ou integral)",
    phase: "GCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.40,
    impactLabel: "Alto",
    riskScore: 0.12,
    riskLevel: "Médio",
    damage: "Interrupção do serviço, escolas sem conectividade, penalidades à contratada",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R05-AP-01", action: "Estabelecer cláusulas contratuais claras e mensuráveis", responsible: "Área Jurídica" },
      { id: "R05-AP-02", action: "Definir processo de fiscalização e indicadores de desempenho", responsible: "Gestor do Contrato" },
      { id: "R05-AP-03", action: "Realizar diligência prévia sobre a capacidade da contratada", responsible: "Comissão de Licitação" }
    ],
    contingencyActions: [
      { id: "R05-AC-01", action: "Aplicar sanções e notificações previstas no contrato", responsible: "Gestor do Contrato" },
      { id: "R05-AC-02", action: "Acionar garantia contratual", responsible: "Área Jurídica / Financeiro" },
      { id: "R05-AC-03", action: "Iniciar processo de rescisão ou substituição da contratada", responsible: "Área Jurídica / Gestor" }
    ]
  },
  {
    id: "R06",
    risk: "Inexecução contratual por dificuldades técnicas ou operacionais da contratada",
    phase: "GCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.40,
    impactLabel: "Alto",
    riskScore: 0.12,
    riskLevel: "Médio",
    damage: "Atrasos na implantação, baixa qualidade do serviço, impacto no atendimento às escolas",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R06-AP-01", action: "Exigir capacidade técnica comprovada na licitação", responsible: "Comissão de Licitação" },
      { id: "R06-AP-02", action: "Monitorar execução desde o início do contrato", responsible: "Equipe de Fiscalização" },
      { id: "R06-AP-03", action: "Prever cronograma realista e escalonamento de entregas", responsible: "Área Técnica" }
    ],
    contingencyActions: [
      { id: "R06-AC-01", action: "Notificar contratada e exigir plano de recuperação", responsible: "Gestor do Contrato" },
      { id: "R06-AC-02", action: "Aplicar sanções contratuais e/ou desconto por descumprimento", responsible: "Área Jurídica / Gestor" }
    ]
  },
  {
    id: "R07",
    risk: "Atraso ou falha na aprovação de projetos de infraestrutura escolar",
    phase: "GCTIC",
    probability: 0.50,
    probabilityLabel: "Provável",
    impact: 0.20,
    impactLabel: "Moderado",
    riskScore: 0.10,
    riskLevel: "Médio",
    damage: "Impossibilidade de instalar os equipamentos, atraso no cronograma de implantação",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R07-AP-01", action: "Realizar vistorias antecipadas nas escolas", responsible: "Equipe Técnica" },
      { id: "R07-AP-02", action: "Estabelecer fluxo ágil de aprovações internas", responsible: "Área Administrativa / Técnica" },
      { id: "R07-AP-03", action: "Reservar tempo no cronograma para adequações prediais", responsible: "Gestor do Contrato" }
    ],
    contingencyActions: [
      { id: "R07-AC-01", action: "Ajustar cronograma de instalação conforme disponibilidade das escolas", responsible: "Gestor do Contrato" },
      { id: "R07-AC-02", action: "Priorizar unidades com infraestrutura adequada", responsible: "Equipe de Fiscalização" }
    ]
  },
  {
    id: "R08",
    risk: "Atrasos ou bloqueios na liberação de recursos financeiros",
    phase: "GCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.40,
    impactLabel: "Alto",
    riskScore: 0.12,
    riskLevel: "Médio",
    damage: "Interrupção de pagamentos, risco de paralisação dos serviços pela contratada",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R08-AP-01", action: "Assegurar dotação orçamentária antes da contratação", responsible: "Setor Financeiro" },
      { id: "R08-AP-02", action: "Acompanhar liberação de recursos junto ao MEC e Tesouro Estadual", responsible: "Área Administrativa" },
      { id: "R08-AP-03", action: "Definir fluxo de pagamento claro e realista", responsible: "Gestor do Contrato" }
    ],
    contingencyActions: [
      { id: "R08-AC-01", action: "Reprogramar cronograma de pagamentos", responsible: "Setor Financeiro" },
      { id: "R08-AC-02", action: "Negociar com contratada prorrogações ou replanejamentos", responsible: "Gestor do Contrato" }
    ]
  },
  {
    id: "R09",
    risk: "Ausência de profissional competente para fiscalização técnica",
    phase: "GCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.20,
    impactLabel: "Moderado",
    riskScore: 0.06,
    riskLevel: "Baixo",
    damage: "Fiscalização ineficiente, riscos de aceite indevido de entregas ou descumprimento não identificado",
    treatment: "Mitigar",
    preventiveActions: [
      { id: "R09-AP-01", action: "Designar fiscal técnico qualificado desde o início", responsible: "Gestor do Contrato" },
      { id: "R09-AP-02", action: "Capacitar equipe de fiscalização sobre o objeto contratado", responsible: "Área Técnica" },
      { id: "R09-AP-03", action: "Utilizar ferramentas de apoio à fiscalização (checklists, sistemas)", responsible: "Equipe de TI" }
    ],
    contingencyActions: [
      { id: "R09-AC-01", action: "Substituir ou reforçar equipe de fiscalização", responsible: "Direção de TI" },
      { id: "R09-AC-02", action: "Contratar apoio técnico externo se necessário", responsible: "Área Administrativa" }
    ]
  },
  {
    id: "R10",
    risk: "Obsolescência tecnológica durante a vigência do contrato",
    phase: "GCTIC",
    probability: 0.30,
    probabilityLabel: "Pouco Provável",
    impact: 0.20,
    impactLabel: "Moderado",
    riskScore: 0.06,
    riskLevel: "Baixo",
    damage: "Infraestrutura desatualizada, degradação da qualidade do serviço, desalinhamento com necessidades futuras",
    treatment: "Aceitar",
    preventiveActions: [
      { id: "R10-AP-01", action: "Prever cláusulas de atualização tecnológica", responsible: "Área Jurídica / Técnica" },
      { id: "R10-AP-02", action: "Monitorar evolução de padrões e demandas", responsible: "Equipe de TI" }
    ],
    contingencyActions: [
      { id: "R10-AC-01", action: "Negociar termo aditivo para upgrade tecnológico", responsible: "Gestor do Contrato" },
      { id: "R10-AC-02", action: "Planejar migração para novo contrato, se necessário", responsible: "Direção de TI" }
    ]
  },
  {
    id: "R11",
    risk: "Interrupção de serviço por caso fortuito ou força maior",
    phase: "GCTIC",
    probability: 0.10,
    probabilityLabel: "Raro",
    impact: 0.80,
    impactLabel: "Muito Alto",
    riskScore: 0.08,
    riskLevel: "Baixo",
    damage: "Indisponibilidade temporária do serviço, impacto na operação escolar",
    treatment: "Aceitar",
    preventiveActions: [
      { id: "R11-AP-01", action: "Exigir plano de contingência e continuidade de negócios da contratada", responsible: "Gestor do Contrato" },
      { id: "R11-AP-02", action: "Prever cláusulas contratuais de responsabilidade e recuperação", responsible: "Área Jurídica" }
    ],
    contingencyActions: [
      { id: "R11-AC-01", action: "Acionar plano de contingência", responsible: "Contratada / Gestor" },
      { id: "R11-AC-02", action: "Comunicar escolas e ativar alternativas temporárias", responsible: "Equipe de Fiscalização" }
    ]
  }
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
  { name: "RTF", description: "Relatório Técnico Final", periodicity: "Única", status: "Planejado" },
  { name: "RAT", description: "Relatório de Atendimento Técnico", periodicity: "Por atendimento", status: "Planejado" },
  { name: "PPI", description: "Projeto Provisório de Instalação", periodicity: "Por escola", status: "Planejado" },
  { name: "PDI", description: "Projeto Definitivo de Instalação", periodicity: "Por escola", status: "Planejado" }
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
