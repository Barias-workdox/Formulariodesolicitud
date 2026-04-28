import { ReactElement } from 'react';
import { SidebarProps } from '../../sidebar.interface';
export declare const Sidebar: (({ children }: SidebarProps) => ReactElement) & {
    Content: import('react').ForwardRefExoticComponent<Omit<{
        $as?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
    } & {
        $isCollapsed?: boolean;
    } & {
        $style?: import('styletron-standard').StyleObject | ((props: {
            $isCollapsed?: boolean;
        }) => import('styletron-standard').StyleObject) | undefined;
        className?: string;
    } & Omit<any, "$style" | "className" | "$isCollapsed">, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
    Footer: import('react').ForwardRefExoticComponent<Omit<{
        $as?: import('react').ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
    } & {
        $isCollapsed?: boolean;
        $isScrollable?: boolean;
    } & {
        $style?: import('styletron-standard').StyleObject | ((props: {
            $isCollapsed?: boolean;
            $isScrollable?: boolean;
        }) => import('styletron-standard').StyleObject) | undefined;
        className?: string;
    } & Omit<any, "$style" | "className" | "$isScrollable" | "$isCollapsed">, "ref"> & import('react').RefAttributes<HTMLDivElement>>;
};
