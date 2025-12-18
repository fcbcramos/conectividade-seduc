import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFBadge } from '../components';

const Section5 = () => {
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
    timeline: {
      gap: spacing.md,
    },
    phaseRow: {
      flexDirection: 'row',
      gap: spacing.md,
    },
    phaseCard: {
      flex: 1,
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.md,
      borderTopWidth: 4,
    },
    phaseHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.sm,
    },
    phaseName: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
    },
    phaseDesc: {
      fontSize: fonts.small,
      color: colors.textMuted,
      marginBottom: spacing.sm,
      lineHeight: 1.4,
    },
    phasePeriod: {
      fontSize: fonts.tiny,
      color: colors.primary,
      fontWeight: 'bold',
      marginBottom: spacing.sm,
    },
    activityList: {
      gap: spacing.xs,
    },
    activityItem: {
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'flex-start',
    },
    bullet: {
      fontSize: fonts.tiny,
      color: colors.primary,
    },
    activityText: {
      fontSize: fonts.tiny,
      color: colors.text,
      flex: 1,
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.md,
      marginTop: spacing.lg,
    },
  });

  const phases = [
    {
      name: "Planejamento",
      period: "Meses 1-2",
      color: colors.govBlue,
      description: "Levantamento técnico, cronograma detalhado e mobilização inicial de recursos.",
      activities: ["Análise de requisitos", "Cronograma executivo", "Mobilização de equipes"],
    },
    {
      name: "Implantação",
      period: "Meses 3-12",
      color: colors.govGreen,
      description: "Instalação de infraestrutura em ondas, cobrindo todas as escolas da rede.",
      activities: ["Instalação em ondas", "Configuração de ativos", "Testes de qualidade"],
    },
    {
      name: "Operação Assistida",
      period: "Meses 13-18",
      color: colors.warning,
      description: "Estabilização dos serviços com suporte intensivo e ajustes operacionais.",
      activities: ["Suporte intensivo", "Ajustes operacionais", "Treinamento de usuários"],
    },
    {
      name: "Operação Plena",
      period: "Meses 19-36",
      color: colors.primary,
      description: "Operação regular com monitoramento contínuo e cumprimento de SLAs.",
      activities: ["Monitoramento 24x7", "Manutenção preventiva", "Relatórios mensais"],
    },
  ];

  const milestones = [
    { name: "Início do Contrato", month: "Jan/2026", status: "Planejado" },
    { name: "Conclusão Fase Piloto", month: "Fev/2026", status: "Planejado" },
    { name: "50% das Escolas", month: "Mai/2026", status: "Planejado" },
    { name: "100% das Escolas", month: "Jul/2026", status: "Planejado" },
    { name: "Operação Plena", month: "Jul/2027", status: "Planejado" },
    { name: "Encerramento", month: "Dez/2028", status: "Planejado" },
  ];

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={5}
        title="Ciclo de Vida da Execução" 
        subtitle="Fases do projeto e marcos principais"
      />

      <Text style={styles.description}>
        O ciclo de vida do contrato está dividido em fases distintas, cada uma com objetivos específicos, 
        atividades planejadas e entregas esperadas.
      </Text>

      {/* Fases - Grid 2x2 */}
      <View style={styles.timeline}>
        <View style={styles.phaseRow}>
          {phases.slice(0, 2).map((phase, idx) => (
            <View key={idx} style={[styles.phaseCard, { borderTopColor: phase.color }]}>
              <View style={styles.phaseHeader}>
                <Text style={styles.phaseName}>{phase.name}</Text>
                <PDFBadge variant={idx === 0 ? 'info' : 'success'}>{phase.period}</PDFBadge>
              </View>
              <Text style={styles.phaseDesc}>{phase.description}</Text>
              <View style={styles.activityList}>
                {phase.activities.map((activity, aIdx) => (
                  <View key={aIdx} style={styles.activityItem}>
                    <Text style={[styles.bullet, { color: phase.color }]}>▸</Text>
                    <Text style={styles.activityText}>{activity}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
        <View style={styles.phaseRow}>
          {phases.slice(2, 4).map((phase, idx) => (
            <View key={idx} style={[styles.phaseCard, { borderTopColor: phase.color }]}>
              <View style={styles.phaseHeader}>
                <Text style={styles.phaseName}>{phase.name}</Text>
                <PDFBadge variant={idx === 0 ? 'warning' : 'pending'}>{phase.period}</PDFBadge>
              </View>
              <Text style={styles.phaseDesc}>{phase.description}</Text>
              <View style={styles.activityList}>
                {phase.activities.map((activity, aIdx) => (
                  <View key={aIdx} style={styles.activityItem}>
                    <Text style={[styles.bullet, { color: phase.color }]}>▸</Text>
                    <Text style={styles.activityText}>{activity}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>

      {/* Marcos */}
      <Text style={styles.sectionSubtitle}>Marcos Principais</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm }}>
        {milestones.map((milestone, idx) => (
          <View key={idx} style={{ 
            width: '32%', 
            backgroundColor: colors.muted, 
            padding: spacing.sm, 
            borderRadius: 4,
            borderLeftWidth: 3,
            borderLeftColor: colors.primary,
          }}>
            <Text style={{ fontSize: fonts.tiny, color: colors.primary, fontWeight: 'bold' }}>{milestone.month}</Text>
            <Text style={{ fontSize: fonts.small, color: colors.text }}>{milestone.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Section5;
