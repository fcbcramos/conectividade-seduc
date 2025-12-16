import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kpiData, basicInfo } from "@/data/contractData";
import { Globe, Wifi, Building2, Target, CheckCircle, Satellite, Radio, Wrench, Router, Shield, Network } from "lucide-react";
import SectionNavigation from "@/components/navigation/SectionNavigation";

const Section1 = () => {
  const highlights = [
    { icon: Globe, label: "Conectividade", value: "Internet de alta velocidade" },
    { icon: Wifi, label: "Infraestrutura", value: "Rede Wi-Fi completa" },
    { icon: Building2, label: "Abrangência", value: "Rede Estadual de Ensino" },
    { icon: Target, label: "Modelo", value: "Contratação Integrada" },
  ];

  const serviceMetrics = [
    { icon: Globe, label: "Serviço de Acesso à Internet (Dedicado)", value: "92.000", unit: "Mbps" },
    { icon: Satellite, label: "Serviço de Acesso à Internet (Satélite)", value: "50", unit: "Kits" },
    { icon: Radio, label: "Serviço de Acesso à Internet (Banda Larga)", value: "631", unit: "Links" },
    { icon: Wrench, label: "Serviço de Adequação de Infraestrutura", value: "150", unit: "Unidades" },
  ];

  const equipmentMetrics = [
    { icon: Wifi, label: "Access Points (Novos)", value: "2.776", color: "text-primary" },
    { icon: Wifi, label: "Access Points (Legados)", value: "950", color: "text-muted-foreground" },
    { icon: Router, label: "SQS - Sonda SIMET Box", value: "631", color: "text-accent" },
    { icon: Shield, label: "Appliance Firewall", value: "631", color: "text-destructive" },
    { icon: Network, label: "Switches", value: "664", color: "text-primary" },
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
          <CardTitle className="text-lg">Serviços Contratados</CardTitle>
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

      {/* Equipment Metrics */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Equipamentos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {equipmentMetrics.map((item) => (
              <div key={item.label} className="border rounded-lg p-4 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-muted flex items-center justify-center mb-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <p className="text-2xl font-bold text-foreground">{item.value}</p>
                <p className="text-xs font-medium mt-1 leading-tight">{item.label}</p>
              </div>
            ))}
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
              <span className="font-bold text-lg text-foreground">R$ 89.971.275,00</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Fonte 14.172</span>
              <span className="font-bold text-lg text-primary">R$ 54.134.450,00</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="text-muted-foreground">Fonte Tesouro</span>
              <span className="font-bold text-lg text-destructive">R$ 35.836.825,00</span>
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
