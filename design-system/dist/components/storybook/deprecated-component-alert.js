import { jsx as o } from "react/jsx-runtime";
import { Notification as r } from "../notification/next/notification.js";
import { DSTrans as t } from "../utils/i18n/translation-component.js";
const a = ({ name: e }) => /* @__PURE__ */ o(
  r,
  {
    kind: "warning",
    closeable: !1,
    description: /* @__PURE__ */ o(
      t,
      {
        i18nKey: "storybook.deprecatedComponent",
        values: { name: e }
      }
    )
  }
);
export {
  a as DeprecatedComponentAlert
};
//# sourceMappingURL=deprecated-component-alert.js.map
