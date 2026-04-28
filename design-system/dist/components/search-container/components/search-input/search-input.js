import { jsx as t } from "react/jsx-runtime";
import { Search as n } from "@carbon/icons-react";
import { Input as s } from "../../../input/next/input.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as l } from "../../../utils/i18n/utils.js";
import { inputOverrides as u } from "./search-input.styles.js";
const S = ({
  dataTestId: o,
  autoFocus: e = !0,
  searchValue: i,
  searchPlaceholder: m,
  onSearchChange: r
}) => {
  const { t: p } = l();
  return /* @__PURE__ */ t(
    s,
    {
      "data-testid": o,
      clearable: !0,
      kind: "white",
      autoFocus: e,
      value: i,
      overrides: u,
      startEnhancer: /* @__PURE__ */ t(n, {}),
      placeholder: m ?? p("general.search"),
      onChange: ({ target: { value: a } }) => r(a),
      onClear: () => r("")
    }
  );
};
export {
  S as SearchInput
};
//# sourceMappingURL=search-input.js.map
