import { getAllAllowedComponent, getAllowedComponent } from '@utils/react.utils';

import { ALLOWED_SECTIONED_CARD_BODY_ELEMENTS } from './constants/allowed-body-elements.constant';
import {
  ALLOWED_SECTIONED_CARD_FOOTER_ELEMENTS,
  ALLOWED_SECTIONED_CARD_HEADER_ELEMENTS,
} from './constants/allowed-elements.constant';
import { SectionedCardWrapper } from './sectioned-card.styled';
import { getBorderRadiusSize } from './utils/get-size-map';

import type { SectionedCardProps } from './sectioned-card.interfaces';

/**
 * Sectioned Card component with Header, Body, and Footer sections.
 */
export const SectionedCardComponent = ({
  header,
  body,
  footer,
  hasElevation,
  cornerSize,
}: SectionedCardProps): JSX.Element => {
  const allowedHeader = getAllowedComponent(header, ALLOWED_SECTIONED_CARD_HEADER_ELEMENTS);
  const allowedFooter = getAllowedComponent(footer, ALLOWED_SECTIONED_CARD_FOOTER_ELEMENTS);
  const allowedBody = getAllAllowedComponent(body, ALLOWED_SECTIONED_CARD_BODY_ELEMENTS);
  const shouldRenderFooter = Boolean(allowedFooter);

  const borderRadius = getBorderRadiusSize(cornerSize);

  return (
    <SectionedCardWrapper
      $hasElevation={hasElevation}
      $borderRadius={borderRadius}
    >
      {allowedHeader}
      {allowedBody}
      {shouldRenderFooter && allowedFooter}
    </SectionedCardWrapper>
  );
};
