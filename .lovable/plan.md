

# Plano Completo: Sistema de Coleta de Evidencias das Instalacoes

## 1. Contexto do Projeto

A plataforma **Caravana Digital** e o sistema de governanca contratual do programa **Escolas Conectadas Piaui**, que gerencia a modernizacao da infraestrutura de conectividade de **584 escolas** da rede estadual. O contrato tem valor de **R$ 89,9 milhoes**, executado em **6 ciclos de atendimento** (Fev a Ago/2026), distribuidos em **21 GREs** (Gerencias Regionais de Educacao).

Atualmente a plataforma possui 15 secoes do relatorio executivo, um dashboard, cronograma de atendimento com filtros, e visualizacoes de dados. O que falta e o **modulo de coleta de evidencias** para controlar e documentar as instalacoes em campo.

---

## 2. O Que Sera Construido

Um modulo completo de **prototipos de telas** do sistema de coleta de evidencias, com **5 novas paginas** acessiveis via navegacao lateral, cobrindo todo o ciclo de vida da instalacao: do planejamento (PPI) ate o monitoramento continuo (SQS/SIMET).

**Importante:** O RAT (Relatorio de Atividade Tecnica) NAO faz parte deste escopo.

---

## 3. Artefatos Contratuais Base

Os prototipos sao baseados em dois anexos contratuais reais:

### PPI - Projeto Provisorio de Instalacao (pre-instalacao)
Documento elaborado ANTES da ida a campo, com 4 secoes:
- Resumo da escola (INEP, endereco, coordenadas GPS, contato)
- Lista de equipamentos planejados (modelo, fabricante, quantidade)
- Mapa de cobertura estimado 2,4 GHz (heatmap preditivo)
- Mapa de cobertura estimado 5 GHz (heatmap preditivo)

### PDI - Projeto Definitivo de Instalacao (pos-instalacao)
Documento elaborado APOS a instalacao, com 7 secoes:
- Resumo + checklist de aprovacao (7 itens com status Aprovado/Reprovado/Pendente)
- Descritivo de infraestrutura (servicos, arquitetura, rede eletrica, aterramento)
- Lista de materiais utilizados com quantidades
- Inventario de equipamentos com numeros de serie
- Relatorio fotografico padronizado (20 fotos obrigatorias)
- Mapa de cobertura as-built 2,4 GHz (medido em campo)
- Mapa de cobertura as-built 5 GHz (medido em campo)

---

## 4. Evidencias a Coletar por Fase

### FASE 1 - Pre-Instalacao (PPI)
| # | Evidencia | Tipo | Controle |
|---|-----------|------|----------|
| 1 | Ficha da escola | Documental | INEP, GRE, Zona, Tipo Link |
| 2 | Lista de equipamentos | Documental | Modelo, fabricante, qtd |
| 3 | Mapa cobertura 2,4 GHz | Tecnica | Heatmap estimado |
| 4 | Mapa cobertura 5 GHz | Tecnica | Heatmap estimado |
| 5 | Site survey / Planta baixa | Tecnica | Posicionamento de APs |

### FASE 2 - Execucao em Campo
| # | Evidencia | Tipo | Controle |
|---|-----------|------|----------|
| 1 | 20 fotos padronizadas | Fotografica | Fachada, rack, cabos, APs |
| 2 | Geolocalizacao do tecnico | Digital | GPS no momento da execucao |
| 3 | Checklist eletrico | Tecnica | Aterramento, tensoes |
| 4 | Certificacao de cabos Cat.6 | Tecnica | NEXT, FEXT, Return Loss |

### FASE 3 - Pos-Instalacao (PDI)
| # | Evidencia | Tipo | Controle |
|---|-----------|------|----------|
| 1 | Checklist aprovacao (7 itens) | Documental | Status por item |
| 2 | Descritivo infraestrutura | Tecnica | Servicos e arquitetura |
| 3 | Lista de materiais | Documental | Quantidades |
| 4 | Inventario com seriais | Patrimonial | Num. serie, firmware |
| 5 | Mapas as-built 2,4/5 GHz | Tecnica | Cobertura real medida |
| 6 | Certificacao de cabos | Tecnica | PDFs do Cable Analyzer |

