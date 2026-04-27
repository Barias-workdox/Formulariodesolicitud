import { Edit, TrashCan } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';

import { StyledTitleWrapper } from './styled-components';

import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

interface ConversationListItemContentProps extends WithTestId, WithZIndex {
  conversation: LegalWhisperConversationListItemType;
  isHovered?: boolean;
  isSelected: boolean;
  onEditConversation(): void;
  onDeleteConversation(): void;
}

/**
 * Component that displays the content of a conversation list item.
 * It shows the title of the conversation and the actions to edit or delete it.
 * It is used in the conversation selector component.
 */
export const ConversationListItemContent = ({
  dataTestId = 'conversation-list-item-content',
  zIndex,
  conversation,
  isHovered,
  isSelected,
  onEditConversation,
  onDeleteConversation,
}: ConversationListItemContentProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <StyledTitleWrapper>
        <TruncatedText
          zIndex={zIndex}
          textProps={{ variant: 'body', color: 'neutralMedium', margin: 0 }}
          tooltipProps={{
            placement: 'topLeft',
            content: conversation.title,
          }}
        >
          {conversation.title}
        </TruncatedText>
      </StyledTitleWrapper>
      {(isHovered || isSelected) && (
        <>
          <StatefulTooltipNext
            content={t('general.rename')}
            showArrow
            zIndex={zIndex}
          >
            <IconButton
              dataTestId={`${dataTestId}--edit-button`}
              onClick={onEditConversation}
              size="24px"
              kind="link-tertiary"
            >
              <Edit />
            </IconButton>
          </StatefulTooltipNext>
          <StatefulTooltipNext
            content={t('general.delete')}
            showArrow
            zIndex={zIndex}
          >
            <IconButton
              dataTestId={`${dataTestId}--delete-button`}
              onClick={onDeleteConversation}
              size="24px"
              kind="link-tertiary"
            >
              <TrashCan />
            </IconButton>
          </StatefulTooltipNext>
        </>
      )}
    </>
  );
};
