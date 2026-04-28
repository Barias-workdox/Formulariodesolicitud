import { jsx as n } from "react/jsx-runtime";
import "../../../list/list.js";
import "../../../list/virtualized-list.js";
import { AvatarListItem as t } from "../../../list/components/avatar-list-item/avatar-list-item.js";
import "../../../list/components/file-list-item/file-list-item.js";
import "../../../list/components/list-item/list-item.js";
import { useCss as g } from "../../../utils/hooks/use-css.js";
const u = ({ option: p, size: s }) => {
  const { theme: a } = g(), i = {
    "32px": a.spacing.spacingXs,
    compact: a.spacing.spacingXs,
    "44px": a.spacing.spacingMd,
    default: a.spacing.spacingMd
  }, c = {
    "32px": a.spacing.spacing2xs,
    compact: a.spacing.spacing2xs,
    "44px": a.spacing.spacingXs,
    default: a.spacing.spacingXs
  };
  return /* @__PURE__ */ n(
    t,
    {
      size: {
        "32px": "sm",
        compact: "sm",
        "44px": "md",
        default: "md"
      }[s] ?? "md",
      avatarProps: {
        backgroundColor: "peaceSubtle",
        name: p.label
      },
      label: p.label,
      details: p.email,
      overrides: {
        Root: {
          style: {
            paddingTop: c[s] ?? a.spacing.spacingMd,
            paddingBottom: c[s] ?? a.spacing.spacingMd,
            paddingLeft: i[s] ?? a.spacing.spacingMd,
            paddingRight: i[s] ?? a.spacing.spacingMd
          }
        }
      }
    }
  );
};
export {
  u as SelectOption
};
//# sourceMappingURL=select-option.js.map
