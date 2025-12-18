import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';

interface PDFSectionTitleProps {
  number?: number;
  title: string;
  subtitle?: string;
}

const PDFSectionTitle = ({ number, title, subtitle }: PDFSectionTitleProps) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: spacing.lg,
    },
    titleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      marginBottom: spacing.sm,
      paddingBottom: spacing.md,
      borderBottomWidth: 3,
      borderBottomColor: colors.govBlue,
    },
    number: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.background,
      backgroundColor: colors.govBlue,
      paddingHorizontal: 14,
      paddingVertical: 6,
      borderRadius: 6,
      minWidth: 40,
      textAlign: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      color: colors.govBlue,
      letterSpacing: 0.5,
    },
    subtitle: {
      fontSize: fonts.body,
      color: colors.textMuted,
      marginTop: spacing.xs,
      lineHeight: 1.5,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        {number !== undefined && (
          <Text style={styles.number}>{number}</Text>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};

export default PDFSectionTitle;
