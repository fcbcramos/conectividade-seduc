import { Document, Page } from '@react-pdf/renderer';
import { styles } from './styles';
import { PDFHeader, PDFFooter } from './components';
import {
  CoverPage, TableOfContents, DashboardSection,
  Section1, Section2, Section3, Section4, Section5, Section6, Section7,
  Section8, Section9, Section10, Section11, Section12, Section13, Section14
} from './sections';

const PDFDocument = () => (
  <Document title="REGC - Relatório Executivo de Governança Contratual" author="SEDUC-PI">
    {/* Capa */}
    <Page size="A4" style={styles.coverPage}>
      <CoverPage />
    </Page>

    {/* Sumário */}
    <Page size="A4" style={styles.page}>
      <PDFHeader />
      <TableOfContents />
      <PDFFooter />
    </Page>

    {/* Dashboard */}
    <Page size="A4" style={styles.page}>
      <PDFHeader sectionTitle="Dashboard Executivo" />
      <DashboardSection />
      <PDFFooter />
    </Page>

    {/* Seções 1-14 */}
    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Visão Geral" sectionNumber={1} />
      <Section1 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Governança" sectionNumber={2} />
      <Section2 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Especificações" sectionNumber={3} />
      <Section3 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Papéis" sectionNumber={4} />
      <Section4 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Ciclo de Vida" sectionNumber={5} />
      <Section5 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Fases e Marcos" sectionNumber={6} />
      <Section6 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Desembolso" sectionNumber={7} />
      <Section7 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Fiscalização" sectionNumber={8} />
      <Section8 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Artefatos" sectionNumber={9} />
      <Section9 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Medição" sectionNumber={10} />
      <Section10 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="SLA e Penalidades" sectionNumber={11} />
      <Section11 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Riscos" sectionNumber={12} />
      <Section12 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Operação" sectionNumber={13} />
      <Section13 />
      <PDFFooter />
    </Page>

    <Page size="A4" style={styles.page} wrap>
      <PDFHeader sectionTitle="Encerramento" sectionNumber={14} />
      <Section14 />
      <PDFFooter />
    </Page>
  </Document>
);

export default PDFDocument;
