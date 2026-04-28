import { InformationPopoverOverrides } from '../../../information-popover/information-popover.interfaces';
import { DesignSystemTheme } from '../../../../themes/theme.interfaces';
import { ButtonOverrides } from 'baseui/button';
import { StyleObject } from 'styletron-react';
export declare const styles: {
    boldTextStyles: (theme: DesignSystemTheme) => StyleObject;
    popoverContentStyles: (theme: DesignSystemTheme) => StyleObject;
};
/** Styled component to wrap an Emoji. */
export declare const StyledEmoji: import('styletron-react').StyletronComponent<"span", {}>;
/** Styled component to wrap Action Buttons. */
export declare const StyledActionsContainer: import('styletron-react').StyletronComponent<"div", {}>;
export declare const informationPopoverOverrides: InformationPopoverOverrides;
export declare const legalWhisperInformationPopoverOverrides: InformationPopoverOverrides;
export declare const informationPopoverWithActionsOverrides: InformationPopoverOverrides;
export declare const actionButtonOverrides: ButtonOverrides;
