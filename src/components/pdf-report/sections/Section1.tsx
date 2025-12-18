import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFList, PDFBadge, PDFMetricCard } from '../components';
import { basicInfo, kpiData } from '@/data/contractData';

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
};

const Section1 = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    objectBox: {
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.lg,
      marginBottom: spacing.lg,
      borderLeftWidth: 4,
      borderLeftColor: colors.primary,
    },
    objectText: {
      fontSize: fonts.body,
      color: colors.text,
      lineHeight: 1.6,
    },
    grid: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    column: {
      flex: 1,
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    highlightGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
      marginBottom: spacing.lg,
    },
    highlightItem: {
      width: '48%',
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'center',
      backgroundColor: colors.muted,
      padding: spacing.sm,
      borderRadius: 4,
    },
    highlightDot: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.govGreen,
    },
    highlightText: {
      fontSize: fonts.small,
      color: colors.text,
      flex: 1,
    },
    metricsRow: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    infoGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
    infoItem: {
      width: '48%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: spacing.sm,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderLight,
    },
    infoLabel: {
      fontSize: fonts.small,
      color: colors.textMuted,
    },
    infoValue: {
      fontSize: fonts.small,
      color: colors.text,
      fontWeight: 'bold',
    },
  });

  const highlights = [
    "Conectividade de alta velocidade",
    "Infraestrutura Wi-Fi completa",
    "Suporte técnico 24x7",
    "Monitoramento em tempo real",
    "Modelo Turn-Key (HaaS)",
    "SLAs rigorosos",
  ];

  const serviceMetrics = [
    { value: "1.142", label: "Escolas" },
    { value: "100%", label: "Cobertura Wi-Fi" },
    { value: "99,5%", label: "Disponibilidade" },
    { value: "24x7", label: "Suporte" },
  ];

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={1}
        title="Visão Geral do Contrato" 
        subtitle="Resumo executivo das características principais da contratação"
      />

      {/* Objeto */}
      <View style={styles.objectBox}>
        <Text style={styles.objectText}>{basicInfo.object}</Text>
      </View>

      {/* Destaques */}
      <Text style={styles.sectionSubtitle}>Destaques do Contrato</Text>
      <View style={styles.highlightGrid}>
        {highlights.map((item, idx) => (
          <View key={idx} style={styles.highlightItem}>
            <View style={styles.highlightDot} />
            <Text style={styles.highlightText}>{item}</Text>
          </View>
        ))}
      </View>

      {/* Métricas de Serviço */}
      <Text style={styles.sectionSubtitle}>Métricas de Serviço</Text>
      <View style={styles.metricsRow}>
        {serviceMetrics.map((metric, idx) => (
          <PDFMetricCard 
            key={idx}
            value={metric.value} 
            label={metric.label}
            color={colors.primary}
          />
        ))}
      </View>

      {/* Grid de Informações */}
      <View style={styles.grid}>
        <View style={styles.column}>
          <PDFCard title="Dados Contratuais" variant="accent" accentColor={colors.govBlue}>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Valor Total</Text>
                <Text style={styles.infoValue}>{formatCurrency(kpiData.totalValue)}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Período</Text>
                <Text style={styles.infoValue}>{kpiData.executionPeriod}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Início</Text>
                <Text style={styles.infoValue}>{kpiData.startDate}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Modelo</Text>
                <Text style={styles.infoValue}>{kpiData.contractModel}</Text>
              </View>
            </View>
          </PDFCard>
        </View>
        
        <View style={styles.column}>
          <PDFCard title="Fontes de Financiamento" variant="accent" accentColor={colors.govGreen}>
            <View style={styles.infoGrid}>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Lei 14.172/2021</Text>
                <Text style={styles.infoValue}>{formatCurrency(kpiData.fonte14172)}</Text>
              </View>
              <View style={styles.infoItem}>
                <Text style={styles.infoLabel}>Tesouro Estadual</Text>
                <Text style={styles.infoValue}>{formatCurrency(kpiData.fontTesouro)}</Text>
              </View>
            </View>
            <Text style={[styles.infoLabel, { marginTop: spacing.md }]}>
              Referência: {basicInfo.normativeReference}
            </Text>
          </PDFCard>
        </View>
      </View>
    </View>
  );
};

export default Section1;
