import { OverrideParams } from './account-menu-button.interfaces';
import { BackgroundIconProps } from '../../../background-icon/background-icon.interfaces';
import { TextProps } from '../../../text';
/**
 * Returns style overrides for the BackgroundIcon component
 */
export declare const getBackgroundIconOverrides: ({ isActive, }: OverrideParams) => BackgroundIconProps["overrides"];
/**
 * Returns style overrides for the Text component
 */
export declare const textOverrides: TextProps['overrides'];
