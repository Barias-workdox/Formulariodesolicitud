import { jsxs as y, jsx as e } from "react/jsx-runtime";
import { RecentlyViewed as T } from "@carbon/icons-react";
import { BackgroundIcon as U } from "../../background-icon/background-icon.js";
import "../../text/text.js";
import { useCss as h } from "../../utils/hooks/use-css.js";
import { TitleLayout as L } from "../../layouts/title-layout/title-layout.js";
import "../../layouts/title-layout/title-layout.styles.js";
import { Notification as g } from "../../notification/next/notification.js";
import { useTranslation as v } from "../../utils/i18n/utils.js";
import { COMMON_ICON_SIZE_32 as x } from "../../../constants/common.constants.js";
import { useLocale as I } from "../../../contexts/locale-provider/locale-provider.js";
import { getLastUpdateDateFormatted as N } from "../collaboration.utils.js";
import { styles as w, lastUpdateTitleLayoutOverridesStyles as C } from "./document-upload-details.styles.js";
import { DocumentUploadTaskDetails as O } from "./document-upload-task-details/document-upload-task-details.js";
const Z = ({
  tasks: i,
  onDocumentClick: s
}) => {
  const { t: l } = v(), { wrapper: m, lastUpdateWrapperStyles: n, theme: p } = h(w), { locale: c } = I(), d = i.reduce(
    (o, r) => o.concat(
      ...r.subtasks.map(
        (t) => t.resources.length > 0 ? t.resources.map(({ updatedAt: a }) => new Date(a)) : new Date(t.updatedAt)
      )
    ),
    []
  );
  return /* @__PURE__ */ y("div", { className: m, children: [
    /* @__PURE__ */ e(
      g,
      {
        kind: "info",
        closeable: !0,
        description: l("collaborationUploadDetails.notification")
      }
    ),
    /* @__PURE__ */ e("div", { className: n, children: /* @__PURE__ */ e(
      L,
      {
        overrides: C(p),
        startEnhancer: /* @__PURE__ */ e(
          U,
          {
            Icon: T,
            size: x,
            backgroundColor: "brandWashed"
          }
        ),
        titleText: l("collaborationUploadDetails.updatedActivity"),
        subtitleText: N(d, c)
      }
    ) }),
    i.map(({ id: o, category: r, type: t, reason: a, subtasks: u, required: f, description: D }, b) => /* @__PURE__ */ e(
      O,
      {
        categoryLabel: r.label,
        documentTypeLabel: t.label,
        reason: a,
        subtasks: u,
        uniqueId: b + 1,
        onDocumentClick: s,
        required: f,
        description: D
      },
      o
    ))
  ] });
};
export {
  Z as DocumentUploadDetails
};
//# sourceMappingURL=document-upload-details.js.map
