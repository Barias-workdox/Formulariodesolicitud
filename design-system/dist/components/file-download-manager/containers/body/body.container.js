import { jsx as i } from "react/jsx-runtime";
import { useMemo as s, useCallback as d } from "react";
import { FileItem as p } from "../../components/file-item/file-item.js";
import { MAX_OVERFLOW_FILES_LENGTH as c, FILES_LIST_ITEM_HEIGHT as g } from "../../file-download-manager.constants.js";
import { StyledFilesList as u } from "./body.container.styles.js";
const E = ({ file: o, status: t, handleFileClick: n }) => {
  const { name: r, fileType: e = "zip", downloadProgress: l = 0, onDownload: m } = o, a = d(() => n(m), [n, m]);
  return /* @__PURE__ */ i(
    p,
    {
      fileStatus: t,
      fileName: r,
      fileExtension: e,
      onClick: a,
      fileDownloadProgress: l ?? 0
    }
  );
}, _ = ({
  files: o,
  status: t,
  handleFileClick: n
}) => {
  const r = s(() => o.length < c ? o.length * g : 0, [o.length]);
  return /* @__PURE__ */ i(u, { $minHeight: r, children: o.map((e) => /* @__PURE__ */ i(
    E,
    {
      file: e,
      status: t,
      handleFileClick: n
    },
    e.id ?? e.name
  )) });
};
export {
  _ as FileDownloadManagerBodyContainer
};
//# sourceMappingURL=body.container.js.map
