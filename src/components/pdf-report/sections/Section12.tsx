import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFTable, PDFBadge } from '../components';
import { riskMatrix } from '@/data/contractData';

const Section12 = () => {
  const styles = StyleSheet.create({
    container: { flex: 1 },
    description: { fontSize: fonts.body, color: colors.textMuted, marginBottom: spacing.lg, lineHeight: 1.5 },
  });

  const columns = [
    { key: 'id', header: 'ID', width: 35 },
    { key: 'risk', header: 'Risco' },
    { key: 'phase', header: 'Fase', width: 50 },
    { key: 'riskLevel', header: 'Nível', width: 50 },
    { key: 'treatment', header: 'Tratamento', width: 60 },
  ];

  const tableData = riskMatrix.slice(0, 8).map(r => ({
    id: r.id,
    risk: r.risk.length > 60 ? r.risk.substring(0, 57) + '...' : r.risk,
    phase: r.phase,
    riskLevel: r.riskLevel,
    treatment: r.treatment,
  }));

  return (
    <View style={styles.container}>
      <PDFSectionTitle number={12} title="Gestão de Riscos" subtitle="Identificação e tratamento de riscos contratuais" />
      <Text style={styles.description}>A matriz de riscos identifica os principais riscos do contrato, classificados por probabilidade e impacto, com ações preventivas e de contingência.</Text>
      <PDFTable columns={columns} data={tableData} />
    </View>
  );
};

export default Section12;
