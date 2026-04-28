import { SideNavProps } from './components/side-nav/side-nav';
import { DrawerType } from './drawer.interfaces';
import { Anchor, DrawerProps as BaseDrawerProps, DrawerOverrides, SizeProp } from 'baseui/drawer';
export interface DrawerProps extends Omit<BaseDrawerProps, 'autoFocus' | 'onClose' | 'animate' | 'closeable' | 'size' | 'backdrop' | 'anchor' | 'overrides' | 'showBackdrop'>, Omit<SideNavProps, 'children'> {
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
    onClose?(any?: any): void;
}
/** Styled drawer to be opened in the right side of the page */
export declare function Drawer({ zIndex, animate, closeable, size, anchor, overrides, showBackdrop, autoFocus, drawerType, children, isOpen, sibling, ...rest }: DrawerProps): React.ReactElement;
