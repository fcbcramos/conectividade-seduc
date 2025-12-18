import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { governanceRoles } from "@/data/contractData";
import { Building2, CheckSquare, Users } from "lucide-react";

interface PDFSection4Props {
  startPage: number;
  totalPages: number;
}

const PDFSection4 = ({ startPage, totalPages }: PDFSection4Props) => {
  const interactionMatrix = [
    { activity: "Implantação de infraestrutura", contractor: "Executa", contracting: "Fiscaliza" },
    { activity: "Suporte técnico", contractor: "Executa", contracting: "Acompanha" },
    { activity: "Relatórios de desempenho", contractor: "Elabora", contracting: "Valida" },
    { activity: "Pagamentos", contractor: "Recebe", contracting: "Autoriza" },
    { activity: "Decisões estratégicas", contractor: "Propõe", contracting: "Decide" },
  ];

  return (
    <>
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Seção 4 - Papéis e Responsabilidades">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3 pb-2 border-b-2 border-primary">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">4</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seção 4</p>
              <h2 className="text-xl font-bold text-foreground">Papéis e Responsabilidades</h2>
            </div>
          </div>

          {/* Contratada e Contratante */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="border shadow-sm border-t-4 border-t-primary">
              <CardHeader className="py-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Contratada
                </CardTitle>
                <Badge className="w-fit text-[10px]">{governanceRoles.contractor.name}</Badge>
              </CardHeader>
              <CardContent className="py-2">
                <div className="space-y-1.5">
                  {governanceRoles.contractor.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckSquare className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-[10px]">{resp}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm border-t-4 border-t-accent">
              <CardHeader className="py-2">
                <CardTitle className="text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-accent" />
                  Contratante
                </CardTitle>
                <Badge className="w-fit bg-accent/10 text-accent text-[10px]">{governanceRoles.contracting.name}</Badge>
              </CardHeader>
              <CardContent className="py-2">
                <div className="space-y-1.5">
                  {governanceRoles.contracting.responsibilities.map((resp, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <CheckSquare className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                      <p className="text-[10px]">{resp}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Matriz de Interação */}
          <Card className="border shadow-sm">
            <CardHeader className="py-2">
              <CardTitle className="text-sm">Matriz de Interação</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 px-3 font-semibold">Atividade</th>
                    <th className="text-center py-2 px-3 font-semibold">Piauí Link</th>
                    <th className="text-center py-2 px-3 font-semibold">SEDUC-PI</th>
                  </tr>
                </thead>
                <tbody>
                  {interactionMatrix.map((row) => (
                    <tr key={row.activity} className="border-b hover:bg-muted/30">
                      <td className="py-2 px-3">{row.activity}</td>
                      <td className="text-center py-2 px-3">
                        <Badge variant="outline" className="text-[9px]">{row.contractor}</Badge>
                      </td>
                      <td className="text-center py-2 px-3">
                        <Badge variant="outline" className="text-[9px]">{row.contracting}</Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </PDFPage>
    </>
  );
};

export default PDFSection4;
