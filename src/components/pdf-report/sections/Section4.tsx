import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFList, PDFTable } from '../components';
import { governanceRoles } from '@/data/contractData';

const Section4 = () => {
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
    grid: {
      flexDirection: 'row',
      gap: spacing.md,
      marginBottom: spacing.lg,
    },
    column: {
      flex: 1,
    },
    roleHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      marginBottom: spacing.sm,
    },
    roleIcon: {
      width: 24,
      height: 24,
      borderRadius: 12,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
    },
    roleIconText: {
      fontSize: fonts.small,
      color: colors.background,
      fontWeight: 'bold',
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
  });

  const interactionMatrix = [
    { activity: 'Planejamento Técnico', contractor: 'Elabora', contracting: 'Aprova' },
    { activity: 'Instalação de Equipamentos', contractor: 'Executa', contracting: 'Fiscaliza' },
    { activity: 'Monitoramento 24x7', contractor: 'Opera', contracting: 'Acompanha' },
    { activity: 'Suporte Técnico', contractor: 'Atende', contracting: 'Valida' },
    { activity: 'Relatórios Mensais', contractor: 'Elabora', contracting: 'Analisa' },
    { activity: 'Gestão de SLA', contractor: 'Reporta', contracting: 'Audita' },
    { activity: 'Manutenção Preventiva', contractor: 'Executa', contracting: 'Fiscaliza' },
    { activity: 'Resolução de Incidentes', contractor: 'Resolve', contracting: 'Acompanha' },
  ];

  const matrixColumns = [
    { key: 'activity', header: 'Atividade' },
    { key: 'contractor', header: 'Contratada', width: 80 },
    { key: 'contracting', header: 'SEDUC-PI', width: 80 },
  ];

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={4}
        title="Papéis e Responsabilidades" 
        subtitle="Definição clara das atribuições de cada parte"
      />

      <Text style={styles.description}>
        A definição clara de papéis e responsabilidades é fundamental para o sucesso da execução 
        contratual, estabelecendo as obrigações de cada parte de forma inequívoca.
      </Text>

      {/* Cards de Responsabilidades */}
      <View style={styles.grid}>
        <View style={styles.column}>
          <PDFCard title="Contratada" variant="accent" accentColor={colors.govBlue}>
            <View style={styles.roleHeader}>
              <View style={[styles.roleIcon, { backgroundColor: colors.govBlue }]}>
                <Text style={styles.roleIconText}>C</Text>
              </View>
              <Text style={{ fontSize: fonts.small, color: colors.textMuted }}>
                {governanceRoles.contractor.name}
              </Text>
            </View>
            <PDFList items={governanceRoles.contractor.responsibilities} bulletColor={colors.govBlue} />
          </PDFCard>
        </View>
        
        <View style={styles.column}>
          <PDFCard title="SEDUC-PI (Contratante)" variant="accent" accentColor={colors.govGreen}>
            <View style={styles.roleHeader}>
              <View style={[styles.roleIcon, { backgroundColor: colors.govGreen }]}>
                <Text style={styles.roleIconText}>S</Text>
              </View>
              <Text style={{ fontSize: fonts.small, color: colors.textMuted }}>
                {governanceRoles.contracting.name}
              </Text>
            </View>
            <PDFList items={governanceRoles.contracting.responsibilities} bulletColor={colors.govGreen} />
          </PDFCard>
        </View>
      </View>

      {/* Matriz de Interação */}
      <Text style={styles.sectionSubtitle}>Matriz de Interação</Text>
      <PDFTable columns={matrixColumns} data={interactionMatrix} />
    </View>
  );
};

export default Section4;
