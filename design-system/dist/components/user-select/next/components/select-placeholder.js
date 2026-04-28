import { jsxs as o, jsx as s } from "react/jsx-runtime";
import { Search as i } from "@carbon/icons-react";
import { Text as m } from "../../../text/text.js";
import { useCss as a } from "../../../utils/hooks/use-css.js";
import { COMMON_ICON_SIZE_16 as l } from "../../../../constants/common.constants.js";
const g = ({
  isDisabled: e,
  placeholder: r
}) => {
  const { theme: t } = a();
  return /* @__PURE__ */ o(
    m,
    {
      variant: "bodySmall",
      margin: 0,
      display: "flex",
      alignItems: "center",
      color: e ? "neutralDepressed" : "neutralSubdued",
      children: [
        /* @__PURE__ */ s(
          i,
          {
            size: l,
            style: { marginRight: t.spacing.spacingXs }
          }
        ),
        " ",
        r
      ]
    }
  );
};
export {
  g as SelectPlaceholder
};
//# sourceMappingURL=select-placeholder.js.map
