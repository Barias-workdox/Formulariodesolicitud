import { BORDER_RADIUS_MAP as l, HEADER_SIZE_MAP as t, HEADER_TABS_SIZE_MAP as r, FOOTER_SIZE_MAP as s, SLOT_PADDING_MAP as a } from "../sectioned-card.constants.js";
const o = (e = "small") => t[e] || t.small, n = (e = "small") => r[e] || r.small, S = (e = "small") => s[e] || s.small, _ = (e = "small") => l[e] || l.small, A = (e = "small") => a[e] || a.small;
export {
  _ as getBorderRadiusSize,
  S as getFooterSize,
  o as getHeaderSize,
  n as getHeaderTabsSize,
  A as getSlotPadding
};
//# sourceMappingURL=get-size-map.js.map
