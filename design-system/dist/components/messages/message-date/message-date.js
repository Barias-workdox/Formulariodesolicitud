import { jsxs as m } from "react/jsx-runtime";
import { LabelSmall as p } from "baseui/typography";
import l from "lodash/isEqual";
import { useCss as c } from "../../utils/hooks/use-css.js";
import { useDateUtilsWithLocale as d } from "../../utils/hooks/use-date-util-with-locale.js";
import "@webdoxclm/document-viewer-front/i18n";
import "@webdoxclm/document-viewer-front/locales/en.json";
import "@webdoxclm/document-viewer-front/locales/es.json";
import "@webdoxclm/document-viewer-front/locales/pt.json";
import "i18next";
import "i18next-http-backend";
import "lodash/mergeWith";
import "react-i18next";
import { useTranslation as f } from "../../utils/i18n/utils.js";
const g = {
  dateStyles: (o, t) => ({
    display: "inline-block",
    borderTop: t ? "none" : `1px solid ${o.colors.neutralWashed}`,
    paddingTop: o.spacing.spacingMd,
    marginTop: o.spacing.spacingXs
  })
}, j = ({
  isEditing: o,
  updatedAt: t,
  createdAt: s
}) => {
  const { theme: i } = c(), { t: r } = f(), { formatDatetime: e } = d(), a = t ? !l(new Date(t), new Date(s)) : !1, n = e(t || s);
  return /* @__PURE__ */ m(
    p,
    {
      color: "contentPrimary",
      $style: g.dateStyles(i, o),
      children: [
        a && r("messages.edited"),
        " ",
        n
      ]
    }
  );
};
export {
  j as MessageDate
};
//# sourceMappingURL=message-date.js.map
