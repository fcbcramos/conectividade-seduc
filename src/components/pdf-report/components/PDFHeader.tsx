import { View, Text } from '@react-pdf/renderer';
import { styles, colors } from '../styles';

interface PDFHeaderProps {
  sectionTitle?: string;
  sectionNumber?: number;
}

const PDFHeader = ({ sectionTitle, sectionNumber }: PDFHeaderProps) => (
  <View style={styles.header} fixed>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
      <View style={{ 
        width: 4, 
        height: 16, 
        backgroundColor: colors.govBlue, 
        borderRadius: 2 
      }} />
      <Text style={{ fontSize: 9, fontWeight: 'bold', color: colors.govBlue }}>
        CARAVANA DIGITAL
      </Text>
    </View>
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
