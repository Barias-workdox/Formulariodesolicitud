import { SpacingKey } from '../../themes/v3/tokens';
import { Typography } from 'baseui/themes';
export interface GetHeaderTabOverridesProps {
    paddingSize: SpacingKey;
    tabPaddingSize: SpacingKey;
    topPaddingSize: SpacingKey;
    tabFontSize: keyof Typography;
}
/**
 * Header Tab Overrides
 */
export declare const getHeaderTabOverrides: ({ paddingSize, tabPaddingSize, topPaddingSize, tabFontSize, }: GetHeaderTabOverridesProps) => {
    readonly TabList: {
        readonly style: ({ $theme }: any) => {
            padding: string;
        };
    };
    readonly Tab: {
        readonly style: ({ $theme }: any) => any;
    };
    readonly TabPanel: {
        readonly style: ({ $theme, children }: any) => {
            /**
             * render padding only if there are children to avoid extra space
             */
            padding: any;
        };
    };
};
