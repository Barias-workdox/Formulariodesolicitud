import { jsx as n } from "react/jsx-runtime";
import { PageHeaderBackgroundIcon as p } from "./components/page-header-background-icon/page-header-background-icon.js";
import { PageHeaderEndEnhancerWrapper as d } from "./components/page-header-end-enhancer-wrapper/page-header-end-enhancer-wrapper.js";
import { PageHeaderLayout as c } from "./components/page-header-layout/page-header-layout.js";
import { PageHeaderPrimaryButton as g } from "./components/page-header-primary-button/page-header-primary-button.js";
import { PageHeaderSearch as i } from "./components/page-header-search/page-header-search.js";
import { PageHeaderToolbar as P } from "./components/page-header-toolbar/page-header-toolbar.js";
const r = ({
  startEnhancer: e,
  endEnhancer: a,
  toolbar: o,
  title: m,
  showBorder: t
}) => /* @__PURE__ */ n(
  c,
  {
    title: m,
    endEnhancer: a,
    startEnhancer: e,
    toolbar: o,
    showBorder: t
  }
);
r.BackgroundIcon = p;
r.PrimaryButton = g;
r.EndEnhancerWrapper = d;
r.Search = i;
r.Toolbar = P;
export {
  r as PageHeader
};
//# sourceMappingURL=page-header.js.map
