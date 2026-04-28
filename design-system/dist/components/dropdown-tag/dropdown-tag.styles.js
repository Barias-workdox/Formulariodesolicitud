import { ChevronDown as a } from "@carbon/icons-react";
import { Text as c } from "../text/text.js";
import { noop as i } from "../../utils/noop.js";
const e = {
  success: {
    borderColor: "positive"
  },
  error: {
    borderColor: "negative"
  },
  default: {
    borderColor: "neutralSubtle"
  }
}, p = (l) => e[l] ?? e.default, C = ({
  dataTestId: l,
  kind: s,
  disabled: t
}) => {
  const { borderColor: n } = p(s);
  return {
    Root: {
      style: ({ $theme: o, $disabled: r }) => ({
        margin: 0,
        backgroundColor: r ? o.colors.neutralSubtle : o.colors.bgBase,
        border: "1px solid",
        borderColor: r ? o.colors.neutralSubtle : o.colors[n],
        cursor: r ? "not-allowed" : "pointer",
        transition: "all .25s ease-in-out",
        ":hover": {
          borderColor: o.colors.neutralSubtle,
          backgroundColor: o.colors.neutralWashed
        },
        ":active": {
          borderColor: o.colors.neutral,
          backgroundColor: o.colors.bgBase
        }
      }),
      props: {
        "data-testid": l,
        $disabled: t
      }
    },
    Text: {
      props: {
        variant: "microCopy",
        margin: 0,
        fontWeight: "400",
        $disabled: t
      },
      component: c,
      style: ({ $theme: o, $disabled: r }) => ({
        display: "flex",
        alignItems: "center",
        color: r ? o.colors.neutralDepressed : o.colors.neutral,
        maxWidth: "100%",
        textWrap: "nowrap"
      })
    },
    ActionIcon: {
      component: a,
      props: { size: 12 }
    },
    Action: {
      style: ({ $theme: o }) => ({
        color: o.colors.neutral
      }),
      props: {
        onClick: i
      }
    }
  };
}, g = {
  List: {
    style: {
      overflow: "auto",
      maxHeight: "250px"
    }
  }
};
export {
  C as dropdownTagOverrides,
  p as getColors,
  g as menuOverrides
};
//# sourceMappingURL=dropdown-tag.styles.js.map
