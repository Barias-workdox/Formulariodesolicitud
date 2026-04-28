import { jsx as i } from "react/jsx-runtime";
import { Button as p } from "../../../button/button.js";
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
import "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../utils/i18n/utils.js";
const S = ({
  dataTestId: t = "filters-group__clean-all-filters-button",
  onClearAllFilters: r
}) => {
  const { t: o } = m();
  return /* @__PURE__ */ i(
    p,
    {
      "data-testid": t,
      size: "32px",
      kind: "link-tertiary",
      onClick: r,
      overrides: {
        BaseButton: {
          style: {
            whiteSpace: "nowrap"
          }
        }
      },
      children: o("filtersGroup.cleanAllFilters")
    }
  );
};
export {
  S as CleanAllFiltersButton
};
//# sourceMappingURL=clean-all-filters-button.js.map
