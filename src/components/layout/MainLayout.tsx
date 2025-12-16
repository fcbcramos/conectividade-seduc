import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import InstitutionalFooter from "./InstitutionalFooter";
import ReportBreadcrumb from "@/components/navigation/ReportBreadcrumb";
import SectionProgress from "@/components/navigation/SectionProgress";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6 lg:p-8 overflow-auto bg-background">
          <div className="max-w-7xl mx-auto">
            <ReportBreadcrumb />
            <SectionProgress />
            <Outlet />
          </div>
        </main>
        <InstitutionalFooter />
      </div>
    </div>
  );
};

export default MainLayout;
