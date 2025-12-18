import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFList } from '../components';
import { basicInfo } from '@/data/contractData';

const Section8 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
    grid: { flexDirection: 'row', gap: spacing.md, marginBottom: spacing.lg },
    column: { flex: 1 },
  });

  const fiscalTecnico = ["Verificar conformidade técnica das instalações", "Acompanhar cumprimento de SLAs", "Validar relatórios técnicos", "Registrar ocorrências"];
  const fiscalAdmin = ["Acompanhar execução financeira", "Validar notas fiscais", "Controlar cronograma de pagamentos", "Manter documentação atualizada"];

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={8} title="Modelo de Fiscalização" subtitle="Estrutura e procedimentos de fiscalização contratual" />
      <Text style={styles.description}>A fiscalização será exercida por equipe designada pela SEDUC-PI, com atribuições técnicas e administrativas definidas.</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          <PDFCard title="Fiscal Técnico" variant="accent" accentColor={colors.govBlue}>
            <PDFList items={fiscalTecnico} bulletColor={colors.govBlue} />
          </PDFCard>
        </View>
        <View style={styles.column}>
          <PDFCard title="Fiscal Administrativo" variant="accent" accentColor={colors.govGreen}>
            <PDFList items={fiscalAdmin} bulletColor={colors.govGreen} />
          </PDFCard>
        </View>
      </View>
    </View>
  );
};

export default Section8;
