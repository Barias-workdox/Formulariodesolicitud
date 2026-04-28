import { jsxs as T, Fragment as b, jsx as i } from "react/jsx-runtime";
import { useMemo as c, useCallback as m } from "react";
import { FileUploadManagerTabs as h } from "../components/file-upload-manager-tabs/file-upload-manager-tabs.js";
import { FileUploadManagerList as C } from "../components/file-upload-manager-list.js";
import { TABS as F } from "../file-upload-manager.constants.js";
import { useFileUploadManagerContext as x } from "../hooks/use-file-uploader-manager-context.js";
const S = ({ dataTestId: o }) => {
  const { activeTab: s, setActiveTab: r, files: e = [], hiddenTabs: n, status: d } = x(), f = c(() => s === "all" ? e : e.filter(({ status: t }) => t === s), [e, s]), l = m(
    (t) => ({
      label: t,
      counter: t === "all" ? e.length : e.filter(({ status: a }) => a === t).length
    }),
    [e]
  ), p = c(
    () => F.reduce(
      (t, a, g) => n.includes(a) ? t.toSpliced(g, 1) : t.concat(l(a)),
      []
    ),
    [n, l]
  ), u = m(
    ({ activeKey: t }) => {
      r(t);
    },
    [r]
  );
  return /* @__PURE__ */ T(b, { children: [
    /* @__PURE__ */ i(
      h,
      {
        dataTestId: `${o}__tabs`,
        tabs: p,
        activeTab: s,
        onChange: u
      }
    ),
    /* @__PURE__ */ i(
      C,
      {
        dataTestId: `${o}__list`,
        files: f,
        activeTab: s,
        status: d
      }
    )
  ] });
};
export {
  S as TabsContentContainer
};
//# sourceMappingURL=tabs-content.container.js.map
