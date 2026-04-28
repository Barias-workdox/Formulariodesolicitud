import { jsx as e, jsxs as h } from "react/jsx-runtime";
import { useRef as Q } from "react";
import "baseui/tabs-motion";
import "baseui";
import "../../../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../../../themes/v3/tokens/breakpoints.js";
import { StatefulTabs as b } from "../../../../../../../../tabs/stateful-tabs.js";
import { Tab as s } from "../../../../../../../../tabs/components/tab/tab.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../../../../../../utils/i18n/utils.js";
import { AdministrativeQuotes as g } from "./components/administrative-quotes/administrative-quotes.js";
import { JurisprudentialQuotes as _ } from "./components/jurisprudential-quotes/jurisprudential-quotes.js";
import { LegalQuotes as v } from "./components/legal-quotes/legal-quotes.js";
import { LegalWhisperQuotesTabKeys as a } from "./legal-whisper-quotes-tabs.constants.js";
import { tabsOverrides as q } from "./legal-whisper-quotes-tabs.overrides.js";
const F = ({
  dataTestId: t = "legal-whisper-quotes-tabs",
  quotes: l,
  zIndex: o
}) => {
  const { t: r } = f(), i = Q(null), { legalQuotes: n = [], jurisprudentialQuotes: u = [], administrativeQuotes: m = [] } = l || {}, d = u.length > 0, p = m.length > 0, c = () => {
    setTimeout(() => {
      i.current && i.current.scrollIntoView && i.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };
  return /* @__PURE__ */ e("div", { ref: i, children: /* @__PURE__ */ h(
    b,
    {
      "data-testid": `${t}__tabs`,
      overrides: q,
      onChange: c,
      children: [
        /* @__PURE__ */ e(
          s,
          {
            "data-testid": `${t}__legal-tab`,
            title: r("webdoxAI.chat.legalQuotes"),
            children: /* @__PURE__ */ e(
              v,
              {
                quotes: n,
                dataTestId: `${t}__legal-quotes`,
                zIndex: o
              }
            )
          },
          a.LegalQuotes
        ),
        d && /* @__PURE__ */ e(
          s,
          {
            "data-testid": `${t}__jurisprudential-tab`,
            title: r("webdoxAI.chat.jurisprudentialQuotes"),
            children: /* @__PURE__ */ e(
              _,
              {
                quotes: u,
                dataTestId: `${t}__jurisprudential-quotes`,
                zIndex: o
              }
            )
          },
          a.JurisprudentialQuotes
        ),
        p && /* @__PURE__ */ e(
          s,
          {
            "data-testid": `${t}__administrative-tab`,
            title: r("webdoxAI.chat.administrativeQuotes"),
            children: /* @__PURE__ */ e(
              g,
              {
                quotes: m,
                dataTestId: `${t}__administrative-quotes`,
                zIndex: o
              }
            )
          },
          a.AdministrativeQuotes
        )
      ]
    }
  ) });
};
export {
  F as LegalWhisperQuotesTabs
};
//# sourceMappingURL=legal-whisper-quotes-tabs.js.map
