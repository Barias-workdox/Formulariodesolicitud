import { jsxs as f, Fragment as v, jsx as o } from "react/jsx-runtime";
import { Text as C } from "../../../text/text.js";
import { useCss as u } from "../../../utils/hooks/use-css.js";
import { getOverride as t, getOverrideProps as n } from "../../../../utils/overrides.utils.js";
import { InformationPopoverHeader as g } from "../information-popover-header/information-popover-header.js";
const b = ({
  "data-testid": a,
  content: d,
  title: s,
  overrides: i,
  close: m
}) => {
  const { theme: p } = u(), { Header: e, Content: r } = i || {}, c = t(e) || g, l = t(r) || C;
  return /* @__PURE__ */ f(v, { children: [
    /* @__PURE__ */ o(
      c,
      {
        "data-testid": `${a}__header`,
        title: s,
        onClose: m,
        ...n(e)
      }
    ),
    /* @__PURE__ */ o(
      l,
      {
        variant: "bodySmall",
        margin: 0,
        color: p.colors.neutralSubdued,
        as: "span",
        ...n(r),
        children: d
      }
    )
  ] });
};
export {
  b as InformationPopoverContent
};
//# sourceMappingURL=information-popover-content.js.map
