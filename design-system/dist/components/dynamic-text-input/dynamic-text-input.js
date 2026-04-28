import { jsxs as y, jsx as n } from "react/jsx-runtime";
import { forwardRef as m, useRef as h, useEffect as S } from "react";
import { Edit as x } from "@carbon/icons-react";
import { textComponentsMap as b } from "../text/text.constants.js";
import { useCss as C } from "../utils/hooks/use-css.js";
const R = {
  containerStyles: (t) => ({
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: t.spacing.spacingMd,
    color: t.colors.neutral
  }),
  inputContainerStyles: (t, { variant: e, fontWeight: i }) => ({
    ...t.typography[b[e]],
    fontWeight: i,
    display: "inline-grid",
    "::after": {
      content: "attr(data-value) '  '",
      visibility: "hidden",
      whiteSpace: "pre-wrap",
      height: 0,
      paddingRight: t.spacing.spacingXl
    }
  }),
  inputStyles: (t) => ({
    fontSize: "inherit",
    fontFamily: "inherit",
    fontWeight: "inherit",
    lineHeight: "inherit",
    color: t.colors.neutralStrong,
    borderLeft: "none",
    borderRight: "none",
    borderTop: "2px solid transparent",
    borderBottom: "2px solid transparent",
    paddingLeft: 0,
    paddingRight: t.spacing.spacingXl,
    ":hover": {
      borderBottom: `2px dashed ${t.colors.neutralSubdued}`
    },
    ":focus": {
      borderBottom: `2px dashed ${t.colors.brand}`,
      outline: "none"
    },
    ":disabled": {
      backgroundColor: "transparent",
      border: "none"
    },
    "::placeholder": {
      fontStyle: "italic"
    }
  }),
  iconContainerStyles: (t) => ({
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: t.spacing.spacing2xs,
    pointerEvents: "none"
  })
}, T = m(
  function({
    "data-testid": e,
    variant: i,
    fontWeight: l,
    disabled: s,
    value: o = "",
    endEnhancer: a = /* @__PURE__ */ n(x, { size: 20 }),
    // This property is inyected by the `FormControl` in (src/components/forms/components/dynamic-text-input/dynamic-text-input-control.tsx)
    // by cloning the children (https://github.com/uber/baseweb/blob/main/src/form-control/form-control.tsx#L180).
    // This behavior is producing an undesired error in the console log.
    // We remove it by destructuring before spreading the "rest" properties.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    error: v,
    ...p
  }, c) {
    const { containerStyles: d, inputContainerStyles: f, inputStyles: g, iconContainerStyles: u } = C(
      R,
      {
        variant: i,
        fontWeight: l
      }
    ), r = h(null);
    return S(() => {
      r.current && (r.current.dataset.value = o.toString());
    }, [o]), /* @__PURE__ */ y("div", { className: d, children: [
      /* @__PURE__ */ n(
        "span",
        {
          ref: r,
          className: f,
          children: /* @__PURE__ */ n(
            "input",
            {
              ref: c,
              "data-testid": e,
              className: g,
              value: o,
              disabled: s,
              ...p
            }
          )
        }
      ),
      !s && a && /* @__PURE__ */ n("span", { className: u, children: a })
    ] });
  }
);
export {
  T as DynamicTextInput
};
//# sourceMappingURL=dynamic-text-input.js.map
