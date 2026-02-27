
# Replanejamento Contratual: Inicio Marco/2026, 12 meses, Fonte Unica 14.172

## Resumo das Mudancas

Tres grandes eixos de alteracao:

1. **Data de inicio**: de 02/02/2026 para **02/03/2026** (todos os ciclos, fases, desembolsos deslocam 1 mes)
2. **Fonte de financiamento**: remover Tesouro Estadual, **somente Lei 14.172/2021 (FUST)**
3. **Prazo contratual**: de 36 meses para **12 meses**, com novo valor total baseado na tabela de itens
4. **Tabela de itens contratados**: atualizar servicos/equipamentos e valor total conforme Anexo VIII
5. **Distribuicao de itens por escola**: integrar itens contratados no modulo de evidencias (PPI/PDI)

---

## Dados Extraidos do Anexo VIII

| IT | Especificacao | Unidade | Qtd | Meses | Vr. Unit. | Vr. Mensal | Vr. Anual (12m) |
|----|---------------|---------|-----|-------|-----------|------------|------------------|
| 01 | Internet Dedicado (fibra, simetrico 1:1) | Mbps | 92.000 | 12 | R$ 4,10 | R$ 377.200,00 | R$ 4.526.400,00 |
| 02 | Internet Satelite (LEO) | Unid | 50 | 12 | R$ 2.200,00 | R$ 110.000,00 | R$ 1.320.000,00 |
| 03 | Wi-Fi KIT I (ate 400 m2) | Unid | 327 | 12 | R$ 2.300,24 | R$ 752.178,48 | R$ 9.026.141,76 |
| 04 | Wi-Fi KIT II (401-800 m2) | Unid | 161 | 12 | R$ 3.138,31 | R$ 505.267,91 | R$ 6.063.214,92 |
| 05 | Wi-Fi KIT III (801-1500 m2) | Unid | 15 | 12 | R$ 5.506,31 | R$ 82.594,65 | R$ 991.135,80 |
| 06 | Adequacao Cab. Estruturado + SQS | Unid | 150 | 12 | R$ 1.663,37 | R$ 249.505,50 | R$ 2.994.066,00 |
| 07 | Suporte Tecnico Especializado | Unid | 631 | 12 | R$ 1.455,04 | R$ 918.130,24 | R$ 11.017.562,88 |
| **TOTAL** | | | | | | **R$ 2.994.876,78** | **R$ 35.938.521,36** |

**Novo valor total do contrato: R$ 35.938.521,36 (12 meses)**

---

## Alteracoes por Arquivo

### 1. `src/data/contractData.ts` — Dados centrais

**kpiData:**
- `totalValue`: 89.971.275,00 -> **35.938.521,36**
- `fonte14172`: 54.134.450,00 -> **35.938.521,36** (100% do valor)
- Remover `fontTesouro` (ou setar 0)
- `executionPeriod`: "36 meses" -> **"12 meses"**
- `startDate`: "Fevereiro/2026" -> **"Marco/2026"**
- `totalPhases`: 7 (manter, recalcular valores)

**financingSources:** Remover mencao a "complementados por outras fontes orcamentarias da SEDUC-PI". Somente Lei 14.172/2021 (FUST).

**disbursementData:** Deslocar todos os meses em +1 (Fev->Mar, Mar->Abr, ..., Ago->Set). Recalcular valores proporcionalmente ao novo total (R$ 35.938.521,36):
- RPTI: Mar/26, 10%, R$ 3.593.852,14
- PEP-I: Abr/26, 6%, R$ 2.156.311,28
- PEP-M1: Mai/26, 9%, R$ 3.234.466,92
- PEP-M2: Jun/26, 10%, R$ 3.593.852,14
- PEP-M3: Jul/26, 10%, R$ 3.593.852,14
- PEP-F: Ago/26, 9%, R$ 3.234.466,92
- RTF: Set/26, 6%, R$ 2.156.311,28

**phases:** Deslocar todos os meses em +1:
- RPTI: Mar/26, PEP-I: Abr/26, PEP-M1: Mai/26, PEP-M2: Jun/26, PEP-M3: Jul/26, PEP-F: Ago/26, RTF: Set/26

Adicionar novo export `contractItems` com os 7 itens contratados do Anexo VIII (IT 01-07) com todos os campos (especificacao, unidade, quantidade, meses, vr. unitario, vr. mensal, vr. anual).

### 2. `src/components/layout/Header.tsx`
- `startDate`: '2026-02-02' -> **'2026-03-02'**
- Texto: "Inicio: 02/02/2026" -> **"Inicio: 02/03/2026"**

### 3. `src/components/dashboard/KPICards.tsx`
- Remover card "Fonte Tesouro"
- Atualizar subtitle do valor total para "R$ 35,9 milhoes"
- Card "Fonte Lei 14.172" agora reflete 100% do contrato

