import { jsx as t, Fragment as n } from "react/jsx-runtime";
import { Close as p } from "@carbon/icons-react";
import { StyledClose as m } from "baseui/modal";
import { getColorsMap as l, heightMap as r } from "../../../button/button.styles.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { themedWithStyle as c } from "../../../../themes/utilities.js";
import { useCss as a } from "../../../utils/hooks/use-css.js";
const i = "compact", d = "control", g = c(m, ({ $theme: o }) => ({
  top: o.spacing.spacingMd,
  right: o.spacing.spacingMd,
  height: r[i],
  width: r[i],
  ...l({ $theme: o })[d]
}));
function j({ canClose: o, ...e }) {
  const { theme: s } = a();
  return o ? /* @__PURE__ */ t(
    g,
    {
      "aria-label": "Close",
      ...e,
      children: /* @__PURE__ */ t(
        p,
        {
          size: 20,
          color: s.colors.neutralSubdued
        }
      )
    }
  ) : /* @__PURE__ */ t(n, {});
}
export {
  j as ModalCloseButton
};
//# sourceMappingURL=modal-close-button.js.map
