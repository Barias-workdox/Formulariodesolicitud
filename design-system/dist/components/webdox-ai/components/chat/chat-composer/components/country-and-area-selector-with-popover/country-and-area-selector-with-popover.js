import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { useState as j } from "react";
import { z as o } from "zod";
import { Footer as f } from "../../../../../../footer/footer.container.js";
import { FormProvider as x } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import "../../../../../../text/text.js";
import "baseui/tooltip";
import "../../../../../../../themes/v3/light/theme.js";
import "../../../../../../../themes/v3/dark/theme.js";
import "../../../../../../../themes/v3/tokens/typography.js";
import "../../../../../../../themes/v3/tokens/breakpoints.js";
import "../../../../../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import { noop as y } from "../../../../../../../utils/noop.js";
import "lodash";
import "../../../../../../button/button.js";
import "../../../../../../button/variants/icon-button/icon-button.js";
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
import { useTranslation as L } from "../../../../../../utils/i18n/utils.js";
import "../../../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../../../input/next/input.overrides.js";
import { useForm as F } from "../../../../../../forms/hooks/use-form.js";
import "baseui/checkbox";
import { useCountryCodeOptions as P } from "../../../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../../../select/next/components/select-dropdown-container.js";
import "../../../../../../select/next/components/select-optgroup-header.js";
import { SelectControlContainer as b } from "../../../../../../forms/components/select/select-control-container.js";
import "../../../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../../../color-picker/next/color-picker.js";
import "../../../../../../checkbox/checkbox.js";
import "../../../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../../../avatar/avatar.styles.js";
import "../../../../../../input/input.js";
import "../../../../../../layouts/title-layout/title-layout.styles.js";
import "../../../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../../../tag/next/tag.styled-components.js";
import { Header as _ } from "../../../../../../header/header.container.js";
import "../../../../../../popover/popover.styles.js";
import { StatelessPopover as z } from "../../../../../../popover/stateless-popover.js";
import { getCountryAndAreaValueLabel as B, getSelectorCountryOptionLabel as h } from "../../../../../utils/legal-whisper-selector.util.js";
import { InputSelector as V } from "../input-selector/input-selector.js";
import { StyledBody as q } from "./styled-components/styled-body.js";
import { StyledPopoverContent as $ } from "./styled-components/styled-popover-content.js";
const mo = ({
  dataTestId: n = "country-and-area-selector-with-popover",
  zIndex: i,
  onCountryChange: g = y,
  onAreaChange: S = y,
  selectedArea: a,
  selectedCountry: l,
  countryOptions: A,
  areaOptions: C = []
}) => {
  const { t: e } = L(), O = P(A, { sort: "asc" }), m = F({
    resolverType: "zod",
    defaultValues: {
      country: l,
      area: a
    },
    schema: o.object({
      country: o.array(o.object({ id: o.any(), label: o.any() })).min(1),
      area: o.array(o.object({ id: o.any(), label: o.any() })).min(1)
    })
  }), {
    formState: { isDirty: v }
  } = m, [s, c] = j(!1), p = () => {
    c(!1);
  }, w = () => {
    m.reset({
      country: l,
      area: a
    }), c(!0);
  }, W = ({ area: r, country: u }) => {
    r.length > 0 && u.length > 0 && (S([r[0]]), g([u[0]]), p());
  };
  return /* @__PURE__ */ t(
    z,
    {
      isOpen: s,
      onClickOutside: p,
      onEsc: p,
      placement: "top",
      ignoreBoundary: !0,
      zIndex: i,
      content: /* @__PURE__ */ t(x, { ...m, children: /* @__PURE__ */ t("form", { onSubmit: m.handleSubmit(W), children: /* @__PURE__ */ d($, { children: [
        /* @__PURE__ */ t(
          _,
          {
            title: e("webdoxAI.legalWhisperSettings.countryAndAreaSettings.title"),
            onClose: p,
            size: "xsmall"
          }
        ),
        /* @__PURE__ */ d(q, { children: [
          /* @__PURE__ */ t(
            b,
            {
              "data-testid": `${n}__country-select`,
              autoFocus: !0,
              clearable: !1,
              getOptionLabel: ({ option: r }) => h({ option: r }),
              getValueLabel: ({ option: r }) => h({ option: r }),
              label: e("webdoxAI.legalWhisperSettings.countryAndAreaSettings.country"),
              name: "country",
              options: O,
              required: !0,
              searchable: !1,
              size: "sm",
              zIndex: i
            }
          ),
          /* @__PURE__ */ t(
            b,
            {
              "data-testid": `${n}__area-select`,
              clearable: !1,
              searchable: !1,
              label: e("webdoxAI.legalWhisperSettings.countryAndAreaSettings.area"),
              name: "area",
              options: C,
              required: !0,
              size: "sm",
              zIndex: i
            }
          )
        ] }),
        /* @__PURE__ */ t(
          f,
          {
            size: "small",
            fullWidthActions: !0,
            actions: /* @__PURE__ */ t(
              f.Button,
              {
                type: "submit",
                disabled: !v,
                children: e("general.save")
              }
            )
          }
        )
      ] }) }) }),
      showArrow: !0,
      children: /* @__PURE__ */ t(
        V,
        {
          value: B({
            countryOption: l,
            areaOption: a,
            defaultLabel: e("webdoxAI.legalWhisperSettings.countryAndAreaSettings.title")
          }),
          isOpen: s,
          handleOpen: w,
          zIndex: i,
          dataTestId: n
        }
      )
    }
  );
};
export {
  mo as CountryAndAreaSelectorWithPopover
};
//# sourceMappingURL=country-and-area-selector-with-popover.js.map
