import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { disbursementData, kpiData } from "@/data/contractData";
import { Wallet, TrendingUp, Calendar, Landmark, ArrowRight } from "lucide-react";
import ExecutiveTimeline from "@/components/dashboard/ExecutiveTimeline";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const resourceAllocation = [
  { 
    item: 1, 
    name: "Serviço de Acesso à Internet (Dedicado)", 
    description: "Link dedicado, simétrico, garantia de banda, fibra óptica",
    ano1: "Lei 14.172", 
    ano2: "Tesouro", 
    ano3: "Tesouro" 
  },
  { 
    item: 2, 
    name: "Serviço de Acesso à Internet (Satélite)", 
    description: "Tecnologia satelital LEO para áreas sem infraestrutura terrestre",
    ano1: "Lei 14.172", 
    ano2: "Tesouro", 
    ano3: "Tesouro" 
  },
  { 
    item: 3, 
    name: "Serviço de Acesso à Internet (Banda Larga)", 
    description: "Banda larga, mín. 300 Mbps, fibra óptica",
    ano1: "Lei 14.172", 
    ano2: "Lei 14.172", 
    ano3: "Tesouro" 
  },
  { 
    item: 4, 
    name: "Infraestrutura Wi-Fi (KIT I)", 
    description: "Até 400 m² de cobertura",
    ano1: "Lei 14.172", 
    ano2: "Lei 14.172", 
    ano3: "Tesouro" 
  },
  { 
    item: 5, 
    name: "Infraestrutura Wi-Fi (KIT II)", 
    description: "401 a 800 m² de cobertura",
    ano1: "Lei 14.172", 
    ano2: "Lei 14.172", 
    ano3: "Tesouro" 
  },
  { 
    item: 6, 
    name: "Infraestrutura Wi-Fi (KIT III)", 
    description: "801 a 1500 m² de cobertura",
    ano1: "Lei 14.172", 
    ano2: "Lei 14.172", 
    ano3: "Tesouro" 
  },
  { 
    item: 7, 
    name: "Cabeamento Estruturado e Infraestrutura", 
    description: "150 unidades escolares",
    ano1: "Lei 14.172", 
    ano2: "Lei 14.172", 
    ano3: "N/A" 
  },
  { 
    item: 8, 
    name: "Suporte Técnico Especializado", 
    description: "Gestão e suporte fim a fim da conectividade",
    ano1: "Lei 14.172", 
    ano2: "Lei 14.172", 
    ano3: "Tesouro" 
  },
];

const getSourceStyle = (source: string) => {
  switch (source) {
    case "Lei 14.172":
      return "bg-primary text-primary-foreground";
    case "Tesouro":
      return "bg-destructive text-destructive-foreground";
    case "N/A":
      return "bg-muted text-muted-foreground";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

const Section7 = () => {
  const totalImplantation = disbursementData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={8} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 8</Badge>
        <h1 className="text-3xl font-bold text-foreground">Cronograma de Desembolso</h1>
        <p className="text-muted-foreground mt-2">
          Distribuição financeira por fase do projeto - Previsão para 2026
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Valor Total do Contrato</p>
                <p className="text-xl font-bold">{formatCurrency(kpiData.totalValue)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Fase de Implantação</p>
                <p className="text-xl font-bold text-accent">{formatCurrency(totalImplantation)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
              <p className="text-xs text-muted-foreground uppercase">Início Previsto</p>
                <p className="text-xl font-bold">Fevereiro/2026</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Executive Timeline - Gantt Style */}
      <ExecutiveTimeline />

      {/* Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Detalhamento por Fase</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Fase</th>
                  <th className="text-left py-3 px-4">Descrição</th>
                  <th className="text-center py-3 px-4">Mês</th>
                  <th className="text-right py-3 px-4">%</th>
                  <th className="text-right py-3 px-4">Valor (R$)</th>
                  <th className="text-center py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {disbursementData.map((item) => (
                  <tr key={item.phase} className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-semibold">{item.phase}</td>
                    <td className="py-3 px-4 text-muted-foreground">{item.name}</td>
                    <td className="text-center py-3 px-4">{item.month}</td>
                    <td className="text-right py-3 px-4">{item.percentage}%</td>
                    <td className="text-right py-3 px-4 font-medium">{formatCurrency(item.value)}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className="bg-primary/10 text-primary">
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold bg-muted/30">
                  <td className="py-3 px-4">Total</td>
                  <td className="py-3 px-4">Implantação</td>
                  <td className="text-center py-3 px-4">Fev-Ago/26</td>
                  <td className="text-right py-3 px-4">60%</td>
                  <td className="text-right py-3 px-4">{formatCurrency(totalImplantation)}</td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Resource Allocation Matrix */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-primary" />
            Matriz de Alocação de Recursos por Fonte
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Legend */}
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-primary"></div>
              <span className="text-sm">Lei 14.172/2021 (FUST)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-destructive"></div>
              <span className="text-sm">Tesouro Estadual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-muted"></div>
              <span className="text-sm">N/A</span>
            </div>
          </div>

          {/* Matrix Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Item</th>
                  <th className="text-left py-3 px-4">Serviço</th>
                  <th className="text-center py-3 px-4">Ano 2026</th>
                  <th className="text-center py-3 px-4">Ano 2027</th>
                  <th className="text-center py-3 px-4">Ano 2028</th>
                </tr>
              </thead>
              <tbody>
                {resourceAllocation.map((item) => (
                  <tr key={item.item} className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4 font-semibold">{item.item}</td>
                    <td className="py-3 px-4">
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge className={getSourceStyle(item.ano1)}>{item.ano1}</Badge>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge className={getSourceStyle(item.ano2)}>{item.ano2}</Badge>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge className={getSourceStyle(item.ano3)}>{item.ano3}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transition Strategy */}
          <div className="bg-muted/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Estratégia de Transição e Sustentabilidade</h4>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-xs text-muted-foreground">ANO 001</p>
                <p className="font-bold text-primary">Lei 14.172</p>
                <p className="text-xs">100% FUST</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <div className="text-center p-3 bg-gradient-to-r from-primary/10 to-destructive/10 rounded-lg">
                <p className="text-xs text-muted-foreground">ANO 002</p>
                <p className="font-bold">Transição</p>
                <p className="text-xs">Misto</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
              <div className="text-center p-3 bg-destructive/10 rounded-lg">
                <p className="text-xs text-muted-foreground">ANO 003</p>
                <p className="font-bold text-destructive">Tesouro</p>
                <p className="text-xs">Estadual</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              A transição gradual garante a continuidade dos serviços após o encerramento dos recursos federais da Lei 14.172/2021.
            </p>
          </div>
        </CardContent>
      </Card>

      <SectionNavigation currentSection={8} />
    </div>
  );
};

export default Section7;
