import { useCallback as n, useEffect as c } from "react";
import { marked as p } from "marked";
import f from "turndown";
import { useMarkdownComponents as i } from "../components/markdown/hooks/use-markdown-components.js";
const s = new f({
  headingStyle: "atx",
  codeBlockStyle: "fenced"
}), b = (m) => {
  const { extraComponents: t } = m ?? {}, a = i(), o = n((e) => {
    s.addRule(e, {
      filter: (r) => r.nodeName.toUpperCase() === e.toUpperCase(),
      replacement: (r) => `<${e}>${r}</${e}>`
    });
  }, []);
  c(() => {
    Object.keys(a).forEach(o);
  }, [o, a]), c(() => {
    Object.keys(t ?? {}).forEach(o);
  }, [o, t]);
  const d = n(async (e) => e ? s.turndown(e) : "", []), u = n(async (e) => e ? p(e, { breaks: !0 }) : "", []);
  return { htmlToMarkdown: d, markdownToHtml: u };
};
export {
  b as useMarkdownConverter
};
//# sourceMappingURL=use-markdown-converter.hook.js.map
