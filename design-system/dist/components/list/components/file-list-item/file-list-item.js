import { jsx as i, jsxs as n } from "react/jsx-runtime";
import { forwardRef as s } from "react";
import { FileTypeIcon as f } from "../../../file-type-icon/file-type-icon.js";
import { DEFAULT_ICON_SIZE as p } from "../../../file-type-icon/file-type-icon.constants.js";
import { ListItem as I } from "../list-item/list-item.js";
import { StyledListItemIconInner as c } from "../list-item/list-item.styles.js";
const j = s(function({ "data-testid": t, fileExtension: r, startEnhancer: o, ...e }, m) {
  return /* @__PURE__ */ i(
    I,
    {
      ref: m,
      dataTestId: t,
      ...e,
      startEnhancer: /* @__PURE__ */ n(c, { children: [
        o,
        /* @__PURE__ */ i(
          f,
          {
            fileExtension: r,
            "data-testid": `${t}--file-icon-${r}`,
            size: p
          }
        )
      ] })
    }
  );
});
export {
  j as FileListItem
};
//# sourceMappingURL=file-list-item.js.map
