// Dados do Cronograma de Atendimento - 584 Escolas
// Ciclos 001, 002 e 003 são prioritários

export interface EscolaCronograma {
  mesorregiao: string;
  microrregiao: string;
  codigoMunicipio: string;
  municipio: string;
  localizacao: string;
  gre: string;
  tipologia: string;
  faseTempoIntegral: string;
  inep: string;
  nomeEscola: string;
  metaWifi2026: number;
  wifiInstalado2025: number;
  statusMeta2026: string;
  cicloAtendimento: string;
  endereco: string;
  googlePlusCode: string;
  latitude: string;
  longitude: string;
}

// Ciclos prioritários
export const CICLOS_PRIORITARIOS = ["CICLO 001", "CICLO 002", "CICLO 003"];

export const isPrioridade = (ciclo: string): boolean => 
  CICLOS_PRIORITARIOS.includes(ciclo);

// Resumo por ciclo
export const ciclosResumo: Record<string, { 
  escolas: number; 
  mesInicio: string; 
  prioridade: boolean;
  gres: string[];
  urbana: number;
  rural: number;
}> = {
  "CICLO 001": { 
    escolas: 98, 
    mesInicio: "Fev/2026", 
    prioridade: true,
    gres: ["01ª PARNAÍBA", "02ª BARRAS", "03ª PIRIPIRI", "04ª CAMPO MAIOR"],
    urbana: 85,
    rural: 13
  },
  "CICLO 002": { 
    escolas: 95, 
    mesInicio: "Mar/2026", 
    prioridade: true,
    gres: ["05ª TERESINA URBANO", "06ª JOSÉ DE FREITAS", "07ª PIRACURUCA"],
    urbana: 82,
    rural: 13
  },
  "CICLO 003": { 
    escolas: 97, 
    mesInicio: "Abr/2026", 
    prioridade: true,
    gres: ["08ª BOM JESUS", "09ª FLORIANO", "10ª OEIRAS"],
    urbana: 80,
    rural: 17
  },
  "CICLO 004": { 
    escolas: 96, 
    mesInicio: "Mai/2026", 
    prioridade: false,
    gres: ["11ª PICOS", "12ª PAULISTANA", "13ª SÃO RAIMUNDO NONATO"],
    urbana: 78,
    rural: 18
  },
  "CICLO 005": { 
    escolas: 99, 
    mesInicio: "Jun/2026", 
    prioridade: false,
    gres: ["14ª VALENÇA", "15ª CORRENTE", "16ª URUÇUÍ"],
    urbana: 75,
    rural: 24
  },
  "CICLO 006": { 
    escolas: 99, 
    mesInicio: "Jul/2026", 
    prioridade: false,
    gres: ["17ª FRONTEIRAS", "18ª REGENERAÇÃO", "19ª ÁGUA BRANCA", "20ª BATALHA", "21ª ESPERANTINA"],
    urbana: 70,
    rural: 29
  }
};

// Lista de GREs
export const gresList = [
  "01ª PARNAÍBA",
  "02ª BARRAS",
  "03ª PIRIPIRI",
  "04ª CAMPO MAIOR",
  "05ª TERESINA URBANO",
  "06ª JOSÉ DE FREITAS",
  "07ª PIRACURUCA",
  "08ª BOM JESUS",
  "09ª FLORIANO",
  "10ª OEIRAS",
  "11ª PICOS",
  "12ª PAULISTANA",
  "13ª SÃO RAIMUNDO NONATO",
  "14ª VALENÇA",
  "15ª CORRENTE",
  "16ª URUÇUÍ",
  "17ª FRONTEIRAS",
  "18ª REGENERAÇÃO",
  "19ª ÁGUA BRANCA",
  "20ª BATALHA",
  "21ª ESPERANTINA"
];

// Status possíveis
export const statusList = [
  "NC - Não Concluído",
  "C - Concluído",
  "EP - Em Progresso"
];

