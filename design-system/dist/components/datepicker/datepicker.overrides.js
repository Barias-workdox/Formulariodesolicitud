import { jsx as n } from "react/jsx-runtime";
import { StyledRoot as f, getKindBackgroundColor as y, getInputStyle as h } from "../input/input.js";
import { ThemedCarbonIcon as a } from "../themed-carbon-icon/themed-carbon-icon.js";
import { COMMON_FONT_SIZE_14 as d } from "../../constants/common.constants.js";
import { DEFAULT_FONT as p } from "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
const C = ({ $disabled: l, $positive: s, $error: t }) => l ? "neutralDepressed" : t ? "negative" : s ? "positive" : "neutralSubdued", z = ({
  ref: l,
  inputRef: s,
  dataTestId: t,
  zIndex: i,
  $kind: e
}) => {
  const c = ({ $theme: o, $disabled: r }) => ({
    width: "24px",
    height: "24px",
    color: r ? o.colors.neutralSubtle : o.colors.neutralSubdued,
    cursor: r ? "not-allowed" : void 0,
    ":hover": {
      color: r ? void 0 : o.colors.neutral
    }
  });
  return {
    Root: {
      props: {
        ref: l
      },
      style: ({ $theme: o }) => ({
        padding: o.spacing.spacingXs
      })
    },
    CalendarHeader: {
      style: ({ $theme: o }) => ({
        gap: o.spacing.spacingXl
      })
    },
    WeekdayHeader: {
      style: ({ $theme: o }) => ({
        fontWeight: 400,
        height: "auto",
        fontSize: d,
        color: o.colors.neutral,
        ...p
      })
    },
    Week: {
      style: {
        margin: 0
      }
    },
    Day: {
      style: ({
        $theme: o,
        $isHighlighted: r,
        $pseudoHighlighted: b,
        $pseudoSelected: v,
        $selected: u,
        $isHovered: S,
        $disabled: g
      }) => ({
        margin: 0,
        fontSize: d,
        ...p,
        color: g ? o.colors.neutralSubtle : u ? o.colors.textBase : o.colors.neutralSubdued,
        cursor: g ? "not-allowed" : void 0,
        ":first-child::before": {
          borderRadius: "0%!important"
        },
        ":last-child::before": {
          borderRadius: "0%!important"
        },
        ":before": {
          borderWidth: 0,
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: r || v || b ? o.colors.brandSubtle : void 0
        },
        ":after": {
          borderWidth: 0,
          borderRadius: 0,
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          border: S ? `1px solid ${o.colors.brandSubdued}` : void 0,
          backgroundColor: u ? o.colors.brandSubdued : r ? o.colors.brandSubtle : o.colors.calendarBackground
        }
      })
    },
    Popover: {
      props: {
        overrides: {
          Body: {
            style: {
              zIndex: i
            }
          }
        }
      }
    },
    MonthYearSelectIconContainer: {
      component: () => /* @__PURE__ */ n(
        a,
        {
          icon: "ChevronDown",
          size: 16,
          themeColor: "neutral"
        }
      )
    },
    PrevButton: {
      style: c
    },
    PrevButtonIcon: {
      props: {
        overrides: {
          Svg: {
            component: () => /* @__PURE__ */ n(
              a,
              {
                icon: "ArrowLeft",
                size: 16
              }
            )
          }
        }
      }
    },
    NextButton: {
      style: c
    },
    NextButtonIcon: {
      props: {
        overrides: {
          Svg: {
            component: () => /* @__PURE__ */ n(
              a,
              {
                icon: "ArrowRight",
                size: 16
              }
            )
          }
        }
      }
    },
    MonthYearSelectButton: {
      style: ({ $theme: o }) => ({
        color: o.colors.neutral,
        fontSize: d,
        fontWeight: 400,
        height: "24px",
        textTransform: "capitalize",
        padding: 0,
        gap: o.spacing.spacingXs,
        ...p
      })
    },
    InputWrapper: {
      props: {
        "data-testid": `${t}--input-wrapper`
      }
    },
    Input: {
      props: {
        inputRef: s,
        endEnhancer: (o) => /* @__PURE__ */ n(
          a,
          {
            icon: "Calendar",
            size: 16,
            themeColor: C(o)
          }
        ),
        overrides: {
          Input: {
            props: {
              "data-testid": t,
              $kind: e
            },
            style: ({ $theme: o, $isFocused: r }) => ({
              ...h({ $theme: o, $kind: e, $isFocused: r }),
              ":disabled": {
                backgroundColor: y(e, o),
                cursor: "not-allowed"
              }
            })
          },
          Root: {
            component: f,
            props: {
              $kind: e
            }
          },
          EndEnhancer: {
            style: {
              paddingLeft: 0,
              paddingRight: "10px",
              backgroundColor: "transparent"
            }
          }
        }
      }
    },
    MonthYearSelectPopover: {
      props: {
        overrides: {
          Body: {
            style: {
              zIndex: i
            }
          }
        }
      }
    }
  };
};
export {
  z as getDatepickerOverrides
};
//# sourceMappingURL=datepicker.overrides.js.map
