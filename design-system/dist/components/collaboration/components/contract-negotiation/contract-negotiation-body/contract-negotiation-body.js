import { jsx as t, jsxs as e } from "react/jsx-runtime";
import { Upload as H, Edit as P, Download as R, ChevronDown as T, CheckmarkOutline as W } from "@carbon/icons-react";
import { Button as s } from "../../../../button/button.js";
import { IconButton as q } from "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as z } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { DocumentViewer as G } from "../../../../document-viewer/document-viewer.js";
import { FileIcon as J } from "../../../../file-icon/file-icon.js";
import { Text as c } from "../../../../text/text.js";
import { TitleLayout as K } from "../../../../layouts/title-layout/title-layout.js";
import "../../../../layouts/title-layout/title-layout.styles.js";
import { StatefulMenu as M } from "../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../menu/stateless-menu/stateless-menu.overrides.js";
import { Popover as Q } from "../../../../popover/popover.js";
import "baseui/popover";
import "../../../../popover/popover.styles.js";
import { Select as X } from "../../../../select/select.js";
import { StatefulTooltip as d } from "../../../../tooltip/stateful-tooltip.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as Y } from "../../../../utils/i18n/utils.js";
import { BannerDocument as Z } from "../banner-document/banner-document.js";
import { styles as I, titleLayoutOverrides as L } from "./contract-negotiation-body.styles.js";
const Pt = ({
  "data-testid": o,
  disabled: p,
  document: { fileExt: h, name: a },
  documentApprovedAt: u,
  documentLastModificationText: l,
  documentPreviewUrl: f,
  documentAttachmentUrl: v,
  documentStatus: w,
  documentVersionOptions: b,
  isDocumentPreviewLoading: y = !1,
  isLoading: r = !1,
  readOnly: C = !1,
  negotiableDocument: S = !1,
  selectedVersionOption: g,
  showBanner: N,
  handleOpenNewVersionDrawer: x,
  onApproveDocument: D,
  onChangeDocumentVersion: E,
  onDownloadDocument: k,
  handleWriteNewNewVersion: _
}) => {
  const { t: i } = Y(), { containerStyles: B, contentStyles: O, headerStyles: $, headerRightContainerStyles: V, footerStyles: A } = z(I), j = [
    {
      id: "new-version",
      disabled: r,
      label: i("contractNegotiationCollaboration.uploadNewVersion"),
      startEnhancer: /* @__PURE__ */ t(H, {})
    },
    {
      id: "edit-version",
      disabled: r,
      label: i("contractNegotiationCollaboration.writeDocument"),
      startEnhancer: /* @__PURE__ */ t(P, {})
    }
  ], U = {
    "new-version": () => x(),
    "edit-version": () => _()
  }, F = (n) => {
    const [m] = n;
    m && E(m);
  };
  return /* @__PURE__ */ e("div", { className: B, children: [
    N && /* @__PURE__ */ t(
      Z,
      {
        status: w,
        approvedAt: u
      }
    ),
    /* @__PURE__ */ e("div", { className: O, children: [
      /* @__PURE__ */ e("div", { className: $, children: [
        /* @__PURE__ */ t(
          K,
          {
            overrides: L(),
            titleText: /* @__PURE__ */ t(
              d,
              {
                placement: "bottom",
                showArrow: !0,
                content: a,
                children: /* @__PURE__ */ t(
                  c,
                  {
                    variant: "bodySmall",
                    fontWeight: "500",
                    margin: 0,
                    color: "neutral",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    children: a
                  }
                )
              }
            ),
            subtitleText: /* @__PURE__ */ t(
              d,
              {
                placement: "bottom",
                showArrow: !0,
                content: l,
                children: /* @__PURE__ */ t(
                  c,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    color: "neutralDepressed",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                    children: l
                  }
                )
              }
            ),
            startEnhancer: /* @__PURE__ */ t(
              J,
              {
                fileExtension: h,
                height: "20px",
                width: "20px"
              }
            )
          }
        ),
        /* @__PURE__ */ e("div", { className: V, children: [
          !S && /* @__PURE__ */ t(
            X,
            {
              onChange: F,
              value: g,
              options: b,
              searchable: !1,
              "data-testid": `${o}--version-select`
            }
          ),
          /* @__PURE__ */ t(
            q,
            {
              "data-testid": `${o}--download`,
              kind: "tertiary",
              onClick: k,
              children: /* @__PURE__ */ t(R, {})
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ t(
        G,
        {
          "data-testid": `${o}__document-viewer`,
          url: f,
          attachmentUrl: v,
          isLoading: y
        }
      )
    ] }),
    !C && /* @__PURE__ */ e("div", { className: A, children: [
      /* @__PURE__ */ t(
        Q,
        {
          ignoreBoundary: !0,
          placement: "top",
          content: /* @__PURE__ */ t(
            M,
            {
              items: j,
              onItemSelect: ({ item: { id: n } }) => U[n]()
            }
          ),
          children: /* @__PURE__ */ t(
            s,
            {
              kind: "tertiary",
              endEnhancer: /* @__PURE__ */ t(T, {}),
              "data-testid": `${o}__edit-document-options`,
              children: i("contractNegotiationCollaboration.editDocument")
            }
          )
        }
      ),
      /* @__PURE__ */ t(
        s,
        {
          "data-testid": `${o}__approve-document`,
          startEnhancer: /* @__PURE__ */ t(W, {}),
          isLoading: r,
          disabled: r || p,
          onClick: D,
          children: i("contractNegotiationCollaboration.approveDocument")
        }
      )
    ] })
  ] });
};
export {
  Pt as ContractNegotiationBody
};
//# sourceMappingURL=contract-negotiation-body.js.map
