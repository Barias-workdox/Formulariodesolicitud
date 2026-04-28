import { jsxs as e, jsx as m } from "react/jsx-runtime";
import { useMemo as a } from "react";
import { Drawer as l } from "../../../drawer/drawer.js";
import { DrawerHeader as c } from "../../../drawer/components/drawer-header.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../../utils/i18n/utils.js";
import { getSubtasks as f } from "../../collaboration.utils.js";
import { DocumentApprovalDetails as n } from "../document-approval-details.js";
const G = ({
  isOpen: i,
  onClose: o,
  subtasks: r = [],
  invitations: t = []
}) => {
  const { t: p } = u(), s = a(() => f(t, r), [t, r]);
  return /* @__PURE__ */ e(
    l,
    {
      isOpen: i,
      autoFocus: !1,
      onClose: o,
      children: [
        /* @__PURE__ */ m(
          c,
          {
            onClose: o,
            title: p("collaborationDetails.collaborationHistory")
          }
        ),
        /* @__PURE__ */ m(n, { subtasks: s })
      ]
    }
  );
};
export {
  G as DocumentApprovalDetailsDrawer
};
//# sourceMappingURL=document-approval-details-drawer.js.map
