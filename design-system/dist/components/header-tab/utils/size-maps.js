import { PADDING_MAP as t, PADDING_TOP_MAP as e, TAB_PADDING_MAP as a, TAB_FONT_SIZE_MAP as n } from "../constants/header-tabs.constants.js";
const r = (l = "small") => t[l] ?? t.small, P = (l = "small") => e[l] ?? e.small, m = (l = "small") => a[l] ?? a.small, o = (l = "small") => n[l] ?? n.small;
export {
  o as getFontSize,
  r as getPaddingSize,
  m as getTabPaddingSize,
  P as getTopPaddingSize
};
//# sourceMappingURL=size-maps.js.map
