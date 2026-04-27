import type { PropsWithChildren } from 'react';

import { themedStyled } from '@themes/utilities';
import { getAllowedComponent } from '@utils/react.utils';

import { ALLOWED_SECTIONED_CARD_FOOTER_ELEMENTS } from '../constants/allowed-elements.constant';
import { useSectionedCard } from '../sectioned-card.provider';
import { getBorderRadiusSize, getSlotPadding } from '../utils/get-size-map';

import type { BorderKey } from '@tokens/borders';
import type { SpacingKey } from '@tokens/spacing';

export type SectionedCardBodyProps = PropsWithChildren<{
  id?: string | null;
}>;

interface BodyWrapperProps {
  $paddingSpacing: SpacingKey;
  $hasBorderTop?: boolean;
  $borderRadius?: Exclude<BorderKey, 'borderCircle'>;
}

/**
 * Get border styles string based on color
 */
const getBorderStyles = (color: string): string => `1px solid ${color}`;

export const BodyWrapper = themedStyled<'div', BodyWrapperProps>(
  'div',
  ({ $theme, $paddingSpacing, $hasBorderTop, $borderRadius = 'borderNone' }) => ({
    padding: $theme.spacing[$paddingSpacing],
    borderTop: $hasBorderTop ? getBorderStyles($theme.colors.neutralSubtle) : 'none',
    borderLeft: getBorderStyles($theme.colors.neutralSubtle),
    borderRight: getBorderStyles($theme.colors.neutralSubtle),
    borderBottom: getBorderStyles($theme.colors.neutralSubtle),
    borderRadius: `0 0 ${$theme.borders[$borderRadius]} ${$theme.borders[$borderRadius]}`,
    flexGrow: 1,
  }),
);

/**
 * Sectioned Card Footer component that wraps Footer component.
 */
export const SectionedCardBody = ({ children, id }: SectionedCardBodyProps): JSX.Element => {
  const { size, cornerSize, activeKey, hasBorderHeader, footer } = useSectionedCard();
  const borderRadius = getBorderRadiusSize(cornerSize);
  const slotPadding = getSlotPadding(size);
  const allowedFooter = getAllowedComponent(footer, ALLOWED_SECTIONED_CARD_FOOTER_ELEMENTS);
  const shouldRenderFooter = Boolean(allowedFooter);
  const bodyBorderRadius = shouldRenderFooter ? undefined : borderRadius;
  const shouldRenderBody = id === activeKey || activeKey === undefined;

  if (!shouldRenderBody) {
    return <></>;
  }

  return (
    <BodyWrapper
      $hasBorderTop={hasBorderHeader}
      $paddingSpacing={slotPadding}
      $borderRadius={bodyBorderRadius}
    >
      {children}
    </BodyWrapper>
  );
};
