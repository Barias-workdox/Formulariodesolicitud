import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { Term as p, Result as c } from "@carbon/icons-react";
import "react";
import "../../../../../background-icon/background-icon.styles.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "../../../../../text/text.js";
import { noop as s } from "../../../../../../utils/noop.js";
import "../../../../../message-card/message-card.styles.js";
import "../../../../../message-card/components/message-card-title/message-card-title.styles.js";
import "../../../../../message-card/components/message-card-base/message-card-base.styles.js";
import { StatefulMessageCard as m } from "../../../../../message-card/containers/stateful-message-card/stateful-message-card.container.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as d } from "../../../../../utils/i18n/utils.js";
import { StyledRoot as l, messageCardOverrides as a } from "./summary-type-selection-step.styles.js";
const D = ({
  "data-testid": r,
  onClick: o = s,
  disabled: i = !1
}) => {
  const { t } = d();
  return /* @__PURE__ */ n(l, { children: [
    /* @__PURE__ */ e(
      m,
      {
        "data-testid": `${r}--generate-summary`,
        title: t("webdoxAI.dataExtraction.contractSummaryGeneration.title"),
        description: t("webdoxAI.dataExtraction.contractSummaryGeneration.description"),
        Icon: p,
        onClick: () => o("summary"),
        service: "brain",
        overrides: a,
        disabled: i
      }
    ),
    /* @__PURE__ */ e(
      m,
      {
        "data-testid": `${r}--generate-inform`,
        title: t("webdoxAI.dataExtraction.contractReportGeneration.title"),
        description: t("webdoxAI.dataExtraction.contractReportGeneration.description"),
        onClick: () => o("report"),
        Icon: c,
        service: "brain",
        overrides: a,
        disabled: i
      }
    )
  ] });
};
export {
  D as SummaryTypeSelectionStep
};
//# sourceMappingURL=summary-type-selection-step.js.map
