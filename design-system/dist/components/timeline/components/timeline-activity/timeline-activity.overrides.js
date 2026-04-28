import { jsx as g, Fragment as s } from "react/jsx-runtime";
import { TAIL_MARGIN_TOP as o, ACTIVITY_ICON_CONTAINER_SIZE as n } from "../../constants/timeline-activity.constants.js";
const p = ({ indicator: t }) => ({
  Title: {
    style: ({ $theme: i }) => ({
      paddingBottom: i.spacing.spacingXs
    })
  },
  Description: {
    style: ({ $theme: i }) => ({
      marginBottom: i.spacing.spacing2xs
    })
  },
  IconContainer: {
    style: ({ $theme: i }) => ({
      marginLeft: i.spacing.spacingMd,
      marginRight: i.spacing.spacingMd,
      height: n,
      width: n
    })
  },
  Tail: {
    style: () => ({
      marginTop: o,
      height: "100%"
    })
  },
  Icon: {
    component: () => /* @__PURE__ */ g(s, { children: t })
  }
});
export {
  p as getOverrides
};
//# sourceMappingURL=timeline-activity.overrides.js.map
