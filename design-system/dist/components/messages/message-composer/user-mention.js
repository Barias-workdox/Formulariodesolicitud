import { jsx as s, jsxs as a } from "react/jsx-runtime";
import r from "react-dom/server";
const t = "@", o = (n) => `(&nbsp;| |<div>|<br>)${n ? "?" : ""}(${t})`, d = (n = !1) => new RegExp(`<span.*?</span>|${o(n)}`, "g"), m = (n) => `<span contenteditable="false" id="mention-character-${n}">${t}</span>&nbsp;<span></span>`, l = "mentioned-user-container-class", i = ({ user: n, className: e }) => /* @__PURE__ */ a(
  "span",
  {
    contentEditable: "false",
    suppressContentEditableWarning: !0,
    className: e,
    "data-user-id": n.id,
    children: [
      t,
      n.name.replace(/\s/g, "")
    ]
  }
), g = (n, e) => r.renderToStaticMarkup(
  /* @__PURE__ */ s(
    i,
    {
      user: n,
      className: e
    }
  )
) + "&nbsp;<span></span>";
export {
  i as UserMention,
  g as getUserMentionHtmlString,
  t as mentionCharacter,
  m as mentionCharacterWrapper,
  o as mentionTrigger,
  d as newMentionCharacterTypedRegex,
  l as userMentionCssClassName
};
//# sourceMappingURL=user-mention.js.map
