import { DesignSystemColorType } from '../../themes/theme.interfaces';
export interface ColorGroup {
    background: DesignSystemColorType;
    fontColor: DesignSystemColorType;
}
export type SupportedKind = 'primary' | 'accent' | 'positive' | 'negative' | 'warning' | 'neutral';
export type SupportedVariant = 'solid' | 'overlay';
