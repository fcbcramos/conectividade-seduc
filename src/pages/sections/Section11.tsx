import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  Gauge, 
  TrendingDown, 
  Clock,
  Scale,
  FileText,
  Eye,
  Receipt,
  Zap,
  ShieldAlert,
  Activity,
  Wifi,
  Timer,
  Headphones,
  Calculator
} from "lucide-react";

const Section11 = () => {
  // Indicadores SLA completos
  const slaIndicators = [
    { 
      code: "IC-1", 
      name: "Disponibilidade de Link (WAN)", 
      description: "Percentual de tempo em que o link de internet principal esteve operacional e acessível durante o mês.",
      formula: "(Horas Disponíveis / Horas Totais do Mês) × 100",
      target: "≥ 99,5%",
      icon: Wifi,
      category: "Conectividade"
    },
    { 
      code: "IC-2", 
      name: "Latência de Rede (RTT)", 
      description: "Média mensal do tempo de resposta (ida e volta) entre a escola e o PTT-Fortaleza/IX.br.",
      formula: "Métrica: Milissegundos (ms)",
      target: "≤ 40ms (Fibra) / ≤ 60ms (Satélite)",
      icon: Activity,
      category: "Conectividade"
    },
    { 
      code: "IC-3", 
      name: "Perda de Pacotes", 
      description: "Percentual médio de pacotes perdidos na transmissão entre a escola e o ponto de teste.",
      formula: "Percentual de pacotes perdidos",
      target: "≤ 0,1% (Fibra) / ≤ 0,5% (Satélite)",
      icon: ShieldAlert,
      category: "Conectividade"
    },
    { 
      code: "IC-4", 
      name: "Velocidade Entregue (Throughput)", 
      description: "Percentual de testes de velocidade (Download/Upload) que atingiram a banda contratada.",
      formula: "(Testes Conformidade / Total de Testes) × 100",
      target: "100% medições ≥ 90% da banda nominal",
      icon: Zap,
      category: "Conectividade"
    },
    { 
      code: "IC-5", 
      name: "Disponibilidade LAN/WLAN", 
      description: "Percentual de ativos críticos (Switches, APs, Firewalls) que permaneceram online e gerenciáveis.",
      formula: "Uptime de ativos críticos",
      target: "≥ 99,0%",
      icon: Gauge,
      category: "Infraestrutura"
    },
    { 
      code: "IC-6", 
      name: "Tempo de Atendimento (TMA/TMR)", 
      description: "Percentual de chamados críticos resolvidos dentro do prazo máximo estipulado (SLA de Tempo).",
      formula: "Chamados no prazo / Total de chamados",
      target: "≥ 95% dos chamados",
      icon: Headphones,
      category: "Suporte"
    }
  ];

  // Tabela de Glosas Progressiva
  const glosaTable = [
    { indicator: "IC-1", indicatorName: "Disponibilidade", faixa: "99,4% a 98,0%", glosa: "5% do valor da escola", level: 1 },
    { indicator: "IC-1", indicatorName: "Disponibilidade", faixa: "97,9% a 95,0%", glosa: "10% do valor da escola", level: 2 },
    { indicator: "IC-1", indicatorName: "Disponibilidade", faixa: "Abaixo de 95,0%", glosa: "20% do valor da escola", level: 3 },
    { indicator: "IC-4", indicatorName: "Velocidade", faixa: "Média entre 89% e 80%", glosa: "5% do valor da escola", level: 1 },
    { indicator: "IC-4", indicatorName: "Velocidade", faixa: "Média entre 79% e 60%", glosa: "15% do valor da escola", level: 2 },
    { indicator: "IC-4", indicatorName: "Velocidade", faixa: "Média abaixo de 60%", glosa: "30% + Notificação", level: 3 },
    { indicator: "IC-6", indicatorName: "Suporte", faixa: "Resolução fora do prazo", glosa: "2% por dia de atraso", level: 2 }
  ];

  // Expurgos permitidos
  const expurgos = [
    { tipo: "Interrupção de Energia Elétrica", condicao: "Comprovação via logs do equipamento (Last Gasp ou reinício pós-queda)", icon: Zap },
    { tipo: "Falha Estrutural na Escola", condicao: "Incêndio, desabamento, vandalismo severo - mediante Boletim de Ocorrência", icon: ShieldAlert },
    { tipo: "Manutenção Programada", condicao: "Comunicação com 48h de antecedência + aprovação formal da Fiscalização SEDUC-PI", icon: Clock },
    { tipo: "Caso Fortuito ou Força Maior", condicao: "Nos termos da lei civil", icon: AlertTriangle }
  ];

  // Regime sancionatório
  const penalties = [
    { type: "Advertência", condition: "1ª ocorrência de descumprimento leve", icon: AlertTriangle },
    { type: "Multa 0,5%", condition: "Reincidência ou descumprimento moderado", icon: TrendingDown },
    { type: "Multa 2%", condition: "Descumprimento grave ou reiterado", icon: XCircle },
    { type: "Rescisão", condition: "Descumprimento total ou abandono", icon: XCircle }
  ];

  // Procedimentos de ateste
  const atesteSteps = [
    { step: 1, title: "Monitoramento Diário", description: "Acompanhamento via dashboards em tempo real (SGI, Zabbix/Grafana)", icon: Eye },
    { step: 2, title: "Relatório Mensal", description: "Contratada submete até o 5º dia útil com consolidado e memória de cálculo", icon: FileText },
    { step: 3, title: "Validação Técnica", description: "Fiscal confronta relatório com dados da Sonda SQS e sistema de chamados", icon: CheckCircle },
    { step: 4, title: "Ateste e Pagamento", description: "Emissão do Termo de Recebimento Provisório e autorização de NF com descontos", icon: Receipt }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 11</Badge>
        <h1 className="text-3xl font-bold text-foreground">Modelo de Execução e Gestão de Nível de Serviço (SLA)</h1>
        <p className="text-muted-foreground mt-2">
          Pagamento por resultado, indicadores, metodologia de medição, glosas e procedimentos de ateste
        </p>
      </div>

      {/* 11.1 - PPR */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            11.1 Conceito de Pagamento por Resultado (PPR)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <p className="text-sm font-medium text-primary mb-2">Fundamentação Legal</p>
            <p className="text-sm text-muted-foreground">
              Art. 6º, XXIII, e Art. 144 da <strong>Lei nº 14.133/2021</strong> - Regime de remuneração variável vinculado ao desempenho.
            </p>
          </div>
          
          <div className="space-y-3 text-sm">
            <p>
              O pagamento mensal <strong>não representa um valor fixo</strong> por disponibilidade de mão de obra ou locação de ativos, 
              mas sim a contraprestação pela <strong>entrega efetiva do nível de serviço contratado</strong>.
            </p>
            <p>
              O valor faturável mensalmente será submetido a <strong>ajustes automáticos (glosas)</strong> calculados com base no 
              <strong> Índice de Qualidade do Serviço (IQS)</strong>, aferido através do cumprimento das metas estabelecidas na 
              Tabela de Indicadores de Nível de Serviço (SLA).
            </p>
            <div className="bg-accent/10 p-3 rounded-lg border border-accent/30">
              <p className="text-accent font-medium text-xs uppercase tracking-wide mb-1">Objetivo do Modelo</p>
              <p className="text-sm">
                Incentivar a melhoria contínua e garantir que a Administração Pública pague apenas pelo serviço que 
                efetivamente atenda aos padrões de <strong>qualidade, disponibilidade e tempestividade</strong> exigidos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 11.2 - Indicadores SLA */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Gauge className="w-5 h-5 text-primary" />
            11.2 Indicadores de Nível de Serviço (SLA)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            A qualidade da execução contratual será aferida mensalmente através dos seguintes Indicadores Chave de Desempenho (KPIs):
          </p>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="w-16 font-bold">Cód.</TableHead>
                  <TableHead className="font-bold">Indicador</TableHead>
                  <TableHead className="font-bold">Descrição e Métrica</TableHead>
                  <TableHead className="w-48 font-bold">Meta (Alvo)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {slaIndicators.map((indicator) => (
                  <TableRow key={indicator.code} className="hover:bg-muted/30">
                    <TableCell>
                      <Badge variant="outline" className="font-mono font-bold">
                        {indicator.code}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <indicator.icon className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="font-medium">{indicator.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <p className="text-sm">{indicator.description}</p>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">{indicator.formula}</p>
                    </TableCell>
                    <TableCell>
                      <Badge className="bg-accent/10 text-accent border-accent/30 font-semibold">
                        {indicator.target}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* 11.3 - Metodologia de Medição */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-primary" />
            11.3 Metodologia de Medição e Aferição
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Instrumento Oficial */}
          <div className="bg-secondary/10 p-4 rounded-lg border-2 border-secondary">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                <Activity className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="font-bold text-secondary-foreground">Instrumento Oficial de Medição: SIMET Box (SQS)</p>
                <p className="text-sm text-muted-foreground mt-1">
                  A aferição dos indicadores técnicos (IC-1 a IC-4) será realizada <strong>exclusivamente</strong> através dos dados 
                  coletados pela Sonda de Qualidade de Serviços instalada em cada unidade escolar. Os dados da Sonda são considerados 
                  a <strong>"verdade oficial"</strong> para fins de cálculo de SLA, sobrepondo-se a relatórios manuais ou sistemas 
                  proprietários da Contratada.
                </p>
              </div>
            </div>
          </div>

          {/* Janela de Medição */}
          <div className="bg-muted/30 p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-primary" />
              <p className="font-semibold">Janela de Medição</p>
            </div>
            <p className="text-sm text-muted-foreground">
              O ciclo de avaliação compreende o período entre a <strong>00h00 do primeiro dia</strong> e as 
              <strong> 23h59 do último dia</strong> do mês civil de referência.
            </p>
          </div>

          {/* Expurgos Permitidos */}
          <div>
            <p className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-secondary" />
              Expurgos Permitidos
            </p>
            <p className="text-sm text-muted-foreground mb-3">
              Não serão contabilizados como falha ou indisponibilidade os eventos decorrentes de:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {expurgos.map((expurgo, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <expurgo.icon className="w-4 h-4 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{expurgo.tipo}</p>
                    <p className="text-xs text-muted-foreground">{expurgo.condicao}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 11.4 - Mecanismo de Glosa */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-destructive" />
            11.4 Mecanismo de Glosa e Sanções
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            O não atingimento das metas implicará na aplicação de <strong>descontos diretos (glosas)</strong> sobre o valor 
            mensal da parcela referente à unidade escolar ou ao serviço afetado:
          </p>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold">Indicador</TableHead>
                  <TableHead className="font-bold">Faixa de Desempenho</TableHead>
                  <TableHead className="font-bold">Glosa (Desconto)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {glosaTable.map((item, index) => (
                  <TableRow key={index} className="hover:bg-muted/30">
                    <TableCell>
                      <Badge variant="outline" className="font-mono">
                        {item.indicator}
                      </Badge>
                      <span className="text-xs text-muted-foreground ml-2">{item.indicatorName}</span>
                    </TableCell>
                    <TableCell className="font-medium">{item.faixa}</TableCell>
                    <TableCell>
                      <Badge className={
                        item.level === 1 ? "bg-secondary/20 text-secondary-foreground" :
                        item.level === 2 ? "bg-secondary text-white" :
                        "bg-destructive text-white"
                      }>
                        {item.glosa}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Limite de Glosa */}
          <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/30">
            <p className="font-semibold text-destructive mb-2 flex items-center gap-2">
              <XCircle className="w-4 h-4" />
              Limite de Glosa e Rescisão
            </p>
            <p className="text-sm">
              Caso o total de glosas aplicadas a uma mesma unidade escolar ultrapasse <strong>40% do seu valor mensal</strong> por 
              <strong> 3 (três) meses consecutivos</strong>, a Administração poderá solicitar a substituição imediata da 
              tecnologia/solução ou iniciar processo de sanção administrativa por inexecução parcial do contrato.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 11.5 - Procedimentos de Ateste */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-primary" />
            11.5 Procedimentos de Fiscalização e Ateste
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {atesteSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < atesteSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-primary/30 -translate-x-1/2 z-0" />
                )}
                <div className="relative z-10 p-4 bg-muted/30 rounded-lg border border-muted hover:border-primary/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                      {step.step}
                    </div>
                    <step.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-semibold text-sm">{step.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-muted/30 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Prazo:</strong> Relatório Mensal de Execução deve ser submetido até o <strong>5º dia útil</strong> do mês 
              subsequente, contendo o consolidado dos indicadores por escola, memória de cálculo e evidências (logs, relatórios SIMET).
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 11.6 - Regime Sancionatório */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            11.6 Regime Sancionatório
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {penalties.map((penalty, index) => (
              <div 
                key={penalty.type}
                className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  index === 0 ? "bg-secondary/20" :
                  index === 1 ? "bg-secondary" :
                  index === 2 ? "bg-destructive/80" :
                  "bg-destructive"
                }`}>
                  <penalty.icon className={`w-5 h-5 ${
                    index === 0 ? "text-secondary-foreground" : "text-white"
                  }`} />
                </div>
                <div>
                  <p className="font-semibold">{penalty.type}</p>
                  <p className="text-sm text-muted-foreground">{penalty.condition}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Fórmula de Cálculo - Visual Aprimorado */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Calculator className="h-5 w-5 text-primary" />
            Fórmula de Cálculo de Glosa
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Fórmula Visual */}
          <div className="bg-gradient-to-r from-muted/40 to-muted/20 p-8 rounded-xl border">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {/* Resultado */}
              <div className="flex flex-col items-center">
                <div className="bg-destructive text-destructive-foreground px-6 py-3 rounded-lg font-bold text-xl shadow-md">
                  GLOSA
                </div>
                <span className="text-xs text-muted-foreground mt-1">Desconto</span>
              </div>
              
              <span className="text-3xl font-light text-muted-foreground">=</span>
              
              {/* Parênteses com diferença */}
              <div className="flex items-center gap-2 bg-background/80 px-4 py-3 rounded-lg border-2 border-dashed border-primary/30">
                <span className="text-2xl text-muted-foreground">(</span>
                <div className="flex flex-col items-center">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded font-semibold text-sm">
                    Meta<sub className="text-xs">SLA</sub>
                  </div>
                  <span className="text-[10px] text-muted-foreground">Ex: 99,5%</span>
                </div>
                <span className="text-2xl font-bold text-destructive mx-1">−</span>
                <div className="flex flex-col items-center">
                  <div className="bg-accent text-accent-foreground px-4 py-2 rounded font-semibold text-sm">
                    Resultado<sub className="text-xs">Aferido</sub>
                  </div>
                  <span className="text-[10px] text-muted-foreground">Ex: 97,0%</span>
                </div>
                <span className="text-2xl text-muted-foreground">)</span>
              </div>
              
              <span className="text-2xl font-bold text-muted-foreground">×</span>
              
              {/* Fator */}
              <div className="flex flex-col items-center">
                <div className="bg-success text-success-foreground px-4 py-2 rounded font-semibold text-sm">
                  Fator
                </div>
                <span className="text-[10px] text-muted-foreground">Peso</span>
              </div>
              
              <span className="text-2xl font-bold text-muted-foreground">×</span>
              
              {/* Valor Mensal */}
              <div className="flex flex-col items-center">
                <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded font-semibold text-sm border">
                  Valor<sub className="text-xs">Mensal</sub>
                </div>
                <span className="text-[10px] text-muted-foreground">R$ Base</span>
              </div>
            </div>
          </div>

          {/* Exemplo Prático */}
          <div className="bg-muted/20 p-4 rounded-lg border-l-4 border-accent">
            <p className="text-sm font-semibold text-foreground mb-2">Exemplo Prático:</p>
            <div className="flex flex-wrap items-center gap-2 text-sm font-mono">
              <span className="bg-destructive/10 text-destructive px-2 py-1 rounded font-bold">Glosa</span>
              <span>=</span>
              <span>(</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded">99,5%</span>
              <span>−</span>
              <span className="bg-accent/10 text-accent px-2 py-1 rounded">97,0%</span>
              <span>)</span>
              <span>×</span>
              <span className="bg-success/10 text-success px-2 py-1 rounded">4</span>
              <span>×</span>
              <span className="bg-secondary px-2 py-1 rounded">R$ 1.000</span>
              <span>=</span>
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded font-bold">R$ 100,00</span>
            </div>
          </div>

          {/* Legenda das Variáveis */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border border-primary/20">
              <div className="w-3 h-3 rounded bg-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-primary">Meta SLA</p>
                <p className="text-xs text-muted-foreground">Valor contratual mínimo exigido</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-accent/5 rounded-lg border border-accent/20">
              <div className="w-3 h-3 rounded bg-accent mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-accent">Resultado Aferido</p>
                <p className="text-xs text-muted-foreground">Medição real via SIMET</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-success/5 rounded-lg border border-success/20">
              <div className="w-3 h-3 rounded bg-success mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm text-success">Fator</p>
                <p className="text-xs text-muted-foreground">Multiplicador por criticidade</p>
              </div>
            </div>
            <div className="flex items-start gap-2 p-3 bg-secondary/50 rounded-lg border">
              <div className="w-3 h-3 rounded bg-secondary-foreground/50 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm">Valor Mensal</p>
                <p className="text-xs text-muted-foreground">Base de cálculo da escola</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section11;
