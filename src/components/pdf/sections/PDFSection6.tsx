import PDFPage from "../PDFPage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { phases } from "@/data/contractData";
import { Circle, Milestone, Calendar, CheckCircle } from "lucide-react";

interface PDFSection6Props {
  startPage: number;
  totalPages: number;
}

const PDFSection6 = ({ startPage, totalPages }: PDFSection6Props) => {
  const totalPercentage = phases.reduce((acc, p) => acc + p.percentage, 0);

  return (
    <>
      <PDFPage pageNumber={startPage} totalPages={totalPages} sectionTitle="Seção 6 - Fases do Projeto e Marcos">
        <div className="space-y-3">
          {/* Header */}
          <div className="flex items-center gap-3 pb-2 border-b-2 border-primary">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">6</span>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Seção 6</p>
              <h2 className="text-xl font-bold text-foreground">Fases do Projeto e Marcos</h2>
            </div>
          </div>

          {/* Resumo */}
          <Card className="border shadow-sm bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Milestone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Total de Fases</p>
                    <p className="text-xl font-bold">{phases.length} fases</p>
                    <p className="text-[10px] text-muted-foreground">Início: Março/2026</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Desembolso na Implantação</p>
                  <p className="text-xl font-bold text-accent">{totalPercentage}%</p>
                  <p className="text-[10px] text-muted-foreground">do valor total</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tabela de Fases */}
          <Card className="border shadow-sm">
            <CardHeader className="py-2">
              <CardTitle className="text-sm">Detalhamento das Fases</CardTitle>
            </CardHeader>
            <CardContent className="py-2">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left py-2 px-2">Fase</th>
                    <th className="text-left py-2 px-2">Descrição</th>
                    <th className="text-center py-2 px-2">Mês</th>
                    <th className="text-center py-2 px-2">%</th>
                    <th className="text-left py-2 px-2">Entregas</th>
                  </tr>
                </thead>
                <tbody>
                  {phases.map((phase) => (
                    <tr key={phase.id} className="border-b">
                      <td className="py-2 px-2">
                        <Badge variant="outline" className="font-mono text-[9px]">{phase.id}</Badge>
                        <p className="text-[9px] font-medium mt-0.5">{phase.name}</p>
                      </td>
                      <td className="py-2 px-2 text-muted-foreground text-[9px] max-w-[200px]">
                        {phase.description.substring(0, 80)}...
                      </td>
                      <td className="text-center py-2 px-2">
                        <div className="flex items-center justify-center gap-1">
                          <Calendar className="w-3 h-3 text-muted-foreground" />
                          <span>{phase.month}</span>
                        </div>
                      </td>
                      <td className="text-center py-2 px-2">
                        <Badge className="bg-primary/10 text-primary text-[9px]">{phase.percentage}%</Badge>
                      </td>
                      <td className="py-2 px-2">
                        <div className="flex flex-wrap gap-1">
                          {phase.deliverables.slice(0, 2).map((del, idx) => (
                            <div key={idx} className="flex items-center gap-0.5 text-[8px] text-muted-foreground">
                              <CheckCircle className="w-2 h-2 text-accent" />
                              {del}
                            </div>
                          ))}
                        </div>
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

export default PDFSection6;
