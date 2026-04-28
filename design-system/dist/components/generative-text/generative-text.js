import { jsx as f } from "react/jsx-runtime";
import { useState as v, useMemo as w, useEffect as $ } from "react";
import { Markdown as j } from "../markdown/markdown.js";
import { Text as M } from "../text/text.js";
import { getPartialText as W } from "./generative-text.util.js";
const P = ({
  generativeText: e,
  delay: n,
  infinite: s = !1,
  onFinish: d = () => {
  },
  splitChar: c = " ",
  joinChar: a = " ",
  accumulatedText: i = "",
  markdownProps: p = {},
  ...u
}) => {
  const [x, t] = v(0), l = w(() => e.split(c), [e, c]), o = l.length, I = `${W(l, x).join(a)}`;
  return $(() => {
    let r = 0;
    const m = setInterval(() => {
      r < o ? (t((h) => h + 1), r++) : r >= o && (s ? (t(0), r = 0) : (clearInterval(m), d()));
    }, n);
    return () => {
      t(0), clearInterval(m);
    };
  }, [e, i, n, o, s]), /* @__PURE__ */ f(
    M,
    {
      ...u,
      as: "span",
      children: /* @__PURE__ */ f(j, { ...p, children: `${i}${I}` })
    }
  );
};
export {
  P as GenerativeText
};
//# sourceMappingURL=generative-text.js.map
