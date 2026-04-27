import { CodeBlock } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import { CustomPromptsPopover } from './components/custom-prompts-popover';

import type { CustomPrompt } from '@components/webdox-ai/interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type AddCustomPromptButtonProps = WithZIndex<
  WithTestId<{
    customPrompts: CustomPrompt[];
    isEditingDisabled: boolean;
    isOpen: boolean;
    onClose(): void;
    onCreateButtonClick(): void;
    onCustomPromptClick(prompt: CustomPrompt): void;
    onCustomPromptDelete(prompt: CustomPrompt): void;
    onCustomPromptEdit(prompt: CustomPrompt): void;
    onOpen(): void;
  }>
>;

/**
 * Button to add a custom prompt.
 * It will open a popover with the list of custom prompts.
 * The popover will have a button to create a new custom prompt.
 */
export const AddCustomPromptButton = ({
  dataTestId = 'add-custom-prompt',
  customPrompts,
  isEditingDisabled,
  isOpen,
  zIndex,
  onClose,
  onCreateButtonClick,
  onCustomPromptClick,
  onCustomPromptDelete,
  onCustomPromptEdit,
  onOpen,
}: AddCustomPromptButtonProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <CustomPromptsPopover
      data-testid={`${dataTestId}__popover`}
      isEditingDisabled={isEditingDisabled}
      isOpen={isOpen}
      onClose={onClose}
      onCreateButtonClick={onCreateButtonClick}
      onCustomPromptClick={onCustomPromptClick}
      onCustomPromptDelete={onCustomPromptDelete}
      onCustomPromptEdit={onCustomPromptEdit}
      prompts={customPrompts}
      zIndex={zIndex}
    >
      <StatefulTooltipNext
        content={t('webdoxAI.chat.customPrompts.mySavedPrompts')}
        placement="bottomRight"
        showArrow
        zIndex={zIndex}
      >
        <IconButton
          dataTestId={`${dataTestId}__button`}
          kind="tertiary"
          size="32px"
          onClick={isOpen ? onClose : onOpen}
        >
          <CodeBlock />
        </IconButton>
      </StatefulTooltipNext>
    </CustomPromptsPopover>
  );
};
