import { View, Text, StyleSheet } from '@react-pdf/renderer';
import { colors, spacing, fonts } from '../styles';
import { PDFSectionTitle } from '../components';
import { navigationItems } from '@/data/contractData';

const TableOfContents = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    description: {
      fontSize: fonts.body,
      color: colors.textMuted,
      marginBottom: spacing.xl,
      lineHeight: 1.5,
    },
    tocList: {
      gap: spacing.xs,
    },
    tocItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: spacing.sm,
      borderBottomWidth: 0.5,
      borderBottomColor: colors.borderLight,
    },
    tocNumber: {
      fontSize: fonts.body,
      fontWeight: 'bold',
      color: colors.primary,
      width: 35,
      textAlign: 'center',
      backgroundColor: colors.muted,
      paddingVertical: spacing.xs,
      paddingHorizontal: spacing.sm,
      borderRadius: 3,
      marginRight: spacing.md,
    },
    tocTitle: {
      fontSize: fonts.body,
      color: colors.text,
      flex: 1,
    },
    tocDots: {
      flex: 1,
      borderBottomWidth: 1,
      borderBottomStyle: 'dotted',
      borderBottomColor: colors.borderLight,
      marginHorizontal: spacing.md,
      marginBottom: 3,
    },
    tocPage: {
      fontSize: fonts.body,
      color: colors.textMuted,
      width: 30,
      textAlign: 'right',
    },
    mainSections: {
      marginBottom: spacing.xl,
    },
    sectionGroup: {
      marginTop: spacing.lg,
    },
    groupTitle: {
      fontSize: fonts.h3,
      fontWeight: 'bold',
      color: colors.primary,
      marginBottom: spacing.sm,
      paddingBottom: spacing.xs,
      borderBottomWidth: 1,
      borderBottomColor: colors.primary,
    },
  });

  // Páginas estimadas para cada seção (2 páginas iniciais + seções)
  const getPageNumber = (index: number) => index + 3;

  return (
    <View style={styles.container}>
      <PDFSectionTitle title="Sumário" subtitle="Índice de conteúdos do relatório" />
      
      <Text style={styles.description}>
        Este relatório apresenta a estrutura de governança contratual para o projeto Caravana Digital, 
        detalhando aspectos técnicos, operacionais, de fiscalização e gestão de riscos.
      </Text>

      {/* Seções Principais */}
      <View style={styles.mainSections}>
        <View style={styles.tocList}>
          {/* Capa e Sumário */}
          <View style={styles.tocItem}>
            <Text style={styles.tocNumber}>-</Text>
            <Text style={styles.tocTitle}>Capa</Text>
            <View style={styles.tocDots} />
            <Text style={styles.tocPage}>1</Text>
          </View>
          <View style={styles.tocItem}>
            <Text style={styles.tocNumber}>-</Text>
            <Text style={styles.tocTitle}>Sumário</Text>
            <View style={styles.tocDots} />
            <Text style={styles.tocPage}>2</Text>
          </View>
          
          {/* Dashboard */}
          <View style={styles.tocItem}>
            <Text style={styles.tocNumber}>📊</Text>
            <Text style={styles.tocTitle}>Dashboard Executivo</Text>
            <View style={styles.tocDots} />
            <Text style={styles.tocPage}>3</Text>
          </View>
        </View>
      </View>

      {/* Seções do Relatório */}
      <View style={styles.sectionGroup}>
        <Text style={styles.groupTitle}>Seções do Relatório</Text>
        <View style={styles.tocList}>
          {navigationItems.map((item) => (
            <View key={item.id} style={styles.tocItem}>
              <Text style={styles.tocNumber}>{item.id}</Text>
              <Text style={styles.tocTitle}>{item.title}</Text>
              <View style={styles.tocDots} />
              <Text style={styles.tocPage}>{getPageNumber(item.id)}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default TableOfContents;
