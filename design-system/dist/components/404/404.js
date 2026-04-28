import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { DataError as l } from "@carbon/icons-react";
import { Link as d } from "react-router-dom";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as g } from "../utils/i18n/utils.js";
import { BackgroundIcon as u } from "../background-icon/background-icon.js";
import { Button as h } from "../button/button.js";
import "../button/variants/icon-button/icon-button.js";
import "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { useCss as f } from "../utils/hooks/use-css.js";
import "react";
import "baseui/modal";
import "baseui";
import "../modal/components/modal-close-button/modal-close-button.js";
import "../modal/regular-modal.js";
import "../modal/sectioned-modal.js";
import "../spinner/full-spinner/full-spinner-context.js";
import { Text as i } from "../text/text.js";
const x = {
  pageStyles: (e, { bgImagePath: r }) => ({
    background: `url("${r}") no-repeat center`
  }),
  wrapperStyles: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    flexDirection: "column",
    maxWidth: "300px",
    textAlign: "center",
    margin: "auto"
  },
  linkStyles: {
    textDecoration: "none"
  }
}, n = "not-found-404", J = ({
  actionButtonLink: e = "/",
  bgImagePath: r
}) => {
  const { pageStyles: m, wrapperStyles: s, linkStyles: p, theme: a } = f(x, { bgImagePath: r }), { t: o } = g();
  return /* @__PURE__ */ t(
    "div",
    {
      "data-testid": n,
      className: m,
      children: /* @__PURE__ */ c("div", { className: s, children: [
        /* @__PURE__ */ t(
          u,
          {
            shape: "round",
            backgroundColor: "sweetWashed",
            iconColor: "sweetStrong",
            Icon: l,
            size: "56px"
          }
        ),
        /* @__PURE__ */ t(
          i,
          {
            variant: "h1",
            fontWeight: "700",
            color: "contentPrimary",
            marginTop: a.spacing.spacingMd,
            marginBottom: 0,
            children: o("404.title")
          }
        ),
        /* @__PURE__ */ t(
          i,
          {
            variant: "h2",
            fontWeight: "500",
            color: "contentPrimary",
            margin: 0,
            children: o("404.subtitle")
          }
        ),
        /* @__PURE__ */ t(
          i,
          {
            variant: "bodySmall",
            fontWeight: "400",
            color: "neutralSubdued",
            textAlign: "center",
            margin: `${a.spacing.spacingMd} 0`,
            children: o("404.description")
          }
        ),
        /* @__PURE__ */ t(
          d,
          {
            "data-testid": `${n}__action-link`,
            to: e,
            className: p,
            children: /* @__PURE__ */ t(h, { "data-testid": `${n}__action-button`, children: o("404.actionButton") })
          }
        )
      ] })
    }
  );
};
export {
  J as NotFound404
};
//# sourceMappingURL=404.js.map
