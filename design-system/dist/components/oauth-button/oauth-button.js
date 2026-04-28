import { jsx as t } from "react/jsx-runtime";
import e from "../../assets/icons/google-icon.svg.js";
import s from "../../assets/icons/microsoft-icon.svg.js";
import { Button as u } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { useCss as a } from "../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { SvgIcon as c } from "../svg-icon/svg-icon.js";
import { Text as h } from "../text/text.js";
import { oauthButtonStyledOverrides as l } from "./oauth-button.styles.js";
const d = {
  google: {
    buttonText: "Google",
    icon: e
  },
  microsoft: {
    buttonText: "Microsoft",
    icon: s
  }
}, k = ({
  "data-testid": o = "oauth-button",
  variant: r,
  ...i
}) => {
  const { buttonText: m, icon: n } = d[r], { theme: p } = a();
  return /* @__PURE__ */ t(
    u,
    {
      "data-testid": o,
      startEnhancer: /* @__PURE__ */ t(
        c,
        {
          svg: n,
          width: "21px",
          height: "21px"
        }
      ),
      overrides: l(o),
      ...i,
      children: /* @__PURE__ */ t(
        h,
        {
          variant: "bodySmall",
          fontWeight: "500",
          margin: "0",
          color: p.colors.neutralSubdued,
          children: m
        }
      )
    }
  );
};
export {
  k as OAuthButton
};
//# sourceMappingURL=oauth-button.js.map
