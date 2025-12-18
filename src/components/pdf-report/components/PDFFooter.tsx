import { View, Text } from '@react-pdf/renderer';
import { styles } from '../styles';

const PDFFooter = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerText}>
        Caravana Digital • SEDUC-PI
      </Text>
      <Text style={styles.footerText}>
        {currentDate}
      </Text>
      <Text 
        style={styles.footerPage} 
        render={({ pageNumber, totalPages }) => `Página ${pageNumber} de ${totalPages}`} 
      />
    </View>
  );
};

export default PDFFooter;
