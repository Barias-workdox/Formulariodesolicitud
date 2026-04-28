import { PropsWithChildren } from 'react';
import { WebdoxAIOptionType } from '../../../../../interfaces';
import { WithTestId } from '../../../../../../../interfaces/common.interfaces';
export type IconType = WebdoxAIOptionType | 'suiteAI';
export type PopoverTitleWithIconProps = WithTestId & PropsWithChildren<{
    iconType?: IconType;
    showIcon?: boolean;
}>;
/**
 * Component that renders a title with an optional icon.
 */
export declare const PopoverTitleWithIcon: ({ "data-testid": dataTestId, children, showIcon, iconType, }: PopoverTitleWithIconProps) => JSX.Element;
