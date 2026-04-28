import { useCss as o } from "../../../utils/hooks/use-css.js";
const a = () => {
  const { theme: e } = o();
  return {
    getSectionedCardOverrides: ({
      fullHeight: i = !1,
      maxHeight: r = "unset"
    } = {}) => {
      const n = i ? 1 : "unset";
      return {
        Header: {
          padding: e.spacing.spacingXs
        },
        Root: {
          margin: 0,
          width: "unset",
          flex: n
        },
        Body: {
          maxHeight: r,
          display: "flex",
          flexDirection: "column",
          gap: e.spacing.spacingXs,
          padding: `${e.spacing.spacingSm} ${e.spacing.spacing2xs}`,
          flex: n
        }
      };
    }
  };
}, c = {
  ControlContainer: {
    style: ({ $theme: e, $isFocused: s }) => ({
      border: `solid 1px ${s ? e.colors.power : e.colors.neutralSubtle}`
    })
  },
  ValueContainer: {
    style: ({ $theme: e }) => ({
      color: e.colors.neutral,
      paddingLeft: e.spacing.spacingXs
    })
  },
  IconsContainer: {
    style: ({ $theme: e }) => ({
      paddingRight: e.spacing.spacingXs
    })
  }
};
export {
  c as selectOverrides,
  a as useSectionedCardOverrides
};
//# sourceMappingURL=data-extraction.overrides.js.map