### FASE 4 - Monitoramento Continuo (Sonda SQS/SIMET)
| # | Evidencia | Meta Dedicado | Meta Satelital |
|---|-----------|---------------|----------------|
| 1 | Disponibilidade | >= 99,0% | >= 98,5% |
| 2 | Latencia (RTT) | <= 50ms | <= 60ms |
| 3 | Jitter | <= 10ms | <= 20ms |
| 4 | Perda de pacotes | <= 0,50% | <= 0,50% |
| 5 | Velocidade contratada vs entregue | Tolerancia 10% | Tolerancia 10% |
| 6 | Diagnostico causa raiz | Falha eletrica vs enlace |
| 7 | Analise de saturacao | Operadora vs demanda interna |
| 8 | Estabilidade (flapping) | Quedas intermitentes |
| 9 | Status IPv4/IPv6 | Dual Stack |
| 10 | Serie historica | ~6 medicoes/dia |

---

## 5. Dimensoes de Controle

Todas as telas terao filtros e agrupamentos por:
- **GRE** (21 Gerencias Regionais de Educacao)
- **INEP** (codigo unico de cada escola - chave primaria)
- **Zona** (Urbana ou Rural)
- **Tipo de Link** (Dedicado ou Satelital)
- **Ciclo de Atendimento** (001 a 006)
- **Status da Evidencia** (Pendente / Em Andamento / Concluido)

**Regra de derivacao do Tipo de Link:**
- Urbana = Dedicado (fibra optica)
- Rural = Satelital
- Pode ser sobrescrito manualmente no PPI

---

## 6. Arquitetura das 5 Telas

### Tela 1: Dashboard de Evidencias (`/evidencias`)

KPIs no topo com contadores:
- Total de escolas (584), PPI concluidos/pendentes, PDI concluidos/pendentes, Sondas SQS ativas

Fluxo horizontal das 4 fases com cards coloridos:
```text
PRE-INSTALACAO (Azul) -> CAMPO (Amarelo) -> POS-INSTALACAO (Verde) -> MONITORAMENTO (Vermelho)
   5 evidencias           4 evidencias          6 evidencias            10 metricas
```

Progresso por GRE (barras horizontais mostrando % de escolas com PPI/PDI completos).

Progresso por Ciclo (6 cards com contadores e badges de prioridade).

### Tela 2: Lista de Escolas (`/evidencias/escolas`)

Barra de filtros: Busca por INEP/Nome, Select GRE, Select Zona, Select Tipo Link, Select Ciclo, Select Status.

Tabela com colunas: INEP | Escola | Municipio | GRE | Zona | Tipo Link | Ciclo | PPI | PDI | SQS | Acoes.

Paginacao e ordenacao por qualquer coluna.

### Tela 3: Ficha da Escola (`/evidencias/escola/:inep`)

Cabecalho com dados da escola (nome, INEP, municipio, GRE, zona, tipo link, ciclo, coordenadas GPS).

Timeline vertical das 4 fases com status e botoes de acao:
```text
[1] PPI -----------> Concluido/Pendente   [Abrir PPI]
[2] Campo ---------> Em Andamento         [Ver Checklist]
[3] PDI -----------> Pendente             [Abrir PDI]
[4] SQS/SIMET -----> Ativo/Inativo        [Ver Metricas]
```

Checklist de campo (sem RAT): verificacao eletrica, certificacao cabos, 20 fotos, geolocalizacao, disjuntor dedicado.

### Tela 4: Formulario PPI (`/evidencias/ppi/:inep`)

5 secoes em abas ou accordion:
1. Dados da escola (pre-preenchidos do cronograma)
2. Lista de equipamentos (tabela: AP, Switch, Firewall, SQS, Rack, Nobreak)
3. Upload mapa cobertura 2,4 GHz (area de upload + observacoes)
4. Upload mapa cobertura 5 GHz (area de upload + observacoes)
5. Site survey / planta baixa (area de upload + observacoes)

