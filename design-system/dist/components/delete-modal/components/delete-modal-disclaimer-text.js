import { jsx as r } from "react/jsx-runtime";
import { Text as i } from "../../text/text.js";
import { useCss as o } from "../../utils/hooks/use-css.js";
const a = ({
  text: t
}) => {
  const { theme: e } = o();
  return /* @__PURE__ */ r(
    i,
    {
      variant: "body",
      margin: 0,
      fontWeight: "400",
      $style: { padding: `${e.spacing.spacing2xs} 0px` },
      children: t
    }
  );
};
export {
  a as DeleteModalDisclaimerText
};
//# sourceMappingURL=delete-modal-disclaimer-text.js.map
