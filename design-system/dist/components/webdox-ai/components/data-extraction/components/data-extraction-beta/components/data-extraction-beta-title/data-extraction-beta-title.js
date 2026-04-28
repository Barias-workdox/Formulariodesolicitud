import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { ReactComponent as e } from "../../../../../../../../assets/icons/webdox-ai/data-extraction-icon.svg.js";
import { Text as m } from "../../../../../../../text/text.js";
import { StatefulTooltipNext as p } from "../../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../../../../../utils/i18n/utils.js";
import { DSTrans as d } from "../../../../../../../utils/i18n/translation-component.js";
import { DATA_EXTRACTION_BETA_ICON_SIZE as o } from "../../../../../../constants/webdox-ai.constants.js";
import { StyledContainer as s, StyledIconContainer as x, StyledStrongText as l } from "./data-extraction-beta-title.styles.js";
const B = ({
  "data-testid": r,
  zIndex: i
}) => {
  const { t: a } = c();
  return /* @__PURE__ */ n(s, { children: [
    /* @__PURE__ */ t(
      p,
      {
        showArrow: !0,
        placement: "top",
        zIndex: i,
        content: /* @__PURE__ */ t(
          d,
          {
            components: {
              strong: /* @__PURE__ */ t(l, {})
            },
            i18nKey: "webdoxAI.dataExtraction.dataExtractionDisclaimer"
          }
        ),
        children: /* @__PURE__ */ t(x, { children: /* @__PURE__ */ t(
          e,
          {
            "data-testid": `${r}--data-extraction-icon`,
            height: o,
            width: o,
            viewBox: "0 0 20 20"
          }
        ) })
      }
    ),
    /* @__PURE__ */ t(
      m,
      {
        variant: "bodySmall",
        fontWeight: "500",
        margin: 0,
        children: a("webdoxAI.dataExtraction.testDataExtraction")
      }
    )
  ] });
};
export {
  B as DataExtractionBetaTitle
};
//# sourceMappingURL=data-extraction-beta-title.js.map
