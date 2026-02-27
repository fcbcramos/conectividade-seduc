import { escolasCronograma, type EscolaCronograma } from "./cronogramaData";

// ===================== TIPOS =====================

export type TipoLink = "Dedicado" | "Satelital";
export type StatusEvidencia = "Pendente" | "Em Andamento" | "Concluído";
export type StatusFase = "Pendente" | "Em Andamento" | "Concluído" | "N/A";

export interface EvidenciaEscola {
  inep: string;
  nomeEscola: string;
  municipio: string;
  gre: string;
  zona: string; // "URBANA" | "RURAL"
  tipoLink: TipoLink;
  ciclo: string;
  tipoIntervencao: string;
  latitude: string;
  longitude: string;
  endereco: string;
  statusPPI: StatusFase;
  statusCampo: StatusFase;
  statusPDI: StatusFase;
  statusSQS: StatusFase;
  statusGeral: StatusEvidencia;
}

export interface MetricaSQS {
  metrica: string;
  metaDedicado: string;
  metaSatelital: string;
  valorAtual: string;
  status: "Conforme" | "Alerta" | "Crítico" | "Sem Dados";
}

export interface ChecklistCampo {
  id: string;
  item: string;
  concluido: boolean;
}

export interface EquipamentoPPI {
  tipo: string;
  modelo: string;
  fabricante: string;
  quantidade: number;
}

export interface ItemInventario {
  tipo: string;
  modelo: string;
  numSerie: string;
  firmware: string;
  localInstalacao: string;
}

export interface FotoRelatorio {
  id: number;
  rotulo: string;
  categoria: string;
  uploaded: boolean;
}

// ===================== DERIVAÇÃO DO TIPO DE LINK =====================

export const derivarTipoLink = (zona: string): TipoLink => {
  return zona === "RURAL" ? "Satelital" : "Dedicado";
};

// ===================== MOCK: STATUS POR ESCOLA =====================

const gerarStatusMock = (index: number): Pick<EvidenciaEscola, "statusPPI" | "statusCampo" | "statusPDI" | "statusSQS" | "statusGeral"> => {
  // Distribui status de forma realista baseado na posição
  if (index < 40) {
    return { statusPPI: "Concluído", statusCampo: "Concluído", statusPDI: "Concluído", statusSQS: "Concluído", statusGeral: "Concluído" };
  } else if (index < 80) {
    return { statusPPI: "Concluído", statusCampo: "Concluído", statusPDI: "Em Andamento", statusSQS: "Pendente", statusGeral: "Em Andamento" };
  } else if (index < 150) {
    return { statusPPI: "Concluído", statusCampo: "Em Andamento", statusPDI: "Pendente", statusSQS: "Pendente", statusGeral: "Em Andamento" };
  } else if (index < 264) {
    return { statusPPI: "Concluído", statusCampo: "Pendente", statusPDI: "Pendente", statusSQS: "Pendente", statusGeral: "Em Andamento" };
  } else if (index < 350) {
    return { statusPPI: "Em Andamento", statusCampo: "Pendente", statusPDI: "Pendente", statusSQS: "Pendente", statusGeral: "Em Andamento" };
  } else {
    return { statusPPI: "Pendente", statusCampo: "Pendente", statusPDI: "Pendente", statusSQS: "Pendente", statusGeral: "Pendente" };
  }
};

export const evidenciasEscolas: EvidenciaEscola[] = escolasCronograma.map((escola: EscolaCronograma, index: number) => ({
  inep: escola.inep,
  nomeEscola: escola.nomeEscola,
  municipio: escola.municipio,
  gre: escola.gre,
  zona: escola.localizacao,
  tipoLink: derivarTipoLink(escola.localizacao),
  ciclo: escola.cicloAtendimento,
  tipoIntervencao: escola.tipoIntervencao || "IMPLANTAÇÃO",
  latitude: escola.latitude,
  longitude: escola.longitude,
  endereco: escola.endereco,
  ...gerarStatusMock(index),
}));

// ===================== CONTADORES / KPIs =====================

export const getContadores = () => {
  const total = evidenciasEscolas.length;
  const ppiConcluido = evidenciasEscolas.filter(e => e.statusPPI === "Concluído").length;
  const ppiPendente = total - ppiConcluido;
  const pdiConcluido = evidenciasEscolas.filter(e => e.statusPDI === "Concluído").length;
  const pdiPendente = total - pdiConcluido;
  const sqsAtivo = evidenciasEscolas.filter(e => e.statusSQS === "Concluído").length;
  const sqsInativo = total - sqsAtivo;
  const campoEmAndamento = evidenciasEscolas.filter(e => e.statusCampo === "Em Andamento").length;
  const campoConcluido = evidenciasEscolas.filter(e => e.statusCampo === "Concluído").length;

  return { total, ppiConcluido, ppiPendente, pdiConcluido, pdiPendente, sqsAtivo, sqsInativo, campoEmAndamento, campoConcluido };
};

