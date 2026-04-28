import { jsx as E } from "react/jsx-runtime";
import { useState as w, useRef as e } from "react";
import { MIN_COLUMN_WIDTH as P } from "../../../../data-table.constants.js";
import { convertCssUnitToPx as i } from "../../../../../../utils/styles.utils.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as R } from "../../../../../utils/i18n/utils.js";
import { StyledResizeColumnLine as S } from "./resize-column-line.styles.js";
const B = ({
  dataTestId: f,
  columnRef: t,
  minWidth: h,
  maxWidth: y,
  width: L,
  setIsResizeHovered: o,
  updateWidth: v
}) => {
  const [x, u] = w(!1), s = e(!1), c = e(0), m = e(0), a = e(0), d = e(0), { t: M } = R(), l = (r) => {
    if (!s.current || !t.current)
      return;
    const n = r.clientX - c.current, z = m.current + n, C = Math.max(a.current, Math.min(z, d.current));
    t.current.style.width = `${C}px`;
  }, p = () => {
    u(!1), o(!1), s.current = !1, document.body.style.cursor = "unset", document.body.style.userSelect = "unset", document.removeEventListener("mousemove", l), document.removeEventListener("mouseup", p), t.current && v(t.current.style.width);
  }, b = (r) => {
    var n;
    u(!0), r.stopPropagation(), s.current = !0, document.body.style.cursor = "col-resize", document.body.style.userSelect = "none", c.current = r.clientX, m.current = i(L, ((n = t.current) == null ? void 0 : n.offsetWidth) || 0), a.current = i(h, parseInt(P, 10)), d.current = i(y, 1e4), document.addEventListener("mousemove", l), document.addEventListener("mouseup", p);
  }, W = () => {
    x || o(!1);
  };
  return /* @__PURE__ */ E(
    S,
    {
      "data-testid": f,
      "aria-label": M("dataTable.ariaLabels.resizeColumnLine"),
      onMouseEnter: () => o(!0),
      onMouseLeave: W,
      onMouseDown: b
    }
  );
};
export {
  B as ResizeColumnLine
};
//# sourceMappingURL=resize-column-line.js.map
