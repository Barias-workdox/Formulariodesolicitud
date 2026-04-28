import { IconType } from '../popover-title-with-icon';
import { ChatBotUser } from '../../../../../interfaces';
import { WithTestId } from '../../../../../../../interfaces/common.interfaces';
export interface InformationPopoverTitleCommonProps extends WithTestId {
    iconType?: IconType;
    showIcon?: boolean;
    user?: Pick<ChatBotUser, 'firstName'>;
}
