import { jsx as C } from "react/jsx-runtime";
import { FormControlLabel as b } from "./components/form-control-label/form-control-label.js";
import { captionStyles as y } from "./form-control.styles.js";
const L = ({
  currentCharactersQuantity: e,
  infoTooltip: n,
  labelWithHorizontalPadding: r,
  maxLength: a,
  showCharacterCounter: i,
  customOverrides: l = {},
  zIndex: m,
  required: s
}) => ({
  LabelContainer: {
    style: { margin: 0 }
  },
  Label: {
    component: function({
      children: o,
      $disabled: p
    }) {
      return typeof o == "object" ? o : /* @__PURE__ */ C(
        b,
        {
          label: o,
          labelWithHorizontalPadding: r,
          disabled: p,
          infoTooltip: n,
          showCharacterCounter: i,
          currentCharactersQuantity: e,
          maxLength: a,
          zIndex: m,
          required: s
        }
      );
    }
  },
  Caption: {
    style: ({ $theme: t, $error: o }) => ({
      ...y(t, o),
      ...l.Caption
    })
  }
}), d = {
  ControlContainer: { style: { margin: 0 } },
  Caption: { style: { marginBottom: 0 } }
};
export {
  L as getFormControlBaseOverrides,
  d as noExternalMarginOverrides
};
//# sourceMappingURL=form-control.overrides.js.map
