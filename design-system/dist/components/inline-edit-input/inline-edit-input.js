import { jsxs as A, jsx as E } from "react/jsx-runtime";
import { getOverride as c, getOverrideProps as p } from "../../utils/overrides.utils.js";
import { CaptionInput as F } from "./components/caption-input/caption-input.js";
import { EditInput as N } from "./components/edit-input/edit-input.js";
import { DEFAULT_ICON_SIZE as P } from "./inline-edit-input.constants.js";
import { StyledContainer as U } from "./inline-edit-input.styles.js";
const J = ({
  "data-testid": a = "inline-edit-input",
  colors: k = {},
  inputText: n,
  captionText: o,
  mode: s,
  iconSize: l = P,
  isLoading: r = !1,
  disabled: e = !1,
  zIndex: O,
  overrides: h = {},
  onChange: d,
  onSubmit: C,
  onToggle: i
}) => {
  const { Caption: I, EditInput: f, Root: m } = h, v = c(m) || U, D = c(I) || F, y = c(f) || N, { cancelIcon: w, checkIcon: R, editIcon: $ } = k, j = n.length <= 0 || n.trim() === o, u = (t) => {
    t.preventDefault(), d(o), i();
  }, K = (t) => {
    switch (t.key) {
      case "Escape":
        u(t);
        break;
      case "Enter":
        t.preventDefault(), C();
        break;
    }
  }, _ = () => {
    e || i();
  };
  return /* @__PURE__ */ A(v, { ...p(m), children: [
    (r || s === "caption") && /* @__PURE__ */ E(
      D,
      {
        zIndex: O,
        "data-testid": `${a}--input-caption`,
        colors: {
          editIcon: $
        },
        iconSize: l,
        isLoading: r,
        captionText: o,
        disabled: e,
        onCaptionClick: _,
        onToggle: i,
        ...p(I)
      }
    ),
    !r && s === "input" && /* @__PURE__ */ E(
      y,
      {
        colors: {
          cancelIcon: w,
          checkIcon: R
        },
        iconSize: l,
        "data-testid": `${a}--input-edit`,
        inputText: n,
        disabled: e,
        onChange: d,
        onKeyDown: K,
        onSubmit: C,
        onCancelClick: u,
        isInvalidValue: j,
        ...p(f)
      }
    )
  ] });
};
export {
  J as InlineEditInput
};
//# sourceMappingURL=inline-edit-input.js.map
