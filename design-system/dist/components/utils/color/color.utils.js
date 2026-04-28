function c() {
  const t = document.createElement("input");
  return t.setAttribute("type", "color"), t.type !== "text";
}
function u(t) {
  return t !== void 0 && /^#[0-9A-F]{6}$/i.test(t);
}
function s(t) {
  return `#${t.replace("#", "").replace(/[^0-9a-fA-F]/g, "").substr(0, 6)}`;
}
function i(t) {
  t = t.replace(/^#/, "");
  const e = parseInt(t, 16), r = e >> 16 & 255, n = e >> 8 & 255, o = e & 255;
  return `rgb(${r}, ${n}, ${o})`;
}
export {
  c as doesBrowserSupportsColorType,
  s as formatHexColor,
  i as hexToRgb,
  u as isValidHexColor
};
//# sourceMappingURL=color.utils.js.map
