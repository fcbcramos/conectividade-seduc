import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFTable } from '../components';
import { slaMetrics } from '@/data/contractData';

const Section11 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
    sectionSubtitle: { fontSize: fonts.h3, fontWeight: 'bold', color: colors.foreground, marginBottom: spacing.sm, marginTop: spacing.lg },
  });

  const slaColumns = [
    { key: 'metric', header: 'Indicador' },
    { key: 'target', header: 'Meta', width: 80 },
    { key: 'current', header: 'Atual', width: 60 },
    { key: 'status', header: 'Status', width: 80 },
  ];

  const penalties = [
    { level: 'Advertência', condition: 'Descumprimento leve', action: 'Notificação formal' },
    { level: 'Multa 1%', condition: 'Descumprimento moderado', action: 'Multa sobre parcela mensal' },
    { level: 'Multa 5%', condition: 'Descumprimento grave', action: 'Multa sobre valor total' },
    { level: 'Rescisão', condition: 'Descumprimento reiterado', action: 'Rescisão contratual' },
  ];

  const penaltyColumns = [
    { key: 'level', header: 'Nível', width: 80 },
    { key: 'condition', header: 'Condição' },
    { key: 'action', header: 'Ação', width: 120 },
  ];

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={11} title="Gestão de SLA e Penalidades" subtitle="Níveis de serviço e sanções contratuais" />
      <Text style={styles.description}>O contrato estabelece indicadores de desempenho (SLAs) com metas claras e penalidades graduais para descumprimento.</Text>
      <PDFTable columns={slaColumns} data={slaMetrics} />
      <Text style={styles.sectionSubtitle}>Regime de Penalidades</Text>
      <PDFTable columns={penaltyColumns} data={penalties} />
    </View>
  );
};

export default Section11;
