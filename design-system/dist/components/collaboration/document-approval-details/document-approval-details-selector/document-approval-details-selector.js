import { jsx as s } from "react/jsx-runtime";
import { useMemo as m, useEffect as p } from "react";
import { FileTypeIcon as c } from "../../../file-type-icon/file-type-icon.js";
import "../../../text/text.js";
import { useCss as f } from "../../../utils/hooks/use-css.js";
import { TitleLayout as d } from "../../../layouts/title-layout/title-layout.js";
import "../../../layouts/title-layout/title-layout.styles.js";
import { Select as u } from "../../../select/select.js";
import { styles as h, optionLabelStyles as g } from "./document-approval-details-selector.styles.js";
const v = (e = []) => e.length === 0 ? [] : e[0].resources.map(({ document: { id: t, name: r, fileExt: o, deletedAt: l } }) => ({
  id: t,
  label: r,
  fileExt: o,
  deletedAt: l
})), L = ({ option: e }, t) => /* @__PURE__ */ s(
  d,
  {
    overrides: g(t),
    startEnhancer: /* @__PURE__ */ s(
      c,
      {
        "data-testid": "document-approval-details-selector__file-icon",
        fileExtension: e.fileExt,
        size: 20
      }
    ),
    titleText: e.label
  }
), A = ({
  "data-testid": e = "document-approval-details-selector",
  documentSelected: t,
  subtasks: r,
  setDocumentSelected: o
}) => {
  const { selectWrapperStyles: l, theme: n } = f(h), i = m(() => v(r), [r]);
  return p(() => {
    if (!t.length) {
      const [a] = i;
      o([a]);
    }
  }, [t, i, o]), /* @__PURE__ */ s("div", { className: l, children: /* @__PURE__ */ s(
    u,
    {
      "data-testid": e,
      options: i,
      value: t,
      onChange: o,
      searchable: !1,
      disabled: i.length < 1,
      getValueLabel: ({ option: a }) => L({ option: a }, n)
    }
  ) });
};
export {
  A as DocumentApprovalDetailsSelector
};
//# sourceMappingURL=document-approval-details-selector.js.map
