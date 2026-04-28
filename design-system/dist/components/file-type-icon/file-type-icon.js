import { jsx as o, Fragment as i, jsxs as C } from "react/jsx-runtime";
import { useCss as y } from "../utils/hooks/use-css.js";
import { ReactComponent as f } from "../../assets/icons/file-type-base.svg.js";
import { ReactComponent as S } from "../../assets/icons/folder.svg.js";
import { ReactComponent as I } from "../../assets/icons/unknown.svg.js";
import { FILE_ICON_CONFIG as g, DEFAULT_ICON_SIZE as h } from "./file-type-icon.constants.js";
import { styles as v, StyledContainer as N, StyledFileTypeText as T } from "./file-type-icon.styles.js";
const $ = ({
  "data-testid": a,
  dataTestId: r = a,
  fileExtension: e,
  size: t = h,
  isDisabled: d,
  ariaHidden: l = !0
}) => {
  const n = e ? g[e] : void 0, { primaryColor: m, secondaryColor: c, text: p } = n || {}, F = n === void 0, { iconStyles: s } = y(v, {
    primaryColor: m,
    secondaryColor: c,
    size: t
  });
  return /* @__PURE__ */ o(
    N,
    {
      "data-testid": r,
      $size: t,
      $isDisabled: d,
      "aria-hidden": l,
      children: e === "folder" ? /* @__PURE__ */ o(S, {}) : /* @__PURE__ */ o(i, { children: F ? /* @__PURE__ */ o(
        I,
        {
          "data-testid": `${r}--unknown`,
          className: s
        }
      ) : /* @__PURE__ */ C(i, { children: [
        /* @__PURE__ */ o(T, { size: t, children: p }),
        /* @__PURE__ */ o(f, { className: s })
      ] }) })
    }
  );
};
export {
  $ as FileTypeIcon
};
//# sourceMappingURL=file-type-icon.js.map
