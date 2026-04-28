import { PopoverVariant } from '../../webdox-ai-button-information-popover.interfaces';
import { ChatBotUser } from '../../../../../interfaces';
import { WithTestId } from '../../../../../../../interfaces/common.interfaces';
interface InformationPopoverTitleProps extends WithTestId {
    popoverVariant: PopoverVariant;
    user?: Pick<ChatBotUser, 'firstName'>;
}
/**
 * A component that renders the title for an information popover based on the provided variant.
 *
 * The title includes an optional icon, an emoji, and a translated text string personalized with the user's name.
 */
export declare const InformationPopoverTitle: ({ popoverVariant, user: { firstName }, }: InformationPopoverTitleProps) => JSX.Element;
export {};
