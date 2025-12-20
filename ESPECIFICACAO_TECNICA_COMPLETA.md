# Especificação Técnica e Funcional Completa
## Sistema de Governança Contratual - Escolas Conectadas Piauí

---

## 1. Visão Geral do Sistema

### 1.1 Propósito do Sistema

O sistema **Caravana Digital - Escolas Conectadas** é uma plataforma de governança contratual desenvolvida para gerenciar, monitorar e fiscalizar a execução do contrato de conectividade à internet e infraestrutura Wi-Fi para as unidades escolares da rede estadual do Piauí.

**Objeto da Contratação:**
Contratação Integrada de Serviços de Conectividade à Internet e Infraestrutura de Rede Wi-Fi para Unidades Escolares da Rede Estadual da Secretaria da Educação do Estado do Piauí (SEDUC-PI).

**Processo:** 00011.034037/2025-79

### 1.2 Objetivos Funcionais e Estratégicos

| Objetivo | Descrição |
|----------|-----------|
| **Transparência** | Disponibilizar informações consolidadas sobre a execução contratual em tempo real |
| **Governança** | Estruturar níveis de decisão e responsabilidades claras |
| **Fiscalização** | Fornecer instrumentos para acompanhamento técnico e administrativo |
| **Controle Financeiro** | Monitorar cronograma de desembolso e alocação de recursos |
| **Gestão de Riscos** | Identificar, avaliar e mitigar riscos contratuais |
| **Qualidade** | Aferir níveis de serviço (SLA) e aplicar glosas quando necessário |
| **Documentação** | Consolidar artefatos contratuais e relatórios de execução |
| **Exportação PDF** | Gerar relatórios executivos para stakeholders |

### 1.3 Tipos de Usuários e Perfis de Acesso

#### Níveis de Governança

| Nível | Atores | Responsabilidades Principais |
|-------|--------|------------------------------|
| **Estratégico** | Secretário de Educação, Superintendente Executivo, Diretor UTD | Aprovação de mudanças estratégicas, decisão sobre aditivos, diretrizes de priorização |
| **Tático** | Gerência Estratégica, Gerência Operacional, Coord. Redes, Coord. Suporte | Planejamento operacional, gestão de SLA, consolidação de relatórios |
| **Operacional** | Fiscais Técnicos, Equipes de Campo | Execução técnica, registro de ocorrências, validação de medições |

#### Equipe de Planejamento

| Papel | Responsável |
|-------|-------------|
| Diretoria de Tecnologia | Marcel Rufino de Carvalho |
| Diretoria de Licitação | Larissa Rocha Pires Ferreira |
| Assessoria Jurídica e Administrativa | Vanilson Carvalho Fontenele |
| Gerência Operacional | Heulem Veras Barros |
| Gerência de Compras | Clarice Mauriz Lira |
| Coordenação de Suporte | Felipe Castelo Branco Crisóstomo Ramos |
| Coordenação de Redes | Danilo César Ribeiro da Silva Mendes |

### 1.4 Escopo Geral e Principais Capacidades

**Valor Total do Contrato:** R$ 89.971.275,00
- Lei 14.172/2021 (FUST): R$ 54.134.450,00
- Tesouro Estadual: R$ 35.836.825,00

**Período de Execução:** 36 meses (início previsto: Janeiro/2026)

**Modelo de Contratação:** Integrada, Lote Único, As a Service

**Capacidades da Plataforma:**
- Dashboard executivo com KPIs em tempo real
- Navegação por 14 seções temáticas do relatório
- Visualização de cronograma e fases do projeto
- Gestão de riscos com matriz probabilidade x impacto
- Monitoramento de SLAs e glosas
- Arquitetura técnica interativa
- Exportação de relatórios em PDF

---

## 2. Arquitetura Geral

### 2.1 Arquitetura Lógica

