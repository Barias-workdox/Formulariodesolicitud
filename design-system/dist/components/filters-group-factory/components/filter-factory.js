import { createElement as i } from "react";
import { ContentTypes as o } from "../filter-group-factory.constants.js";
import { FilterFactoryDatepickerType as c } from "./filter-factory-datepicker-type.js";
import { FilterFactoryListType as n } from "./filter-factory-list-type.js";
import { FilterFactoryStringType as y } from "./filter-factory-string-type.js";
const f = (t) => {
  const { id: r, content: e } = t;
  switch (e.type) {
    case o.List:
      return /* @__PURE__ */ i(
        n,
        {
          ...t,
          key: r,
          content: e
        }
      );
    case o.String:
      return /* @__PURE__ */ i(
        y,
        {
          ...t,
          key: r,
          content: e
        }
      );
    case o.Datepicker:
      return /* @__PURE__ */ i(
        c,
        {
          ...t,
          key: r,
          content: e
        }
      );
  }
};
export {
  f as FilterFactory
};
//# sourceMappingURL=filter-factory.js.map
