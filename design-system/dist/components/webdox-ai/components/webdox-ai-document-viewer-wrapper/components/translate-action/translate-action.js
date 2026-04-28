import { jsx as t } from "react/jsx-runtime";
import { useRef as f } from "react";
import { Language as u } from "@carbon/icons-react";
import { Button as l } from "../../../../../button/button.js";
import "../../../../../button/variants/icon-button/icon-button.js";
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
import "../../../../../menu/stateful-menu/stateful-menu.js";
import "baseui/menu";
import "../../../../../menu/stateless-menu/stateless-menu.overrides.js";
import { Menu as g } from "../../../../../menu/menu.js";
import { Popover as h } from "../../../../../popover/popover.js";
import "baseui/popover";
import "../../../../../popover/popover.styles.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as v } from "../../../../../utils/i18n/utils.js";
import { useTranslateActionLanguages as x } from "../../hooks/use-translate-action-languages.hook.js";
import { getButtonOverrides as B } from "../../webdox-ai-document-viewer-wrapper.styles.js";
const tt = ({
  "data-testid": o = "translate-action",
  $isFirstChild: m,
  $isLastChild: e,
  disabled: p,
  onTranslate: n,
  zIndex: a
}) => {
  const { t: s } = v(), { languages: c } = x(), r = f(), { current: { offsetWidth: i } = { offsetWidth: void 0 } } = r;
  return /* @__PURE__ */ t(
    h,
    {
      placement: "bottom",
      popoverMargin: 0,
      overrides: {
        Body: {
          style: {
            minWidth: i ? `${i}px` : "unset",
            zIndex: a
          }
        }
      },
      content: /* @__PURE__ */ t(
        g,
        {
          dataTestId: `${o}__menu`,
          items: c,
          onItemSelect: ({ item: d }) => n(d)
        }
      ),
      children: /* @__PURE__ */ t(
        l,
        {
          "data-testid": o,
          disabled: p,
          ref: r,
          kind: "action-brain",
          size: "32px",
          endEnhancer: /* @__PURE__ */ t(u, {}),
          overrides: B({ $isFirstChild: m, $isLastChild: e }),
          children: s("general.translate")
        }
      )
    }
  );
};
export {
  tt as TranslateAction
};
//# sourceMappingURL=translate-action.js.map
