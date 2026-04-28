import { jsx as O } from "react/jsx-runtime";
import { forwardRef as P, useMemo as R } from "react";
import { mergeOverrides as _ } from "baseui";
import { PhoneInput as T } from "baseui/phone-input";
import "baseui/input";
import { useSyncedRef as x } from "../../../hooks/use-synced-ref.hook.js";
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
import { useTranslation as A } from "../../utils/i18n/utils.js";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import { DEFAULT_SIZE as E, DEFAULT_KIND as M } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { getPhoneInputBaseOverrides as N } from "./phone-input.overrides.js";
const v = "264px", H = "323px", L = { id: "", dialCode: "", label: "" }, Do = P(function({
  "data-testid": p = "phone-input",
  overrides: i,
  maxDropdownHeight: u = v,
  maxDropdownWidth: a = H,
  size: m = E,
  kind: e = M,
  clearable: n,
  inputRef: I,
  country: o,
  countryCodeAriaLabel: s,
  name: r,
  onCountryChange: f,
  ...c
}, d) {
  const l = x({
    externalRef: I
  }), { t } = A(), h = o != null && o.id ? o : L, D = R(
    () => _(
      N({
        dataTestId: p,
        size: m,
        kind: e,
        ref: d,
        clearable: n,
        inputRef: l,
        name: r,
        countryCodeAriaLabel: s ?? t("phoneInput.countryCodeAriaLabel"),
        onCountryChange: f
      }),
      i
    ),
    [
      t,
      p,
      m,
      e,
      d,
      n,
      i,
      s,
      l,
      r,
      f
    ]
  );
  return /* @__PURE__ */ O(
    T,
    {
      ...c,
      country: h,
      name: r,
      placeholder: t("phoneInput.placeholder"),
      maxDropdownHeight: u,
      maxDropdownWidth: a,
      clearable: !1,
      overrides: D
    }
  );
});
export {
  Do as PhoneInput
};
//# sourceMappingURL=phone-input.js.map
