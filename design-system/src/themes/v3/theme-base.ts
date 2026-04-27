import { spacingV1 } from '@themes/_deprecated/v1/spacing';
import { borderTokens as bordersV2 } from '@themes/_deprecated/v2/tokens';
import { spacing as spacingV2 } from '@themes/_deprecated/v2/tokens/spacing';

import { lighting } from '../_deprecated/v1/lighting';

import { borders as bordersV3 } from './tokens/borders';
import { elevations } from './tokens/elevations';
import { spacing as spacingV3 } from './tokens/spacing';
import { typographies } from './tokens/typography';

import type { ThemeOverrides } from '../theme.interfaces';

/** BaseUI typography key mapping shared by all v3 themes */
const typography: ThemeOverrides['typography'] = {
  DisplayLarge: typographies.h1,
  DisplayMedium: typographies.h1,
  DisplaySmall: typographies.h1,
  HeadingLarge: typographies.h1,
  HeadingMedium: typographies.h1,
  HeadingSmall: typographies.h1,
  HeadingXSmall: typographies.h1,
  ParagraphLarge: typographies.h2,
  ParagraphMedium: typographies.body,
  ParagraphSmall: typographies.bodySmall,
  ParagraphXSmall: typographies.microCopy,
  LabelSmall: typographies.microCopy,
  LabelXSmall: typographies.upperDetails,
};

/** Spacing tokens with support for deprecated versions */
const spacing: ThemeOverrides['spacing'] = {
  ...spacingV1,
  ...spacingV2,
  ...spacingV3,
};

/** Border tokens with support for deprecated versions */
const borders: ThemeOverrides['borders'] = {
  ...bordersV2,
  ...bordersV3,
};

const baseOverrides: Pick<
  ThemeOverrides,
  'typography' | 'lighting' | 'spacing' | 'borders' | 'elevations'
> = { typography, lighting, spacing, borders, elevations };

export { typography, spacing, borders, baseOverrides };
