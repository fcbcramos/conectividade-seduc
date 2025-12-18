import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { basicInfo } from '@/data/contractData';
import { pdfImages } from '../imageUrls';
import { InfoIcon, UsersIcon } from '../icons/PDFIcons';

const CoverPage = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '24mm 20mm',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
    },
    // Header
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginBottom: 28,
    },
    seducLogo: {
      width: 150,
      height: 54,
      objectFit: 'contain',
    },
    // Sidebar
    sidebar: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 10,
      flexDirection: 'column',
    },
    sidebarStripe: {
      flex: 1,
    },
    // Content
    content: {
      flex: 1,
      paddingLeft: 12,
    },
    programName: {
      fontSize: 52,
      fontWeight: 'bold',
      color: colors.govBlue,
      marginBottom: 12,
      letterSpacing: 2,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#0f172a',
      marginBottom: 8,
    },
    subtitle: {
      fontSize: 12,
      color: '#64748b',
      marginBottom: 32,
      lineHeight: 1.6,
      maxWidth: 440,
    },
    // Info Sections
    sectionsContainer: {
      flexDirection: 'row',
      gap: 24,
      marginTop: 24,
    },
    infoSection: {
      flex: 1,
      borderRadius: 10,
      padding: 18,
      borderLeftWidth: 4,
    },
    infoSectionProcess: {
      backgroundColor: '#f0f9ff',
      borderLeftColor: colors.govBlue,
    },
    infoSectionTeam: {
      backgroundColor: '#f0fdf4',
      borderLeftColor: colors.govGreen,
    },
    sectionHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14,
      paddingBottom: 10,
      borderBottomWidth: 1.5,
      borderBottomColor: '#e2e8f0',
    },
    sectionIconContainer: {
      width: 28,
      height: 28,
      borderRadius: 6,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    sectionTitle: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#0f172a',
      textTransform: 'uppercase',
      letterSpacing: 1,
    },
    // Process Info Rows
    infoRow: {
      flexDirection: 'row',
      marginBottom: 10,
      alignItems: 'flex-start',
    },
    infoLabel: {
      fontSize: 9,
      color: '#475569',
      width: 90,
    },
    infoValue: {
      fontSize: 10,
      color: '#0f172a',
      fontWeight: 'bold',
      flex: 1,
    },
    // Team Grid
    teamGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 12,
    },
    teamMember: {
      width: '47%',
      marginBottom: 8,
      backgroundColor: '#ffffff',
      borderRadius: 6,
      padding: 8,
    },
    teamRole: {
      fontSize: 8,
      color: '#64748b',
      marginBottom: 2,
    },
    teamName: {
      fontSize: 10,
      color: '#0f172a',
      fontWeight: 'bold',
    },
    // Footer
    footer: {
      paddingTop: 24,
      borderTopWidth: 1.5,
      borderTopColor: '#e2e8f0',
      marginTop: 28,
    },
    footerLogos: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 32,
      marginBottom: 14,
    },
    footerLogo: {
      height: 38,
      objectFit: 'contain',
    },
    footerLogoSmall: {
      height: 32,
      objectFit: 'contain',
    },
    footerDate: {
      fontSize: 9,
      color: '#64748b',
      textAlign: 'center',
      marginTop: 8,
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
          <View style={[styles.infoSection, styles.infoSectionProcess]}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIconContainer}>
                <InfoIcon size={18} color={colors.govBlue} />
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
          <View style={[styles.infoSection, styles.infoSectionTeam]}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIconContainer}>
                <UsersIcon size={18} color={colors.govGreen} />
              </View>
              <Text style={styles.sectionTitle}>Grupo Técnico</Text>
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
