import { jsx as p } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as m } from "../../../utils/i18n/utils.js";
import { InputControl as a } from "../input/input-control.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "react-hook-form";
const n = {
  BRA: {
    label: "forms.BRA.phone.label",
    placeholder: "forms.BRA.phone.placeholder"
  },
  ECU: {
    label: "forms.ECU.phone.label",
    placeholder: "forms.ECU.phone.placeholder"
  }
}, h = {
  label: "forms.default.phone.label",
  placeholder: "forms.default.phone.placeholder"
}, U = ({ countryCode: o, ...l }) => {
  const { t: e } = m(), { label: r, placeholder: t } = (o && n[o]) ?? h;
  return /* @__PURE__ */ p(
    a,
    {
      label: e(r),
      placeholder: e(t),
      ...l
    }
  );
};
export {
  U as PhoneControl
};
//# sourceMappingURL=phone-control.js.map
