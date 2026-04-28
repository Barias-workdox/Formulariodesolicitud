import { themedStyled as r } from "../../../../themes/utilities.js";
const i = r("div", ({ $theme: o }) => ({
  width: "100%",
  height: "100%",
  display: "inline-flex",
  ":has(*) *::selection": {
    backgroundColor: `${o.colors.powerSubdued}66`
  }
})), l = r("div", {
  display: "flex"
}), a = r(
  "span",
  ({ $left: o, $top: e }) => ({
    position: "absolute",
    top: `${e}px`,
    left: `${o}px`
  })
), p = ({
  $isFirstChild: o = !1,
  $isLastChild: e = !1
} = {}) => ({
  BaseButton: {
    style: ({ $theme: s }) => {
      const d = `1px solid ${s.colors.neutral}`, t = `0.5px solid ${s.colors.neutral}`;
      return {
        borderTop: d,
        borderBottom: d,
        borderLeft: t,
        borderRight: t,
        borderRadius: "0",
        ...o && { borderRadius: "4px 0 0 4px" },
        ...e && {
          borderRadius: "0 4px 4px 0",
          ":not(:hover) :not(:focus) :not(:active)": {
            borderRight: t
          }
        }
      };
    }
  }
});
export {
  a as SelectionPositionNode,
  l as StyledButtonsContainer,
  i as StyledContainer,
  p as getButtonOverrides
};
//# sourceMappingURL=webdox-ai-document-viewer-wrapper.styles.js.map
