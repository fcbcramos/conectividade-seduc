import { StyleSheet, Font } from '@react-pdf/renderer';

// Cores sincronizadas com o tema (convertidas de HSL para hex)
export const colors = {
  primary: '#1e40af',
  primaryLight: '#3b82f6',
  secondary: '#64748b',
  accent: '#22c55e',
  accentLight: '#86efac',
  destructive: '#ef4444',
  warning: '#f59e0b',
  muted: '#f8fafc',
  mutedDark: '#e2e8f0',
  border: '#cbd5e1',
  borderLight: '#e2e8f0',
  background: '#ffffff',
  foreground: '#0f172a',
  text: '#1e293b',
  textMuted: '#64748b',
  textLight: '#94a3b8',
  
  // Cores governamentais
  govBlue: '#1351b4',
  govGreen: '#168821',
  govYellow: '#ffcd07',
  govRed: '#e52207',
  
  // Cores de status
  statusSuccess: '#22c55e',
  statusWarning: '#f59e0b',
  statusError: '#ef4444',
  statusInfo: '#3b82f6',
  statusPending: '#8b5cf6',
};

// Tipografia - Aumentada para melhor legibilidade
export const fonts = {
  title: 32,
  h1: 22,
  h2: 16,
  h3: 12,
  h4: 11,
  body: 10,
  small: 9,
  tiny: 8,
  micro: 7,
};

// Espaçamentos - Mais generosos
export const spacing = {
  xs: 3,
  sm: 6,
  md: 10,
  lg: 16,
  xl: 20,
  xxl: 28,
};

