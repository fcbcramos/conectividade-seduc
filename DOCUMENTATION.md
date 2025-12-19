# 📚 Documentação Completa - Caravana Digital

## Relatório Executivo de Governança Contratual (REGC)
**Modernização da Infraestrutura Tecnológica e Conectividade das Escolas da Rede Estadual do Piauí**

---

## 📋 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Arquitetura Técnica](#arquitetura-técnica)
3. [Estrutura de Páginas](#estrutura-de-páginas)
4. [Dados do Contrato](#dados-do-contrato)
5. [Componentes Principais](#componentes-principais)
6. [Tecnologias Utilizadas](#tecnologias-utilizadas)
7. [Guia de Desenvolvimento](#guia-de-desenvolvimento)

---

## 🎯 Visão Geral do Projeto

### Sobre o Sistema

O **Caravana Digital** é uma plataforma web interativa desenvolvida para apresentar e gerenciar o Relatório Executivo de Governança Contratual (REGC) do contrato de conectividade das escolas da rede estadual do Piauí.

### Objetivo Principal

Contratação Integrada de Serviços de Conectividade à Internet e Infraestrutura de Rede Wi-Fi para Unidades Escolares da Rede Estadual da Secretaria da Educação do Estado do Piauí (SEDUC-PI).

### Informações do Processo

| Campo | Valor |
|-------|-------|
| **Número do Processo** | 00011.034037/2025-79 |
| **Área Demandante** | Unidade de Transformação Digital - UTD |
| **Referência Normativa** | Lei nº 14.133/2021, Lei nº 14.172/2021, Decreto nº 11.004/2022 |
| **Fontes de Financiamento** | FUST (Lei nº 14.172/2021) + SEDUC-PI |

### Equipe Técnica de Planejamento

| Área | Responsável |
|------|-------------|
| Diretoria de Tecnologia | Marcel Rufino de Carvalho |
| Diretoria de Licitação | Larissa Rocha Pires Ferreira |
| Assessoria Jurídica e Administrativa | Vanilson Carvalho Fontenele |
| Gerência Operacional | Heulem Veras Barros |
| Gerência de Compras | Clarice Mauriz Lira |
| Coordenação de Suporte | Felipe Castelo Branco Crisóstomo Ramos |
| Coordenação de Redes | Danilo César Ribeiro da Silva Mendes |

---

## 🏗 Arquitetura Técnica

### Stack Tecnológico

```
Frontend:
├── React 18.3.1 (SPA)
├── TypeScript (Type Safety)
├── Vite (Build Tool)
├── Tailwind CSS (Styling)
├── Shadcn/UI (Component Library)
├── React Router DOM 6.30 (Routing)
├── React Query/TanStack Query (Data Fetching)
└── Recharts (Data Visualization)

Bibliotecas Adicionais:
├── Lucide React (Icons)
├── Framer Motion (Animations - via Tailwind)
├── @react-pdf/renderer (PDF Generation)
├── jsPDF + html2canvas (PDF Export)
├── date-fns (Date Utilities)
├── Zod (Schema Validation)
└── React Hook Form (Form Management)
```

### Estrutura de Diretórios

```
src/
├── assets/                    # Logos e imagens
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
│   ├── layout/                # Layout Components
│   │   ├── BasicInfoCard.tsx
│   │   ├── Header.tsx
│   │   ├── InstitutionalFooter.tsx
│   │   ├── MainLayout.tsx
│   │   └── Sidebar.tsx
│   │
│   ├── navigation/            # Navigation Components
│   │   ├── ReportBreadcrumb.tsx
│   │   ├── SectionNavigation.tsx
│   │   └── SectionProgress.tsx
│   │
│   ├── pdf/                   # PDF Export Components (HTML)
│   ├── pdf-report/            # PDF Generation (@react-pdf/renderer)
│   └── ui/                    # Shadcn UI Components
│
├── contexts/
│   └── PDFContext.tsx         # PDF Mode Context
│
├── data/
│   └── contractData.ts        # Dados do Contrato
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
├── pages/
│   ├── CoverPage.tsx          # Página de Capa
│   ├── Dashboard.tsx          # Dashboard Executivo
│   ├── NotFound.tsx           # 404 Page
│   ├── PDFPreview.tsx         # Preview do PDF
│   └── sections/              # 14 Seções do Relatório
│       ├── Section1.tsx       # Visão Geral do Contrato
│       ├── Section2.tsx       # Modelo de Governança
│       ├── Section3.tsx       # Especificações Técnicas
│       ├── Section4.tsx       # Papéis e Responsabilidades
│       ├── Section5.tsx       # Ciclo de Vida da Execução
│       ├── Section6.tsx       # Fases do Projeto e Marcos
│       ├── Section7.tsx       # Cronograma de Desembolso
│       ├── Section8.tsx       # Modelo de Fiscalização
│       ├── Section9.tsx       # Artefatos Contratuais
│       ├── Section10.tsx      # Instrumentos de Medição
│       ├── Section11.tsx      # Gestão de SLA e Penalidades
│       ├── Section12.tsx      # Gestão de Riscos
│       ├── Section13.tsx      # Governança da Operação
│       └── Section14.tsx      # Encerramento e Legado
│
└── index.css                  # Design System / Tokens
```

---

## 📄 Estrutura de Páginas

### Rotas Disponíveis

| Rota | Componente | Descrição |
|------|------------|-----------|
| `/` | CoverPage | Página de capa com botão para modo apresentação |
| `/dashboard` | Dashboard | Dashboard executivo com KPIs e gráficos |
| `/secao/1` | Section1 | Visão Geral do Contrato |
| `/secao/2` | Section2 | Modelo de Governança |
| `/secao/3` | Section3 | Especificações Técnicas |
| `/secao/4` | Section4 | Papéis e Responsabilidades |
| `/secao/5` | Section5 | Ciclo de Vida da Execução |
| `/secao/6` | Section6 | Fases do Projeto e Marcos |
| `/secao/7` | Section7 | Cronograma de Desembolso |
| `/secao/8` | Section8 | Modelo de Fiscalização |
| `/secao/9` | Section9 | Artefatos Contratuais |
| `/secao/10` | Section10 | Instrumentos de Medição |
| `/secao/11` | Section11 | Gestão de SLA e Penalidades |
| `/secao/12` | Section12 | Gestão de Riscos |
| `/secao/13` | Section13 | Governança da Operação |
| `/secao/14` | Section14 | Encerramento e Legado |
| `/pdf-preview` | PDFPreview | Preview e geração de PDF |

### Página de Capa (`/`)

A página de capa apresenta:
- **Título Principal**: "Caravana Digital"
- **Subtítulo**: Descrição do programa de modernização
- **Identificação**: REGC - Relatório Executivo de Governança Contratual
- **Botão de Apresentação**: Entra em modo fullscreen e navega para o dashboard
- **Logos Institucionais**: SEDUC-PI, Escolas Conectadas, Novo PAC, MEC

### Dashboard Executivo (`/dashboard`)

Componentes exibidos:
1. **BasicInfoCard**: Informações básicas do processo
2. **KPICards**: Indicadores-chave de desempenho
3. **DisbursementChart**: Gráfico de desembolso
4. **SLAGauges**: Gauges de métricas de SLA
5. **PhasesTimeline**: Timeline das fases do projeto
6. **QuickNavigation**: Navegação rápida para seções

---

## 💰 Dados do Contrato

### Valores Financeiros

| Descrição | Valor |
|-----------|-------|
| **Valor Total do Contrato** | R$ 89.971.275,00 |
| **Fonte Lei 14.172 (FUST)** | R$ 54.134.450,00 |
| **Fonte Tesouro Estadual** | R$ 35.836.825,00 |

### Serviços Contratados

| Serviço | Quantidade |
|---------|------------|
| Serviço de Acesso à Internet (Dedicado) | 92.000 Mbps |
| Serviço de Acesso à Internet (Satélite) | 50 Kits |
| Serviço de Acesso à Internet (Banda Larga) | 631 Links |
| Serviço de Adequação de Infraestrutura | 150 Unidades |

### Equipamentos

| Equipamento | Quantidade |
|-------------|------------|
| Access Points (Novos) | 2.776 |
| Access Points (Legados) | 950 |
| SQS - Sonda SIMET Box | 631 |
| Appliance Firewall | 631 |
| Switches | 664 |

### Fases do Projeto

| Fase | Nome | Percentual | Valor | Mês |
|------|------|------------|-------|-----|
| RPTI | Planejamento | 10% | R$ 8.997.127,50 | Jan/26 |
| PEP-I | Mobilização | 6% | R$ 5.416.478,70 | Fev/26 |
| PEP-M1 | Onda 1 | 9% | R$ 8.124.717,00 | Mar/26 |
| PEP-M2 | Onda 2 | 10% | R$ 9.027.464,50 | Abr/26 |
| PEP-M3 | Onda 3 | 10% | R$ 9.027.464,50 | Mai/26 |
| PEP-F | Finalização | 9% | R$ 8.124.717,00 | Jun/26 |
| RTF | Entrega | 6% | R$ 5.416.480,80 | Jul/26 |

### Métricas de SLA

| Métrica | Meta |
|---------|------|
| Disponibilidade WAN | ≥ 99.5% |
| Latência Máxima | ≤ 80ms |
| Jitter Máximo | ≤ 30ms |
| Perda de Pacotes | ≤ 1% |
| TMA Suporte | ≤ 4h |
| TMR Incidentes | ≤ 8h |

### Arquitetura da Solução

| Camada | Descrição |
|--------|-----------|
| **WAN** | Tráfego de internet via Links Dedicados (Fibra) com redundância (Satélite/Banda Larga) |
| **EDGE** | Appliance Firewall para inspeção, balanceamento, filtragem e IPS |
| **SQS** | Sonda SIMET Box para medições contínuas e auditáveis |
| **LAN/WLAN** | Switches PoE e Access Points Wi-Fi 6 de alta densidade |
| **SDN** | Plataforma de gestão centralizada Software Defined Networking |
| **SGI** | Sistema de Gestão Integrada (Web/Mobile) |

---

## 🧩 Componentes Principais

### Dashboard Components

#### KPICards
Exibe os principais indicadores:
- Valor Total do Contrato
- Fonte Lei 14.172
- Fonte Tesouro
- Período de Execução
- Fases do Projeto

#### DisbursementChart
Gráfico de barras mostrando o cronograma de desembolso por fase do projeto usando Recharts.

#### SLAGauges
Gauges visuais para as métricas de SLA do contrato.

#### PhasesTimeline
Timeline visual das 7 fases do projeto com status e percentuais.

### Layout Components

#### MainLayout
Layout principal com:
- Header com logo e navegação
- Sidebar com menu de seções
- Footer institucional
- Área de conteúdo

#### Header
Cabeçalho com:
- Logo SEDUC-PI
- Título do sistema
- Navegação global

#### Sidebar
Menu lateral com:
- Dashboard
- 14 seções do relatório
- Navegação contextual

### Navigation Components

#### SectionNavigation
Navegação entre seções com botões anterior/próximo.

#### SectionProgress
Indicador de progresso visual da seção atual.

---

## 🛠 Tecnologias Utilizadas

### Core

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| React | 18.3.1 | Framework principal |
| TypeScript | - | Type safety |
| Vite | - | Build tool e dev server |
| React Router DOM | 6.30.1 | Roteamento SPA |

### UI/UX

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| Tailwind CSS | - | Utility-first CSS |
| Shadcn/UI | - | Component library |
| Lucide React | 0.462.0 | Ícones SVG |
| Recharts | 2.15.4 | Gráficos e visualizações |

### State & Data

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| TanStack Query | 5.83.0 | Data fetching e cache |
| React Hook Form | 7.61.1 | Gerenciamento de formulários |
| Zod | 3.25.76 | Validação de schemas |

### PDF Generation

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| @react-pdf/renderer | 4.3.1 | Geração de PDF nativo |
| jsPDF | 3.0.4 | Exportação PDF |
| html2canvas | 1.4.1 | Captura de screenshots |
| react-to-pdf | 2.0.3 | Conversão HTML para PDF |

### Utilities

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| date-fns | 3.6.0 | Manipulação de datas |
| clsx | 2.1.1 | Concatenação de classes |
| tailwind-merge | 2.6.0 | Merge de classes Tailwind |
| class-variance-authority | 0.7.1 | Variantes de componentes |

---

## 👨‍💻 Guia de Desenvolvimento

### Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Build de produção
npm run preview  # Preview do build
npm run lint     # Executa linting
```

### Estrutura de Dados

Os dados do contrato estão centralizados em `src/data/contractData.ts`:

```typescript
// Informações Básicas
export const basicInfo = { ... }

// KPIs
export const kpiData = { ... }

// Dados de Desembolso
export const disbursementData = [ ... ]

// Métricas de SLA
export const slaMetrics = [ ... ]

// Matriz de Riscos
export const riskMatrix: Risk[] = [ ... ]

// Fases do Projeto
export const phases = [ ... ]

// Papéis de Governança
export const governanceRoles = { ... }

// Artefatos
export const artifacts = [ ... ]

// Dimensões de Medição
export const measurementDimensions = [ ... ]

// Itens de Navegação
export const navigationItems = [ ... ]

// Arquitetura da Solução
export const solutionArchitecture = [ ... ]
```

### Adicionando uma Nova Seção

1. Crie o componente em `src/pages/sections/SectionXX.tsx`
2. Adicione a rota em `src/App.tsx`
3. Adicione o item de navegação em `src/data/contractData.ts`

### Design System

O sistema utiliza tokens de design definidos em:
- `src/index.css` - Variáveis CSS customizadas
- `tailwind.config.ts` - Configuração do Tailwind

Cores institucionais:
```css
--gov-blue: 210 100% 32%    /* #034ea2 */
--gov-yellow: 44 97% 53%    /* #fdb913 */
--gov-red: 10 86% 54%       /* #ef4123 */
--gov-green: 147 100% 24%   /* #007932 */
```

---

## 📊 Analytics

O projeto possui analytics integrado. Dados dos últimos 7 dias:

| Métrica | Valor |
|---------|-------|
| Visitantes Únicos | 31 |
| Pageviews | 356 |
| Páginas por Visita | 11.48 |
| Duração Média da Sessão | 390s (~6.5 min) |
| Taxa de Rejeição | 6% |

### Páginas Mais Acessadas

1. `/` (Capa) - 25 acessos
2. `/dashboard` - 23 acessos
3. `/secao/1` - 20 acessos
4. `/secao/2` - 19 acessos
5. `/secao/3` - 16 acessos

### Dispositivos

- Desktop: 94% (29 visitantes)
- Mobile: 6% (2 visitantes)

### Origem

- 100% Brasil
- 100% Acesso Direto

---

## 📝 Licença e Créditos

**Desenvolvido para:**
Secretaria da Educação do Estado do Piauí (SEDUC-PI)

**Programa:**
Caravana Digital - Modernização da Infraestrutura Tecnológica e Conectividade

**Parceiros:**
- Governo do Piauí
- Ministério da Educação (MEC)
- Escolas Conectadas
- Novo PAC

---

*Documentação gerada em 19 de Dezembro de 2025*
