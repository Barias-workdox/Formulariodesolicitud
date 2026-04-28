import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { useState as h } from "react";
import { FileTypeIcon as S } from "../../../file-type-icon/file-type-icon.js";
import { ProgressBar as v } from "../../../progress/progress-bar.js";
import { Text as x } from "../../../text/text.js";
import { TruncatedText as l } from "../../../truncated-text/truncated-text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as P } from "../../../utils/i18n/utils.js";
import { ActionButton as T } from "./action-button.js";
import { StyledContainer as b, StyledIconWrapper as B, StyledFileDetails as C, StyledPathAndNameContainer as I, StyledPathContainer as M, StyledNameContainer as j } from "./file-item.styles.js";
const F = () => ({
  BarContainer: {
    style: ({ $theme: e }) => ({
      marginTop: e.spacing.spacingXs,
      marginBottom: e.spacing.spacingXs
    })
  },
  Bar: {
    style: ({ $theme: e }) => ({
      backgroundColor: e.colors.neutralSubtle,
      borderRadius: e.spacing.spacing2xs
    })
  }
});
function G(e) {
  const {
    "data-testid": d = "file-upload-manager",
    id: m,
    name: o,
    fileType: p,
    errorMessage: c,
    status: g,
    path: r
  } = e, [a, n] = h(!1), { t: u } = P(), f = e.status === "rejected" ? e.reason ?? c : u(`fileUploadManager.fileStatusLabels.${g}`), y = F(), s = r && r.endsWith(o) ? r.slice(0, -o.length) : r;
  return /* @__PURE__ */ i(
    b,
    {
      $isHovered: a,
      onMouseEnter: () => n(!0),
      onMouseLeave: () => n(!1),
      children: [
        /* @__PURE__ */ t(B, { children: /* @__PURE__ */ t(
          S,
          {
            "data-testid": `${d}__file-type-${m}`,
            fileExtension: p,
            size: 24
          }
        ) }),
        /* @__PURE__ */ i(C, { children: [
          /* @__PURE__ */ i(I, { children: [
            s ? /* @__PURE__ */ t(M, { children: /* @__PURE__ */ t(
              l,
              {
                textProps: {
                  variant: "bodySmall",
                  margin: "0",
                  padding: "0"
                },
                tooltipProps: {
                  content: r
                },
                children: s
              }
            ) }) : null,
            /* @__PURE__ */ t(j, { children: /* @__PURE__ */ t(
              l,
              {
                textProps: {
                  variant: "bodySmall",
                  margin: "0",
                  padding: "0"
                },
                tooltipProps: {
                  content: o
                },
                children: o
              }
            ) })
          ] }),
          e.status === "uploading" ? /* @__PURE__ */ t(
            v,
            {
              value: e.progress,
              size: "medium",
              overrides: y,
              completed: !1
            }
          ) : /* @__PURE__ */ t(
            x,
            {
              variant: "bodySmall",
              margin: 0,
              padding: 0,
              color: "neutralDepressed",
              children: f
            }
          )
        ] }),
        /* @__PURE__ */ t(
          T,
          {
            ...e,
            isHovered: a
          }
        )
      ]
    }
  );
}
export {
  G as FileItem
};
//# sourceMappingURL=file-item.js.map
