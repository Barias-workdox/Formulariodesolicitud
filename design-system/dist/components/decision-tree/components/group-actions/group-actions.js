import { jsxs as x, jsx as e } from "react/jsx-runtime";
import { useCallback as n } from "react";
import { ArrowRight as z } from "@carbon/icons-react";
import { Select as h } from "../../../select/select.js";
import { SelectWithPagination as M } from "../../../select-with-pagination/select-with-pagination.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as $ } from "../../../utils/i18n/utils.js";
import { useCss as k } from "../../../utils/hooks/use-css.js";
import { selectOverrides as d } from "../group-conditions/group-conditions.styles.js";
import { styles as O } from "./group-actions.styles.js";
const Z = ({
  dataTestId: s,
  action: { actionType: l, targetId: r, targetObject: m, distributionMode: v },
  isActionValueDisabled: f,
  isLoadingMore: g,
  options: u,
  values: C,
  distributionsModeOptions: c,
  showDistributionMode: b = !1,
  onLoadMore: _,
  onUpdateAction: i
}) => {
  const { t: p } = $(), { containerStyles: j, conditionContainerStyles: a } = k(O), y = n(
    (t) => {
      var o;
      return i({
        actionType: (o = t[0]) == null ? void 0 : o.id,
        targetId: void 0,
        targetObject: void 0,
        distributionMode: void 0
      });
    },
    [i]
  ), N = n(
    ([t]) => {
      var o;
      if (t) {
        const { id: T, targetObject: w = "decision_workflow_template" } = t;
        i({
          targetId: T,
          targetObject: w,
          distributionMode: (o = c[0]) == null ? void 0 : o.id
        });
      }
    },
    [c, i]
  ), S = n(
    ([t]) => i({ targetId: r, targetObject: m, distributionMode: t.id }),
    [i, r, m]
  );
  return /* @__PURE__ */ x("div", { className: j, children: [
    /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e(
      h,
      {
        size: "compact",
        "data-testid": `${s}__actionType--select`,
        overrides: d,
        placeholder: p("decisionTree.selectAction"),
        options: u,
        value: l ? [{ id: l }] : [],
        onChange: y
      }
    ) }),
    /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e(z, {}) }),
    /* @__PURE__ */ e("div", { className: a, children: /* @__PURE__ */ e(
      M,
      {
        size: "compact",
        "data-testid": `${s}__targetId--select`,
        overrides: d,
        disabled: f,
        options: C,
        value: r ? [{ id: r }] : [],
        isLoadingMore: g,
        onLoadMore: _,
        onChange: N
      }
    ) }),
    b && /* @__PURE__ */ e(
      h,
      {
        size: "compact",
        "data-testid": `${s}__distributionMode--select`,
        overrides: d,
        placeholder: p("decisionTree.selectAction"),
        options: c,
        value: [{ id: v }],
        onChange: S
      }
    )
  ] });
};
export {
  Z as GroupActions
};
//# sourceMappingURL=group-actions.js.map
