import { Flag as n, TrashCan as e, UserFollow as c, DocumentAdd as t, Misuse as r, WarningFilled as l, CheckmarkFilled as I, ChartNetwork as a, RequestQuote as i, Document as d, View as u, Upload as C, Download as s, Chat as g } from "@carbon/icons-react";
const b = "32px", p = 16, m = "56px", o = {
  backgroundColor: "brandSubtle",
  Icon: n,
  iconColor: "brand"
}, T = {
  flag: o,
  comment: {
    ...o,
    Icon: g
  },
  download: {
    ...o,
    Icon: s
  },
  upload: {
    ...o,
    Icon: C
  },
  view: {
    ...o,
    Icon: u
  },
  document: {
    ...o,
    Icon: d
  },
  request: {
    ...o,
    Icon: i
  },
  flow: {
    ...o,
    Icon: a
  },
  approved: {
    Icon: I,
    iconColor: "positive",
    backgroundColor: "positiveSubtle"
  },
  warning: {
    Icon: l,
    iconColor: "warning",
    backgroundColor: "warningSubtle"
  },
  rejected: {
    Icon: r,
    iconColor: "negative",
    backgroundColor: "negativeSubtle"
  },
  "new-document": {
    ...o,
    Icon: t
  },
  "new-user": {
    ...o,
    Icon: c
  },
  delete: {
    ...o,
    Icon: e
  }
};
export {
  b as ACTIVITY_ICON_CONTAINER_SIZE,
  p as ACTIVITY_ICON_SIZE,
  m as TAIL_MARGIN_TOP,
  o as defaultIconConfig,
  T as iconsByActivity
};
//# sourceMappingURL=activity-icon.constants.js.map
