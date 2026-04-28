import { jsxs as x, jsx as t } from "react/jsx-runtime";
import { useMemo as C, useCallback as y } from "react";
import { Misuse as S } from "@carbon/icons-react";
import "../../../../button/button.js";
import { IconButton as T } from "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { Spinner as g } from "../../../../spinner/spinner.js";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { CopyToClipboardButton as B } from "../../../../copy-to-clipboard-button/copy-to-clipboard-button.js";
import { StatefulTooltipNext as E } from "../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as $ } from "../../../../utils/i18n/utils.js";
import { noop as k } from "../../../../../utils/noop.js";
import { resolveEnhancer as v } from "../../utils/resolve-enhancer.util.js";
import { PositiveOrNegativeIcon as z } from "../positive-or-negative-icon/positive-or-negative-icon.js";
import { StyledContainer as R } from "./styled-components/styled-container.js";
const pt = ({
  "data-testid": o,
  positive: e,
  error: n,
  canClear: p,
  canCopy: m,
  isLoading: l,
  endEnhancer: s,
  onClear: c = k,
  value: a = "",
  zIndex: u,
  ...r
}) => {
  const { t: i } = $(), { $isReadOnly: f } = r, d = C(() => v(s, r), [s, r]), h = y(
    (b) => {
      b.preventDefault(), c();
    },
    [c]
  );
  return l || m || p || e || n || !!d ? /* @__PURE__ */ x(R, { children: [
    l && /* @__PURE__ */ t(
      g,
      {
        size: "sm",
        "data-testid": `${o}--spinner`
      }
    ),
    m && /* @__PURE__ */ t(
      B,
      {
        text: String(a),
        "data-testid": `${o}--copy-to-clipboard-button`,
        buttonKind: "ghost-tertiary",
        buttonSize: "24px",
        tooltipText: i("copyToClipboardButton.copyContent"),
        copiedTooltipText: i("copyToClipboardButton.contentCopied")
      }
    ),
    p && !f && /* @__PURE__ */ t(
      E,
      {
        content: i("general.clearContent"),
        showArrow: !0,
        placement: "top",
        zIndex: u,
        children: /* @__PURE__ */ t(
          T,
          {
            "data-testid": `${o}--clear-button`,
            onClick: h,
            size: "24px",
            kind: "ghost-tertiary",
            children: /* @__PURE__ */ t(S, {})
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      z,
      {
        "data-testid": o,
        positive: e,
        error: n
      }
    ),
    d
  ] }) : null;
};
export {
  pt as CompoundEndEnhancer
};
//# sourceMappingURL=compound-end-enhancer.js.map