// Estilos globais - A4 Portrait (210mm × 297mm)
export const styles = StyleSheet.create({
  // === Página ===
  page: {
    padding: '14mm 12mm 20mm 12mm',
    fontSize: fonts.body,
    fontFamily: 'Helvetica',
    backgroundColor: colors.background,
    color: colors.text,
    position: 'relative',
  },
  coverPage: {
    padding: 0,
    fontFamily: 'Helvetica',
    backgroundColor: colors.background,
  },
  
  // === Header ===
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.lg,
    paddingBottom: spacing.md,
    borderBottomWidth: 2,
    borderBottomColor: colors.govBlue,
  },
  headerLogo: {
    width: 70,
    height: 28,
    objectFit: 'contain',
  },
  headerTitle: {
    fontSize: fonts.small,
    color: colors.textMuted,
    textAlign: 'right',
  },
  headerSection: {
    fontSize: fonts.h3,
    fontWeight: 'bold',
    color: colors.govBlue,
    textAlign: 'right',
  },
  
  // === Footer ===
  footer: {
    position: 'absolute',
    bottom: '10mm',
    left: '12mm',
    right: '12mm',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  footerLogos: {
    flexDirection: 'row',
    gap: spacing.lg,
    alignItems: 'center',
  },
  footerLogo: {
    height: 18,
    objectFit: 'contain',
  },
  footerText: {
    fontSize: fonts.tiny,
    color: colors.textMuted,
  },
  footerPage: {
    fontSize: fonts.tiny,
    color: colors.textMuted,
    fontWeight: 'bold',
  },
  
  // === Conteúdo Principal ===
  content: {
    flex: 1,
  },
  
  // === Títulos ===
  sectionTitle: {
    fontSize: fonts.h1,
    fontWeight: 'bold',
    color: colors.govBlue,
    marginBottom: spacing.lg,
    paddingBottom: spacing.sm,
    borderBottomWidth: 3,
    borderBottomColor: colors.govBlue,
  },
  sectionSubtitle: {
    fontSize: fonts.h2,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
  },
  cardTitle: {
    fontSize: fonts.h3,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: spacing.md,
  },
  
  // === Cards - Premium Design ===
  card: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 8,
    padding: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.background,
  },
  cardAccent: {
    borderLeftWidth: 4,
    borderLeftColor: colors.govBlue,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
    paddingBottom: spacing.md,
    borderBottomWidth: 2,
    borderBottomColor: colors.borderLight,
  },
  cardContent: {
    gap: spacing.sm,
  },
  
  // === Grid ===
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  col2: {
    flex: 1,
  },
  col3: {
    flex: 1,
  },
  col4: {
    flex: 1,
  },
  
  // === Métricas/KPIs - Refined ===
  metricCard: {
    borderWidth: 0,
    borderRadius: 8,
    padding: spacing.lg,
    backgroundColor: colors.muted,
    alignItems: 'center',
    minWidth: 90,
  },
  metricValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.govBlue,
    marginBottom: spacing.xs,
  },
  metricLabel: {
    fontSize: fonts.small,
    color: colors.textMuted,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  
  // === Tabelas - Elegant ===
  table: {
    borderWidth: 1,
    borderColor: colors.borderLight,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.govBlue,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  tableHeaderCell: {
    fontSize: fonts.small,
    fontWeight: 'bold',
    color: colors.background,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
  },
  tableRowAlt: {
    backgroundColor: colors.muted,
  },
  tableCell: {
    fontSize: fonts.small,
    color: colors.text,
  },
  
  // === Badges ===
  badge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 4,
    fontSize: fonts.tiny,
    fontWeight: 'bold',
  },
  badgeSuccess: {
    backgroundColor: '#dcfce7',
    color: colors.statusSuccess,
  },
  badgeWarning: {
    backgroundColor: '#fef3c7',
    color: colors.warning,
  },
  badgeError: {
    backgroundColor: '#fee2e2',
    color: colors.statusError,
  },
  badgeInfo: {
    backgroundColor: '#dbeafe',
    color: colors.statusInfo,
  },
  badgePending: {
    backgroundColor: '#ede9fe',
    color: colors.statusPending,
  },
  badgeDefault: {
    backgroundColor: colors.muted,
    color: colors.textMuted,
  },
  
  // === Listas ===
  list: {
    gap: spacing.sm,
  },
  listItem: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'flex-start',
  },
  listBullet: {
    fontSize: fonts.body,
    color: colors.govBlue,
    lineHeight: 1.4,
  },
  listText: {
    fontSize: fonts.body,
    color: colors.text,
    flex: 1,
    lineHeight: 1.5,
  },
  
  // === Texto ===
  text: {
    fontSize: fonts.body,
    color: colors.text,
    lineHeight: 1.6,
  },
  textSmall: {
    fontSize: fonts.small,
    color: colors.text,
  },
  textMuted: {
    fontSize: fonts.body,
    color: colors.textMuted,
  },
  textBold: {
    fontWeight: 'bold',
  },
  
  // === Ícones (simulados com caracteres) ===
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.govBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // === Dividers ===
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginVertical: spacing.lg,
  },
  
  // === Timeline ===
  timeline: {
    gap: spacing.md,
  },
  timelineItem: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  timelineConnector: {
    width: 2,
    backgroundColor: colors.border,
    flex: 1,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.govBlue,
  },
  
  // === Progress ===
  progressBar: {
    height: 8,
    backgroundColor: colors.muted,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.govBlue,
    borderRadius: 4,
  },
  
  // === Cover Page ===
  coverContainer: {
    flex: 1,
    padding: '24mm',
    justifyContent: 'space-between',
  },
  coverHeader: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  coverLogo: {
    width: 200,
    height: 70,
    objectFit: 'contain',
    marginBottom: spacing.lg,
  },
  coverTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.govBlue,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  coverSubtitle: {
    fontSize: 18,
    color: colors.textMuted,
    textAlign: 'center',
    marginBottom: spacing.xxl,
  },
  coverInfo: {
    backgroundColor: colors.muted,
    padding: spacing.xl,
    borderRadius: 10,
    marginVertical: spacing.xxl,
  },
  coverFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xxl,
    paddingTop: spacing.xl,
    borderTopWidth: 2,
    borderTopColor: colors.borderLight,
  },
  coverFooterLogo: {
    height: 44,
    objectFit: 'contain',
  },
  
  // === TOC ===
  tocItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderLight,
  },
  tocNumber: {
    fontSize: fonts.body,
    fontWeight: 'bold',
    color: colors.govBlue,
    width: 34,
  },
  tocTitle: {
    fontSize: fonts.body,
    color: colors.text,
    flex: 1,
  },
  tocPage: {
    fontSize: fonts.body,
    color: colors.textMuted,
    width: 34,
    textAlign: 'right',
  },
  tocDots: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomStyle: 'dotted',
    borderBottomColor: colors.borderLight,
    marginHorizontal: spacing.sm,
    marginBottom: 3,
  },
});

// Utility para criar variantes de estilo
export const createCardStyle = (accentColor: string = colors.govBlue) => ({
  ...styles.card,
  borderLeftWidth: 4,
  borderLeftColor: accentColor,
});

export const getBadgeStyle = (variant: 'success' | 'warning' | 'error' | 'info' | 'pending' | 'default' = 'default') => {
  const variants = {
    success: styles.badgeSuccess,
    warning: styles.badgeWarning,
    error: styles.badgeError,
    info: styles.badgeInfo,
    pending: styles.badgePending,
    default: styles.badgeDefault,
  };
  return { ...styles.badge, ...variants[variant] };
};
