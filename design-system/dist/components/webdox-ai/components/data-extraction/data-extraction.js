import { jsxs as p, jsx as o, Fragment as N } from "react/jsx-runtime";
import { useMemo as C } from "react";
import { Button as A } from "../../../button/button.js";
import "../../../button/variants/icon-button/icon-button.js";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import "../../../../themes/v3/light/theme.js";
import "../../../../themes/v3/dark/theme.js";
import "../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../modal/regular-modal.js";
import "../../../modal/sectioned-modal.js";
import "../../../spinner/full-spinner/full-spinner-context.js";
import "@carbon/icons-react";
import { Notification as u } from "../../../notification/next/notification.js";
import { Text as D } from "../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as S } from "../../../utils/i18n/utils.js";
import { usePlanUsage as b } from "../../hooks/plan-usage.hook.js";
import { ReactComponent as T } from "../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { UsagePlanCounter as I } from "../plan-usage/plan-usage-counter.js";
import { MetadataDescriptiveLoading as _ } from "./components/data-extraction-beta/components/metadata-descriptive-loading/metadata-descriptive-loading.js";
import { DataExtractionListItem as w } from "./components/data-extraction-list-item/data-extraction-list-item.js";
import { METADATA_TYPES as P } from "./data-extraction.constants.js";
import { StyledDataExtractionContainer as L } from "./data-extraction.styles.js";
import { isDocumentMetadata as M } from "./data-extraction.utils.js";
import { StyledContainer as U } from "./styled-components/styled-container.js";
import { StyledHeader as j } from "./styled-components/styled-header.js";
import { StyledContent as B } from "./styled-components/styled-content.js";
import { StyledDataExtractionPlanCounter as H } from "./styled-components/styled-data-extraction-plan-counter.js";
const At = ({
  "data-testid": y,
  contractKinds: s,
  isMetadataLoading: f,
  isPreparingMetadata: e,
  metadataList: l,
  onDataExtractionHighlight: d,
  onGoToClassificationButtonClick: h,
  onGoToEntitiesDirectoryClick: k
}) => {
  const { t: n } = S(), { availablePlans: g, isPlanUsageActive: x } = b(), c = C(() => {
    const r = [], m = [], i = [];
    return l.forEach((t) => {
      if (M(t) && P.includes(t.dataType) && (t.keyName === "amount" && i.push({ key: t.keyName, values: [t] }), (t.keyName === "start_date" || t.keyName === "end_date") && i.push({ key: t.keyName, values: [t] }), t.keyName === "counterparty" && m.push(t), t.keyName === "party" && r.push(t), t.keyName === "contract_type")) {
        const a = s.find((E) => E.value === t.value);
        i.push({
          key: t.keyName,
          values: [{ ...t, value: String((a == null ? void 0 : a.label) ?? "-") }]
        });
      }
    }), r.length > 0 && i.push({
      key: "party",
      values: r
    }), m.length > 0 && i.push({
      key: "counterparty",
      values: m
    }), i;
  }, [l, s]), v = c.length === 0;
  return /* @__PURE__ */ p(L, { children: [
    e && /* @__PURE__ */ o(
      u,
      {
        description: n("webdoxAI.dataExtraction.metadataAreLoadingMsg"),
        Icon: T,
        kind: "warning"
      }
    ),
    /* @__PURE__ */ p(U, { $fullHeight: e, children: [
      x && /* @__PURE__ */ o(H, { children: /* @__PURE__ */ o(
        I,
        {
          availablePlans: g,
          planName: "data_extraction"
        }
      ) }),
      /* @__PURE__ */ p(j, { children: [
        /* @__PURE__ */ o(
          D,
          {
            variant: "body",
            margin: 0,
            fontWeight: "700",
            color: "neutralStrong",
            children: n("webdoxAI.dataExtraction.dataExtractionTitle")
          }
        ),
        /* @__PURE__ */ o(
          A,
          {
            kind: "secondary",
            size: "32px",
            onClick: h,
            children: n("webdoxAI.dataExtraction.goToClassification")
          }
        )
      ] }),
      /* @__PURE__ */ o(B, { children: e ? /* @__PURE__ */ o(_, {}) : /* @__PURE__ */ p(N, { children: [
        v && /* @__PURE__ */ o(
          u,
          {
            description: n("webdoxAI.dataExtraction.metadataListIsEmpty"),
            kind: "negative"
          }
        ),
        [...c].map((r) => /* @__PURE__ */ o(
          w,
          {
            "data-testid": `${y}__list-item`,
            keyName: r.key,
            metadataItem: r.values,
            isDisabled: f || e,
            onGoToEntitiesDirectoryClick: k,
            handleClick: d
          },
          r.key
        ))
      ] }) })
    ] })
  ] });
};
export {
  At as DataExtraction
};
//# sourceMappingURL=data-extraction.js.map
