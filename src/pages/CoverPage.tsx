import { useNavigate } from "react-router-dom";
import logoSeduc from "@/assets/logo-seduc.png";
import logoEscolasConectadas from "@/assets/escolas-conectadas-logo.png";
import logoNovoPac from "@/assets/novo-pac-logo.png";
import logoMec from "@/assets/mec-gov-federal-logo.png";

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
      <div className="flex flex-shrink-0 h-screen">
        <div className="w-3 md:w-4 bg-gov-blue" />
        <div className="w-3 md:w-4 bg-gov-yellow" />
        <div className="w-3 md:w-4 bg-gov-green" />
        <div className="w-3 md:w-4 bg-gov-red" />
      </div>

      {/* Ondas diagonais cinza decorativas */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        {/* Linhas diagonais cinza claro */}
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d={`M${-200 + i * 200},1000 Q${300 + i * 200},500 ${-200 + i * 200},0`}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="80"
            opacity="0.5"
          />
        ))}
      </svg>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-screen p-8 md:p-12 lg:p-16 relative z-10">
        {/* Header com texto SEDUC e logo */}
        <header className="flex justify-end items-center gap-4">
          <div className="text-right">
            <span className="text-sm md:text-base text-muted-foreground tracking-wide">
              SECRETARIA DA <span className="font-bold text-foreground">EDUCAÇÃO</span> - SEDUC
            </span>
          </div>
          <img 
            src={logoSeduc} 
            alt="Governo do Piauí - SEDUC" 
            className="h-14 md:h-16 lg:h-20 object-contain"
          />
        </header>

        {/* Conteúdo central */}
        <main className="flex-1 flex flex-col justify-center max-w-4xl">
          <div className="space-y-6 md:space-y-8">
            {/* Título principal - cor escura */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight">
              Caravana Digital
            </h1>
            
            {/* Subtítulo */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
              Modernização da Infraestrutura Tecnológica e Conectividade das Escolas da Rede Estadual do Piauí
            </p>

            {/* REGC em linha única */}
            <div className="pt-4 md:pt-6">
              <p className="text-base md:text-lg lg:text-xl font-semibold text-foreground">
                REGC - Relatório Executivo de Governança Contratual
              </p>
            </div>
          </div>
        </main>

        {/* Footer com logos alinhados à direita */}
        <footer className="flex items-center justify-end gap-6 md:gap-8 pt-6">
          <img 
            src={logoEscolasConectadas} 
            alt="Escolas Conectadas" 
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
          <img 
            src={logoNovoPac} 
            alt="Novo PAC" 
            className="h-10 md:h-12 lg:h-14 object-contain"
          />
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
