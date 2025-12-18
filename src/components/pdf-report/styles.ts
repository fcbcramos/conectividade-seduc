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
  muted: '#f1f5f9',
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

// Tipografia
export const fonts = {
  title: 28,
  h1: 20,
  h2: 14,
  h3: 11,
  h4: 10,
  body: 9,
  small: 8,
  tiny: 7,
  micro: 6,
};

// Espaçamentos
export const spacing = {
  xs: 2,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 24,
};

// Estilos globais - A4 Portrait (210mm × 297mm)
export const styles = StyleSheet.create({
  // === Página ===
  page: {
    padding: '12mm 10mm 18mm 10mm',
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
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  headerLogo: {
    width: 60,
    height: 24,
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
    color: colors.primary,
    textAlign: 'right',
  },
  
  // === Footer ===
  footer: {
    position: 'absolute',
    bottom: '8mm',
    left: '10mm',
    right: '10mm',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: spacing.sm,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderLight,
  },
  footerLogos: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  footerLogo: {
    height: 16,
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
    color: colors.primary,
    marginBottom: spacing.lg,
    paddingBottom: spacing.sm,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
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
    marginBottom: spacing.sm,
  },
  
  // === Cards ===
  card: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    padding: spacing.lg,
    marginBottom: spacing.md,
    backgroundColor: colors.background,
  },
  cardAccent: {
    borderLeftWidth: 3,
    borderLeftColor: colors.primary,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
    paddingBottom: spacing.sm,
    borderBottomWidth: 0.5,
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
  
  // === Métricas/KPIs ===
  metricCard: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    padding: spacing.md,
    backgroundColor: colors.muted,
    alignItems: 'center',
    minWidth: 80,
  },
  metricValue: {
    fontSize: fonts.h2,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: spacing.xs,
  },
  metricLabel: {
    fontSize: fonts.tiny,
    color: colors.textMuted,
    textAlign: 'center',
  },
  
  // === Tabelas ===
  table: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    padding: spacing.sm,
  },
  tableHeaderCell: {
    fontSize: fonts.small,
    fontWeight: 'bold',
    color: colors.background,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderLight,
    padding: spacing.sm,
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
    borderRadius: 3,
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
    gap: spacing.xs,
  },
  listItem: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'flex-start',
  },
  listBullet: {
    fontSize: fonts.body,
    color: colors.primary,
    lineHeight: 1.4,
  },
  listText: {
    fontSize: fonts.body,
    color: colors.text,
    flex: 1,
    lineHeight: 1.4,
  },
  
  // === Texto ===
  text: {
    fontSize: fonts.body,
    color: colors.text,
    lineHeight: 1.5,
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
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // === Dividers ===
  divider: {
    height: 1,
    backgroundColor: colors.borderLight,
    marginVertical: spacing.md,
  },
  
  // === Timeline ===
  timeline: {
    gap: spacing.sm,
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
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
  
  // === Progress ===
  progressBar: {
    height: 6,
    backgroundColor: colors.muted,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: colors.primary,
    borderRadius: 3,
  },
  
  // === Cover Page ===
  coverContainer: {
    flex: 1,
    padding: '20mm',
    justifyContent: 'space-between',
  },
  coverHeader: {
    alignItems: 'center',
    marginBottom: spacing.xxl,
  },
  coverLogo: {
    width: 180,
    height: 60,
    objectFit: 'contain',
    marginBottom: spacing.lg,
  },
  coverTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.govBlue,
    textAlign: 'center',
    marginBottom: spacing.md,
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
    borderRadius: 8,
    marginVertical: spacing.xxl,
  },
  coverFooter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xl,
    paddingTop: spacing.xl,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  coverFooterLogo: {
    height: 40,
    objectFit: 'contain',
  },
  
  // === TOC ===
  tocItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderLight,
  },
  tocNumber: {
    fontSize: fonts.body,
    fontWeight: 'bold',
    color: colors.primary,
    width: 30,
  },
  tocTitle: {
    fontSize: fonts.body,
    color: colors.text,
    flex: 1,
  },
  tocPage: {
    fontSize: fonts.body,
    color: colors.textMuted,
    width: 30,
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
export const createCardStyle = (accentColor: string = colors.primary) => ({
  ...styles.card,
  borderLeftWidth: 3,
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
