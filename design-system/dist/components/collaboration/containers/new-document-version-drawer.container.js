import { jsx as e } from "react/jsx-runtime";
import { useState as c, useEffect as f } from "react";
import { FormProvider as h } from "react-hook-form";
import "baseui/form-control";
import "baseui";
import "@carbon/icons-react";
import "../../text/text.js";
import "baseui/tooltip";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "../../button/button.js";
import "../../button/variants/icon-button/icon-button.js";
import "baseui/modal";
import "../../modal/components/modal-close-button/modal-close-button.js";
import "../../modal/regular-modal.js";
import "../../modal/sectioned-modal.js";
import "../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../input/next/input.overrides.js";
import { useForm as F } from "../../forms/hooks/use-form.js";
import "baseui/checkbox";
import "../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../select/next/styled-components/styled-icons-container.js";
import "../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../select/next/components/select-dropdown-container.js";
import "../../select/next/components/select-optgroup-header.js";
import "../../radio/radio-group.js";
import "baseui/radio";
import "../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../color-picker/next/color-picker.js";
import "../../checkbox/checkbox.js";
import "../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../avatar/avatar.styles.js";
import "../../input/input.js";
import "../../layouts/title-layout/title-layout.styles.js";
import "../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../tag/next/tag.styled-components.js";
import { NewDocumentVersionDrawer as V } from "../components/contract-negotiation/new-document-version-drawer/new-document-version-drawer.js";
import { validationSchema as S, FORM_DEFAULT_VALUES as D } from "../components/contract-negotiation/new-document-version-drawer/new-document-version-drawer.logic.js";
const Ot = ({
  "data-testid": l,
  isOpen: o,
  isLoading: s,
  onClose: n,
  onSubmit: a
}) => {
  const [d, r] = c([]), m = F({
    mode: "onSubmit",
    schema: S(),
    defaultValues: D
  }), { reset: i, setValue: t } = m;
  return f(() => {
    o || (i(), r([]), t("document", null, { shouldValidate: !0 }));
  }, [o, i, t]), /* @__PURE__ */ e(h, { ...m, children: /* @__PURE__ */ e(
    V,
    {
      "data-testid": l,
      selectedFiles: d,
      isOpen: o,
      isLoading: s,
      handleSelectFile: (u) => {
        const [p] = u;
        r([{ size: p.size }]), t("document", p, { shouldValidate: !0 });
      },
      onClose: () => {
        r([]), i(), t("document", null, { shouldValidate: !0 }), n();
      },
      onSubmit: a
    }
  ) });
};
export {
  Ot as NewDocumentVersionDrawerContainer
};
//# sourceMappingURL=new-document-version-drawer.container.js.map
