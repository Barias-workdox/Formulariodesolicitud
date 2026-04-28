import { DEFAULT_FONT as r } from "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
const i = {
  headerContainerStyles: () => ({
    display: "grid",
    gridAutoFlow: "column",
    columnGap: "10px",
    alignItems: "center",
    fontWeight: 500,
    ...r
  })
}, a = {
  footerContainerStyles: (e, { overrides: o = {} }) => ({
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: e.spacing.spacingMd,
    borderTop: `1px solid ${e.colors.neutralSubtle}`,
    gap: e.spacing.spacingXs,
    marginTop: "auto",
    ...o
  })
}, s = {
  bodyContainerStyles: (e, { padding: o, overrides: n = {} }) => ({
    padding: o ?? e.spacing.spacingMd,
    overflowY: "auto",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    ...n
  })
}, d = ({
  zIndex: e,
  overrides: o = {}
}) => ({
  Root: {
    style: {
      // Required to be over DocumentViewerModal, which has zIndex: 4
      zIndex: e
    }
  },
  Close: {
    style: {
      display: "none"
    }
  },
  DrawerBody: {
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      height: "100%",
      margin: 0
    }
  },
  ...o
});
export {
  s as drawerBodyStyles,
  a as drawerFooterStyles,
  i as drawerHeaderStyles,
  d as drawerOverrides
};
//# sourceMappingURL=drawer.styles.js.map
