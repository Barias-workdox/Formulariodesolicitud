import { jsx as r } from "react/jsx-runtime";
import { Draggable as m } from "@carbon/icons-react";
import { TableCell as i } from "../../../components/table-cell/table-cell.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import { themedUseStyletron as p } from "../../../../../themes/utilities.js";
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
import { draggableCellTable as e } from "./draggable-cell-table.styles.js";
const I = ({
  "data-testid": o
}) => {
  const [, t] = p();
  return /* @__PURE__ */ r(
    i,
    {
      "data-testid": o,
      $style: e(t),
      children: /* @__PURE__ */ r(
        m,
        {
          size: 16,
          fill: t.colors.brandSubdued,
          height: 32
        }
      )
    }
  );
};
export {
  I as DraggableCellTable
};
//# sourceMappingURL=draggable-cell-table.js.map
