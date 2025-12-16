import { NavLink, useLocation } from "react-router-dom";
import { navigationItems } from "@/data/contractData";
import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  Network, 
  Users, 
  Clock, 
  Milestone, 
  Wallet, 
  ClipboardCheck, 
  FolderOpen, 
  Gauge, 
  AlertTriangle, 
  Shield, 
  Settings, 
  Flag,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const iconMap: Record<number, React.ComponentType<{ className?: string }>> = {
  1: FileText,
  2: Network,
  3: Users,
  4: Clock,
  5: Milestone,
  6: Wallet,
  7: ClipboardCheck,
  8: FolderOpen,
  9: Gauge,
  10: AlertTriangle,
  11: Shield,
  12: Settings,
  13: Flag,
};

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "bg-sidebar text-sidebar-foreground h-screen sticky top-0 transition-all duration-300 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Toggle button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-20 z-10 h-6 w-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
      >
        {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </Button>

      {/* Logo area */}
      <div className={cn(
        "p-4 border-b border-sidebar-border",
        collapsed ? "px-2" : "px-4"
      )}>
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-sidebar-primary flex items-center justify-center flex-shrink-0">
            <LayoutDashboard className="w-5 h-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden">
              <p className="font-bold text-sm">SEDUC-PI</p>
              <p className="text-xs opacity-70">Governança Contratual</p>
            </div>
          )}
        </NavLink>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className={cn("mb-4", collapsed ? "px-2" : "px-4")}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "hover:bg-sidebar-accent text-sidebar-foreground"
              )
            }
          >
            <LayoutDashboard className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="font-medium text-sm">Dashboard</span>}
          </NavLink>
        </div>

        {!collapsed && (
          <p className="px-4 text-xs uppercase tracking-wider opacity-50 mb-2">
            Seções do Relatório
          </p>
        )}

        <div className={cn("space-y-1", collapsed ? "px-2" : "px-4")}>
          {navigationItems.map((item) => {
            const Icon = iconMap[item.id];
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all text-sm",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                    : "hover:bg-sidebar-accent/50 opacity-80 hover:opacity-100"
                )}
                title={collapsed ? item.title : undefined}
              >
                <div className={cn(
                  "w-6 h-6 rounded flex items-center justify-center flex-shrink-0 text-xs font-bold",
                  isActive ? "bg-sidebar-primary text-sidebar-primary-foreground" : "bg-sidebar-accent/50"
                )}>
                  {collapsed ? item.id : <Icon className="w-4 h-4" />}
                </div>
                {!collapsed && (
                  <span className="truncate">{item.title}</span>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="p-4 border-t border-sidebar-border text-xs opacity-60 text-center">
          <p>© 2024 SEDUC-PI</p>
          <p>Todos os direitos reservados</p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
