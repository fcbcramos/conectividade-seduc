import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationItems } from "@/data/contractData";

interface SectionNavigationProps {
  currentSection: number;
}

const SectionNavigation = ({ currentSection }: SectionNavigationProps) => {
  const currentIndex = navigationItems.findIndex(item => item.id === currentSection);
  const prevSection = currentIndex > 0 ? navigationItems[currentIndex - 1] : null;
  const nextSection = currentIndex < navigationItems.length - 1 ? navigationItems[currentIndex + 1] : null;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex items-center justify-between gap-4 py-4">
      {/* Previous Button */}
      {currentSection === 1 ? (
        <Button variant="outline" asChild onClick={handleClick}>
          <Link to="/" className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </Link>
        </Button>
      ) : prevSection ? (
        <Button variant="outline" asChild onClick={handleClick}>
          <Link to={prevSection.path} className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Seção {prevSection.id}: {prevSection.title}</span>
            <span className="sm:hidden">Seção {prevSection.id}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}

      {/* Next Button */}
      {nextSection ? (
        <Button variant="outline" asChild onClick={handleClick}>
          <Link to={nextSection.path} className="flex items-center gap-2">
            <span className="hidden sm:inline">Seção {nextSection.id}: {nextSection.title}</span>
            <span className="sm:hidden">Seção {nextSection.id}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      ) : (
        <Button variant="outline" asChild onClick={handleClick}>
          <Link to="/" className="flex items-center gap-2">
            <span className="hidden sm:inline">Voltar ao Dashboard</span>
            <span className="sm:hidden">Dashboard</span>
            <Home className="w-4 h-4" />
          </Link>
        </Button>
      )}
    </div>
  );
};

export default SectionNavigation;
