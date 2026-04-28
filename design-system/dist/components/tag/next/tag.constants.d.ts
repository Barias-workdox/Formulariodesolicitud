import { TagStateColors, TagKind, TagShape, TagSize, TagVariant } from './tag.interfaces';
import { DesignSystemColorType } from '../../../themes';
import { StyleObject } from 'styletron-react';
export declare const DEFAULT_SHAPE: TagShape;
export declare const DEFAULT_SIZE: TagSize;
/**
 * Width thresholds for tag content rendering behavior:
 * - TOOLTIP_THRESHOLD: Always show tooltip when width exceeds this (180px)
 * - ELLIPSIS_THRESHOLD: Force ellipsis and always show tooltip when width exceeds this (240px)
 */
export declare const TOOLTIP_THRESHOLD = 180;
export declare const ELLIPSIS_THRESHOLD = 240;
export declare const MAP_ICON_COLOR: Record<TagKind, DesignSystemColorType>;
export declare const MAP_SIZE: Record<TagSize, StyleObject>;
export declare const MAP_SHAPE: Record<TagShape, Record<TagSize, StyleObject>>;
export declare const MAP_BORDER: Record<TagVariant, StyleObject>;
/**
 * Per-kind, per-appearance color mapping for Tag.
 * - default: bg/text/border
 * - hover: bg/border
 * - focus: bg/border
 *
 * Icon color is defined in MAP_ICON_COLOR and does not change with appearance or state.
 */
export declare const MAP_COLORS: Record<TagKind, Record<TagVariant, TagStateColors>>;
