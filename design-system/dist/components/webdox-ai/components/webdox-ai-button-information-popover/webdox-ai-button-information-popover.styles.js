import { themedStyled as r } from "../../../../themes/utilities.js";
import { INFORMATION_POPOVER_WIDTH as e } from "../../constants/webdox-ai.constants.js";
const i = {
  boldTextStyles: (o) => ({
    fontWeight: "500",
    color: o.colors.neutral
  }),
  popoverContentStyles: (o) => ({
    fontWeight: "500",
    color: o.colors.neutral
  })
}, c = r(
  "span",
  ({ $theme: o }) => ({
    fontSize: o.typography.HeadingXSmall.fontSize
  })
), t = r(
  "div",
  ({ $theme: o }) => ({
    display: "flex",
    flexDirection: "column",
    gap: o.spacing.spacingMd
  })
), d = r(
  "div",
  ({ $theme: o }) => ({
    display: "flex",
    flexDirection: "column",
    gap: o.spacing.spacingXs
  })
), s = {
  Body: {
    style: {
      maxWidth: e
    }
  },
  PopoverContent: {
    props: {
      overrides: {
        Header: {
          props: {
            overrides: {
              CloseButton: {
                props: {
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: o }) => ({
                        color: o.colors.neutralSubdued,
                        ":hover": {
                          backgroundColor: o.colors.powerSubtle,
                          borderColor: o.colors.powerSubtle,
                          color: o.colors.neutralSubdued
                        },
                        ":focus": {
                          borderColor: o.colors.power,
                          color: o.colors.neutralSubdued
                        }
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, p = {
  Body: {
    style: {
      maxWidth: e
    }
  },
  PopoverContent: {
    props: {
      overrides: {
        Header: {
          props: {
            overrides: {
              CloseButton: {
                props: {
                  overrides: {
                    BaseButton: {
                      style: ({ $theme: o }) => ({
                        color: o.colors.neutralSubdued,
                        ":hover": {
                          backgroundColor: o.colors.sweetSubtle,
                          borderColor: o.colors.sweetSubtle,
                          color: o.colors.neutralSubdued
                        },
                        ":focus": {
                          borderColor: o.colors.sweet,
                          color: o.colors.neutralSubdued
                        }
                      })
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}, a = {
  ...s,
  PopoverContent: {
    props: {
      overrides: {
        Content: {
          component: t
        }
      }
    }
  }
}, u = {
  BaseButton: {
    style: ({ $theme: o }) => ({
      borderColor: o.colors.neutralSubtle,
      padding: `${o.spacing.spacingXs} ${o.spacing.spacingSm}`,
      height: "fit-content",
      justifyContent: "flex-start",
      ...o.typography.ParagraphSmall
    })
  }
};
export {
  d as StyledActionsContainer,
  c as StyledEmoji,
  u as actionButtonOverrides,
  s as informationPopoverOverrides,
  a as informationPopoverWithActionsOverrides,
  p as legalWhisperInformationPopoverOverrides,
  i as styles
};
//# sourceMappingURL=webdox-ai-button-information-popover.styles.js.map
