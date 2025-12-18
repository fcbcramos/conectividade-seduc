import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from '../styles';
import mecLogo from '@/assets/mec-gov-federal-logo.png';
import escolasConectadasLogo from '@/assets/escolas-conectadas-logo.png';

const PDFFooter = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <View style={styles.footer} fixed>
      <View style={styles.footerLogos}>
        <Image src={mecLogo} style={styles.footerLogo} />
        <Image src={escolasConectadasLogo} style={styles.footerLogo} />
      </View>
      <Text style={styles.footerText}>
        Caravana Digital • SEDUC-PI • {currentDate}
      </Text>
      <Text 
        style={styles.footerPage} 
        render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} 
      />
    </View>
  );
};

export default PDFFooter;
