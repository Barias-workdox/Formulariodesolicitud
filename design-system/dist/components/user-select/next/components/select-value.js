import { jsx as t } from "react/jsx-runtime";
import "../../../list/list.js";
import "../../../list/virtualized-list.js";
import { AvatarListItem as m } from "../../../list/components/avatar-list-item/avatar-list-item.js";
import "../../../list/components/file-list-item/file-list-item.js";
import "../../../list/components/list-item/list-item.js";
import { Text as s } from "../../../text/text.js";
import { useCss as i } from "../../../utils/hooks/use-css.js";
import { getTextStyles as u } from "../user-select.styles.js";
const S = ({ option: e, size: l, disabled: r }) => {
  const { theme: o } = i();
  return /* @__PURE__ */ t(
    m,
    {
      avatarProps: {
        disabled: r,
        backgroundColor: r ? "neutralSubtle" : "peaceSubtle",
        name: e.label,
        overrides: {
          Initials: {
            style: ({ $theme: a }) => ({
              color: a.colors[r ? "neutralDepressed" : "neutralMedium"]
            })
          }
        }
      },
      label: /* @__PURE__ */ t(
        s,
        {
          variant: "body",
          margin: 0,
          fontWeight: "400",
          color: r ? "neutralDepressed" : "neutralSubdued",
          $style: u(l, o),
          children: e.email ? `${e.label} (${e.email})` : e.label
        }
      ),
      overrides: {
        Root: {
          style: {
            padding: 0
          }
        }
      }
    }
  );
};
export {
  S as SelectValue
};
//# sourceMappingURL=select-value.js.map
