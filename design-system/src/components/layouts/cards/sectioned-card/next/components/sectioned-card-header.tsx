import { useEffect } from 'react';

import { Header } from '@components/header';
import { noop } from '@utils/noop';

import { useSectionedCard } from '../sectioned-card.provider';
import { getBorderRadiusSize, getHeaderSize } from '../utils/get-size-map';

import type { HeaderProps } from '@components/header/header.interfaces';

export type SectionedCardHeaderProps = Omit<HeaderProps, 'size' | 'isDraggable' | 'isDisabled'>;

/**
 * Sectioned Card Header component that wraps Header component.
 */
export const SectionedCardHeader = (props: SectionedCardHeaderProps): JSX.Element => {
  const { size, cornerSize, isDraggable, isDisabled, setActiveKey = noop } = useSectionedCard();

  useEffect(() => {
    setActiveKey();
  }, [setActiveKey]);

  const headerSize = getHeaderSize(size);
  const borderRadius = getBorderRadiusSize(cornerSize);

  return (
    <Header
      {...props}
      isDraggable={isDraggable}
      isDisabled={isDisabled}
      size={headerSize}
      borderRadius={borderRadius}
    />
  );
};
