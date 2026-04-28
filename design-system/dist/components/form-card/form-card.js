import { jsxs as t, jsx as r } from "react/jsx-runtime";
import { ArrowLeft as u } from "@carbon/icons-react";
import { Button as v } from "../button/next/button.js";
import { Text as o } from "../text/text.js";
import { FormCardStepActions as b } from "./form card-step-actions.js";
import { FormCardFooterActions as f } from "./form-card-footer-actions.js";
import { FormCardContainerStyled as x, FormCardTopContainerStyled as k, FormCardHeaderStyled as A, FormCardNavStyled as W, FormCardNavLeftStyled as B, backButtonOverrides as N, FormCardNavRightStyled as R, FormCardDescriptionStyled as j, FormCardBodyStyled as D, FormCardFooterStyled as T, FormCardFooterActionStyled as w, textStyles as z, FormCardFooterActionButtonsStyled as G } from "./form-card.styled.js";
const h = ({
  $hasElevation: F,
  $height: S,
  $width: p,
  $maxWidth: s,
  title: y,
  navActions: n,
  headerInfo: i,
  headerTitle: C,
  headerSubtitle: l,
  children: g,
  footerText: a,
  footerLabel: m,
  footerInfo: e,
  footerActions: d,
  onBack: c
}) => /* @__PURE__ */ t(
  x,
  {
    $hasElevation: F,
    $height: S,
    $width: p,
    $maxWidth: s,
    children: [
      /* @__PURE__ */ t(k, { children: [
        /* @__PURE__ */ t(A, { children: [
          /* @__PURE__ */ t(W, { children: [
            /* @__PURE__ */ t(B, { children: [
              c && /* @__PURE__ */ r(
                v,
                {
                  dataTestId: "form-card--back-button",
                  "aria-label": "Go back button",
                  kind: "neutral",
                  appearance: "outlined",
                  size: "32px",
                  onClick: c,
                  overrides: N,
                  children: /* @__PURE__ */ r(u, {})
                }
              ),
              /* @__PURE__ */ r(
                o,
                {
                  variant: "bodySmall",
                  margin: 0,
                  fontWeight: 500,
                  children: y
                }
              )
            ] }),
            n && /* @__PURE__ */ r(R, { children: n })
          ] }),
          /* @__PURE__ */ t(j, { children: [
            i && /* @__PURE__ */ r("div", { children: i }),
            /* @__PURE__ */ r(
              o,
              {
                variant: "h1",
                margin: 0,
                fontWeight: "bold",
                color: "neutralStrong",
                children: C
              }
            ),
            l && /* @__PURE__ */ r(
              o,
              {
                variant: "body",
                margin: 0,
                color: "neutralStrong",
                children: l
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ r(D, { children: g })
      ] }),
      (e || m || a || d) && /* @__PURE__ */ t(T, { children: [
        e && /* @__PURE__ */ r("div", { children: e }),
        /* @__PURE__ */ t(w, { children: [
          /* @__PURE__ */ t("div", { children: [
            /* @__PURE__ */ r(
              o,
              {
                margin: 0,
                variant: "upperDetails",
                color: "neutralStrong",
                fontWeight: 400,
                $style: z,
                children: m
              }
            ),
            /* @__PURE__ */ r(
              o,
              {
                variant: "bodySmall",
                margin: 0,
                color: "neutralStrong",
                fontWeight: 500,
                children: a
              }
            )
          ] }),
          d && /* @__PURE__ */ r(G, { children: d })
        ] })
      ] })
    ]
  }
);
h.StepActions = b;
h.FooterActions = f;
export {
  h as FormCard
};
//# sourceMappingURL=form-card.js.map
