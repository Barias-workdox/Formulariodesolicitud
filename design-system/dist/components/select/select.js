import { jsxs as _, jsx as a } from "react/jsx-runtime";
import { useState as T, useMemo as w, useCallback as D } from "react";
import { AddFilled as I } from "@carbon/icons-react";
import { Select as K } from "baseui/select";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as L } from "../utils/i18n/utils.js";
import { includesStringNormalized as ee } from "../utils/strings/text.utils.js";
import { mergeOverridesDeep as re } from "../utils/baseui/helpers.js";
import { useCss as te } from "../utils/hooks/use-css.js";
import { getOverrides as se } from "./select.overrides.js";
import { styles as ie } from "./select.styles.js";
const be = ({
  "data-testid": d = "select",
  value: F,
  name: z,
  zIndex: u,
  className: C,
  placeholder: H,
  isBorderless: v = !1,
  creatable: M = !1,
  clearable: k = !0,
  filterOutSelected: q = !0,
  kind: h = "gray",
  valueKey: S = "id",
  labelKey: s = "label",
  maxDropdownHeight: B = "300px",
  overrides: $,
  onOpen: O,
  onChange: x,
  onClose: A,
  getOptionLabel: i,
  onCreate: f,
  onInputChange: l,
  filterOptions: g,
  options: m,
  ...E
}) => {
  const [b, N] = T(!1), { t: p } = L(), { creatableIconStyles: G, creatableOptionStyles: J, theme: P } = te(ie), n = [F].flat().filter(Boolean), Q = (...e) => {
    if (g)
      return g(...e);
    const [r, o] = e;
    return r.filter((t) => {
      const c = t.label || t[s] || (i == null ? void 0 : i({
        option: t,
        optionState: { $disabled: !1, $isHighlighted: !1, $selected: !1 }
      }));
      return c && ee(c.toString(), o);
    });
  }, R = w(() => {
    const e = se({
      kind: h,
      zIndex: u,
      dataTestId: d,
      isBorderless: v,
      isOpen: b,
      options: m,
      name: z
    });
    return re(e, $);
  }, [d, v, b, h, $, u]), U = () => {
    N(!0), O && O();
  }, V = () => {
    N(!1), A && A();
  }, W = D(
    ({ option: e, value: r }) => {
      const { isCreatable: o = !1 } = e || {};
      if (l)
        if (r.length === 0 && n.length === 1) {
          const [{ [s]: t }] = n;
          l({
            target: { value: t.slice(0, -1) }
          });
        } else
          l({ target: { value: "" } });
      x(r), o && f !== void 0 && f(r);
    },
    [s, n, x, f, l]
  ), X = D(
    ({ option: e }, r, o) => {
      const { isCreatable: t = !1 } = e, c = e[r], j = e[o], Y = Array.isArray(m) ? m.findIndex((Z) => Z.id === c) : void 0, y = d ? `${d}-option-${Y ?? c}` : void 0;
      return t ? /* @__PURE__ */ _(
        "div",
        {
          "data-testid": y,
          className: J,
          children: [
            `${p("select.create")} “${j}”`,
            /* @__PURE__ */ a("span", { className: G, children: /* @__PURE__ */ a(
              I,
              {
                color: P.colors.brand,
                size: 16
              }
            ) })
          ]
        }
      ) : /* @__PURE__ */ a("div", { "data-testid": y, children: j });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [p]
  );
  return /* @__PURE__ */ a("div", { className: C, children: /* @__PURE__ */ a(
    K,
    {
      valueKey: S,
      labelKey: s,
      value: n,
      getOptionLabel: (e) => i !== void 0 ? i(e) : X(e, S, s),
      placeholder: H || p("select.placeholder"),
      clearable: k,
      filterOutSelected: q,
      maxDropdownHeight: B,
      creatable: M,
      overrides: R,
      onChange: W,
      onOpen: U,
      onClose: V,
      onInputChange: l,
      filterOptions: Q,
      options: m,
      ...E
    }
  ) });
};
export {
  be as Select
};
//# sourceMappingURL=select.js.map
