import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { basicInfo } from '@/data/contractData';
import governoPiauiLogo from '@/assets/governo-piaui-logo.png';
import seducLogo from '@/assets/logo-seduc.png';
import mecLogo from '@/assets/mec-gov-federal-logo.png';
import escolasConectadasLogo from '@/assets/escolas-conectadas-logo.png';
import novoPacLogo from '@/assets/novo-pac-logo.png';

const CoverPage = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '25mm 20mm',
      justifyContent: 'space-between',
      backgroundColor: colors.background,
    },
    header: {
      alignItems: 'center',
      marginBottom: spacing.xxl,
    },
    mainLogo: {
      width: 200,
      height: 70,
      objectFit: 'contain',
      marginBottom: spacing.xl,
    },
    seducLogo: {
      width: 120,
      height: 40,
      objectFit: 'contain',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    programName: {
      fontSize: 16,
      color: colors.govBlue,
      marginBottom: spacing.md,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: colors.govBlue,
      textAlign: 'center',
      marginBottom: spacing.lg,
    },
    subtitle: {
      fontSize: 14,
      color: colors.textMuted,
      textAlign: 'center',
      marginBottom: spacing.xxl,
      maxWidth: 400,
      lineHeight: 1.5,
    },
    infoBox: {
      backgroundColor: colors.muted,
      padding: spacing.xl,
      borderRadius: 8,
      width: '100%',
      maxWidth: 450,
      marginTop: spacing.xxl,
    },
    infoRow: {
      flexDirection: 'row',
      marginBottom: spacing.sm,
    },
    infoLabel: {
      fontSize: fonts.small,
      color: colors.textMuted,
      width: 120,
    },
    infoValue: {
      fontSize: fonts.small,
      color: colors.text,
      fontWeight: 'bold',
      flex: 1,
    },
    divider: {
      height: 1,
      backgroundColor: colors.borderLight,
      marginVertical: spacing.md,
    },
    footer: {
      paddingTop: spacing.xl,
      borderTopWidth: 1,
      borderTopColor: colors.border,
    },
    footerLogos: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: spacing.xxl,
    },
    footerLogo: {
      height: 35,
      objectFit: 'contain',
    },
    footerLogoSmall: {
      height: 28,
      objectFit: 'contain',
    },
    date: {
      fontSize: fonts.small,
      color: colors.textMuted,
      textAlign: 'center',
      marginTop: spacing.lg,
    },
  });

  return (
    <View style={styles.container}>
      {/* Header Logos */}
      <View style={styles.header}>
        <Image src={governoPiauiLogo} style={styles.mainLogo} />
        <Image src={seducLogo} style={styles.seducLogo} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Text style={styles.programName}>CARAVANA DIGITAL</Text>
        <Text style={styles.title}>REGC</Text>
        <Text style={styles.subtitle}>
          Relatório Executivo de Governança Contratual
        </Text>
        <Text style={[styles.subtitle, { fontSize: 11, marginBottom: 0 }]}>
          {basicInfo.object}
        </Text>

        {/* Info Box */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Processo:</Text>
            <Text style={styles.infoValue}>{basicInfo.processNumber}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Área Demandante:</Text>
            <Text style={styles.infoValue}>{basicInfo.requestingArea}</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Elaborado por:</Text>
            <Text style={styles.infoValue}>{basicInfo.elaboratedBy}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Data:</Text>
            <Text style={styles.infoValue}>{basicInfo.elaborationDate}</Text>
          </View>
        </View>
      </View>

      {/* Footer Logos */}
      <View style={styles.footer}>
        <View style={styles.footerLogos}>
          <Image src={mecLogo} style={styles.footerLogo} />
          <Image src={escolasConectadasLogo} style={styles.footerLogoSmall} />
          <Image src={novoPacLogo} style={styles.footerLogoSmall} />
        </View>
        <Text style={styles.date}>
          Teresina - PI, {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}
        </Text>
      </View>
    </View>
  );
};

export default CoverPage;
