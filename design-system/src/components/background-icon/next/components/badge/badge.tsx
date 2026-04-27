import { StyledBadgeRoot } from './badge.styles';

import type {
  BackgroundIconKind,
  BackgroundIconShape,
  BackgroundIconSize,
} from '../../background-icon.interfaces';

/**
 * Props for the Badge component.
 */
export interface BadgeProps {
  /** The shape of the parent BackgroundIcon */
  shape: BackgroundIconShape;
  /** The kind of the parent BackgroundIcon */
  kind: BackgroundIconKind;
  /** The size of the parent BackgroundIcon */
  size: BackgroundIconSize;
  /** Test ID for the badge */
  'data-testid'?: string;
}

/**
 * Badge component for the BackgroundIcon.
 * Displays a notification indicator in the top-right corner.
 *
 * @remarks
 * This component should only be rendered when the parent determines
 * the badge should be visible (conditional rendering in parent).
 */
export const Badge = ({
  kind,
  size,
  shape,
  'data-testid': dataTestId = 'badge',
}: BadgeProps): JSX.Element => {
  return (
    <StyledBadgeRoot
      $kind={kind}
      $size={size}
      $shape={shape}
      data-testid={dataTestId}
      aria-hidden="true"
    />
  );
};
