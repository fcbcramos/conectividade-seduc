import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Maximize2 } from "lucide-react";
import logoSeduc from "@/assets/logo-seduc.png";
import logoEscolasConectadas from "@/assets/escolas-conectadas-logo.png";
import logoNovoPac from "@/assets/novo-pac-logo.png";
import logoMec from "@/assets/mec-gov-federal-logo.png";

const CoverPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnterPresentation = async () => {
    setIsTransitioning(true);
    
    try {
      await document.documentElement.requestFullscreen();
    } catch (error) {
      console.log('Fullscreen não disponível');
    }
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 600);
  };

  return (
    <div 
      className={`min-h-screen bg-white relative overflow-hidden flex transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Barra lateral colorida - barras verticais de cima para baixo */}
      <div className="flex flex-col flex-shrink-0 w-3 md:w-4 h-screen z-20">
        <div className="flex-1" style={{ backgroundColor: '#034ea2' }} />
        <div className="flex-1" style={{ backgroundColor: '#fdb913' }} />
        <div className="flex-1" style={{ backgroundColor: '#ef4123' }} />
        <div className="flex-1" style={{ backgroundColor: '#007932' }} />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-screen relative z-10">
        {/* Header com logo SEDUC - posição absoluta no canto superior direito */}
        <header className="absolute top-4 right-6 md:top-6 md:right-8 lg:top-8 lg:right-10">
          <img 
            src={logoSeduc} 
            alt="Governo do Piauí - SEDUC" 
            className="h-20 md:h-24 lg:h-28 object-contain"
          />
        </header>

        {/* Conteúdo central */}
        <main className="flex-1 flex flex-col justify-center items-center px-8 md:px-16">
          <div className="space-y-6 md:space-y-8 text-left">
            {/* Título principal - 70px base, responsivo */}
            <h1 
              className="font-extrabold text-foreground leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.375rem)' }}
            >
              Caravana Digital
            </h1>
            
            {/* Subtítulo - 35px base, responsivo */}
            <p 
              className="text-muted-foreground leading-relaxed"
              style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)' }}
            >
              Modernização da Infraestrutura Tecnológica e Conectividade das Escolas da Rede Estadual do Piauí
            </p>

            {/* REGC em linha única - 35px base, responsivo */}
            <div className="pt-4 md:pt-6">
              <p 
                className="font-semibold text-foreground"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2.2rem)' }}
              >
                REGC - Relatório Executivo de Governança Contratual
              </p>
            </div>

            {/* Botão Modo Apresentação */}
            <button
              onClick={handleEnterPresentation}
              className="mt-8 md:mt-10 px-8 py-4 bg-[#034ea2] text-white font-semibold 
                         rounded-lg shadow-lg hover:bg-[#023a7a] transition-all duration-300
                         hover:scale-105 flex items-center gap-3 group"
            >
              <Maximize2 className="w-5 h-5 group-hover:animate-pulse" />
              Clique para Entrar em Modo Apresentação
            </button>
          </div>
        </main>

        {/* Footer com logos - posição absoluta no canto inferior direito */}
        <footer className="absolute bottom-6 right-6 md:bottom-8 md:right-8 lg:bottom-10 lg:right-10 flex items-center gap-4 md:gap-6">
          <img 
            src={logoEscolasConectadas} 
            alt="Escolas Conectadas" 
            className="h-7 md:h-8 lg:h-9 object-contain mix-blend-multiply"
          />
          <img 
            src={logoNovoPac} 
            alt="Novo PAC" 
            className="h-7 md:h-8 lg:h-9 object-contain mix-blend-multiply"
          />
          <img 
            src={logoMec} 
            alt="MEC - Governo Federal" 
            className="h-7 md:h-8 lg:h-9 object-contain mix-blend-multiply"
          />
        </footer>
      </div>
    </div>
  );
};

export default CoverPage;
