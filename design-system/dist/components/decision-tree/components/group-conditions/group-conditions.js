import { jsxs as l, jsx as e, Fragment as B } from "react/jsx-runtime";
import { useCallback as f } from "react";
import { ArrowRight as L, TrashCan as V } from "@carbon/icons-react";
import "../../../button/button.js";
import { IconButton as w } from "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as M } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Select as u } from "../../../select/select.js";
import { SelectWithPagination as P } from "../../../select-with-pagination/select-with-pagination.js";
import { Text as y } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as R } from "../../../utils/i18n/utils.js";
import { GroupConditionFieldLabel as W } from "../group-condition-field-label/group-condition-field-label.js";
import { GroupConditionValue as q } from "../group-condition-value/group-condition-value.js";
import { styles as D, selectOverrides as a } from "./group-conditions.styles.js";
const n = {
  field: void 0,
  operator: void 0,
  value: void 0,
  dataType: void 0
}, be = ({
  dataTestId: o,
  condition: c,
  isDeleteDisabled: b,
  isValueFieldEnabled: g,
  areValueFieldsEnabled: C,
  isObjectToEvalSelected: N,
  objectToEvalOptions: T,
  fieldOptions: S,
  operatorOptions: _,
  valueOptions: x,
  isLoadingData: d,
  onDeleteCondition: $,
  onUpdateCondition: r,
  onLoadMore: m
}) => {
  const { t: s } = R(), { containerStyles: j, conditionsContainerStyles: z, conditionContainerStyles: t } = M(D), { objectToEval: p, field: h, operator: v } = c, O = f(
    ([i]) => r({
      ...n,
      objectToEval: i == null ? void 0 : i.id
    }),
    [r]
  ), k = f(
    ([i]) => {
      if (i && typeof i == "object" && "dataType" in i) {
        const { id: A, dataType: G } = i;
        r({
          ...n,
          field: A,
          dataType: G
        });
      } else
        r(n);
    },
    [r]
  );
  return /* @__PURE__ */ l("div", { className: j, children: [
    /* @__PURE__ */ l("div", { className: z, children: [
      /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
        y,
        {
          variant: "bodySmall",
          margin: 0,
          children: s("decisionTree.if")
        }
      ) }),
      /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
        u,
        {
          size: "compact",
          "data-testid": `${o}__objectToEval--select`,
          overrides: a,
          placeholder: s("decisionTree.selectObject"),
          options: T,
          value: p ? [{ id: p }] : [],
          onChange: O
        }
      ) }),
      /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(L, {}) }),
      /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
        P,
        {
          size: "compact",
          "data-testid": `${o}__field--select`,
          overrides: a,
          disabled: !N,
          placeholder: s("decisionTree.selectType"),
          value: h ? [{ id: h }] : [],
          options: S,
          getOptionLabel: ({ option: i }) => /* @__PURE__ */ e(
            W,
            {
              "data-testid": o,
              option: i
            }
          ),
          onChange: k,
          onLoadMore: () => m("dynamicAttributes"),
          isLoadingMore: d("dynamicAttributes")
        }
      ) }),
      C && /* @__PURE__ */ l(B, { children: [
        /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
          y,
          {
            variant: "bodySmall",
            margin: 0,
            children: s("decisionTree.is")
          }
        ) }),
        /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
          u,
          {
            size: "compact",
            "data-testid": `${o}__operator--select`,
            overrides: a,
            placeholder: s("decisionTree.selectType"),
            options: _,
            value: v ? [{ id: v }] : [],
            onChange: ([i]) => r({ operator: i == null ? void 0 : i.id })
          }
        ) }),
        /* @__PURE__ */ e("div", { className: t, children: /* @__PURE__ */ e(
          q,
          {
            dataTestId: `${o}__value`,
            disabled: g,
            condition: c,
            valueOptions: x,
            isLoadingData: d,
            onUpdateCondition: r,
            onLoadMore: m
          }
        ) })
      ] })
    ] }),
    !b && /* @__PURE__ */ e(
      w,
      {
        "data-testid": `${o}--delete-condition-btn`,
        size: "32px",
        kind: "tertiary",
        onClick: $,
        "aria-label": "DeleteConditionButton",
        children: /* @__PURE__ */ e(V, {})
      }
    )
  ] });
};
export {
  be as GroupConditions
};
//# sourceMappingURL=group-conditions.js.map
