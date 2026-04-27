import type { PopoverVariant } from '../../webdox-ai-button-information-popover.interfaces';
import type { WebdoxAIOptionType } from '@components/webdox-ai/interfaces/webdox-ai.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface InformationPopoverContentCommonProps extends WithTestId {
  popoverVariant: PopoverVariant;
  /** Indicates whether the content inside the popover should be disabled. */
  isDisabled?: boolean;
  /** The current value of the input field within the popover, if applicable. */
  sendTextValue?: string;
  /** Callback function triggered when the input field value changes. */
  onInputChange?(value: string): void;
  /** Callback function triggered when the button inside the popover is clicked. */
  onSubmit?(params: { optionType: WebdoxAIOptionType; value: string }): void;
}
