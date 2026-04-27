import { useCallback, useEffect, useState } from 'react';

import { ANCHOR, SIZE } from 'baseui/drawer';

import { useObserver } from '@components/utils/hooks/use-observer.hook';

import { SideNavStyled } from './side-nav.styles';

import type { Anchor, SizeProp } from 'baseui/drawer';

export type SideNavProps = React.PropsWithChildren<{
  /**
   * Sets if the component is open or if it is close
   */
  isOpen: boolean;
  /**
   * Sets the size of the component
   */
  size?: SizeProp;
  /**
   * Sets the position of the sidenav
   */
  anchor?: Anchor;
  /**
   * Sets the sibling element
   */
  sibling?: React.RefObject<HTMLElement>;
}>;

/**
 * Sidenav helps us to show content moving the content of the view
 */
const SideNav = ({
  isOpen,
  children,
  size = SIZE.default,
  anchor = ANCHOR.left,
  sibling = null,
}: SideNavProps): React.ReactElement => {
  const [height, setHeight] = useState('auto');
  const onResize = useCallback<(entries: ResizeObserverEntry[]) => void>((entries) => {
    setHeight(entries.length ? `${entries[0].target.clientHeight}px` : 'auto');
  }, []);

  useEffect(() => {
    if (sibling && sibling.current) {
      setHeight(sibling.current.clientHeight ? `${sibling.current.clientHeight}px` : 'auto');
    }
  }, [sibling]);

  useObserver({
    callback: onResize,
    element: sibling,
  });

  return (
    <SideNavStyled
      $isOpen={isOpen}
      $size={size}
      $anchor={anchor}
      $height={height}
    >
      {children}
    </SideNavStyled>
  );
};

export { SideNav };
