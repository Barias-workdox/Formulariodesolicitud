import { jsx as a } from "react/jsx-runtime";
import { ActivityIcon as s } from "./components/activity-icon/activity-icon.js";
import { TAIL_MARGIN_TOP as r, ACTIVITY_ICON_CONTAINER_SIZE as n } from "./components/activity-icon/activity-icon.constants.js";
const e = ({ dataTestId: o, type: t }) => ({
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
      width: n,
      backgroundColor: "transparent"
    })
  },
  Tail: {
    style: () => ({
      marginTop: r,
      height: "100%"
    })
  },
  Icon: {
    component: () => /* @__PURE__ */ a(
      s,
      {
        "data-testid": `${o}--${t}-icon`,
        type: t
      }
    )
  }
});
export {
  e as getOverrides
};
//# sourceMappingURL=activity-item.overrides.js.map
