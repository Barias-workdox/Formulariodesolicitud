import { jsx as r, jsxs as p } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { Step as y } from "baseui/progress-steps";
import { Text as o } from "../../../text/text.js";
import { mergeOverridesDeep as S } from "../../../utils/baseui/helpers.js";
import { useCss as g } from "../../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as h } from "../../../utils/hooks/use-date-util-with-locale.js";
import { DSTrans as x } from "../../../utils/i18n/translation-component.js";
import { getOverrides as b } from "./activity-item.overrides.js";
import { styles as s } from "./activity-item.styles.js";
const U = ({
  "data-testid": e = "activity-item",
  type: t,
  description: m,
  createdAt: l,
  children: a,
  overrides: { Icon: i } = {},
  ...n
}) => {
  const { activityContentStyles: d } = g(s), { formatDateAsText: c } = h(), u = f(() => {
    const v = b({ dataTestId: e, type: t });
    return S(v, { Icon: i });
  }, [i, e, t]);
  return /* @__PURE__ */ r(
    y,
    {
      ...n,
      isActive: !0,
      title: /* @__PURE__ */ r(
        o,
        {
          variant: "bodySmall",
          margin: 0,
          color: "neutralSubdued",
          $style: s.textStyles(),
          children: /* @__PURE__ */ r(x, { values: { ignoreErrors: !0 }, children: m })
        }
      ),
      overrides: u,
      children: /* @__PURE__ */ p("div", { className: d, children: [
        a,
        /* @__PURE__ */ r(
          o,
          {
            variant: "bodySmall",
            margin: 0,
            color: "neutralSubdued",
            children: c(l, !0)
          }
        )
      ] })
    }
  );
};
export {
  U as ActivityItem
};
//# sourceMappingURL=activity-item.js.map
