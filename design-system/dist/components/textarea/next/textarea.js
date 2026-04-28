import { jsx as p } from "react/jsx-runtime";
import { Textarea as e } from "baseui/textarea";
import { withIsHovered as a } from "../../hocs/with-is-hovered.js";
import "react";
import "baseui";
import "baseui/input";
import "lodash";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import { DEFAULT_SIZE as s } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { getTextareaOverrides as x } from "./textarea.overrides.js";
function f({
  kind: t = "gray",
  isHovered: o,
  size: i = s,
  "data-testid": m,
  ...r
}) {
  return /* @__PURE__ */ p(
    e,
    {
      ...r,
      overrides: x({ kind: t, size: i, dataTestId: m, isHovered: o, resize: r.resize })
    }
  );
}
const Q = a(f);
export {
  Q as Textarea
};
//# sourceMappingURL=textarea.js.map
