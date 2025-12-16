import { useNavigate } from "react-router-dom";
import logoSeduc from "@/assets/logo-seduc.png";
import logoEscolasConectadas from "@/assets/escolas-conectadas-logo.png";
import logoNovoPac from "@/assets/novo-pac-logo.png";
import logoMec from "@/assets/mec-gov-federal-logo.png";
import { MousePointerClick } from "lucide-react";

const CoverPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard');
  };

  return (
    <div 
      className="min-h-screen bg-white cursor-pointer relative overflow-hidden flex"
      onClick={handleClick}
    >
      {/* Barra lateral colorida - 4 cores oficiais */}
      <div className="flex flex-shrink-0">
        <div className="w-3 md:w-4 h-full bg-gov-blue" />
        <div className="w-3 md:w-4 h-full bg-gov-yellow" />
        <div className="w-3 md:w-4 h-full bg-gov-green" />
        <div className="w-3 md:w-4 h-full bg-gov-red" />
      </div>

      {/* Ondas decorativas SVG */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-auto opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path 
          fill="#034ea2" 
          d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
      <svg 
        className="absolute bottom-0 left-0 w-full h-auto opacity-5"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path 
          fill="#007932" 
          d="M0,256L48,240C96,224,192,192,288,186.7C384,181,480,203,576,218.7C672,235,768,245,864,234.7C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-screen p-6 md:p-10 lg:p-16 relative z-10">
        {/* Header com logo SEDUC */}
        <header className="flex justify-end items-start">
          <img 
            src={logoSeduc} 
            alt="Secretaria da Educação - SEDUC Piauí" 
            className="h-16 md:h-20 lg:h-24 object-contain"
          />
        </header>

        {/* Conteúdo central */}
        <main className="flex-1 flex flex-col justify-center max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            {/* Título principal */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gov-blue leading-tight">
              Caravana Digital
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Modernização da Infraestrutura Tecnológica e Conectividade das Escolas da Rede Estadual do Piauí
            </p>

            {/* Badge REGC */}
            <div className="pt-4 md:pt-6">
              <div className="inline-flex flex-col gap-1">
                <span className="text-sm md:text-base font-bold text-gov-blue tracking-wider uppercase">
                  REGC
                </span>
                <span className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                  Relatório Executivo de Governança Contratual
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Indicador de clique */}
        <div className="flex flex-col items-center gap-3 py-8 animate-pulse">
          <MousePointerClick className="w-6 h-6 md:w-8 md:h-8 text-gov-blue" />
          <span className="text-sm md:text-base text-muted-foreground font-medium">
            Clique para continuar
          </span>
        </div>

        {/* Footer com logos institucionais */}
        <footer className="flex flex-wrap items-center justify-center gap-6 md:gap-10 pt-4 border-t border-border/30">
          <img 
            src={logoEscolasConectadas} 
            alt="Escolas Conectadas" 
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
          <div className="hidden md:block w-px h-10 bg-border" />
          <img 
            src={logoNovoPac} 
            alt="Novo PAC" 
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
          <div className="hidden md:block w-px h-10 bg-border" />
          <img 
            src={logoMec} 
            alt="MEC - Governo Federal" 
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
        </footer>
      </div>
    </div>
  );
};

export default CoverPage;
