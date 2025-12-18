import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';

interface PDFMetricCardProps {
  value: string | number;
  label: string;
  sublabel?: string;
  color?: string;
  backgroundColor?: string;
}

const PDFMetricCard = ({ 
  value, 
  label, 
  sublabel,
  color = colors.primary,
  backgroundColor = colors.muted 
}: PDFMetricCardProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      borderRadius: 4,
      padding: spacing.md,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: colors.border,
      flex: 1,
    },
    value: {
      fontSize: fonts.h2,
      fontWeight: 'bold',
      color,
      marginBottom: spacing.xs,
    },
    label: {
      fontSize: fonts.tiny,
      color: colors.textMuted,
      textAlign: 'center',
    },
    sublabel: {
      fontSize: fonts.micro,
      color: colors.textLight,
      textAlign: 'center',
      marginTop: spacing.xs,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      {sublabel && <Text style={styles.sublabel}>{sublabel}</Text>}
    </View>
  );
};

export default PDFMetricCard;
