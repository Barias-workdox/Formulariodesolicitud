import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { NotebookReference as l, Search as s } from "@carbon/icons-react";
import { COMMON_HEIGHT_32 as p, COMMON_HEIGHT_44 as c } from "../../constants/common.constants.js";
import { themedStyled as o } from "../../themes/utilities.js";
import { Text as d } from "../text/text.js";
const x = o("div", () => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  wordBreak: "break-all"
})), h = o("span", ({ $theme: t }) => ({
  display: "flex",
  alignItems: "center",
  paddingLeft: t.spacing.spacing2xs
})), C = ({
  theme: t,
  placeholder: a,
  dataTestId: e
}) => ({
  Placeholder: {
    component: ({ $disabled: n }) => /* @__PURE__ */ i(
      d,
      {
        variant: "bodySmall",
        margin: 0,
        display: "flex",
        alignItems: "center",
        color: n ? "neutralDepressed" : "neutralSubdued",
        children: [
          /* @__PURE__ */ r(
            s,
            {
              size: 16,
              style: { marginRight: t.spacing.spacingXs }
            }
          ),
          " ",
          a
        ]
      }
    )
  },
  SelectArrow: {
    component: () => /* @__PURE__ */ r(l, { size: 16 })
  },
  SingleValue: {
    style: {
      display: "flex",
      alignItems: "center"
    },
    props: {
      "data-testid": `${e}--value`
    }
  },
  Input: {
    props: {
      "data-testid": `${e}--input`
    }
  },
  ControlContainer: {
    props: {
      "data-testid": `${e}--control-container`
    }
  },
  ValueContainer: {
    style: ({ $size: n }) => ({
      paddingTop: 0,
      paddingBottom: 0,
      height: n === "compact" ? p : c,
      display: "flex",
      alignItems: "center"
    }),
    props: {
      "data-testid": `${e}--value-container`
    }
  }
});
export {
  h as ThemedCreatableIconOption,
  x as ThemedCreatableOption,
  C as getUserSelectOverrides
};
//# sourceMappingURL=user-select.style.js.map
