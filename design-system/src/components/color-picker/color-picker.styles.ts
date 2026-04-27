import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-standard';

type StyleOptions = {
  color: string;
  isValid: boolean;
};

export const styles = {
  containerStyles: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  } as StyleObject,
  colorPickerStyles: (theme: DesignSystemTheme, { color, isValid }: StyleOptions): StyleObject => ({
    '-webkit-appearance': 'none',
    cursor: 'pointer',
    backgroundColor: isValid ? color : theme.colors.bgBase,
    width: theme.spacing.spacing3xl,
    height: theme.spacing.spacing3xl,
    position: 'absolute',
    right: theme.spacing.spacingXs,
    border: '2px solid rgba(0,0,0,.2)',
    borderRadius: theme.spacing.spacing2xs,
    '::-webkit-color-swatch-wrapper': {
      padding: 0,
    },
    '::-webkit-color-swatch': {
      border: 'none',
    },
    ':after': {
      content: isValid ? '' : '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: `linear-gradient(45deg, ${theme.colors.negative} 25%, transparent 25%, transparent 50%, ${theme.colors.negative} 50%, ${theme.colors.negative} 75%, transparent 75%, ${theme.colors.bgBase})`,
      backgroundSize: '6px 6px',
      backgroundColor: theme.colors.bgBase,
    },
  }),
};
