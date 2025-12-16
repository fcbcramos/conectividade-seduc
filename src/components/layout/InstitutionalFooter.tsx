import mecLogo from "@/assets/mec-gov-federal-logo.png";
import govPiLogo from "@/assets/governo-piaui-logo.png";
import escolasConectadasLogo from "@/assets/escolas-conectadas-logo.png";
import novoPacLogo from "@/assets/novo-pac-logo.png";

const InstitutionalFooter = () => {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Logomarcas Institucionais */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mb-4">
          {/* Logo MEC / Governo Federal */}
          <img 
            src={mecLogo} 
            alt="Ministério da Educação - Governo Federal"
            className="h-14 sm:h-16 w-auto object-contain"
          />

          {/* Separador */}
          <div className="hidden sm:block h-12 w-px bg-border" />

          {/* Logo Governo do Piauí */}
          <img 
            src={govPiLogo} 
            alt="Governo do Estado do Piauí"
            className="h-14 sm:h-16 w-auto object-contain"
          />

          {/* Separador */}
          <div className="hidden sm:block h-12 w-px bg-border" />

          {/* Logo Escolas Conectadas */}
          <img 
            src={escolasConectadasLogo} 
            alt="Programa Escolas Conectadas"
            className="h-12 sm:h-14 w-auto object-contain"
          />

          {/* Separador */}
          <div className="hidden sm:block h-12 w-px bg-border" />

          {/* Logo Novo PAC */}
          <img 
            src={novoPacLogo} 
            alt="Novo PAC - Desenvolvimento e Sustentabilidade"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </div>

        {/* Texto de identificação */}
        <div className="text-center border-t border-border pt-4">
          <p className="text-xs text-muted-foreground">
            Programa de Conectividade nas Escolas - Uma parceria entre o Governo Federal e o Governo do Estado do Piauí
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            © {new Date().getFullYear()} SEDUC-PI • Secretaria da Educação do Estado do Piauí
          </p>
        </div>
      </div>
    </footer>
  );
};

export default InstitutionalFooter;
