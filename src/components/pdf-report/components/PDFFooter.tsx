import { View, Text, Image } from '@react-pdf/renderer';
import { styles } from '../styles';
import { pdfImages } from '../imageUrls';

const PDFFooter = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <View style={styles.footer} fixed>
      <View style={styles.footerLogos}>
        <Image src={pdfImages.mecLogo} style={styles.footerLogo} />
        <Image src={pdfImages.escolasConectadasLogo} style={styles.footerLogo} />
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
