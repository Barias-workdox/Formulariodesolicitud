import { ActionButtonConfig } from '../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.interfaces';
import { WebdoxAIOptionType } from '../interfaces';
import { KindType } from '../../button';
export declare const INFORMATION_POPOVER_WIDTH = "320px";
export declare const DATA_EXTRACTION_BETA_ICON_SIZE = "20px";
export declare const MAX_CHAT_MESSAGE_TABLE_HEIGHT = "320px";
export declare const MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH = "240px";
export declare const CHAT_SHORTCUT_HEIGHT = "76px";
export declare const MAX_CHAT_SHORTCUT_HEIGHT = "90px";
export declare const MAX_EXPANDED_CHAT_WIDTH = "700px";
export declare const MESSAGE_MAX_LENGTH = 50000;
export declare const DEFAULT_DOCUMENT_VIEWER_WRAPPER_ACTIONS: ActionButtonConfig[];
/**
 * The duration in milliseconds used for the message animation.
 */
export declare const MESSAGE_ANIMATION_DURATION_MS = 250;
/**
 * Offset value in pixels used to determine if the scroll position is near the bottom of the list.
 * This tolerance helps account for small discrepancies in scroll calculations.
 */
export declare const MESSAGES_SCROLL_OFFSET = 300;
/**
 * The estimated size in pixels of each virtualized message item.
 * This value is used to optimize the virtualized list rendering.
 */
export declare const VIRTUALIZED_MESSAGE_ESTIMATE_SIZE = 500;
/**
 * The padding value in pixels used for the virtualized list.
 */
export declare const VIRTUALIZED_LIST_PADDING = 16;
/**
 * The gap value in pixels used for the virtualized list items.
 */
export declare const VIRTUALIZED_LIST_ITEMS_GAP = 16;
/**
 * The overscan value used for the virtualized list.
 */
export declare const VIRTUALIZED_LIST_OVERSCAN = 10;
/**
 * Maps `WebdoxAIOptionType` values to specific `KindType` values for message footer buttons.
 */
export declare const MESSAGE_FOOTER_BUTTON_KIND_MAP: Record<WebdoxAIOptionType, KindType>;
export declare const CHAT_QUESTION_MAX_WIDTH = "80%";
/** Minimum number of legal quotes to show */
export declare const MIN_LEGAL_QUOTES_VISIBLE = 5;
/** Minimum number of quotes to show */
export declare const MIN_QUOTES_VISIBLE = 3;
