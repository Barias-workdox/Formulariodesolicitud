const a = ({ $theme: o }) => ({
  color: o.colors.neutral,
  height: o.spacing.spacing3xl,
  padding: o.spacing.spacingLg,
  alignContent: "center",
  boxSizing: "initial"
}), i = ({ $theme: o }) => ({
  padding: `${o.spacing.spacingXl} ${o.spacing.spacingLg}`,
  gap: o.spacing.spacingXs
}), g = ({ $theme: o }) => ({
  padding: o.spacing.spacingLg
}), s = {
  Radio: {
    RadioMarkOuter: {
      style: ({ $theme: o, $checked: n }) => ({
        ...n && { backgroundColor: o.colors.power }
      })
    },
    Label: {
      style: ({ $theme: o }) => ({
        ...o.typography.ParagraphMedium
      })
    }
  }
}, r = {
  ControlContainer: {
    style: {
      margin: 0
    }
  }
};
export {
  r as formControlOverrides,
  g as getSectionedModalFooterStyles,
  a as getSectionedModalHeaderStyles,
  i as getStyledSectionedModalBodyStyles,
  s as radioGroupOverrides
};
//# sourceMappingURL=chat-bot-negative-feedback-modal.styles.js.map
