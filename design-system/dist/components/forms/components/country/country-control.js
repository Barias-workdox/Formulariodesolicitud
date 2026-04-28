import { jsx as e } from "react/jsx-runtime";
import { useCountryCodeOptions as m } from "../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import { SelectControl as l } from "../select/select-control.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "react-hook-form";
const y = ({
  countryCodes: o,
  sort: t,
  territoryType: r = "countries",
  ...n
}) => {
  const p = m(o, { sort: t, territoryType: r }).sort((i, s) => i.label.localeCompare(s.label));
  return /* @__PURE__ */ e(
    l,
    {
      ...n,
      options: p
    }
  );
};
export {
  y as CountryControl
};
//# sourceMappingURL=country-control.js.map
