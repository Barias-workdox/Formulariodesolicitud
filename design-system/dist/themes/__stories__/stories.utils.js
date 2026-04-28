import { jsx as r, jsxs as l, Fragment as d } from "react/jsx-runtime";
import { DeprecatedComponentAlert as f } from "../../components/storybook/deprecated-component-alert.js";
import "../v3/light/theme.js";
import "../v3/dark/theme.js";
import "../v3/tokens/typography.js";
import "../v3/tokens/breakpoints.js";
import "../utilities.js";
import { extractGroup as F } from "../v3/utils/colors.utils.js";
const I = [
  { title: "Gray", prefix: "gray" },
  { title: "Blue", prefix: "blue" },
  { title: "Green", prefix: "green" },
  { title: "Red", prefix: "red" },
  { title: "Yellow", prefix: "yellow" },
  { title: "Cyan", prefix: "cyan" },
  { title: "Purple", prefix: "purple" },
  { title: "Light Green", prefix: "lightgreen" },
  { title: "Magenta", prefix: "magenta" },
  { title: "Orange", prefix: "orange" }
], T = [
  { title: "Neutral", prefix: "neutral" },
  { title: "Brand", prefix: "brand" },
  { title: "Positive", prefix: "positive" },
  { title: "Negative", prefix: "negative" },
  { title: "Warning", prefix: "warning" },
  { title: "Peace", prefix: "peace" },
  { title: "Power", prefix: "power" },
  { title: "Nature", prefix: "nature" },
  { title: "Sweet", prefix: "sweet" },
  { title: "Heat", prefix: "heat" }
], b = [
  { title: "Surfaces — Decorative", prefix: "surfaceDecorative" },
  { title: "Surfaces — Interactive", prefix: "surfaceInteractive" },
  { title: "Icons — Tonal", prefix: "iconTonal" },
  { title: "Icons — Filled", prefix: "iconFilled" },
  { title: "Text — Tonal", prefix: "textTonal" },
  { title: "Text — Filled", prefix: "textFilled" },
  { title: "Strokes", prefix: "stroke" }
], P = [
  { title: "Background (bg)", prefix: "bg" },
  { title: "Text (text)", prefix: "text" },
  { title: "Icon (icon)", prefix: "icon" },
  { title: "Border (border)", prefix: "border" }
], x = ["bg", "text", "icon", "border"], w = (t) => {
  const e = {};
  for (const [i, o] of Object.entries(t))
    x.some((n) => i.startsWith(n)) || (e[i] = o);
  return e;
}, m = ({
  name: t,
  value: e,
  textColor: i,
  borderColor: o
}) => {
  const n = e === "";
  return /* @__PURE__ */ l(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        padding: "0.5rem",
        borderRadius: "0.5rem",
        border: `1px solid ${o}`,
        opacity: n ? 0.5 : 1
      },
      children: [
        /* @__PURE__ */ r(
          "div",
          {
            style: {
              width: "48px",
              height: "48px",
              flexShrink: 0,
              borderRadius: "0.375rem",
              background: n ? "repeating-conic-gradient(#E0E3EB 0% 25%, transparent 0% 50%) 50% / 12px 12px" : e,
              border: `1px solid ${o}`
            }
          }
        ),
        /* @__PURE__ */ l("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ r("div", { style: { fontWeight: 600, fontSize: "0.8125rem", color: i }, children: t }),
          /* @__PURE__ */ r("div", { style: { fontSize: "0.75rem", color: i, opacity: 0.7 }, children: n ? "Not defined" : e })
        ] })
      ]
    }
  );
}, R = ({
  title: t,
  colors: e,
  textColor: i,
  borderColor: o,
  showCount: n = !1
}) => {
  const p = Object.entries(e), s = p.filter(([, a]) => a !== "").length;
  return /* @__PURE__ */ l("div", { style: { marginBottom: "2rem" }, children: [
    /* @__PURE__ */ r(
      "div",
      {
        style: {
          position: "sticky",
          top: 0,
          zIndex: 1,
          padding: "0.5rem 0"
        },
        children: /* @__PURE__ */ l("h2", { style: { margin: 0, fontSize: "1.25rem", fontWeight: 700, color: i }, children: [
          t,
          n && /* @__PURE__ */ l(d, { children: [
            " ",
            /* @__PURE__ */ l("span", { style: { fontWeight: 400, fontSize: "0.875rem", opacity: 0.6 }, children: [
              "(",
              s,
              "/",
              p.length,
              " defined)"
            ] })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ r(
      "div",
      {
        style: {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "0.5rem",
          marginTop: "0.75rem"
        },
        children: p.map(([a, c]) => /* @__PURE__ */ r(
          m,
          {
            name: a,
            value: c,
            textColor: i,
            borderColor: o
          },
          a
        ))
      }
    )
  ] });
}, k = ({ children: t }) => /* @__PURE__ */ r(
  "div",
  {
    style: {
      maxWidth: "1200px",
      margin: "0 auto"
    },
    children: t
  }
), D = ({ version: t, message: e }) => /* @__PURE__ */ r(
  f,
  {
    name: e ?? `${t} está deprecated. Usa los tokens semánticos de V3 en código nuevo.`
  }
);
export {
  R as ColorGroup,
  k as ColorPageLayout,
  m as ColorSwatch,
  P as DEPRECATED_ELEMENTS,
  D as DeprecationBanner,
  I as PRIMITIVE_FAMILIES,
  T as SEMANTIC_ROLES,
  b as UI_GROUPS,
  w as extractCurrentTokens,
  F as extractGroup
};
//# sourceMappingURL=stories.utils.js.map
