import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { styles, colors, spacing, fonts } from '../styles';
import { ReactNode } from 'react';

interface PDFCardProps {
  title?: string;
  children: ReactNode;
  accentColor?: string;
  variant?: 'default' | 'accent' | 'metric' | 'muted' | 'premium';
  wrap?: boolean;
  icon?: ReactNode;
}

const PDFCard = ({ 
  title, 
  children, 
  accentColor = colors.govBlue, 
  variant = 'default',
  wrap = true,
  icon
}: PDFCardProps) => {
  const cardStyles = StyleSheet.create({
    card: {
      borderWidth: 1,
      borderColor: colors.borderLight,
      borderRadius: 8,
      padding: spacing.lg,
      marginBottom: spacing.md,
      backgroundColor: colors.background,
      ...(variant === 'accent' && {
        borderLeftWidth: 4,
        borderLeftColor: accentColor,
      }),
      ...(variant === 'metric' && {
        backgroundColor: colors.muted,
        alignItems: 'center',
        padding: spacing.lg,
        borderWidth: 0,
      }),
      ...(variant === 'muted' && {
        backgroundColor: colors.muted,
        borderColor: colors.borderLight,
      }),
      ...(variant === 'premium' && {
        borderLeftWidth: 4,
        borderLeftColor: accentColor,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        backgroundColor: '#fafafa',
      }),
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: spacing.md,
      marginBottom: spacing.md,
      paddingBottom: spacing.md,
      borderBottomWidth: 2,
      borderBottomColor: accentColor,
    },
    iconContainer: {
      width: 28,
      height: 28,
      borderRadius: 6,
      backgroundColor: colors.muted,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      flex: 1,
    },
    titleOnly: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.foreground,
      marginBottom: spacing.md,
    },
  });

  const renderTitle = () => {
    if (!title) return null;
    
    if (icon) {
      return (
        <View style={cardStyles.header}>
          <View style={cardStyles.iconContainer}>
            {icon}
          </View>
          <Text style={cardStyles.title}>{title}</Text>
        </View>
      );
    }
    
    return <Text style={cardStyles.titleOnly}>{title}</Text>;
  };

  return (
    <View style={cardStyles.card} wrap={wrap}>
      {renderTitle()}
      {children}
    </View>
  );
};

export default PDFCard;
