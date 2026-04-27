import type { WebdoxAIButtonInformationPopoverProps, WebdoxAIButtonProps } from '../../components';
import type { OverrideObject } from '@themes/theme.interfaces';

export interface WebdoxAIButtonControllerOverrides {
  Popover?: OverrideObject<WebdoxAIButtonInformationPopoverProps>;
  Button?: OverrideObject<WebdoxAIButtonProps>;
}
