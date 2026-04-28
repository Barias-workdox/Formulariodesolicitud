import { jsxs as m, jsx as o } from "react/jsx-runtime";
import { ReactComponent as s } from "../../../../../../../../../assets/icons/webdox-ai/brain-icon.svg.js";
import { ReactComponent as p } from "../../../../../../../../../assets/icons/webdox-ai/legal-whisper-icon.svg.js";
import { Tag as c } from "../../../../../../../../tag/next/tag.js";
import { Text as d } from "../../../../../../../../text/text.js";
import { useDateUtilsWithLocale as g } from "../../../../../../../../utils/hooks/use-date-util-with-locale.js";
import { StyledContainer as f } from "./styled-components/styled-container.js";
const l = {
  brainCompanion: {
    kind: "positive",
    icon: s
  },
  legalWhisper: {
    kind: "negative",
    icon: p
  }
}, T = ({
  dataTestId: n = "answer-header",
  createdAt: t = "",
  suiteAIOption: i = "brainCompanion"
}) => {
  const { formatDateAsText: e } = g(), { kind: r, icon: a } = l[i];
  return /* @__PURE__ */ m(f, { children: [
    /* @__PURE__ */ o(
      c,
      {
        dataTestId: `${n}__tag`,
        kind: r,
        variant: "outlined",
        icon: a,
        shape: "rounded",
        size: "sm"
      }
    ),
    /* @__PURE__ */ o(
      d,
      {
        margin: 0,
        variant: "microCopy",
        children: e(t, !0)
      }
    )
  ] });
};
export {
  T as AnswerHeader
};
//# sourceMappingURL=answer-header.js.map
