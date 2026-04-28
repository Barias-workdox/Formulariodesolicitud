import { jsxs as r, jsx as i } from "react/jsx-runtime";
import { Spinner as a } from "../../../../../../../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../../modal/regular-modal.js";
import "../../../../../../../modal/sectioned-modal.js";
import "../../../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as m } from "../../../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as p } from "../../../../../../../utils/i18n/utils.js";
import { useCss as n } from "../../../../../../../utils/hooks/use-css.js";
import { TextRotator as d } from "../../../../../text-rotator/text-rotator.js";
import { StyledContainer as s } from "./styled-components/styled-container.js";
const W = () => {
  const { t } = p(), { theme: o } = n(), e = [
    t("webdoxAI.metadataDescriptiveLoading.text1"),
    t("webdoxAI.metadataDescriptiveLoading.text2"),
    t("webdoxAI.metadataDescriptiveLoading.text3"),
    t("webdoxAI.metadataDescriptiveLoading.text4"),
    t("webdoxAI.metadataDescriptiveLoading.text5"),
    t("webdoxAI.metadataDescriptiveLoading.text6")
  ];
  return /* @__PURE__ */ r(s, { children: [
    /* @__PURE__ */ i("span", { children: /* @__PURE__ */ i(
      a,
      {
        size: "sm",
        color: "power"
      }
    ) }),
    /* @__PURE__ */ i(
      m,
      {
        variant: "bodySmall",
        color: "neutralSubdued",
        margin: 0,
        fontWeight: 500,
        marginTop: o.spacing.spacingXs,
        children: t("webdoxAI.metadataDescriptiveLoading.title")
      }
    ),
    /* @__PURE__ */ i(
      d,
      {
        texts: e,
        align: "center"
      }
    )
  ] });
};
export {
  W as MetadataDescriptiveLoading
};
//# sourceMappingURL=metadata-descriptive-loading.js.map
