type ColorRole = 'neutral' | 'brand' | 'positive' | 'negative' | 'warning' | 'peace' | 'power' | 'sweet' | 'heat';
type SurfaceInteractiveRole = Exclude<ColorRole, 'sweet' | 'heat'>;
type TextTonalSecondaryRole = Exclude<SurfaceInteractiveRole, 'peace' | 'power'>;
type TextTonalTertiaryRole = Exclude<TextTonalSecondaryRole, 'positive' | 'negative' | 'warning'>;
type TextFilledRole = Exclude<TextTonalSecondaryRole, 'warning'>;
type StrokeRole = Exclude<ColorRole, 'neutral'>;
type SurfaceBaseToken = 'surfaceMain' | 'surfaceAlternative' | 'surfaceOverlayBackdrop';
type SurfaceDecorativeToken = `surfaceDecorative${Capitalize<ColorRole>}` | `surfaceDecorative${Capitalize<ColorRole>}Strong`;
type SurfaceInteractiveToken = 'surfaceInteractiveDisabled' | 'surfaceInteractiveOnDisabled' | `surfaceInteractive${Capitalize<SurfaceInteractiveRole>}` | `surfaceInteractive${Capitalize<SurfaceInteractiveRole>}Hover` | `surfaceInteractive${Capitalize<SurfaceInteractiveRole>}Active` | `surfaceInteractive${Capitalize<SurfaceInteractiveRole>}Strong` | `surfaceInteractive${Capitalize<SurfaceInteractiveRole>}StrongHover` | `surfaceInteractive${Capitalize<SurfaceInteractiveRole>}StrongActive`;
type IconTonalToken = 'iconTonalDisabled' | `iconTonal${Capitalize<ColorRole>}` | `iconTonal${Capitalize<ColorRole>}Strong`;
type IconFilledToken = 'iconFilledDisabled' | `iconFilled${Capitalize<ColorRole>}` | `iconFilled${Capitalize<ColorRole>}Strong`;
type TextTonalToken = 'textTonalDisabled' | 'textTonalLink' | `textTonal${Capitalize<ColorRole>}Primary` | `textTonal${Capitalize<TextTonalSecondaryRole>}Secondary` | `textTonal${Capitalize<TextTonalTertiaryRole>}Tertiary`;
type TextFilledToken = 'textFilledDisabled' | `textFilled${Capitalize<TextFilledRole>}Primary` | `textFilled${Capitalize<TextFilledRole>}Secondary`;
type StrokeToken = 'strokeDefault' | 'strokeHover' | 'strokeActive' | 'strokeDisabled' | `stroke${Capitalize<StrokeRole>}`;
/**
 * UI color tokens — the third layer in the design token hierarchy (primitives → semantic → UI).
 *
 * These tokens provide context-specific color aliases, mapping semantic tokens to exact UI roles
 * (surfaces, icons, text, strokes). They support both light and dark themes by pointing to the
 * appropriate semantic token value for each mode.
 *
 * Usage: `theme.colors.surfaceMain`, `theme.colors.iconTonalBrand`, etc.
 */
export type UIColorTokens = Record<SurfaceBaseToken | SurfaceDecorativeToken | SurfaceInteractiveToken | IconTonalToken | IconFilledToken | TextTonalToken | TextFilledToken | StrokeToken, string>;
export {};