```
┌─────────────────────────────────────────────────────────────────┐
│                    CAMADA DE APRESENTAÇÃO                       │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  React 18 + TypeScript + Tailwind CSS + shadcn/ui       │   │
│  │  - Componentes reutilizáveis                            │   │
│  │  - Design System com tokens semânticos                  │   │
│  │  - Responsivo (Mobile, Tablet, Desktop)                 │   │
│  └─────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                    CAMADA DE APLICAÇÃO                          │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  React Router DOM - Navegação SPA                       │   │
│  │  React Query - Gerenciamento de Estado                  │   │
│  │  Context API - Estado Global (PDF Mode)                 │   │
│  │  Recharts - Visualização de Dados                       │   │
│  └─────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                    CAMADA DE DOMÍNIO                            │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Dados Contratuais (src/data/contractData.ts)           │   │
│  │  - KPIs, Fases, SLAs, Riscos, Arquitetura               │   │
│  │  Lógica de Negócio                                      │   │
│  │  - Cálculo de SLAs e Glosas                             │   │
│  │  - Cronograma de Desembolso                             │   │
│  │  - Matriz de Riscos                                     │   │
│  └─────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│                    CAMADA DE INFRAESTRUTURA                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Vite - Build Tool e Dev Server                         │   │
│  │  @react-pdf/renderer - Geração de PDF                   │   │
│  │  html2canvas + jspdf - Exportação alternativa           │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

### 2.2 Abordagem Arquitetural

**Padrão:** Aplicação Web SPA (Single Page Application) - Monolítica Modular

**Justificativa:**
- Aplicação de leitura/consulta (read-only) sem persistência de dados
- Dados contratuais estáticos definidos em arquivo TypeScript
- Foco em visualização e exportação de informações
- Baixa complexidade de estado

**Características:**
- Componentização seguindo princípios SOLID
- Separação clara entre UI e dados
- Roteamento client-side
- Build otimizado para produção

### 2.3 Princípios de Escalabilidade e Manutenibilidade

| Princípio | Implementação |
|-----------|---------------|
| **Modularidade** | Componentes isolados por responsabilidade |
| **Reutilização** | Design System com shadcn/ui customizado |
| **Separação de Concerns** | Dados em `/data`, UI em `/components`, Páginas em `/pages` |
| **Type Safety** | TypeScript em todo o projeto |
| **Extensibilidade** | Estrutura preparada para novas seções e relatórios |

### 2.4 Stack Tecnológico

| Categoria | Tecnologia | Versão |
|-----------|------------|--------|
| Framework | React | ^18.3.1 |
| Linguagem | TypeScript | - |
| Build Tool | Vite | - |
| Estilização | Tailwind CSS | - |
| UI Components | shadcn/ui (Radix UI) | - |
| Roteamento | React Router DOM | ^6.30.1 |
| Gráficos | Recharts | ^2.15.4 |
| PDF | @react-pdf/renderer | ^4.3.1 |
| Formulários | React Hook Form + Zod | - |
| Data Fetching | TanStack Query | ^5.83.0 |

---

## 3. Estrutura Modular do Sistema

### 3.1 Módulo: Dashboard

| Atributo | Descrição |
|----------|-----------|
| **Nome** | Dashboard Executivo |
| **Descrição** | Visão consolidada de KPIs, cronograma, SLAs e arquitetura |
| **Responsabilidades** | Apresentar indicadores-chave, timeline executivo, gauges de SLA |
| **Casos de Uso** | Visualização rápida do status do contrato |
| **Perfis** | Todos os níveis (Estratégico, Tático, Operacional) |
| **Dependências** | contractData, KPICards, DisbursementChart, SLAGauges |

**Componentes:**
- `KPICards` - Cards de indicadores principais
- `DisbursementChart` - Gráfico de desembolso
- `ExecutiveTimeline` - Linha do tempo executiva
- `SLAGauges` - Medidores de SLA
- `SolutionArchitecture` - Diagrama de arquitetura
- `NetworkTopology` - Topologia de rede
- `MonitoringArchitecture` - Arquitetura de monitoramento
- `PhasesTimeline` - Timeline de fases
- `QuickNavigation` - Navegação rápida

### 3.2 Módulo: Seções do Relatório

#### Seção 1 - Visão Geral do Contrato
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/1` |
| **Responsabilidades** | Apresentar dados básicos do contrato, objeto, fundamentação legal |
| **Dados** | basicInfo, kpiData |

#### Seção 2 - Modelo de Governança
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/2` |
| **Responsabilidades** | Estrutura organizacional, níveis de governança, comitês |
| **Componentes** | Diagrama de governança, fluxo decisório, canais de comunicação |

#### Seção 3 - Especificações Técnicas
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/3` |
| **Responsabilidades** | Arquitetura da solução, modelo HaaS, NOC/Service Desk |
| **Componentes** | SolutionArchitecture, NetworkTopology, MonitoringArchitecture |
| **Dados** | solutionArchitecture, slaMetrics |

