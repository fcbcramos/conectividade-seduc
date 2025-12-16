import mecLogo from "@/assets/mec-gov-federal-logo.png";
import escolasConectadasLogo from "@/assets/escolas-conectadas-logo.png";

// URL direta para o brasão do Piauí
const govPiLogoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bras%C3%A3o_do_Piau%C3%AD.svg/200px-Bras%C3%A3o_do_Piau%C3%AD.svg.png";

const InstitutionalBar = () => {
  return (
    <div className="bg-white border-b border-border/50 shadow-institutional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Bloco de Logomarcas Institucionais */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Logo MEC / Governo Federal */}
            <div className="flex items-center">
              <img 
                src={mecLogo} 
                alt="Ministério da Educação - Governo Federal"
                className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
              />
            </div>

            {/* Separador */}
            <div className="h-10 w-px bg-border hidden sm:block" />

            {/* Logo Governo do Piauí */}
            <div className="flex items-center gap-2">
              <img 
                src={govPiLogoUrl} 
                alt="Governo do Estado do Piauí"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
              <div className="hidden md:flex flex-col">
                <span className="text-xs font-bold text-foreground leading-tight">GOVERNO DO</span>
                <span className="text-sm font-extrabold text-primary leading-tight">PIAUÍ</span>
              </div>
            </div>

            {/* Separador */}
            <div className="h-10 w-px bg-border hidden sm:block" />

            {/* Logo Escolas Conectadas */}
            <div className="flex items-center">
              <img 
                src={escolasConectadasLogo} 
                alt="Programa Escolas Conectadas"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </div>
          </div>

          {/* Texto Institucional (hidden em mobile) */}
          <div className="hidden lg:flex flex-col items-end text-right">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Programa de Conectividade
            </span>
            <span className="text-sm font-semibold text-foreground">
              Escolas do Piauí
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstitutionalBar;
