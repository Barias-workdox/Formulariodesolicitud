import { jsx as o } from "react/jsx-runtime";
import { useMemo as l } from "react";
import { StatefulTooltipNext as d } from "../../../../../../../../tooltip-next/stateful-tooltip-next/stateful-tooltip-next.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as h } from "../../../../../../../../utils/i18n/utils.js";
import { noop as w } from "../../../../../../../../../utils/noop.js";
import { StyledContainer as A } from "./styled-components/styled-container.js";
import { StyledRangeItem as S } from "./styled-components/styled-range-item.js";
const q = ({
  dataTestId: i = "answer-references",
  children: m,
  disabled: n = !1,
  selectedReference: r,
  updateSelectedAnswerReference: e = w,
  zIndex: s
}) => {
  const { t: a } = h(), c = l(() => {
    try {
      return JSON.parse(String(m)).references || [];
    } catch {
      return [];
    }
  }, [m]);
  return /* @__PURE__ */ o(
    d,
    {
      content: a("webdoxAI.chat.references"),
      showArrow: !0,
      placement: "top",
      zIndex: s,
      children: /* @__PURE__ */ o(A, { "data-testid": i, children: c.map((p) => {
        const { position: t, id: f } = p, u = (r == null ? void 0 : r.id) === f;
        return /* @__PURE__ */ o(
          S,
          {
            $isActive: u,
            $disabled: n,
            "data-testid": `${i}-reference-${t}`,
            onClick: () => !n && e(p),
            children: t
          },
          t
        );
      }) })
    }
  );
};
export {
  q as AnswerReferences
};
//# sourceMappingURL=answer-references.js.map
