import { heightMap as d } from "../button/button.styles.js";
import { getTransitionStyles as i } from "../../utils/styles.utils.js";
import { POPOVER_MIN_WIDTH as p, FILTER_MAX_WIDTH as b, FILTER_MIN_WIDTH as g } from "./filter.constants.js";
const f = ({ $theme: r, $kind: n, $isActive: s }) => {
  if (s)
    return {
      color: r.colors.brandMedium,
      backgroundColor: r.colors.brandWashed,
      borderColor: r.colors.brandDepressed
    };
  switch (n) {
    case "stroked":
      return {
        color: r.colors.neutralSubdued,
        backgroundColor: r.colors.bgBase,
        borderColor: r.colors.neutralSubtle
      };
    case "filled":
      return {
        color: r.colors.neutralSubdued,
        backgroundColor: r.colors.neutralBase || r.colors.neutralWashed,
        borderColor: r.colors.neutralBase || r.colors.neutralWashed
      };
    default:
      throw new Error(`Unknown kind: ${n}`);
  }
}, y = ({
  $isActive: r,
  $isOpen: n,
  $width: s,
  $minWidth: t = g,
  $maxWidth: c = b,
  $popoverMinWidth: u = p
}) => ({
  Button: {
    props: {
      overrides: {
        BaseButton: {
          style: ({ $theme: o, $kind: l, $disabled: a }) => {
            const e = {
              color: o.colors.neutral,
              borderColor: o.colors.neutralSubtle,
              backgroundColor: o.colors.neutralSubtle
            };
            return {
              ...f({ $theme: o, $kind: l, $isActive: r }),
              border: "1px solid",
              padding: `0 ${o.spacing.spacingXs}`,
              gap: o.spacing.spacingXs,
              minWidth: t,
              maxWidth: c,
              ...!r && n && !a && e,
              ...!r && !a && {
                ":hover": e,
                ":focus": e,
                ":hover div[data-end-enhancer=true]": {
                  borderColor: `${o.colors.neutralDepressed}`
                }
              },
              ":disabled div[data-end-enhancer=true]": {
                borderColor: o.colors.neutralDepressed
              }
            };
          }
        },
        StartEnhancer: {
          style: {
            padding: 0,
            margin: 0,
            flexShrink: 0
          }
        },
        EndEnhancer: {
          props: {
            // Property used to identify the element for parent :hover styling
            "data-end-enhancer": "true"
          },
          style: ({ $theme: o, $size: l }) => ({
            transition: i(["border-color"]),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: `0 -${o.spacing.spacingXs} 0 0`,
            height: d[l],
            width: `calc(${d[l]} - 2px)`,
            flexShrink: 0,
            borderLeft: "1px solid",
            borderColor: r ? o.colors.brandDepressed : o.colors.neutralSubtle
          })
        }
      }
    }
  },
  Popover: {
    props: {
      overrides: {
        Body: {
          style: {
            width: `${s}px`,
            minWidth: u
          }
        }
      }
    }
  }
});
export {
  y as getOverrides
};
//# sourceMappingURL=filter.styles.js.map
