import { jsxs as y, Fragment as g, jsx as n } from "react/jsx-runtime";
import { useRef as j } from "react";
import { Block as F } from "baseui/block";
import { isFiletypeAccepted as l } from "../utils/files/file.utils.js";
const v = ({
  dataTestId: r = "file-picker__upload-action",
  onSelect: f,
  accept: e = void 0,
  selectionType: s = "file",
  multiple: c = !1,
  disabled: d = !1,
  children: p
}) => {
  const o = j(), u = s === "folder" ? { directory: "true", webkitdirectory: "true" } : {};
  function a(m) {
    const t = Array.from(m.target.files), h = e ? t.filter((i) => l(i, e)) : t, k = e ? t.filter((i) => !l(i, e)) : [];
    f(h, k);
  }
  return /* @__PURE__ */ y(g, { children: [
    /* @__PURE__ */ n(
      "input",
      {
        hidden: !0,
        "data-testid": `${r}--input`,
        onChange: a,
        type: "file",
        ref: o,
        multiple: c,
        accept: e ? e.join(", ") : void 0,
        disabled: d,
        placeholder: "file-input-label",
        ...u
      }
    ),
    /* @__PURE__ */ n(
      F,
      {
        "data-testid": `${r}--button-container`,
        onClick: () => o.current.click(),
        children: p
      }
    )
  ] });
};
export {
  v as UploadAction
};
//# sourceMappingURL=upload-action.js.map
