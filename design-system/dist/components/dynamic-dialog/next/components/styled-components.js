import { themedStyled as t } from "../../../../themes/utilities.js";
import { DIALOG_TRANSITION as g, DIALOG_HEADER_HEIGHT as p, HANDLE_CORNER_THICKNESS as l, HANDLE_THICKNESS as r } from "../dynamic-dialog.constants.js";
const y = t("div", ({ $fullViewport: e, $zIndex: o, $isMobile: i, $theme: n }) => {
  const a = {
    position: "fixed",
    display: "flex",
    flexDirection: "column",
    borderRadius: e || i ? "0" : n.borders.borderSm,
    borderColor: n.colors.neutralSubtle,
    backgroundColor: n.colors.bgBase,
    boxShadow: "0 12px 24px 0 rgba(26, 26, 26, 0.08), 0 24px 48px 0 rgba(26, 26, 26, 0.08)",
    transition: g,
    zIndex: o || 1e3,
    overflow: "hidden"
  };
  return i ? {
    ...a,
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: "90vh",
    borderTopLeftRadius: n.borders.borderSm,
    borderTopRightRadius: n.borders.borderSm,
    borderBottomLeftRadius: "0",
    borderBottomRightRadius: "0"
  } : e ? {
    ...a,
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100vw",
    height: "100vh",
    maxWidth: "none",
    maxHeight: "none"
  } : a;
}), S = t("div", ({ $theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: `${p}px`,
  borderBottom: `1px solid ${e.colors.neutralSubtle}`
})), u = t("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing.spacingXs,
  padding: `${e.spacing.spacingXs} ${e.spacing.spacingMd}`
})), h = t("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing.spacingXs,
  flex: 1,
  minWidth: 0
})), H = t("div", () => ({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  minWidth: 0
})), m = t("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  gap: e.spacing.spacingXs,
  flexShrink: 0
})), v = t("div", ({ $theme: e, $padding: o }) => ({
  flex: 1,
  overflow: "auto",
  padding: o || e.spacing.spacingMd
})), C = t("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: e.spacing.spacingXs,
  padding: e.spacing.spacingMd,
  borderTop: `1px solid ${e.colors.neutralSubtle}`,
  flexShrink: 0
})), c = {
  position: "absolute",
  backgroundColor: "transparent",
  zIndex: 10
};
function d(e, o, i) {
  return t("div", () => ({
    ...c,
    ...e,
    ...o,
    cursor: i
  }));
}
const R = d(
  { top: 0, left: 0, bottom: 0 },
  { width: r },
  "ew-resize"
), I = d(
  { top: 0, right: 0, bottom: 0 },
  { width: r },
  "ew-resize"
), w = d(
  { top: 0, left: 0, right: 0 },
  { height: r },
  "ns-resize"
), D = d(
  { bottom: 0, left: 0, right: 0 },
  { height: r },
  "ns-resize"
), f = {
  ...c,
  width: l,
  height: l,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
function s(e, o) {
  return t("div", () => ({
    ...f,
    ...e,
    cursor: o
  }));
}
const z = s({ top: 0, left: 0 }, "nw-resize"), T = s({ top: 0, right: 0 }, "ne-resize"), B = s({ bottom: 0, left: 0 }, "sw-resize"), L = s(
  { bottom: 0, right: 0 },
  "se-resize"
), E = t("div", ({ $theme: e }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  cursor: "grab",
  padding: e.spacing.spacing2xs,
  color: e.colors.neutral,
  ":active": {
    cursor: "grabbing"
  }
})), A = t("div", ({ $theme: e }) => ({
  display: "flex",
  justifyContent: "center",
  padding: e.spacing.spacing2xs
}));
export {
  D as StyledBottomHandle,
  B as StyledBottomLeftCornerHandle,
  L as StyledBottomRightCornerHandle,
  v as StyledDialogBody,
  y as StyledDialogContainer,
  C as StyledDialogFooter,
  S as StyledDialogHeader,
  E as StyledDragHandle,
  m as StyledHeaderActions,
  h as StyledHeaderContent,
  u as StyledHeaderMainRow,
  H as StyledHeaderTexts,
  R as StyledLeftHandle,
  A as StyledMobileHandle,
  I as StyledRightHandle,
  w as StyledTopHandle,
  z as StyledTopLeftCornerHandle,
  T as StyledTopRightCornerHandle
};
//# sourceMappingURL=styled-components.js.map
