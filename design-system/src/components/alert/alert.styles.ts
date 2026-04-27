import type { AlertKind } from './alert';
import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-react';

interface AlertColors {
  background: string;
  border: string;
  text: string;
  outline: string;
}

/**
 * Retrieves the color set for a given alert kind from the theme.
 */
export const getColors = (theme: DesignSystemTheme, kind: AlertKind): AlertColors => {
  const colorsMap: Record<AlertKind, AlertColors> = {
    error: {
      background: theme.colors.negativeWashed,
      border: theme.colors.negativeSubdued,
      text: theme.colors.negativeStrong,
      outline: theme.colors.negativeStrong,
    },
    info: {
      background: theme.colors.brandWashed,
      border: theme.colors.brand,
      text: theme.colors.neutral,
      outline: theme.colors.neutral,
    },
    infoLight: {
      background: theme.colors.brandWashed,
      border: theme.colors.brandSubdued,
      text: theme.colors.brandStrong,
      outline: theme.colors.brandStrong,
    },
    success: {
      background: theme.colors.positiveWashed,
      border: theme.colors.positive,
      text: theme.colors.positiveStrong,
      outline: theme.colors.positiveStrong,
    },
    warning: {
      background: theme.colors.warningWashed,
      border: theme.colors.warning,
      text: theme.colors.warningStrong,
      outline: theme.colors.warningStrong,
    },
  };

  return colorsMap[kind];
};

/**
 * Generates the container styles for an alert using the provided color set.
 */
export const containerStyles = (colors: AlertColors): StyleObject => ({
  backgroundColor: colors.background,
  borderLeft: `4px solid ${colors.border}`,
  color: colors.text,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
  justifyContent: 'flex-start',
  fontFamily: 'Roboto',
  fontSize: '12px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '26px',
  letterSpacing: 0,
  textAlign: 'left',
  padding: '1rem .75rem',
});
