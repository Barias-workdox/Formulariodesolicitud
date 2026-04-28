import { ReactElement, ReactNode } from 'react';
import { DesignSystemColorType, DesignSystemTheme, OverrideObject } from '../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export interface FullScreenLayoutProps {
    children: ReactNode;
}
export interface FullScreenHeaderOverrides {
    Root?: OverrideObject<object>;
    InnerContainer?: OverrideObject<object>;
}
export interface FullScreenHeaderProps {
    startEnhancer?: ReactElement;
    endEnhancer?: ReactElement;
    /** Indicates if element will render a bottom shadow as a wider border. */
    hasElevation?: boolean;
    $padding?: StyleObject['padding'];
    children: ReactNode;
    overrides?: FullScreenHeaderOverrides;
}
export type AsideOrientation = 'right' | 'left';
/** Styled component for the header of the full-screen-layout component */
export declare const FullScreenHeader: ({ startEnhancer, endEnhancer, children, hasElevation, $padding, overrides, }: FullScreenHeaderProps) => ReactElement;
/** Styled component for the body of the full-screen-layout component */
export declare const FullScreenBody: import('styletron-react').StyletronComponent<"div", {
    $theme?: DesignSystemTheme;
    $hasAside?: boolean;
    $padding?: StyleObject["padding"];
    $backgroundColor?: StyleObject["backgroundColor"] & DesignSystemColorType;
}>;
/** Styled component for the footer of the full-screen-layout component */
export declare const FullScreenAside: import('styletron-react').StyletronComponent<"div", {
    $theme?: DesignSystemTheme;
    $width?: StyleObject["width"];
    orientation?: AsideOrientation;
}>;
/** Styled component for the footer of the full-screen-layout component */
export declare const FullScreenFooter: import('styletron-react').StyletronComponent<"div", {
    $theme?: DesignSystemTheme;
    $padding?: StyleObject["padding"];
}>;
/** Layout with header, body and optional footer */
export declare const FullScreenLayout: import('styletron-react').StyletronComponent<"div", {}>;
