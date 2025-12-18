import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { styles, colors, spacing, fonts } from '../styles';
import { ReactNode } from 'react';

interface PDFCardProps {
  title?: string;
  children: ReactNode;
  accentColor?: string;
  variant?: 'default' | 'accent' | 'metric' | 'muted';
  wrap?: boolean;
}

const PDFCard = ({ 
  title, 
  children, 
  accentColor = colors.primary, 
  variant = 'default',
  wrap = true 
}: PDFCardProps) => {
  const cardStyles = StyleSheet.create({
    card: {
      ...styles.card,
      ...(variant === 'accent' && {
        borderLeftWidth: 3,
        borderLeftColor: accentColor,
      }),
      ...(variant === 'metric' && {
        backgroundColor: colors.muted,
        alignItems: 'center',
        padding: spacing.md,
      }),
      ...(variant === 'muted' && {
        backgroundColor: colors.muted,
        borderColor: colors.borderLight,
      }),
    },
    title: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.sm,
    },
  });

  return (
    <View style={cardStyles.card} wrap={wrap}>
      {title && <Text style={cardStyles.title}>{title}</Text>}
      {children}
    </View>
  );
};

export default PDFCard;
