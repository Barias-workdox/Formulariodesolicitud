import { ariaKeyDownHandler as u } from "../../utils/accessibility.utils.js";
const c = ({
  checked: r,
  disabled: s,
  handleToggle: e,
  dataTestId: i,
  ariaDescribedBy: a,
  ariaLabelledBy: l,
  ariaLabel: p,
  labelPlacement: t
}) => ({
  Root: {
    style: () => ({
      alignItems: t === "top" ? "flex-start" : "center",
      borderRadius: "4px",
      outline: "none"
    }),
    props: {
      "data-testid": i,
      id: l
    }
  },
  Label: {
    style: () => ({
      alignItems: t === "top" ? "flex-end" : "center",
      justifyContent: t === "top" ? "flex-end" : "flex-start"
    })
  },
  ToggleTrack: {
    style: ({ $theme: o }) => ({
      backgroundColor: o.colors.neutralSubtle
    })
  },
  Toggle: {
    style: ({ $theme: o }) => {
      const n = s ? {} : {
        borderRadius: "24px",
        outline: `2px solid ${o.colors.neutralStrong}`,
        outlineOffset: "2px"
      };
      return {
        boxShadow: "none",
        ...!r && {
          border: `1px solid ${o.colors.neutralSubtle}`
        },
        boxSizing: "border-box",
        backgroundColor: s && r ? o.colors.neutralDepressed : s ? o.colors.iconBase : r ? o.colors.positive : o.colors.iconBase,
        ":hover": s ? {} : {
          boxShadow: r ? `0px 1px 4px ${o.colors.positiveSubtle}, 0 0 0 8px ${o.colors.positiveSubtle}80` : `0px 1px 4px ${o.colors.neutralWashed}, 0 0 0 8px ${o.colors.neutralWashed}80`
        },
        ":focus": n,
        ":focus-visible": n
      };
    },
    props: {
      role: "switch",
      "aria-checked": r,
      tabIndex: s ? -1 : 0,
      "aria-describedby": a,
      "aria-labelledby": l,
      "aria-label": p,
      onKeyDown: u(e)
    }
  }
});
export {
  c as switchOverrides
};
//# sourceMappingURL=switch.styles.js.map
