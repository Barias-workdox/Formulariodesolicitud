import { ICON_SIZE_MAP as t, GAP_MAP as e, PADDING_MAP as s, ACTION_BUTTON_SIZE_MAP as n, TITLE_WEIGHT_MAP as a, TEXT_VARIANT_MAP as r, FILE_ICON_SIZE_MAP as m } from "../constants/header.constants.js";
const _ = (l = "small") => e[l] ?? e.small, A = (l = "small") => s[l] ?? s.small, I = (l = "small") => n[l] ?? n.small, i = (l = "small") => r[l] ?? r.small, T = (l = "small") => a[l] ?? a.small, c = (l = "small") => t[l] ?? t.small, P = (l = "small") => m[l] ?? m.small;
export {
  I as getActionButtonSize,
  P as getFileIconSize,
  c as getIconSize,
  _ as getMapSize,
  A as getPaddingSize,
  i as getTextVariant,
  T as getTitleWeight
};
//# sourceMappingURL=size-maps.js.map