#### Seção 4 - Papéis e Responsabilidades
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/4` |
| **Responsabilidades** | Definição de atribuições Contratada x Contratante |
| **Dados** | governanceRoles |

#### Seção 5 - Ciclo de Vida da Execução
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/5` |
| **Responsabilidades** | 5 fases do ciclo: Mobilização, Implantação, Estabilização, Operação, Encerramento |

#### Seção 6 - Fases do Projeto e Marcos
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/6` |
| **Responsabilidades** | Detalhamento de entregas, critérios de aceite |
| **Dados** | phases, disbursementData |

#### Seção 7 - Cronograma de Desembolso
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/7` |
| **Responsabilidades** | Distribuição financeira, matriz de alocação por fonte |
| **Dados** | disbursementData, kpiData |

#### Seção 8 - Modelo de Fiscalização
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/8` |
| **Responsabilidades** | Procedimentos de fiscalização técnica e administrativa |

#### Seção 9 - Artefatos Contratuais
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/9` |
| **Responsabilidades** | Documentação obrigatória, relatórios, projetos |
| **Dados** | artifacts |

#### Seção 10 - Instrumentos de Medição
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/10` |
| **Responsabilidades** | Sondas SIMET/SQS, metodologias de aferição |
| **Dados** | measurementDimensions, slaMetrics |

#### Seção 11 - Gestão de SLA e Penalidades
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/11` |
| **Responsabilidades** | PPR, indicadores SLA, glosas, sanções |
| **Componentes** | Tabela de indicadores IC-1 a IC-6, matriz de glosas |

#### Seção 12 - Gestão de Riscos
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/12` |
| **Responsabilidades** | Matriz de riscos, ações preventivas e contingenciais |
| **Dados** | riskMatrix |

#### Seção 13 - Governança da Operação
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/13` |
| **Responsabilidades** | Procedimentos operacionais durante a execução |

#### Seção 14 - Encerramento e Legado
| Atributo | Descrição |
|----------|-----------|
| **Rota** | `/secao/14` |
| **Responsabilidades** | Procedimentos de encerramento, transferência de conhecimento |

### 3.3 Módulo: Exportação PDF

| Atributo | Descrição |
|----------|-----------|
| **Nome** | Gerador de Relatórios PDF |
| **Descrição** | Sistema de exportação de relatórios executivos |
| **Responsabilidades** | Gerar documentos PDF formatados para impressão/distribuição |
| **Componentes** | PDFDocument, PDFCoverPage, PDFSectionWrapper |
| **Dependências** | @react-pdf/renderer, PDFContext |

### 3.4 Módulo: Layout e Navegação

**Componentes de Layout:**
- `MainLayout` - Layout principal com sidebar e header
- `Header` - Cabeçalho com título e contagem regressiva
- `Sidebar` - Menu lateral navegável (colapsável)
- `InstitutionalFooter` - Rodapé institucional com logos

**Componentes de Navegação:**
- `ReportBreadcrumb` - Breadcrumb de navegação
- `SectionNavigation` - Navegação entre seções (anterior/próxima)
- `SectionProgress` - Indicador de progresso

---

## 4. Modelagem de Dados

### 4.1 Entidades Principais

#### 4.1.1 BasicInfo (Informações Básicas)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `processNumber` | string | Número do processo (ex: "00011.034037/2025-79") |
| `requestingArea` | string | Área requisitante |
| `elaborationDate` | string | Data de elaboração |
| `object` | string | Objeto da contratação |
| `normativeReference` | string | Referência normativa (leis aplicáveis) |
| `financingSources` | string | Fontes de financiamento |
| `team` | TeamMember[] | Equipe de planejamento |

#### 4.1.2 KPIData (Indicadores-Chave)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `totalValue` | number | Valor total do contrato (R$) |
| `fonte14172` | number | Valor Lei 14.172 (R$) |
| `fontTesouro` | number | Valor Tesouro Estadual (R$) |
| `disbursedValue` | number | Valor desembolsado (R$) |
| `totalPhases` | number | Total de fases |
| `completedPhases` | number | Fases concluídas |
| `executionPeriod` | string | Período de execução |
| `startDate` | string | Data de início |
| `contractModel` | string | Modelo de contratação |
| `status` | string | Status atual |

