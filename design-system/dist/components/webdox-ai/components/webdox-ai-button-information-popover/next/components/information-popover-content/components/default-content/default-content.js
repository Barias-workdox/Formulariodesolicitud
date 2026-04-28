import { jsx as o } from "react/jsx-runtime";
import { Text as m } from "../../../../../../../../text/text.js";
import { useCss as s } from "../../../../../../../../utils/hooks/use-css.js";
import { DSTrans as n } from "../../../../../../../../utils/i18n/translation-component.js";
import { styles as l } from "../../../../webdox-ai-button-information-popover.styles.js";
const f = ({ children: r }) => {
  const { boldTextStyles: t, theme: e } = s(l);
  return /* @__PURE__ */ o(
    m,
    {
      variant: "bodySmall",
      margin: 0,
      color: e.colors.neutralSubdued,
      children: /* @__PURE__ */ o(
        n,
        {
          components: {
            bold: /* @__PURE__ */ o("span", { className: t })
          },
          children: r
        }
      )
    }
  );
};
export {
  f as DefaultContent
};
//# sourceMappingURL=default-content.js.map
