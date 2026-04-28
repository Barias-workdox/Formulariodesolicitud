import { jsx as i } from "react/jsx-runtime";
import { Search as p } from "@carbon/icons-react";
import "react-hook-form";
import "react";
import "baseui/form-control";
import "baseui";
import "../text/text.js";
import "baseui/tooltip";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../select/next/styled-components/styled-icons-container.js";
import "../select/next/styled-components/styled-start-enhancer-container.js";
import "../select/next/components/select-dropdown-container.js";
import "../select/next/components/select-optgroup-header.js";
import "../radio/radio-group.js";
import "baseui/radio";
import "../forms/components/datepicker/datepicker-control.js";
import "yup";
import { cleanCHLNic as e } from "../forms/validations/nic/chl/chl.format.js";
import "../color-picker/next/color-picker.js";
import "../checkbox/checkbox.js";
import "../file-uploader/file-uploader.js";
import "baseui/menu";
import "../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../avatar/avatar.styles.js";
import "../input/input.js";
import "../layouts/title-layout/title-layout.styles.js";
import "../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../tag/next/tag.styled-components.js";
import "../list/list.js";
import "../list/virtualized-list.js";
import "../list/components/avatar-list-item/avatar-list-item.js";
import "../list/components/file-list-item/file-list-item.js";
import { ListItem as n } from "../list/components/list-item/list-item.js";
function Tt({
  dataTestId: t,
  item: r,
  $isActive: o,
  handleClick: m
}) {
  return /* @__PURE__ */ i(
    n,
    {
      "data-testid": t,
      label: String(r),
      startEnhancer: /* @__PURE__ */ i(p, {}),
      isActive: o,
      onClick: m
    }
  );
}
function jt(t) {
  return String(t);
}
const kt = (t, r) => {
  switch (r) {
    case "number":
      return t.replace(/\D/g, "");
    case "chile-rut":
      return e({ rawNic: t });
    default:
      return t;
  }
};
export {
  Tt as defaultMapItemToNode,
  jt as defaultMapItemToString,
  kt as normalizeValue
};
//# sourceMappingURL=suggestions-input.utils.js.map
