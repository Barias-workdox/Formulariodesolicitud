import { jsx as a } from "react/jsx-runtime";
import { useState as y, useMemo as p, useCallback as B, useEffect as x } from "react";
import { Bold as w } from "@tiptap/extension-bold";
import { CharacterCount as A } from "@tiptap/extension-character-count";
import { Document as K } from "@tiptap/extension-document";
import { HardBreak as R } from "@tiptap/extension-hard-break";
import { History as j } from "@tiptap/extension-history";
import { Italic as W } from "@tiptap/extension-italic";
import { Paragraph as X } from "@tiptap/extension-paragraph";
import { Placeholder as $ } from "@tiptap/extension-placeholder";
import { Text as q } from "@tiptap/extension-text";
import { Underline as z } from "@tiptap/extension-underline";
import { useEditor as G, useEditorState as J, EditorContext as Q, EditorContent as Y } from "@tiptap/react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as Z } from "../../../utils/i18n/utils.js";
import { useCss as S } from "../../../utils/hooks/use-css.js";
import { noop as P } from "../../../../utils/noop.js";
import { MessageBoxContext as tt } from "../contexts/message-box.context.js";
import { MessageBoxRichTextOptions as T, DEFAULT_RICH_TEXT_OPTIONS as et } from "../message-box.constants.js";
import { styles as ot } from "../message-box.styles.js";
const rt = {
  [T.Bold]: w,
  [T.Italic]: W,
  [T.Underline]: z
}, st = ({
  editor: l,
  disabled: u
}) => {
  const { editorContentStyles: i } = S(ot, { $disabled: u });
  return /* @__PURE__ */ a(
    Y,
    {
      "data-testid": "message-box-editor-content",
      editor: l,
      className: i
    }
  );
}, Ot = ({
  ariaLabel: l,
  autofocus: u,
  canSendWithEnter: i = !0,
  children: v,
  disabled: r = !1,
  isReadOnly: I = !1,
  maxLength: b,
  placeholder: F = "",
  richTextEnabled: D = !1,
  richTextOptions: O = et,
  defaultValue: c,
  onChange: V = P,
  onSubmit: f = P
}) => {
  const [H, M] = y(!1), [E, _] = y(!1), { t: k } = Z(), n = !r && !I, t = G({
    onFocus: () => M(!0),
    editable: n,
    autofocus: u,
    editorProps: {
      attributes: {
        "aria-label": l ?? k("messageBox.ariaLabels.input"),
        role: "textbox"
      },
      handleKeyDown: (o, s) => {
        if (s.key === "Enter") {
          if (s.shiftKey)
            return !1;
          if (!i)
            return !0;
          const m = t == null ? void 0 : t.getText().trim(), d = t == null ? void 0 : t.getHTML().trim();
          return r || m === "" || (s.preventDefault(), f({
            textValue: m,
            HTMLValue: d
          }), t == null || t.commands.clearContent()), !0;
        }
        return !1;
      }
    },
    extensions: [
      K,
      X.configure({
        HTMLAttributes: {
          style: "margin: 0;"
        }
      }),
      q,
      R,
      j,
      $.configure({
        placeholder: ({ editor: o }) => o != null && o.isEmpty ? F : "",
        showOnlyWhenEditable: !1
      }),
      A.configure({ limit: b }),
      ...D ? O.map((o) => rt[o]) : []
    ]
  }), e = J({
    editor: t,
    selector: ({ editor: o }) => {
      if (!o) return null;
      const s = o.getText(), m = o.getHTML();
      return {
        textValue: s,
        HTMLValue: m,
        isEmpty: s === ""
      };
    }
  }), { isEmpty: C = !0 } = e || {}, g = p(
    () => /* @__PURE__ */ a(
      st,
      {
        editor: t,
        disabled: r
      }
    ),
    [t, r]
  ), L = B(
    (o) => {
      M(o), o && (t == null || t.chain().focus().run());
    },
    [t]
  ), h = B(() => {
    f({
      textValue: (e == null ? void 0 : e.textValue) ?? "",
      HTMLValue: (e == null ? void 0 : e.HTMLValue) ?? ""
    }), t == null || t.commands.clearContent();
  }, [f, e == null ? void 0 : e.textValue, e == null ? void 0 : e.HTMLValue, t == null ? void 0 : t.commands]), N = p(
    () => ({
      disabled: r,
      editorContentNode: g,
      isEmpty: C,
      isFocused: H,
      isHovered: E,
      setIsFocused: L,
      setIsHovered: _,
      handleSubmit: h,
      textValue: e == null ? void 0 : e.textValue,
      HTMLValue: e == null ? void 0 : e.HTMLValue
    }),
    [
      r,
      g,
      C,
      H,
      E,
      L,
      h,
      e
    ]
  ), U = p(() => ({ editor: t }), [t]);
  return x(() => {
    e && V({
      textValue: e.textValue,
      HTMLValue: e.HTMLValue
    });
  }, [e, V]), x(() => {
    c && t && t.commands.setContent(c);
  }, [c, t]), x(() => {
    n && (t == null || t.setEditable(n));
  }, [n, t]), /* @__PURE__ */ a(Q.Provider, { value: U, children: /* @__PURE__ */ a(tt.Provider, { value: N, children: v }) });
};
export {
  Ot as MessageBoxProvider
};
//# sourceMappingURL=message-box.provider.js.map
