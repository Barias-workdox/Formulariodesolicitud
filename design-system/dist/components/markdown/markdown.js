import { jsx as n, Fragment as e } from "react/jsx-runtime";
import i from "dompurify";
import { marked as p } from "marked";
import { Trans as f } from "react-i18next";
import { useMarkdownComponents as c } from "./hooks/use-markdown-components.js";
const A = ({ children: r, extraComponents: o = {} }) => {
  const s = c(), m = Array.isArray(r) ? r.join(`
`) : r.toString(), a = p.parse(m), t = i.sanitize(a, {
    ADD_TAGS: Object.keys(o)
  });
  return t ? /* @__PURE__ */ n(
    f,
    {
      defaults: t,
      tOptions: { ignoreErrors: !0 },
      components: { ...s, ...o }
    }
  ) : /* @__PURE__ */ n(e, {});
};
export {
  A as Markdown
};
//# sourceMappingURL=markdown.js.map
