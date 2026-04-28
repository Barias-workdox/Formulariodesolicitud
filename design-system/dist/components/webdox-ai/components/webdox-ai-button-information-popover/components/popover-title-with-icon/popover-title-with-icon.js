import { jsxs as p, jsx as r } from "react/jsx-runtime";
import { ReactComponent as l } from "../../../../../../assets/icons/webdox-ai/brain-companion-icon.svg.js";
import { ReactComponent as d } from "../../../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { ReactComponent as u } from "../../../../../../assets/icons/webdox-ai/legal-whisper-icon.svg.js";
import { BackgroundIcon as g } from "../../../../../background-icon/background-icon.js";
import { useCss as I } from "../../../../../utils/hooks/use-css.js";
import { getSuiteAIBackgroundGradient as f } from "../../../../webdox-ai.styles.js";
import { styles as e } from "./popover-title-with-icon.styles.js";
import { StyledTitle as C } from "./styled-components/styled-title.js";
const S = {
  legalWhisper: {
    backgroundColor: "sweetSubtle",
    Icon: u
  },
  brainCompanion: {
    backgroundColor: "natureSubtle",
    Icon: l
  },
  suiteAI: {
    Icon: d,
    overrides: {
      Root: {
        style: f({ shape: "square" })
      }
    }
  }
}, W = ({
  "data-testid": o,
  children: t,
  showIcon: n,
  iconType: s = "suiteAI"
}) => {
  const { css: i } = I(e), { Icon: a, backgroundColor: c, overrides: m } = S[s];
  return /* @__PURE__ */ p(C, { children: [
    n && /* @__PURE__ */ r(
      g,
      {
        "data-testid": o,
        size: "32px",
        shape: "square",
        backgroundColor: c,
        overrides: m,
        children: /* @__PURE__ */ r(
          a,
          {
            className: i(e.iconStyles()),
            "data-testid": `${o}--icon`
          }
        )
      }
    ),
    t
  ] });
};
export {
  W as PopoverTitleWithIcon
};
//# sourceMappingURL=popover-title-with-icon.js.map
