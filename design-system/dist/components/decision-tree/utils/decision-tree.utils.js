import { CharacterLowerCase as o, List as n, Boolean as u, CalendarHeatMap as a, CharacterWholeNumber as s } from "@carbon/icons-react";
import * as e from "yup";
import { noop as c } from "../../../utils/noop.js";
const d = e.object({
  treeRules: e.array().of(
    e.object({
      conditions: e.array().of(
        e.object({
          objectToEval: e.string().required(),
          field: e.string().required(),
          operator: e.string().required(),
          value: e.mixed().test("is-valid-type", "Value must be an object, string, or number", (r) => typeof r == "string" && r.trim() !== "" || typeof r == "number").required()
        })
      )
    })
  ),
  actions: e.array().of(
    e.object({
      actionType: e.string().required(),
      targetId: e.string().required()
    })
  )
}), g = (r) => {
  switch (r) {
    case "string":
      return o;
    case "numeric":
      return s;
    case "date":
      return a;
    case "boolean":
      return u;
    case "list":
      return n;
    default:
      return o;
  }
}, l = (r) => typeof r == "object" && !Array.isArray(r) ? r : {
  options: r,
  isLoadingMore: !1,
  onLoadMore: c
}, m = ({
  objectToEval: r,
  field: t,
  dataType: i
}) => {
  if (r === "User") {
    if (t === "group_ids") return "profiles";
    if (t === "job_ids") return "groups";
  }
  if (r === "WorkflowRequest") {
    if (i === "boolean") return "booleanAttributes";
    if (i === "list") return "dynamicAttributes";
  }
}, p = (r, t) => t === "assign_taker" && r === "job";
export {
  p as getDistributionModeVisibility,
  g as getDynamicAttributeIcon,
  m as getGroupConditionDataType,
  l as getOptionsConfig,
  d as groupRuleObjectSchema
};
//# sourceMappingURL=decision-tree.utils.js.map
