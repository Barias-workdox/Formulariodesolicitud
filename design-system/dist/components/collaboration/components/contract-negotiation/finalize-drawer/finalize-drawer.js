import { jsx as r, jsxs as a } from "react/jsx-runtime";
import { useMemo as y } from "react";
import { WarningFilled as S, CheckmarkOutline as x } from "@carbon/icons-react";
import { Alert as N } from "../../../../alert/alert.js";
import { Button as s } from "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as k } from "../../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { Drawer as C } from "../../../../drawer/drawer.js";
import { DrawerHeader as D } from "../../../../drawer/components/drawer-header.js";
import { DrawerFooter as z } from "../../../../drawer/components/drawer-footer.js";
import { DrawerBody as F } from "../../../../drawer/components/drawer-body.js";
import { Text as d } from "../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as $ } from "../../../../utils/i18n/utils.js";
import { generalDocumentsStatuses as v } from "../../../logic/business/contract-negotiation.business.js";
import { CheckboxForm as j } from "./components/checkbox-form/checkbox-form.js";
import { useFinalizeNegotiationFormContext as A } from "./finalize-drawer.logic.js";
import { styles as B } from "./finalize-drawer.styles.js";
const fr = ({
  "data-testid": o,
  documents: e,
  isOpen: f,
  isLoading: m,
  onClose: n,
  onSubmit: u
}) => {
  const { formStyles: g, containerStyles: h, theme: l } = k(B), { t } = $(), { handleSubmit: b } = A(), c = y(() => v(e), [e]), _ = c.some((i) => i === "pending");
  return /* @__PURE__ */ r(
    C,
    {
      "data-testid": `${o}__drawer`,
      isOpen: f,
      onClose: n,
      children: /* @__PURE__ */ a(
        "form",
        {
          "data-testid": `${o}__form`,
          className: g,
          onSubmit: b(u),
          children: [
            /* @__PURE__ */ r(
              D,
              {
                "data-testid": o,
                title: t("contractNegotiationCollaboration.endNegotiation"),
                onClose: n
              }
            ),
            /* @__PURE__ */ r(F, { children: /* @__PURE__ */ a("div", { className: h, children: [
              _ && /* @__PURE__ */ r(
                N,
                {
                  kind: "warning",
                  icon: /* @__PURE__ */ r(
                    S,
                    {
                      size: "24",
                      color: l.colors.warning
                    }
                  ),
                  children: /* @__PURE__ */ r(
                    d,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: l.colors.warningStrong,
                      children: t("contractNegotiationCollaboration.finalizeWarning")
                    }
                  )
                }
              ),
              /* @__PURE__ */ r(
                d,
                {
                  variant: "body",
                  margin: 0,
                  color: "neutralSubdued",
                  children: t("contractNegotiationCollaboration.finalizeInfo")
                }
              ),
              e.map((i) => {
                const { id: p, index: w } = i;
                return /* @__PURE__ */ r(
                  j,
                  {
                    "data-testid": `${o}__checkbox-form-${p}`,
                    document: i,
                    status: c[w]
                  },
                  p
                );
              })
            ] }) }),
            /* @__PURE__ */ a(z, { children: [
              /* @__PURE__ */ r(
                s,
                {
                  "data-testid": `${o}__cancel`,
                  type: "button",
                  kind: "secondary",
                  onClick: n,
                  children: t("general.cancel")
                }
              ),
              /* @__PURE__ */ r(
                s,
                {
                  "data-testid": `${o}__upload`,
                  type: "submit",
                  isLoading: m,
                  disabled: m,
                  startEnhancer: /* @__PURE__ */ r(x, {}),
                  children: t("contractNegotiationCollaboration.finalize")
                }
              )
            ] })
          ]
        }
      )
    }
  );
};
export {
  fr as FinalizeDrawer
};
//# sourceMappingURL=finalize-drawer.js.map
