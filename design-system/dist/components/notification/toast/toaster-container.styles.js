import { PLACEMENT as o } from "baseui/toast";
const e = ({
  zIndex: r,
  marginX: a,
  marginY: g
}) => ({
  Root: {
    style: ({
      $theme: i,
      $placement: m
    }) => {
      const n = a ?? i.spacing.spacingMd, t = g ?? i.spacing.spacingMd, p = {
        [o.topLeft]: {
          marginTop: t,
          marginLeft: n
        },
        [o.top]: {
          marginTop: t
        },
        [o.topRight]: {
          marginTop: t,
          marginRight: n
        },
        [o.bottomRight]: {
          marginBottom: t,
          marginRight: n
        },
        [o.bottom]: {
          marginBottom: t
        },
        [o.bottomLeft]: {
          marginBottom: t,
          marginLeft: n
        }
      }[m];
      return {
        zIndex: r,
        ...p
      };
    }
  }
});
export {
  e as toastOverrides
};
//# sourceMappingURL=toaster-container.styles.js.map
