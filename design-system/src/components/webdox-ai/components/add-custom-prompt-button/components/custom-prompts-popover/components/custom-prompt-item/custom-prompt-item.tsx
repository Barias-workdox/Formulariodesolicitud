import { Edit, TrashCan } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { ListItem } from '@components/list';
import { BlockedFeatureTooltip } from '@components/webdox-ai/components/blocked-feature-tooltip';

import { StyledListItemEndEnhancer } from '../../styled-components';

import { listItemOverrides } from './custom-prompt-item.overrides';

import type { IconButtonProps } from '@components/button/variants/icon-button/icon-button.interfaces';
import type { CustomPrompt } from '@components/webdox-ai/interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type CustomPromptItemProps = WithTestId<
  WithZIndex<{
    isEditingDisabled: boolean;
    itemData: CustomPrompt;
    onClick(): void;
    onDelete(): void;
    onEdit(): void;
  }>
>;

/**
 * Component to display a custom prompt item in a list.
 * It shows the title and content of the prompt, and provides buttons to edit or delete it.
 */
export const CustomPromptItem = ({
  'data-testid': dataTestId = 'custom-prompt-item',
  isEditingDisabled,
  itemData: { content, title },
  zIndex,
  onClick,
  onDelete,
  onEdit,
}: CustomPromptItemProps): JSX.Element => {
  /** Function to handle the click event on the delete button. */
  const handleDelete: IconButtonProps['onClick'] = (event) => {
    event.stopPropagation();
    onDelete();
  };

  /** Function to handle the click event on the edit button. */
  const handleEdit: IconButtonProps['onClick'] = (event) => {
    event.stopPropagation();
    onEdit();
  };

  return (
    <ListItem
      data-testid={dataTestId}
      onClick={onClick}
      overrides={listItemOverrides}
      label={title || content}
      endEnhancer={
        <StyledListItemEndEnhancer>
          <BlockedFeatureTooltip
            isBlocked={isEditingDisabled}
            zIndex={zIndex}
          >
            <IconButton
              data-testid={`${dataTestId}--edit-button`}
              kind="link-tertiary"
              onClick={handleEdit}
              size="32px"
              disabled={isEditingDisabled}
            >
              <Edit />
            </IconButton>
          </BlockedFeatureTooltip>
          <BlockedFeatureTooltip
            isBlocked={isEditingDisabled}
            zIndex={zIndex}
          >
            <IconButton
              data-testid={`${dataTestId}--delete-button`}
              kind="link-tertiary"
              onClick={handleDelete}
              size="32px"
              disabled={isEditingDisabled}
            >
              <TrashCan />
            </IconButton>
          </BlockedFeatureTooltip>
        </StyledListItemEndEnhancer>
      }
    />
  );
};
