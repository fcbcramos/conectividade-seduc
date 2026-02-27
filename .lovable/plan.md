

# Tornar Cards PPI e PDI Clicaveis no Dashboard

## O que sera feito

Os cards de KPI "PPI Concluidos" e "PDI Concluidos" no Dashboard de Evidencias (`/evidencias`) passarao a ser clicaveis, navegando para a lista de escolas (`/evidencias/escolas`) ja filtrada pelo status correspondente.

Alem disso, os cards de fase no fluxo (Pre-Instalacao/PPI e Pos-Instalacao/PDI) tambem serao clicaveis com o mesmo comportamento.

## Alteracoes

### 1. `src/pages/evidencias/EvidenciasDashboard.tsx`
- Tornar os KPI cards de PPI e PDI clicaveis com `cursor-pointer` e `onClick` navegando para `/evidencias/escolas?fase=ppi` e `/evidencias/escolas?fase=pdi`
- Tornar os cards de fase PPI e PDI no fluxo horizontal tambem clicaveis com a mesma logica

### 2. `src/pages/evidencias/EscolasLista.tsx`
- Ler o query param `fase` da URL via `useSearchParams`
- Se `fase=ppi`, pre-filtrar para mostrar escolas com `statusPPI !== "Concluido"` (pendentes/em andamento) ou todas com destaque no PPI
- Se `fase=pdi`, idem para PDI
- Adicionar um filtro visual de "Fase" (PPI/PDI/Campo/SQS) nos filtros existentes para o usuario poder alternar

## Detalhes Tecnicos
- Usar `useSearchParams` do `react-router-dom` para ler `?fase=ppi` ou `?fase=pdi`
- Adicionar um novo estado `faseFilter` que e inicializado a partir do query param
- Os KPI cards terao hover visual (sombra, escala) para indicar que sao clicaveis

