import { jsx as a, jsxs as e } from "react/jsx-runtime";
import { useCss as i } from "../../../utils/hooks/use-css.js";
import { ContractSummary as m } from "../../components/contract-summary/contract-summary.js";
import { DataExtraction as n } from "../../components/data-extraction/data-extraction.js";
import { DataExtractionBeta as c } from "../../components/data-extraction/components/data-extraction-beta/data-extraction-beta.js";
import { styles as l } from "./assistant-metadata-controller.styles.js";
const u = (t) => {
  const { wrapperStyles: r, bodyStyles: o } = i(l), { isDataExtractionEnabled: s } = t;
  return /* @__PURE__ */ a("article", { className: r, children: /* @__PURE__ */ e("section", { className: o, children: [
    /* @__PURE__ */ a(m, { ...t }),
    s ? /* @__PURE__ */ a(
      n,
      {
        ...t,
        "data-testid": "data-extraction-form"
      }
    ) : /* @__PURE__ */ a(c, { ...t })
  ] }) });
};
export {
  u as AssistantMetadataController
};
//# sourceMappingURL=assistant-metadata.controller.js.map
