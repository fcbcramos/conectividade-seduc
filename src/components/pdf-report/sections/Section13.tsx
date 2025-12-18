import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFList } from '../components';

const Section13 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
    grid: { flexDirection: 'row', gap: spacing.md },
    column: { flex: 1 },
  });

  const nocActivities = ["Monitoramento 24x7 de todos os links", "Detecção proativa de falhas", "Escalação automática de incidentes", "Relatórios de disponibilidade"];
  const supportActivities = ["Atendimento via telefone e portal", "Registro de chamados técnicos", "Acompanhamento de SLA", "Feedback de satisfação"];

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={13} title="Governança da Operação" subtitle="Estrutura operacional e suporte técnico" />
      <Text style={styles.description}>A operação do contrato conta com NOC dedicado e estrutura de suporte técnico para garantir a continuidade dos serviços.</Text>
      <View style={styles.grid}>
        <View style={styles.column}>
          <PDFCard title="NOC - Centro de Operações" variant="accent" accentColor={colors.govBlue}>
            <PDFList items={nocActivities} bulletColor={colors.govBlue} />
          </PDFCard>
        </View>
        <View style={styles.column}>
          <PDFCard title="Service Desk" variant="accent" accentColor={colors.govGreen}>
            <PDFList items={supportActivities} bulletColor={colors.govGreen} />
          </PDFCard>
        </View>
      </View>
    </View>
  );
};

export default Section13;
