import { jsx as s } from "react/jsx-runtime";
import { useState as p, useEffect as l } from "react";
import { ProgressBar as n } from "../../progress/progress-bar.js";
import "@carbon/icons-react";
import "../../../themes/v3/light/theme.js";
import "../../../themes/v3/dark/theme.js";
import "../../../themes/v3/tokens/typography.js";
import "../../../themes/v3/tokens/breakpoints.js";
import "../../../themes/utilities.js";
import { PERCENTAGE_PROGRESS_PER_INTERVAL as a, INTERVAL as E, COMPLETED_BAR_VALUE as c } from "../delete-modal.constants.js";
const L = ({ onComplete: o }) => {
  const [r, m] = p(0), t = r >= c;
  return l(() => {
    const e = setInterval(() => {
      t || m((i) => i + a);
    }, E);
    return t && (o(), clearInterval(e)), () => {
      clearInterval(e);
    };
  }, [r]), /* @__PURE__ */ s(
    n,
    {
      value: r,
      completed: t
    }
  );
};
export {
  L as DeleteModalCountdown
};
//# sourceMappingURL=delete-modal-countdown.js.map
