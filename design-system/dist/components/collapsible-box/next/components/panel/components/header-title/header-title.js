import { jsx as e } from "react/jsx-runtime";
import { isElement as n } from "react-is";
import { useCollapsibleBoxContext as s } from "../../../../collapsible-box.context.js";
import { TruncatedText as i } from "../../../../../../truncated-text/truncated-text.js";
const p = {
  small: "bodySmall",
  large: "body"
}, c = ({
  $expanded: a,
  children: t,
  collapsedTitle: o = t
}) => {
  const { size: m } = s(), r = {
    variant: p[m],
    color: "neutralMedium",
    fontWeight: "bold",
    margin: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };
  return a ? n(o) ? o : /* @__PURE__ */ e(
    i,
    {
      textProps: r,
      tooltipProps: {
        content: o
      },
      children: o
    }
  ) : n(t) ? t : /* @__PURE__ */ e(
    i,
    {
      textProps: r,
      tooltipProps: { content: t },
      children: t
    }
  );
};
export {
  c as HeaderTitle
};
//# sourceMappingURL=header-title.js.map
