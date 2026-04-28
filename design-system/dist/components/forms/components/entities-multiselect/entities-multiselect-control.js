import { jsx as i } from "react/jsx-runtime";
import { Controller as w } from "react-hook-form";
import { EntitiesMultiSelect as y } from "../../../entities-multiselect/entities-multiselect.js";
import { FormControl as z } from "../../../form-control/form-control.js";
const H = ({
  name: l,
  label: f,
  disabled: e,
  options: r,
  values: s,
  infoTooltip: c,
  placeholder: d,
  leading: u,
  isLoading: S,
  searchPlaceholder: x,
  peopleTotalElements: E,
  companyTotalElements: F,
  onChange: o,
  onSearch: M,
  onLoadMore: j,
  noExternalMargins: n,
  caption: p,
  control: v,
  formControlOverrides: C,
  ...R
}) => /* @__PURE__ */ i(
  w,
  {
    name: l,
    control: v,
    defaultValue: s,
    render: ({
      field: { value: V, onChange: h, ref: k, ...q },
      fieldState: { error: t }
    }) => /* @__PURE__ */ i(
      z,
      {
        label: f,
        disabled: e,
        caption: p,
        error: t == null ? void 0 : t.message,
        htmlFor: l,
        overrides: C,
        noExternalMargins: n,
        infoTooltip: c,
        children: /* @__PURE__ */ i(
          y,
          {
            ...q,
            options: r,
            values: V ?? [],
            placeholder: d,
            searchPlaceholder: x,
            isLoading: S,
            disabled: e,
            peopleTotalElements: E,
            companyTotalElements: F,
            onChange: (m) => {
              h(m), o == null || o(m);
            },
            onSearch: M,
            onLoadMore: j,
            leading: u,
            containerRef: k,
            ...R
          }
        )
      }
    )
  }
);
export {
  H as EntitiesMultiSelectControl
};
//# sourceMappingURL=entities-multiselect-control.js.map
