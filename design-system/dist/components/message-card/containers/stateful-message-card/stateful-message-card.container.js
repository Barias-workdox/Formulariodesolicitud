import { jsx as c } from "react/jsx-runtime";
import { useState as l } from "react";
import { noop as s } from "../../../../utils/noop.js";
import { MessageCardBase as u } from "../../components/message-card-base/message-card-base.js";
const g = ({
  "data-testid": o = "message-card",
  onFocus: a = s,
  onBlur: r = s,
  ...n
}) => {
  const [d, t] = l(!1);
  return /* @__PURE__ */ c(
    u,
    {
      "data-testid": o,
      isActive: d,
      onFocus: (e) => {
        a(e), t(!0);
      },
      onBlur: (e) => {
        r(e), t(!1);
      },
      ...n
    }
  );
};
export {
  g as StatefulMessageCard
};
//# sourceMappingURL=stateful-message-card.container.js.map
