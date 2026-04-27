import { getDeprecatedSemanticColors } from '@themes/v3/utils/colors.utils';

import { PRIMITIVE_COLORS } from '../../tokens/primitives';

import type { ColorTokenName, SemanticColors } from '../../interfaces/colors.interfaces';

const SEMANTIC_COLORS_BASE = {
  base: PRIMITIVE_COLORS.gray140,
  transparent: PRIMITIVE_COLORS.transparent,

  // neutral
  neutralBase: PRIMITIVE_COLORS.gray120,
  neutralWashed: PRIMITIVE_COLORS.gray100,
  neutralSubtle: PRIMITIVE_COLORS.gray80,
  neutralDepressed: PRIMITIVE_COLORS.gray40,
  neutralSubdued: PRIMITIVE_COLORS.gray40,
  neutral: PRIMITIVE_COLORS.gray20,
  neutralMedium: PRIMITIVE_COLORS.gray10,
  neutralStrong: PRIMITIVE_COLORS.gray0,

  // brand
  brandBase: PRIMITIVE_COLORS.blue120,
  brandWashed: PRIMITIVE_COLORS.blue100,
  brandSubtle: PRIMITIVE_COLORS.blue80,
  brandDepressed: PRIMITIVE_COLORS.blue40,
  brandSubdued: PRIMITIVE_COLORS.blue40,
  brand: PRIMITIVE_COLORS.blue20,
  brandMedium: PRIMITIVE_COLORS.blue10,
  brandStrong: PRIMITIVE_COLORS.blue0,

  // positive
  positiveBase: PRIMITIVE_COLORS.green140,
  positiveWashed: PRIMITIVE_COLORS.green120,
  positiveSubtle: PRIMITIVE_COLORS.green100,
  positiveDepressed: PRIMITIVE_COLORS.green80,
  positiveSubdued: PRIMITIVE_COLORS.green40,
  positive: PRIMITIVE_COLORS.green20,
  positiveMedium: PRIMITIVE_COLORS.green10,
  positiveStrong: PRIMITIVE_COLORS.green0,

  // negative
  negativeBase: PRIMITIVE_COLORS.red140,
  negativeWashed: PRIMITIVE_COLORS.red120,
  negativeSubtle: PRIMITIVE_COLORS.red100,
  negativeDepressed: PRIMITIVE_COLORS.red80,
  negativeSubdued: PRIMITIVE_COLORS.red40,
  negative: PRIMITIVE_COLORS.red20,
  negativeMedium: PRIMITIVE_COLORS.red10,
  negativeStrong: PRIMITIVE_COLORS.red0,

  // warning
  warningBase: PRIMITIVE_COLORS.yellow140,
  warningWashed: PRIMITIVE_COLORS.yellow120,
  warningSubtle: PRIMITIVE_COLORS.yellow100,
  warningDepressed: PRIMITIVE_COLORS.yellow80,
  warningSubdued: PRIMITIVE_COLORS.yellow40,
  warning: PRIMITIVE_COLORS.yellow20,
  warningMedium: PRIMITIVE_COLORS.yellow10,
  warningStrong: PRIMITIVE_COLORS.yellow0,

  // peace
  peaceBase: PRIMITIVE_COLORS.cyan140,
  peaceWashed: PRIMITIVE_COLORS.cyan120,
  peaceSubtle: PRIMITIVE_COLORS.cyan100,
  peaceDepressed: PRIMITIVE_COLORS.cyan80,
  peaceSubdued: PRIMITIVE_COLORS.cyan40,
  peace: PRIMITIVE_COLORS.cyan20,
  peaceMedium: PRIMITIVE_COLORS.cyan10,
  peaceStrong: PRIMITIVE_COLORS.cyan0,

  // power
  powerBase: PRIMITIVE_COLORS.purple140,
  powerWashed: PRIMITIVE_COLORS.purple120,
  powerSubtle: PRIMITIVE_COLORS.purple100,
  powerDepressed: PRIMITIVE_COLORS.purple80,
  powerSubdued: PRIMITIVE_COLORS.purple40,
  power: PRIMITIVE_COLORS.purple20,
  powerMedium: PRIMITIVE_COLORS.purple10,
  powerStrong: PRIMITIVE_COLORS.purple0,

  // nature
  natureBase: PRIMITIVE_COLORS.lightgreen140,
  natureWashed: PRIMITIVE_COLORS.lightgreen120,
  natureSubtle: PRIMITIVE_COLORS.lightgreen100,
  natureDepressed: PRIMITIVE_COLORS.lightgreen80,
  natureSubdued: PRIMITIVE_COLORS.lightgreen40,
  nature: PRIMITIVE_COLORS.lightgreen20,
  natureMedium: PRIMITIVE_COLORS.lightgreen10,
  natureStrong: PRIMITIVE_COLORS.lightgreen0,

  // sweet
  sweetBase: PRIMITIVE_COLORS.magenta140,
  sweetWashed: PRIMITIVE_COLORS.magenta120,
  sweetSubtle: PRIMITIVE_COLORS.magenta100,
  sweetDepressed: PRIMITIVE_COLORS.magenta80,
  sweetSubdued: PRIMITIVE_COLORS.magenta40,
  sweet: PRIMITIVE_COLORS.magenta20,
  sweetMedium: PRIMITIVE_COLORS.magenta10,
  sweetStrong: PRIMITIVE_COLORS.magenta0,

  // heat
  heatBase: PRIMITIVE_COLORS.orange140,
  heatWashed: PRIMITIVE_COLORS.orange120,
  heatSubtle: PRIMITIVE_COLORS.orange100,
  heatDepressed: PRIMITIVE_COLORS.orange80,
  heatSubdued: PRIMITIVE_COLORS.orange40,
  heat: PRIMITIVE_COLORS.orange20,
  heatMedium: PRIMITIVE_COLORS.orange10,
  heatStrong: PRIMITIVE_COLORS.orange0,
} as const satisfies Record<ColorTokenName, string>;

export const SEMANTIC_COLORS = {
  ...SEMANTIC_COLORS_BASE,
  ...getDeprecatedSemanticColors(SEMANTIC_COLORS_BASE),
} as const satisfies SemanticColors;
