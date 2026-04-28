import { BackgroundIconProps } from './background-icon.interfaces';
import { CommonHeight, CommonIconSize } from '../../constants/common.constants';
export declare const BACKGROUND_ICON_WRAPPER_CLASS = "background-icon__wrapper";
export declare const SIZE_MAP: Record<NonNullable<BackgroundIconProps['size']>, {
    backgroundSize: CommonHeight;
    iconSize: CommonIconSize;
}>;
