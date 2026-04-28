import { jsx as a } from "react/jsx-runtime";
import { Breadcrumbs as c } from "baseui/breadcrumbs";
import "../../themes/v3/light/theme.js";
import "../../themes/v3/dark/theme.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { themedUseStyletron as l } from "../../themes/utilities.js";
const S = ({
  children: r,
  overrides: e = {},
  ...t
}) => {
  const [, o] = l(), { ListItem: s, Icon: m, Separator: i, ...n } = e;
  return /* @__PURE__ */ a(
    c,
    {
      overrides: {
        ListItem: s ?? {
          style: {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        Icon: m ?? {
          style: {
            color: o.colors.neutralSubdued
          }
        },
        Separator: i ?? {
          style: {
            margin: 0
          }
        },
        ...n
      },
      ...t,
      children: r
    }
  );
};
export {
  S as Breadcrumbs
};
//# sourceMappingURL=breadcrumbs.js.map
