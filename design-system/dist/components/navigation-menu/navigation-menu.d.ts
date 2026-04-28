import { PropsWithChildren } from 'react';
declare const NavigationMenu: (({ children }: PropsWithChildren<object>) => JSX.Element) & {
    MenuItem: ({ "data-testid": dataTestId, counter, disabled, label, size, startEnhancer, href, onClick, }: import('./components/menu-item').MenuItemProps) => JSX.Element;
    BackgroundIcon: ({ menuItemSize, size, ...props }: import('./components/navigation-menu-background-icon').NavigationMenuBackgroundIconProps) => JSX.Element;
};
export { NavigationMenu };
