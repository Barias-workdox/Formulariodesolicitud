import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { NotebookReference as g, SearchLocate as S, Information as v } from "@carbon/icons-react";
import { isNil as u } from "lodash";
import "../../../../../button/button.js";
import { IconButton as f } from "../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as x } from "../../../../../text/text.js";
import { StatefulTooltipNext as s } from "../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as D } from "../../../../../utils/i18n/utils.js";
import { useDateUtilsWithLocale as b } from "../../../../../utils/hooks/use-date-util-with-locale.js";
import { DATA_EXTRACTION_LIST_ITEM_TOOLTIP_Z_INDEX as m, HIGHTLIGHTED_AVAILABLE_METADATA as L, METADATA_EMPTY_VALUE as $, DEFAULT_CURRENCY as C } from "./data-extraction-list-item.constants.js";
import { StyledDataExtractionListItemContainer as z, StyledDataExtractionListContent as V, StyledDataExtractionListContentRow as h, StyledInformationPlaceholder as M } from "./data-extraction-list-item.styles.js";
const pt = ({
  "data-testid": I,
  keyName: r,
  metadataItem: p,
  isDisabled: o,
  handleClick: A,
  onGoToEntitiesDirectoryClick: y
}) => {
  const { t: i } = D(), { dateWithoutTimezoneOffset: T, formatDateAsText: w } = b(), E = (a) => {
    const { value: t, dataType: l, extras: c } = a;
    if (o || u(t) || u(l))
      return $;
    switch (l) {
      case "date": {
        if (typeof t == "string")
          try {
            const n = T(t);
            return w(n.toISOString());
          } catch (n) {
            console.error(`Invalid date value: ${t}`, n);
          }
        return "-";
      }
      case "money":
        return typeof t == "string" && t !== "" ? `${(c == null ? void 0 : c.currency) ?? C} ${t}` : "-";
      case "ref":
      case "string":
        return typeof t == "string" || typeof t == "number" ? t : (console.error(`Invalid value for string attributes: ${t}`), "-");
      default:
        return console.warn(
          `Unhandled attribute type: "${l}" with value: "${t}". Defaulting to simple text.`
        ), "value";
    }
  };
  return /* @__PURE__ */ e(z, { "data-testid": I, children: /* @__PURE__ */ d(V, { children: [
    /* @__PURE__ */ d(h, { children: [
      /* @__PURE__ */ e(
        x,
        {
          variant: "upperDetails",
          color: "neutralSubdued",
          fontWeight: 400,
          $style: { textTransform: "uppercase", letterSpacing: "1px" },
          children: i(`webdoxAI.dataExtraction.metadata.${r}`)
        }
      ),
      (r === "counterparty" || r === "party") && /* @__PURE__ */ e(
        s,
        {
          content: i("webdoxAI.dataExtraction.viewEntitiesDirectory", {
            metadataValue: i(
              `webdoxAI.dataExtraction.metadata.${r}${p.length > 1 ? "_plural" : ""}`
            ).toLowerCase()
          }),
          showArrow: !0,
          placement: "left",
          zIndex: m,
          children: /* @__PURE__ */ e(
            f,
            {
              "data-testid": "data-extraction-list-item__view-entities-directory--button",
              kind: "control",
              size: "24px",
              disabled: o,
              onClick: y,
              children: /* @__PURE__ */ e(g, {})
            }
          )
        }
      )
    ] }),
    p.map((a) => /* @__PURE__ */ d(h, { children: [
      /* @__PURE__ */ e(
        x,
        {
          variant: "bodySmall",
          color: "neutralStrong",
          fontWeight: 500,
          as: "div",
          textOverflow: "ellipsis",
          overflow: "hidden",
          $style: { letterSpacing: "1px" },
          children: E(a)
        }
      ),
      L.includes(r) ? /* @__PURE__ */ e(
        s,
        {
          content: i("webdoxAI.dataExtraction.localizeDataInDocument"),
          showArrow: !0,
          placement: "left",
          zIndex: m,
          children: /* @__PURE__ */ e(
            f,
            {
              "data-testid": "data-extraction-list-item__localize-data--button",
              kind: "tertiary",
              size: "24px",
              disabled: o,
              onClick: () => A(a),
              children: /* @__PURE__ */ e(S, {})
            }
          )
        }
      ) : /* @__PURE__ */ e(
        s,
        {
          content: i("webdoxAI.dataExtraction.metadaDataByContextMsg"),
          showArrow: !0,
          placement: "left",
          zIndex: m,
          children: /* @__PURE__ */ e(
            M,
            {
              "data-testid": "data-extraction-list-item__view-entities-directory--button",
              "aria-disabled": o,
              $isDisabled: o,
              children: /* @__PURE__ */ e(v, {})
            }
          )
        }
      )
    ] }, `metadata-list-${r}`))
  ] }) });
};
export {
  pt as DataExtractionListItem
};
//# sourceMappingURL=data-extraction-list-item.js.map
