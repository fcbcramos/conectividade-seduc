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
      <div className="flex flex-shrink-0 h-screen z-20">
        <div className="w-3 md:w-4" style={{ backgroundColor: '#034ea2' }} />
        <div className="w-3 md:w-4" style={{ backgroundColor: '#fdb913' }} />
        <div className="w-3 md:w-4" style={{ backgroundColor: '#007932' }} />
        <div className="w-3 md:w-4" style={{ backgroundColor: '#ef4123' }} />
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 flex flex-col min-h-screen p-8 md:p-12 lg:p-16 relative z-10">
        {/* Header com logo SEDUC */}
        <header className="flex justify-end items-center">
          <img 
            src={logoSeduc} 
            alt="Governo do Piauí - SEDUC" 
            className="h-56 md:h-72 lg:h-[22rem] object-contain"
          />
        </header>

        {/* Conteúdo central */}
        <main className="flex-1 flex flex-col justify-center max-w-5xl">
          <div className="space-y-6 md:space-y-8">
            {/* Título principal - 70px base, responsivo */}
            <h1 
              className="font-extrabold text-foreground leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.375rem)' }}
            >
              Caravana Digital
            </h1>
            
            {/* Subtítulo - 35px base, responsivo */}
            <p 
              className="text-muted-foreground leading-relaxed max-w-4xl"
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
          </div>
        </main>

        {/* Footer com logos alinhados à direita e transparência */}
        <footer className="flex items-center justify-end gap-6 md:gap-8 pt-6">
          <img 
            src={logoEscolasConectadas} 
            alt="Escolas Conectadas" 
            className="h-6 md:h-7 lg:h-8 object-contain mix-blend-multiply"
          />
          <img 
            src={logoNovoPac} 
            alt="Novo PAC" 
            className="h-6 md:h-7 lg:h-8 object-contain mix-blend-multiply"
          />
          <img 
            src={logoMec} 
            alt="MEC - Governo Federal" 
            className="h-6 md:h-7 lg:h-8 object-contain mix-blend-multiply"
          />
        </footer>
      </div>
    </div>
  );
};

export default CoverPage;