#### 4.1.3 DisbursementData (Cronograma de Desembolso)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `phase` | string | Código da fase (ex: "RPTI", "PEP-I") |
| `name` | string | Nome descritivo |
| `value` | number | Valor em R$ |
| `percentage` | number | Percentual do total |
| `month` | string | Mês previsto |
| `status` | string | Status ("Planejado", "Em execução", etc.) |
| `type` | string | Tipo ("planejamento", "mobilizacao", "execucao", "entrega") |

#### 4.1.4 Phase (Fases do Projeto)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | Identificador único (ex: "RPTI", "PEP-M1") |
| `name` | string | Nome completo da fase |
| `description` | string | Descrição detalhada |
| `deliverables` | string[] | Lista de entregas esperadas |
| `percentage` | number | Percentual do valor |
| `month` | string | Mês de execução |
| `status` | string | Status atual |

#### 4.1.5 Risk (Matriz de Riscos)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | Identificador único (ex: "R01") |
| `risk` | string | Descrição do risco |
| `phase` | "PCTIC" \| "GCTIC" | Fase de ocorrência |
| `probability` | number | Probabilidade (0-1) |
| `probabilityLabel` | string | Classificação textual |
| `impact` | number | Impacto (0-1) |
| `impactLabel` | string | Classificação textual |
| `riskScore` | number | Score calculado (prob × impacto) |
| `riskLevel` | "Baixo" \| "Médio" \| "Alto" | Nível de risco |
| `damage` | string | Dano potencial |
| `treatment` | string | Tratamento (Mitigar, Aceitar, etc.) |
| `preventiveActions` | RiskAction[] | Ações preventivas |
| `contingencyActions` | RiskAction[] | Ações de contingência |

#### 4.1.6 SLAMetric (Métricas de SLA)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `metric` | string | Nome da métrica |
| `target` | string | Meta alvo |
| `current` | string | Valor atual |
| `status` | string | Status de conformidade |

#### 4.1.7 GovernanceRoles (Papéis de Governança)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `contractor.name` | string | Nome da contratada |
| `contractor.responsibilities` | string[] | Lista de responsabilidades |
| `contracting.name` | string | Nome da contratante |
| `contracting.responsibilities` | string[] | Lista de responsabilidades |

#### 4.1.8 Artifact (Artefatos Contratuais)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `name` | string | Sigla do artefato |
| `description` | string | Descrição completa |
| `periodicity` | string | Periodicidade de entrega |
| `status` | string | Status atual |

#### 4.1.9 SolutionArchitecture (Arquitetura da Solução)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | string | Identificador único (ex: "wan", "edge") |
| `name` | string | Nome completo da camada |
| `shortName` | string | Sigla |
| `icon` | string | Nome do ícone Lucide |
| `color` | string | Cor HSL |
| `description` | string | Descrição funcional |
| `components` | string[] | Componentes da camada |

#### 4.1.10 NavigationItem (Itens de Navegação)

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | number | ID sequencial (1-14) |
| `title` | string | Título da seção |
| `path` | string | Rota URL |

### 4.2 Diagrama de Relacionamentos

```
┌───────────────────┐       ┌───────────────────┐
│    BasicInfo      │       │     KPIData       │
│  (Dados Gerais)   │       │  (Indicadores)    │
└───────────────────┘       └───────────────────┘
         │                           │
         └───────────┬───────────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   contractData.ts     │
         │   (Fonte Central)     │
         └───────────────────────┘
                     │
    ┌────────────────┼────────────────┬────────────────┐
    ▼                ▼                ▼                ▼
┌────────┐    ┌───────────┐    ┌───────────┐    ┌───────────┐
│ Phases │    │   Risks   │    │Disbursement│   │Architecture│
│  (7)   │    │   (11)    │    │   (7)      │   │   (6)     │
└────────┘    └───────────┘    └───────────┘    └───────────┘
    │              │                 │                │
    │              ▼                 │                │
    │         ┌─────────┐            │                │
    │         │RiskAction│           │                │
    │         │Preventive│           │                │
    │         │Contingency│          │                │
    │         └─────────┘            │                │
    │                                │                │
    └────────────┬───────────────────┴────────────────┘
                 │
                 ▼
         ┌───────────────────────┐
         │      Relatório        │
         │    (14 Seções)        │
         └───────────────────────┘
```

