import { jsx as t } from "react/jsx-runtime";
import { TrashCan as a } from "@carbon/icons-react";
import { Button as l } from "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../utils/i18n/utils.js";
import { GroupLayout as h } from "./group-layout/group-layout.js";
import { GroupRules as u } from "./group-rules/group-rules.js";
const U = ({
  dataTestId: o,
  data: { id: e, logicConnector: n, conditions: m },
  isFirstGroup: p,
  onDeleteGroupRule: i,
  ...d
}) => {
  const { t: r } = f(), s = !p, c = m.length >= 2;
  return /* @__PURE__ */ t(
    h,
    {
      header: {
        title: r("decisionTree.groupTitle", {
          letter: p ? "A" : "B"
        }),
        subtitle: r("decisionTree.groupSubtitle"),
        action: s ? /* @__PURE__ */ t(
          l,
          {
            "data-testid": `${o}--delete`,
            kind: "tertiary",
            size: "32px",
            startEnhancer: /* @__PURE__ */ t(a, {}),
            onClick: () => i == null ? void 0 : i(e),
            children: r("decisionTree.deleteGroup")
          }
        ) : void 0
      },
      children: /* @__PURE__ */ t(
        u,
        {
          dataTestId: o,
          logicConnector: n,
          conditions: m,
          disabled: c,
          ...d
        }
      )
    }
  );
};
export {
  U as TreeRule
};
//# sourceMappingURL=tree-rule.js.map
