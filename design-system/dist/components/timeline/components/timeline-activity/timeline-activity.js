import { jsx as r, jsxs as c, Fragment as p } from "react/jsx-runtime";
import { useMemo as f } from "react";
import { Text as o } from "../../../text/text.js";
import { mergeOverridesDeep as y } from "../../../utils/baseui/helpers.js";
import { useCss as g } from "../../../utils/hooks/use-css.js";
import { DSTrans as i } from "../../../utils/i18n/translation-component.js";
import { TimelineStep as S } from "../timeline-step/timeline-step.js";
import { getOverrides as b } from "./timeline-activity.overrides.js";
import { styles as s } from "./timeline-activity.styles.js";
const F = ({
  title: m,
  subtitle: l,
  indicator: e,
  children: n = /* @__PURE__ */ r(p, {}),
  isLast: d,
  overrides: { IconContainer: t } = {}
}) => {
  const { contentStyles: u } = g(s), a = f(() => {
    const v = b({ indicator: e });
    return y(v, { Icon: e, IconContainer: t });
  }, [e, t]);
  return /* @__PURE__ */ r(
    S,
    {
      isActive: !0,
      isLast: d,
      overrides: a,
      title: /* @__PURE__ */ r(
        o,
        {
          variant: "bodySmall",
          margin: 0,
          color: "neutralSubdued",
          $style: s.textStyles(),
          children: /* @__PURE__ */ r(
            i,
            {
              i18nKey: m,
              values: { ignoreErrors: !0 }
            }
          )
        }
      ),
      children: /* @__PURE__ */ c("div", { className: u, children: [
        n,
        /* @__PURE__ */ r(
          o,
          {
            variant: "bodySmall",
            margin: 0,
            color: "neutralSubdued",
            children: /* @__PURE__ */ r(
              i,
              {
                i18nKey: l,
                values: { ignoreErrors: !0 }
              }
            )
          }
        )
      ] })
    }
  );
};
export {
  F as TimelineActivity
};
//# sourceMappingURL=timeline-activity.js.map
