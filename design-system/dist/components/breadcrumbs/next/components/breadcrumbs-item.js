import { jsx as m } from "react/jsx-runtime";
import { Text as o } from "../../../text/text.js";
import { useCss as p } from "../../../utils/hooks/use-css.js";
const d = ({
  dataTestId: e,
  children: a,
  isLast: r = !1,
  isFirst: i = !1,
  onClick: t,
  ...n
}) => {
  const { theme: s } = p();
  return /* @__PURE__ */ m(
    o,
    {
      "data-testid": e,
      variant: "bodySmall",
      height: "24px",
      margin: 0,
      onClick: t,
      $style: {
        cursor: t ? "pointer" : "default",
        display: "flex",
        alignItems: "center"
      },
      ...i ? {} : { paddingLeft: s.spacing.spacing2xs },
      ...r ? { fontWeight: "500" } : { marginRight: s.spacing.spacing2xs },
      ...n,
      children: a
    }
  );
};
export {
  d as BreadcrumbsItem
};
//# sourceMappingURL=breadcrumbs-item.js.map
