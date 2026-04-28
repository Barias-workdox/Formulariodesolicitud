import { useCss as i } from "../../../../../utils/hooks/use-css.js";
const a = () => {
  const { theme: e } = i();
  return {
    getSectionedCardOverrides: ({
      fullHeight: r = !1,
      maxHeight: o = "unset"
    } = {}) => {
      const n = r ? 1 : "unset";
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
          maxHeight: o,
          display: "flex",
          flexDirection: "column",
          gap: e.spacing.spacingXs,
          padding: e.spacing.spacingXs,
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
//# sourceMappingURL=data-extraction-beta.overrides.js.map
