import "react/jsx-runtime";
import "react";
import "baseui";
import "baseui/input";
import "lodash";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import { DEFAULT_FONT as s } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/utilities.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import { FOCUS_INPUT_BORDER_WIDTH as m } from "../../input/next/input.constants.js";
import "../../input/next/input.overrides.js";
import { getSizeProperties as u } from "../../input/next/input.styles.js";
const a = (o, t) => {
  const r = {
    ...t.typography.ParagraphSmall,
    paddingTop: t.spacing.spacing2xs,
    paddingBottom: t.spacing.spacing2xs,
    paddingLeft: t.spacing.spacingXs,
    paddingRight: t.spacing.spacingXs
  }, p = {
    ...t.typography.ParagraphMedium,
    padding: `${t.spacing.spacingXs} ${t.spacing.spacingMd}`
  }, l = {
    sm: r,
    md: p
  }[o] ?? p, c = {
    columnGap: "2px",
    padding: "0 6px"
  }, n = {
    columnGap: "4px",
    padding: "2px 8px"
  }, e = {
    sm: c,
    md: n
  }[o] ?? n, d = {
    ...t.typography.ParagraphSmall
  }, i = {
    ...t.typography.ParagraphMedium
  }, g = {
    sm: d,
    md: i
  }[o] ?? i;
  return {
    dropdownListItem: l,
    valueContainer: u(o, t).input,
    tagRoot: e,
    input: g
  };
}, Y = {
  padding: 0,
  boxShadow: "none"
}, Z = ({
  $isHighlighted: o,
  $theme: t,
  $size: r
}) => ({
  ...a(r, t).dropdownListItem,
  ...s,
  color: o ? t.colors.neutral : t.colors.neutralDepressed,
  borderBottomWidth: "1px",
  borderBottomColor: t.colors.neutralSubtle,
  borderBottomStyle: "solid",
  minHeight: "auto !important",
  ":last-child": {
    borderBottomColor: "transparent"
  }
}), h = ({
  $theme: o,
  $isHighlighted: t
}) => ({
  color: t ? o.colors.neutralStrong : o.colors.neutral
}), $ = ({ $theme: o }) => ({
  height: "auto",
  margin: 0,
  color: o.colors.neutralStrong
}), oo = ({ $disabled: o }) => ({
  cursor: o ? "not-allowed" : "auto"
}), to = ({
  $theme: o,
  $disabled: t,
  $size: r,
  $multi: p
}) => ({
  ...a(r, o).valueContainer,
  display: "flex",
  alignItems: "center",
  gap: p ? o.spacing.spacingXs : 0,
  color: t ? o.colors.neutralDepressed : o.colors.neutralSubdued,
  margin: 0
}), ro = ({ $theme: o, $disabled: t, $size: r }) => ({
  ...o.typography.ParagraphXSmall,
  ...a(r, o).tagRoot,
  backgroundColor: t ? o.colors.neutralSubtle : o.colors.peaceSubtle,
  color: t ? o.colors.neutralDepressed : o.colors.brandStrong,
  display: "flex",
  alignItems: "center",
  margin: 0,
  border: 0
}), po = ({ $theme: o }) => ({
  top: m,
  boxShadow: o.lighting.shadowDefault
}), ao = ({ $theme: o, $size: t }) => ({
  ...a(t, o).input,
  ...s
}), no = {
  position: "absolute"
}, io = {
  creatableOptionStyles: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    wordBreak: "break-all"
  },
  creatableIconStyles: {
    display: "flex",
    alignItems: "center"
  }
};
export {
  oo as controlContainerStyles,
  Z as dropdownListItemStyles,
  Y as dropdownStyles,
  a as getSizeProperties,
  ao as inputStyles,
  h as optionContentStyle,
  no as placeholderStyles,
  po as popoverBodyStyles,
  $ as singleValueStyles,
  io as styles,
  ro as tagRootStyles,
  to as valueContainerStyles
};
//# sourceMappingURL=select.styles.js.map
