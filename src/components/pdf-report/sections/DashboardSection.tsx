import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFMetricCard, PDFTable, PDFBadge } from '../components';
import { basicInfo, kpiData, disbursementData, slaMetrics } from '@/data/contractData';

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
};

const DashboardSection = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    kpiGrid: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    infoGrid: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    infoCard: {
      flex: 1,
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.md,
      borderLeftWidth: 3,
      borderLeftColor: colors.primary,
    },
    infoLabel: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
      marginBottom: spacing.xs,
    },
    infoValue: {
      fontSize: fonts.small,
      color: colors.text,
      fontWeight: 'bold',
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
    slaGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
    slaItem: {
      width: '48%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.sm,
    },
    slaName: {
      fontSize: fonts.small,
      color: colors.text,
    },
    slaTarget: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.primary,
    },
  });

  const disbursementColumns = [
    { key: 'phase', header: 'Fase', width: 50 },
    { key: 'name', header: 'Descrição' },
    { key: 'month', header: 'Mês', width: 50 },
    { key: 'percentage', header: '%', width: 30 },
    { key: 'formattedValue', header: 'Valor', width: 90 },
    { key: 'status', header: 'Status', width: 60 },
  ];

  const disbursementTableData = disbursementData.map(d => ({
    ...d,
    formattedValue: formatCurrency(d.value),
    percentage: `${d.percentage}%`,
  }));

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        title="Dashboard Executivo" 
        subtitle="Visão consolidada dos indicadores do contrato"
      />

      {/* Informações Básicas */}
      <View style={styles.infoGrid}>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Processo</Text>
          <Text style={styles.infoValue}>{basicInfo.processNumber}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Período de Execução</Text>
          <Text style={styles.infoValue}>{kpiData.executionPeriod}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Modelo de Contratação</Text>
          <Text style={styles.infoValue}>{kpiData.contractModel}</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Status</Text>
          <Text style={styles.infoValue}>{kpiData.status}</Text>
        </View>
      </View>

      {/* KPIs */}
      <View style={styles.kpiGrid}>
        <PDFMetricCard 
          value={formatCurrency(kpiData.totalValue)} 
          label="Valor Total" 
          color={colors.primary}
        />
        <PDFMetricCard 
          value={formatCurrency(kpiData.fonte14172)} 
          label="Lei 14.172/2021" 
          color={colors.govGreen}
        />
        <PDFMetricCard 
          value={formatCurrency(kpiData.fontTesouro)} 
          label="Tesouro Estadual" 
          color={colors.govBlue}
        />
        <PDFMetricCard 
          value={`${kpiData.totalPhases} Fases`} 
          label="Desembolso" 
          color={colors.secondary}
        />
      </View>

      {/* Cronograma de Desembolso */}
      <Text style={styles.sectionSubtitle}>Cronograma de Desembolso</Text>
      <PDFTable 
        columns={disbursementColumns} 
        data={disbursementTableData}
      />

      {/* SLAs */}
      <Text style={styles.sectionSubtitle}>Indicadores de SLA</Text>
      <View style={styles.slaGrid}>
        {slaMetrics.map((sla, idx) => (
          <View key={idx} style={styles.slaItem}>
            <Text style={styles.slaName}>{sla.metric}</Text>
            <Text style={styles.slaTarget}>{sla.target}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DashboardSection;
