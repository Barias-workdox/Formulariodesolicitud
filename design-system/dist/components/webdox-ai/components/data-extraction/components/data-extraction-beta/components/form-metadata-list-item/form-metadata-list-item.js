import { jsxs as p, Fragment as I, jsx as o } from "react/jsx-runtime";
import { InlineEditInput as u } from "../../../../../../../inline-edit-input/inline-edit-input.js";
import { useCss as f } from "../../../../../../../utils/hooks/use-css.js";
import { DataExtractionBetaLabel as E } from "../data-extraction-beta-label/data-extraction-beta-label.js";
import { ICON_BUTTON_SIZE_16 as x } from "./form-metadata-list-item.constants.js";
import { useInlineEditInputOverrides as O } from "./form-metadata-list-item.overrides.js";
const j = ({
  "data-testid": t,
  label: i,
  captionText: n,
  inputText: s,
  mode: e,
  disabled: m,
  onChange: c,
  onSubmit: a,
  onToggle: d
}) => {
  const { getInlineEditInputOverrides: l } = O(), { theme: r } = f();
  return /* @__PURE__ */ p(I, { children: [
    /* @__PURE__ */ o(E, { children: i }),
    /* @__PURE__ */ o(
      u,
      {
        colors: {
          editIcon: r.colors.neutralSubdued,
          cancelIcon: r.colors.sweet
        },
        iconSize: x,
        "data-testid": t,
        captionText: n,
        inputText: s,
        mode: e,
        onChange: c,
        onSubmit: a,
        onToggle: d,
        disabled: m,
        overrides: l({
          mode: e,
          dataTestId: t
        })
      }
    )
  ] });
};
export {
  j as FormMetadataListItem
};
//# sourceMappingURL=form-metadata-list-item.js.map
