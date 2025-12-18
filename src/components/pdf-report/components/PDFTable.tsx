import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';

interface Column {
  key: string;
  header: string;
  width?: number | string;
  align?: 'left' | 'center' | 'right';
}

interface PDFTableProps {
  columns: Column[];
  data: Record<string, any>[];
  striped?: boolean;
  compact?: boolean;
}

const PDFTable = ({ columns, data, striped = true, compact = false }: PDFTableProps) => {
  const tableStyles = StyleSheet.create({
    table: {
      borderWidth: 1,
      borderColor: colors.borderLight,
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: spacing.md,
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: colors.govBlue,
      paddingVertical: compact ? spacing.sm : spacing.md,
      paddingHorizontal: compact ? spacing.sm : spacing.md,
    },
    headerCell: {
      fontSize: compact ? fonts.tiny : fonts.small,
      fontWeight: 'bold',
      color: colors.background,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: compact ? spacing.sm : spacing.md,
      paddingHorizontal: compact ? spacing.sm : spacing.md,
      borderBottomWidth: 1,
      borderBottomColor: colors.borderLight,
    },
    rowLast: {
      borderBottomWidth: 0,
    },
    rowAlt: {
      backgroundColor: '#f8fafc',
    },
    cell: {
      fontSize: compact ? fonts.tiny : fonts.small,
      color: colors.text,
      lineHeight: 1.4,
    },
  });

  const getFlexStyle = (column: Column) => ({
    flex: column.width ? undefined : 1,
    width: column.width,
    textAlign: column.align || 'left',
  });

  return (
    <View style={tableStyles.table}>
      {/* Header */}
      <View style={tableStyles.headerRow}>
        {columns.map((col, idx) => (
          <Text 
            key={idx} 
            style={[tableStyles.headerCell, getFlexStyle(col)]}
          >
            {col.header}
          </Text>
        ))}
      </View>
      
      {/* Rows */}
      {data.map((row, rowIdx) => (
        <View 
          key={rowIdx} 
          style={[
            tableStyles.row, 
            striped && rowIdx % 2 === 1 && tableStyles.rowAlt,
            rowIdx === data.length - 1 && tableStyles.rowLast
          ]}
        >
          {columns.map((col, colIdx) => (
            <Text 
              key={colIdx} 
              style={[tableStyles.cell, getFlexStyle(col)]}
            >
              {row[col.key] ?? '-'}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
};

export default PDFTable;
