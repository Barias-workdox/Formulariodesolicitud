import { jsxs as W, jsx as n } from "react/jsx-runtime";
import { useState as X, useCallback as a, useMemo as Y } from "react";
import { AddFilled as I } from "@carbon/icons-react";
import { Select as w } from "baseui/select";
import { withIsHovered as L } from "../../hocs/with-is-hovered.js";
import "baseui";
import "baseui/input";
import "lodash";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { useCss as K } from "../../utils/hooks/use-css.js";
import "baseui/modal";
import { mergeOverridesDeep as rr } from "../../utils/baseui/helpers.js";
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
import { useTranslation as tr } from "../../utils/i18n/utils.js";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import { DEFAULT_KIND as er, DEFAULT_SIZE as or } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { includesStringNormalized as ir } from "../../utils/strings/text.utils.js";
import { getSelectOverrides as sr } from "./select.overrides.js";
import { styles as lr } from "./select.styles.js";
const mr = ({
  "data-testid": m,
  isHovered: S = !1,
  clearable: T = !0,
  creatable: V = !1,
  filterOutSelected: Z = !0,
  placeholder: k,
  value: q,
  kind: $ = er,
  labelKey: i = "label",
  maxDropdownHeight: y = "300px",
  valueKey: f = "id",
  leading: D,
  options: d,
  width: A,
  size: F = or,
  zIndex: N,
  name: b,
  overrides: x,
  onChange: C,
  onCreate: u,
  onInputChange: e,
  filterOptions: E,
  getOptionLabel: s,
  ...z
}) => {
  const [g, j] = X(!1), { t: h } = tr(), { creatableIconStyles: O, creatableOptionStyles: U, theme: _ } = K(lr), p = [q].flat().filter(Boolean), J = (...r) => {
    if (E)
      return E(...r);
    const [t, c] = r;
    return t.filter((o) => {
      const l = o.label || o[i] || (s == null ? void 0 : s({
        option: o,
        optionState: { $disabled: !1, $isHighlighted: !1, $selected: !1 }
      }));
      return l && ir(l.toString(), c);
    });
  }, v = a(
    ({ option: r, value: t, type: c }) => {
      const { isCreatable: o = !1 } = r || {};
      if (e) {
        if (c === "clear")
          e({ target: { value: "" } });
        else if (t.length === 0 && p.length === 1) {
          const [{ [i]: l }] = p;
          e({
            target: { value: l.slice(0, -1) }
          });
        }
      }
      C(t), o && u !== void 0 && u(t);
    },
    [i, p, C, u, e]
  ), B = a(() => {
    v({ option: null, value: [], type: "clear" }), j(!1);
  }, [v]), P = a(
    (r) => {
      const t = r.currentTarget.value;
      j(t !== ""), e && e(r);
    },
    [e]
  ), Q = Y(() => {
    const r = sr({
      kind: $,
      zIndex: N,
      dataTestId: m,
      isHovered: S,
      options: d,
      size: F,
      isInputDirty: g,
      onClear: B,
      leading: D,
      width: A,
      name: b
    });
    return rr(r, x);
  }, [
    g,
    $,
    N,
    m,
    S,
    d,
    F,
    D,
    A,
    b,
    x,
    B
  ]), G = a(
    ({ option: r }, t, c) => {
      const { isCreatable: o = !1 } = r, l = r[t], H = r[c], M = m ? `${m}-option-${l}` : void 0;
      return o ? /* @__PURE__ */ W(
        "div",
        {
          "data-testid": M,
          className: U,
          children: [
            `${h("select.create")} “${H}”`,
            /* @__PURE__ */ n("span", { className: O, children: /* @__PURE__ */ n(
              I,
              {
                color: _.colors.brand,
                size: 16
              }
            ) })
          ]
        }
      ) : /* @__PURE__ */ n("div", { "data-testid": M, children: H });
    },
    [h, _.colors.brand, m, O, U]
  ), R = a(
    (r) => s !== void 0 ? s(r) : G(r, f, i),
    [i, f, G, s]
  );
  return /* @__PURE__ */ n(
    w,
    {
      valueKey: f,
      labelKey: i,
      value: p,
      placeholder: k || h("select.placeholder"),
      clearable: T,
      filterOutSelected: Z,
      maxDropdownHeight: y,
      creatable: V,
      overrides: Q,
      onChange: v,
      onInputChange: P,
      filterOptions: J,
      getOptionLabel: R,
      options: d,
      ...z
    }
  );
}, Wr = L(mr);
export {
  Wr as Select
};
//# sourceMappingURL=select.js.map