---

## 5. Relacionamentos e Regras de Negócio

### 5.1 Regras de Integridade

| Regra | Descrição |
|-------|-----------|
| **R01** | Soma dos percentuais de desembolso deve totalizar 60% (fase de implantação) |
| **R02** | Soma das fases 1-7 corresponde ao período de implantação |
| **R03** | Valor total = fonte14172 + fontTesouro |
| **R04** | Risk.riskScore = probability × impact |
| **R05** | Cada fase tem ID único e sequencial |

### 5.2 Regras de Cálculo de SLA

#### Indicadores de Conectividade (IC-1 a IC-4)

| Indicador | Fórmula | Meta |
|-----------|---------|------|
| IC-1 (Disponibilidade WAN) | (Horas Disponíveis / Horas Totais) × 100 | ≥ 99,5% |
| IC-2 (Latência RTT) | Média mensal em ms | ≤ 40ms (Fibra) / ≤ 60ms (Satélite) |
| IC-3 (Perda de Pacotes) | % pacotes perdidos | ≤ 0,1% (Fibra) / ≤ 0,5% (Satélite) |
| IC-4 (Throughput) | (Testes Conformes / Total) × 100 | 100% ≥ 90% banda nominal |

#### Indicadores de Infraestrutura e Suporte (IC-5 e IC-6)

| Indicador | Fórmula | Meta |
|-----------|---------|------|
| IC-5 (Disponibilidade LAN/WLAN) | Uptime ativos críticos | ≥ 99,0% |
| IC-6 (TMA/TMR) | Chamados no prazo / Total | ≥ 95% |

### 5.3 Matriz de Glosas

| Indicador | Faixa de Desempenho | Glosa |
|-----------|---------------------|-------|
| IC-1 | 99,4% a 98,0% | 5% do valor da escola |
| IC-1 | 97,9% a 95,0% | 10% do valor da escola |
| IC-1 | Abaixo de 95,0% | 20% do valor da escola |
| IC-4 | Média 89% a 80% | 5% do valor da escola |
| IC-4 | Média 79% a 60% | 15% do valor da escola |
| IC-4 | Média abaixo de 60% | 30% + Notificação |
| IC-6 | Resolução fora do prazo | 2% por dia de atraso |

### 5.4 Regras de Autorização

| Nível | Autorização |
|-------|-------------|
| **Estratégico** | Aprovação de aditivos, mudanças de escopo |
| **Tático** | Aprovação de planos operacionais, tratamento de desvios |
| **Operacional** | Registro de ocorrências, validação de medições |
| **Assessoria Jurídica** | Pareceres sobre penalidades, reequilíbrio |

### 5.5 Expurgos Permitidos (Não contabilizam como falha)

1. **Interrupção de Energia Elétrica** - com logs comprobatórios
2. **Falha Estrutural na Escola** - mediante Boletim de Ocorrência
3. **Manutenção Programada** - com 48h de antecedência + aprovação
4. **Caso Fortuito ou Força Maior** - nos termos da lei civil

---

## 6. Integrações

### 6.1 Integrações Internas

| Origem | Destino | Descrição |
|--------|---------|-----------|
| `contractData.ts` | Todas as seções | Fonte única de dados contratuais |
| `PDFContext` | Componentes | Controle de modo PDF para ajuste de layout |
| `React Router` | Layout | Navegação SPA |

### 6.2 Integrações Externas Previstas

A plataforma de governança interage com sistemas externos da contratada:

| Sistema | Protocolo | Finalidade |
|---------|-----------|------------|
| **SGI** (Sistema de Gestão Integrada) | REST/JSON | Orquestração do ciclo de vida |
| **NOC** (Centro de Operações) | API | Dados de monitoramento |
| **Sonda SIMET/SQS** | API | Métricas de qualidade |
| **Sistema de Chamados** | REST | TMA/TMR de suporte |
| **B.I. SEDUC-PI** | API/ETL | Exportação de dados |

### 6.3 Padrões de Integração

| Padrão | Aplicação |
|--------|-----------|
| **REST/JSON** | Endpoints de API para dados em tempo real |
| **Timestamps UTC** | Padronização temporal |
| **INEP como chave** | Identificação única de escolas |
| **Autenticação** | Token-based (previsto para integrações futuras) |

