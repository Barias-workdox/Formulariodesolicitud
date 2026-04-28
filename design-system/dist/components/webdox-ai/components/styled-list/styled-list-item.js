import { jsx as n } from "react/jsx-runtime";
import { useMemo as s } from "react";
import { ListItem as c } from "baseui/list";
import { BACKGROUND_ICON_WRAPPER_CLASS as t } from "../../../background-icon/background-icon.constants.js";
import { mergeOverridesDeep as a } from "../../../utils/baseui/helpers.js";
const e = {
  Root: {
    style: ({ $theme: o }) => ({
      color: o.colors.neutralSubdued,
      border: `1px solid ${o.colors.neutralSubtle}`,
      gap: o.spacing.spacingSm,
      padding: o.spacing.spacingXs,
      width: "100%",
      transition: "all 100ms ease-in-out",
      cursor: "pointer",
      outline: "none",
      ":hover": {
        color: o.colors.neutralMedium,
        borderColor: o.colors.neutralSubtle,
        backgroundColor: o.colors.neutralSubtle
      },
      ":active": {
        color: o.colors.neutral,
        borderColor: o.colors.neutral,
        backgroundColor: o.colors.transparent
      },
      ":focus": {
        color: o.colors.neutral,
        borderColor: o.colors.neutral,
        backgroundColor: o.colors.transparent
      },
      // Add pseudo class to background icon
      ...[":hover", ":active", ":focus"].reduce((r, l) => ({
        ...r,
        [`${l} .${t}`]: {
          background: o.colors.powerSubtle,
          color: o.colors.power
        }
      }), {})
    })
  },
  Content: {
    style: ({ $theme: o }) => ({
      width: `calc(100% - ${o.spacing.spacing2xs})`,
      padding: 0,
      margin: 0,
      border: 0,
      minHeight: 0
    })
  },
  ArtworkContainer: {
    style: ({ $theme: o }) => ({
      background: o.colors.neutralSubtle,
      color: o.colors.neutralSubdued,
      flexShrink: 1,
      borderRadius: "50%",
      width: "max-content"
    })
  }
}, g = ({ overrides: o, ...r }) => {
  const l = s(() => a(e, o), [o]);
  return /* @__PURE__ */ n(
    c,
    {
      overrides: l,
      ...r
    }
  );
};
export {
  g as StyledListItem
};
//# sourceMappingURL=styled-list-item.js.map
