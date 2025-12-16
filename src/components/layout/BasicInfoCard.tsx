import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { basicInfo } from "@/data/contractData";
import { FileText, Users, Calendar, Building2, Scale, Wallet } from "lucide-react";

const BasicInfoCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Informações do Processo */}
      <Card className="shadow-card animate-fade-in">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="w-5 h-5 text-primary" />
            Informações do Processo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Nº do Processo</p>
              <Badge variant="outline" className="mt-1 font-mono text-sm">
                {basicInfo.processNumber}
              </Badge>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Data de Elaboração</p>
              <p className="font-medium flex items-center gap-2 mt-1">
                <Calendar className="w-4 h-4 text-primary" />
                {basicInfo.elaborationDate}
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Área Requisitante</p>
            <p className="font-medium flex items-center gap-2 mt-1">
              <Building2 className="w-4 h-4 text-primary" />
              {basicInfo.requestingArea}
            </p>
          </div>

          <div className="border-t pt-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Grupo Técnico de Planejamento
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Diretoria de Tecnologia</p>
                <p className="font-medium">Marcel Rufino de Carvalho</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Diretoria de Licitação</p>
                <p className="font-medium">Larissa Rocha Pires Ferreira</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Assessoria Jurídica e Administrativa</p>
                <p className="font-medium">Vanilson Carvalho Fontenele</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Gerência Operacional</p>
                <p className="font-medium">Heulem Veras Barros</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Gerência de Compras</p>
                <p className="font-medium">Clarice Mauriz Lira</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Coordenação de Suporte</p>
                <p className="font-medium">Felipe Castelo Branco Crisóstomo Ramos</p>
              </div>
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-xs text-muted-foreground">Coordenação de Redes</p>
                <p className="font-medium">Danilo César Ribeiro da Silva Mendes</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Objeto e Fundamentação */}
      <Card className="shadow-card animate-fade-in" style={{ animationDelay: "0.1s" }}>
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Scale className="w-5 h-5 text-primary" />
            Objeto e Fundamentação Legal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Objeto da Contratação</p>
            <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
              <p className="text-sm leading-relaxed">{basicInfo.object}</p>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Referência Normativa</p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Lei nº 14.133/2021</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Lei nº 14.172/2021</Badge>
              <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Decreto nº 11.004/2022</Badge>
            </div>
          </div>

          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Fontes de Financiamento
            </p>
            <div className="bg-accent/10 border border-accent/20 p-4 rounded-lg">
              <p className="text-sm leading-relaxed">{basicInfo.financingSources}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BasicInfoCard;
