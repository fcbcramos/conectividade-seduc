import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kpiData, basicInfo, contractItems } from "@/data/contractData";
import { Globe, Wifi, Building2, Target, CheckCircle, Satellite, Wrench, Router, Headphones } from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(value);
};

const Section1 = () => {
  const highlights = [
    { icon: Globe, label: "Conectividade", value: "Internet de alta velocidade" },
    { icon: Wifi, label: "Infraestrutura", value: "Rede Wi-Fi completa" },
    { icon: Building2, label: "Abrangência", value: "Rede Estadual de Ensino" },
    { icon: Target, label: "Modelo", value: "Contratação Integrada" },
  ];

  const serviceMetrics = [
    { icon: Globe, label: "Internet Dedicado (fibra, simétrico 1:1)", value: "92.000", unit: "Mbps" },
    { icon: Satellite, label: "Internet Satélite (LEO)", value: "50", unit: "Unidades" },
    { icon: Wifi, label: "Wi-Fi KIT I (até 400 m²)", value: "327", unit: "Unidades" },
    { icon: Wifi, label: "Wi-Fi KIT II (401-800 m²)", value: "161", unit: "Unidades" },
    { icon: Wifi, label: "Wi-Fi KIT III (801-1500 m²)", value: "15", unit: "Unidades" },
    { icon: Wrench, label: "Adequação Cab. Estruturado + SQS", value: "150", unit: "Unidades" },
    { icon: Headphones, label: "Suporte Técnico Especializado", value: "631", unit: "Unidades" },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <SectionNavigation currentSection={1} />
      
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 1</Badge>
        <h1 className="text-3xl font-bold text-foreground">Visão Geral do Contrato</h1>
        <p className="text-muted-foreground mt-2">
          Panorama completo do contrato de conectividade para as escolas da rede estadual do Piauí
        </p>
      </div>

      {/* Object Card */}
      <Card className="shadow-card border-l-4 border-l-primary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Objeto da Contratação
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">{basicInfo.object}</p>
        </CardContent>
      </Card>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => (
          <Card key={item.label} className="shadow-card text-center">
            <CardContent className="pt-6">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
              <p className="font-semibold mt-1">{item.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Service Metrics */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Itens Contratados (Anexo VIII)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {serviceMetrics.map((item) => (
              <div key={item.label} className="bg-muted/50 rounded-lg p-4 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs text-muted-foreground">{item.unit}</p>
                <p className="text-xs font-medium mt-1 leading-tight">{item.label}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tabela de Itens com Valores */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Tabela de Itens e Quantidades</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-3">Item</th>
                  <th className="text-left py-3 px-3">Especificação</th>
                  <th className="text-center py-3 px-3">Qtd</th>
                  <th className="text-right py-3 px-3">Vr. Unit.</th>
                  <th className="text-right py-3 px-3">Vr. Mensal</th>
                  <th className="text-right py-3 px-3">Vr. Anual (12m)</th>
                </tr>
              </thead>
              <tbody>
                {contractItems.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-muted/30">
                    <td className="py-2 px-3 font-semibold">{item.id}</td>
                    <td className="py-2 px-3 text-muted-foreground">{item.especificacao}</td>
                    <td className="text-center py-2 px-3">{item.quantidade.toLocaleString('pt-BR')}</td>
                    <td className="text-right py-2 px-3">{formatCurrency(item.valorUnitario)}</td>
                    <td className="text-right py-2 px-3">{formatCurrency(item.valorMensal)}</td>
                    <td className="text-right py-2 px-3 font-medium">{formatCurrency(item.valorAnual)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold bg-muted/30">
                  <td className="py-3 px-3" colSpan={4}>Total</td>
                  <td className="text-right py-3 px-3">{formatCurrency(contractItems.reduce((s, i) => s + i.valorMensal, 0))}</td>
                  <td className="text-right py-3 px-3">{formatCurrency(contractItems.reduce((s, i) => s + i.valorAnual, 0))}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Contract Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Dados Contratuais</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Valor Total</span>
              <span className="font-bold text-lg text-foreground">{formatCurrency(kpiData.totalValue)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Fonte Lei 14.172 (FUST)</span>
              <span className="font-bold text-lg text-primary">{formatCurrency(kpiData.fonte14172)}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Prazo de Execução</span>
              <span className="font-semibold">{kpiData.executionPeriod}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Modelo</span>
              <Badge>{kpiData.contractModel}</Badge>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-muted-foreground">Status</span>
              <Badge variant="outline" className="border-primary text-primary">{kpiData.status}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-lg">Política Pública</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Este contrato faz parte da política de transformação digital na educação do Estado do Piauí,
              visando garantir conectividade de qualidade para todas as unidades escolares da rede estadual.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium">Inclusão Digital</p>
                  <p className="text-sm text-muted-foreground">Acesso universal à internet nas escolas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium">Modernização</p>
                  <p className="text-sm text-muted-foreground">Infraestrutura Wi-Fi de última geração</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <p className="font-medium">Qualidade</p>
                  <p className="text-sm text-muted-foreground">SLAs rigorosos e monitoramento contínuo</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <SectionNavigation currentSection={1} />
    </div>
  );
};

export default Section1;
