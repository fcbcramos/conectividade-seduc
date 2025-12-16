import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { governanceRoles } from "@/data/contractData";
import { Building2, CheckSquare, Users } from "lucide-react";

const Section3 = () => {
  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fade-in">
      <div className="mb-8">
        <Badge variant="outline" className="mb-2">Seção 3</Badge>
        <h1 className="text-3xl font-bold text-foreground">Papéis e Responsabilidades</h1>
        <p className="text-muted-foreground mt-2">
          Definição clara das atribuições de cada parte no contrato
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contractor */}
        <Card className="shadow-card border-t-4 border-t-primary">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-primary" />
              Contratada
            </CardTitle>
            <Badge className="w-fit">{governanceRoles.contractor.name}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {governanceRoles.contractor.responsibilities.map((resp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{resp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Contracting */}
        <Card className="shadow-card border-t-4 border-t-accent">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              Contratante
            </CardTitle>
            <Badge className="w-fit bg-accent/10 text-accent">{governanceRoles.contracting.name}</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {governanceRoles.contracting.responsibilities.map((resp, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <p className="text-sm">{resp}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Interaction Matrix */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="text-lg">Matriz de Interação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Atividade</th>
                  <th className="text-center py-3 px-4 font-semibold">Piauí Link</th>
                  <th className="text-center py-3 px-4 font-semibold">SEDUC-PI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { activity: "Implantação de infraestrutura", contractor: "Executa", contracting: "Fiscaliza" },
                  { activity: "Suporte técnico", contractor: "Executa", contracting: "Acompanha" },
                  { activity: "Relatórios de desempenho", contractor: "Elabora", contracting: "Valida" },
                  { activity: "Pagamentos", contractor: "Recebe", contracting: "Autoriza" },
                  { activity: "Decisões estratégicas", contractor: "Propõe", contracting: "Decide" },
                ].map((row) => (
                  <tr key={row.activity} className="border-b hover:bg-muted/30">
                    <td className="py-3 px-4">{row.activity}</td>
                    <td className="text-center py-3 px-4">
                      <Badge variant="outline">{row.contractor}</Badge>
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge variant="outline">{row.contracting}</Badge>
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

export default Section3;
