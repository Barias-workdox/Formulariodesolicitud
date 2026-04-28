import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { Search as S } from "@carbon/icons-react";
import { StyledRoot as f } from "baseui/input";
import { isNil as l } from "lodash";
import "react";
import "baseui";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import { useCss as $ } from "../../../../utils/hooks/use-css.js";
import "baseui/modal";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "baseui/tooltip";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import { CompoundStartEnhancer as y } from "../../../../input/next/components/compound-start-enhancer/compound-start-enhancer.js";
import "../../../../input/next/input.overrides.js";
import { getInputRootStyles as C } from "../../../../input/next/input.styles.js";
import "../../styled-components/styled-icons-container.js";
import { StyledStartEnhancerContainer as E } from "../../styled-components/styled-start-enhancer-container.js";
const _ = ({
  "data-testid": t,
  children: n,
  leading: i,
  size: m,
  kind: a,
  $type: c,
  isHovered: s,
  ...r
}) => {
  const { theme: h } = $(), p = c === "search", e = !l(i) || p;
  return /* @__PURE__ */ d(
    f,
    {
      ...r,
      $style: C({
        ...r,
        $theme: h,
        $kind: a,
        $size: m,
        $isHovered: s,
        $withStartEnhancer: e
      }),
      children: [
        e && /* @__PURE__ */ o(E, { "data-testid": `${t}--start-enhancer-container`, children: /* @__PURE__ */ o(
          y,
          {
            ...r,
            "data-testid": t,
            leading: i,
            size: m,
            startEnhancer: p ? /* @__PURE__ */ o(S, { "data-testid": `${t}--search-icon` }) : void 0
          }
        ) }),
        n
      ]
    }
  );
};
export {
  _ as SelectControlContainer
};
//# sourceMappingURL=select-control-container.js.map
