import { jsxs as r, jsx as o } from "react/jsx-runtime";
import { Close as p } from "@carbon/icons-react";
import { BackgroundIcon as d } from "../../../../background-icon/background-icon.js";
import "../../../../button/button.js";
import { IconButton as n } from "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as c } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as f } from "../../../../text/text.js";
import { styles as h } from "./header-tab.styles.js";
const $ = ({
  "data-testid": i,
  title: m,
  startEnhancerProps: t,
  onClose: e
}) => {
  const { tabHeaderStyles: s, tabHeaderTitleStyles: a, theme: l } = c(h);
  return /* @__PURE__ */ r("div", { className: s, children: [
    /* @__PURE__ */ r("div", { className: a, children: [
      t && /* @__PURE__ */ o(d, { ...t }),
      /* @__PURE__ */ o(
        f,
        {
          variant: "bodySmall",
          margin: 0,
          fontWeight: "500",
          color: l.colors.neutralStrong,
          children: m
        }
      )
    ] }),
    /* @__PURE__ */ o(
      n,
      {
        "data-testid": `${i}--close`,
        size: "32px",
        onClick: e,
        children: /* @__PURE__ */ o(p, {})
      }
    )
  ] });
};
export {
  $ as HeaderTab
};
//# sourceMappingURL=header-tab.js.map
