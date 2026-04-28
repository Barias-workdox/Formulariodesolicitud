import { jsx as s } from "react/jsx-runtime";
import { forwardRef as g, useMemo as h } from "react";
import { useVirtualizer as x } from "@tanstack/react-virtual";
import { MenuItem as y } from "../../../components/menu-item.js";
import "@carbon/icons-react";
import "../../../../truncated-text/truncated-text.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { useSyncedRef as z } from "../../../../../hooks/use-synced-ref.hook.js";
import { StyledContainer as R } from "./virtualized-list.styles.js";
const V = (o) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: `${o.size}px`,
  transform: `translateY(${o.start}px)`
}), G = g(function({ dataTestId: p = "menu", items: r = [], maxHeight: f, itemSize: a = 44, itemLabelTemplate: m, onItemSelect: i }, l) {
  const u = z({ externalRef: l }), d = h(() => Array.isArray(r) ? r : Object.values(r), [r]), e = x({
    count: d.length,
    overscan: 1,
    getScrollElement: () => u.current,
    estimateSize: () => a,
    // Enable dynamic measurement for accurate sizing
    measureElement: (t) => (t == null ? void 0 : t.getBoundingClientRect().height) ?? a
  });
  return /* @__PURE__ */ s(
    R,
    {
      ref: u,
      "data-testid": p,
      $maxHeight: f,
      children: /* @__PURE__ */ s(
        "div",
        {
          style: {
            height: `${e.getTotalSize()}px`,
            width: "100%",
            position: "relative"
          },
          children: e.getVirtualItems().map((t) => {
            const n = d[t.index];
            if (!n)
              return null;
            const c = {
              item: n,
              optionListBorderBottom: !0,
              role: "option",
              index: t.index,
              baseDataTestId: p,
              onClick: () => {
                i == null || i({ item: n });
              },
              ...m ? { getItemLabel: m } : {}
            };
            return /* @__PURE__ */ s(
              y,
              {
                ref: e.measureElement,
                "data-index": t.index,
                style: V(t),
                ...c
              },
              t.key
            );
          })
        }
      )
    }
  );
});
export {
  G as VirtualizedList
};
//# sourceMappingURL=virtualized-list.js.map
