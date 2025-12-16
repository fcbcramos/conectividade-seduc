import { useLocation } from "react-router-dom";
import { navigationItems } from "@/data/contractData";
import { cn } from "@/lib/utils";

const SectionProgress = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const currentSection = navigationItems.find(item => item.path === currentPath);
  const currentIndex = currentSection ? currentSection.id : 0;
  const totalSections = navigationItems.length;
  
  const isDashboard = currentPath === "/" || currentPath === "";

  if (isDashboard) return null;

  const progressPercentage = (currentIndex / totalSections) * 100;

  return (
    <div className="mb-6 animate-fade-in">
      <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
        <span className="font-medium">Progresso do Relatório</span>
        <span className="tabular-nums">
          Seção <span className="text-primary font-bold">{currentIndex}</span> de {totalSections}
        </span>
      </div>
      <div className="relative h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
      <div className="flex justify-between mt-2">
        {navigationItems.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index + 1 <= currentIndex 
                ? "bg-primary scale-100" 
                : "bg-muted-foreground/30 scale-75"
            )}
            title={`Seção ${item.id}: ${item.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionProgress;
