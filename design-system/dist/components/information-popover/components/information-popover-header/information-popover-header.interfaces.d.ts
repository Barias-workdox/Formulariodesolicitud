import { OverrideObject } from '../../../../themes/theme.interfaces';
import { IconButtonProps } from '../../../button/variants/icon-button/icon-button.interfaces';
import { TextProps } from '../../../text';
export interface InformationPopoverHeaderOverrides {
    Root?: OverrideObject<object>;
    Title?: OverrideObject<TextProps>;
    CloseButton?: OverrideObject<IconButtonProps>;
}
