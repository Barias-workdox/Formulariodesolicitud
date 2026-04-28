import { jsx as o } from "react/jsx-runtime";
import { CheckboxControl as e } from "../checkbox/checkbox-control.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "react-hook-form";
import { ColorPickerControl as n } from "../color-picker/color-picker-control.js";
import { CountryControl as i } from "../country/country-control.js";
import { DatePickerControl as m } from "../datepicker/datepicker-control.js";
import { FileUploaderControl as c } from "../file-uploader/file-uploader-control.js";
import { InputControl as a } from "../input/input-control.js";
import { NicInputControl as l } from "../nic-input/nic-input-control.js";
import { PhoneControl as u } from "../phone/phone-control.js";
import { RadioGroupControl as C } from "../radio-group/radio-group-control.js";
import { SelectControl as f } from "../select/select-control.js";
import { SelectWithPaginationControl as h } from "../select-with-pagination/select-with-pagination-control.js";
import { SwitchControl as s } from "../switch/switch-control.js";
import { TextareaControl as k } from "../textarea-control/textarea-control.js";
const T = ({
  controlKind: t,
  ...r
}) => {
  switch (t) {
    case "input":
      return /* @__PURE__ */ o(a, { ...r });
    case "datepicker":
      return /* @__PURE__ */ o(m, { ...r });
    case "colorPicker":
      return /* @__PURE__ */ o(n, { ...r });
    case "country":
      return /* @__PURE__ */ o(i, { ...r });
    case "nicInput":
      return /* @__PURE__ */ o(l, { ...r });
    case "radioGroup":
      return /* @__PURE__ */ o(C, { ...r });
    case "select":
      return /* @__PURE__ */ o(f, { ...r });
    case "selectWithPagination":
      return /* @__PURE__ */ o(h, { ...r });
    case "switch":
      return /* @__PURE__ */ o(s, { ...r });
    case "textareaControl":
      return /* @__PURE__ */ o(k, { ...r });
    case "phone":
      return /* @__PURE__ */ o(u, { ...r });
    case "checkbox":
      return /* @__PURE__ */ o(e, { ...r });
    case "fileUploader":
      return /* @__PURE__ */ o(c, { ...r });
  }
};
export {
  T as DynamicFormControl
};
//# sourceMappingURL=dynamic-form-control.js.map
