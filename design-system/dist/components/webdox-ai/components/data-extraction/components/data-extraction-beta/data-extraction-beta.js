import { jsx as i, Fragment as f, jsxs as A } from "react/jsx-runtime";
import { useState as u, useEffect as h } from "react";
import { SectionedCard as M } from "../../../../../layouts/cards/sectioned-card/sectioned-card.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "../../../../../layouts/title-layout/title-layout.styles.js";
import { POPOVER_Z_INDEX as $ } from "../../../../../popover/popover.constants.js";
import { Select as B } from "../../../../../select/select.js";
import { Tag as j } from "../../../../../tag/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as k } from "../../../../../utils/i18n/utils.js";
import { DataExtractionBetaLabel as w } from "./components/data-extraction-beta-label/data-extraction-beta-label.js";
import { DataExtractionBetaTitle as z } from "./components/data-extraction-beta-title/data-extraction-beta-title.js";
import { FormMetadataListItem as F } from "./components/form-metadata-list-item/form-metadata-list-item.js";
import { MetadataDescriptiveLoading as H } from "./components/metadata-descriptive-loading/metadata-descriptive-loading.js";
import { useSectionedCardOverrides as K, selectOverrides as N } from "./data-extraction-beta.overrides.js";
import { mapMetadataMode as g, mapMetadataListValue as x, inlineInputToggle as P, resetValues as R } from "./data-extraction-beta.utils.js";
const xo = ({
  "data-testid": t,
  contractKind: b,
  contractKinds: v,
  isContractKindLoading: E,
  isMetadataLoading: p,
  isPreparingMetadata: s,
  metadataList: r,
  onContractKindChange: C,
  onMetadataItemChange: T,
  zIndex: S
}) => {
  const [y, d] = u(g(r)), [n, m] = u(x(r));
  h(() => {
    d(g(r));
  }, [r]), h(() => {
    m(x(r));
  }, [r]);
  const { t: c } = k(), { getSectionedCardOverrides: O } = K(), a = (o) => {
    d((e) => ({
      // reset all prevModes
      ...R({ prevMode: e, metadataList: r, localValues: n }),
      [o]: P(e[o])
    }));
  }, V = (o, e) => {
    m((l) => ({
      ...l,
      [o]: e
    }));
  }, _ = (o) => {
    T({ ...o, value: n[o.id] }), a(o.id);
  }, D = (o) => {
    if (Array.isArray(o)) {
      const [e] = o;
      C(e);
    }
  };
  return /* @__PURE__ */ i(f, { children: /* @__PURE__ */ i(
    M,
    {
      overrides: O({ fullHeight: s }),
      title: /* @__PURE__ */ i(
        z,
        {
          zIndex: S,
          "data-testid": `${t}__title`
        }
      ),
      headerEnhancer: /* @__PURE__ */ i(
        j,
        {
          kind: "accent",
          variant: "overlay",
          children: c("general.betaVersion")
        }
      ),
      children: s ? /* @__PURE__ */ i(H, {}) : /* @__PURE__ */ A(f, { children: [
        /* @__PURE__ */ i(w, { children: c("webdoxAI.dataExtraction.contractType") }),
        /* @__PURE__ */ i(
          B,
          {
            "data-testid": `${t}--contract-kind-select`,
            id: "contract-type-selector",
            placeholder: c("webdoxAI.dataExtraction.contractType"),
            value: b,
            options: v,
            disabled: E || p,
            onChange: D,
            size: "mini",
            zIndex: $,
            overrides: N
          }
        ),
        r.map((o) => {
          const e = y[o.id];
          return /* @__PURE__ */ i(
            F,
            {
              "data-testid": `${t}__${o.id}`,
              captionText: o.value ?? "",
              disabled: p,
              inputText: n[o.id] ?? "",
              label: o.label,
              mode: e,
              onChange: (l) => V(o.id, l),
              onSubmit: () => _(o),
              onToggle: () => a(o.id)
            },
            o.id
          );
        })
      ] })
    }
  ) });
};
export {
  xo as DataExtractionBeta
};
//# sourceMappingURL=data-extraction-beta.js.map
