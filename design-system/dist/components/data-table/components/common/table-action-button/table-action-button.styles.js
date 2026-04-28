import { commonStyles as n } from "../../../data-table.styles.js";
const l = "24px", e = {
  actionButtonStyles: (o, { isDisabled: r = !1 }) => ({
    ...n,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: r ? "not-allowed" : "pointer",
    backgroundColor: r ? o.colors.neutralWashed : o.colors.neutralBase,
    color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued,
    border: `1px solid ${o.colors.neutralSubtle}`,
    borderRadius: "4px",
    outline: "none",
    boxShadow: "none",
    width: l,
    height: l,
    padding: 0,
    ...!r && {
      ":hover": {
        backgroundColor: o.colors.neutralSubtle
      },
      ":focus-visible": {
        outline: `2px solid ${o.colors.brandSubdued}`
      }
    }
  })
};
export {
  e as styles
};
//# sourceMappingURL=table-action-button.styles.js.map
