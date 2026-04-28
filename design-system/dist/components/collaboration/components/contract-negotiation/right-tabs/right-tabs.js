import { jsxs as n, jsx as t } from "react/jsx-runtime";
import { WatsonHealthStackedScrolling_1 as c, UpdateNow as d, Chat as b } from "@carbon/icons-react";
import { TabsOrientation as l } from "../../../../tabs/tabs.js";
import { StatefulTabs as _ } from "../../../../tabs/stateful-tabs.js";
import { Tab as e } from "../../../../tabs/components/tab/tab.js";
import { useCss as f } from "../../../../utils/hooks/use-css.js";
import { ActivityTabContainer as v } from "../../../containers/activity-tab.container.js";
import "react";
import "react-hook-form";
import "baseui/form-control";
import "baseui";
import "../../../../text/text.js";
import "baseui/tooltip";
import "baseui/textarea";
import "baseui/input";
import "lodash";
import "../../../../button/button.js";
import "../../../../button/variants/icon-button/icon-button.js";
import "../../../../../themes/v3/tokens/typography.js";
import "../../../../../themes/v3/tokens/breakpoints.js";
import "baseui/modal";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import "../../../../input/next/components/compound-end-enhancer/styled-components/styled-container.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-container.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-leading.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-prefix-text.js";
import "../../../../input/next/components/compound-start-enhancer/styled-components/styled-right-column.js";
import "../../../../input/next/input.overrides.js";
import "@hookform/resolvers/yup";
import "@hookform/resolvers/zod";
import "lodash/debounce";
import "baseui/checkbox";
import "../../../../utils/hooks/use-country-code-options/use-country-code-options.js";
import "baseui/select";
import "../../../../select/next/styled-components/styled-icons-container.js";
import "../../../../select/next/styled-components/styled-start-enhancer-container.js";
import "../../../../select/next/components/select-dropdown-container.js";
import "../../../../select/next/components/select-optgroup-header.js";
import "../../../../radio/radio-group.js";
import "baseui/radio";
import "../../../../forms/components/datepicker/datepicker-control.js";
import "yup";
import "../../../../color-picker/next/color-picker.js";
import "../../../../checkbox/checkbox.js";
import "../../../../file-uploader/file-uploader.js";
import "baseui/menu";
import "../../../../menu/stateful-menu-with-infinite-scroll/components/styled-list-with-infinite-scroll.js";
import "../../../../dynamic-text-input/dynamic-text-input.js";
import "baseui/popover";
import "baseui/avatar";
import "../../../../avatar/avatar.styles.js";
import "../../../../input/input.js";
import "../../../../layouts/title-layout/title-layout.styles.js";
import "../../../../truncated-text/truncated-text.js";
import "resize-observer-polyfill";
import "react-is";
import "../../../../tag/next/tag.styled-components.js";
import "../../../../../themes/v3/light/theme.js";
import "../../../../../themes/v3/dark/theme.js";
import "../../../../../themes/utilities.js";
import "baseui/drawer";
import "../../../../drawer/components/side-nav/side-nav.styles.js";
import "baseui/header-navigation";
import "../../../../file-icon/file-icon.js";
import "baseui/tag";
import "../../../../../contexts/locale-provider/locale-provider.js";
import "date-fns";
import "date-fns/locale";
import "baseui/accordion";
import "../../../../collapsible-box/components/collapsible-box-header/collapsible-box-header.js";
import "../../../../background-icon/background-icon.styles.js";
import "baseui/list";
import "../../../../file-type-icon/file-type-icon.styles.js";
import "../../../logic/contexts/contract-negotiation.context.js";
import { CommentsTabContainer as h } from "../comments-tab/comments-tab.container.js";
import { HistoryTabContainer as y } from "../../../containers/history-tab.container.js";
import { rightOrientationTabsOverridesStyles as u, rightTabOverridesStyles as a } from "./right-tabs.styles.js";
const ti = ({
  "data-testid": i = "right-tabs",
  showPanels: r,
  enabledTabs: m,
  onOpen: s,
  onClose: p
}) => {
  const { theme: o } = f();
  return /* @__PURE__ */ n(
    _,
    {
      showPanels: r,
      overrides: {
        ...u(o, {
          showPanels: r
        }),
        TabList: {
          props: {
            onClick: s
          }
        }
      },
      activateOnFocus: !0,
      orientation: l.vertical,
      kind: "medium",
      renderAll: !1,
      children: [
        m.includes("activity") && /* @__PURE__ */ t(
          e,
          {
            "data-testid": `${i}__activity-tab--tab`,
            overrides: a(o, {
              showPanels: r
            }),
            title: /* @__PURE__ */ t(c, {}),
            children: /* @__PURE__ */ t(
              v,
              {
                "data-testid": `${i}__activity-tab`,
                onClose: p
              }
            )
          }
        ),
        m.includes("history") && /* @__PURE__ */ t(
          e,
          {
            "data-testid": `${i}__history-tab--tab`,
            overrides: a(o, {
              showPanels: r
            }),
            title: /* @__PURE__ */ t(d, {}),
            children: /* @__PURE__ */ t(
              y,
              {
                "data-testid": `${i}__history-tab`,
                onClose: p
              }
            )
          }
        ),
        m.includes("comments") && /* @__PURE__ */ t(
          e,
          {
            "data-testid": `${i}__comments-tab--tab`,
            overrides: a(o, {
              showPanels: r
            }),
            title: /* @__PURE__ */ t(b, {}),
            children: /* @__PURE__ */ t(
              h,
              {
                "data-testid": `${i}__comments-tab`,
                onClose: p
              }
            )
          }
        )
      ]
    }
  );
};
export {
  ti as RightTabs
};
//# sourceMappingURL=right-tabs.js.map
