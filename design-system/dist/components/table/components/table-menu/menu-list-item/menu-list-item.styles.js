import { DEFAULT_FONT as s } from "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
const i = (o, r) => ({
  Root: {
    style: {
      cursor: r ? "not-allowed" : "pointer",
      background: r ? o.colors.neutralWashed : o.colors.bgBase,
      borderBottom: `1px solid ${o.colors.divisionLine}`,
      paddingTop: o.spacing.spacingXs,
      paddingBottom: o.spacing.spacingXs,
      ...s
    }
  },
  Content: {
    style: {
      minHeight: 0,
      border: 0
    }
  },
  ArtworkContainer: {
    style: {
      color: o.colors.neutralSubdued,
      width: "3rem"
    }
  }
}), l = (o, r) => ({
  margin: 0,
  color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued
});
export {
  l as listItemCaptionStyles,
  i as listItemOverrides
};
//# sourceMappingURL=menu-list-item.styles.js.map
