import { Drawer as BaseWebDrawer } from 'baseui/drawer';

import { drawerOverrides } from './components/drawer.styles';
import { SideNav } from './components/side-nav/side-nav';

import type { SideNavProps } from './components/side-nav/side-nav';
import type { DrawerType } from './drawer.interfaces';
import type {
  Anchor,
  DrawerProps as BaseDrawerProps,
  DrawerOverrides,
  SizeProp,
} from 'baseui/drawer';

export interface DrawerProps
  extends
    Omit<
      BaseDrawerProps,
      | 'autoFocus'
      | 'onClose'
      | 'animate'
      | 'closeable'
      | 'size'
      | 'backdrop'
      | 'anchor'
      | 'overrides'
      | 'showBackdrop'
    >,
    Omit<SideNavProps, 'children'> {
  /**
   * A Prop required to work with zIndex of `DocumentViewerModal` legacy component
   *
   * @deprecated Only required for legacy support with `DocumentViewerModal`
   */
  zIndex?: number;
  /** Sets whether the Drawer should be displayed by easing in and out */
  animate?: boolean;
  /**
   * If true, focus will shift to the first interactive element within the drawer.
   * If false, the drawer container itself will receive focus.
   * Moving focus into a newly opened drawer is important for accessibility purposes, so please be careful!
   */
  autoFocus?: boolean;
  /**
   * Whether the modal should be closeable by the user
   *  (either via escape, backdrop click, etc). You can set this to
   * false if your modal has an action that the user must take before closing.
   */
  closeable?: boolean;
  overrides?: DrawerOverrides;
  /**
   * Controls the size of the modal (primarily width).
   * Can be a SIZE constant or css width property value.
   */
  size?: SizeProp;
  anchor?: Anchor;
  /** Whether the backdrop should be present */
  showBackdrop?: boolean;
  /**
   * @defaultValue 'front'
   */
  drawerType?: DrawerType;
  sibling?: React.RefObject<HTMLElement>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClose?(any?: any): void;
}

/** Styled drawer to be opened in the right side of the page */
export function Drawer({
  zIndex,
  animate = true,
  closeable = true,
  size = 'default',
  anchor = 'right',
  overrides = {},
  showBackdrop = true,
  autoFocus = false,
  drawerType = 'front',
  children,
  isOpen,
  sibling = null,
  ...rest
}: DrawerProps): React.ReactElement {
  if (drawerType === 'front') {
    return (
      <BaseWebDrawer
        autoFocus={autoFocus}
        animate={animate}
        closeable={closeable}
        size={size}
        anchor={anchor}
        showBackdrop={showBackdrop}
        isOpen={isOpen}
        {...rest}
        overrides={drawerOverrides({ overrides, zIndex })}
      >
        {children}
      </BaseWebDrawer>
    );
  }

  return (
    <SideNav
      isOpen={isOpen}
      size={size}
      anchor={anchor}
      sibling={sibling}
    >
      {children}
    </SideNav>
  );
}