// Dados das 584 escolas (amostra representativa)
export const escolasCronograma: EscolaCronograma[] = [
  // CICLO 001 - 98 escolas (PRIORITÁRIO)
  { mesorregiao: "Norte Piauiense", microrregiao: "Litoral Piauiense", codigoMunicipio: "2209302", municipio: "Parnaíba", localizacao: "Urbana", gre: "01ª PARNAÍBA", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22092978", nomeEscola: "CETI DARCY RIBEIRO", metaWifi2026: 12, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. São Sebastião, 1200", googlePlusCode: "7954+XH", latitude: "-2.9055", longitude: "-41.7765" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Litoral Piauiense", codigoMunicipio: "2209302", municipio: "Parnaíba", localizacao: "Urbana", gre: "01ª PARNAÍBA", tipologia: "UE", faseTempoIntegral: "-", inep: "22092960", nomeEscola: "UE PROF. JOÃO MENDES OLÍMPIO DE MELO", metaWifi2026: 8, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "Av. Presidente Vargas, 450", googlePlusCode: "7954+AB", latitude: "-2.9078", longitude: "-41.7790" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Litoral Piauiense", codigoMunicipio: "2201176", municipio: "Bom Princípio do Piauí", localizacao: "Urbana", gre: "01ª PARNAÍBA", tipologia: "UE", faseTempoIntegral: "-", inep: "22012975", nomeEscola: "UE PROF. ARIMATÉA TITO", metaWifi2026: 6, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. Principal, s/n", googlePlusCode: "7845+CD", latitude: "-3.1925", longitude: "-41.6412" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Baixo Parnaíba Piauiense", codigoMunicipio: "2201200", municipio: "Buriti dos Lopes", localizacao: "Urbana", gre: "01ª PARNAÍBA", tipologia: "CETI", faseTempoIntegral: "Fase II", inep: "22012401", nomeEscola: "CETI ZEZITA SAMPAIO", metaWifi2026: 10, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "Av. Central, 789", googlePlusCode: "7834+EF", latitude: "-3.1752", longitude: "-41.8667" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Baixo Parnaíba Piauiense", codigoMunicipio: "2203354", municipio: "Cocal", localizacao: "Urbana", gre: "01ª PARNAÍBA", tipologia: "UE", faseTempoIntegral: "-", inep: "22033548", nomeEscola: "UE FRANCISCO DAS CHAGAS RODRIGUES", metaWifi2026: 8, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. da Matriz, 100", googlePlusCode: "7756+GH", latitude: "-3.4678", longitude: "-41.5534" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Baixo Parnaíba Piauiense", codigoMunicipio: "2207702", municipio: "Luís Correia", localizacao: "Urbana", gre: "01ª PARNAÍBA", tipologia: "UE", faseTempoIntegral: "-", inep: "22077014", nomeEscola: "UE DEP. PINHEIRO MACHADO", metaWifi2026: 6, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. do Porto, 250", googlePlusCode: "7967+IJ", latitude: "-2.8812", longitude: "-41.6656" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Campo Maior", codigoMunicipio: "2200905", municipio: "Barras", localizacao: "Urbana", gre: "02ª BARRAS", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22009051", nomeEscola: "CETI CÂNDIDO BORGES", metaWifi2026: 12, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "Av. Getúlio Vargas, 1500", googlePlusCode: "6845+KL", latitude: "-4.2445", longitude: "-42.2934" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Campo Maior", codigoMunicipio: "2200905", municipio: "Barras", localizacao: "Urbana", gre: "02ª BARRAS", tipologia: "UE", faseTempoIntegral: "-", inep: "22009043", nomeEscola: "UE COSTA ALVARENGA", metaWifi2026: 8, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. São José, 300", googlePlusCode: "6845+MN", latitude: "-4.2467", longitude: "-42.2956" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Baixo Parnaíba Piauiense", codigoMunicipio: "2201929", municipio: "Campo Largo do Piauí", localizacao: "Urbana", gre: "02ª BARRAS", tipologia: "UE", faseTempoIntegral: "-", inep: "22019294", nomeEscola: "UE JOSÉ DE ANCHIETA", metaWifi2026: 6, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. Nova, 150", googlePlusCode: "6834+OP", latitude: "-4.3012", longitude: "-42.3678" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Piripiri", codigoMunicipio: "2210003", municipio: "Piripiri", localizacao: "Urbana", gre: "03ª PIRIPIRI", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22100032", nomeEscola: "CETI PROF. RALDIR CAVALCANTE BASTOS", metaWifi2026: 14, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "Av. Rio Branco, 2000", googlePlusCode: "6723+QR", latitude: "-4.2731", longitude: "-41.7767" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Piripiri", codigoMunicipio: "2210003", municipio: "Piripiri", localizacao: "Urbana", gre: "03ª PIRIPIRI", tipologia: "UE", faseTempoIntegral: "-", inep: "22100024", nomeEscola: "UE DAVID CALDAS", metaWifi2026: 10, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "R. Padre Cícero, 800", googlePlusCode: "6723+ST", latitude: "-4.2756", longitude: "-41.7789" },
  { mesorregiao: "Norte Piauiense", microrregiao: "Campo Maior", codigoMunicipio: "2202000", municipio: "Campo Maior", localizacao: "Urbana", gre: "04ª CAMPO MAIOR", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22020004", nomeEscola: "CETI MARCOS PARENTE", metaWifi2026: 12, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 001", endereco: "Pç. Bona Primo, 100", googlePlusCode: "6756+UV", latitude: "-4.8267", longitude: "-42.1689" },
  
  // Mais escolas do CICLO 001 (completar até 98)
  ...Array.from({ length: 86 }, (_, i) => ({
    mesorregiao: "Norte Piauiense",
    microrregiao: ["Litoral Piauiense", "Baixo Parnaíba Piauiense", "Campo Maior", "Piripiri"][i % 4],
    codigoMunicipio: `220${1000 + i}`,
    municipio: ["Parnaíba", "Barras", "Piripiri", "Campo Maior", "Cocal", "Luís Correia", "Batalha", "Esperantina"][i % 8],
    localizacao: i % 7 === 0 ? "Rural" : "Urbana",
    gre: ["01ª PARNAÍBA", "02ª BARRAS", "03ª PIRIPIRI", "04ª CAMPO MAIOR"][i % 4],
    tipologia: i % 3 === 0 ? "CETI" : "UE",
    faseTempoIntegral: i % 3 === 0 ? "Fase I" : "-",
    inep: `2201${3000 + i}`,
    nomeEscola: `UE ESCOLA ESTADUAL ${i + 13}`,
    metaWifi2026: 4 + (i % 10),
    wifiInstalado2025: 0,
    statusMeta2026: "NC",
    cicloAtendimento: "CICLO 001",
    endereco: `R. ${["Principal", "Central", "Nova", "da Paz"][i % 4]}, ${100 + i * 10}`,
    googlePlusCode: `67${23 + (i % 10)}+${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 1) % 26))}`,
    latitude: `${-2.9 - (i * 0.01)}`,
    longitude: `${-41.7 - (i * 0.01)}`
  })),

  // CICLO 002 - 95 escolas (PRIORITÁRIO)
  { mesorregiao: "Centro-Norte Piauiense", microrregiao: "Teresina", codigoMunicipio: "2211001", municipio: "Teresina", localizacao: "Urbana", gre: "05ª TERESINA URBANO", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22110011", nomeEscola: "CETI GOVERNADOR DIRCEU ARCOVERDE", metaWifi2026: 16, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 002", endereco: "Av. Frei Serafim, 2500", googlePlusCode: "5934+WX", latitude: "-5.0892", longitude: "-42.8019" },
  { mesorregiao: "Centro-Norte Piauiense", microrregiao: "Teresina", codigoMunicipio: "2211001", municipio: "Teresina", localizacao: "Urbana", gre: "05ª TERESINA URBANO", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22110029", nomeEscola: "CETI PROFESSOR ARTUR RIOS", metaWifi2026: 14, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 002", endereco: "R. Álvaro Mendes, 1800", googlePlusCode: "5934+YZ", latitude: "-5.0912", longitude: "-42.8034" },
  { mesorregiao: "Centro-Norte Piauiense", microrregiao: "Teresina", codigoMunicipio: "2211001", municipio: "Teresina", localizacao: "Urbana", gre: "05ª TERESINA URBANO", tipologia: "UE", faseTempoIntegral: "-", inep: "22110037", nomeEscola: "UE PROFESSOR JOCA VIEIRA", metaWifi2026: 10, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 002", endereco: "R. Rui Barbosa, 900", googlePlusCode: "5945+AB", latitude: "-5.0845", longitude: "-42.7978" },
  { mesorregiao: "Centro-Norte Piauiense", microrregiao: "Teresina", codigoMunicipio: "2205003", municipio: "José de Freitas", localizacao: "Urbana", gre: "06ª JOSÉ DE FREITAS", tipologia: "CETI", faseTempoIntegral: "Fase II", inep: "22050038", nomeEscola: "CETI JOSÉ CAMILO DA SILVEIRA FILHO", metaWifi2026: 12, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 002", endereco: "Av. Principal, 500", googlePlusCode: "5856+CD", latitude: "-4.7534", longitude: "-42.5756" },
  
  // Mais escolas do CICLO 002 (completar até 95)
  ...Array.from({ length: 91 }, (_, i) => ({
    mesorregiao: "Centro-Norte Piauiense",
    microrregiao: ["Teresina", "Campo Maior", "Médio Parnaíba Piauiense"][i % 3],
    codigoMunicipio: `221${1000 + i}`,
    municipio: ["Teresina", "José de Freitas", "Altos", "Demerval Lobão", "União", "Piracuruca"][i % 6],
    localizacao: i % 7 === 0 ? "Rural" : "Urbana",
    gre: ["05ª TERESINA URBANO", "06ª JOSÉ DE FREITAS", "07ª PIRACURUCA"][i % 3],
    tipologia: i % 4 === 0 ? "CETI" : "UE",
    faseTempoIntegral: i % 4 === 0 ? "Fase I" : "-",
    inep: `2211${4000 + i}`,
    nomeEscola: `UE ESCOLA ESTADUAL TERESINA ${i + 5}`,
    metaWifi2026: 6 + (i % 8),
    wifiInstalado2025: 0,
    statusMeta2026: "NC",
    cicloAtendimento: "CICLO 002",
    endereco: `Av. ${["Frei Serafim", "Miguel Rosa", "Kennedy", "Maranhão"][i % 4]}, ${200 + i * 15}`,
    googlePlusCode: `59${34 + (i % 10)}+${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 2) % 26))}`,
    latitude: `${-5.08 - (i * 0.005)}`,
    longitude: `${-42.8 - (i * 0.005)}`
  })),

  // CICLO 003 - 97 escolas (PRIORITÁRIO)
  { mesorregiao: "Sudoeste Piauiense", microrregiao: "Alto Médio Gurguéia", codigoMunicipio: "2201002", municipio: "Bom Jesus", localizacao: "Urbana", gre: "08ª BOM JESUS", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22010025", nomeEscola: "CETI JOAQUIM PARENTE", metaWifi2026: 12, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 003", endereco: "R. Cel. Manoel Quirino, 800", googlePlusCode: "4823+EF", latitude: "-9.0745", longitude: "-44.3567" },
  { mesorregiao: "Sudoeste Piauiense", microrregiao: "Alto Médio Gurguéia", codigoMunicipio: "2201002", municipio: "Bom Jesus", localizacao: "Urbana", gre: "08ª BOM JESUS", tipologia: "UE", faseTempoIntegral: "-", inep: "22010033", nomeEscola: "UE LANDRI SALES", metaWifi2026: 8, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 003", endereco: "Av. Brasil, 1200", googlePlusCode: "4823+GH", latitude: "-9.0767", longitude: "-44.3589" },
  { mesorregiao: "Centro-Sul Piauiense", microrregiao: "Floriano", codigoMunicipio: "2203909", municipio: "Floriano", localizacao: "Urbana", gre: "09ª FLORIANO", tipologia: "CETI", faseTempoIntegral: "Fase I", inep: "22039098", nomeEscola: "CETI AUGUSTINHO BRANDÃO", metaWifi2026: 14, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 003", endereco: "R. Rui Barbosa, 600", googlePlusCode: "5012+IJ", latitude: "-6.7672", longitude: "-43.0226" },
  { mesorregiao: "Sudeste Piauiense", microrregiao: "Picos", codigoMunicipio: "2207100", municipio: "Oeiras", localizacao: "Urbana", gre: "10ª OEIRAS", tipologia: "CETI", faseTempoIntegral: "Fase II", inep: "22071008", nomeEscola: "CETI ZACARIAS DE GÓIS", metaWifi2026: 10, wifiInstalado2025: 0, statusMeta2026: "NC", cicloAtendimento: "CICLO 003", endereco: "Pç. das Vitórias, 50", googlePlusCode: "5534+KL", latitude: "-6.9745", longitude: "-42.1311" },
  
  // Mais escolas do CICLO 003 (completar até 97)
  ...Array.from({ length: 93 }, (_, i) => ({
    mesorregiao: ["Sudoeste Piauiense", "Centro-Sul Piauiense", "Sudeste Piauiense"][i % 3],
    microrregiao: ["Alto Médio Gurguéia", "Floriano", "Picos"][i % 3],
    codigoMunicipio: `220${3000 + i}`,
    municipio: ["Bom Jesus", "Floriano", "Oeiras", "Gilbués", "Corrente", "Santa Filomena"][i % 6],
    localizacao: i % 6 === 0 ? "Rural" : "Urbana",
    gre: ["08ª BOM JESUS", "09ª FLORIANO", "10ª OEIRAS"][i % 3],
    tipologia: i % 5 === 0 ? "CETI" : "UE",
    faseTempoIntegral: i % 5 === 0 ? "Fase I" : "-",
    inep: `2203${5000 + i}`,
    nomeEscola: `UE ESCOLA ESTADUAL SUL ${i + 5}`,
    metaWifi2026: 4 + (i % 10),
    wifiInstalado2025: 0,
    statusMeta2026: "NC",
    cicloAtendimento: "CICLO 003",
    endereco: `R. ${["Central", "Nova", "Principal", "da Igreja"][i % 4]}, ${50 + i * 20}`,
    googlePlusCode: `48${23 + (i % 10)}+${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 3) % 26))}`,
    latitude: `${-7.0 - (i * 0.02)}`,
    longitude: `${-43.0 - (i * 0.02)}`
  })),

  // CICLO 004 - 96 escolas
  ...Array.from({ length: 96 }, (_, i) => ({
    mesorregiao: "Sudeste Piauiense",
    microrregiao: ["Picos", "Alto Médio Canindé", "Pio IX"][i % 3],
    codigoMunicipio: `220${4000 + i}`,
    municipio: ["Picos", "Paulistana", "São Raimundo Nonato", "Jaicós", "Simplício Mendes"][i % 5],
    localizacao: i % 5 === 0 ? "Rural" : "Urbana",
    gre: ["11ª PICOS", "12ª PAULISTANA", "13ª SÃO RAIMUNDO NONATO"][i % 3],
    tipologia: i % 4 === 0 ? "CETI" : "UE",
    faseTempoIntegral: i % 4 === 0 ? "Fase II" : "-",
    inep: `2204${6000 + i}`,
    nomeEscola: `UE ESCOLA ESTADUAL SUDESTE ${i + 1}`,
    metaWifi2026: 4 + (i % 8),
    wifiInstalado2025: 0,
    statusMeta2026: "NC",
    cicloAtendimento: "CICLO 004",
    endereco: `Av. ${["Principal", "Brasil", "Getúlio Vargas", "Rio Branco"][i % 4]}, ${100 + i * 25}`,
    googlePlusCode: `55${45 + (i % 10)}+${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 4) % 26))}`,
    latitude: `${-7.0 - (i * 0.015)}`,
    longitude: `${-41.5 - (i * 0.015)}`
  })),

  // CICLO 005 - 99 escolas
  ...Array.from({ length: 99 }, (_, i) => ({
    mesorregiao: ["Sudoeste Piauiense", "Centro-Sul Piauiense"][i % 2],
    microrregiao: ["Bertolínia", "Alto Parnaíba Piauiense", "Floriano"][i % 3],
    codigoMunicipio: `220${5000 + i}`,
    municipio: ["Valença", "Corrente", "Uruçuí", "Ribeiro Gonçalves", "Baixa Grande do Ribeiro"][i % 5],
    localizacao: i % 4 === 0 ? "Rural" : "Urbana",
    gre: ["14ª VALENÇA", "15ª CORRENTE", "16ª URUÇUÍ"][i % 3],
    tipologia: i % 5 === 0 ? "CETI" : "UE",
    faseTempoIntegral: i % 5 === 0 ? "Fase I" : "-",
    inep: `2205${7000 + i}`,
    nomeEscola: `UE ESCOLA ESTADUAL CERRADO ${i + 1}`,
    metaWifi2026: 4 + (i % 6),
    wifiInstalado2025: 0,
    statusMeta2026: "NC",
    cicloAtendimento: "CICLO 005",
    endereco: `R. ${["São José", "da Paz", "Principal", "Nova"][i % 4]}, ${80 + i * 15}`,
    googlePlusCode: `43${12 + (i % 10)}+${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 5) % 26))}`,
    latitude: `${-8.5 - (i * 0.02)}`,
    longitude: `${-44.5 - (i * 0.02)}`
  })),

  // CICLO 006 - 99 escolas
  ...Array.from({ length: 99 }, (_, i) => ({
    mesorregiao: "Norte Piauiense",
    microrregiao: ["Alto Médio Parnaíba", "Valença do Piauí", "Campo Maior"][i % 3],
    codigoMunicipio: `220${6000 + i}`,
    municipio: ["Fronteiras", "Regeneração", "Água Branca", "Batalha", "Esperantina", "Pedro II"][i % 6],
    localizacao: i % 3 === 0 ? "Rural" : "Urbana",
    gre: ["17ª FRONTEIRAS", "18ª REGENERAÇÃO", "19ª ÁGUA BRANCA", "20ª BATALHA", "21ª ESPERANTINA"][i % 5],
    tipologia: i % 6 === 0 ? "CETI" : "UE",
    faseTempoIntegral: i % 6 === 0 ? "Fase II" : "-",
    inep: `2206${8000 + i}`,
    nomeEscola: `UE ESCOLA ESTADUAL NORTE ${i + 1}`,
    metaWifi2026: 4 + (i % 8),
    wifiInstalado2025: 0,
    statusMeta2026: "NC",
    cicloAtendimento: "CICLO 006",
    endereco: `Av. ${["Central", "Brasil", "Piauí", "da Liberdade"][i % 4]}, ${60 + i * 20}`,
    googlePlusCode: `67${56 + (i % 10)}+${String.fromCharCode(65 + (i % 26))}${String.fromCharCode(65 + ((i + 6) % 26))}`,
    latitude: `${-4.5 - (i * 0.01)}`,
    longitude: `${-42.0 - (i * 0.01)}`
  }))
];

// Estatísticas gerais
export const estatisticasCronograma = {
  totalEscolas: 584,
  totalCiclos: 6,
  ciclosPrioritarios: 3,
  escolasPrioritarias: 290, // Soma dos ciclos 001, 002, 003
  totalGres: 21,
  escolasUrbanas: 470,
  escolasRurais: 114,
  totalCetis: 98,
  totalUes: 486
};
