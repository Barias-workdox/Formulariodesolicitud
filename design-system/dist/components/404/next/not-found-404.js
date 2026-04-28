import { jsxs as m, jsx as t } from "react/jsx-runtime";
import { CloudServiceManagement as a, Undo as p } from "@carbon/icons-react";
import { Link as d } from "react-router-dom";
import { BackgroundIcon as s } from "../../background-icon/background-icon.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../utils/i18n/utils.js";
import { useCss as l } from "../../utils/hooks/use-css.js";
import { Button as u } from "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import { Text as i } from "../../text/text.js";
import { BACKGROUND_ICON_SIZE as I, ICON_SIZE as h, TITLE_MARGIN as T, TITLE_FONT_WEIGHT as _, DESCRIPTION_MARGIN as f, ACTION_BUTTON_SIZE as N } from "./not-found-404.constants.js";
import { StyledWrapper as C } from "./not-found-404.styles.js";
const r = "not-found-404", J = ({ actionButtonLink: n = "/" }) => {
  const { t: o } = c(), { theme: e } = l();
  return /* @__PURE__ */ m(C, { "data-testid": r, children: [
    /* @__PURE__ */ t(
      s,
      {
        shape: "square",
        backgroundColor: "neutralWashed",
        size: I,
        children: /* @__PURE__ */ t(
          a,
          {
            size: h,
            color: e.colors.neutralSubdued
          }
        )
      }
    ),
    /* @__PURE__ */ t(
      i,
      {
        variant: "h1",
        fontWeight: _,
        color: "contentPrimary",
        margin: T,
        children: o("404.title")
      }
    ),
    /* @__PURE__ */ t(
      i,
      {
        variant: "h2",
        color: "neutralSubdued",
        textAlign: "center",
        margin: f,
        children: o("404.description")
      }
    ),
    /* @__PURE__ */ t(
      d,
      {
        "data-testid": `${r}__action-link`,
        to: n,
        style: { textDecoration: "none" },
        children: /* @__PURE__ */ t(
          u,
          {
            "data-testid": `${r}__action-button`,
            size: "44px",
            startEnhancer: /* @__PURE__ */ t(p, { size: N }),
            children: o("404.actionButton")
          }
        )
      }
    )
  ] });
};
export {
  J as NotFound404
};
//# sourceMappingURL=not-found-404.js.map
