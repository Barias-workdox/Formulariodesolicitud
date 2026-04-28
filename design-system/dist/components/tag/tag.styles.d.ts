import { ColorGroup, SupportedKind, SupportedVariant } from './tag.interface';
import { TagOverrides } from 'baseui/tag';
import { StyleObject } from 'styletron-react';
export declare const tagStyles: {
    iconContainerStyles: () => StyleObject;
};
/** Reusable utility to get the selected color by variant and kind */
export declare const getColors: (variant: SupportedVariant, kind: SupportedKind) => ColorGroup;
/** Styled tag overrides */
export declare const tagOverrides: ({ dataTestId, $variant, $kind, }: {
    $variant: SupportedVariant;
    $kind: SupportedKind;
    dataTestId: string;
}) => TagOverrides;
