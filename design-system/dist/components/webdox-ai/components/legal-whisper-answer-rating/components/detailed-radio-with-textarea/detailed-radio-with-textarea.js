import { jsx as r, jsxs as d } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { useAutoAnimate as n } from "@formkit/auto-animate/react";
import { TextareaControl as l } from "../../../../../forms/components/textarea-control/textarea-control.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "react-hook-form";
import "baseui/form-control";
import { mergeOverridesDeep as f } from "../../../../../utils/baseui/helpers.js";
import "@carbon/icons-react";
import { Text as x } from "../../../../../text/text.js";
import "baseui";
import "baseui/tooltip";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/utilities.js";
import "baseui/checkbox";
import "../../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "baseui/input";
import "lodash";
import "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../../../utils/i18n/utils.js";
import "../../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../../input/next/input.overrides.js";
import "../../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../../select/next/components/select-dropdown-container.js";
import "../../../../../select/next/components/select-optgroup-header.js";
import "../../../../../radio/radio-group.js";
import "baseui/radio";
import { DetailedRadio as h } from "../../../../../radio/components/detailed-radio/detailed-radio.js";
import "../../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../../color-picker/next/color-picker.js";
import "../../../../../checkbox/checkbox.js";
import "../../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../../avatar/avatar.styles.js";
import "../../../../../input/input.js";
import "../../../../../layouts/title-layout/title-layout.styles.js";
import "../../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../../tag/next/tag.styled-components.js";
import { MAX_OBSERVATIONS_MESSAGE_LENGHT as u } from "../../legal-whisper-answer-rating.constants.js";
import { detailedRadioWithTextareaOverrides as v, detailedRadioOverrides as R, textareaOverrides as T } from "../../legal-whisper-answer-rating.styles.js";
import "../../styled-components/styled-container.js";
import "../../styled-components/styled-body.js";
import "../../styled-components/styled-footer.js";
import "../../styled-components/styled-title-container.js";
import { StyledRadioDescriptionWithTextarea as A } from "../../styled-components/styled-radio-description-with-textarea.js";
import "../../styled-components/styled-quotes-container.js";
import "../../styled-components/styled-radio-description-container.js";
import "../../styled-components/styled-success-message-container.js";
import "../../styled-components/styled-success-message-options-container.js";
const Kr = ({
  "data-testid": t,
  showObservationTextarea: i,
  description: o,
  ...m
}) => {
  const [p] = n(), { t: e } = c(), a = s(() => f(R, v), []);
  return /* @__PURE__ */ r(
    h,
    {
      ...m,
      overrides: a,
      "data-testid": t,
      description: /* @__PURE__ */ d(A, { ref: p, children: [
        /* @__PURE__ */ r(
          x,
          {
            variant: "bodySmall",
            margin: 0,
            color: "neutralSubdued",
            children: o
          }
        ),
        i && /* @__PURE__ */ r(
          l,
          {
            overrides: T,
            name: "observations",
            kind: "white",
            isBorderless: !0,
            placeholder: e("webdoxAI.legalWhisperAnswerRating.observationsPlaceholder"),
            maxLength: u
          }
        )
      ] })
    }
  );
};
export {
  Kr as DetailedRadioWithTextarea
};
//# sourceMappingURL=detailed-radio-with-textarea.js.map
