import { jsx as d } from "react/jsx-runtime";
import { useState as c, useEffect as x } from "react";
import { GenerativeText as l } from "./generative-text.js";
const g = ({
  generativeText: i,
  accumulatedText: n,
  ...u
}) => {
  const [o, s] = c({
    accumulatedText: n,
    generativeText: i,
    isLoading: !1
  });
  return x(() => {
    o.isLoading ? s((e) => ({
      ...e,
      queuedTexts: {
        accumulatedText: n,
        generativeText: i
      }
    })) : s((e) => ({
      ...e,
      isLoading: !0,
      queuedTexts: void 0,
      accumulatedText: n,
      generativeText: i
    }));
  }, [n, i]), /* @__PURE__ */ d(
    l,
    {
      ...u,
      onFinish: () => {
        s((e) => {
          const { queuedTexts: t } = e, a = t == null ? void 0 : t.accumulatedText, r = t == null ? void 0 : t.generativeText;
          return {
            ...e,
            isLoading: !1,
            queuedTexts: void 0,
            ...a && {
              accumulatedText: a
            },
            ...r && {
              generativeText: r
            }
          };
        });
      },
      accumulatedText: o.accumulatedText,
      generativeText: o.generativeText
    }
  );
};
export {
  g as GenerativeTextController
};
//# sourceMappingURL=generative-text.controller.js.map
