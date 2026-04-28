import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { ChevronLeft as d } from "@carbon/icons-react";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as u } from "../../../../../utils/i18n/utils.js";
import { useDateUtilsWithLocale as f } from "../../../../../utils/hooks/use-date-util-with-locale.js";
import { ActionIconButton as C } from "../../../action-icon-button/action-icon-button.js";
import { CopyToClipboardButton as y } from "../../../copy-to-clipboard-button/copy-to-clipboard-button.js";
import { StyledBaseParagraphText as h } from "../../../styled-base-paragraph-text/styled-base-paragraph-text.js";
import { StyledContractSummaryFooter as x, StyledActionButtonsContainer as e } from "./contract-summary-footer.styles.js";
const W = ({
  "data-testid": o,
  contractSummary: i,
  contractSummaryUpdatedAt: n,
  summaryClipboardItem: m,
  zIndex: p,
  onClickBack: a,
  onContractSummaryCopy: c
}) => {
  const { t: l } = u(), { formatDateAsText: s } = f();
  return /* @__PURE__ */ r(x, { children: [
    /* @__PURE__ */ r(e, { children: [
      /* @__PURE__ */ t(
        C,
        {
          tooltipContent: l("general.goBack"),
          Icon: /* @__PURE__ */ t(d, {}),
          onClick: a,
          dataTestId: `${o}--back`
        }
      ),
      /* @__PURE__ */ t(h, { color: "neutralDepressed", children: s(n, !0) })
    ] }),
    /* @__PURE__ */ t(e, { children: /* @__PURE__ */ t(
      y,
      {
        "data-testid": `${o}--copy`,
        value: m,
        tooltipProps: { content: void 0 },
        zIndex: p,
        onCopy: () => c(i)
      }
    ) })
  ] });
};
export {
  W as ContractSummaryFooter
};
//# sourceMappingURL=contract-summary-footer.js.map