// ===================== PROGRESSO POR GRE =====================

export const getProgressoPorGRE = () => {
  const greMap = new Map<string, { total: number; ppiOk: number; pdiOk: number; sqsOk: number }>();

  evidenciasEscolas.forEach(e => {
    if (!greMap.has(e.gre)) {
      greMap.set(e.gre, { total: 0, ppiOk: 0, pdiOk: 0, sqsOk: 0 });
    }
    const g = greMap.get(e.gre)!;
    g.total++;
    if (e.statusPPI === "Concluído") g.ppiOk++;
    if (e.statusPDI === "Concluído") g.pdiOk++;
    if (e.statusSQS === "Concluído") g.sqsOk++;
  });

  return Array.from(greMap.entries()).map(([gre, data]) => ({
    gre,
    ...data,
    ppiPercent: Math.round((data.ppiOk / data.total) * 100),
    pdiPercent: Math.round((data.pdiOk / data.total) * 100),
  })).sort((a, b) => a.gre.localeCompare(b.gre));
};

// ===================== PROGRESSO POR CICLO =====================

export const getProgressoPorCiclo = () => {
  const cicloMap = new Map<string, { total: number; ppiOk: number; pdiOk: number; sqsOk: number; prioridade: boolean }>();

  evidenciasEscolas.forEach(e => {
    if (!cicloMap.has(e.ciclo)) {
      cicloMap.set(e.ciclo, { total: 0, ppiOk: 0, pdiOk: 0, sqsOk: 0, prioridade: ["CICLO 001", "CICLO 002", "CICLO 003"].includes(e.ciclo) });
    }
    const c = cicloMap.get(e.ciclo)!;
    c.total++;
    if (e.statusPPI === "Concluído") c.ppiOk++;
    if (e.statusPDI === "Concluído") c.pdiOk++;
    if (e.statusSQS === "Concluído") c.sqsOk++;
  });

  return Array.from(cicloMap.entries()).map(([ciclo, data]) => ({
    ciclo,
    ...data,
  })).sort((a, b) => a.ciclo.localeCompare(b.ciclo));
};

// ===================== MÉTRICAS SQS MOCK =====================

export const metricasSQSMock: MetricaSQS[] = [
  { metrica: "Disponibilidade", metaDedicado: "≥ 99,0%", metaSatelital: "≥ 98,5%", valorAtual: "99,3%", status: "Conforme" },
  { metrica: "Latência (RTT)", metaDedicado: "≤ 50ms", metaSatelital: "≤ 60ms", valorAtual: "38ms", status: "Conforme" },
  { metrica: "Jitter", metaDedicado: "≤ 10ms", metaSatelital: "≤ 20ms", valorAtual: "7ms", status: "Conforme" },
  { metrica: "Perda de Pacotes", metaDedicado: "≤ 0,50%", metaSatelital: "≤ 0,50%", valorAtual: "0,12%", status: "Conforme" },
  { metrica: "Velocidade (Download)", metaDedicado: "≥ 90% contratada", metaSatelital: "≥ 90% contratada", valorAtual: "285 Mbps", status: "Conforme" },
  { metrica: "Velocidade (Upload)", metaDedicado: "≥ 90% contratada", metaSatelital: "≥ 90% contratada", valorAtual: "142 Mbps", status: "Conforme" },
];

// ===================== CHECKLIST DE CAMPO =====================

export const checklistCampoDefault: ChecklistCampo[] = [
  { id: "1", item: "Verificação elétrica (aterramento e tensões)", concluido: false },
  { id: "2", item: "Certificação de cabos Cat.6 (100% dos pontos)", concluido: false },
  { id: "3", item: "20 fotos padronizadas registradas", concluido: false },
  { id: "4", item: "Geolocalização do técnico registrada", concluido: false },
  { id: "5", item: "Disjuntor 25A curva C dedicado instalado", concluido: false },
];

// ===================== EQUIPAMENTOS PPI PADRÃO =====================

