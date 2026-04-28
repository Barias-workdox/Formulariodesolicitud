import { jsx as p } from "react/jsx-runtime";
import { useState as l, useEffect as e } from "react";
import { LoadingWrapper as f } from "../../loading-wrapper/loading-wrapper.js";
import { ActivityTab as g } from "../components/contract-negotiation/activity-tab/activity-tab.js";
import "react-hook-form";
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
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
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
import "baseui/drawer";
import "../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import { getActivitySelectedDocument as D } from "../logic/business/contract-negotiation.business.js";
import "../../file-icon/file-icon.js";
import "baseui/tag";
import "../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "baseui/accordion";
import "../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../../background-icon/background-icon.styles.js";
import "baseui/list";
import "../../file-type-icon/file-type-icon.styles.js";
import { useContractNegotiationContext as v } from "../logic/contexts/contract-negotiation.context.js";
import "../../menu/stateful-menu/stateful-menu.js";
import "../../menu/stateless-menu/stateless-menu.overrides.js";
import "../../popover/popover.styles.js";
import "@webdoxclm/document-viewer-front";
import "../../select/select.overrides.js";
import "baseui/tabs-motion";
import "baseui/typography";
import "../../menu/virtualized-menu/components/virtualized-list/virtualized-list.js";
import "../../message-box/components/expand-button/styled-components/styled-button.js";
import "../../message-box/components/message-box-textarea/message-box-textarea.js";
import "../../messages/message-composer/message-composer.styles.js";
import "react-dom/server";
import "../../messages/message-content/message-content.js";
import "lodash/isEqual";
import "@formkit/auto-animate/react";
import "react-use";
import "../../messages/message-list/message-list.styles.js";
import "dompurify";
import "baseui/progress-steps";
import "../../activity-timeline/components/activity-item/components/activity-icon/activity-icon.constants.js";
const go = ({
  "data-testid": n,
  onClose: c
}) => {
  const {
    activityDocuments: t,
    collaborationDetails: a,
    selectedDocument: { document: o },
    onTriggerActivityTab: i
  } = v(), [r, m] = l(), d = r === void 0;
  return e(() => i(), [i]), e(() => {
    m(D(t, o));
  }, [t, o]), /* @__PURE__ */ p(f, { isLoading: d, children: /* @__PURE__ */ p(
    g,
    {
      "data-testid": n,
      selectedDocument: r,
      documents: t,
      collaborationDetails: a,
      handleOnChange: ({ id: s = "" }) => {
        m(t.find(({ id: u }) => u === s));
      },
      onClose: c
    }
  ) });
};
export {
  go as ActivityTabContainer
};
//# sourceMappingURL=activity-tab.container.js.map
