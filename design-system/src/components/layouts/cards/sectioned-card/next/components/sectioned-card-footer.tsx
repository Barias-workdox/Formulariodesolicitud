import { Footer } from '@components/footer';

import { useSectionedCard } from '../sectioned-card.provider';
import { getBorderRadiusSize, getFooterSize } from '../utils/get-size-map';

import type { FooterProps } from '@components/footer/footer.interfaces';

export type SectionedCardFooterProps = Omit<FooterProps, 'size' | 'borderRadius' | 'isDisabled'>;

/**
 * Sectioned Card Footer component that wraps Footer component.
 */
export const SectionedCardFooter = (props: SectionedCardFooterProps): JSX.Element => {
  const { size, cornerSize, isDisabled } = useSectionedCard();

  const headerTabsSize = getFooterSize(size);
  const borderRadius = getBorderRadiusSize(cornerSize);

  return (
    <Footer
      {...props}
      isDisabled={isDisabled}
      borderRadius={borderRadius}
      size={headerTabsSize}
    />
  );
};
