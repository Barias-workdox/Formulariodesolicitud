import { jsx as r } from "react/jsx-runtime";
import { useCss as c } from "../../../utils/hooks/use-css.js";
import { MessageListItem as d } from "./message-list-item.js";
const m = {
  wrapperStyles: (e) => ({
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    gap: e.spacing.spacingXs,
    margin: 0,
    padding: 0
  })
}, y = ({
  dataTestId: e,
  items: i,
  zIndex: n,
  onClick: o
}) => {
  const { wrapperStyles: l } = c(m), p = (t) => {
    o(t);
  };
  return /* @__PURE__ */ r(
    "ul",
    {
      "data-testid": `${e}--wrapper`,
      className: l,
      children: i.map((t) => {
        const { label: s, id: a } = t;
        return /* @__PURE__ */ r(
          d,
          {
            "data-testid": `{dataTestId}--item-${a}`,
            onClick: () => p(t),
            tooltipProps: { zIndex: n, content: s },
            children: s
          },
          a
        );
      })
    }
  );
};
export {
  y as MessageList
};
//# sourceMappingURL=message-list.js.map
