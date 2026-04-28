import { jsx as m } from "react/jsx-runtime";
import { Input as u } from "../../input/next/input.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { CountrySelect as S } from "./components/country-select.js";
import { countrySelectDropdownFlagColumnStyles as C, countrySelectDropdownDialcodeColumnStyles as d, countrySelectDropdownNameColumnStyles as a, countrySelectDropdownListItemStyles as i, dialCodeStyles as D, flagContainerStyles as w, rootStyles as $ } from "./phone-input.styles.js";
const N = ({
  dataTestId: t,
  ref: n,
  name: e,
  size: o,
  kind: r,
  clearable: p,
  inputRef: l,
  countryCodeAriaLabel: s,
  onCountryChange: y
}) => ({
  Root: {
    props: {
      ref: n
    },
    style: $
  },
  Input: {
    props: {
      "data-testid": `${t}--tel-input`,
      size: o,
      kind: r,
      clearable: p,
      inputRef: l,
      ...e && { name: e }
    },
    component: u
  },
  FlagContainer: {
    props: {
      $size: o
    },
    style: w
  },
  DialCode: {
    props: {
      $size: o
    },
    style: D
  },
  CountrySelect: {
    props: {
      size: o,
      kind: r
    },
    component: (c) => /* @__PURE__ */ m(
      S,
      {
        dataTestId: `${t}__country-select`,
        inputRef: l,
        countryCodeAriaLabel: s,
        onCountryChange: y,
        ...c
      }
    )
  },
  CountrySelectDropdownListItem: {
    style: i
  },
  CountrySelectDropdownNameColumn: {
    props: {
      $size: o
    },
    style: a
  },
  CountrySelectDropdownDialcodeColumn: {
    props: {
      $size: o
    },
    style: d
  },
  CountrySelectDropdownFlagColumn: {
    props: {
      $size: o
    },
    style: C
  }
});
export {
  N as getPhoneInputBaseOverrides
};
//# sourceMappingURL=phone-input.overrides.js.map
