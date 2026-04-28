import { jsx as r, jsxs as n } from "react/jsx-runtime";
import { Modal as c } from "baseui/modal";
import { FullScreenLayout as p, FullScreenBody as f } from "../../../layouts/full-screen-layout/full-screen-layout.js";
import { useCss as u } from "../../../utils/hooks/use-css.js";
import { getModalOverrides as g } from "./brain-viewer-modal.overrides.js";
import { BrainViewerModalHeader as h } from "./components/brain-viewer-modal-header/brain-viewer-modal-header.js";
const F = ({
  "data-testid": a,
  title: d,
  isOpen: i,
  children: t,
  clipboardItem: s,
  copyButtonTexts: l = {},
  zIndex: e,
  onClose: o
}) => {
  const { theme: m } = u();
  return /* @__PURE__ */ r(
    c,
    {
      autoFocus: !1,
      isOpen: i,
      onClose: o,
      size: "full",
      overrides: g({ zIndex: e }),
      children: /* @__PURE__ */ n(p, { children: [
        /* @__PURE__ */ r(
          h,
          {
            onClose: o,
            title: d,
            "data-testid": `${a}__modal-header`,
            clipboardItem: s,
            copyButtonTexts: l,
            zIndex: e
          }
        ),
        /* @__PURE__ */ r(
          f,
          {
            $backgroundColor: "bgBase",
            $padding: m.spacing.spacingMd,
            $style: {
              overflow: "hidden"
            },
            children: t
          }
        )
      ] })
    }
  );
};
export {
  F as BrainViewerModal
};
//# sourceMappingURL=brain-viewer-modal.js.map
