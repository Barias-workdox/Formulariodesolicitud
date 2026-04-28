import { jsx as o, Fragment as g } from "react/jsx-runtime";
import { ArrowUp as v, ArrowDown as w, ChevronSort as y } from "@carbon/icons-react";
import { DATA_TABLE_Z_INDEX as b } from "../../../../../../data-table.constants.js";
import { Popover as A } from "../../../../../../../popover/popover.js";
import "react";
import "baseui/popover";
import "baseui";
import "../../../../../../../popover/popover.styles.js";
import { StatefulTooltipNext as B } from "../../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as _ } from "../../../../../../../utils/i18n/utils.js";
import { useCss as x } from "../../../../../../../utils/hooks/use-css.js";
import { OrderByPopoverContent as N } from "./components/order-by-popover-content/order-by-popover-content.js";
import { styles as T } from "./order-by-button.styles.js";
const O = ({
  dataTestId: p = "data-table__order-by-button",
  id: f,
  label: r,
  isOrderedByThis: a,
  isSortable: i,
  isRemovable: m,
  orderDirection: e,
  dataType: s,
  handleOnChange: h
}) => {
  const { wrapperStyles: l, buttonStyles: $, theme: c } = x(T), { t } = _(), d = i || m, n = a ? e === "asc" ? /* @__PURE__ */ o(
    v,
    {
      color: c.colors.brand,
      "aria-label": `${r} ${t("dataTable.ariaLabels.sortingAsc")}`
    }
  ) : /* @__PURE__ */ o(
    w,
    {
      color: c.colors.brand,
      "aria-label": `${r} ${t("dataTable.ariaLabels.sortingDesc")}`
    }
  ) : d && /* @__PURE__ */ o(y, { "aria-label": `${r} ${t("dataTable.ariaLabels.sortingButton")}` }), u = n && (a ? /* @__PURE__ */ o(
    B,
    {
      content: t(`dataTable.sortBy.dataType.${s}.${e}`),
      showArrow: !0,
      placement: "top",
      ignoreBoundary: !0,
      zIndex: b.popover,
      children: /* @__PURE__ */ o("div", { className: l, children: n })
    }
  ) : /* @__PURE__ */ o("div", { className: l, children: n }));
  return d ? /* @__PURE__ */ o(
    A,
    {
      "data-testid": `${p}__popover`,
      content: /* @__PURE__ */ o(
        N,
        {
          id: f,
          isRemovable: m,
          isSortable: i,
          isOrderedByThis: a,
          orderDirection: e,
          dataType: s,
          handleOnChange: h
        }
      ),
      placement: "bottomRight",
      ignoreBoundary: !0,
      showArrow: !0,
      popoverMargin: -8,
      zIndex: b.popover,
      children: /* @__PURE__ */ o(
        "button",
        {
          "data-testid": `${p}--button`,
          type: "button",
          className: $,
          children: u
        }
      )
    }
  ) : /* @__PURE__ */ o(g, { children: u });
};
export {
  O as OrderByButton
};
//# sourceMappingURL=order-by-button.js.map
