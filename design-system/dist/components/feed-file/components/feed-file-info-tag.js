import { jsx as o } from "react/jsx-runtime";
import { InformationFilled as d } from "@carbon/icons-react";
import { Tag as l } from "../../tag/tag.js";
import { StatefulTooltipNext as m } from "../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { feedFileTooltipOverrides as f } from "../feed-file.styles.js";
const h = ({
  "data-testid": r,
  title: e,
  kind: t = "negative",
  variant: i = "overlay",
  content: n,
  icon: a = d
}) => /* @__PURE__ */ o(
  m,
  {
    content: n,
    showArrow: !0,
    overrides: f(),
    ignoreBoundary: !0,
    children: /* @__PURE__ */ o("span", { children: /* @__PURE__ */ o(
      l,
      {
        "data-testid": `${r}__info-tag`,
        kind: t,
        variant: i,
        icon: /* @__PURE__ */ o(a, {}),
        children: e
      }
    ) })
  }
);
export {
  h as FeedFileInfoTag
};
//# sourceMappingURL=feed-file-info-tag.js.map
