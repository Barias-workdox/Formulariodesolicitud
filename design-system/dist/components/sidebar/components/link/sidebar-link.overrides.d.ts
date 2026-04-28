import { OverrideParams } from './sidebar-link.interfaces';
import { AvatarProps } from '../../../avatar';
import { BackgroundIconProps } from '../../../background-icon/background-icon.interfaces';
import { TextProps } from '../../../text';
/**
 * Returns style overrides for the BackgroundIcon component
 */
export declare const getBackgroundIconOverrides: ({ isActive, isHovered, }: OverrideParams) => BackgroundIconProps["overrides"];
/**
 * Returns style overrides for the Avatar component and its Initials
 */
export declare const getAvatarOverrides: ({ isActive, isHovered, }: OverrideParams) => AvatarProps["overrides"];
/**
 * Returns style overrides for the Text component and its collapsed state.
 * When hideTextWhenCollapsed is false, text always uses expanded width (auto).
 */
export declare const getTextOverrides: ({ isCollapsed, hideTextWhenCollapsed, }: OverrideParams) => TextProps["overrides"];