Botoes: Salvar Rascunho | Finalizar PPI

### Tela 5: Formulario PDI (`/evidencias/pdi/:inep`)

6 secoes:
1. **Checklist aprovacao** - 7 toggles com status (Aprovado/Reprovado/Pendente)
2. **Descritivo infraestrutura** - Textareas + verificacao eletrica (aterramento Sim/Nao, tensoes em V, disjuntor 25A, cabeamento 4,0mm2)
3. **Inventario** - Tabela com tipo, modelo, num. serie, firmware, local
4. **Relatorio fotografico** - Grid 4x5 com 20 slots rotulados (fachada, rack, cabos, APs, eletrica, aterramento)
5. **Mapas as-built** - Uploads 2,4 GHz e 5 GHz
6. **Metricas SQS/SIMET** - Dashboard read-only com SLAs diferenciados por tipo de link

---

## 7. Detalhes Tecnicos

### Arquivos a criar (6 novos):
| Arquivo | Descricao |
|---------|-----------|
| `src/data/evidenciasData.ts` | Dados mockados: status por escola, metricas SQS, contadores |
| `src/pages/evidencias/EvidenciasDashboard.tsx` | Dashboard com KPIs, fluxo 4 fases, progresso GRE/Ciclo |
| `src/pages/evidencias/EscolasLista.tsx` | Tabela filtrada com GRE, Zona, Tipo Link, Status |
| `src/pages/evidencias/EscolaFicha.tsx` | Ficha individual com timeline de 4 fases |
| `src/pages/evidencias/PPIFormulario.tsx` | Prototipo formulario PPI (5 secoes) |
| `src/pages/evidencias/PDIFormulario.tsx` | Prototipo formulario PDI (6 secoes + SQS) |

### Arquivos a modificar (3 existentes):
| Arquivo | Alteracao |
|---------|-----------|
| `src/App.tsx` | Adicionar 5 rotas: `/evidencias`, `/evidencias/escolas`, `/evidencias/escola/:inep`, `/evidencias/ppi/:inep`, `/evidencias/pdi/:inep` |
| `src/data/contractData.ts` | Adicionar item de navegacao "Coleta de Evidencias" no `navigationItems` |
| `src/components/layout/Sidebar.tsx` | Adicionar link para `/evidencias` na navegacao lateral, com icone e separador visual |

### Stack reutilizada:
- Componentes shadcn/ui: Card, Badge, Button, Table, Input, Select, Checkbox, Tabs, Progress, Switch
- Icones Lucide: Camera, MapPin, Wifi, Activity, Shield, FileCheck, Radio, Zap, etc.
- Dados reais das 584 escolas do `cronogramaData.ts` (INEP, GRE, Zona, Ciclo)
- Padroes visuais existentes (border-l-4, grids responsivos, cores institucionais)

### Observacoes:
- Todas as telas sao **prototipos interativos** com estado local (useState), sem backend
- Formularios funcionam visualmente (preenchimento, toggles) mas nao persistem dados
- Os dados mockados simulam diferentes status para demonstracao
- O campo `tipoLink` sera derivado da zona (Urbana=Dedicado, Rural=Satelital)
- O RAT esta **excluido** do escopo conforme solicitado

---

## 8. Sequencia de Implementacao

1. Criar `evidenciasData.ts` com dados mock e tipos
2. Criar `EvidenciasDashboard.tsx` (tela principal do modulo)
3. Criar `EscolasLista.tsx` (lista filtrada)
4. Criar `EscolaFicha.tsx` (ficha individual)
5. Criar `PPIFormulario.tsx` (formulario pre-instalacao)
6. Criar `PDIFormulario.tsx` (formulario pos-instalacao + SQS)
7. Modificar `App.tsx` (rotas), `contractData.ts` (navegacao), `Sidebar.tsx` (menu)

