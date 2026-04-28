import { DEFAULT_TAB_PANEL_WIDTH as i } from "./side-tabs.constants.js";
const s = ({
  showPanels: e = !0,
  showTabList: l = !0,
  side: o = "left",
  onClickTab: r = () => null
}) => ({
  TabHighlight: {
    style: {
      ...o === "left" && { left: 0, right: "unset" },
      ...o === "right" && { right: 0, left: "unset" },
      ...!e && { width: 0 }
    }
  },
  Root: {
    style: ({ $theme: t }) => ({
      backgroundColor: t.colors.bgBase,
      flexDirection: o === "left" ? "row-reverse" : "row",
      ...l && o === "left" && { borderRight: `1px solid ${t.colors.divisionLine}` },
      ...l && o === "right" && { borderLeft: `1px solid ${t.colors.divisionLine}` }
    })
  },
  TabList: {
    ...!l && { component: () => null },
    props: {
      onClick: r
    }
  }
}), c = ({
  showPanels: e,
  tabPanelWidth: l = i,
  side: o = "left"
}) => ({
  TabPanel: {
    style: ({ $theme: r }) => ({
      backgroundColor: r.colors.bgBase,
      width: l,
      overflow: "unset",
      ...o === "left" && { borderRight: `1px solid ${r.colors.divisionLine}` },
      ...o === "right" && { borderLeft: `1px solid ${r.colors.divisionLine}` }
    })
  },
  Tab: {
    style: ({ $theme: r }) => ({
      ...!e && {
        color: r.colors.neutralSubdued,
        ":hover": {
          color: r.colors.neutralMedium
        }
      }
    })
  }
});
export {
  c as getTabOverrides,
  s as getTabsOverrides
};
//# sourceMappingURL=side-tabs.overrides.js.map
