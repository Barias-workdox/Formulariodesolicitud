import type { ActionButtonConfig } from '../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.interfaces';
import type { WebdoxAIOptionType } from '../interfaces';
import type { KindType } from '@components/button';

export const INFORMATION_POPOVER_WIDTH = '320px';

export const DATA_EXTRACTION_BETA_ICON_SIZE = '20px';

export const MAX_CHAT_MESSAGE_TABLE_HEIGHT = '320px';

export const MAX_CHAT_MESSAGE_TABLE_CELL_WIDTH = '240px';

export const CHAT_SHORTCUT_HEIGHT = '76px';

export const MAX_CHAT_SHORTCUT_HEIGHT = '90px';

export const MAX_EXPANDED_CHAT_WIDTH = '700px';

export const MESSAGE_MAX_LENGTH = 50000;

export const DEFAULT_DOCUMENT_VIEWER_WRAPPER_ACTIONS: ActionButtonConfig[] = [
  {
    action: 'copy',
    isDisabled: false,
    isVisible: true,
    isLoading: false,
  },
  {
    action: 'close',
    isDisabled: false,
    isVisible: true,
    isLoading: false,
  },
];

/**
 * The duration in milliseconds used for the message animation.
 */
export const MESSAGE_ANIMATION_DURATION_MS = 250;

/**
 * Offset value in pixels used to determine if the scroll position is near the bottom of the list.
 * This tolerance helps account for small discrepancies in scroll calculations.
 */
export const MESSAGES_SCROLL_OFFSET = 300;

/**
 * The estimated size in pixels of each virtualized message item.
 * This value is used to optimize the virtualized list rendering.
 */
export const VIRTUALIZED_MESSAGE_ESTIMATE_SIZE = 500;

/**
 * The padding value in pixels used for the virtualized list.
 */
export const VIRTUALIZED_LIST_PADDING = 16;

/**
 * The gap value in pixels used for the virtualized list items.
 */
export const VIRTUALIZED_LIST_ITEMS_GAP = 16;

/**
 * The overscan value used for the virtualized list.
 */
export const VIRTUALIZED_LIST_OVERSCAN = 10;

/**
 * Maps `WebdoxAIOptionType` values to specific `KindType` values for message footer buttons.
 */
export const MESSAGE_FOOTER_BUTTON_KIND_MAP: Record<WebdoxAIOptionType, KindType> = {
  brainCompanion: 'tertiary-brain',
  legalWhisper: 'tertiary-whisper',
};

export const CHAT_QUESTION_MAX_WIDTH = '80%';

/** Minimum number of legal quotes to show */
export const MIN_LEGAL_QUOTES_VISIBLE = 5;

/** Minimum number of quotes to show */
export const MIN_QUOTES_VISIBLE = 3;
