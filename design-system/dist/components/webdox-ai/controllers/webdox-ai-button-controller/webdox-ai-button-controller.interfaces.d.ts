import { WebdoxAIButtonInformationPopoverProps, WebdoxAIButtonProps } from '../../components';
import { OverrideObject } from '../../../../themes/theme.interfaces';
export interface WebdoxAIButtonControllerOverrides {
    Popover?: OverrideObject<WebdoxAIButtonInformationPopoverProps>;
    Button?: OverrideObject<WebdoxAIButtonProps>;
}
