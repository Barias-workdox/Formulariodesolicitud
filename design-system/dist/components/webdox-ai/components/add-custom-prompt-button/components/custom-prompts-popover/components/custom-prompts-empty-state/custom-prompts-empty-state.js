import { jsx as o } from "react/jsx-runtime";
import { Chat as r } from "@carbon/icons-react";
import { BackgroundIcon as m } from "../../../../../../../background-icon/background-icon.js";
import { EmptyState as p } from "../../../../../../../empty-state/empty-state.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as i } from "../../../../../../../utils/i18n/utils.js";
import { StyledEmptyStateContainer as e } from "../../styled-components/styled-empty-state-container.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-popover-content.js";
import "../../styled-components/styled-prompts-list.js";
import "../../styled-components/styled-header.js";
import "../../styled-components/styled-list-item-end-enhancer.js";
import "../../styled-components/styled-list-container.js";
const w = () => {
  const { t } = i();
  return /* @__PURE__ */ o(e, { children: /* @__PURE__ */ o(
    p,
    {
      Icon: /* @__PURE__ */ o(
        m,
        {
          Icon: r,
          backgroundColor: "neutralWashed",
          size: "44px",
          iconColor: "neutral"
        }
      ),
      description: t("webdoxAI.chat.customPrompts.emptyMessage")
    }
  ) });
};
export {
  w as CustomPromptsEmptyState
};
//# sourceMappingURL=custom-prompts-empty-state.js.map
