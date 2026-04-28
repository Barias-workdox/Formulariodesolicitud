import { jsxs as e, jsx as r } from "react/jsx-runtime";
import { RequestQuote as d } from "@carbon/icons-react";
import { Button as C } from "../../../button/next/button.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../../utils/i18n/utils.js";
import { useLegalWhisperConversationsContext as u } from "../../hooks/use-legal-whisper-conversations-context.hook.js";
import { ConversationSelectorContainer as h } from "./components/conversation-selector/conversation-selector.container.js";
import { CountryAndAreaSelector as S } from "./components/country-and-area-selector/country-and-area-selector.js";
import { StyledContainer as v } from "./styled-components/styled-container.js";
import { StyledControlsWrapper as g } from "./styled-components/styled-controls-wrapper.js";
import { StyledDivider as x } from "./styled-components/styled-divider.js";
const z = ({
  areaOptions: i,
  countryOptions: n,
  dataTestId: o,
  onAreaChange: m,
  onCountryChange: p,
  selectedArea: s,
  selectedCountry: a,
  zIndex: t
}) => {
  const { t: l } = f(), { onCreateConversation: c } = u();
  return /* @__PURE__ */ e(v, { children: [
    /* @__PURE__ */ e(g, { children: [
      /* @__PURE__ */ r(
        S,
        {
          areaOptions: i,
          countryOptions: n,
          dataTestId: `${o}__country-and-area-selector`,
          onAreaChange: m,
          onCountryChange: p,
          selectedArea: s,
          selectedCountry: a,
          zIndex: t
        }
      ),
      /* @__PURE__ */ r(
        C,
        {
          appearance: "outlined",
          onClick: c,
          startEnhancer: d,
          size: "32px",
          children: l("webdoxAI.legalWhisperSettings.newConversation")
        }
      )
    ] }),
    /* @__PURE__ */ r(x, {}),
    /* @__PURE__ */ r(
      h,
      {
        dataTestId: `${o}__conversation-selector`,
        zIndex: t
      }
    )
  ] });
};
export {
  z as LegalWhisperSettings
};
//# sourceMappingURL=legal-whisper-settings.js.map
