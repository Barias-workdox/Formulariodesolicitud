import { jsx as l } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { INNER_HTML_EMPTY_VALUE as g } from "../../message-box.constants.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as M } from "../../../utils/i18n/utils.js";
import { checkNotEmptyValue as T } from "../../../../utils/check-not-empty-value.util.js";
import { noop as e } from "../../../../utils/noop.js";
import { getOverride as b, getOverrideProps as y } from "../../../../utils/overrides.utils.js";
import { StyledMessageBoxTextarea as u } from "./styled-components/styled-message-box-textarea.js";
const v = x(
  function({
    "data-testid": i,
    placeholder: a,
    disabled: r,
    overrides: m,
    value: t,
    onKeyDown: s = e,
    onPaste: p = e,
    onInput: n = e
  }, d) {
    const { t: f } = M(), { EditableDiv: o } = m || {}, E = b(o) || u, c = !T(t) || t === "" || t === g;
    return /* @__PURE__ */ l(
      E,
      {
        $disabled: r,
        $isEmpty: c,
        contentEditable: !r,
        "data-testid": i,
        placeholder: a ?? f("general.writeMessage"),
        ref: d,
        suppressContentEditableWarning: !0,
        onInput: n,
        onKeyDown: s,
        onPaste: p,
        ...y(o)
      }
    );
  }
);
v.displayName = "MessageBoxTextarea";
export {
  v as MessageBoxTextarea
};
//# sourceMappingURL=message-box-textarea.js.map
