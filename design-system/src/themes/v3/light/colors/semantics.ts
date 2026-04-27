import { getDeprecatedSemanticColors } from '@themes/v3/utils/colors.utils';

import { PRIMITIVE_COLORS } from '../../tokens/primitives';

import type { ColorTokenName, SemanticColors } from '../../interfaces/colors.interfaces';

const SEMANTIC_COLORS_BASE = {
  base: PRIMITIVE_COLORS.base,
  transparent: PRIMITIVE_COLORS.transparent,

  // neutral
  neutralBase: PRIMITIVE_COLORS.gray0,
  neutralWashed: PRIMITIVE_COLORS.gray10,
  neutralSubtle: PRIMITIVE_COLORS.gray20,
  neutralDepressed: PRIMITIVE_COLORS.gray40,
  neutralSubdued: PRIMITIVE_COLORS.gray80,
  neutral: PRIMITIVE_COLORS.gray100,
  neutralMedium: PRIMITIVE_COLORS.gray120,
  neutralStrong: PRIMITIVE_COLORS.gray140,

  // brand
  brandBase: PRIMITIVE_COLORS.blue0,
  brandWashed: PRIMITIVE_COLORS.blue10,
  brandSubtle: PRIMITIVE_COLORS.blue20,
  brandDepressed: PRIMITIVE_COLORS.blue40,
  brandSubdued: PRIMITIVE_COLORS.blue80,
  brand: PRIMITIVE_COLORS.blue100,
  brandMedium: PRIMITIVE_COLORS.blue120,
  brandStrong: PRIMITIVE_COLORS.blue140,

  // positive
  positiveBase: PRIMITIVE_COLORS.green0,
  positiveWashed: PRIMITIVE_COLORS.green10,
  positiveSubtle: PRIMITIVE_COLORS.green20,
  positiveDepressed: PRIMITIVE_COLORS.green40,
  positiveSubdued: PRIMITIVE_COLORS.green80,
  positive: PRIMITIVE_COLORS.green100,
  positiveMedium: PRIMITIVE_COLORS.green120,
  positiveStrong: PRIMITIVE_COLORS.green140,

  // negative
  negativeBase: PRIMITIVE_COLORS.red0,
  negativeWashed: PRIMITIVE_COLORS.red10,
  negativeSubtle: PRIMITIVE_COLORS.red20,
  negativeDepressed: PRIMITIVE_COLORS.red40,
  negativeSubdued: PRIMITIVE_COLORS.red80,
  negative: PRIMITIVE_COLORS.red100,
  negativeMedium: PRIMITIVE_COLORS.red120,
  negativeStrong: PRIMITIVE_COLORS.red140,

  // warning
  warningBase: PRIMITIVE_COLORS.yellow0,
  warningWashed: PRIMITIVE_COLORS.yellow10,
  warningSubtle: PRIMITIVE_COLORS.yellow20,
  warningDepressed: PRIMITIVE_COLORS.yellow40,
  warningSubdued: PRIMITIVE_COLORS.yellow80,
  warning: PRIMITIVE_COLORS.yellow100,
  warningMedium: PRIMITIVE_COLORS.yellow120,
  warningStrong: PRIMITIVE_COLORS.yellow140,

  // peace
  peaceBase: PRIMITIVE_COLORS.cyan0,
  peaceWashed: PRIMITIVE_COLORS.cyan10,
  peaceSubtle: PRIMITIVE_COLORS.cyan20,
  peaceDepressed: PRIMITIVE_COLORS.cyan40,
  peaceSubdued: PRIMITIVE_COLORS.cyan80,
  peace: PRIMITIVE_COLORS.cyan100,
  peaceMedium: PRIMITIVE_COLORS.cyan120,
  peaceStrong: PRIMITIVE_COLORS.cyan140,

  // power
  powerBase: PRIMITIVE_COLORS.purple0,
  powerWashed: PRIMITIVE_COLORS.purple10,
  powerSubtle: PRIMITIVE_COLORS.purple20,
  powerDepressed: PRIMITIVE_COLORS.purple40,
  powerSubdued: PRIMITIVE_COLORS.purple80,
  power: PRIMITIVE_COLORS.purple100,
  powerMedium: PRIMITIVE_COLORS.purple120,
  powerStrong: PRIMITIVE_COLORS.purple140,

  // nature
  natureBase: PRIMITIVE_COLORS.lightgreen0,
  natureWashed: PRIMITIVE_COLORS.lightgreen10,
  natureSubtle: PRIMITIVE_COLORS.lightgreen20,
  natureDepressed: PRIMITIVE_COLORS.lightgreen40,
  natureSubdued: PRIMITIVE_COLORS.lightgreen80,
  nature: PRIMITIVE_COLORS.lightgreen100,
  natureMedium: PRIMITIVE_COLORS.lightgreen120,
  natureStrong: PRIMITIVE_COLORS.lightgreen140,

  // sweet
  sweetBase: PRIMITIVE_COLORS.magenta0,
  sweetWashed: PRIMITIVE_COLORS.magenta10,
  sweetSubtle: PRIMITIVE_COLORS.magenta20,
  sweetDepressed: PRIMITIVE_COLORS.magenta40,
  sweetSubdued: PRIMITIVE_COLORS.magenta80,
  sweet: PRIMITIVE_COLORS.magenta100,
  sweetMedium: PRIMITIVE_COLORS.magenta120,
  sweetStrong: PRIMITIVE_COLORS.magenta140,

  // heat
  heatBase: PRIMITIVE_COLORS.orange0,
  heatWashed: PRIMITIVE_COLORS.orange10,
  heatSubtle: PRIMITIVE_COLORS.orange20,
  heatDepressed: PRIMITIVE_COLORS.orange40,
  heatSubdued: PRIMITIVE_COLORS.orange80,
  heat: PRIMITIVE_COLORS.orange100,
  heatMedium: PRIMITIVE_COLORS.orange120,
  heatStrong: PRIMITIVE_COLORS.orange140,
} as const satisfies Record<ColorTokenName, string>;

export const SEMANTIC_COLORS = {
  ...SEMANTIC_COLORS_BASE,
  ...getDeprecatedSemanticColors(SEMANTIC_COLORS_BASE),
} as const satisfies SemanticColors;
