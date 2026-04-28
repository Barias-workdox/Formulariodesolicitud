import { jsx as i } from "react/jsx-runtime";
import { forwardRef as h, useMemo as b, useCallback as _ } from "react";
import { Flag as f } from "@carbon/icons-react";
import { BackgroundIcon as g } from "../../../background-icon/background-icon.js";
import { Select as k } from "../../../select/next/select.js";
import { mergeOverridesDeep as x } from "../../../utils/baseui/helpers.js";
import { BASE_INPUT_HEIGHTS as y } from "../../../../constants/common.constants.js";
const H = h(function({
  dataTestId: t,
  value: e,
  overrides: s,
  inputRef: r,
  size: c,
  countryCodeAriaLabel: m,
  onCountryChange: o,
  ...d
}, a) {
  const l = e == null ? void 0 : e[0], p = !Array.isArray(e) || e.length === 0 || !l || !l.id || Object.keys(l).length === 0, u = b(() => {
    const n = {
      ...p ? {
        // When there's no value selected, BaseWeb renders `Placeholder` (not `SingleValue`).
        // We override it to show our empty-state flag icon instead of placeholder text.
        Placeholder: {
          component: () => /* @__PURE__ */ i(
            g,
            {
              "data-testid": `${t}__empty-value-flag`,
              Icon: f,
              size: "24px",
              backgroundColor: "neutralSubtle",
              iconColor: "neutral",
              shape: "square"
            }
          )
        },
        // Keep SingleValue override as well for edge-cases where BaseWeb treats an "empty"
        // option object as a selected value.
        SingleValue: {
          component: () => /* @__PURE__ */ i(
            g,
            {
              "data-testid": `${t}__empty-value-flag`,
              Icon: f,
              size: "24px",
              backgroundColor: "neutralSubtle",
              iconColor: "neutral",
              shape: "square"
            }
          )
        }
      } : {
        SingleValue: {
          style: {
            fontSize: "22px",
            lineHeight: 1
          }
        }
      },
      Root: {
        props: {
          ref: a,
          "aria-label": m
        }
      },
      ValueContainer: {
        style: {
          minHeight: "none",
          height: y[c]
        }
      }
    };
    return x(n, s);
  }, [a, s, c, t, m, p]), S = _(
    (n) => {
      o == null || o(n), r && r.current && r.current.focus();
    },
    [o, r]
  );
  return /* @__PURE__ */ i(
    k,
    {
      ...d,
      value: e,
      overrides: u,
      onChange: S
    }
  );
});
H.displayName = "CountrySelect";
export {
  H as CountrySelect
};
//# sourceMappingURL=country-select.js.map
