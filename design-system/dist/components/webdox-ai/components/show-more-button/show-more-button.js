import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { SubtractAlt as s, AddAlt as c } from "@carbon/icons-react";
import { Button as u } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as h } from "../../../utils/i18n/utils.js";
import { StyledContainer as l } from "./styled-components/styled-container.js";
import { StyledDivider as i } from "./styled-components/styled-divider.js";
const J = ({
  dataTestId: p = "show-more-button",
  isExpanded: t,
  withDivider: r = !0,
  onClick: e
}) => {
  const { t: m } = h();
  return /* @__PURE__ */ n(l, { children: [
    r && /* @__PURE__ */ o(i, {}),
    /* @__PURE__ */ o(
      u,
      {
        dataTestId: p,
        size: "32px",
        kind: "control",
        startEnhancer: t ? /* @__PURE__ */ o(s, {}) : /* @__PURE__ */ o(c, {}),
        onClick: e,
        children: m(t ? "webdoxAI.chat.showLessQuotes" : "webdoxAI.chat.showMoreQuotes")
      }
    ),
    r && /* @__PURE__ */ o(i, {})
  ] });
};
export {
  J as ShowMoreButton
};
//# sourceMappingURL=show-more-button.js.map
