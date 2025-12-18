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
    <div 
      className="pdf-page pdf-cover-page relative bg-white flex flex-col"
      style={{
        width: '297mm',
        height: '210mm',
        minWidth: '297mm',
        minHeight: '210mm',
        maxHeight: '210mm',
        overflow: 'hidden',
      }}
    >
      {/* Barra lateral colorida (cores institucionais) */}
      <div className="absolute left-0 top-0 bottom-0 w-3 flex flex-col">
        <div className="flex-1 bg-primary" />
        <div className="flex-1 bg-secondary" />
        <div className="flex-1 bg-destructive" />
        <div className="flex-1 bg-accent" />
      </div>

      {/* Header com logo SEDUC */}
      <header className="pt-6 pr-10 flex justify-end">
        <img 
          src={seducLogo} 
          alt="SEDUC - Secretaria da Educação" 
          className="h-14 w-auto object-contain"
        />
      </header>

      {/* Conteúdo central - otimizado para landscape */}
      <main className="flex-1 flex flex-col justify-center px-16 pl-20">
        <div className="flex items-start gap-16">
          {/* Coluna esquerda: Título e subtítulo */}
          <div className="flex-1 space-y-4">
            <h1 className="text-6xl font-extrabold text-primary tracking-tight leading-tight">
              Caravana Digital
            </h1>
            
            <div className="space-y-2">
              <p className="text-2xl font-semibold text-foreground">
                REGC - Relatório Executivo de Governança Contratual
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Conectividade à Internet e Infraestrutura Wi-Fi para a Rede Estadual de Educação do Piauí
              </p>
            </div>
          </div>

          {/* Coluna direita: Informações do processo */}
          <div className="w-80 pt-2">
            <div className="border-l-2 border-primary pl-6 space-y-4">
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Processo nº</span>
                <p className="font-semibold text-sm">{basicInfo.processNumber}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Data</span>
                <p className="font-semibold text-sm">{generationDate}</p>
              </div>
              <div>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">Área Requisitante</span>
                <p className="font-semibold text-sm">{basicInfo.requestingArea}</p>
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
