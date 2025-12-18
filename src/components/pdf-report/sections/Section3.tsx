import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFTable, PDFBadge } from '../components';
import { solutionArchitecture, slaMetrics } from '@/data/contractData';

const Section3 = () => {
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
    architectureGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
      marginBottom: spacing.lg,
    },
    archItem: {
      width: '32%',
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.sm,
      borderTopWidth: 3,
    },
    archName: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.xs,
    },
    archShort: {
      fontSize: fonts.tiny,
      color: colors.primary,
      fontWeight: 'bold',
      marginBottom: spacing.xs,
    },
    archDesc: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
      lineHeight: 1.3,
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    grid: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    column: {
      flex: 1,
    },
    specItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: spacing.xs,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderLight,
    },
    specLabel: {
      fontSize: fonts.small,
      color: colors.text,
    },
    specValue: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });

  const slaColumns = [
    { key: 'metric', header: 'Indicador' },
    { key: 'target', header: 'Meta', width: 70 },
    { key: 'status', header: 'Status', width: 70 },
  ];

  const getArchColor = (id: string) => {
    const colorMap: Record<string, string> = {
      wan: colors.govGreen,
      edge: colors.govRed,
      sqs: colors.warning,
      lan: colors.govBlue,
      sdn: colors.primary,
      sgi: colors.govGreen,
    };
    return colorMap[id] || colors.primary;
  };

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={3}
        title="Especificações Técnicas" 
        subtitle="Arquitetura da solução e requisitos de qualidade"
      />

      <Text style={styles.description}>
        A solução integrada contempla infraestrutura de conectividade WAN, segurança de borda, 
        distribuição LAN/WLAN, medição de qualidade e gestão centralizada por escola.
      </Text>

      {/* Arquitetura */}
      <Text style={styles.sectionSubtitle}>Arquitetura da Solução</Text>
      <View style={styles.architectureGrid}>
        {solutionArchitecture.map((arch) => (
          <View key={arch.id} style={[styles.archItem, { borderTopColor: getArchColor(arch.id) }]}>
            <Text style={styles.archShort}>{arch.shortName}</Text>
            <Text style={styles.archName}>{arch.name}</Text>
            <Text style={styles.archDesc}>{arch.description}</Text>
          </View>
        ))}
      </View>

      {/* Especificações e SLAs */}
      <View style={styles.grid}>
        <View style={styles.column}>
          <PDFCard title="Modelo Turn-Key / HaaS" variant="accent">
            <View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Modelo de Contratação</Text>
                <Text style={styles.specValue}>Turn-Key</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Tipo de Serviço</Text>
                <Text style={styles.specValue}>Hardware as a Service</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>Suporte</Text>
                <Text style={styles.specValue}>24x7</Text>
              </View>
              <View style={styles.specItem}>
                <Text style={styles.specLabel}>NOC</Text>
                <Text style={styles.specValue}>Monitoramento Contínuo</Text>
              </View>
            </View>
          </PDFCard>
        </View>
        
        <View style={styles.column}>
          <PDFCard title="Níveis de Serviço (SLA)" variant="accent" accentColor={colors.govGreen}>
            <PDFTable columns={slaColumns} data={slaMetrics} />
          </PDFCard>
        </View>
      </View>
    </View>
  );
};

export default Section3;
