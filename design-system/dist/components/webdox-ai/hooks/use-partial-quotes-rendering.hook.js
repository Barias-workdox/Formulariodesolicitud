import { useMemo as g } from "react";
import { useToggle as l } from "react-use";
import { MIN_QUOTES_VISIBLE as c } from "../constants/webdox-ai.constants.js";
const p = ({
  quotes: o,
  minLegalQuotesVisible: t = c
}) => {
  const [e, r] = l(!1), s = o.length > t, n = g(
    () => e ? o : o.slice(0, t),
    [e, t, o]
  );
  return {
    isShowMoreButtonVisible: s,
    onToggleShowAllQuotes: r,
    partialQuotes: n,
    showMoreQuotes: e
  };
};
export {
  p as usePartialQuotesRendering
};
//# sourceMappingURL=use-partial-quotes-rendering.hook.js.map
