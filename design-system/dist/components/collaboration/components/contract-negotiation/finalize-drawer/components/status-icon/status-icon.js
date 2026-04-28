import { jsx as t } from "react/jsx-runtime";
import { WarningFilled as p, CheckmarkFilled as l } from "@carbon/icons-react";
import { StatefulTooltip as d } from "../../../../../../tooltip/stateful-tooltip.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../../../../../utils/i18n/utils.js";
import { useCss as h } from "../../../../../../utils/hooks/use-css.js";
import { styles as f } from "./status-icon.styles.js";
const r = {
  approved: {
    Icon: l,
    color: "positiveSubdued",
    text: "collaborationDetails.documentStatus.approved"
  },
  pending: {
    Icon: p,
    color: "warningSubdued",
    text: "collaborationDetails.documentStatus.longPending"
  }
}, j = ({
  "data-testid": e,
  status: o
}) => {
  const { statusIconContainer: i, theme: n } = h(f), { t: a } = u(), { Icon: s, color: m, text: c } = r[o] || r.approved;
  return /* @__PURE__ */ t(
    "div",
    {
      "data-testid": `${e}__${o}`,
      className: i,
      children: /* @__PURE__ */ t(
        d,
        {
          showArrow: !0,
          placement: "bottom",
          content: a(c),
          children: /* @__PURE__ */ t(
            s,
            {
              color: n.colors[m],
              size: 16,
              height: 16,
              width: 16
            }
          )
        }
      )
    }
  );
};
export {
  j as StatusIcon
};
//# sourceMappingURL=status-icon.js.map
