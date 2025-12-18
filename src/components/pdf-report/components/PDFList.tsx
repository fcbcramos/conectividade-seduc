import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';

interface PDFListProps {
  items: string[];
  bulletColor?: string;
  numbered?: boolean;
}

const PDFList = ({ items, bulletColor = colors.primary, numbered = false }: PDFListProps) => {
  const styles = StyleSheet.create({
    list: {
      gap: spacing.xs,
    },
    item: {
      flexDirection: 'row',
      gap: spacing.sm,
      alignItems: 'flex-start',
    },
    bullet: {
      fontSize: fonts.body,
      color: bulletColor,
      width: numbered ? 16 : 8,
    },
    text: {
      fontSize: fonts.body,
      color: colors.text,
      flex: 1,
      lineHeight: 1.4,
    },
  });

  return (
    <View style={styles.list}>
      {items.map((item, idx) => (
        <View key={idx} style={styles.item}>
          <Text style={styles.bullet}>
            {numbered ? `${idx + 1}.` : '•'}
          </Text>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default PDFList;
