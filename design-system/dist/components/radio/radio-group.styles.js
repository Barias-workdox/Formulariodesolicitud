const d = (i) => ({
  RadioMarkOuter: {
    style: ({
      $theme: o,
      $disabled: r,
      $checked: a,
      $isHovered: l,
      $isFocusVisible: s
    }) => ({
      width: "16px",
      height: "16px",
      ...!a && {
        background: o.colors.neutralSubdued
      },
      ...!r && l && {
        boxShadow: `0 0 0 ${o.sizing.scale200} ${o.colors.tickFillHover}`
      },
      ...s && {
        boxShadow: `0 0 0 ${o.sizing.scale100} ${o.colors.tickFillHover},
          0 0 0 ${o.sizing.scale200} ${o.colors.brand}`,
        outline: "none"
      }
    }),
    props: {
      "data-testid": i
    }
  },
  RadioMarkInner: {
    style: ({
      $theme: o,
      $checked: r,
      $disabled: a
    }) => ({
      ...!r && {
        width: "calc(100% - 2px)",
        height: "calc(100% - 2px)",
        transform: void 0
      },
      ...a && {
        background: o.colors.bgBase
      }
    })
  },
  Label: {
    style: ({ $theme: o }) => ({
      ...o.typography.ParagraphSmall,
      color: o.colors.neutralSubdued
    })
  }
}), t = ({
  rowGap: i,
  columnGap: o,
  dataTestId: r,
  ref: a
}) => ({
  RadioGroupRoot: {
    props: {
      "data-testid": `${r}-radio-group-root`,
      tabIndex: 0,
      ref: a
    },
    style: {
      rowGap: i,
      columnGap: o
    }
  }
});
export {
  t as getRadioGroupOverrides,
  d as radioOverrides
};
//# sourceMappingURL=radio-group.styles.js.map
