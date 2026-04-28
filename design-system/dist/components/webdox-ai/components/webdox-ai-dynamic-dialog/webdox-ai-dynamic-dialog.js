import { jsx as o, jsxs as b } from "react/jsx-runtime";
import { useMemo as I } from "react";
import { OpenPanelFilledRight as x } from "@carbon/icons-react";
import { ReactComponent as D } from "../../../../assets/icons/webdox-ai/brain-companion-icon.svg.js";
import { ReactComponent as C } from "../../../../assets/icons/webdox-ai/legal-whisper-icon.svg.js";
import { BackgroundIcon as y } from "../../../background-icon/background-icon.js";
import { DynamicDialog as h } from "../../../dynamic-dialog/next/dynamic-dialog.js";
import { DynamicDialogHeader as w } from "../../../dynamic-dialog/next/components/dialog-header.js";
import { DynamicDialogBody as A } from "../../../dynamic-dialog/next/components/dialog-body.js";
import "../../../dynamic-dialog/next/components/styled-components.js";
import "../../../dynamic-dialog/next/context/dynamic-dialog.context.js";
import { DIALOG_Z_INDEX as B } from "../../../dynamic-dialog/next/dynamic-dialog.constants.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as O } from "../../../utils/i18n/utils.js";
import { noop as r } from "../../../../utils/noop.js";
import { ActionIconButton as k } from "../action-icon-button/action-icon-button.js";
const v = {
  brainCompanion: {
    Icon: D,
    backgroundColor: "natureSubtle"
  },
  legalWhisper: {
    Icon: C,
    backgroundColor: "sweetSubtle"
  }
}, V = ({
  dataTestId: t = "webdox-ai-dynamic-dialog",
  children: p,
  fullViewport: s,
  showSideViewButton: n = !1,
  type: m,
  zIndex: e = B.TOOLTIP,
  onClose: c = r,
  onToggleExpand: l = r,
  onClickSideView: a = r,
  ...d
}) => {
  const { t: i } = O(), { Icon: u, backgroundColor: g } = v[m], f = I(() => [
    ...n ? [
      /* @__PURE__ */ o(
        k,
        {
          dataTestId: `${t}--side-view-button`,
          Icon: /* @__PURE__ */ o(x, {}),
          onClick: a,
          tooltipContent: i("webdoxAI.assistantLayout.sideViewTooltip"),
          zIndex: e
        },
        "side-view-button"
      )
    ] : []
  ], [n, a, t, i, e]);
  return /* @__PURE__ */ b(
    h,
    {
      ...d,
      dataTestId: t,
      fullViewport: s,
      onClose: c,
      onFullViewportChange: l,
      children: [
        /* @__PURE__ */ o(
          w,
          {
            title: i(`webdoxAI.assistantOptions.${m}`),
            showBackButton: !1,
            icon: /* @__PURE__ */ o(
              y,
              {
                shape: "square",
                backgroundColor: g,
                size: "32px",
                overrides: {
                  Root: {
                    style: {
                      borderRadius: "4px"
                    }
                  }
                },
                children: /* @__PURE__ */ o(u, {})
              }
            ),
            actions: f
          }
        ),
        /* @__PURE__ */ o(A, { padding: "0px", children: p })
      ]
    }
  );
};
export {
  V as WebdoxAIDynamicDialog
};
//# sourceMappingURL=webdox-ai-dynamic-dialog.js.map
