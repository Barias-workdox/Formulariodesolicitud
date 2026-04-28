import { COMMON_ICON_SIZE_24 as r } from "../../constants/common.constants.js";
const t = (e) => ({
  Body: {
    style: {
      width: `${e}px`,
      zIndex: 4
    }
  }
}), a = {
  containerWrapper: (e, { disabled: o, $hasError: n }) => ({
    backgroundColor: e.colors.neutralBase,
    borderWidth: "1px",
    outline: "none",
    position: "relative",
    borderColor: n ? e.colors.negativeSubdued : e.colors.neutralSubtle,
    borderRadius: e.borders.borderSm,
    borderStyle: "solid",
    ...o ? {
      pointerEvents: "none",
      backgroundColor: e.colors.neutralWashed
    } : {}
  }),
  contentStyles: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "42px"
  },
  contentWrapper: (e) => ({
    flex: 1,
    display: "flex",
    flexDirection: "row",
    overflowY: "hidden",
    overflowX: "auto",
    scrollbarWidth: "none",
    gap: e.spacing.spacingXs,
    padding: `0 ${e.spacing.spacingSm}`
  }),
  leadingWrapper: (e) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    height: "100%",
    borderRadius: e.borders.borderSm,
    padding: "0 0.5rem"
  }),
  textValue: (e, { disabled: o }) => ({
    overflow: "inherit",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    color: e.colors.neutralStrong,
    margin: 0,
    ...o ? {
      color: e.colors.neutralDepressed
    } : {}
  }),
  placeholderWrapper: (e) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: e.spacing.spacingXs,
    paddingLeft: `${e.spacing.spacing2xs}`
  }),
  endIconWrapper: (e) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: `0 ${e.spacing.spacingSm}`,
    minWidth: r
  })
}, s = {
  wrapper: (e) => ({
    background: e.colors.bgBase,
    zIndex: 4
  }),
  inputWrapper: (e) => ({
    padding: `0px ${e.spacing.spacingSm} 0 ${e.spacing.spacingMd}`,
    borderBottomColor: e.colors.neutralWashed,
    borderBottomWidth: "1px",
    borderBottomStyle: "solid"
  }),
  bodyStyles: (e) => ({
    display: "flex",
    flexDirection: "column",
    maxHeight: "84px",
    boxSizing: "content-box",
    rowGap: e.spacing.spacingMd,
    padding: e.spacing.spacingMd,
    overflowY: "auto"
  }),
  noResultsWrapper: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "84px"
  },
  separatorStyle: (e) => ({
    width: "100%",
    height: "1px",
    backgroundColor: e.colors.neutralSubtle,
    margin: `${e.spacing.spacingXs} 0`
  }),
  optionsListHeaderStyle: (e) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: `${e.spacing.spacingMd} ${e.spacing.spacingMd} ${e.spacing.spacing2xs} ${e.spacing.spacingMd} `
  }),
  optionsListHeaderLabelStyle: (e) => ({
    textTransform: "uppercase",
    letterSpacing: "1px"
  }),
  listOptionStyle: (e) => ({
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center"
  })
}, l = () => ({
  TitleContainer: {
    overflow: "auto",
    whiteSpace: "unset",
    wordBreak: "break-all"
  }
});
export {
  s as entitiesMultiSelectListStyles,
  a as entitiesMultiselectStyles,
  t as popoverStyledOverrides,
  l as titleLayoutStyledOverrides
};
//# sourceMappingURL=entities-multiselect.styles.js.map
