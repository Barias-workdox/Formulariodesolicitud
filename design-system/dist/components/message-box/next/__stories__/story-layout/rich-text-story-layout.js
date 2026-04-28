import { jsxs as n, jsx as i } from "react/jsx-runtime";
import { Markdown as c } from "../../../../markdown/markdown.js";
import { Text as r } from "../../../../text/text.js";
import { useCss as h } from "../../../../utils/hooks/use-css.js";
const m = ({
  children: l,
  value: d,
  htmlToMarkdownValue: a,
  markdownToHtmlValue: t
}) => {
  const { theme: e } = h();
  return /* @__PURE__ */ n("div", { style: { display: "flex", height: "400px" }, children: [
    /* @__PURE__ */ i(
      "div",
      {
        style: {
          flex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: e.spacing.spacingXl
        },
        children: l
      }
    ),
    /* @__PURE__ */ n(
      "div",
      {
        style: {
          flex: 1,
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          borderLeft: `1px solid ${e.colors.neutralSubtle}`
        },
        children: [
          /* @__PURE__ */ n("div", { style: { display: "flex", flexDirection: "column", gap: e.spacing.spacingXs }, children: [
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "h1",
                margin: 0,
                children: "Text Value"
              }
            ) }),
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "body",
                margin: 0,
                children: d.textValue
              }
            ) })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "h1",
                margin: 0,
                children: "HTML Value"
              }
            ) }),
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "body",
                margin: 0,
                children: d.HTMLValue
              }
            ) })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "h1",
                margin: 0,
                children: "HTML to Markdown"
              }
            ) }),
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "body",
                margin: 0,
                children: a
              }
            ) })
          ] }),
          /* @__PURE__ */ n("div", { children: [
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "h1",
                margin: 0,
                children: "Markdown to HTML"
              }
            ) }),
            /* @__PURE__ */ i("div", { children: /* @__PURE__ */ i(
              r,
              {
                variant: "body",
                margin: 0,
                children: /* @__PURE__ */ i(c, { children: t })
              }
            ) })
          ] })
        ]
      }
    )
  ] });
};
export {
  m as RichTextStoryLayout
};
//# sourceMappingURL=rich-text-story-layout.js.map
