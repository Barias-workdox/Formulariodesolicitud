import type { ReactElement } from 'react';

import { ChevronDown, ChevronUp } from '@carbon/icons-react';

import { useCss } from '@components/utils/hooks/use-css';
import { COMMON_FONT_SIZE_16 } from '@constants/common.constants';

import type { AppColors } from '@themes/theme.interfaces';
import type { StyleObject } from 'styletron-standard';

export interface ArrowIconProps {
  isOpen: boolean;
  color?: keyof AppColors;
}

const styles = {
  iconStyles: {
    pointerEvents: 'none',
  } as StyleObject,
};

/**
 * The ArrowIcon will be used to show if the select is showing its content or not
 */
export const ArrowIcon = ({ isOpen, color = 'neutralSubdued' }: ArrowIconProps): ReactElement => {
  const { iconStyles, theme } = useCss(styles);

  const iconSize = COMMON_FONT_SIZE_16;

  return isOpen ? (
    <ChevronUp
      size={iconSize}
      color={theme.colors[color]}
      className={iconStyles}
      data-testid="chevron-up-icon"
    />
  ) : (
    <ChevronDown
      size={iconSize}
      color={theme.colors[color]}
      className={iconStyles}
      data-testid="chevron-down-icon"
    />
  );
};
