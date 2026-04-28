import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { Select as a } from "../../../../../select/next/select.js";
import { useCountryCodeOptions as h } from "../../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import { getSelectorCountryOptionLabel as l } from "../../../../utils/legal-whisper-selector.util.js";
import { selectOverrides as u } from "./country-and-area-selector.overrides.js";
import { StyledContainer as b } from "./styled-components/styled-container.js";
import { StyledSelectWrapper as C } from "./styled-components/styled-select-wrapper.js";
const w = ({
  areaOptions: s,
  countryOptions: i,
  dataTestId: r,
  onAreaChange: n,
  onCountryChange: c,
  selectedArea: m,
  selectedCountry: p,
  zIndex: o
}) => {
  const f = h(i, { sort: "asc" });
  return /* @__PURE__ */ d(b, { children: [
    /* @__PURE__ */ t(
      a,
      {
        clearable: !1,
        "data-testid": `${r}__country-select`,
        getOptionLabel: ({ option: e }) => l({ option: e }),
        getValueLabel: ({ option: e }) => l({ option: e, withLabel: !1 }),
        overrides: u,
        kind: "white",
        onChange: c,
        options: f,
        searchable: !1,
        size: "sm",
        value: p,
        zIndex: o
      }
    ),
    /* @__PURE__ */ t(C, { children: /* @__PURE__ */ t(
      a,
      {
        clearable: !1,
        "data-testid": `${r}__area-select`,
        kind: "white",
        onChange: n,
        options: s,
        searchable: !1,
        size: "sm",
        value: m,
        zIndex: o
      }
    ) })
  ] });
};
export {
  w as CountryAndAreaSelector
};
//# sourceMappingURL=country-and-area-selector.js.map
