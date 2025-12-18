import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard } from '../components';
import { measurementDimensions } from '@/data/contractData';

const Section10 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
    dimCard: { width: '48%', backgroundColor: colors.muted, borderRadius: 4, padding: spacing.md, borderLeftWidth: 3, borderLeftColor: colors.primary },
    dimName: { fontSize: fonts.h3, fontWeight: 'bold', color: colors.foreground, marginBottom: spacing.xs },
    dimDesc: { fontSize: fonts.tiny, color: colors.textMuted, marginBottom: spacing.sm },
    metricsList: { gap: spacing.xs },
    metricItem: { fontSize: fonts.tiny, color: colors.text },
    tool: { fontSize: fonts.tiny, color: colors.primary, fontWeight: 'bold', marginTop: spacing.sm },
  });

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={10} title="Instrumentos de Medição" subtitle="Ferramentas e métricas de avaliação de qualidade" />
      <Text style={styles.description}>A qualidade dos serviços será aferida por instrumentos independentes de medição nas dimensões WAN, LAN/WLAN e Suporte.</Text>
      <View style={styles.grid}>
        {measurementDimensions.map((dim, idx) => (
          <View key={idx.toString()} style={styles.dimCard}>
            <Text style={styles.dimName}>{dim.name}</Text>
            <Text style={styles.dimDesc}>{dim.description}</Text>
            <View style={styles.metricsList}>
              {dim.metrics.map((m, mIdx) => <Text key={mIdx.toString()} style={styles.metricItem}>• {m}</Text>)}
            </View>
            <Text style={styles.tool}>Ferramenta: {dim.tool}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Section10;
