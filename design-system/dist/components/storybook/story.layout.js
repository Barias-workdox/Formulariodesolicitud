import { jsx as e } from "react/jsx-runtime";
import { useCss as c } from "../utils/hooks/use-css.js";
const n = ({ children: s }) => {
  const { css: o, theme: t } = c();
  return /* @__PURE__ */ e(
    "section",
    {
      className: o({
        display: "flex",
        flexDirection: "column",
        gap: t.spacing.spacingMd
      }),
      children: s
    }
  );
};
export {
  n as StoryLayout
};
//# sourceMappingURL=story.layout.js.map
