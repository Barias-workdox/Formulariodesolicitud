import { jsxs as s, jsx as i } from "react/jsx-runtime";
import { Link as p } from "../../link/link.js";
import { Text as l } from "../../text/text.js";
import { spacing as m } from "../../../themes/v3/tokens/spacing.js";
import { ToasterWrapper as d, TitleWrapper as h, LinkWrapper as f } from "./toaster.styles.js";
function g(r) {
  const t = r === "negative" || r === "warning";
  return {
    role: t ? "alert" : "status",
    "aria-live": t ? "assertive" : "polite"
  };
}
function W({
  title: r,
  body: t,
  kind: c,
  type: u,
  link: e,
  dataTestId: a
}) {
  const o = !!e, n = g(c);
  return /* @__PURE__ */ s(
    d,
    {
      "data-testid": a,
      role: n.role,
      "aria-live": n["aria-live"],
      children: [
        /* @__PURE__ */ s(h, { $hasLink: o, children: [
          /* @__PURE__ */ i(
            l,
            {
              variant: "bodySmall",
              fontWeight: "700",
              margin: 0,
              color: "textBase",
              children: r
            }
          ),
          t && /* @__PURE__ */ i(
            l,
            {
              variant: "bodySmall",
              margin: r ? `${m.spacing2xs} 0 0 0` : "0",
              color: "textBase",
              children: t
            }
          )
        ] }),
        o && /* @__PURE__ */ i(f, { children: /* @__PURE__ */ i(
          p,
          {
            href: e.url,
            kind: "contrast",
            size: "small",
            dataTestId: `${a}--link`,
            children: e.text
          }
        ) })
      ]
    }
  );
}
export {
  W as ToastBody
};
//# sourceMappingURL=toast.js.map
