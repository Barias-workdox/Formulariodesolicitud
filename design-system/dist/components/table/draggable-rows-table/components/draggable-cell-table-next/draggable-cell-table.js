import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { Draggable as n } from "@carbon/icons-react";
import { TableCell as c } from "../../../components/table-cell/table-cell.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/utilities.js";
import "baseui/typography";
import "../../../components/table-header/table-header-container.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import { useCss as b } from "../../../../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "../../../../text/text.js";
import "../../../components/table-actions/table-actions-layout.js";
import { styles as i } from "./draggable-cell-table.styles.js";
const U = ({
  "data-testid": t,
  isDisabled: o = !1,
  $style: m,
  children: p
}) => {
  const { theme: e, innerStyles: l, draggableCellTableStyles: s, wrapperStyles: a } = b(i);
  return /* @__PURE__ */ r(
    c,
    {
      "data-testid": t,
      $style: { ...i.rootStyles, ...m ?? {} },
      children: /* @__PURE__ */ d("div", { className: a, children: [
        !o && /* @__PURE__ */ r(
          "span",
          {
            "data-testid": t ? `${t}--draggable-icon` : void 0,
            className: s,
            children: /* @__PURE__ */ r(
              n,
              {
                size: 16,
                fill: e.colors.brandSubdued,
                height: 32
              }
            )
          }
        ),
        /* @__PURE__ */ r("div", { className: l, children: p })
      ] })
    }
  );
};
export {
  U as DraggableCellTable
};
//# sourceMappingURL=draggable-cell-table.js.map
