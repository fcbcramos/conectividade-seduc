import { View, Text, Image } from '@react-pdf/renderer';
import { styles, colors } from '../styles';
import seducLogo from '@/assets/logo-seduc.png';

interface PDFHeaderProps {
  sectionTitle?: string;
  sectionNumber?: number;
}

const PDFHeader = ({ sectionTitle, sectionNumber }: PDFHeaderProps) => (
  <View style={styles.header} fixed>
    <Image src={seducLogo} style={styles.headerLogo} />
    <View>
      <Text style={styles.headerTitle}>REGC - Relatório Executivo de Governança Contratual</Text>
      {sectionTitle && (
        <Text style={styles.headerSection}>
          {sectionNumber ? `Seção ${sectionNumber} - ` : ''}{sectionTitle}
        </Text>
      )}
    </View>
  </View>
);

export default PDFHeader;
