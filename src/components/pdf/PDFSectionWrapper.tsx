import { ReactNode } from "react";
import PDFHeader from "./PDFHeader";
import PDFFooter from "./PDFFooter";

interface PDFSectionWrapperProps {
  children: ReactNode;
  sectionNumber: number;
  sectionTitle: string;
  pageNumber: number;
  totalPages: number;
}

const PDFSectionWrapper = ({ 
  children, 
  sectionNumber, 
  sectionTitle, 
  pageNumber, 
  totalPages 
}: PDFSectionWrapperProps) => {
  return (
    <div className="pdf-page pdf-section bg-white min-h-[297mm] w-[210mm] flex flex-col">
      <PDFHeader sectionTitle={`Seção ${sectionNumber} - ${sectionTitle}`} />
      
      <main className="flex-1 p-8 overflow-hidden">
        <div className="pdf-content">
          {children}
        </div>
      </main>
      
      <PDFFooter pageNumber={pageNumber} totalPages={totalPages} />
    </div>
  );
};

export default PDFSectionWrapper;
