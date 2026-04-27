import type { IconType } from '../popover-title-with-icon';
import type { ChatBotUser } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface InformationPopoverTitleCommonProps extends WithTestId {
  iconType?: IconType;
  showIcon?: boolean;
  user?: Pick<ChatBotUser, 'firstName'>;
}
