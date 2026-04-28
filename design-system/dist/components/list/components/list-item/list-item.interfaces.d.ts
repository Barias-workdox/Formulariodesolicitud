import { ReactNode } from 'react';
import { TextProps } from '../../../text';
import { StatefulTooltipProps } from '../../../tooltip';
import { WithTestId } from '../../../../interfaces/common.interfaces';
import { DesignSystemTheme, OverrideObject, Overrides } from '../../../../themes/theme.interfaces';
export type ListItemSize = 'sm' | 'md';
export interface StyledRootProps {
    $disabled?: boolean;
    $focused?: boolean;
    $active?: boolean;
    $withBorderBottom?: boolean;
    $theme?: DesignSystemTheme;
    $size?: ListItemSize;
}
export interface ListitemOverrides extends Overrides {
    Root?: OverrideObject<StyledRootProps>;
}
export type ListItemTextProps = Record<'label' | 'details', Omit<TextProps, 'children'>>;
export interface ListItemProps extends WithTestId, Pick<StyledRootProps, '$withBorderBottom'> {
    size?: ListItemSize;
    details?: string | ReactNode;
    isActive?: boolean;
    disabled?: boolean;
    endEnhancer?: ReactNode;
    label: string | ReactNode;
    overrides?: ListitemOverrides;
    startEnhancer?: ReactNode;
    tooltipProps?: StatefulTooltipProps;
    aiGenerated?: boolean;
    textProps?: ListItemTextProps;
    onClick?(): void;
}
