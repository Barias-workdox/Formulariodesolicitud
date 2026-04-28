import { escapeRegex as g } from "../../utils/strings/regex.utils.js";
import { userMentionCssClassName as m } from "../message-composer/user-mention.js";
const d = /<span contenteditable="false" class="[\w-]+" data-user-id="\d+">@[^<]+<\/span>/g, s = "%%%NEW_LINE%%%", E = (a, o) => {
  const e = a.replace(/&quot;/g, '"').replace(/<br>/g, s), n = e.match(d) || [];
  if (n.length > 0) {
    const r = n.map(g).join("|");
    return {
      mentions: n.length,
      content: (
        // We iterate by each mention and transform each one
        e.replace(new RegExp(r, "g"), (c) => {
          const [, i] = c.match(/data-user-id="(\d+)"/i), t = o.find((p) => p.id === +i), l = t.name.normalize("NFD").replace(/[^\w]+/g, "");
          return `<span class="${m}">[${t.mentionModel}=${l}#${t.id}]</span>`;
        }).replace(new RegExp(s, "g"), "<br>")
      )
    };
  }
  return {
    content: e.replace(/<[^>]*>/g, "").replace(new RegExp(s, "g"), "<br>"),
    mentions: 0
  };
};
export {
  s as LINE_BREAK,
  E as cleanMentionsForPayload,
  d as userMentionRegex
};
//# sourceMappingURL=user-mention.utils.js.map
