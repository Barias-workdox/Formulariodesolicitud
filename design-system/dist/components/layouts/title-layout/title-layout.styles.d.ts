import { TitleLayoutProps } from './title-layout';
import { DesignSystemTheme } from '../../../themes';
import { StyleObject } from 'styletron-standard';
type IconContainerOptions = {
    hasIcon: boolean;
    overrides?: TitleLayoutProps['overrides'];
};
/** Styled component for the grid layout of an icon on the left and a title and subtitle on the right */
export declare const TitleLayoutContainer: import('styletron-react').StyletronComponent<"div", {
    $hasIcon: boolean;
    $style?: StyleObject;
}>;
export declare const titleLayoutStyles: {
    iconContainer: (_: DesignSystemTheme, { hasIcon, overrides }: IconContainerOptions) => StyleObject;
};
/** Styled component for title container, having conditional if the layout has subtitle or not */
export declare const TitleLayoutTitleContainer: import('styletron-react').StyletronComponent<"div", {
    $hasSubtitle: boolean;
    $style?: StyleObject;
}>;
/** Styled component for subtitle container, it will be located bellow the title by default */
export declare const TitleLayoutSubtitleContainer: import('styletron-react').StyletronComponent<"div", {
    $style: StyleObject;
}>;
/** Styles with ellipsis used mainly by tables */
export declare const commonTitleLayoutTextStyles: (theme: DesignSystemTheme, $style?: StyleObject) => StyleObject;
export {};
