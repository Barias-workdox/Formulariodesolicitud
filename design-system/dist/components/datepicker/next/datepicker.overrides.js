import { jsx as e } from "react/jsx-runtime";
import { Calendar as H } from "@carbon/icons-react";
import { Input as M } from "../../input/next/input.js";
import { COMMON_HEIGHT_24 as n, COMMON_FONT_SIZE_14 as E } from "../../../constants/common.constants.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import { ThemedCarbonIcon as l } from "../../themed-carbon-icon/themed-carbon-icon.js";
const u = "30px", a = "45px", W = ({
  dataTestId: t,
  inputRef: g,
  name: p,
  isLoading: b,
  kind: h,
  leading: y,
  readOnly: S,
  ref: v,
  showCopyContentButton: f,
  size: w,
  width: C,
  zIndex: i
} = {}) => {
  const s = ({ $theme: o, $disabled: r }) => ({
    width: n,
    height: n,
    color: r ? o.colors.neutralSubtle : o.colors.neutralSubdued,
    cursor: r ? "not-allowed" : "pointer",
    ":hover": {
      color: r ? void 0 : o.colors.neutral
    }
  });
  return {
    Root: {
      props: {
        ref: v
      },
      style: ({ $theme: o }) => ({
        padding: o.spacing.spacingXs
      })
    },
    CalendarHeader: {
      style: ({ $theme: o }) => ({
        gap: o.spacing.spacingMd,
        minHeight: n,
        width: "auto"
      })
    },
    WeekdayHeader: {
      style: ({ $theme: o }) => ({
        ...o.typography.ParagraphSmall,
        color: o.colors.neutral,
        height: u,
        width: a,
        padding: 0,
        lineHeight: u
      })
    },
    Week: {
      style: {
        margin: 0
      }
    },
    CalendarContainer: {
      props: {
        "data-testid": `${t}--calendar`
      }
    },
    Day: {
      style: ({
        $theme: o,
        $isHighlighted: r,
        $pseudoHighlighted: m,
        $pseudoSelected: _,
        $selected: d,
        $isHovered: x,
        $disabled: c,
        $outsideMonth: B
      }) => ({
        margin: 0,
        fontSize: E,
        userSelect: "none",
        height: a,
        width: a,
        lineHeight: a,
        padding: 0,
        color: c ? o.colors.neutralSubtle : d ? o.colors.textBase : o.colors.neutral,
        cursor: c ? "not-allowed" : B ? void 0 : "pointer",
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
          backgroundColor: r || _ || m ? o.colors.brandSubtle : void 0
        },
        ":after": {
          borderWidth: 0,
          borderRadius: 0,
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          border: x ? `1px solid ${o.colors.brandSubdued}` : void 0,
          backgroundColor: d ? o.colors.brandSubdued : r ? o.colors.brandSubtle : o.colors.calendarBackground
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
      component: () => /* @__PURE__ */ e(
        l,
        {
          icon: "ChevronDown",
          themeColor: "neutralSubdued"
        }
      )
    },
    PrevButton: {
      props: {
        "data-testid": `${t}__prev-button`
      },
      style: s
    },
    PrevButtonIcon: {
      component: () => /* @__PURE__ */ e(l, { icon: "ArrowLeft" })
    },
    NextButton: {
      props: {
        "data-testid": `${t}__next-button`
      },
      style: s
    },
    NextButtonIcon: {
      component: () => /* @__PURE__ */ e(l, { icon: "ArrowRight" })
    },
    MonthYearSelectButton: {
      style: ({ $theme: o }) => ({
        ...o.typography.ParagraphSmall,
        height: n,
        textTransform: "capitalize",
        padding: 0,
        gap: o.spacing.spacingXs,
        color: o.colors.neutral,
        ":hover": {
          color: o.colors.neutralStrong
        }
      })
    },
    InputWrapper: {
      style: {
        width: C
      },
      props: {
        "data-testid": `${t}--input-wrapper`
      }
    },
    Input: {
      component: M,
      props: {
        "data-testid": t,
        inputRef: g,
        isLoading: b,
        kind: h,
        leading: y,
        readOnly: S,
        showCopyContentButton: f,
        size: w,
        ...p && { name: p },
        startEnhancer: /* @__PURE__ */ e(H, {})
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
  W as getDatepickerOverrides
};
//# sourceMappingURL=datepicker.overrides.js.map
