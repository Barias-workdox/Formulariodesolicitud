import { USER_MENTION_REGEX as r } from "../../../constants/regex.constants.js";
const c = (s) => s.split("|").map((e) => {
  const n = e.slice(e.indexOf(">@") + 2, e.indexOf("</span>"));
  return e.replace(/<span/g, "(<span").replace(/<\/span>/g, "</span>)").replace(/\w<\/span>/g, `(${n[n.length - 1]}</span>`).replace(/>@/g, ">@)");
}), g = (s) => {
  const e = s.replace(/&quot;/g, '"').replace(/&nbsp;/g, " ").replace(/<span><\/span>/g, ""), n = (e.match(r) || []).join("|");
  if (n.length > 0) {
    const a = c(n);
    return e.replace(new RegExp(n, "g"), (t) => a.find(
      (p) => p.includes(
        t.slice(t.indexOf(">@") + 3, t.indexOf("</span>") - 1)
      )
    )).split(/(?![^(]*\))/g);
  } else
    return e.split("");
};
export {
  g as updateMessageText
};
//# sourceMappingURL=update-message-text.utils.js.map
