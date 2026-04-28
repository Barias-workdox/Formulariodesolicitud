import { commonStyles as l } from "../../../data-table.styles.js";
const e = {
  actionButtonStyles: (o, { isDisabled: r = !1 }) => ({
    ...l,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: r ? o.colors.neutralWashed : o.colors.neutralBase,
    color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued,
    cursor: r ? "not-allowed" : "pointer",
    border: `1px solid ${o.colors.neutralSubtle}`,
    borderRadius: "4px",
    outline: "none",
    boxShadow: "none",
    width: "24px",
    height: "24px",
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
