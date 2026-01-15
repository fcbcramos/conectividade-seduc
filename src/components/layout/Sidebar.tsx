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
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  Menu
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
  14: Flag,
  15: CalendarClock,
};

const Sidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "bg-sidebar text-sidebar-foreground h-screen sticky top-0 transition-all duration-300 flex flex-col shadow-lg",
        collapsed ? "w-16" : "w-72"
      )}
    >
      {/* Header com toggle */}
      <div className={cn(
        "p-4 border-b border-sidebar-border flex items-center",
        collapsed ? "justify-center" : "justify-between"
      )}>
        {!collapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
              <LayoutDashboard className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div>
              <p className="font-bold text-sm">SEDUC-PI</p>
              <p className="text-xs opacity-70">Governança Contratual</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className={cn("mb-4", collapsed ? "px-2" : "px-3")}>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                isActive
                  ? "bg-secondary text-secondary-foreground font-semibold"
                  : "hover:bg-sidebar-accent text-sidebar-foreground"
              )
            }
          >
            <LayoutDashboard className="w-5 h-5 flex-shrink-0" />
            {!collapsed && <span className="font-medium text-sm">Dashboard</span>}
          </NavLink>
        </div>

        {!collapsed && (
          <p className="px-4 text-xs uppercase tracking-wider opacity-50 mb-3 font-semibold">
            Seções do Relatório
          </p>
        )}

        <div className={cn("space-y-1", collapsed ? "px-2" : "px-3")}>
          {navigationItems.map((item) => {
            const Icon = iconMap[item.id];
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all text-sm group",
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium border-l-4 border-secondary ml-0 pl-2"
                    : "hover:bg-sidebar-accent/50 opacity-85 hover:opacity-100"
                )}
                title={collapsed ? `${item.id}. ${item.title}` : undefined}
              >
                <div className={cn(
                  "w-7 h-7 rounded-md flex items-center justify-center flex-shrink-0 text-xs font-bold transition-colors",
                  isActive 
                    ? "bg-secondary text-secondary-foreground" 
                    : "bg-sidebar-accent/60 group-hover:bg-sidebar-accent"
                )}>
                  {item.id}
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
          <p className="font-medium">Escolas Conectadas</p>
          <p className="mt-0.5">Piauí • 2024</p>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
