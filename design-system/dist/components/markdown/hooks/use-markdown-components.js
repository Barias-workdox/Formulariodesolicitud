import { jsx as e } from "react/jsx-runtime";
import { useCss as m } from "../../utils/hooks/use-css.js";
import { styles as c } from "../markdown.styles.js";
const b = () => {
  const {
    imgStyles: t,
    preStyles: s,
    codeStyles: l,
    blockquoteStyles: a,
    tableStyles: o,
    tableHeaderStyles: r,
    tableCellStyles: h
  } = m(c);
  return {
    // Headings
    h1: /* @__PURE__ */ e("h1", {}),
    h2: /* @__PURE__ */ e("h2", {}),
    h3: /* @__PURE__ */ e("h3", {}),
    h4: /* @__PURE__ */ e("h4", {}),
    h5: /* @__PURE__ */ e("h5", {}),
    h6: /* @__PURE__ */ e("h6", {}),
    // Text formatting
    p: /* @__PURE__ */ e("p", {}),
    strong: /* @__PURE__ */ e("strong", {}),
    em: /* @__PURE__ */ e("em", {}),
    u: /* @__PURE__ */ e("u", {}),
    del: /* @__PURE__ */ e("del", {}),
    blockquote: /* @__PURE__ */ e("blockquote", { className: a }),
    code: /* @__PURE__ */ e("code", { className: l }),
    pre: /* @__PURE__ */ e("pre", { className: s }),
    // Links and images
    a: /* @__PURE__ */ e("a", {}),
    img: /* @__PURE__ */ e("img", { className: t }),
    // Lists
    ul: /* @__PURE__ */ e("ul", {}),
    ol: /* @__PURE__ */ e("ol", {}),
    li: /* @__PURE__ */ e("li", {}),
    // Tables
    table: /* @__PURE__ */ e("table", { className: o }),
    thead: /* @__PURE__ */ e("thead", {}),
    tbody: /* @__PURE__ */ e("tbody", {}),
    tr: /* @__PURE__ */ e("tr", {}),
    th: /* @__PURE__ */ e("th", { className: r }),
    td: /* @__PURE__ */ e("td", { className: h }),
    // Additional elements
    hr: /* @__PURE__ */ e("hr", {}),
    // Horizontal rule
    br: /* @__PURE__ */ e("br", {}),
    // Line break
    // Adding support for SVGs could be important for some markdown documents
    svg: /* @__PURE__ */ e("svg", {}),
    path: /* @__PURE__ */ e("path", {}),
    // Support for custom elements like span for inline styles or classes
    span: /* @__PURE__ */ e("span", {}),
    // Other semantic elements
    figure: /* @__PURE__ */ e("figure", {}),
    figcaption: /* @__PURE__ */ e("figcaption", {})
    // Add more custom components as needed
  };
};
export {
  b as useMarkdownComponents
};
//# sourceMappingURL=use-markdown-components.js.map
