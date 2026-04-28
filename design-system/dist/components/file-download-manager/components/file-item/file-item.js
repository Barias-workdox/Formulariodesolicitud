import { jsx as r } from "react/jsx-runtime";
import { useState as f, useCallback as m, useMemo as v } from "react";
import "../../../list/list.js";
import "../../../list/virtualized-list.js";
import "../../../list/components/avatar-list-item/avatar-list-item.js";
import { FileListItem as u } from "../../../list/components/file-list-item/file-list-item.js";
import "../../../list/components/list-item/list-item.js";
import { useCss as I } from "../../../utils/hooks/use-css.js";
import { FileItemDetails as h } from "./file-item-details.js";
import { FileItemEndEnhancer as E } from "./file-item-end-enhancer.js";
import { getFileListItemOverrides as F } from "./file-item.styles.js";
const D = ({
  fileStatus: e,
  fileName: o,
  fileExtension: n,
  fileDownloadProgress: a,
  onClick: t
}) => {
  const [l, i] = f(!1), { theme: s } = I(), d = m(() => i(!0), []), p = m(() => i(!1), []), c = v(
    () => F(e, s.spacing),
    [e, s.spacing]
  );
  return /* @__PURE__ */ r(
    "div",
    {
      onMouseEnter: d,
      onMouseLeave: p,
      "data-testid": "file-download-manager--file-item--container",
      children: /* @__PURE__ */ r(
        u,
        {
          "aria-label": o,
          size: "sm",
          details: /* @__PURE__ */ r(
            h,
            {
              fileStatus: e,
              fileDownloadProgress: a
            }
          ),
          endEnhancer: /* @__PURE__ */ r(
            E,
            {
              fileStatus: e,
              isHovered: l,
              onClick: t
            }
          ),
          fileExtension: n,
          label: o,
          onClick: t,
          overrides: c
        }
      )
    }
  );
};
export {
  D as FileItem
};
//# sourceMappingURL=file-item.js.map
