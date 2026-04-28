import { jsx as v } from "react/jsx-runtime";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../../utils/i18n/utils.js";
import { getOverride as g, getOverrideProps as b } from "../../../../../utils/overrides.utils.js";
import { StyledDiv as f } from "./composer-textarea.styles.js";
const I = ({
  "data-testid": r,
  messageRef: o,
  placeholder: i,
  isDisabled: t,
  $padding: a = void 0,
  overrides: p,
  evaluateMention: m,
  onKeyDown: s,
  onPaste: d
}) => {
  const { t: n } = c(), { EditableDiv: e } = p || {}, l = g(e) || f;
  return /* @__PURE__ */ v(
    l,
    {
      "data-testid": `${r}-message-textarea`,
      $disabled: t,
      $padding: a,
      ref: o,
      suppressContentEditableWarning: !0,
      contentEditable: !t,
      placeholder: i ?? n("general.writeMessage"),
      onKeyDown: s,
      onInput: m,
      onPaste: d,
      ...b(e)
    }
  );
};
export {
  I as ComposerTextarea
};
//# sourceMappingURL=composer-textarea.js.map
