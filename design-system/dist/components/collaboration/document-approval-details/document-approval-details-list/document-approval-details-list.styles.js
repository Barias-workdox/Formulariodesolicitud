const a = {
  itemListWrapperStyles: (s) => ({
    padding: `${s.spacing.spacingMd} ${s.spacing.spacingXl}`,
    borderBottom: `1px solid ${s.colors.neutralWashed}`,
    display: "flex"
  }),
  itemListContentStyles: (s) => ({
    marginLeft: s.spacing.spacingXs,
    width: "100%"
  }),
  thirdPartyContentStyles: (s) => ({
    marginBottom: s.spacing.spacingXs,
    display: "grid"
  }),
  thirdPartyText: () => ({
    margin: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }),
  reasonRejectionStyles: (s) => ({
    color: s.colors.neutralSubdued,
    backgroundColor: s.colors.neutralBase,
    margin: `${s.spacing.spacingXs} 0 ${s.spacing.spacing2xs} 0`,
    padding: `${s.spacing.spacingMd} ${s.spacing.spacingXl}`,
    wordBreak: "break-word"
  }),
  reasonRejectionLabelStyles: (s) => ({
    fontWeight: 500,
    color: s.colors.neutral
  })
};
export {
  a as styles
};
//# sourceMappingURL=document-approval-details-list.styles.js.map
