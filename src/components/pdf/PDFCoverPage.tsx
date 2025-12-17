import seducLogo from "@/assets/logo-seduc.png";
import mecLogo from "@/assets/mec-gov-federal-logo.png";
import govPiLogo from "@/assets/governo-piaui-logo.png";
import escolasConectadasLogo from "@/assets/escolas-conectadas-logo.png";
import novoPacLogo from "@/assets/novo-pac-logo.png";
import { basicInfo } from "@/data/contractData";

const PDFCoverPage = () => {
  const generationDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="pdf-page pdf-cover-page relative bg-white min-h-[297mm] w-[210mm] flex flex-col">
      {/* Barra lateral colorida (cores institucionais) */}
      <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-destructive" />
        <div className="flex-1 bg-accent" />
      </div>

      {/* Header com logo SEDUC */}
      <header className="pt-8 pr-8 flex justify-end">
        <img 
          src={seducLogo} 
          alt="SEDUC - Secretaria da Educação" 
          className="h-16 w-auto object-contain"
        />
      </header>

      {/* Conteúdo central */}
      <main className="flex-1 flex flex-col justify-center px-12 pl-16">
        <div className="space-y-6">
          {/* Título principal */}
          <h1 className="text-5xl font-extrabold text-primary tracking-tight leading-tight">
            Caravana Digital
          </h1>
          
          {/* Subtítulo */}
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-foreground">
              REGC - Relatório Executivo de Governança Contratual
            </p>
            <p className="text-lg text-muted-foreground max-w-xl">
              Conectividade à Internet e Infraestrutura Wi-Fi para a Rede Estadual de Educação do Piauí
            </p>
          </div>

          {/* Informações do processo */}
          <div className="mt-12 pt-8 border-t border-border space-y-3">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Processo nº:</span>
                <span className="ml-2 font-semibold">{basicInfo.processNumber}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Data:</span>
                <span className="ml-2 font-semibold">{generationDate}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Unidade:</span>
                <span className="ml-2 font-semibold">{basicInfo.requestingArea}</span>
              </div>
              <div>
                <span className="text-muted-foreground">Elaborado por:</span>
                <span className="ml-2 font-semibold">{basicInfo.elaboratedBy}</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer com logos institucionais */}
      <footer className="pb-8 px-12 pl-16">
        <div className="flex items-center justify-between gap-6 pt-6 border-t border-border">
          <div className="flex items-center gap-6">
            <img 
              src={mecLogo} 
              alt="MEC - Governo Federal" 
              className="h-12 w-auto object-contain"
            />
            <img 
              src={govPiLogo} 
              alt="Governo do Piauí" 
              className="h-12 w-auto object-contain"
            />
          </div>
          <div className="flex items-center gap-6">
            <img 
              src={escolasConectadasLogo} 
              alt="Escolas Conectadas" 
              className="h-10 w-auto object-contain"
            />
            <img 
              src={novoPacLogo} 
              alt="Novo PAC" 
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PDFCoverPage;
