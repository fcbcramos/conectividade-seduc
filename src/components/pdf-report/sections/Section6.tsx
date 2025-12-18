import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFTable, PDFBadge, PDFMetricCard } from '../components';
import { phases } from '@/data/contractData';

const Section6 = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    description: {
      fontSize: fonts.body,
      color: colors.textMuted,
      marginBottom: spacing.lg,
      lineHeight: 1.5,
    },
    summaryRow: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    phaseGrid: {
      gap: spacing.sm,
    },
    phaseItem: {
      flexDirection: 'row',
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.sm,
      borderLeftWidth: 3,
      borderLeftColor: colors.primary,
    },
    phaseId: {
      width: 50,
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.primary,
    },
    phaseInfo: {
      flex: 1,
    },
    phaseName: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.foreground,
    },
    phaseDesc: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
      marginTop: spacing.xs,
    },
    phaseRight: {
      alignItems: 'flex-end',
      justifyContent: 'center',
      width: 80,
    },
    phaseMonth: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
    },
    phasePercent: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.govGreen,
    },
    deliverablesTitle: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
      marginTop: spacing.sm,
    },
    deliverablesList: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.xs,
      marginTop: spacing.xs,
    },
    deliverableItem: {
      fontSize: fonts.tiny,
      color: colors.text,
      backgroundColor: colors.background,
      paddingHorizontal: spacing.sm,
      paddingVertical: 2,
      borderRadius: 3,
      borderWidth: 0.5,
      borderColor: colors.border,
    },
  });

  const totalPercentage = phases.reduce((acc, p) => acc + p.percentage, 0);

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={6}
        title="Fases do Projeto e Marcos" 
        subtitle="Detalhamento das entregas por fase"
      />

      <Text style={styles.description}>
        O projeto está estruturado em 7 fases de desembolso, cada uma com entregas específicas 
        e percentuais de pagamento vinculados ao cumprimento dos marcos estabelecidos.
      </Text>

      {/* Resumo */}
      <View style={styles.summaryRow}>
        <PDFMetricCard 
          value={phases.length.toString()} 
          label="Fases de Desembolso"
          color={colors.primary}
        />
        <PDFMetricCard 
          value={`${totalPercentage}%`} 
          label="Total do Contrato"
          color={colors.govGreen}
        />
        <PDFMetricCard 
          value={phases[0].month} 
          label="Primeira Entrega"
          color={colors.govBlue}
        />
        <PDFMetricCard 
          value={phases[phases.length - 1].month} 
          label="Última Entrega"
          color={colors.secondary}
        />
      </View>

      {/* Lista de Fases */}
      <Text style={styles.sectionSubtitle}>Detalhamento por Fase</Text>
      <View style={styles.phaseGrid}>
        {phases.map((phase, idx) => (
          <View key={idx} style={styles.phaseItem}>
            <Text style={styles.phaseId}>{phase.id}</Text>
            <View style={styles.phaseInfo}>
              <Text style={styles.phaseName}>{phase.name}</Text>
              <Text style={styles.phaseDesc}>{phase.description}</Text>
              <Text style={styles.deliverablesTitle}>Entregas:</Text>
              <View style={styles.deliverablesList}>
                {phase.deliverables.map((del, dIdx) => (
                  <Text key={dIdx} style={styles.deliverableItem}>{del}</Text>
                ))}
              </View>
            </View>
            <View style={styles.phaseRight}>
              <Text style={styles.phaseMonth}>{phase.month}</Text>
              <Text style={styles.phasePercent}>{phase.percentage}%</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Section6;
