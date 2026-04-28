import { jsx as a } from "react/jsx-runtime";
import { Pagination as l, SIZE as n } from "baseui/pagination";
import { useCss as t } from "../utils/hooks/use-css.js";
function i(e) {
  const { theme: o } = t();
  return /* @__PURE__ */ a(
    l,
    {
      size: n.mini,
      ...e,
      overrides: {
        PrevButton: {
          style: ({ $disabled: r }) => ({
            ...o.typography.ParagraphSmall,
            color: o.colors.neutralSubdued,
            borderRadius: o.borders.borderSm,
            ":disabled": {
              backgroundColor: o.colors.neutralWashed,
              color: o.colors.neutralDepressed
            },
            ...!r && {
              ":hover": {
                backgroundColor: o.colors.neutralSubtle,
                color: o.colors.neutralStrong
              }
            }
          })
        },
        NextButton: {
          style: ({ $disabled: r }) => ({
            ...o.typography.ParagraphSmall,
            color: o.colors.neutralSubdued,
            borderRadius: o.borders.borderSm,
            ":disabled": {
              backgroundColor: o.colors.neutralWashed,
              color: o.colors.neutralDepressed
            },
            ...!r && {
              ":hover": {
                backgroundColor: o.colors.neutralSubtle,
                color: o.colors.neutralStrong
              }
            }
          })
        },
        MaxLabel: {
          style: {
            ...o.typography.ParagraphSmall,
            color: o.colors.neutralSubdued,
            fontWeight: 500,
            fontSize: "0.875rem"
          }
        },
        DropdownContainer: {
          style: {
            outline: "none",
            backgroundColor: "transparent"
          }
        },
        Select: {
          props: {
            overrides: {
              ControlContainer: {
                style: ({ $isFocused: r }) => ({
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  border: `1px solid ${r ? o.colors.brand : o.colors.neutralSubtle}`,
                  backgroundColor: "transparent",
                  borderRadius: o.borders.borderSm,
                  outline: "none",
                  ":hover": {
                    background: "transparent",
                    border: `1px solid ${o.colors.neutral}`
                  }
                })
              },
              ValueContainer: {
                style: {
                  ...o.typography.ParagraphSmall,
                  color: o.colors.neutralSubdued,
                  fontWeight: 500,
                  fontSize: "0.875rem"
                }
              },
              DropdownContainer: {
                style: {
                  outline: "none",
                  backgroundColor: "transparent"
                }
              },
              Dropdown: {
                style: {
                  boxShadow: "none",
                  borderRadius: o.borders.borderSm
                }
              },
              Popover: {
                props: {
                  overrides: {
                    Body: {
                      style: {
                        boxShadow: o.lighting.shadowDefault
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
  );
}
export {
  i as Pagination
};
//# sourceMappingURL=pagination.js.map
