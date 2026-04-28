import { styled as i } from "baseui";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { themedStyled as n } from "../../../themes/utilities.js";
const g = ({
  labelTemplate: t,
  "data-testid": o
} = {}) => ({
  List: {
    props: {
      ...o && { "data-testid": `${o}-options-list` }
    },
    style: {
      boxShadow: "none"
    }
  },
  Option: {
    props: {
      getItemLabel: (r) => t ? t(r) : r.label,
      ...o && { "data-testid": `${o}-option` },
      overrides: {
        ListItem: {
          style: ({ $theme: r }) => ({
            ...r.typography.ParagraphXSmall,
            color: r.colors.neutralSubdued,
            whiteSpace: "nowrap"
          })
        }
      }
    }
  }
}), e = (t) => ({
  "::before": {
    content: '""',
    position: "absolute",
    width: ".5rem",
    top: 0,
    bottom: 0,
    right: String(t),
    background: "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, white 100%)"
  }
}), u = i("div", ({ $fullwidth: t }) => {
  const o = t ? e(0) : {};
  return {
    width: t ? "100%" : "auto",
    position: "relative",
    whiteSpace: "nowrap",
    overflow: "hidden",
    ...o
  };
}), m = i("div", {
  position: "relative",
  ...e("18px")
}), v = n("div", ({ $isOver: t, $theme: o }) => ({
  color: o.colors.neutralSubdued,
  opacity: t ? 1 : 0,
  transition: ".25s opacity linear",
  marginRight: o.spacing.spacing2xs,
  display: "flex",
  alignItems: "center"
}));
export {
  m as ColumnMenu,
  v as DragIcon,
  u as TruncatedText,
  g as statefulMenuOverrides
};
//# sourceMappingURL=draggable-columns-table.styles.js.map
