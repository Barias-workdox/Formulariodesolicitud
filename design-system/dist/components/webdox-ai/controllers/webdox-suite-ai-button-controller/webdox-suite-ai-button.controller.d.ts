import { WebdoxAIButtonInformationPopoverNextProps, WebdoxAICollapsibleButtonProps } from '../../components';
import { ChatBotUser, WebdoxAIErrorType, WebdoxAIOptionType } from '../../interfaces';
import { PlacementType } from '../../../../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
export type OptionConfig = {
    type: WebdoxAIOptionType;
    isLoading?: boolean;
    disabled?: boolean;
    errorType?: WebdoxAIErrorType;
};
export interface WebdoxSuiteAIButtonControllerProps extends Pick<WebdoxAICollapsibleButtonProps, 'direction'> {
    'data-testid': string;
    user: Pick<ChatBotUser, 'firstName'>;
    placement: PlacementType;
    options: OptionConfig[];
    zIndex?: number;
    customLeft?: StyleObject['left'];
    customRight?: StyleObject['right'];
    popoverProps?: Pick<WebdoxAIButtonInformationPopoverNextProps, 'onSubmit' | 'sendTextValue' | 'isDisabled'> & {
        autoOpen?: boolean;
        onClose?(): void;
    };
    onClickOption?(optionType: WebdoxAIOptionType): void;
}
/**
 * The `WebdoxSuiteAIButtonController` component renders a collapsible button
 * with an integrated information popover. It manages different states such
 * as loading, active, and error, and allows for user interaction through options
 * and popover actions.
 */
export declare const WebdoxSuiteAIButtonController: ({ "data-testid": dataTestId, direction, options, placement, popoverProps, user, zIndex, customLeft, customRight, onClickOption, }: WebdoxSuiteAIButtonControllerProps) => JSX.Element;
