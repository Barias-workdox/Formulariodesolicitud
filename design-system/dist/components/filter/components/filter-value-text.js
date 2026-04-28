import { jsx as a } from "react/jsx-runtime";
import { TruncatedText as c } from "../../truncated-text/truncated-text.js";
import { useCss as x } from "../../utils/hooks/use-css.js";
const m = {
  textStyles: (e, { minWidth: r, maxWidth: t }) => ({
    flex: 1,
    width: "max-content",
    minWidth: r,
    maxWidth: t
  })
}, u = ({
  value: e = [],
  multi: r,
  label: t
}) => {
  if (r || e.filter(Boolean).length === 0)
    return t;
  const [{ label: o }] = e;
  return t ? o ? `${t}: ${o}` : t : o || "";
}, d = ({
  value: e,
  multi: r,
  label: t,
  tooltipText: o,
  minWidth: n,
  maxWidth: s
}) => {
  const { textStyles: l } = x(m, { minWidth: n, maxWidth: s }), i = u({ value: e, multi: r, label: t });
  return /* @__PURE__ */ a(
    c,
    {
      className: l,
      tooltipProps: {
        content: o,
        showArrow: !0,
        hasPointerEventsEnabled: !1
      },
      textProps: {
        variant: "bodySmall",
        color: "inherit",
        margin: 0
      },
      children: i
    }
  );
};
export {
  d as FilterValueText
};
//# sourceMappingURL=filter-value-text.js.map
