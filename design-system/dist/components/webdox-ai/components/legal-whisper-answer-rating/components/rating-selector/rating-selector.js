import { jsxs as d, jsx as r } from "react/jsx-runtime";
import { forwardRef as S, useState as f, useMemo as h } from "react";
import { Star as u, StarFilled as I } from "@carbon/icons-react";
import "../../../../../button/button.js";
import { IconButton as R } from "../../../../../button/variants/icon-button/icon-button.js";
import { COMMON_HEIGHT_44 as p } from "../../../../../../constants/common.constants.js";
import "../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../themes/v3/light/theme.js";
import "../../../../../../themes/v3/dark/theme.js";
import "../../../../../../themes/utilities.js";
import "baseui/modal";
import "baseui";
import "../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../modal/regular-modal.js";
import "../../../../../modal/sectioned-modal.js";
import "../../../../../spinner/full-spinner/full-spinner-context.js";
import { Text as g } from "../../../../../text/text.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as x } from "../../../../../utils/i18n/utils.js";
import { RATING_VALUES_ARRAY as A, RATING_DESCRIPTION_WIDTH as y } from "../../legal-whisper-answer-rating.constants.js";
import { styles as T } from "./rating-selector.styles.js";
import { StyledContainer as _ } from "./styled-components/styled-container.js";
import { StyledIconsContainer as C } from "./styled-components/styled-icons-container.js";
const M = S(
  function({ "data-testid": i, value: o, onChange: s }, a) {
    const [e, m] = f(0), { t: n } = x(), c = h(() => {
      const t = o || e;
      return t ? n(`webdoxAI.legalWhisperAnswerRating.ratingDescription.value${t}`) : "";
    }, [n, o, e]);
    return /* @__PURE__ */ d(_, { ref: a, children: [
      /* @__PURE__ */ r(C, { children: A.map((t) => {
        const l = o < t ? u : I;
        return /* @__PURE__ */ r(
          R,
          {
            "data-testid": `${i}--rating-value-${t}`,
            size: "56px",
            onMouseEnter: () => m(t),
            onMouseLeave: () => m(0),
            shape: "circle",
            onClick: () => s(t),
            children: /* @__PURE__ */ r(
              l,
              {
                size: p,
                style: T.iconStyles
              }
            )
          },
          t
        );
      }) }),
      /* @__PURE__ */ r(
        g,
        {
          "data-testid": `${i}--rating-description`,
          variant: "bodySmall",
          color: "neutralSubdued",
          maxWidth: y,
          margin: 0,
          textAlign: "center",
          height: p,
          children: c
        }
      )
    ] });
  }
);
M.displayName = "RatingSelector";
export {
  M as RatingSelector
};
//# sourceMappingURL=rating-selector.js.map
