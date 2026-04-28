import { CollapsibleBoxHeader as d } from "./components/collapsible-box-header/collapsible-box-header.js";
const p = ({
  dataTestId: o,
  title: n,
  collapsedTitle: r,
  Icon: s,
  options: t,
  overrides: i
}) => ({
  Root: {
    style: ({ $theme: e }) => ({
      border: `1px solid ${e.colors.divisionLine}`,
      width: "unset"
    })
  },
  PanelContainer: {
    style: {
      border: "none"
    }
  },
  Header: {
    component: d,
    props: {
      dataTestId: o,
      title: n,
      Icon: s,
      options: t,
      collapsedTitle: r,
      overrides: i
    }
  },
  Content: {
    style: ({ $theme: e }) => ({
      padding: e.spacing.spacingXs
    })
  }
});
export {
  p as defaultOverrides
};
//# sourceMappingURL=collapsible-box.overrides.js.map
