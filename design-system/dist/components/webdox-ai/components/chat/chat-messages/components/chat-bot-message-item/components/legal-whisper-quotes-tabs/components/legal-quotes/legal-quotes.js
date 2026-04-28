import { jsx as o, jsxs as l } from "react/jsx-runtime";
import { memo as Q } from "react";
import { CollapsibleBox as b } from "../../../../../../../../../../collapsible-box/next/collapsible-box.js";
import { Panel as x } from "../../../../../../../../../../collapsible-box/next/components/panel/panel.js";
import "../../../../../../../../../../collapsible-box/next/components/draggable-panel/draggable-panel.js";
import { Text as t } from "../../../../../../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as E } from "../../../../../../../../../../utils/i18n/utils.js";
import { MIN_LEGAL_QUOTES_VISIBLE as I } from "../../../../../../../../../constants/webdox-ai.constants.js";
import { usePartialQuotesRendering as T } from "../../../../../../../../../hooks/use-partial-quotes-rendering.hook.js";
import { ShowMoreButton as _ } from "../../../../../../../../show-more-button/show-more-button.js";
import { MAX_LEGAL_QUOTES_CONTAINER_HEIGHT as A } from "../../legal-whisper-quotes-tabs.constants.js";
import { StyledQuotesContainer as $ } from "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-quote-container.js";
import { PanelTitle as w } from "./components/panel-title/panel-title.js";
import { StyledListItem as y } from "./styled-components/styled-list-item.js";
import { StyledListItems as M } from "./styled-components/styled-list-items.js";
const C = ({
  dataTestId: r = "legal-quotes",
  quotes: a,
  zIndex: s
}) => {
  const { t: p } = E(), { isShowMoreButtonVisible: u, onToggleShowAllQuotes: c, partialQuotes: d, showMoreQuotes: h } = T({
    quotes: a,
    minLegalQuotesVisible: I
  });
  return /* @__PURE__ */ o($, { children: /* @__PURE__ */ l(b, { size: "small", children: [
    d.map(({ name: e, children: i = [], url: f }, g) => {
      const m = `${r}-${g}-${e}`;
      return /* @__PURE__ */ o(
        x,
        {
          title: /* @__PURE__ */ o(
            w,
            {
              url: f,
              zIndex: s,
              children: e
            }
          ),
          maxHeight: A,
          endEnhancer: /* @__PURE__ */ o(
            t,
            {
              variant: "microCopy",
              color: "neutralSubdued",
              margin: 0,
              children: p("webdoxAI.chat.relatedArticle", {
                count: i.length
              })
            }
          ),
          children: /* @__PURE__ */ o(M, { children: i.map((S) => {
            const { name: n, text: L } = S;
            return /* @__PURE__ */ o(y, { children: /* @__PURE__ */ l(
              t,
              {
                variant: "bodySmall",
                color: "neutralStrong",
                margin: 0,
                children: [
                  /* @__PURE__ */ o(
                    t,
                    {
                      variant: "bodySmall",
                      color: "neutral",
                      margin: 0,
                      fontWeight: "700",
                      as: "span",
                      children: `${n}: `
                    }
                  ),
                  L
                ]
              }
            ) }, `${m}-${n}`);
          }) })
        },
        m
      );
    }),
    u && /* @__PURE__ */ o(
      _,
      {
        dataTestId: `${r}__show-more-button`,
        onClick: c,
        isExpanded: h
      }
    )
  ] }) });
}, ro = Q(C);
export {
  ro as LegalQuotes
};
//# sourceMappingURL=legal-quotes.js.map
