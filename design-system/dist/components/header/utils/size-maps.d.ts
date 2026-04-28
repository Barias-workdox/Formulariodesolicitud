import { HeaderSize } from '../header.interfaces';
import { BackgroundIconSize } from '../../background-icon/next';
import { SizeType } from '../../button';
import { TextVariant } from '../../text';
import { SpacingKey } from '../../../themes/v3/tokens';
/**
 * Utility to get gap size from header size.
 */
export declare const getMapSize: (size?: HeaderSize) => SpacingKey;
/**
 * Utility to get padding size from header size.
 */
export declare const getPaddingSize: (size?: HeaderSize) => SpacingKey;
/**
 * Utility to get action button size from header size.
 */
export declare const getActionButtonSize: (size?: HeaderSize) => SizeType;
/**
 * Utility to get text size from header size.
 */
export declare const getTextVariant: (size?: HeaderSize) => TextVariant;
/**
 *  Utility to get title weight from header size.
 */
export declare const getTitleWeight: (size?: HeaderSize) => string;
/**
 * Utility to get icon size from header size.
 */
export declare const getIconSize: (size?: HeaderSize) => BackgroundIconSize;
/**
 * Utility to get file icon size from header size.
 */
export declare const getFileIconSize: (size?: HeaderSize) => number;
