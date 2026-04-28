import { jsxs as t, jsx as o } from "react/jsx-runtime";
import { ChevronLeft as y, Close as S } from "@carbon/icons-react";
import { Modal as b, ModalHeader as h, ModalBody as B } from "baseui/modal";
import { DocumentViewer as v } from "../document-viewer/document-viewer.js";
import "../button/button.js";
import { IconButton as m } from "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { useCss as x } from "../utils/hooks/use-css.js";
import "react";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Text as k } from "../text/text.js";
import { documentViewerModalStyles as r, modalStyledOverrides as z } from "./document-viewer-modal.styles.js";
const E = ({
  dataTestId: l = "document-viewer-modal",
  isOpen: d,
  onClose: i,
  documentName: a,
  documentUrl: c,
  attachmentUrl: s,
  isLoading: n,
  pageNumber: u,
  kind: p
}) => {
  const { documentNameWrapper: f, theme: e } = x(r);
  return /* @__PURE__ */ t(
    b,
    {
      size: "full",
      isOpen: d,
      autoFocus: !1,
      overrides: z(),
      children: [
        /* @__PURE__ */ t(h, { $style: r.modalHeaderStyles(e), children: [
          /* @__PURE__ */ t("div", { className: f, children: [
            /* @__PURE__ */ o(
              m,
              {
                "data-testid": `${l}__back-button`,
                "aria-label": "BackButton",
                size: "32px",
                onClick: () => i({ closeSource: "backdrop" }),
                children: /* @__PURE__ */ o(
                  y,
                  {
                    size: 20,
                    color: e.colors.neutralSubdued
                  }
                )
              }
            ),
            /* @__PURE__ */ o(
              k,
              {
                $style: r.documentNameStyles(e),
                variant: "bodySmall",
                color: "neutralSubdued",
                children: a
              }
            )
          ] }),
          /* @__PURE__ */ o(
            m,
            {
              "data-testid": `${l}__close-button`,
              "aria-label": "CloseButton",
              size: "32px",
              onClick: () => i({ closeSource: "closeButton" }),
              children: /* @__PURE__ */ o(
                S,
                {
                  size: 20,
                  color: e.colors.neutralSubdued
                }
              )
            }
          )
        ] }),
        /* @__PURE__ */ o(B, { $style: r.modalBodyStyles(e), children: /* @__PURE__ */ o(
          v,
          {
            url: c,
            attachmentUrl: s,
            isLoading: n,
            kind: p,
            pageNumber: u
          }
        ) })
      ]
    }
  );
};
export {
  E as DocumentViewerModal
};
//# sourceMappingURL=document-viewer-modal.js.map
