import { jsx as r, jsxs as h } from "react/jsx-runtime";
import { useMemo as F } from "react";
import { FileTypeIcon as x } from "../file-type-icon/file-type-icon.js";
import { Text as d } from "../text/text.js";
import { StatefulTooltipNext as l } from "../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import { useCss as A } from "../utils/hooks/use-css.js";
import { FeedFileInfoTag as T } from "./components/feed-file-info-tag.js";
import "@carbon/icons-react";
import "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { BASE_DATA_TEST_ID as $ } from "./feed-file.constants.js";
import { styles as g, StyledFeedFile as C, StyledFeedFileInfo as N, StyledFeedFileName as _, StyledPathAndNameContainer as v, StyledPathContainer as B, feedFileTooltipOverrides as s, StyledNameContainer as E } from "./feed-file.styles.js";
const b = ({
  "data-testid": m = $,
  document: { name: e, fileExt: a, type: i, webkitRelativePath: o },
  tagProps: c,
  backgroundColor: y,
  children: S,
  showPath: p = !1
}) => {
  const { documentNameStyles: t } = g, { theme: n } = A(), u = a || (i == null ? void 0 : i.split("/").pop()), f = F(() => {
    if (!(!p || !o))
      return e && o.endsWith(e) ? o.slice(0, -e.length) : o;
  }, [p, o, e]);
  return /* @__PURE__ */ r(C, { $backgroundColor: y, children: /* @__PURE__ */ h(N, { children: [
    /* @__PURE__ */ r(
      x,
      {
        "data-testid": `${m}__file-type-icon--${u}`,
        fileExtension: u,
        size: 16
      }
    ),
    /* @__PURE__ */ r(_, { children: f ? /* @__PURE__ */ h(v, { children: [
      /* @__PURE__ */ r(B, { children: /* @__PURE__ */ r(
        l,
        {
          content: o,
          showArrow: !0,
          overrides: s(),
          ignoreBoundary: !0,
          children: /* @__PURE__ */ r(
            d,
            {
              variant: "bodySmall",
              $style: t(n),
              children: /* @__PURE__ */ r("span", { children: f })
            }
          )
        }
      ) }),
      /* @__PURE__ */ r(E, { children: /* @__PURE__ */ r(
        l,
        {
          content: e,
          showArrow: !0,
          overrides: s(),
          ignoreBoundary: !0,
          children: /* @__PURE__ */ r(
            d,
            {
              variant: "bodySmall",
              $style: t(n),
              children: /* @__PURE__ */ r("span", { children: e })
            }
          )
        }
      ) })
    ] }) : /* @__PURE__ */ r(
      l,
      {
        content: e,
        showArrow: !0,
        overrides: s(),
        ignoreBoundary: !0,
        children: /* @__PURE__ */ r(
          d,
          {
            variant: "bodySmall",
            $style: t(n),
            children: /* @__PURE__ */ r("span", { children: e })
          }
        )
      }
    ) }),
    c !== void 0 && /* @__PURE__ */ r(
      T,
      {
        "data-testid": m,
        ...c
      }
    ),
    S
  ] }) });
};
export {
  b as FeedFile
};
//# sourceMappingURL=feed-file.js.map
