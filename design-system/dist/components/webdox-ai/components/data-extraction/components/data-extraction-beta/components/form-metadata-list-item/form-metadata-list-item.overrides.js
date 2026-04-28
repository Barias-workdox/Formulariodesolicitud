import { styles as s } from "../../../../../../../inline-edit-input/components/caption-input/caption-input.js";
const i = () => ({
  getInlineEditInputOverrides: ({ mode: n = "caption", dataTestId: o } = {}) => ({
    Root: {
      style: ({ $theme: t }) => ({
        padding: `${t.spacing.spacing2xs} ${t.spacing.spacingXs}`,
        height: "unset",
        width: "unset",
        backgroundColor: t.colors.neutralWashed,
        border: `solid 1px ${n === "input" ? t.colors.power : t.colors.neutralSubtle}`
      })
    },
    Caption: {
      props: {
        overrides: {
          Text: {
            style: ({ $theme: t }) => ({
              ...s.captionTextStyles(t),
              color: t.colors.neutral
            })
          },
          IconButton: {
            props: {
              overrides: {
                BaseButton: {
                  props: {
                    "data-testid": `${o}--input-caption-edit-button`
                  },
                  style: {
                    height: "auto",
                    width: "auto"
                  }
                }
              }
            }
          }
        }
      }
    },
    EditInput: {
      props: {
        overrides: {
          Input: {
            props: {
              overrides: {
                Root: {
                  style: () => ({
                    background: "transparent",
                    border: 0
                  })
                },
                Input: {
                  style: () => ({
                    background: "transparent",
                    padding: 0
                  })
                }
              }
            }
          },
          SubmitIconButton: {
            props: {
              overrides: {
                BaseButton: {
                  props: {
                    "data-testid": `${o}--submit-icon-button`
                  },
                  style: ({ $theme: t }) => ({
                    height: "auto",
                    width: "auto",
                    marginRight: t.spacing.spacingXs
                  })
                }
              }
            }
          },
          CancelIconButton: {
            props: {
              overrides: {
                BaseButton: {
                  props: {
                    "data-testid": `${o}--cancel-icon-button`
                  },
                  style: {
                    height: "auto",
                    width: "auto"
                  }
                }
              }
            }
          }
        }
      }
    }
  })
});
export {
  i as useInlineEditInputOverrides
};
//# sourceMappingURL=form-metadata-list-item.overrides.js.map
