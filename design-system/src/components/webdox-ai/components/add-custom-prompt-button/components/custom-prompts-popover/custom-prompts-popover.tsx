import type { PropsWithChildren } from 'react';

import { AddAlt } from '@carbon/icons-react';

import { Button } from '@components/button';
import { StatelessPopover } from '@components/popover';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { BlockedFeatureTooltip } from '../../../blocked-feature-tooltip';

import { CustomPromptItem } from './components/custom-prompt-item';
import { CustomPromptsEmptyState } from './components/custom-prompts-empty-state';
import { styles } from './custom-prompts-popover.styles';
import {
  StyledFooter,
  StyledHeader,
  StyledListContainer,
  StyledPopoverContent,
  StyledPromptsList,
} from './styled-components';

import type { CustomPrompt } from '@components/webdox-ai/interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type CustomPromptsPopoverProps = PropsWithChildren<
  WithTestId<
    WithZIndex<{
      isEditingDisabled: boolean;
      isOpen: boolean;
      prompts?: CustomPrompt[];
      onClose(): void;
      onCreateButtonClick(): void;
      onCustomPromptClick(prompt: CustomPrompt): void;
      onCustomPromptDelete(prompt: CustomPrompt): void;
      onCustomPromptEdit(prompt: CustomPrompt): void;
    }>
  >
>;

/**
 * Component to display a popover with custom prompts.
 * It shows a list of custom prompts and allows the user to add, edit, or delete them.
 * If there are no custom prompts, it shows an empty state.
 */
export const CustomPromptsPopover = ({
  'data-testid': dataTestId = 'custom-prompts-popover',
  zIndex,
  children,
  prompts = [],
  isEditingDisabled,
  isOpen,
  onClose,
  onCreateButtonClick,
  onCustomPromptClick,
  onCustomPromptDelete,
  onCustomPromptEdit,
}: CustomPromptsPopoverProps): JSX.Element => {
  const { t } = useTranslation();
  const { theme } = useCss();

  return (
    <StatelessPopover
      isOpen={isOpen}
      onClickOutside={onClose}
      ignoreBoundary
      placement="topLeft"
      onEsc={onClose}
      autoFocus={false}
      zIndex={zIndex}
      content={
        <StyledPopoverContent>
          {prompts.length === 0 ? (
            <CustomPromptsEmptyState />
          ) : (
            <StyledListContainer>
              <StyledHeader>
                <Text
                  variant="upperDetails"
                  color="neutralSubdued"
                  margin={0}
                  $style={styles.titleTextStyles(theme)}
                >
                  {t('webdoxAI.chat.customPrompts.myPrompts')}
                </Text>
                <Text
                  variant="upperDetails"
                  color="brand"
                  margin={0}
                  $style={styles.titleTextStyles(theme)}
                >
                  {`(${prompts.length})`}
                </Text>
              </StyledHeader>
              <StyledPromptsList>
                {prompts.map((customPrompt) => (
                  <CustomPromptItem
                    data-testid={`${dataTestId}__item-${customPrompt.id}`}
                    isEditingDisabled={isEditingDisabled}
                    itemData={customPrompt}
                    key={customPrompt.id}
                    zIndex={zIndex}
                    onClick={() => onCustomPromptClick(customPrompt)}
                    onDelete={() => onCustomPromptDelete(customPrompt)}
                    onEdit={() => onCustomPromptEdit(customPrompt)}
                  />
                ))}
              </StyledPromptsList>
            </StyledListContainer>
          )}

          <StyledFooter>
            <BlockedFeatureTooltip
              isBlocked={isEditingDisabled}
              zIndex={zIndex}
            >
              <Button
                data-testid={`${dataTestId}__create-button`}
                kind="link-secondary"
                size="32px"
                startEnhancer={<AddAlt />}
                onClick={onCreateButtonClick}
                disabled={isEditingDisabled}
              >
                {t('webdoxAI.chat.customPrompts.addCustomPrompt')}
              </Button>
            </BlockedFeatureTooltip>
          </StyledFooter>
        </StyledPopoverContent>
      }
    >
      {children}
    </StatelessPopover>
  );
};