---

## 7. Fluxos Funcionais e Operacionais

### 7.1 Fluxo Principal: Navegação no Relatório

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  CoverPage  │───▶│  Dashboard  │───▶│   Seções    │
│  (Capa)     │    │ (Visão Geral)│    │  (1 a 14)   │
└─────────────┘    └─────────────┘    └─────────────┘
                          │                   │
                          ▼                   ▼
                   ┌─────────────┐    ┌─────────────┐
                   │ PDF Preview │◀───│ Navegação   │
                   │ (Exportar)  │    │ Seções      │
                   └─────────────┘    └─────────────┘
```

### 7.2 Fluxo de Fiscalização e Ateste

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Monitoramento  │───▶│Relatório Mensal │───▶│   Validação     │
│    Diário       │    │ (até 5º dia útil)│   │    Técnica      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
        │                      │                      │
        ▼                      ▼                      ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ Dashboards SGI  │    │ Memória Cálculo │    │ Confronto SQS   │
│ Zabbix/Grafana  │    │ IC-1 a IC-6     │    │ + Chamados      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                      │
                                                      ▼
                              ┌─────────────────────────────────┐
                              │ Ateste e Pagamento              │
                              │ Termo Recebimento + NF c/ glosas│
                              └─────────────────────────────────┘
```

### 7.3 Fluxo Decisório

1. **Identificação** - Detecção de desvio ou necessidade
2. **Análise** - Avaliação técnica e impacto
3. **Deliberação** - Decisão nos comitês competentes
4. **Execução** - Implementação das ações
5. **Monitoramento** - Acompanhamento dos resultados

### 7.4 Eventos e Gatilhos

| Evento | Gatilho | Ação |
|--------|---------|------|
| SLA abaixo da meta | Automático (medição) | Cálculo de glosa |
| 3 meses consecutivos >40% glosa | Análise mensal | Processo sancionatório |
| Entrega de fase | Marco contratual | Validação e pagamento |
| Incidente crítico | Detecção NOC | Escalonamento TTR 30min |

---

## 8. Segurança e Controle

### 8.1 Modelo de Controle de Acesso

**Modelo Atual:** Aplicação pública (read-only)
**Modelo Previsto:** RBAC (Role-Based Access Control)

| Papel | Permissões |
|-------|------------|
| **Visualizador** | Leitura de todas as seções |
| **Fiscal** | Leitura + Exportação PDF |
| **Gestor** | Leitura + Exportação + Edição de status |
| **Administrador** | Acesso completo |

### 8.2 Auditoria e Rastreabilidade

| Elemento | Implementação |
|----------|---------------|
| **Logs de Acesso** | Previsto para integração com backend |
| **Versionamento** | Git (código-fonte) |
| **Histórico de Alterações** | Previsto no SGI |
| **Timestamps** | Data de elaboração no relatório |

### 8.3 Proteção de Dados

| Aspecto | Medida |
|---------|--------|
| **Dados Sensíveis** | Nenhum dado pessoal armazenado |
| **Comunicação** | HTTPS em produção |
| **Secrets** | Sem chaves de API no código |
| **Build** | Assets otimizados e minificados |

---

## 9. Relatórios, Indicadores e Visualizações

### 9.1 Tipos de Relatórios

| Tipo | Descrição | Periodicidade |
|------|-----------|---------------|
| **Relatório Executivo** | Visão consolidada do contrato | Sob demanda |
| **Dashboard KPIs** | Indicadores em tempo real | Contínuo |
| **Relatório de SLA** | Conformidade de níveis de serviço | Mensal |
| **Relatório de Riscos** | Matriz e status de mitigação | Periódico |
| **Relatório de Desembolso** | Execução financeira | Mensal |

### 9.2 Indicadores-Chave (KPIs)

| KPI | Descrição | Visualização |
|-----|-----------|--------------|
| Valor Total | R$ 89.971.275,00 | Card numérico |
| Valor Desembolsado | R$ 0 (planejado) | Card + Progress |
| Fases Completas | 0 de 7 | Contador |
| Dias para Início | Contagem regressiva | Badge |
| SLA Disponibilidade | 99,5% (meta) | Gauge |
| SLA Latência | ≤80ms (meta) | Gauge |

