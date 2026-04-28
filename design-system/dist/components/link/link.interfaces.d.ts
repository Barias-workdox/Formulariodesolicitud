import { PropsWithChildren } from 'react';
import { WithTestId } from '../../interfaces/common.interfaces';
import { DesignSystemColorType } from '../../themes';
import { LinkProps as BaseLinkProps } from 'baseui/link';
import { StyleObject } from 'styletron-react';
/** Link color variant that contrasts with background */
export type LinkKind = 'default' | 'contrast';
/** Typography size for the link text */
export type LinkSize = 'medium' | 'small';
/** Link component props */
export type LinkProps = WithTestId<BaseLinkProps & PropsWithChildren<{
    /** @deprecated Use standard behavior - underline is now always enabled */
    underlined?: boolean;
    /** Disables the link and prevents interaction */
    disabled?: boolean;
    /** Defines the color variant that contrasts with background */
    kind?: LinkKind;
    /** Typography size for the link text */
    size?: LinkSize;
    /** Controls the target (_blank, _self, etc.) */
    target?: string;
    /** Font weight for the link text */
    fontWeight?: StyleObject['fontWeight'];
}>>;
/**
 * Legacy interface for styled link colors
 *
 * @deprecated due to removal of styled link colors
 */
export interface StyledLinkTextColorsProps {
    color: string;
    hover: string;
    active: string;
}
/** Color configuration for each link state */
export interface LinkColorConfig {
    default: DesignSystemColorType;
    hover: DesignSystemColorType;
    active: DesignSystemColorType;
    visited: DesignSystemColorType;
    disabled: DesignSystemColorType;
}
/**
 * Configuration options for link styling
 */
export interface LinkStyleOptions {
    /** Whether the link is disabled */
    disabled: boolean;
    /** Whether the link should be underlined */
    underlined: boolean;
    /** Visual variant of the link */
    kind: LinkKind;
    /** Typography size of the link */
    size: LinkSize;
    /** Font weight for the link text */
    fontWeight?: StyleObject['fontWeight'];
}
/**
 * Configuration for link typography
 */
export interface LinkTypographyConfig {
    /** Font family */
    fontFamily: string;
    /** Font size in pixels */
    fontSize: string;
    /** Line height as percentage */
    lineHeight: string;
    /** Font weight */
    fontWeight: string | number;
}
/**
 * Configuration for link focus states
 */
export interface LinkFocusConfig {
    /** Focus outline style */
    outline: string;
    /** Focus outline offset */
    outlineOffset: string;
    /** Focus border radius */
    borderRadius: string;
}
/**
 * Configuration for link color states
 */
export interface LinkColorStates {
    /** Default color state */
    default: string;
    /** Hover color state */
    hover: string;
    /** Active color state */
    active: string;
    /** Visited color state */
    visited: string;
    /** Disabled color state */
    disabled: string;
}
