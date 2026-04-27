import type { OverrideObject } from '../../../../themes/theme.interfaces';
import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { TextProps } from '@components/text';

export interface InformationPopoverHeaderOverrides {
  Root?: OverrideObject<object>;
  Title?: OverrideObject<TextProps>;
  CloseButton?: OverrideObject<IconButtonProps>;
}
