import { FILES_LIST_ITEM_HEIGHT as s } from "../../file-download-manager.constants.js";
const t = (e, r) => ({
  Root: {
    style: {
      minHeight: `${s}px`,
      padding: e === "finished" || e === "error" ? `${r.spacing2xs} ${r.spacingXs}` : r.spacingXs
    }
  }
}), n = (e) => ({
  BarContainer: {
    style: {
      margin: `${e.spacingXs} 0 0 0`
    }
  }
});
export {
  t as getFileListItemOverrides,
  n as getFileProgressBarOverrides
};
//# sourceMappingURL=file-item.styles.js.map
