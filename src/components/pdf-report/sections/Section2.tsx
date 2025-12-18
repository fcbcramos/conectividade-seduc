import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle, PDFCard, PDFBadge } from '../components';

const Section2 = () => {
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
    levelCard: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 4,
      padding: spacing.md,
      marginBottom: spacing.sm,
    },
    levelHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: spacing.sm,
    },
    levelTitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
    },
    levelActors: {
      fontSize: fonts.small,
      color: colors.textMuted,
      marginBottom: spacing.sm,
    },
    responsibilityList: {
      gap: spacing.xs,
    },
    responsibilityItem: {
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'flex-start',
    },
    bullet: {
      fontSize: fonts.small,
      color: colors.primary,
    },
    responsibilityText: {
      fontSize: fonts.small,
      color: colors.text,
      flex: 1,
    },
    channelsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
    channelItem: {
      width: '48%',
      backgroundColor: colors.muted,
      borderRadius: 4,
      padding: spacing.sm,
      borderLeftWidth: 3,
      borderLeftColor: colors.primary,
    },
    channelName: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.xs,
    },
    channelDesc: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
    },
    sectionSubtitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
      marginTop: spacing.md,
    },
  });

  const governanceLevels = [
    {
      level: "Estratégico",
      actors: "Diretor UTD, Secretário SEDUC",
      color: colors.govBlue,
      responsibilities: [
        "Decisões estratégicas do contrato",
        "Alinhamento com políticas públicas",
        "Aprovação de mudanças significativas",
      ],
    },
    {
      level: "Tático",
      actors: "Gestor Operacional, Gestor Estratégico",
      color: colors.govGreen,
      responsibilities: [
        "Coordenação da execução contratual",
        "Monitoramento de indicadores",
        "Gestão de cronograma e recursos",
      ],
    },
    {
      level: "Operacional",
      actors: "Fiscais Técnicos, Equipe de Fiscalização",
      color: colors.warning,
      responsibilities: [
        "Fiscalização diária das atividades",
        "Validação de entregas técnicas",
        "Registro de ocorrências",
      ],
    },
  ];

  const channels = [
    { name: "Reuniões de Alinhamento", desc: "Quinzenais com equipe gestora" },
    { name: "Relatórios Mensais", desc: "Desempenho e indicadores" },
    { name: "Sistema de Chamados", desc: "Registro de incidentes" },
    { name: "Portal de Fiscalização", desc: "Acesso a dashboards" },
  ];

  return (
    <View style={styles.container}>
      <PDFSectionTitle 
        number={2}
        title="Modelo de Governança Contratual" 
        subtitle="Estrutura organizacional e fluxos de comunicação"
      />

      <Text style={styles.description}>
        O modelo de governança estabelece os níveis de decisão, responsabilidades e canais 
        de comunicação entre a SEDUC-PI e a contratada para garantir a execução eficiente do contrato.
      </Text>

      {/* Níveis de Governança */}
      <View style={styles.grid}>
        {governanceLevels.map((level, idx) => (
          <View key={`level-${idx}`} style={[styles.levelCard, { borderLeftWidth: 4, borderLeftColor: level.color }]}>
            <View style={styles.levelHeader}>
              <Text style={styles.levelTitle}>{level.level}</Text>
              <PDFBadge variant={idx === 0 ? 'info' : idx === 1 ? 'success' : 'warning'}>
                {`Nível ${idx + 1}`}
              </PDFBadge>
            </View>
            <Text style={styles.levelActors}>{level.actors}</Text>
            <View style={styles.responsibilityList}>
              {level.responsibilities.map((resp, rIdx) => (
                <View key={`resp-${rIdx}`} style={styles.responsibilityItem}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.responsibilityText}>{resp}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* Canais de Comunicação */}
      <Text style={styles.sectionSubtitle}>Canais de Comunicação</Text>
      <View style={styles.channelsGrid}>
        {channels.map((channel, idx) => (
          <View key={idx.toString()} style={styles.channelItem}>
            <Text style={styles.channelName}>{channel.name}</Text>
            <Text style={styles.channelDesc}>{channel.desc}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Section2;
