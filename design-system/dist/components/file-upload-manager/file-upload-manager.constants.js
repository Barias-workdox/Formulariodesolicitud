import { SubtractAlt as o, CloseOutline as n, CheckmarkOutline as e, Restart as t, CloudUpload as c, Time as l } from "@carbon/icons-react";
const a = [
  "all",
  "pending",
  "uploading",
  "canceled",
  "omitted",
  "rejected",
  "completed"
], d = [], i = {
  pending: {
    Icon: l,
    iconColor: "neutral",
    backgroundColor: "neutralWashed"
  },
  uploading: {
    Icon: c,
    iconColor: "brandMedium",
    backgroundColor: "brandSubtle"
  },
  rejected: {
    Icon: t,
    iconColor: "neutral",
    backgroundColor: "neutralWashed"
  },
  completed: {
    Icon: e,
    iconColor: "positive",
    backgroundColor: "positiveSubtle"
  },
  canceled: {
    Icon: n,
    iconColor: "negative",
    backgroundColor: "negativeSubtle"
  },
  omitted: {
    Icon: o,
    iconColor: "neutral",
    backgroundColor: "neutralWashed"
  }
}, u = 310, I = 48, C = 450, _ = 6;
export {
  I as FILES_LIST_ITEM_HEIGHT,
  u as FILES_LIST_MAX_HEIGHT,
  i as FILE_ICON_MAP,
  C as FILE_UPLOAD_MANAGER_WIDTH,
  _ as MAX_OVERFLOW_FILES_LENGTH,
  a as TABS,
  d as TABS_OMITTED
};
//# sourceMappingURL=file-upload-manager.constants.js.map
