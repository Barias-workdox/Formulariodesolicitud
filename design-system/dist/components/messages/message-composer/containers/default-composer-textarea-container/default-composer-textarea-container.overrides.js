const r = {
  EditableDiv: {
    style: ({ $theme: a }) => ({
      ...a.typography.ParagraphSmall,
      padding: `0 ${a.spacing.spacingMd}`,
      "::before": {
        ...a.typography.ParagraphXSmall
      }
    })
  }
};
export {
  r as messageBoxTextareaOverrides
};
//# sourceMappingURL=default-composer-textarea-container.overrides.js.map
