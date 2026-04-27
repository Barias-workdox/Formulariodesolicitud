import type { StatefulTabsProps } from '@components/tabs';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { BorderKey } from '@tokens';
import type { SpacingKey } from '@tokens/spacing';

export type HeaderTabsSize = 'xsmall' | 'small';

export type HeaderTabsBorderRadius = Exclude<BorderKey, 'borderCircle'>;

export type EnhancerType = React.ReactNode | (() => React.ReactNode);

export interface HeaderTabsProps extends WithTestId {
  /**
   * Header size.
   */
  size?: HeaderTabsSize;
  /**
   * Whether to show a bottom border.
   */
  borderRadius?: HeaderTabsBorderRadius;
  /**
   * Element to show at the start of the header.
   */
  slot?: React.ReactNode;
  /**
   * whether the header tabs are disabled.
   */
  isDisabled?: boolean;
  /**
   * Tabs to show in the header.
   */
  tabs?: React.ReactNode;
  onChange?: StatefulTabsProps['onChange'];
  activeKey?: StatefulTabsProps['activeKey'];
}

export interface HeaderTabWrapperProps {
  $borderRadius: HeaderTabsBorderRadius;
  $isDisabled?: boolean;
}

export interface HeaderSectionProps {
  $gap?: SpacingKey;
}
