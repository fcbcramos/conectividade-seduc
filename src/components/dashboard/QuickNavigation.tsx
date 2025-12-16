import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { navigationItems } from "@/data/contractData";
import { ArrowRight } from "lucide-react";

const QuickNavigation = () => {
  return (
    <Card className="shadow-card animate-fade-in">
      <CardHeader>
        <CardTitle className="text-lg">Navegação Rápida</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {item.id}
              </div>
              <span className="flex-1 text-sm font-medium group-hover:text-primary transition-colors">
                {item.title}
              </span>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickNavigation;
