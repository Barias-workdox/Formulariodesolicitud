import { useMemo } from 'react';

import { InformationPopover } from '@components/information-popover';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { InformationPopoverContent, InformationPopoverTitle } from './components';
import { getInformationPopoverOverrides } from './webdox-ai-button-information-popover.overrides';

import type { PopoverVariant } from './webdox-ai-button-information-popover.interfaces';
import type { InformationPopoverProps } from '@components/information-popover';
import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';
import type { ChatBotUser, WebdoxAIOptionType } from '@components/webdox-ai/interfaces';

export interface WebdoxAIButtonInformationPopoverProps extends Pick<
  InformationPopoverProps,
  | 'data-testid'
  | 'children'
  | 'overrides'
  | 'isOpen'
  | 'onClick'
  | 'onClickOutside'
  | 'onEsc'
  | 'close'
  | 'placement'
> {
  variant: PopoverVariant;
  isDisabled?: boolean;
  sendTextValue?: string;
  user: Pick<ChatBotUser, 'firstName'>;
  onSubmit?(params: { optionType: WebdoxAIOptionType; value: string }): void;
}

/**
 * A component that renders an information popover based on the provided variant.
 *
 * This component uses a customizable `InformationPopover` that supports various content and styles
 * defined by the provided `variant`. It allows integration of children, custom overrides, and handlers
 * for user interactions such as sending text, closing the popover, or reacting to clicks outside of the popover.
 */
export const WebdoxAIButtonInformationPopover = ({
  'data-testid': dataTestId,
  user,
  variant,
  children,
  overrides = {},
  isDisabled,
  sendTextValue,
  onSubmit,
  ...rest
}: WebdoxAIButtonInformationPopoverProps): JSX.Element => {
  const mergedOverrides = useMemo(() => {
    return mergeOverridesDeep<InformationPopoverOverrides>(
      getInformationPopoverOverrides({ popoverVariant: variant }),
      overrides,
    );
  }, [overrides, variant]);

  return (
    <InformationPopover
      {...rest}
      data-testid={dataTestId}
      overrides={mergedOverrides}
      title={
        <InformationPopoverTitle
          data-testid={`${dataTestId}__title`}
          popoverVariant={variant}
          user={user}
        />
      }
      content={
        <InformationPopoverContent
          data-testid={`${dataTestId}__content`}
          popoverVariant={variant}
          isDisabled={isDisabled}
          onSubmit={onSubmit}
          sendTextValue={sendTextValue}
        />
      }
    >
      {children}
    </InformationPopover>
  );
};
