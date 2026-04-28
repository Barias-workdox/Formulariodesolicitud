import { MessageCardColorsMapValue, MessageCardStylesConfiguration } from './message-card.interfaces';
/** Color map for an default message card. */
export declare const baseMessageCardColorsMap: MessageCardColorsMapValue;
/** Color map for an hovered message card */
export declare const hoveredMessageCardColorsMap: MessageCardColorsMapValue;
/**
 * Retrieves the appropriate color map based on the current state of the message card.
 * Prioritizes the following states in order:
 * 1. Disabled
 * 2. Active
 * 3. Hovered
 * 4. Default
 */
export declare const getMessageCardColorsMap: ({ $disabled, $isActive, $isHovered, }: MessageCardStylesConfiguration) => MessageCardColorsMapValue;
