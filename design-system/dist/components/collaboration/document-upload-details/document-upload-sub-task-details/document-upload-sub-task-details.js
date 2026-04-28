import { jsx as t, Fragment as p, jsxs as f } from "react/jsx-runtime";
import { DocumentAttachment as b } from "@carbon/icons-react";
import { Avatar as h } from "../../../avatar/avatar.js";
import { FileTypeIcon as x } from "../../../file-type-icon/file-type-icon.js";
import { Text as i } from "../../../text/text.js";
import { useCss as v } from "../../../utils/hooks/use-css.js";
import { TitleLayout as y } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import { StatefulTooltipNext as D } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { ariaKeyDownHandler as S } from "../../../utils/accessibility.utils.js";
import { useDateUtilsWithLocale as T } from "../../../utils/hooks/use-date-util-with-locale.js";
import { useTranslation as k } from "../../../utils/i18n/utils.js";
import { subtasksStyles as r } from "./document-upload-sub-task-details.styles.js";
const W = ({
  resource: e,
  thirdPartyName: m,
  onDocumentClick: d
}) => {
  const o = e !== void 0, { t: n } = k(), { theme: a, titleWrapper: c, wrapperStyles: s } = v(r, {
    documentUploaded: o
  }), { formatDatetime: u } = T(), l = () => {
    o && d(e.document.id);
  };
  return /* @__PURE__ */ t(p, { children: /* @__PURE__ */ f(
    "div",
    {
      "data-testid": "document-upload-sub-task-item",
      role: o ? "button" : void 0,
      tabIndex: o ? 0 : void 0,
      className: s,
      onClick: l,
      onKeyDown: S(l),
      children: [
        /* @__PURE__ */ t("div", { className: c, children: /* @__PURE__ */ t(
          y,
          {
            titleText: o ? /* @__PURE__ */ t(
              i,
              {
                variant: "bodySmall",
                $style: r.documentTitle(a, {
                  documentUploaded: o
                }),
                children: /* @__PURE__ */ t(
                  D,
                  {
                    placement: "bottom",
                    showArrow: !0,
                    content: e.document.name,
                    children: e.document.name
                  }
                )
              }
            ) : /* @__PURE__ */ t(
              i,
              {
                variant: "bodySmall",
                margin: 0,
                color: a.colors.neutralSubdued,
                children: n("collaborationUploadDetails.document.pending")
              }
            ),
            subtitleText: o ? /* @__PURE__ */ t(
              i,
              {
                variant: "bodySmall",
                margin: 0,
                color: a.colors.neutralSubdued,
                children: n("collaborationUploadDetails.document.uploaded", {
                  date: u(e.createdAt)
                })
              }
            ) : void 0,
            startEnhancer: o ? /* @__PURE__ */ t(
              x,
              {
                "data-testid": "document-upload-subtask__file-icon",
                size: 24,
                fileExtension: e.document.fileExt
              }
            ) : /* @__PURE__ */ t(
              b,
              {
                size: 20,
                color: a.colors.neutralSubdued
              }
            )
          }
        ) }),
        /* @__PURE__ */ t(
          h,
          {
            size: "24px",
            name: m
          }
        )
      ]
    }
  ) });
};
export {
  W as DocumentUploadSubtaskDetails
};
//# sourceMappingURL=document-upload-sub-task-details.js.map
