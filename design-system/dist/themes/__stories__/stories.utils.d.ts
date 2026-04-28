import { ReactNode } from 'react';
export { extractGroup } from '../v3/utils/colors.utils';
export declare const PRIMITIVE_FAMILIES: readonly [{
    readonly title: "Gray";
    readonly prefix: "gray";
}, {
    readonly title: "Blue";
    readonly prefix: "blue";
}, {
    readonly title: "Green";
    readonly prefix: "green";
}, {
    readonly title: "Red";
    readonly prefix: "red";
}, {
    readonly title: "Yellow";
    readonly prefix: "yellow";
}, {
    readonly title: "Cyan";
    readonly prefix: "cyan";
}, {
    readonly title: "Purple";
    readonly prefix: "purple";
}, {
    readonly title: "Light Green";
    readonly prefix: "lightgreen";
}, {
    readonly title: "Magenta";
    readonly prefix: "magenta";
}, {
    readonly title: "Orange";
    readonly prefix: "orange";
}];
export declare const SEMANTIC_ROLES: readonly [{
    readonly title: "Neutral";
    readonly prefix: "neutral";
}, {
    readonly title: "Brand";
    readonly prefix: "brand";
}, {
    readonly title: "Positive";
    readonly prefix: "positive";
}, {
    readonly title: "Negative";
    readonly prefix: "negative";
}, {
    readonly title: "Warning";
    readonly prefix: "warning";
}, {
    readonly title: "Peace";
    readonly prefix: "peace";
}, {
    readonly title: "Power";
    readonly prefix: "power";
}, {
    readonly title: "Nature";
    readonly prefix: "nature";
}, {
    readonly title: "Sweet";
    readonly prefix: "sweet";
}, {
    readonly title: "Heat";
    readonly prefix: "heat";
}];
export declare const UI_GROUPS: readonly [{
    readonly title: "Surfaces — Decorative";
    readonly prefix: "surfaceDecorative";
}, {
    readonly title: "Surfaces — Interactive";
    readonly prefix: "surfaceInteractive";
}, {
    readonly title: "Icons — Tonal";
    readonly prefix: "iconTonal";
}, {
    readonly title: "Icons — Filled";
    readonly prefix: "iconFilled";
}, {
    readonly title: "Text — Tonal";
    readonly prefix: "textTonal";
}, {
    readonly title: "Text — Filled";
    readonly prefix: "textFilled";
}, {
    readonly title: "Strokes";
    readonly prefix: "stroke";
}];
export declare const DEPRECATED_ELEMENTS: readonly [{
    readonly title: "Background (bg)";
    readonly prefix: "bg";
}, {
    readonly title: "Text (text)";
    readonly prefix: "text";
}, {
    readonly title: "Icon (icon)";
    readonly prefix: "icon";
}, {
    readonly title: "Border (border)";
    readonly prefix: "border";
}];
/** Extracts current (non-deprecated) semantic tokens, excluding element-prefixed tokens. */
export declare const extractCurrentTokens: (colors: Record<string, string>) => Record<string, string>;
interface ColorSwatchProps {
    name: string;
    value: string;
    textColor: string;
    borderColor: string;
}
/** Renders a single color token with its preview swatch, name, and hex value. */
export declare const ColorSwatch: React.FC<ColorSwatchProps>;
interface ColorGroupProps {
    title: string;
    colors: Record<string, string>;
    textColor: string;
    borderColor: string;
    showCount?: boolean;
}
/** Renders a titled group of color swatches in a responsive grid. */
export declare const ColorGroup: React.FC<ColorGroupProps>;
interface ColorPageLayoutProps {
    children: ReactNode;
}
/** Wraps color story content in a centered, padded container. */
export declare const ColorPageLayout: React.FC<ColorPageLayoutProps>;
interface DeprecationBannerProps {
    version?: string;
    message?: string;
}
/** Renders a warning banner indicating the theme version or tokens are deprecated. */
export declare const DeprecationBanner: React.FC<DeprecationBannerProps>;
