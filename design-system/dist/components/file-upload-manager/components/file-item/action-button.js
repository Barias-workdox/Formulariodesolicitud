import { jsx as n } from "react/jsx-runtime";
import { useMemo as p } from "react";
import { View as b, Restart as S, CloseOutline as c } from "@carbon/icons-react";
import { FILE_ICON_MAP as d } from "../../file-upload-manager.constants.js";
import { StatefulTooltipNext as y } from "../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as C } from "../../../utils/i18n/utils.js";
import { COMMON_HEIGHT_24 as s } from "../../../../constants/common.constants.js";
import { themedStyled as I } from "../../../../themes/utilities.js";
const _ = I("button", ({ $theme: r, $backgroundColor: o, $color: t, disabled: e, $isHovered: i }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: e ? "auto" : "pointer",
  backgroundColor: r.colors[o],
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: r.colors[o],
  borderRadius: "50%",
  color: r.colors[t],
  padding: 0,
  width: s,
  height: s,
  transition: r.animation.timing100,
  ...i && !e ? {
    backgroundColor: r.colors.bgBase,
    borderColor: r.colors.neutralSubtle,
    color: r.colors.neutral,
    borderRadius: "0%"
  } : {}
})), U = ({
  "data-testid": r,
  onClickAction: o,
  status: t,
  isHovered: e = !1,
  id: i
}) => {
  const { t: m } = C(), { Icon: l, iconColor: u, backgroundColor: f } = p(
    () => t === "rejected" && !o ? d.canceled : d[t] ?? d.pending,
    [t, o]
  ), g = p(
    () => e && o ? {
      uploading: c,
      pending: c,
      rejected: S,
      completed: b
    }[t] ?? l : l,
    [l, e, t, o]
  ), a = ["uploading", "pending", "rejected", "completed"].includes(t) && o !== void 0 ? m(`fileUploadManager.fileActionTooltip.${t}`) : "";
  return /* @__PURE__ */ n(
    y,
    {
      content: a,
      showArrow: !0,
      ignoreBoundary: !0,
      children: /* @__PURE__ */ n(
        _,
        {
          "aria-label": a,
          "data-testid": `${r}__file-action-${i}`,
          $backgroundColor: f,
          $color: u,
          $isHovered: e,
          disabled: !o,
          onClick: o,
          children: /* @__PURE__ */ n(g, {})
        }
      )
    }
  );
};
export {
  U as ActionButton
};
//# sourceMappingURL=action-button.js.map
