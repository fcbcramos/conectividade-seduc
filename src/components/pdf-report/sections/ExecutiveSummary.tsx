import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { kpiData, disbursementData, slaMetrics } from '@/data/contractData';
import { DollarIcon, SchoolIcon, CalendarIcon, CheckIcon, ChartIcon } from '../icons/PDFIcons';

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const ExecutiveSummary = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: spacing.lg,
    },
    // Título da página
    pageTitle: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.govBlue,
      textAlign: 'center',
      marginBottom: 6,
    },
    pageSubtitle: {
      fontSize: 11,
      color: colors.textMuted,
      textAlign: 'center',
      marginBottom: 28,
    },
    // KPIs principais
    kpiSection: {
      marginBottom: 28,
    },
    kpiGrid: {
      flexDirection: 'row',
      gap: 14,
    },
    kpiCard: {
      flex: 1,
      backgroundColor: '#f8fafc',
      borderRadius: 10,
      padding: 16,
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#e2e8f0',
    },
    kpiCardHighlight: {
      backgroundColor: '#f0f9ff',
      borderColor: colors.govBlue,
      borderWidth: 1.5,
    },
    kpiIconContainer: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
      borderWidth: 2,
      borderColor: '#e2e8f0',
    },
    kpiValue: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.govBlue,
      marginBottom: 4,
      textAlign: 'center',
    },
    kpiLabel: {
      fontSize: 9,
      color: colors.textMuted,
      textAlign: 'center',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    // Cronograma de desembolso
    scheduleSection: {
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 18,
      marginBottom: 20,
      borderWidth: 1,
      borderColor: '#e2e8f0',
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16,
      paddingBottom: 12,
      borderBottomWidth: 2,
      borderBottomColor: colors.govBlue,
    },
    sectionIconBg: {
      width: 32,
      height: 32,
      borderRadius: 8,
      backgroundColor: '#f0f9ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionTitle: {
      fontSize: 13,
      fontWeight: 'bold',
      color: colors.foreground,
      letterSpacing: 0.3,
    },
    // Barras de progresso do cronograma
    scheduleItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      gap: 10,
    },
    schedulePhase: {
      width: 50,
      fontSize: 9,
      fontWeight: 'bold',
      color: colors.foreground,
    },
    scheduleBarContainer: {
      flex: 1,
      height: 16,
      backgroundColor: '#f1f5f9',
      borderRadius: 8,
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
    },
    scheduleBar: {
      height: '100%',
      borderRadius: 8,
    },
    schedulePercentText: {
      position: 'absolute',
      left: 8,
      fontSize: 8,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    scheduleValue: {
      width: 70,
      fontSize: 8,
      color: colors.textMuted,
      textAlign: 'right',
    },
    scheduleMonth: {
      width: 45,
      fontSize: 8,
      color: colors.text,
      fontWeight: 'bold',
      textAlign: 'right',
    },
    // Seções inferiores (Fontes e SLAs lado a lado)
    bottomSection: {
      flexDirection: 'row',
      gap: 16,
    },
    infoCard: {
      flex: 1,
      backgroundColor: '#ffffff',
      borderRadius: 10,
      padding: 16,
      borderWidth: 1,
      borderColor: '#e2e8f0',
    },
    infoCardGreen: {
      borderLeftWidth: 4,
      borderLeftColor: colors.govGreen,
    },
    infoCardBlue: {
      borderLeftWidth: 4,
      borderLeftColor: colors.govBlue,
    },
    cardTitle: {
      fontSize: 11,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: 12,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    // Fontes de recurso
    fundingRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#f1f5f9',
    },
    fundingLabel: {
      fontSize: 9,
      color: colors.text,
    },
    fundingValue: {
      fontSize: 9,
      fontWeight: 'bold',
      color: colors.govBlue,
    },
    // SLAs
    slaRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      marginBottom: 8,
    },
    slaBadge: {
      width: 8,
      height: 8,
      borderRadius: 4,
      backgroundColor: colors.govGreen,
    },
    slaMetric: {
      flex: 1,
      fontSize: 9,
      color: colors.text,
    },
    slaTarget: {
      fontSize: 9,
      fontWeight: 'bold',
      color: colors.govGreen,
    },
    // Modelo de contratação
    modelBadge: {
      backgroundColor: '#f0fdf4',
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 6,
      alignSelf: 'flex-start',
      marginTop: 8,
    },
    modelText: {
      fontSize: 9,
      fontWeight: 'bold',
      color: colors.govGreen,
    },
  });

  const getBarColor = (type: string) => {
    switch (type) {
      case 'planejamento': return colors.govBlue;
      case 'mobilizacao': return '#6366f1';
      case 'execucao': return colors.govGreen;
      case 'entrega': return '#f59e0b';
      default: return colors.govBlue;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Sumário Executivo</Text>
      <Text style={styles.pageSubtitle}>Visão consolidada dos principais indicadores do contrato</Text>

      {/* KPIs Principais */}
      <View style={styles.kpiSection}>
        <View style={styles.kpiGrid}>
          <View style={[styles.kpiCard, styles.kpiCardHighlight]}>
            <View style={styles.kpiIconContainer}>
              <DollarIcon size={22} color={colors.govBlue} />
            </View>
            <Text style={styles.kpiValue}>{formatCurrency(kpiData.totalValue)}</Text>
            <Text style={styles.kpiLabel}>Valor Total</Text>
          </View>
          
          <View style={styles.kpiCard}>
            <View style={styles.kpiIconContainer}>
              <SchoolIcon size={22} color={colors.govBlue} />
            </View>
            <Text style={styles.kpiValue}>1.142</Text>
            <Text style={styles.kpiLabel}>Escolas</Text>
          </View>
          
          <View style={styles.kpiCard}>
            <View style={styles.kpiIconContainer}>
              <CalendarIcon size={22} color={colors.govBlue} />
            </View>
            <Text style={styles.kpiValue}>{kpiData.executionPeriod}</Text>
            <Text style={styles.kpiLabel}>Período</Text>
          </View>
          
          <View style={styles.kpiCard}>
            <View style={styles.kpiIconContainer}>
              <CheckIcon size={22} color={colors.govGreen} />
            </View>
            <Text style={[styles.kpiValue, { color: colors.govGreen }]}>99,5%</Text>
            <Text style={styles.kpiLabel}>SLA Alvo</Text>
          </View>
        </View>
      </View>

      {/* Cronograma de Desembolso */}
      <View style={styles.scheduleSection}>
        <View style={styles.sectionHeader}>
          <View style={styles.sectionIconBg}>
            <ChartIcon size={18} color={colors.govBlue} />
          </View>
          <Text style={styles.sectionTitle}>Cronograma de Desembolso</Text>
        </View>
        
        {disbursementData.map((item, index) => (
          <View key={index} style={styles.scheduleItem}>
            <Text style={styles.schedulePhase}>{item.phase}</Text>
            <View style={styles.scheduleBarContainer}>
              <View 
                style={[
                  styles.scheduleBar, 
                  { 
                    width: `${item.percentage * 2}%`,
                    backgroundColor: getBarColor(item.type)
                  }
                ]} 
              />
            </View>
            <Text style={styles.scheduleValue}>{item.percentage}%</Text>
            <Text style={styles.scheduleMonth}>{item.month}</Text>
          </View>
        ))}
      </View>

      {/* Seções Inferiores */}
      <View style={styles.bottomSection}>
        {/* Fontes de Recurso */}
        <View style={[styles.infoCard, styles.infoCardBlue]}>
          <Text style={styles.cardTitle}>Fontes de Recurso</Text>
          <View style={styles.fundingRow}>
            <Text style={styles.fundingLabel}>Lei nº 14.172/2021</Text>
            <Text style={styles.fundingValue}>{formatCurrency(kpiData.fonte14172)}</Text>
          </View>
          <View style={styles.fundingRow}>
            <Text style={styles.fundingLabel}>Tesouro Estadual</Text>
            <Text style={styles.fundingValue}>{formatCurrency(kpiData.fontTesouro)}</Text>
          </View>
          <View style={[styles.fundingRow, { borderBottomWidth: 0 }]}>
            <Text style={[styles.fundingLabel, { fontWeight: 'bold' }]}>Total</Text>
            <Text style={styles.fundingValue}>{formatCurrency(kpiData.totalValue)}</Text>
          </View>
          <View style={styles.modelBadge}>
            <Text style={styles.modelText}>{kpiData.contractModel}</Text>
          </View>
        </View>

        {/* Indicadores SLA */}
        <View style={[styles.infoCard, styles.infoCardGreen]}>
          <Text style={styles.cardTitle}>Indicadores SLA</Text>
          {slaMetrics.slice(0, 5).map((sla, index) => (
            <View key={index} style={styles.slaRow}>
              <View style={styles.slaBadge} />
              <Text style={styles.slaMetric}>{sla.metric}</Text>
              <Text style={styles.slaTarget}>{sla.target}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ExecutiveSummary;
