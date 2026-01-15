// Dados do Cronograma - Parte 2 (Ciclos 003 a 006)
// Este arquivo contém os dados das escolas dos ciclos 003 a 006

import { EscolaCronograma } from './cronogramaData';

// CICLO 003 - 88 escolas (PRIORITÁRIO)
export const escolasCiclo003: EscolaCronograma[] = [
  { mesorregiao: "SUDESTE PIAUIENSE", microrregiao: "ALTO MEDIO CANINDE", codigoMunicipio: "2201556", municipio: "BELA VISTA DO PIAUI", localizacao: "URBANA", gre: "12ª GRE - SÃO JOÃO DO PIAUÍ", tipologia: "CETI", faseTempoIntegral: "2025", inep: "22134840", nomeEscola: "CETI OLEGARIO AURELIANO DE SOUSA", metaWifi2026: 4, wifiInstalado2025: 0, statusMeta2026: "NÃO CONFORME", cicloAtendimento: "CICLO 003", endereco: "RUA MEM DE SA, 208, CENTRO, 64890000", googlePlusCode: "V3V2+PJ Santo Antônio, Canto do Buriti - PI", latitude: "-8,1056875", longitude: "-42,9484375" },
  { mesorregiao: "SUDOESTE PIAUIENSE", microrregiao: "SAO RAIMUNDO NONATO", codigoMunicipio: "2201988", municipio: "BREJO DO PIAUI", localizacao: "URBANA", gre: "12ª GRE - SÃO JOÃO DO PIAUÍ", tipologia: "CETI", faseTempoIntegral: "2025", inep: "22135685", nomeEscola: "CETI PROFESSOR ABELARDO PEREIRA", metaWifi2026: 4, wifiInstalado2025: 0, statusMeta2026: "NÃO CONFORME", cicloAtendimento: "CICLO 003", endereco: "AV GETULIO VARGAS, 896, CENTRO, 64890000", googlePlusCode: "V3P3+9R Bairro Nossa Senhora de Fátima, Canto do Buriti - PI", latitude: "-8,1140625", longitude: "-42,9454375" },
  { mesorregiao: "SUDOESTE PIAUIENSE", microrregiao: "SAO RAIMUNDO NONATO", codigoMunicipio: "2202307", municipio: "CANTO DO BURITI", localizacao: "URBANA", gre: "12ª GRE - SÃO JOÃO DO PIAUÍ", tipologia: "CETI", faseTempoIntegral: "2022", inep: "22067671", nomeEscola: "CETI BEIJA VALENTE", metaWifi2026: 4, wifiInstalado2025: 0, statusMeta2026: "NÃO CONFORME", cicloAtendimento: "CICLO 003", endereco: "RUA JERONIMO VIEIRA DE CARVALHO, 66, CENTRO, 64720000", googlePlusCode: "4GP2+GGR Socorro do Piauí, Piauí", latitude: "-7,8636375", longitude: "-42,4987344" },
  // ... adicionar todas as escolas do CICLO 003 aqui
];

// CICLO 004 - 94 escolas
export const escolasCiclo004: EscolaCronograma[] = [];

// CICLO 005 - 89 escolas  
export const escolasCiclo005: EscolaCronograma[] = [];

// CICLO 006 - 131 escolas
export const escolasCiclo006: EscolaCronograma[] = [];

export const todasEscolasParte2 = [
  ...escolasCiclo003,
  ...escolasCiclo004,
  ...escolasCiclo005,
  ...escolasCiclo006
];
