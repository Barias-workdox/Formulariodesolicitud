import { jsxs as o, jsx as t } from "react/jsx-runtime";
import { FileIcon as y } from "../../../../../../file-icon/file-icon.js";
import "react";
import "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import { Text as s } from "../../../../../../text/text.js";
import "baseui/tooltip";
import { useCss as v } from "../../../../../../utils/hooks/use-css.js";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "../../../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../../../modal/regular-modal.js";
import "../../../../../../modal/sectioned-modal.js";
import "../../../../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as S } from "../../../../../../utils/i18n/utils.js";
import "../../../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../../../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../../../select/next/components/select-dropdown-container.js";
import "../../../../../../select/next/components/select-optgroup-header.js";
import "../../../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../../../color-picker/next/color-picker.js";
import { DynamicFormControl as g } from "../../../../../../forms/components/dynamic-form-control/dynamic-form-control.js";
import "../../../../../../checkbox/checkbox.js";
import "../../../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../../../avatar/avatar.styles.js";
import "../../../../../../input/input.js";
import { TitleLayout as C } from "../../../../../../layouts/title-layout/title-layout.js";
import "../../../../../../layouts/title-layout/title-layout.styles.js";
import "../../../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../../../tag/next/tag.styled-components.js";
import { Tag as D } from "../../../../../../tag/tag.js";
import { StatefulTooltip as c } from "../../../../../../tooltip/stateful-tooltip.js";
import { useDateUtilsWithLocale as T } from "../../../../../../utils/hooks/use-date-util-with-locale.js";
import { getDocumentVersion as N } from "../../../utils/document-version.js";
import { CollapsibleInfo as k } from "../collapsible-info/collapsible-info.js";
import { StatusIcon as w } from "../status-icon/status-icon.js";
import { styles as r, checkboxOverrides as $ } from "./checkbox-form.styles.js";
const Rt = ({
  "data-testid": i,
  document: m,
  status: e
}) => {
  const {
    index: d,
    fileExt: f,
    name: p,
    officeDocumentVersion: { versionNumber: u },
    updatedAt: n
  } = m, { elementContainerStyles: h, elementStyles: x, infoStyles: b } = v(r), { t: a } = S(), { formatDateAsText: l } = T();
  return /* @__PURE__ */ o("div", { className: h, children: [
    /* @__PURE__ */ o("div", { className: x, children: [
      /* @__PURE__ */ t(
        g,
        {
          "data-testid": `${i}__checkbox`,
          controlKind: "checkbox",
          name: `documents.${d}.value`,
          formControlOverrides: $,
          children: /* @__PURE__ */ t(
            C,
            {
              startEnhancer: /* @__PURE__ */ t(
                y,
                {
                  fileExtension: f,
                  height: "20px",
                  width: "20px"
                }
              ),
              titleText: /* @__PURE__ */ t(
                c,
                {
                  showArrow: !0,
                  placement: "bottom",
                  content: p,
                  children: /* @__PURE__ */ t(
                    s,
                    {
                      variant: "body",
                      margin: 0,
                      fontWeight: "500",
                      $style: r.textStyles(),
                      children: p
                    }
                  )
                }
              ),
              subtitleText: /* @__PURE__ */ t(
                c,
                {
                  showArrow: !0,
                  placement: "bottom",
                  content: a("contractNegotiationCollaboration.updatedOnDate", {
                    date: l(n, !0)
                  }),
                  children: /* @__PURE__ */ t(
                    s,
                    {
                      variant: "bodySmall",
                      margin: 0,
                      color: "neutralSubdued",
                      $style: r.textStyles(),
                      children: a("contractNegotiationCollaboration.updatedOnDate", {
                        date: l(n, !0)
                      })
                    }
                  )
                }
              )
            }
          )
        }
      ),
      /* @__PURE__ */ o("div", { className: b, children: [
        /* @__PURE__ */ t(
          w,
          {
            "data-testid": `${i}__status-icon`,
            status: e
          }
        ),
        /* @__PURE__ */ t(
          D,
          {
            kind: "primary",
            variant: "overlay",
            children: N(u)
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ t(
      k,
      {
        document: m,
        status: e
      }
    )
  ] });
};
export {
  Rt as CheckboxForm
};
//# sourceMappingURL=checkbox-form.js.map
