import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFTable, PDFMetricCard } from '../components';
import { disbursementData, kpiData } from '@/data/contractData';

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
};

const Section7 = () => {
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
    chartPlaceholder: {
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.lg,
      alignItems: 'center',
      marginBottom: spacing.lg,
    },
    barContainer: {
      width: '100%',
      gap: spacing.sm,
    },
    barRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
    },
    barLabel: {
      width: 50,
      fontSize: fonts.tiny,
      color: colors.text,
      textAlign: 'right',
    },
    barWrapper: {
      flex: 1,
      height: 16,
      backgroundColor: colors.borderLight,
      borderRadius: 4,
      overflow: 'hidden',
    },
    bar: {
      height: '100%',
      backgroundColor: colors.primary,
      borderRadius: 4,
    },
    barValue: {
      width: 80,
      fontSize: fonts.tiny,
      color: colors.textMuted,
    },
  });

  const columns = [
    { key: 'phase', header: 'Fase', width: 50 },
    { key: 'name', header: 'Descrição' },
    { key: 'month', header: 'Mês', width: 55 },
    { key: 'percentage', header: '%', width: 35, align: 'center' as const },
    { key: 'formattedValue', header: 'Valor (R$)', width: 100, align: 'right' as const },
    { key: 'status', header: 'Status', width: 65 },
  ];

  const tableData = disbursementData.map(d => ({
    ...d,
    formattedValue: formatCurrency(d.value),
    percentage: `${d.percentage}%`,
  }));

  const maxPercentage = Math.max(...disbursementData.map(d => d.percentage));

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={7}
        title="Cronograma de Desembolso" 
        subtitle="Planejamento financeiro e fluxo de pagamentos"
      />

      <Text style={styles.description}>
        O cronograma de desembolso está vinculado ao cumprimento das entregas de cada fase, 
        garantindo alinhamento entre execução física e financeira do contrato.
      </Text>

      {/* Resumo Financeiro */}
      <View style={styles.summaryRow}>
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
          label="Parcelas"
          color={colors.secondary}
        />
      </View>

      {/* Gráfico de Barras Simplificado */}
      <Text style={styles.sectionSubtitle}>Distribuição por Fase</Text>
      <View style={styles.chartPlaceholder}>
        <View style={styles.barContainer}>
          {disbursementData.map((d, idx) => (
            <View key={idx} style={styles.barRow}>
              <Text style={styles.barLabel}>{d.phase}</Text>
              <View style={styles.barWrapper}>
                <View style={[styles.bar, { width: `${(d.percentage / maxPercentage) * 100}%` }]} />
              </View>
              <Text style={styles.barValue}>{d.percentage}% • {formatCurrency(d.value)}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Tabela Detalhada */}
      <Text style={styles.sectionSubtitle}>Detalhamento do Cronograma</Text>
      <PDFTable columns={columns} data={tableData} />
    </View>
  );
};

export default Section7;
