import { jsx as i } from "react/jsx-runtime";
import { Button as m } from "../button/next/button.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../utils/i18n/utils.js";
import { themedStyled as s } from "../../themes/utilities.js";
const l = s("div", ({ $theme: t }) => ({
  display: "grid",
  gridAutoFlow: "column",
  gap: t.spacing.spacingXs
})), b = ({
  dataTestId: t = "weekday",
  value: p,
  updateNoLaboralDays: n
}) => {
  const { t: a } = d();
  return /* @__PURE__ */ i(l, { "data-testid": t, children: Array.from(Array(7).keys()).map((r, e) => {
    const o = p.includes(e);
    return /* @__PURE__ */ i(
      m,
      {
        dataTestId: `${t}__day-${r}`,
        type: "button",
        kind: o ? "brand" : "neutral",
        appearance: o ? "outlined" : "tonal",
        size: "44px",
        isSelected: o,
        onClick: () => n(e),
        children: a(`week_days.${r}`)
      },
      `day-${r}`
    );
  }) });
};
export {
  b as Weekday
};
//# sourceMappingURL=weekday.js.map
