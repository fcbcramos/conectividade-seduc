import { createContext, useContext, ReactNode } from "react";

interface PDFContextType {
  isPDFMode: boolean;
}

const PDFContext = createContext<PDFContextType>({ isPDFMode: false });

export const usePDFMode = () => useContext(PDFContext);

interface PDFProviderProps {
  children: ReactNode;
  isPDFMode?: boolean;
}

export const PDFProvider = ({ children, isPDFMode = false }: PDFProviderProps) => {
  return (
    <PDFContext.Provider value={{ isPDFMode }}>
      {children}
    </PDFContext.Provider>
  );
};

export default PDFContext;
