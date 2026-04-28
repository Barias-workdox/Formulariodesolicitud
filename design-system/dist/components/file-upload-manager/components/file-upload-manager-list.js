import { jsx as o } from "react/jsx-runtime";
import { useMemo as m } from "react";
import { EmptyState as h } from "../../empty-state/next/empty-state.js";
import { FILES_LIST_ITEM_HEIGHT as I, FILES_LIST_MAX_HEIGHT as n } from "../file-upload-manager.constants.js";
import { sortByUploadingFirst as S, getListMinHeight as y } from "../file-upload-manager.utils.js";
import { themedStyled as p } from "../../../themes/utilities.js";
import { useEmptyStateDetails as u } from "../hooks/use-empty-state-details.js";
import { FileItem as x } from "./file-item/file-item.js";
const E = p(
  "div",
  ({ $minHeight: t }) => ({
    maxHeight: `${n}px`,
    minHeight: t ? `${t}px` : `${I}px`,
    overflowY: "auto"
  })
), H = p("div", {
  height: `${n}px`,
  display: "flex",
  alignItems: "center"
});
function C({
  dataTestId: t,
  files: e,
  activeTab: a,
  status: s
}) {
  const { description: l, icon: d, title: c } = u({ activeTab: a, status: s }), r = m(() => e.sort(S), [e]), g = m(() => y(e.length), [e.length]);
  return /* @__PURE__ */ o(E, { $minHeight: g, children: r.length === 0 ? /* @__PURE__ */ o(H, { children: /* @__PURE__ */ o(
    h,
    {
      dataTestId: `${t}--empty-state`,
      Icon: d,
      description: l,
      title: c,
      backgroundColor: "neutralWashed",
      iconColor: "neutral"
    }
  ) }) : r.map((i) => /* @__PURE__ */ o(
    x,
    {
      "data-testid": `${t}--file-item--${i.id}`,
      ...i
    },
    i.id
  )) });
}
export {
  C as FileUploadManagerList,
  H as StyledEmptyStateWrapper,
  E as StyledFilesList
};
//# sourceMappingURL=file-upload-manager-list.js.map
