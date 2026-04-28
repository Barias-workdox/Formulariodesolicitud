import { DEFAULT_HEADER_HEIGHT as p, DATA_TABLE_Z_INDEX as c } from "../../../data-table.constants.js";
import { commonStyles as g } from "../../../data-table.styles.js";
const y = (n, { isHovered: i, isDragging: t, isDraggable: s, isFixed: o, isSortable: r }) => {
  const a = (i || t) && s && !o;
  return {
    left: {
      justifyStyles: {
        justifyContent: "space-between"
      },
      wrapperStyles: {
        marginLeft: a ? n.spacing.spacingLg : void 0
      }
    },
    center: {
      justifyStyles: {
        justifyContent: "center"
      },
      wrapperStyles: {
        marginLeft: a ? r ? n.spacing.spacingXs : n.spacing.spacingLg : void 0,
        marginRight: a ? r ? n.spacing.spacingXs : n.spacing.spacingLg : void 0,
        transform: r && s ? `translateX(${n.spacing.spacingXs})` : void 0
      }
    },
    right: {
      justifyStyles: {
        justifyContent: "end"
      },
      wrapperStyles: {
        marginLeft: a ? n.spacing.spacingMd : void 0
      }
    }
  };
}, u = {
  containerStyles: (n, { isHovered: i, isDragging: t, isActionCell: s = !1 } = {}) => ({
    ...g,
    position: "sticky",
    zIndex: c.sticky,
    top: 0,
    display: "flex",
    alignItems: "center",
    backgroundColor: t || i ? n.colors.neutralSubtle : n.colors.neutralBase,
    overflow: "hidden",
    padding: s ? n.spacing.spacingMd : `${n.spacing.spacingMd} ${n.spacing.spacingXl}`,
    height: `${p}px`,
    borderBottom: `1px solid ${n.colors.neutralSubtle}`
  }),
  wrapperStyles: (n, { isHovered: i, isFixed: t, align: s = "left", isDragging: o, isDraggable: r, isSortable: a }) => {
    const { justifyStyles: e, wrapperStyles: l } = y(n, {
      isDraggable: r,
      isHovered: i,
      isDragging: o,
      isSortable: a,
      isFixed: t
    })[s];
    return {
      ...e,
      ...l,
      position: "relative",
      display: "flex",
      width: "100%",
      alignItems: "center",
      textWrap: "nowrap",
      transition: "all .25s ease-in-out",
      gap: n.spacing.spacing2xs
    };
  },
  dragIconContainerStyles: (n, { isHovered: i, isFixed: t, isDragging: s, isDraggable: o }) => ({
    display: "flex",
    alignItems: "center",
    position: "absolute",
    color: n.colors.neutral,
    left: `-${n.spacing.spacingXl}`,
    opacity: (s || i) && !t && o ? 1 : 0,
    transition: "all .25s ease-in-out"
  })
};
export {
  u as headerCellStyles
};
//# sourceMappingURL=table-header-cell.styles.js.map
