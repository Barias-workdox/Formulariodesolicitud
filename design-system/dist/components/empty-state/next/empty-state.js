import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { Document as _ } from "@carbon/icons-react";
import { BackgroundIcon as A } from "../../background-icon/background-icon.js";
import { Button as p } from "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_44 as C } from "../../../constants/common.constants.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { useCss as B } from "../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { Text as n } from "../../text/text.js";
import { styles as D } from "./empty-state.styles.js";
const E = {
  size: C,
  Icon: _,
  iconColor: "brandStrong",
  backgroundColor: "brandSubtle"
}, H = "empty-state", X = ({
  title: i,
  description: m,
  link: a,
  primaryButtonProps: r,
  secondaryButtonProps: e,
  Icon: s,
  size: c,
  iconColor: l,
  backgroundColor: d,
  dataTestId: x
}) => {
  const { containerStyles: f, textsContainerStyles: h, buttonsContainerStyles: g, linkStyles: y, theme: S } = B(D), { text: b, ...u } = r || {}, { text: T, ...k } = e || {}, { text: v, href: I } = a || {}, N = {
    ...s && { Icon: s },
    ...c && { size: c },
    ...l && { iconColor: l },
    ...d && { backgroundColor: d }
  };
  return /* @__PURE__ */ o(
    "div",
    {
      className: f,
      "data-testid": `${H}-${x}`,
      children: [
        /* @__PURE__ */ t(
          A,
          {
            ...E,
            ...N
          }
        ),
        /* @__PURE__ */ o("div", { className: h, children: [
          i && /* @__PURE__ */ t(
            n,
            {
              variant: "body",
              fontWeight: "500",
              textAlign: "center",
              margin: 0,
              children: i
            }
          ),
          m && /* @__PURE__ */ t(
            n,
            {
              variant: "bodySmall",
              textAlign: "center",
              whiteSpace: "pre-line",
              margin: 0,
              children: m
            }
          ),
          a && /* @__PURE__ */ t(
            "a",
            {
              href: I,
              target: "_blank",
              rel: "noreferrer",
              className: y,
              children: /* @__PURE__ */ t(
                n,
                {
                  variant: "bodySmall",
                  color: S.colors.brand,
                  margin: 0,
                  children: v
                }
              )
            }
          )
        ] }),
        (r || e) && /* @__PURE__ */ o("div", { className: g, children: [
          e && /* @__PURE__ */ t(
            p,
            {
              kind: "secondary",
              size: "32px",
              ...k,
              children: T
            }
          ),
          r && /* @__PURE__ */ t(
            p,
            {
              size: "32px",
              ...u,
              children: b
            }
          )
        ] })
      ]
    }
  );
};
export {
  X as EmptyState
};
//# sourceMappingURL=empty-state.js.map
