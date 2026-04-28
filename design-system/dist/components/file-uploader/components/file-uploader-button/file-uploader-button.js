import { jsxs as f, jsx as r } from "react/jsx-runtime";
import { useMemo as h } from "react";
import { Upload as g } from "@carbon/icons-react";
import { Button as y } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { useCss as b } from "../../../utils/hooks/use-css.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import { Text as x } from "../../../text/text.js";
import { bytesToShortNotation as T } from "../../../utils/files/file.utils.js";
import { useTranslation as z } from "../../../utils/i18n/utils.js";
import { styles as S } from "./file-uploader-button.styles.js";
function K({
  "data-testid": i,
  disabled: n,
  text: m,
  selectedFiles: t,
  onClick: e
}) {
  const { buttonContainerStyles: s, theme: o } = b(S), { t: p } = z(), a = t.length > 0, { count: c, size: d } = h(
    () => ({
      count: t.length,
      size: T(t.reduce((l, { size: u }) => l + u, 0))
    }),
    [t]
  );
  return /* @__PURE__ */ f("div", { className: s, children: [
    /* @__PURE__ */ r(
      y,
      {
        "data-testid": `${i}-button`,
        disabled: n,
        kind: "tertiary",
        size: "compact",
        startEnhancer: g,
        onClick: e,
        children: m
      }
    ),
    a && /* @__PURE__ */ r(
      x,
      {
        variant: "bodySmall",
        $style: { textDecoration: "underline" },
        color: o.colors.brand,
        margin: 0,
        paddingTop: o.spacing.spacingMd,
        children: p("fileuploader.filesToImport", { count: c, size: d })
      }
    )
  ] });
}
export {
  K as FileUploaderButton
};
//# sourceMappingURL=file-uploader-button.js.map
