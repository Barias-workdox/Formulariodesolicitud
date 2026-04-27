import type { ReactElement } from 'react';

import { ChevronDown, ChevronUp } from '@carbon/icons-react';

import { useCss } from '../../utils/hooks/use-css';

import type { ArrowIconProps } from '../select.interfaces';
import type { StyleObject } from 'styletron-standard';

const styles = {
  icon: {
    pointerEvents: 'none',
  } as StyleObject,
};

/**
 * The ArrowIcon will be used to show if the select is showing its content or not
 */
export const ArrowIcon = ({
  isOpen,
  isBorderless,
  color = 'neutralSubdued',
}: ArrowIconProps): ReactElement => {
  const { icon, theme } = useCss(styles);

  const iconSize = isBorderless ? 16 : 20;

  return isOpen ? (
    <ChevronUp
      size={iconSize}
      color={theme.colors[color]}
      className={icon}
    />
  ) : (
    <ChevronDown
      size={iconSize}
      color={theme.colors[color]}
      className={icon}
    />
  );
};
