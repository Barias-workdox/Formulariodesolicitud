import { jsx as e } from "react/jsx-runtime";
import { isElement as n } from "react-is";
import { TruncatedText as i } from "../../../../../../truncated-text/truncated-text.js";
const a = ({
  $expanded: p,
  children: r,
  collapsedSubtitle: t = r
}) => {
  const o = {
    variant: "microCopy",
    color: "neutral",
    margin: 0,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };
  return p ? n(t) ? t : /* @__PURE__ */ e(
    i,
    {
      textProps: o,
      tooltipProps: { content: t },
      children: t
    }
  ) : n(r) ? r : /* @__PURE__ */ e(
    i,
    {
      textProps: o,
      tooltipProps: { content: r },
      children: r
    }
  );
};
export {
  a as HeaderSubtitle
};
//# sourceMappingURL=header-subtitle.js.map
