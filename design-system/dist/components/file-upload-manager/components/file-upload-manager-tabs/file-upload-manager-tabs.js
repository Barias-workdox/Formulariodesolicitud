import { jsx as t, jsxs as m } from "react/jsx-runtime";
import { Tabs as n } from "../../../tabs/tabs.js";
import "baseui/tabs-motion";
import "react";
import "baseui";
import "../../../../themes/v3/tokens/typography.js";
import "../../../../themes/v3/tokens/breakpoints.js";
import { Tab as d } from "../../../tabs/components/tab/tab.js";
import { Tag as l } from "../../../tag/next/tag.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as c } from "../../../utils/i18n/utils.js";
import { formatCompactNumber as g } from "../../../utils/strings/text.utils.js";
import { StyledTabLabel as b } from "./file-upload-manager-tabs.styles.js";
const f = () => ({
  TabList: {
    style: {
      padding: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  },
  Tab: {
    style: ({ $theme: r }) => ({
      ...r.typography.ParagraphSmall,
      padding: `${r.spacing.spacingSm} ${r.spacing.spacingXs}`
    })
  }
}), u = ({ label: r, counter: a }) => {
  const { t: i } = c();
  return /* @__PURE__ */ m(b, { children: [
    /* @__PURE__ */ t("span", { children: i(`fileUploadManager.${r}`) }),
    /* @__PURE__ */ t(
      l,
      {
        kind: "neutral",
        variant: "outlined",
        shape: "rounded",
        size: "sm",
        children: g(a)
      }
    )
  ] });
}, N = ({
  dataTestId: r = "file-upload-manager__tabs",
  activeTab: a,
  tabs: i,
  onChange: e
}) => {
  const p = f();
  return /* @__PURE__ */ t(
    n,
    {
      "data-testid": r,
      activeKey: a,
      onChange: e,
      showPanels: !1,
      overrides: p,
      children: i.map(({ counter: s, label: o }) => /* @__PURE__ */ t(
        d,
        {
          "data-testid": `${r}__tab--${o}`,
          title: /* @__PURE__ */ t(
            u,
            {
              label: o,
              counter: s
            }
          )
        },
        o
      ))
    }
  );
};
export {
  N as FileUploadManagerTabs,
  f as getTabsOverrides
};
//# sourceMappingURL=file-upload-manager-tabs.js.map