### 4. `src/components/dashboard/ExecutiveTimeline.tsx`
- Meses: ["Mar/26", "Abr/26", "Mai/26", "Jun/26", "Jul/26", "Ago/26", "Set/26"]
- Footer: "Periodo: Marco - Setembro 2026"

### 5. `src/pages/sections/Section1.tsx`
- Atualizar serviceMetrics para refletir Anexo VIII (remover "Banda Larga 631 Links", adicionar KIT I/II/III, Cab. Estruturado + SQS, Suporte Tecnico)
- Remover "Fonte Tesouro R$ 35.836.825,00" dos dados contratuais
- Atualizar valor total para R$ 35.938.521,36
- Atualizar equipmentMetrics com quantidades do Anexo VIII

### 6. `src/pages/sections/Section7.tsx` — Cronograma de Desembolso
- Remover "Tesouro" da `resourceAllocation` — todos os itens sao **somente "Lei 14.172"** por 12 meses (1 ano apenas)
- Simplificar matriz: remover colunas Ano 2027 e Ano 2028 (contrato e de 12 meses)
- Atualizar "Inicio Previsto: Fevereiro/2026" -> **"Marco/2026"**
- Remover secao "Estrategia de Transicao e Sustentabilidade" (nao ha transicao, so 1 fonte)

### 7. `src/data/cronogramaData.ts`
- Deslocar ciclosResumo: CICLO 001 Mar/2026, CICLO 002 Abr/2026, CICLO 003 Mai/2026, CICLO 004 Jun/2026, CICLO 005 Jul/2026, CICLO 006 Ago/2026
- Atualizar comentario "Inicio do programa: 02/03/2026"

### 8. `src/data/evidenciasData.ts`
- Adicionar interface `ItemContratadoEscola` com campos: tipoKit (KIT I/II/III), qtdAPs, temSQS, temAdequacao, bandaContratada (Mbps)
- Derivar distribuicao de itens por escola com base no Anexo VIII:
  - KIT I (327 escolas ate 400m2), KIT II (161 escolas 401-800m2), KIT III (15 escolas 801-1500m2)
  - Dedicado: 92.000 Mbps / ~581 escolas urbanas ≈ distribuicao proporcional
  - Satelital: 50 kits para escolas rurais
  - Adequacao + SQS: 150 unidades
  - Suporte: 631 unidades (todos)
- Exportar `getItensContratadosEscola(escola)` para uso nas telas PPI/PDI

### 9. `src/pages/evidencias/PPIFormulario.tsx`
- Substituir equipamentos genericos pela distribuicao real baseada em `getItensContratadosEscola()`
- Mostrar tipo de KIT atribuido, banda contratada, se tem adequacao + SQS

### 10. `src/pages/evidencias/PDIFormulario.tsx`
- Inventario pre-preenchido com itens contratados para aquela escola
- Metricas SQS com banda contratada real

### 11. Componentes PDF afetados (atualizacao de dados):
- `src/components/pdf-report/sections/Section1.tsx` — remover fontTesouro
- `src/components/pdf-report/sections/Section7.tsx` — remover fontTesouro
- `src/components/pdf-report/sections/ExecutiveSummary.tsx` — atualizar valores
- `src/components/pdf-report/sections/DashboardSection.tsx` — atualizar valores
- `src/components/pdf/sections/PDFDashboard.tsx` — remover Tesouro
- `src/components/pdf/sections/PDFSection1.tsx` — remover Tesouro, atualizar valores
- `src/components/pdf/sections/PDFSection6.tsx` — atualizar meses das fases

### 12. `src/components/layout/BasicInfoCard.tsx`
- Atualizar financingSources para refletir apenas Lei 14.172

---

## Sequencia de Implementacao

1. Atualizar `contractData.ts` (dados centrais: valor, fonte, datas, fases, desembolso, itens contratados)
2. Atualizar `cronogramaData.ts` (ciclos deslocados +1 mes)
3. Atualizar `Header.tsx` (data de inicio)
4. Atualizar `KPICards.tsx` (remover Tesouro)
5. Atualizar `ExecutiveTimeline.tsx` (meses)
6. Atualizar `Section1.tsx` (servicos, valores, itens do Anexo VIII)
7. Atualizar `Section7.tsx` (desembolso, remover transicao, 12 meses)
8. Atualizar `evidenciasData.ts` (distribuicao de itens por escola)
9. Atualizar `PPIFormulario.tsx` e `PDIFormulario.tsx` (itens contratados por escola)
10. Atualizar componentes PDF (6 arquivos com dados de fonte/valor)
11. Atualizar `BasicInfoCard.tsx` (financiamento)