export const equipamentosPPIPadrao: EquipamentoPPI[] = [
  { tipo: "Access Point Indoor", modelo: "Wi-Fi 6 AX3600", fabricante: "A definir", quantidade: 4 },
  { tipo: "Access Point Outdoor", modelo: "Wi-Fi 6 AX3600", fabricante: "A definir", quantidade: 1 },
  { tipo: "Switch PoE", modelo: "24P Gigabit PoE+", fabricante: "A definir", quantidade: 1 },
  { tipo: "Firewall/Router", modelo: "UTM 1Gbps", fabricante: "A definir", quantidade: 1 },
  { tipo: "Sonda SQS (SIMET Box)", modelo: "SIMET Box v3", fabricante: "NIC.br", quantidade: 1 },
  { tipo: "Rack/Gabinete", modelo: "19\" 12U", fabricante: "A definir", quantidade: 1 },
  { tipo: "Nobreak", modelo: "1500VA Online", fabricante: "A definir", quantidade: 1 },
];

// ===================== FOTOS OBRIGATÓRIAS (20) =====================

export const fotosObrigatorias: FotoRelatorio[] = [
  { id: 1, rotulo: "Fachada da escola", categoria: "Fachada", uploaded: false },
  { id: 2, rotulo: "Entrada principal", categoria: "Fachada", uploaded: false },
  { id: 3, rotulo: "Rack - visão geral", categoria: "Rack", uploaded: false },
  { id: 4, rotulo: "Rack - elétrica/nobreak", categoria: "Rack", uploaded: false },
  { id: 5, rotulo: "Rack - equipamentos instalados", categoria: "Rack", uploaded: false },
  { id: 6, rotulo: "Rack - organização de cabos", categoria: "Rack", uploaded: false },
  { id: 7, rotulo: "Infraestrutura - eletroduto 1", categoria: "Infraestrutura", uploaded: false },
  { id: 8, rotulo: "Infraestrutura - eletroduto 2", categoria: "Infraestrutura", uploaded: false },
  { id: 9, rotulo: "Infraestrutura - passagem de cabos 1", categoria: "Infraestrutura", uploaded: false },
  { id: 10, rotulo: "Infraestrutura - passagem de cabos 2", categoria: "Infraestrutura", uploaded: false },
  { id: 11, rotulo: "Infraestrutura - caixa de passagem", categoria: "Infraestrutura", uploaded: false },
  { id: 12, rotulo: "Infraestrutura - fixação/acabamento", categoria: "Infraestrutura", uploaded: false },
  { id: 13, rotulo: "AP Indoor 1 - instalado", categoria: "Access Points", uploaded: false },
  { id: 14, rotulo: "AP Indoor 2 - instalado", categoria: "Access Points", uploaded: false },
  { id: 15, rotulo: "AP Indoor 3 - instalado", categoria: "Access Points", uploaded: false },
  { id: 16, rotulo: "AP Outdoor - instalado", categoria: "Access Points", uploaded: false },
  { id: 17, rotulo: "Certificação de cabos - equipamento", categoria: "Certificação", uploaded: false },
  { id: 18, rotulo: "Certificação de cabos - resultado", categoria: "Certificação", uploaded: false },
  { id: 19, rotulo: "Quadro elétrico", categoria: "Elétrica", uploaded: false },
  { id: 20, rotulo: "Aterramento", categoria: "Elétrica", uploaded: false },
];

// ===================== LISTA DE GREs PARA FILTRO =====================

export const gresListEvidencias = [
  "01ª GRE - PARNAIBA",
  "02ª GRE - BARRAS",
  "03ª GRE - PIRIPIRI",
  "04ª GRE - TERESINA",
  "05ª GRE - CAMPO MAIOR",
  "06ª GRE - REGENERAÇÃO",
  "07ª GRE - VALENÇA",
  "08ª GRE - OEIRAS",
  "09ª GRE - PICOS",
  "10ª GRE - FLORIANO",
  "11ª GRE - URUÇUI",
  "12ª GRE - SÃO JOÃO DO PIAUÍ",
  "13ª GRE - SÃO RAIMUNDO NONATO",
  "14ª GRE - BOM JESUS",
  "15ª GRE - CORRENTE",
  "16ª GRE - FRONTEIRAS",
  "17ª GRE - PAULISTANA",
  "18ª GRE - TERESINA",
  "19ª GRE - TERESINA",
  "20ª GRE - TERESINA",
  "21ª GRE - TERESINA",
];

// ===================== STATUS LIST PARA FILTRO =====================

export const statusEvidenciaList: StatusEvidencia[] = ["Pendente", "Em Andamento", "Concluído"];
export const tipoLinkList: TipoLink[] = ["Dedicado", "Satelital"];
export const zonaList = ["URBANA", "RURAL"];
export const cicloList = ["CICLO 001", "CICLO 002", "CICLO 003", "CICLO 004", "CICLO 005", "CICLO 006"];
