import { jsxs as e, jsx as o } from "react/jsx-runtime";
import { WatsonHealthStackedScrolling_1 as l } from "@carbon/icons-react";
import { Drawer as p } from "../../../drawer/drawer.js";
import { DrawerHeader as s } from "../../../drawer/components/drawer-header.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import { useTranslation as c } from "../../../utils/i18n/utils.js";
import { DocumentUploadDetails as n } from "../document-upload-details.js";
const S = ({
  isOpen: t,
  onClose: r,
  tasks: i,
  onDocumentClick: a
}) => {
  const { t: m } = c();
  return /* @__PURE__ */ e(
    p,
    {
      isOpen: t,
      autoFocus: !1,
      onClose: r,
      children: [
        /* @__PURE__ */ o(
          s,
          {
            onClose: r,
            title: m("collaborationUploadDetails.collaborationActivity"),
            icon: /* @__PURE__ */ o(l, { size: 20 })
          }
        ),
        /* @__PURE__ */ o(
          n,
          {
            onDocumentClick: a,
            tasks: i
          }
        )
      ]
    }
  );
};
export {
  S as DocumentUploadDetailsDrawer
};
//# sourceMappingURL=document-upload-details-drawer.js.map
