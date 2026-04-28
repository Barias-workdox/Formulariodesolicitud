import { DEFAULT_FONT as g } from "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { commonStyles as d } from "../../../data-table.styles.js";
const y = {
  left: {
    containerStyles: {
      textAlign: "initial",
      justifyContent: "start"
    }
  },
  center: {
    containerStyles: {
      textAlign: "center",
      justifyContent: "center"
    }
  },
  right: {
    containerStyles: {
      textAlign: "end",
      justifyContent: "end"
    }
  }
}, S = {
  containerStyles: (n, {
    isHeaderHovered: r,
    isRowHovered: o,
    isRowChecked: s,
    isRowClickable: l,
    isDragging: e,
    isRowDisabled: t,
    align: a = "left",
    height: c,
    isActionCell: i = !1
  } = {}) => {
    const { containerStyles: p } = y[a];
    return {
      ...d,
      ...p,
      ...n.typography.ParagraphMedium,
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      padding: i ? `0 ${n.spacing.spacingMd} 0 ${n.spacing.spacingMd}` : `${n.spacing.spacingXs} ${n.spacing.spacingXl}`,
      height: c,
      backgroundColor: t ? n.colors.neutralWashed : s ? n.colors.brandWashed : e || r || o ? n.colors.neutralBase : n.colors.bgBase,
      borderBottom: `1px solid ${n.colors.neutralWashed}`,
      textWrap: "nowrap",
      textOverflow: "ellipsis",
      color: t ? n.colors.neutralDepressed : n.colors.neutral,
      ...g,
      ...l && !t && { cursor: "pointer" }
    };
  }
};
export {
  S as cellStyles
};
//# sourceMappingURL=table-cell.styles.js.map
