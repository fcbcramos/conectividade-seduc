import { FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="gradient-header text-primary-foreground py-6 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          {/* Logo placeholder - Government of Piauí */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary-foreground/10 rounded-lg flex items-center justify-center border border-primary-foreground/20">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bras%C3%A3o_do_Piau%C3%AD.svg/800px-Bras%C3%A3o_do_Piau%C3%AD.svg.png" 
                alt="Brasão do Piauí"
                className="w-12 h-12 object-contain"
              />
            </div>
            <div className="h-12 w-px bg-primary-foreground/30" />
            <div className="flex items-center gap-3">
              <FileText className="w-8 h-8" />
              <div>
                <p className="text-sm font-medium opacity-90">SEDUC-PI</p>
                <p className="text-xs opacity-70">Secretaria da Educação</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold tracking-tight">
              Relatório Executivo de Governança Contratual
            </h1>
            <p className="text-sm opacity-80 mt-1">
              Conectividade à Internet e Infraestrutura Wi-Fi - Rede Estadual
            </p>
          </div>

          <div className="text-right text-sm opacity-80">
            <p>Governo do Estado do Piauí</p>
            <p className="text-xs opacity-70">Transformação Digital na Educação</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
