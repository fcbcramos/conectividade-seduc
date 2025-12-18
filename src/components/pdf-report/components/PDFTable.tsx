import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { styles, colors, spacing, fonts } from '../styles';

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
}

const PDFTable = ({ columns, data, striped = true }: PDFTableProps) => {
  const tableStyles = StyleSheet.create({
    table: {
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 4,
      overflow: 'hidden',
      marginBottom: spacing.md,
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: colors.primary,
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.sm,
    },
    headerCell: {
      fontSize: fonts.small,
      fontWeight: 'bold',
      color: colors.background,
    },
    row: {
      flexDirection: 'row',
      paddingVertical: spacing.sm,
      paddingHorizontal: spacing.sm,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderLight,
    },
    rowAlt: {
      backgroundColor: colors.muted,
    },
    cell: {
      fontSize: fonts.small,
      color: colors.text,
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
            striped && rowIdx % 2 === 1 && tableStyles.rowAlt
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
