import { jsx as P } from "react/jsx-runtime";
import { forwardRef as G, useRef as K, useMemo as W, useCallback as X, useEffect as Z } from "react";
import { Datepicker as $ } from "baseui/datepicker";
import { isAfter as q } from "date-fns";
import { isNil as d } from "lodash";
import "baseui";
import "baseui/input";
import { useSyncedRef as z } from "../../../hooks/use-synced-ref.hook.js";
import { noop as B } from "../../../utils/noop.js";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import { mergeOverridesDeep as H } from "../../utils/baseui/helpers.js";
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
import { useTranslation as J } from "../../utils/i18n/utils.js";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import { DEFAULT_KIND as Q, DEFAULT_SIZE as Y } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { useDateUtilsWithLocale as C } from "../../utils/hooks/use-date-util-with-locale.js";
import { DATE_RANGE_SEPARATOR as D, DEFAULT_MAX_DATE as tt } from "./datepicker.constants.js";
import { getDatepickerOverrides as rt } from "./datepicker.overrides.js";
const et = G(function({
  "data-testid": A = "datepicker",
  enableInputBlur: s = !0,
  isLoading: v,
  kind: E = Q,
  leading: R,
  maxDate: T = tt,
  name: k,
  inputRef: y,
  onChange: e = B,
  overrides: n = {},
  placeholder: x,
  range: m,
  readOnly: L,
  showCopyContentButton: O,
  size: _ = Y,
  value: S = [],
  width: I,
  zIndex: N,
  ...U
}, V) {
  const { formatDatetimeAsText: f, parseTextAsDatetime: c } = C(), { t: b } = J(), g = x || b("datePicker.placeholder"), h = K(), p = z({
    externalRef: y
  }), l = rt({
    dataTestId: A,
    inputRef: p,
    name: k,
    isLoading: v,
    kind: E,
    leading: R,
    readOnly: L,
    ref: V,
    showCopyContentButton: O,
    size: _,
    width: I,
    zIndex: N
  }), w = W(
    () => H(l, n),
    [l, n]
  ), a = X(
    (t) => {
      const u = t.target.value.trim();
      if (!u) return;
      const o = u.split(D).map((r) => r.trim()).map((r) => c(r.trim()));
      if (!o.every((r) => r !== null)) {
        e({ date: void 0 });
        return;
      }
      if (m) {
        const [r, j] = o, M = q(r, j);
        e({ date: M ? void 0 : o });
      } else
        e({ date: o });
    },
    [e, c, m]
  );
  Z(() => {
    const t = p.current;
    if (s && t)
      return t.addEventListener("blur", a), () => {
        t.removeEventListener("blur", a);
      };
  }, [s, a, p]);
  function F(t) {
    h.current = t.date, e(t);
  }
  return /* @__PURE__ */ P(
    $,
    {
      maxDate: T,
      onChange: F,
      overrides: w,
      formatDisplayValue: (t) => d(t) ? "" : Array.isArray(t) ? t.filter((i) => !d(i)).map((i) => f(i.toString(), !1)).join(D) : f(t.toString(), !1),
      placeholder: g,
      range: m,
      value: S,
      ...U
    }
  );
});
et.displayName = "Datepicker";
export {
  et as Datepicker
};
//# sourceMappingURL=datepicker.js.map
