import { spacingV1 as r } from "../_deprecated/v1/spacing.js";
import { borderTokens as o } from "../_deprecated/v2/tokens/borders.js";
import { spacing as i } from "../_deprecated/v2/tokens/spacing.js";
import { lighting as p } from "../_deprecated/v1/lighting.js";
import { borders as m } from "./tokens/borders.js";
import { elevations as e } from "./tokens/elevations.js";
import { spacing as s } from "./tokens/spacing.js";
import { typographies as a } from "./tokens/typography.js";
const l = {
  DisplayLarge: a.h1,
  DisplayMedium: a.h1,
  DisplaySmall: a.h1,
  HeadingLarge: a.h1,
  HeadingMedium: a.h1,
  HeadingSmall: a.h1,
  HeadingXSmall: a.h1,
  ParagraphLarge: a.h2,
  ParagraphMedium: a.body,
  ParagraphSmall: a.bodySmall,
  ParagraphXSmall: a.microCopy,
  LabelSmall: a.microCopy,
  LabelXSmall: a.upperDetails
}, g = {
  ...r,
  ...i,
  ...s
}, t = {
  ...o,
  ...m
}, L = { typography: l, lighting: p, spacing: g, borders: t, elevations: e };
export {
  L as baseOverrides,
  t as borders,
  g as spacing,
  l as typography
};
//# sourceMappingURL=theme-base.js.map
