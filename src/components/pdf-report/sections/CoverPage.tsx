import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { basicInfo } from '@/data/contractData';
import { pdfImages } from '../imageUrls';

const CoverPage = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '20mm 18mm',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
    },
    // Header
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: spacing.xl,
    },
    seducLogo: {
      width: 140,
      height: 50,
      objectFit: 'contain',
    },
    // Sidebar
    sidebar: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 8,
      flexDirection: 'column',
    },
    sidebarStripe: {
      flex: 1,
    },
    // Content
    content: {
      flex: 1,
      paddingLeft: 8,
    },
    programName: {
      fontSize: 42,
      fontWeight: 'bold',
      color: colors.govBlue,
      marginBottom: spacing.md,
      letterSpacing: 1,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
    },
    subtitle: {
      fontSize: 12,
      color: colors.textMuted,
      marginBottom: spacing.xxl,
      lineHeight: 1.5,
      maxWidth: 420,
    },
    // Info Sections
    sectionsContainer: {
      flexDirection: 'row',
      gap: spacing.xl,
      marginTop: spacing.lg,
    },
    infoSection: {
      flex: 1,
      backgroundColor: colors.muted,
      borderRadius: 6,
      padding: spacing.lg,
      borderLeftWidth: 3,
      borderLeftColor: colors.govBlue,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.sm,
      marginBottom: spacing.md,
      paddingBottom: spacing.sm,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderLight,
    },
    sectionIcon: {
      width: 20,
      height: 20,
      borderRadius: 10,
      backgroundColor: colors.govBlue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionIconText: {
      fontSize: 10,
      color: colors.background,
      fontWeight: 'bold',
    },
    sectionTitle: {
      fontSize: 10,
      fontWeight: 'bold',
      color: colors.govBlue,
      textTransform: 'uppercase',
      letterSpacing: 0.5,
    },
    // Process Info Rows
    infoRow: {
      flexDirection: 'row',
      marginBottom: spacing.sm,
    },
    infoLabel: {
      fontSize: 8,
      color: colors.textMuted,
      width: 80,
    },
    infoValue: {
      fontSize: 8,
      color: colors.text,
      fontWeight: 'bold',
      flex: 1,
    },
    // Team Grid
    teamGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: spacing.sm,
    },
    teamMember: {
      width: '48%',
      marginBottom: spacing.xs,
    },
    teamRole: {
      fontSize: 7,
      color: colors.textMuted,
      marginBottom: 1,
    },
    teamName: {
      fontSize: 8,
      color: colors.text,
      fontWeight: 'bold',
    },
    // Footer
    footer: {
      paddingTop: spacing.lg,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      marginTop: spacing.lg,
    },
    footerLogos: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.xxl,
      marginBottom: spacing.md,
    },
    footerLogo: {
      height: 32,
      objectFit: 'contain',
    },
    footerLogoSmall: {
      height: 26,
      objectFit: 'contain',
    },
    footerDate: {
      fontSize: 8,
      color: colors.textMuted,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.container}>
      {/* Sidebar colorida */}
      <View style={styles.sidebar}>
        <View style={[styles.sidebarStripe, { backgroundColor: colors.govBlue }]} />
        <View style={[styles.sidebarStripe, { backgroundColor: colors.govYellow }]} />
        <View style={[styles.sidebarStripe, { backgroundColor: colors.govRed }]} />
        <View style={[styles.sidebarStripe, { backgroundColor: colors.govGreen }]} />
      </View>

      {/* Header com logo SEDUC */}
      <View style={styles.header}>
        <Image src={pdfImages.seducLogo} style={styles.seducLogo} />
      </View>

      {/* Conteúdo principal */}
      <View style={styles.content}>
        <Text style={styles.programName}>Caravana Digital</Text>
        <Text style={styles.title}>REGC - Relatório Executivo de Governança Contratual</Text>
        <Text style={styles.subtitle}>{basicInfo.object}</Text>

        {/* Seções de informação lado a lado */}
        <View style={styles.sectionsContainer}>
          {/* Informações do Processo */}
          <View style={styles.infoSection}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIcon}>
                <Text style={styles.sectionIconText}>i</Text>
              </View>
              <Text style={styles.sectionTitle}>Informações do Processo</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Processo nº</Text>
              <Text style={styles.infoValue}>{basicInfo.processNumber}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Data</Text>
              <Text style={styles.infoValue}>{basicInfo.elaborationDate}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Área Requisitante</Text>
              <Text style={styles.infoValue}>{basicInfo.requestingArea}</Text>
            </View>
          </View>

          {/* Grupo Técnico de Planejamento */}
          <View style={styles.infoSection}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIcon}>
                <Text style={styles.sectionIconText}>👥</Text>
              </View>
              <Text style={styles.sectionTitle}>Grupo Técnico de Planejamento</Text>
            </View>
            <View style={styles.teamGrid}>
              {basicInfo.team.map((member, index) => (
                <View key={index} style={styles.teamMember}>
                  <Text style={styles.teamRole}>{member.role}</Text>
                  <Text style={styles.teamName}>{member.name}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>

      {/* Footer com logos institucionais */}
      <View style={styles.footer}>
        <View style={styles.footerLogos}>
          <Image src={pdfImages.mecLogo} style={styles.footerLogo} />
          <Image src={pdfImages.escolasConectadasLogo} style={styles.footerLogoSmall} />
          <Image src={pdfImages.novoPacLogo} style={styles.footerLogoSmall} />
        </View>
        <Text style={styles.footerDate}>
          Teresina - PI, {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
        </Text>
      </View>
    </View>
  );
};

export default CoverPage;
