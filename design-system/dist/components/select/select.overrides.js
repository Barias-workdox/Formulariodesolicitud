import { jsx as p, Fragment as u } from "react/jsx-runtime";
import { forwardRef as m } from "react";
import { Close as y } from "@carbon/icons-react";
import { StyledDropdownListItem as f } from "baseui/select";
import { DEFAULT_FONT as i } from "../../themes/v3/tokens/typography.js";
import "../../themes/v3/tokens/breakpoints.js";
import { getItemIndex as S } from "../../utils/baseui.utils.js";
import { StyledRoot as b } from "../input/input.js";
import { ArrowIcon as w } from "./components/arrow-icon.js";
import { SelectDropdownContainer as D } from "./components/select-dropdown-container/select-dropdown-container.js";
import { SelectOptgroupHeader as x } from "./components/select-optgroup-header/select-optgroup-header.js";
const C = m(function({ dataTestId: c, options: n, ...a }, t) {
  const {
    item: { id: s }
  } = a, l = S(n, s), o = `${c}__item-${l ?? s}`;
  return /* @__PURE__ */ p(
    f,
    {
      ref: t,
      "data-testid": o,
      ...a
    }
  );
}), R = ({
  kind: e,
  zIndex: c,
  dataTestId: n,
  name: a,
  isBorderless: t,
  isOpen: s = !1,
  options: l
}) => ({
  Root: {
    props: {
      "data-testid": n
    }
  },
  DropdownContainer: {
    component: D
  },
  Dropdown: {
    style: {
      padding: 0,
      boxShadow: "none"
    }
  },
  DropdownListItem: {
    style: ({ $isHighlighted: o, $theme: r }) => ({
      padding: "10px",
      color: o ? r.colors.neutral : r.colors.neutralDepressed,
      borderBottomWidth: "1px",
      borderBottomColor: r.colors.divisionLine,
      borderBottomStyle: "solid",
      ...i,
      ":last-child": {
        borderBottomColor: "transparent"
      },
      ...t && {
        ...r.typography.ParagraphMedium,
        border: "none"
      }
    }),
    component: C
  },
  ControlContainer: {
    component: b,
    props: {
      $kind: e
    },
    style: ({ $disabled: o, $size: r }) => ({
      cursor: o ? "not-allowed" : "auto",
      ...(e === "borderless" || t) && {
        border: "none"
      },
      ...r === "default" && {
        minHeight: "44px"
      }
    })
  },
  ValueContainer: {
    props: {
      ...n && { "data-testid": `${n}-value` }
    },
    style: ({ $size: o, $theme: r, $disabled: d, $isFocused: g }) => ({
      display: "flex",
      alignItems: "center",
      gap: r.spacing.spacingXs,
      ...i,
      backgroundColor: e === "white" || g ? r.colors.bgBase : r.colors.neutralBase || r.colors.neutralWashed,
      color: d ? r.colors.neutralDepressed : r.colors.neutralStrong,
      ...o === "compact" ? r.typography.ParagraphXSmall : r.typography.ParagraphSmall,
      ...e === "borderless" && {
        fontWeight: 500
      },
      ...t && {
        ...r.typography.ParagraphMedium
      }
    })
  },
  SingleValue: {
    style: { height: "auto" }
  },
  Tag: {
    props: {
      overrides: {
        Root: {
          style: ({ $theme: o, $disabled: r }) => ({
            backgroundColor: r ? o.colors.neutralSubtle : o.colors.peaceSubtle,
            color: r ? o.colors.neutralDepressed : o.colors.brandStrong,
            fontSize: "12px",
            display: "flex",
            alignItems: "center",
            lineHeight: "normal",
            margin: 0,
            ...i
          })
        },
        ActionIcon: () => /* @__PURE__ */ p(y, { size: 12 })
      }
    }
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: ({ $theme: o }) => ({
            boxShadow: o.lighting.shadowDefault,
            ...e === "borderless" && { marginTop: "12px" },
            zIndex: c
          })
        }
      }
    }
  },
  Input: {
    props: {
      "data-testid": `${n}__input`,
      ...a && { name: a }
    }
  },
  Placeholder: {
    style: ({ $theme: o, $disabled: r }) => ({
      marginLeft: `-${o.spacing.spacingXs}`,
      ...i,
      ...t && {
        color: r ? o.colors.neutralDepressed : o.colors.neutralSubdued,
        ...o.typography.ParagraphMedium
      }
    })
  },
  OptionContent: {
    style: ({ $theme: o, $selected: r }) => ({
      ...t && r && {
        color: o.colors.neutralStrong,
        fontWeight: "bold"
      }
    })
  },
  SelectArrow: {
    props: {
      overrides: {
        Svg: {
          component: function() {
            return /* @__PURE__ */ p(
              w,
              {
                isOpen: s,
                isBorderless: t
              }
            );
          }
        }
      }
    }
  },
  ClearIcon: {
    component: () => /* @__PURE__ */ p(u, {})
  },
  StatefulMenu: {
    props: {
      overrides: {
        EmptyState: {
          style: ({ $theme: o }) => ({
            color: o.colors.neutralSubdued
          })
        },
        OptgroupHeader: {
          component: ({ children: o, ...r }) => /* @__PURE__ */ p(
            x,
            {
              count: l == null ? void 0 : l[o].length,
              isBorderless: t,
              ...r,
              children: o
            }
          )
        }
      }
    }
  }
});
export {
  R as getOverrides
};
//# sourceMappingURL=select.overrides.js.map
