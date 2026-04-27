import type { WithTestId } from '@interfaces/common.interfaces';

export type SectionedCardSize = 'small' | 'medium';

export type SectionedCardCornerSize = 'small' | 'medium';

export interface SectionedCardProps extends WithTestId {
  /**
   * Header content.
   * if this is set as HeaderTabs component, the body prop will be ignored.
   */
  header?: React.ReactNode;
  /**
   * Body content.
   */
  body?: React.ReactNode;
  /**
   * Footer content.
   */
  footer?: React.ReactNode;
  /**
   * Whether the card has elevation (shadow).
   */
  hasElevation?: boolean;
  /**
   * Whether the card is draggable.
   */
  isDraggable?: boolean;
  /**
   * Whether the card is disabled.
   */
  isDisabled?: boolean;
  /**
   * Whether the card has a border for the header section.
   * it works only with Header component as header prop.
   *
   * @defaultValue true
   */
  hasBorderHeader?: boolean;
  /**
   * Size of the Sectioned Card.
   */
  size?: SectionedCardSize;
  /**
   * Corner size of the Sectioned Card.
   */
  cornerSize?: SectionedCardCornerSize;
}
