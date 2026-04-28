import { Anchor, SizeProp } from 'baseui/drawer';
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
declare const SideNav: ({ isOpen, children, size, anchor, sibling, }: SideNavProps) => React.ReactElement;
export { SideNav };
