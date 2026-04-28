import { jsxs as e, jsx as t } from "react/jsx-runtime";
import { TrashCan as _ } from "@carbon/icons-react";
import { Button as $ } from "../../../button/button.js";
import { IconButton as P } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as k } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { ProgressBar as B } from "../../../progress/progress-bar.js";
import { ProgressCircle as A } from "../../../progress/progress-circle.js";
import { Text as j } from "../../../text/text.js";
import { TruncatedText as z } from "../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as w } from "../../../utils/i18n/utils.js";
import { UploadAction as D } from "../../upload-action.js";
import { styles as E } from "./document-selector.styles.js";
const ct = ({
  "data-testid": r = "file-picker__document-selector",
  accept: n,
  buttonText: m,
  buttonIcon: a,
  filename: i,
  isUploading: o,
  showDeleteButton: l,
  progressMessage: c,
  isDeleting: s,
  uploadProgress: p,
  uploadPercentage: d,
  uploadCompleted: h,
  onDelete: f,
  onUpload: u
}) => {
  const { t: g } = w(), {
    theme: v,
    containerStyles: y,
    leftAreaContainerStyles: C,
    uploadButtonContainerStyles: S,
    filenameContainerStyles: b,
    rightAreaContainerStyles: x,
    progressCircleContainerStyles: N
  } = k(E);
  return /* @__PURE__ */ e("div", { children: [
    /* @__PURE__ */ e(
      "div",
      {
        "data-testid": r,
        className: y,
        children: [
          /* @__PURE__ */ e("div", { className: C, children: [
            /* @__PURE__ */ t("div", { className: S, children: /* @__PURE__ */ t(
              D,
              {
                dataTestId: `${r}__upload-action`,
                accept: n,
                selectionType: "file",
                onSelect: u,
                children: /* @__PURE__ */ t(
                  $,
                  {
                    "data-testid": `${r}__select-button`,
                    type: "button",
                    size: "compact",
                    kind: "tertiary",
                    startEnhancer: a,
                    children: m ?? g("filePicker.select")
                  }
                )
              }
            ) }),
            i && /* @__PURE__ */ t(
              "div",
              {
                "data-testid": `${r}--filename`,
                className: b,
                children: /* @__PURE__ */ t(
                  z,
                  {
                    textProps: { variant: "bodySmall", margin: 0 },
                    tooltipProps: { content: i },
                    children: i
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ e("div", { className: x, children: [
            o && /* @__PURE__ */ e(
              "div",
              {
                "data-testid": `${r}--progress-circle`,
                className: N,
                children: [
                  /* @__PURE__ */ t(
                    j,
                    {
                      variant: "upperDetails",
                      margin: 0,
                      paddingRight: v.spacing.spacingXs,
                      children: c
                    }
                  ),
                  /* @__PURE__ */ t(
                    A,
                    {
                      progress: d,
                      shadowed: !1
                    }
                  )
                ]
              }
            ),
            l && /* @__PURE__ */ t(
              P,
              {
                "data-testid": `${r}--delete-button`,
                size: "32px",
                disabled: s,
                isLoading: s,
                onClick: f,
                children: /* @__PURE__ */ t(_, {})
              }
            )
          ] })
        ]
      }
    ),
    o && /* @__PURE__ */ t("div", { "data-testid": `${r}--progress-bar`, children: /* @__PURE__ */ t(
      B,
      {
        value: p,
        completed: h
      }
    ) })
  ] });
};
export {
  ct as DocumentSelector
};
//# sourceMappingURL=document-selector.js.map
