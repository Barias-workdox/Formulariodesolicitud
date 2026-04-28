import { jsxs as n, jsx as o } from "react/jsx-runtime";
import { ReactComponent as s } from "../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { ReactComponent as i } from "../../../../assets/icons/webdox-ai/webdox-ai-spinner.svg.js";
import { useCss as m } from "../../../utils/hooks/use-css.js";
import { StyledContainer as a } from "./styled-components/styled-container.js";
import { styles as p } from "./webdox-ai-spinner.styles.js";
const y = ({ dataTestId: e = "webdox-ai-spinner" }) => {
  const { iconStyles: r, spinnerStyles: t } = m(p);
  return /* @__PURE__ */ n(a, { "data-testid": e, children: [
    /* @__PURE__ */ o(s, { className: r }),
    /* @__PURE__ */ o(i, { className: t })
  ] });
};
export {
  y as WebdoxAISpinner
};
//# sourceMappingURL=webdox-ai-spinner.js.map
