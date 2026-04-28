import { jsxs as m, jsx as i } from "react/jsx-runtime";
import { Button as n } from "../button/next/button.js";
import { Tag as s } from "../tag/next/tag.js";
import { Text as a } from "../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../utils/i18n/utils.js";
import { themedStyled as l } from "../../themes/utilities.js";
import { textStyles as c } from "./form-card.styled.js";
const f = l("div", ({ $theme: r }) => ({
  display: "flex",
  alignItems: "center",
  gap: r.spacing.spacingSm
})), F = ({
  currentStep: r,
  totalSteps: o,
  actionButton: t,
  tagLabel: e
}) => {
  const { t: p } = d();
  return /* @__PURE__ */ m(f, { children: [
    /* @__PURE__ */ i(
      a,
      {
        variant: "upperDetails",
        margin: 0,
        fontWeight: 500,
        $style: c,
        children: p("general.stepOf", { current: r, steps: o })
      }
    ),
    e && /* @__PURE__ */ i(
      s,
      {
        kind: "brand",
        variant: "outlined",
        shape: "pill",
        size: "md",
        children: e
      }
    ),
    t && /* @__PURE__ */ i(
      n,
      {
        kind: "brand",
        appearance: "outlined",
        size: "32px",
        ...t,
        children: t.text
      }
    )
  ] });
};
export {
  F as FormCardStepActions
};
//# sourceMappingURL=form card-step-actions.js.map
