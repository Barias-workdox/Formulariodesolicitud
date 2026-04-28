import { jsx as o } from "react/jsx-runtime";
import { Controller as u } from "react-hook-form";
import { FormControl as F } from "../../../form-control/form-control.js";
import { SelectWithPagination as P } from "../../../select-with-pagination/next/select-with-pagination.js";
const R = ({
  name: i,
  label: r,
  disabled: l,
  multi: m = !1,
  options: n,
  searchable: f = !0,
  caption: a,
  control: p,
  formControlOverrides: s,
  noExternalMargins: c,
  infoTooltip: d,
  zIndex: e,
  required: h,
  ...g
}) => /* @__PURE__ */ o(
  u,
  {
    name: i,
    control: p,
    render: ({ field: { ref: C, ...S }, fieldState: { error: t } }) => /* @__PURE__ */ o(
      F,
      {
        label: r,
        disabled: l,
        caption: a,
        error: t == null ? void 0 : t.message,
        htmlFor: i,
        overrides: s,
        noExternalMargins: c,
        infoTooltip: d,
        zIndex: e,
        required: h,
        children: /* @__PURE__ */ o(
          P,
          {
            ...S,
            inputRef: C,
            options: n,
            multi: m,
            searchable: f,
            zIndex: e,
            ...g
          }
        )
      }
    )
  }
);
export {
  R as SelectWithPaginationControl
};
//# sourceMappingURL=select-with-pagination-control.js.map
