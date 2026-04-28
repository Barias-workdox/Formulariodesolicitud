import { ReactNode } from 'react';
import { TextVariant } from './text.interface';
import { DesignSystemColorType } from '../../themes/theme.interfaces';
import { BlockProps } from 'baseui/block';
import { ConfigurationOverride } from 'baseui/helpers/overrides';
import { StyleObject } from 'styletron-react';
export interface TextProps extends Omit<BlockProps, 'color'> {
    'data-testid'?: string;
    children: ReactNode;
    variant: TextVariant;
    textAlign?: StyleObject['textAlign'];
    fontWeight?: StyleObject['fontWeight'];
    color?: DesignSystemColorType | string;
    htmlFor?: string;
    $style?: ConfigurationOverride;
    onClick?(): void;
}
/**
 * This component renders the text component related to the design system.
 * The main idea is to facilitate the development of the texts to use the same tokens
 * with the design system and also add support for fontWeight from the properties.
 */
export declare const Text: import('react').ForwardRefExoticComponent<TextProps & import('react').RefAttributes<HTMLElement>>;
