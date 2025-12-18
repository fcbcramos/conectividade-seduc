import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { kpiData, basicInfo } from "@/data/contractData";
import { Globe, Wifi, Building2, Target, CheckCircle, Satellite, Radio, Wrench, Router, Shield, Network } from "lucide-react";

interface PDFSection1Props {
  startPage: number;
  totalPages: number;
}

const PDFSection1 = ({ startPage, totalPages }: PDFSection1Props) => {
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
    { icon: Wifi, label: "Access Points (Novos)", value: "2.776" },
    { icon: Wifi, label: "Access Points (Legados)", value: "950" },
    { icon: Router, label: "SQS - Sonda SIMET Box", value: "631" },
    { icon: Shield, label: "Appliance Firewall", value: "631" },
    { icon: Network, label: "Switches", value: "664" },
  ];

  return (
    <>
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Seção 1 - Visão Geral do Contrato">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 pb-3 border-b-2 border-primary">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">1</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seção 1</p>
              <h2 className="text-xl font-bold text-foreground">Visão Geral do Contrato</h2>
            </div>
          </div>

          {/* Objeto */}
          <Card className="border shadow-sm border-l-4 border-l-primary">
            <CardHeader className="py-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                Objeto da Contratação
              </CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <p className="text-xs leading-relaxed">{basicInfo.object}</p>
            </CardContent>
          </Card>

          {/* Highlights */}
          <div className="grid grid-cols-4 gap-3">
            {highlights.map((item) => (
              <Card key={item.label} className="border shadow-sm text-center">
                <CardContent className="p-3">
                  <div className="w-8 h-8 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="text-[10px] text-muted-foreground uppercase">{item.label}</p>
                  <p className="text-xs font-semibold mt-0.5">{item.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Serviços e Equipamentos */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border shadow-sm">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Serviços Contratados</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="grid grid-cols-2 gap-2">
                  {serviceMetrics.map((item) => (
                    <div key={item.label} className="bg-muted/50 rounded p-2 text-center">
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                      <p className="text-[9px] text-muted-foreground">{item.unit}</p>
                      <p className="text-[9px] font-medium mt-0.5 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Equipamentos</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <div className="grid grid-cols-3 gap-2">
                  {equipmentMetrics.slice(0, 3).map((item) => (
                    <div key={item.label} className="border rounded p-2 text-center">
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                      <p className="text-[9px] font-medium leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {equipmentMetrics.slice(3).map((item) => (
                    <div key={item.label} className="border rounded p-2 text-center">
                      <p className="text-lg font-bold text-foreground">{item.value}</p>
                      <p className="text-[9px] font-medium leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dados Contratuais e Política Pública */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border shadow-sm">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Dados Contratuais</CardTitle>
              </CardHeader>
              <CardContent className="py-2 space-y-1.5">
                <div className="flex justify-between items-center py-1 border-b text-xs">
                  <span className="text-muted-foreground">Valor Total</span>
                  <span className="font-bold">R$ 89.971.275,00</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b text-xs">
                  <span className="text-muted-foreground">Fonte 14.172</span>
                  <span className="font-bold text-primary">R$ 54.134.450,00</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b text-xs">
                  <span className="text-muted-foreground">Fonte Tesouro</span>
                  <span className="font-bold text-destructive">R$ 35.836.825,00</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b text-xs">
                  <span className="text-muted-foreground">Prazo</span>
                  <span className="font-semibold">{kpiData.executionPeriod}</span>
                </div>
                <div className="flex justify-between items-center py-1 text-xs">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant="outline" className="text-[10px]">{kpiData.status}</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardHeader className="py-2">
                <CardTitle className="text-sm">Política Pública</CardTitle>
              </CardHeader>
              <CardContent className="py-2">
                <p className="text-[10px] text-muted-foreground mb-2">
                  Parte da política de transformação digital na educação do Estado do Piauí.
                </p>
                <div className="space-y-1.5">
                  {[
                    { title: "Inclusão Digital", desc: "Acesso universal à internet nas escolas" },
                    { title: "Modernização", desc: "Infraestrutura Wi-Fi de última geração" },
                    { title: "Qualidade", desc: "SLAs rigorosos e monitoramento contínuo" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-2">
                      <CheckCircle className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[10px] font-medium">{item.title}</p>
                        <p className="text-[9px] text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </PDFPage>
    </>
  );
};

export default PDFSection1;
