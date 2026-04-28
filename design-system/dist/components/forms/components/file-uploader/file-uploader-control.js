import { jsx as o } from "react/jsx-runtime";
import { Controller as g } from "react-hook-form";
import { FileUploader as u } from "../../../file-uploader/file-uploader.js";
import { FormControl as x } from "../../../form-control/form-control.js";
const D = ({
  "data-testid": i,
  name: e,
  label: l,
  disabled: d,
  caption: m,
  defaultValue: n = [],
  control: a,
  formControlOverrides: p,
  noExternalMargins: s,
  infoTooltip: f,
  ...F
}) => /* @__PURE__ */ o(
  g,
  {
    name: e,
    control: a,
    defaultValue: n,
    render: ({
      field: { onChange: c, ref: h, value: r, ...C },
      fieldState: { error: t }
    }) => /* @__PURE__ */ o(
      x,
      {
        label: l,
        disabled: d,
        caption: m,
        error: t == null ? void 0 : t.message,
        htmlFor: e,
        labelWithHorizontalPadding: !0,
        overrides: p,
        noExternalMargins: s,
        infoTooltip: f,
        children: /* @__PURE__ */ o(
          u,
          {
            "data-testid": i,
            inputRef: h,
            onDrop: c,
            selectedFiles: r,
            value: r,
            ...C,
            ...F
          }
        )
      }
    )
  }
);
export {
  D as FileUploaderControl
};
//# sourceMappingURL=file-uploader-control.js.map
