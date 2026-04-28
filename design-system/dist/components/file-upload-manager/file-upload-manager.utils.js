import { MAX_OVERFLOW_FILES_LENGTH as s, FILES_LIST_ITEM_HEIGHT as u, FILES_LIST_MAX_HEIGHT as c } from "./file-upload-manager.constants.js";
const p = (t, e) => {
  const r = (i) => {
    switch (i) {
      case "uploading":
        return 0;
      case "pending":
        return 1;
      default:
        return 2;
    }
  }, n = r(t.status), o = r(e.status);
  return n - o;
}, g = (t) => t.reduce(
  (e, { status: r }) => ({ ...e, [r]: ++e[r] }),
  {
    all: t.length,
    completed: 0,
    rejected: 0,
    pending: 0,
    uploading: 0,
    omitted: 0,
    canceled: 0
  }
), _ = (t) => t < s ? t * u : c;
export {
  g as getFileCounts,
  _ as getListMinHeight,
  p as sortByUploadingFirst
};
//# sourceMappingURL=file-upload-manager.utils.js.map
