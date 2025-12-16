import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Section1 from "./pages/sections/Section1";
import Section2 from "./pages/sections/Section2";
import Section3 from "./pages/sections/Section3";
import Section4 from "./pages/sections/Section4";
import Section5 from "./pages/sections/Section5";
import Section6 from "./pages/sections/Section6";
import Section7 from "./pages/sections/Section7";
import Section8 from "./pages/sections/Section8";
import Section9 from "./pages/sections/Section9";
import Section10 from "./pages/sections/Section10";
import Section11 from "./pages/sections/Section11";
import Section12 from "./pages/sections/Section12";
import Section13 from "./pages/sections/Section13";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/secao/1" element={<Section1 />} />
            <Route path="/secao/2" element={<Section2 />} />
            <Route path="/secao/3" element={<Section3 />} />
            <Route path="/secao/4" element={<Section4 />} />
            <Route path="/secao/5" element={<Section5 />} />
            <Route path="/secao/6" element={<Section6 />} />
            <Route path="/secao/7" element={<Section7 />} />
            <Route path="/secao/8" element={<Section8 />} />
            <Route path="/secao/9" element={<Section9 />} />
            <Route path="/secao/10" element={<Section10 />} />
            <Route path="/secao/11" element={<Section11 />} />
            <Route path="/secao/12" element={<Section12 />} />
            <Route path="/secao/13" element={<Section13 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
