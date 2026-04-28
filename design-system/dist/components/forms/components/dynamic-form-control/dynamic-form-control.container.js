import { jsx as o } from "react/jsx-runtime";
import "react-hook-form";
import "../../../checkbox/checkbox.js";
import "react";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import "../../../text/text.js";
import "baseui/tooltip";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/utilities.js";
import { CheckboxControlContainer as i } from "../checkbox/checkbox-control.container.js";
import "../../../color-picker/next/color-picker.js";
import { ColorPickerControlContainer as m } from "../color-picker/color-picker-control-container.js";
import "../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "baseui/input";
import "lodash";
import "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../input/next/input.overrides.js";
import "../../../select/next/styled-components/styled-icons-container.js";
import "../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../select/next/components/select-dropdown-container.js";
import "../../../select/next/components/select-optgroup-header.js";
import { SelectControlContainer as n } from "../select/select-control-container.js";
import { CountryControlContainer as e } from "../country/country-control-container.js";
import "../datepicker/datepicker-control.js";
import { DatePickerControlContainer as p } from "../datepicker/datepicker-control-container.js";
import "../../../file-uploader/file-uploader.js";
import { FileUploaderControlContainer as a } from "../file-uploader/file-uploader-control.container.js";
import { InputControlContainer as c } from "../input/input-control-container.js";
import "yup";
import { NicInputControlContainer as C } from "../nic-input/nic-input-control-container.js";
import { PhoneControlContainer as l } from "../phone/phone-control-container.js";
import "../../../radio/radio-group.js";
import "baseui/radio";
import { RadioGroupControlContainer as u } from "../radio-group/radio-group-control-container.js";
import "baseui/menu";
import "../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import { SelectWithPaginationControlContainer as f } from "../select-with-pagination/select-with-pagination-control-container.js";
import "baseui/checkbox";
import { SwitchControlContainer as h } from "../switch/switch-control-container.js";
import "baseui/textarea";
import { TextareaControlContainer as s } from "../textarea-control/textarea-control-container.js";
const Gr = ({
  controlKind: t,
  ...r
}) => {
  switch (t) {
    case "input":
      return /* @__PURE__ */ o(c, { ...r });
    case "datepicker":
      return /* @__PURE__ */ o(p, { ...r });
    case "colorPicker":
      return /* @__PURE__ */ o(m, { ...r });
    case "country":
      return /* @__PURE__ */ o(e, { ...r });
    case "nicInput":
      return /* @__PURE__ */ o(C, { ...r });
    case "radioGroup":
      return /* @__PURE__ */ o(u, { ...r });
    case "select":
      return /* @__PURE__ */ o(n, { ...r });
    case "selectWithPagination":
      return /* @__PURE__ */ o(
        f,
        {
          ...r
        }
      );
    case "switch":
      return /* @__PURE__ */ o(h, { ...r });
    case "textareaControl":
      return /* @__PURE__ */ o(s, { ...r });
    case "phone":
      return /* @__PURE__ */ o(l, { ...r });
    case "checkbox":
      return /* @__PURE__ */ o(i, { ...r });
    case "fileUploader":
      return /* @__PURE__ */ o(
        a,
        {
          ...r
        }
      );
  }
};
export {
  Gr as DynamicFormControlContainer
};
//# sourceMappingURL=dynamic-form-control.container.js.map
