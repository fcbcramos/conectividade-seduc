import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { ReactNode } from 'react';

interface PDFMetricCardProps {
  value: string | number;
  label: string;
  sublabel?: string;
  color?: string;
  backgroundColor?: string;
  icon?: ReactNode;
}

const PDFMetricCard = ({ 
  value, 
  label, 
  sublabel,
  color = colors.govBlue,
  backgroundColor = '#f8fafc',
  icon
}: PDFMetricCardProps) => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor,
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    iconContainer: {
      width: 36,
      height: 36,
      borderRadius: 18,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: spacing.sm,
      borderWidth: 1,
      borderColor: colors.borderLight,
    },
    value: {
      fontSize: 20,
      fontWeight: 'bold',
      color,
      marginBottom: spacing.xs,
      textAlign: 'center',
    },
    label: {
      fontSize: fonts.small,
      color: colors.textMuted,
      textAlign: 'center',
      letterSpacing: 0.3,
      textTransform: 'uppercase',
    },
    sublabel: {
      fontSize: fonts.tiny,
      color: colors.textLight,
      textAlign: 'center',
      marginTop: spacing.xs,
    },
  });

  return (
    <View style={styles.container}>
      {icon && (
        <View style={styles.iconContainer}>
          {icon}
        </View>
      )}
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      {sublabel && <Text style={styles.sublabel}>{sublabel}</Text>}
    </View>
  );
};

export default PDFMetricCard;
