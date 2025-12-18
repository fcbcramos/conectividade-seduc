import { Svg, Path, Circle, G } from '@react-pdf/renderer';

interface IconProps {
  size?: number;
  color?: string;
}

// Ícone de Informação
export const InfoIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={2} fill="none" />
    <Path d="M12 16 L12 12" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <Circle cx="12" cy="8" r="1.5" fill={color} />
  </Svg>
);

// Ícone de Usuários/Equipe
export const UsersIcon = ({ size = 20, color = '#168821' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Circle cx="9" cy="7" r="3.5" stroke={color} strokeWidth={1.8} fill="none" />
    <Path d="M3 21 L3 19 C3 16.2 5.2 14 8 14 L10 14 C12.8 14 15 16.2 15 19 L15 21" stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" />
    <Circle cx="17" cy="8" r="2.5" stroke={color} strokeWidth={1.8} fill="none" />
    <Path d="M17 13 C19.2 13 21 14.8 21 17 L21 18" stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" />
  </Svg>
);

// Ícone de Dinheiro/Valor
export const DollarIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={2} fill="none" />
    <Path d="M12 6 L12 18" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <Path d="M9 9 C9 7.5 10.3 6.5 12 6.5 C13.7 6.5 15 7.5 15 9 C15 10.5 13.7 11 12 11 C10.3 11 9 11.5 9 13 C9 14.5 10.3 15.5 12 15.5 C13.7 15.5 15 14.5 15 13" stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" />
  </Svg>
);

// Ícone de Escola
export const SchoolIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path d="M12 3 L22 9 L12 15 L2 9 L12 3 Z" stroke={color} strokeWidth={1.8} fill="none" strokeLinejoin="round" />
    <Path d="M6 11 L6 17 C6 17 9 20 12 20 C15 20 18 17 18 17 L18 11" stroke={color} strokeWidth={1.8} fill="none" strokeLinecap="round" />
    <Path d="M22 9 L22 16" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

// Ícone de Calendário
export const CalendarIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path d="M4 6 C4 4.9 4.9 4 6 4 L18 4 C19.1 4 20 4.9 20 6 L20 19 C20 20.1 19.1 21 18 21 L6 21 C4.9 21 4 20.1 4 19 L4 6 Z" stroke={color} strokeWidth={1.8} fill="none" />
    <Path d="M4 10 L20 10" stroke={color} strokeWidth={1.8} />
    <Path d="M8 2 L8 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
    <Path d="M16 2 L16 6" stroke={color} strokeWidth={1.8} strokeLinecap="round" />
  </Svg>
);

// Ícone de Check/Sucesso
export const CheckIcon = ({ size = 20, color = '#168821' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Circle cx="12" cy="12" r="10" stroke={color} strokeWidth={2} fill="none" />
    <Path d="M8 12 L11 15 L16 9" stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

// Ícone de Gráfico/Métricas
export const ChartIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path d="M4 20 L4 10" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
    <Path d="M10 20 L10 4" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
    <Path d="M16 20 L16 14" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
    <Path d="M22 20 L22 8" stroke={color} strokeWidth={2.5} strokeLinecap="round" />
  </Svg>
);

// Ícone de Velocidade/Performance
export const SpeedIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path d="M12 4 C7.03 4 3 8.03 3 13 C3 15.1 3.8 17.1 5 18.5 L19 18.5 C20.2 17.1 21 15.1 21 13 C21 8.03 16.97 4 12 4 Z" stroke={color} strokeWidth={1.8} fill="none" />
    <Path d="M12 13 L15 9" stroke={color} strokeWidth={2} strokeLinecap="round" />
    <Circle cx="12" cy="13" r="2" fill={color} />
  </Svg>
);

// Ícone de Wi-Fi
export const WifiIcon = ({ size = 20, color = '#1351b4' }: IconProps) => (
  <Svg viewBox="0 0 24 24" width={size} height={size}>
    <Path d="M2 9 C6 5 10 4 12 4 C14 4 18 5 22 9" stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" />
    <Path d="M5 13 C7.5 10.5 10 10 12 10 C14 10 16.5 10.5 19 13" stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" />
    <Path d="M8.5 16.5 C10 15 11 15 12 15 C13 15 14 15 15.5 16.5" stroke={color} strokeWidth={2} fill="none" strokeLinecap="round" />
    <Circle cx="12" cy="19" r="1.5" fill={color} />
  </Svg>
);
