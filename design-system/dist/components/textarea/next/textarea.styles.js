import "react/jsx-runtime";
import "react";
import "baseui";
import "baseui/input";
import "lodash";
import "@carbon/icons-react";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
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
import "../../input/next/input.overrides.js";
import { getKindBackgroundColor as t } from "../../input/next/input.styles.js";
const a = (i, p) => {
  const r = {
    ...p.typography.ParagraphSmall,
    paddingTop: p.spacing.spacing2xs,
    paddingBottom: p.spacing.spacing2xs,
    paddingLeft: p.spacing.spacingXs,
    paddingRight: p.spacing.spacingXs
  }, o = {
    ...p.typography.ParagraphMedium,
    paddingTop: p.spacing.spacingXs,
    paddingBottom: p.spacing.spacingXs,
    paddingLeft: p.spacing.spacingMd,
    paddingRight: p.spacing.spacingMd
  };
  return {
    compact: r,
    "32px": r,
    default: o,
    "44px": o
  }[i] ?? o;
}, H = ({
  $theme: i,
  $size: p,
  $kind: r,
  $resize: o
}) => ({
  ...a(p, i),
  color: i.colors.neutralStrong,
  backgroundColor: t({ $kind: r, $theme: i }),
  // This values are important to override the default textarea styles
  // when the resize prop is set to 'both', 'horizontal' or 'vertical'
  width: o ? void 0 : "100% !important",
  height: o ? void 0 : "auto !important",
  ":disabled": {
    backgroundColor: t({ $kind: r, $theme: i })
  }
});
export {
  a as getSizeProperties,
  H as textareaInputStyles
};
//# sourceMappingURL=textarea.styles.js.map
