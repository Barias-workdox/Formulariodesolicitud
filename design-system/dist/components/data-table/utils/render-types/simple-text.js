import { jsx as r } from "react/jsx-runtime";
import { DATA_TABLE_Z_INDEX as t } from "../../data-table.constants.js";
import { useDataTableDisabledRow as n } from "../../hooks/use-data-table-disabled-row.js";
import { TruncatedText as i } from "../../../truncated-text/truncated-text.js";
const m = ({ value: e }) => {
  const { isRowDisabled: o } = n();
  return /* @__PURE__ */ r(
    i,
    {
      textProps: {
        color: o ? "neutralDepressed" : "neutralSubdued",
        variant: "body",
        marginTop: 0,
        marginBottom: 0,
        textAlign: "inherit",
        $style: { flex: 1 }
      },
      tooltipProps: {
        content: e,
        placement: "top",
        popoverMargin: 4,
        ignoreBoundary: !0,
        showArrow: !0,
        hasPointerEventsEnabled: !1,
        zIndex: t.popover
      },
      children: e
    }
  );
};
export {
  m as SimpleText
};
//# sourceMappingURL=simple-text.js.map
