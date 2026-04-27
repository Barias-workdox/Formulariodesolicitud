import { Chat } from '@carbon/icons-react';

import { Messages } from '@components/messages';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/index';
import { COMMON_ICON_SIZE_32 } from '@constants/common.constants';

import { HeaderTab } from '../header-tab';

import { styles } from './comments-tab.styles';

import type { MessagesProps } from '@components/messages';

export interface CommentsTabProps extends Pick<
  MessagesProps,
  'currentUserId' | 'messages' | 'users' | 'isLoading' | 'canCreate' | 'onCreate' | 'onPageEnd'
> {
  'data-testid'?: string;
  onClose(): void;
}

/**
 * CommentsTab is a component that renders the Messages component.
 */
export const CommentsTab = ({
  'data-testid': dataTestId = 'comments-tab',
  currentUserId,
  messages,
  users,
  isLoading,
  canCreate,
  onCreate,
  onPageEnd,
  onClose,
}: CommentsTabProps): JSX.Element => {
  const { t } = useTranslation();
  const { containerStyles, tabContentStyles } = useCss(styles);

  return (
    <div className={containerStyles}>
      <HeaderTab
        data-testid={dataTestId}
        title={t('contractNegotiationCollaboration.commentsTab.comments')}
        onClose={onClose}
        startEnhancerProps={{
          backgroundColor: 'brandWashed',
          Icon: Chat,
          size: COMMON_ICON_SIZE_32,
        }}
      />
      <div className={tabContentStyles}>
        <Messages
          data-testid={dataTestId}
          canCreate={canCreate}
          canDelete={false}
          canUpdate={false}
          currentUserId={currentUserId}
          direction="reverse"
          isLoading={isLoading}
          isMentionable
          isPaginated
          messages={messages}
          onCreate={onCreate}
          onPageEnd={onPageEnd}
          users={users}
        />
      </div>
    </div>
  );
};
