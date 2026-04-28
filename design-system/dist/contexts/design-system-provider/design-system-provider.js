import { jsx as r } from "react/jsx-runtime";
import { BaseProvider as t } from "baseui";
import { Client as n } from "styletron-engine-monolithic";
import { Provider as p } from "styletron-react";
import { LocaleProvider as s } from "../locale-provider/locale-provider.js";
/* empty css                      */
const c = new n(), h = ({
  children: o,
  theme: e,
  locale: i = "es",
  engine: m = c
}) => /* @__PURE__ */ r(s, { locale: i, children: /* @__PURE__ */ r(p, { value: m, children: /* @__PURE__ */ r(t, { theme: e, children: o }) }) });
export {
  h as DesignSystemProvider
};
//# sourceMappingURL=design-system-provider.js.map
