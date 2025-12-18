import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFTable } from '../components';
import { artifacts } from '@/data/contractData';

const Section9 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
  });

  const columns = [
    { key: 'name', header: 'Código', width: 50 },
    { key: 'description', header: 'Descrição' },
    { key: 'periodicity', header: 'Periodicidade', width: 80 },
    { key: 'status', header: 'Status', width: 70 },
  ];

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={9} title="Artefatos Contratuais" subtitle="Documentos e relatórios previstos no contrato" />
      <Text style={styles.description}>Os artefatos contratuais são documentos formais que registram a execução, qualidade e conformidade dos serviços prestados.</Text>
      <PDFTable columns={columns} data={artifacts} />
    </View>
  );
};

export default Section9;
