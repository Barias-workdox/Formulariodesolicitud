import type { ReactNode } from 'react';

import { useCss } from '../utils/hooks/use-css';

import { styles } from './badge.styles';

import type { DesignSystemTheme } from '../../themes';
import type { StyleObject } from 'styletron-react';

export type PLACEMENT = 'topLeft' | 'topRight' | 'bottomRight' | 'bottomLeft';

export type SHAPE = 'pill' | 'circle' | 'rectangle';

interface BadgeProps {
  content: ReactNode;
  children: ReactNode;
  backgroundColor?: keyof DesignSystemTheme['colors'];
  color?: keyof DesignSystemTheme['colors'];
  placement?: PLACEMENT;
  shape?: SHAPE;
  hidden?: boolean;
  overrides?: {
    Root?: StyleObject;
    Content?: StyleObject;
  };
}

/**
 * Component that highlight feature information within a user flow.
 * Badge content should generally be 3 words or less.
 *
 * @remarks
 *
 * This component is temporary because Badge is not available in the current version from baseui in the design system.
 * When baseui will be updated to version 11 or greater will use the component badge from baseui.
 *
 * https://baseweb.design/components/badge/
 */
export const Badge = ({
  content,
  children,
  backgroundColor = 'brand',
  color = 'base',
  placement = 'topRight',
  shape = 'circle',
  hidden = false,
  overrides = {},
}: BadgeProps): JSX.Element => {
  const { containerStyles, contentStyles } = useCss(styles, {
    backgroundColor,
    color,
    placement,
    shape,
    hidden,
    overrides,
  });

  return (
    <div className={containerStyles}>
      <div className={contentStyles}>{content}</div>
      {children}
    </div>
  );
};
