import { jsx as t } from "react/jsx-runtime";
import { Avatar as p } from "../../../avatar/avatar.js";
import { Text as i } from "../../../text/text.js";
import { useCss as u } from "../../../utils/hooks/use-css.js";
import { TitleLayout as d } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import { StatefulTooltip as n } from "../../../tooltip/stateful-tooltip.js";
import { styles as r } from "./activity-users.styles.js";
const T = ({ users: l = [] }) => {
  const { containerStyles: m } = u(r);
  return /* @__PURE__ */ t("div", { children: l.map(({ id: s, firstName: a, lastName: c, email: o }) => {
    const e = `${a} ${c}`;
    return /* @__PURE__ */ t(
      "div",
      {
        className: m,
        children: /* @__PURE__ */ t(
          d,
          {
            startEnhancer: /* @__PURE__ */ t(
              p,
              {
                name: e,
                size: "32px"
              }
            ),
            titleText: /* @__PURE__ */ t(
              n,
              {
                showArrow: !0,
                placement: "bottom",
                content: e,
                children: /* @__PURE__ */ t(
                  i,
                  {
                    variant: "bodySmall",
                    margin: 0,
                    fontWeight: "500",
                    $style: r.textStyles(),
                    children: e
                  }
                )
              }
            ),
            subtitleText: /* @__PURE__ */ t(
              n,
              {
                showArrow: !0,
                placement: "bottom",
                content: o,
                children: /* @__PURE__ */ t(
                  i,
                  {
                    margin: 0,
                    variant: "bodySmall",
                    color: "neutralSubdued",
                    $style: r.textStyles(),
                    children: o
                  }
                )
              }
            )
          }
        )
      },
      `activity-new-user-${s}`
    );
  }) });
};
export {
  T as ActivityUsers
};
//# sourceMappingURL=activity-users.js.map
