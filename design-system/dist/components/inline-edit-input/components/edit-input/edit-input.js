import { jsxs as p, Fragment as e, jsx as o } from "react/jsx-runtime";
import { CheckmarkFilled as $, CloseFilled as D } from "@carbon/icons-react";
import { mergeOverridesDeep as E } from "../../../utils/baseui/helpers.js";
import { getOverride as n, getOverrideProps as i } from "../../../../utils/overrides.utils.js";
import "../../../button/button.js";
import { IconButton as d } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as j } from "../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Input as L } from "../../../input/input.js";
import { DEFAULT_ICON_SIZE as R } from "../../inline-edit-input.constants.js";
const _ = (t) => ({
  Root: {
    style: () => ({
      border: 0,
      background: t.colors.bgBase,
      borderBottom: ".5px dashed black",
      marginRight: t.spacing.spacingXs
    })
  }
}), V = ({
  "data-testid": t,
  inputText: h,
  disabled: C,
  colors: I = {},
  iconSize: c = R,
  isInvalidValue: s,
  overrides: l = {},
  onChange: k,
  onKeyDown: b,
  onSubmit: g,
  onCancelClick: B
}) => {
  const { theme: r } = j({}), {
    Input: u,
    SubmitIconButton: m,
    CancelIconButton: a
  } = l, f = n(u) || L, v = n(m) || d, O = n(a) || d, { cancelIcon: x, checkIcon: F } = I, S = F ?? r.colors.nature, y = s ? r.colors.neutralDepressed : S;
  return /* @__PURE__ */ p(e, { children: [
    /* @__PURE__ */ o(
      f,
      {
        "data-testid": `${t}-input`,
        size: "compact",
        kind: "white",
        autoFocus: !0,
        value: h,
        maxLength: 255,
        onChange: (z) => k(z.currentTarget.value),
        onKeyDown: b,
        overrides: E(_(r), l),
        ...i(u)
      }
    ),
    C ? /* @__PURE__ */ o(e, {}) : /* @__PURE__ */ p(e, { children: [
      /* @__PURE__ */ o(
        v,
        {
          "data-testid": `${t}-submit-button`,
          size: "auto",
          disabled: s,
          kind: "link-tertiary",
          shape: "circle",
          onClick: g,
          ...i(m),
          children: /* @__PURE__ */ o(
            $,
            {
              size: c,
              fill: y
            }
          )
        }
      ),
      /* @__PURE__ */ o(
        O,
        {
          "data-testid": `${t}-cancel-button`,
          size: "auto",
          kind: "link-tertiary",
          shape: "circle",
          onClick: B,
          ...i(a),
          children: /* @__PURE__ */ o(
            D,
            {
              size: c,
              fill: x ?? r.colors.neutralSubdued
            }
          )
        }
      )
    ] })
  ] });
};
export {
  V as EditInput,
  _ as inputOverridesStyles
};
//# sourceMappingURL=edit-input.js.map
