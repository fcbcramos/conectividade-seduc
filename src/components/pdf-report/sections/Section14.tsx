import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFList } from '../components';

const Section14 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
    grid: { flexDirection: 'row', gap: spacing.md },
    column: { flex: 1 },
  });

  const closureItems = ["Documentação as-built completa", "Transferência de conhecimento", "Inventário final de ativos", "Termo de encerramento"];
  const legacyItems = ["Capacitação das equipes técnicas", "Manuais operacionais", "Base de conhecimento", "Continuidade dos serviços"];

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={14} title="Encerramento e Legado" subtitle="Procedimentos de encerramento e transferência" />
      <Text style={styles.description}>O encerramento do contrato contempla a transferência ordenada de ativos, conhecimento e documentação para garantir a continuidade dos serviços.</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          <PDFCard title="Procedimentos de Encerramento" variant="accent" accentColor={colors.govBlue}>
            <PDFList items={closureItems} bulletColor={colors.govBlue} />
          </PDFCard>
        </View>
        <View style={styles.column}>
          <PDFCard title="Legado e Continuidade" variant="accent" accentColor={colors.govGreen}>
            <PDFList items={legacyItems} bulletColor={colors.govGreen} />
          </PDFCard>
        </View>
      </View>
    </View>
  );
};

export default Section14;
