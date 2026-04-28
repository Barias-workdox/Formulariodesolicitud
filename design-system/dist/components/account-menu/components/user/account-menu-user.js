import { jsxs as a, jsx as t } from "react/jsx-runtime";
import { Launch as u } from "@carbon/icons-react";
import { Avatar as f } from "../../../avatar/avatar.js";
import { Button as h } from "../../../button/next/button.js";
import { Text as i } from "../../../text/text.js";
import { useCss as x } from "../../../utils/hooks/use-css.js";
import { StyledUserSection as S, StyledUserDetails as b } from "./account-menu.styles.js";
const j = ({
  dataTestId: e = "account-menu__user-section",
  user: c,
  manageAccountButtonText: d = "Gestionar cuenta",
  onManageAccountClick: l,
  showManageAccountButton: s = !0
}) => {
  const { name: o, avatarSrc: p, role: m, company: g } = c, r = [m, g].filter(Boolean).join(" | "), { theme: n } = x();
  return /* @__PURE__ */ a(S, { "data-testid": e, children: [
    /* @__PURE__ */ t(
      f,
      {
        showTooltip: !1,
        backgroundColor: "brandSubtle",
        name: o,
        size: "32px",
        src: p
      }
    ),
    /* @__PURE__ */ a(b, { children: [
      /* @__PURE__ */ t(
        i,
        {
          variant: "bodySmall",
          color: "neutralMedium",
          fontWeight: "700",
          textAlign: "center",
          margin: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          paddingLeft: n.spacing.spacingMd,
          paddingRight: n.spacing.spacingMd,
          children: o
        }
      ),
      r && /* @__PURE__ */ t(
        i,
        {
          variant: "bodySmall",
          color: "neutralMedium",
          fontWeight: "400",
          textAlign: "center",
          margin: 0,
          paddingLeft: n.spacing.spacingMd,
          paddingRight: n.spacing.spacingMd,
          children: r
        }
      )
    ] }),
    s && /* @__PURE__ */ t(
      h,
      {
        "data-testid": `${e}__manage-account-button`,
        endEnhancer: u,
        kind: "brand",
        appearance: "tonal",
        onClick: l,
        children: d
      }
    )
  ] });
};
export {
  j as AccountMenuUser
};
//# sourceMappingURL=account-menu-user.js.map