### 9.3 Dashboards e Filtros

**Dashboard Principal:**
- Cards de KPIs principais
- Gráfico de desembolso por fase
- Timeline executiva
- Gauges de SLA
- Diagrama de arquitetura interativo

**Filtros Disponíveis:**
- Navegação por seção (sidebar)
- Colapso de sidebar para foco
- Modo PDF para exportação

### 9.4 Componentes de Visualização

| Componente | Biblioteca | Uso |
|------------|------------|-----|
| `KPICards` | Customizado | Indicadores numéricos |
| `DisbursementChart` | Recharts | Gráfico de barras |
| `SLAGauges` | Recharts | Gráfico radar |
| `ExecutiveTimeline` | Customizado | Gantt simplificado |
| `SolutionArchitecture` | Customizado | Diagrama de camadas |
| `NetworkTopology` | Customizado | Diagrama de rede |

---

## 10. Evolução e Manutenibilidade

### 10.1 Estratégia de Versionamento

| Aspecto | Estratégia |
|---------|------------|
| **Código** | Git com branching (main, develop, feature/*) |
| **Releases** | Semantic Versioning (MAJOR.MINOR.PATCH) |
| **Deploy** | CI/CD via Lovable |
| **Documentação** | Atualizada junto com código |

### 10.2 Possibilidade de Expansão Funcional

| Funcionalidade | Viabilidade | Complexidade |
|----------------|-------------|--------------|
| Autenticação de usuários | Alta | Média |
| Backend com Supabase | Alta | Média |
| Dashboard em tempo real | Alta | Alta |
| Integração API NOC/SGI | Alta | Alta |
| App Mobile | Média | Alta |
| Notificações Push | Média | Média |

### 10.3 Inclusão de Novos Módulos

**Para adicionar nova seção:**
1. Criar componente em `src/pages/sections/SectionXX.tsx`
2. Adicionar rota em `src/App.tsx`
3. Incluir item em `navigationItems` no `contractData.ts`
4. Criar componente PDF correspondente

**Para adicionar novo componente de dashboard:**
1. Criar componente em `src/components/dashboard/`
2. Importar no Dashboard principal
3. Adicionar dados necessários em `contractData.ts`

### 10.4 Boas Práticas para Manutenção

| Prática | Descrição |
|---------|-----------|
| **Componentes Pequenos** | Máximo 200-300 linhas por componente |
| **Tipagem Forte** | TypeScript em todo código |
| **Design System** | Usar tokens semânticos do Tailwind |
| **Documentação** | Comentários em funções complexas |
| **Testes** | Implementar testes unitários (vitest recomendado) |
| **Code Review** | Revisão antes de merge |

---

## Anexo A: Estrutura de Diretórios

```
src/
├── App.tsx                    # Roteamento principal
├── main.tsx                   # Entry point
├── index.css                  # Estilos globais e tokens
│
├── assets/                    # Imagens e logos
│   ├── escolas-conectadas-logo.png
│   ├── governo-piaui-logo.png
│   ├── logo-seduc.png
│   ├── mec-gov-federal-logo.png
│   └── novo-pac-logo.png
│
├── components/
│   ├── dashboard/             # Componentes do Dashboard
│   │   ├── DisbursementChart.tsx
│   │   ├── ExecutiveTimeline.tsx
│   │   ├── KPICards.tsx
│   │   ├── MonitoringArchitecture.tsx
│   │   ├── NetworkTopology.tsx
│   │   ├── PhasesTimeline.tsx
│   │   ├── QuickNavigation.tsx
│   │   ├── SLAGauges.tsx
│   │   └── SolutionArchitecture.tsx
│   │
│   ├── layout/                # Componentes de layout
│   │   ├── BasicInfoCard.tsx
│   │   ├── Header.tsx
│   │   ├── InstitutionalFooter.tsx
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── navigation/            # Componentes de navegação
│   │   ├── ReportBreadcrumb.tsx
│   │   ├── SectionNavigation.tsx
│   │   └── SectionProgress.tsx
│   │
│   ├── pdf/                   # Componentes para PDF (html2canvas)
│   │   └── ...
│   │
│   ├── pdf-report/            # Componentes para PDF (@react-pdf/renderer)
│   │   ├── components/
│   │   ├── icons/
│   │   ├── sections/
│   │   └── styles.ts
│   │
│   └── ui/                    # Componentes shadcn/ui
│       └── ...
│
├── contexts/
│   └── PDFContext.tsx         # Contexto para modo PDF
│
├── data/
│   └── contractData.ts        # Dados contratuais centralizados
│
├── hooks/
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── usePDFGeneration.ts
│
├── lib/
│   ├── pdfGenerator.ts
│   └── utils.ts
│
└── pages/
    ├── CoverPage.tsx          # Página de capa
    ├── Dashboard.tsx          # Dashboard principal
    ├── NotFound.tsx           # Página 404
    ├── PDFPreview.tsx         # Preview de PDF
    └── sections/              # Seções do relatório
        ├── Section1.tsx
        ├── Section2.tsx
        ├── ...
        └── Section14.tsx
```

---

## Anexo B: Artefatos Contratuais

| Sigla | Nome Completo | Periodicidade |
|-------|---------------|---------------|
| RPTI | Relatório de Planejamento Técnico Inicial | Única |
| PEP | Plano de Execução do Projeto | Por fase |
| RMD | Relatório Mensal de Desempenho | Mensal |
| RSQ | Relatório de SLA e Qualidade | Mensal |
| RAI | Relatório de Ativos Instalados | Por fase |
| RTF | Relatório Técnico Final | Única |
| RAT | Relatório de Atendimento Técnico | Por atendimento |
| PPI | Projeto Provisório de Instalação | Por escola |
| PDI | Projeto Definitivo de Instalação | Por escola |

---

## Anexo C: Matriz de Riscos Completa

| ID | Risco | Probabilidade | Impacto | Score | Nível | Tratamento |
|----|-------|---------------|---------|-------|-------|------------|
| R01 | Questionamentos por órgãos de controle externo | 30% (Pouco Provável) | 40% (Alto) | 0.12 | Médio | Mitigar |
| R02 | Especificações de SLA aquém das necessidades | 30% (Pouco Provável) | 40% (Alto) | 0.12 | Médio | Mitigar |
| R03 | Licitação deserta ou fracassada | 30% (Pouco Provável) | 40% (Alto) | 0.12 | Médio | Mitigar |
| R04 | Estimativa de preços acima do mercado | 50% (Provável) | 20% (Moderado) | 0.10 | Médio | Mitigar |
| R05 | Descumprimento contratual | 30% (Pouco Provável) | 40% (Alto) | 0.12 | Médio | Mitigar |
| R06 | Inexecução por dificuldades técnicas | 30% (Pouco Provável) | 40% (Alto) | 0.12 | Médio | Mitigar |
| R07 | Atraso na aprovação de projetos | 50% (Provável) | 20% (Moderado) | 0.10 | Médio | Mitigar |
| R08 | Atrasos na liberação de recursos | 30% (Pouco Provável) | 40% (Alto) | 0.12 | Médio | Mitigar |
| R09 | Ausência de fiscal competente | 30% (Pouco Provável) | 20% (Moderado) | 0.06 | Baixo | Mitigar |
| R10 | Obsolescência tecnológica | 30% (Pouco Provável) | 20% (Moderado) | 0.06 | Baixo | Aceitar |
| R11 | Interrupção por força maior | 10% (Raro) | 80% (Muito Alto) | 0.08 | Baixo | Aceitar |

---

## Anexo D: Arquitetura da Solução Técnica

### Camadas da Solução

| Camada | Sigla | Função | Componentes |
|--------|-------|--------|-------------|
| Acesso | WAN | Tráfego de internet | Link Primário (Fibra), Link Secundário (Backup), CPE/ONU |
| Segurança | EDGE | Inspeção e controle | Firewall, Balanceamento, Filtragem, IPS, QoS |
| Medição | SQS | Aferição de qualidade | Sonda SIMET Box |
| Distribuição | LAN/WLAN | Rede local | Switches PoE, Access Points Wi-Fi 6 |
| Gestão Técnica | SDN | Gerenciamento centralizado | Provisionamento, Configuração, Monitoramento |
| Gestão Administrativa | SGI | Orquestração contratual | Cadastro, Inventário, OS/RATs, SLA |

---

**Documento gerado em:** Dezembro/2024
**Versão:** 1.0
**Status:** Fase de Planejamento
**Próxima Atualização:** Início da execução contratual (Janeiro/2026)
