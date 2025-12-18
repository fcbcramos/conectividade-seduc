import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';

type BadgeVariant = 'success' | 'warning' | 'error' | 'info' | 'pending' | 'default';

interface PDFBadgeProps {
  children: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, { bg: string; text: string }> = {
  success: { bg: '#dcfce7', text: '#166534' },
  warning: { bg: '#fef3c7', text: '#92400e' },
  error: { bg: '#fee2e2', text: '#991b1b' },
  info: { bg: '#dbeafe', text: '#1e40af' },
  pending: { bg: '#ede9fe', text: '#6b21a8' },
  default: { bg: colors.muted, text: colors.textMuted },
};

const PDFBadge = ({ children, variant = 'default' }: PDFBadgeProps) => {
  const variantStyle = variantStyles[variant];
  
  const styles = StyleSheet.create({
    badge: {
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.xs,
      borderRadius: 3,
      backgroundColor: variantStyle.bg,
      alignSelf: 'flex-start',
    },
    text: {
      fontSize: fonts.tiny,
      fontWeight: 'bold',
      color: variantStyle.text,
    },
  });

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default PDFBadge;
