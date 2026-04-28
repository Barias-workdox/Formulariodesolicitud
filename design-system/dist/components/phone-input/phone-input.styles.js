import { jsx as s } from "react/jsx-runtime";
import { ThemedCarbonIcon as a } from "../themed-carbon-icon/themed-carbon-icon.js";
const u = ({ $isFocused: n, $positive: o, $error: r, $theme: e }) => n ? e.colors.brand : r ? e.colors.negative : o ? e.colors.positive : "transparent", c = ({
  dataTestId: n
}) => ({
  Input: {
    props: {
      overrides: {
        Root: {
          style: ({
            $isFocused: o,
            $error: r,
            $positive: e,
            $disabled: l,
            $theme: t
          }) => ({
            borderWidth: "1px",
            backgroundColor: t.colors.neutralWashed,
            outline: "none",
            borderColor: u({
              $error: r,
              $isFocused: o,
              $positive: e,
              $theme: t
            }),
            ":hover": {
              borderColor: l ? "transparent" : t.colors.neutralDepressed
            }
          })
        },
        InputContainer: {
          style: {
            backgroundColor: "transparent"
          }
        },
        Input: {
          props: {
            "data-testid": `${n}--tel-input`
          },
          style: ({ $theme: o, $disabled: r }) => ({
            fontSize: o.typography.ParagraphMedium.fontSize,
            color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued,
            ":focus": {
              color: o.colors.neutral
            },
            ":hover": {
              color: o.colors.neutralSubdued
            }
          })
        }
      }
    }
  },
  FlagContainer: {
    style: {
      fontSize: "22px"
    }
  },
  DialCode: {
    style: ({ $theme: o, $disabled: r }) => ({
      fontSize: o.typography.ParagraphMedium.fontSize,
      color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued,
      ":focus": {
        color: o.colors.neutral
      }
    })
  },
  CountrySelect: {
    props: {
      overrides: {
        ControlContainer: {
          props: {
            "data-testid": `${n}--country-select`
          },
          style: ({ $theme: o }) => ({
            border: "none",
            backgroundColor: o.colors.neutralWashed,
            height: "100%"
          })
        },
        SelectArrow: {
          props: {
            overrides: {
              Svg: {
                component: () => /* @__PURE__ */ s(
                  a,
                  {
                    icon: "ChevronDown",
                    size: 16,
                    themeColor: "neutralSubdued"
                  }
                )
              }
            }
          }
        }
      }
    }
  },
  CountrySelectDropdown: {
    style: {
      padding: 0
    }
  },
  CountrySelectDropdownListItem: {
    style: ({ $theme: o }) => ({
      borderBottom: `1px solid ${o.colors.neutralSubtle}`
    })
  },
  CountrySelectDropdownNameColumn: {
    style: ({ $theme: o }) => ({
      padding: `0 ${o.spacing.spacingXs}`,
      color: o.colors.neutralSubdued,
      ...o.typography.ParagraphSmall
    })
  },
  CountrySelectDropdownDialcodeColumn: {
    style: ({ $theme: o }) => ({
      color: o.colors.neutralSubdued,
      ...o.typography.ParagraphSmall
    })
  }
});
export {
  c as getPhoneInputBaseOverrides
};
//# sourceMappingURL=phone-input.styles.js.map
