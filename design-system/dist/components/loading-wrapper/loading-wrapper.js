import { jsx as n, Fragment as d, jsxs as s } from "react/jsx-runtime";
import { Spinner as l } from "../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Text as c } from "../text/text.js";
import { StyledContainer as f, StyledSpinnerContainer as S } from "./loading-wrapper.styles.js";
const F = ({
  isLoading: t,
  children: o,
  spinnerSize: e = "md",
  spinnerColor: m,
  overrides: i = {},
  title: p
}) => {
  if (!t)
    return /* @__PURE__ */ n(d, { children: o });
  const a = (r) => {
    if (r)
      return typeof r == "string" ? /* @__PURE__ */ n(
        c,
        {
          variant: "bodySmall",
          margin: 0,
          children: r
        }
      ) : r;
  };
  return /* @__PURE__ */ s(f, { $overrides: i.Container, children: [
    /* @__PURE__ */ n(
      S,
      {
        $overrides: i.Svg,
        "data-testid": "loading-spinner--container",
        "aria-label": "Spinner",
        children: /* @__PURE__ */ n(
          l,
          {
            size: e,
            color: m
          }
        )
      }
    ),
    a(p)
  ] });
};
export {
  F as LoadingWrapper
};
//# sourceMappingURL=loading-wrapper.js.map
