import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { artifacts } from "@/data/contractData";
import { FileText, CheckCircle, Clock, AlertCircle, FolderOpen } from "lucide-react";

const Section8 = () => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Entregue": return <CheckCircle className="w-4 h-4 text-accent" />;
      case "Em andamento": return <Clock className="w-4 h-4 text-secondary" />;
      case "Ativo": return <CheckCircle className="w-4 h-4 text-primary" />;
      default: return <AlertCircle className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Entregue": return "bg-accent/10 text-accent";
      case "Em andamento": return "bg-secondary/20 text-secondary-foreground";
      case "Ativo": return "bg-primary/10 text-primary";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 8</Badge>
        <h1 className="text-3xl font-bold text-foreground">Artefatos Contratuais</h1>
        <p className="text-muted-foreground mt-2">
          Documentos obrigatórios previstos no contrato e sua periodicidade
        </p>
      </div>

      {/* Summary */}
      <Card className="shadow-card bg-gradient-to-r from-primary/5 to-accent/5">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-8 h-8 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total de Artefatos</p>
              <p className="text-3xl font-bold">{artifacts.length} documentos</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Artifacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artifacts.map((artifact) => (
          <Card key={artifact.name} className="shadow-card hover:shadow-card-hover transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                {getStatusIcon(artifact.status)}
              </div>
              
              <Badge variant="outline" className="font-mono mb-2">{artifact.name}</Badge>
              <h3 className="font-semibold text-sm mb-2">{artifact.description}</h3>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{artifact.periodicity}</span>
                </div>
                <Badge className={`text-xs ${getStatusColor(artifact.status)}`}>
                  {artifact.status}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Details Table */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Detalhamento dos Artefatos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b bg-muted/30">
                  <th className="text-left py-3 px-4 font-semibold">Sigla</th>
                  <th className="text-left py-3 px-4 font-semibold">Descrição</th>
                  <th className="text-center py-3 px-4 font-semibold">Periodicidade</th>
                  <th className="text-center py-3 px-4 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {artifacts.map((artifact) => (
                  <tr key={artifact.name} className="border-b hover:bg-muted/20">
                    <td className="py-3 px-4">
                      <Badge variant="outline" className="font-mono">{artifact.name}</Badge>
                    </td>
                    <td className="py-3 px-4">{artifact.description}</td>
                    <td className="text-center py-3 px-4">{artifact.periodicity}</td>
                    <td className="text-center py-3 px-4">
                      <Badge className={`text-xs ${getStatusColor(artifact.status)}`}>
                        {artifact.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Section8;
