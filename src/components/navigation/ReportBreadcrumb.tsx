import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { navigationItems } from "@/data/contractData";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ReportBreadcrumb = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Find current section
  const currentSection = navigationItems.find(item => item.path === currentPath);
  const isDashboard = currentPath === "/" || currentPath === "";

  return (
    <Breadcrumb className="mb-6">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link to="/" className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Dashboard</span>
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>

        {!isDashboard && currentSection && (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="font-medium text-foreground">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-primary text-primary-foreground text-xs font-bold">
                    {currentSection.id}
                  </span>
                  {currentSection.title}
                </span>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default ReportBreadcrumb;
