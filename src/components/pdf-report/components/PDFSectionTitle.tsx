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
      paddingBottom: spacing.sm,
      borderBottomWidth: 2,
      borderBottomColor: colors.primary,
    },
    number: {
      fontSize: fonts.h1,
      fontWeight: 'bold',
      color: colors.background,
      backgroundColor: colors.primary,
      paddingHorizontal: spacing.md,
      paddingVertical: spacing.sm,
      borderRadius: 4,
    },
    title: {
      fontSize: fonts.h1,
      fontWeight: 'bold',
      color: colors.primary,
    },
    subtitle: {
      fontSize: fonts.body,
      color: colors.textMuted,
      marginTop: spacing.xs,
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
