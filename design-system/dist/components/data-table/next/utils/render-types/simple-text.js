import { jsx as r } from "react/jsx-runtime";
import { DATA_TABLE_Z_INDEX as t } from "../../data-table.constants.js";
import { TruncatedText as n } from "../../../../truncated-text/truncated-text.js";
import { useDataTableDisabledRow as i } from "../../hooks/use-data-table-disabled-row.js";
const d = ({ value: e }) => {
  const { isRowDisabled: o } = i();
  return /* @__PURE__ */ r(
    n,
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
  d as SimpleText
};
//# sourceMappingURL=simple-text.js.map
