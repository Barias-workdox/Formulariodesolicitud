import { COMMON_HEIGHT_24, COMMON_HEIGHT_36 } from '@constants/common.constants';

import type { Size } from '@components/input/next';
import type { DesignSystemTheme } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

type StyleOptions = {
  color: string;
  isValid: boolean;
  size: Size;
};

/** Gets style properties by input size */
export const getSizeProperties = (size: Size): { picker: StyleObject } => {
  const pickerCompact: StyleObject = {
    width: COMMON_HEIGHT_24,
    height: COMMON_HEIGHT_24,
  };
  const pickerDefault: StyleObject = {
    width: COMMON_HEIGHT_36,
    height: COMMON_HEIGHT_36,
  };

  return {
    picker:
      {
        '32px': pickerCompact,
        compact: pickerCompact,
        '44px': pickerDefault,
        default: pickerDefault,
      }[size] ?? pickerDefault,
  };
};

export const styles = {
  containerStyles: {
    position: 'relative',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
  } as StyleObject,
  colorPickerStyles: (
    theme: DesignSystemTheme,
    { color, isValid, size }: StyleOptions,
  ): StyleObject => ({
    '-webkit-appearance': 'none',
    cursor: 'pointer',
    backgroundColor: isValid ? color : theme.colors.bgBase,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: theme.spacing.spacing2xs,
    border: `1px solid ${theme.colors.neutralDepressed}`,
    borderRadius: theme.spacing.spacing2xs,
    ...getSizeProperties(size).picker,
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
