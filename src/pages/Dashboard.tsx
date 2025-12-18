import BasicInfoCard from "@/components/layout/BasicInfoCard";
import KPICards from "@/components/dashboard/KPICards";
import DisbursementChart from "@/components/dashboard/DisbursementChart";
import SLAGauges from "@/components/dashboard/SLAGauges";
import PhasesTimeline from "@/components/dashboard/PhasesTimeline";
import QuickNavigation from "@/components/dashboard/QuickNavigation";

const Dashboard = () => {
  return (
    <div className="max-w-7xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="pdf-hide">
        <h1 className="text-2xl font-bold text-foreground">Dashboard Executivo</h1>
        <p className="text-sm text-muted-foreground">Visão consolidada do contrato de conectividade</p>
      </div>

      {/* Basic Information */}
      <BasicInfoCard />

      {/* KPI Cards */}
      <KPICards />

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DisbursementChart />
        <SLAGauges />
      </div>

      {/* Phases and Navigation */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PhasesTimeline />
        <QuickNavigation />
      </div>
    </div>
  );
};

export default Dashboard;
