import { ReactNode } from "react";
import PDFPageHeader from "./PDFPageHeader";
import PDFPageFooter from "./PDFPageFooter";

interface PDFPageProps {
  children: ReactNode;
  pageNumber?: number;
  totalPages?: number;
  showHeader?: boolean;
  showFooter?: boolean;
  sectionTitle?: string;
}

const PDFPage = ({ 
  children, 
  pageNumber, 
  totalPages,
  showHeader = true, 
  showFooter = true,
  sectionTitle
}: PDFPageProps) => {
  return (
    <div 
      className="pdf-page bg-white relative"
      style={{
        width: '297mm',
        height: '210mm',
        minWidth: '297mm',
        minHeight: '210mm',
        maxHeight: '210mm',
        overflow: 'hidden',
        pageBreakAfter: 'always',
        pageBreakInside: 'avoid',
        boxSizing: 'border-box',
      }}
    >
      {showHeader && <PDFPageHeader sectionTitle={sectionTitle} />}
      
      <div 
        className="pdf-page-content px-8 py-4"
        style={{ 
          height: showHeader && showFooter ? 'calc(210mm - 80px)' : 
                  showHeader ? 'calc(210mm - 50px)' : 
                  showFooter ? 'calc(210mm - 30px)' : '210mm',
          overflow: 'hidden'
        }}
      >
        {children}
      </div>
      
      {showFooter && pageNumber && totalPages && (
        <PDFPageFooter pageNumber={pageNumber} totalPages={totalPages} />
      )}
    </div>
  );
};

export default PDFPage;
