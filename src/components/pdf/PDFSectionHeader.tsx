interface PDFSectionHeaderProps {
  sectionNumber: number | string;
  title: string;
}

const PDFSectionHeader = ({ sectionNumber, title }: PDFSectionHeaderProps) => (
  <div className="pdf-section-header flex items-center gap-4 mb-6 pb-3 border-b-2 border-primary print:break-after-avoid">
    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
      <span className="text-xl font-bold text-primary-foreground">{sectionNumber}</span>
    </div>
    <div>
      <p className="text-xs text-muted-foreground uppercase tracking-wider">
        {typeof sectionNumber === 'number' ? `Seção ${sectionNumber}` : sectionNumber}
      </p>
      <h2 className="text-xl font-bold text-foreground">{title}</h2>
    </div>
  </div>
);

export default PDFSectionHeader;
