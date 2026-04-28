import { DesignSystemTheme } from '../../../themes';
import { MessageBarColorParams } from '../messages.interfaces';
export declare const defaultColors: MessageBarColorParams['barsOverrides'];
/** Get the message bar color based on color overrides, author, current user and inquiry values */
export declare const getMessageBarColor: ({ authorId, currentUserId, type, barsOverrides, }: MessageBarColorParams) => keyof DesignSystemTheme["colors"];
