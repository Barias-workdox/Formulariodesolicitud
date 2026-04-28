import { jsx as r } from "react/jsx-runtime";
import { forwardRef as a } from "react";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { ReactComponent as d } from "../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { styles as c, StyledButton as f } from "./webdox-ai-button.styles.js";
const p = a(
  function({ "data-testid": t, isLoading: o = !1, hasError: n, onClick: e = () => {
  } }, s) {
    const { iconStyles: i } = m(c, { $isLoading: o });
    return /* @__PURE__ */ r(
      f,
      {
        "data-testid": t,
        ref: s,
        type: "button",
        $isLoading: o,
        $hasError: n,
        onClick: e,
        children: /* @__PURE__ */ r(
          d,
          {
            "data-testid": `${t}--brain-icon`,
            className: i
          }
        )
      }
    );
  }
);
p.displayName = "WebdoxAIButton";
export {
  p as WebdoxAIButton
};
//# sourceMappingURL=webdox-ai-button.js.map
