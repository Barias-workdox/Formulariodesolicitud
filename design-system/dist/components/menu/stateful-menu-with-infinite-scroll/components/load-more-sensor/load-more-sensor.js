import { jsx as o } from "react/jsx-runtime";
import { useInView as p } from "react-intersection-observer";
import { Spinner as a } from "../../../../spinner/spinner.js";
import "react";
import "baseui/modal";
import "baseui";
import "../../../../modal/components/modal-close-button/modal-close-button.js";
import "../../../../modal/regular-modal.js";
import "../../../../modal/sectioned-modal.js";
import "../../../../spinner/full-spinner/full-spinner-context.js";
import { useCss as d } from "../../../../utils/hooks/use-css.js";
import { styles as f } from "./load-more-sensor.styles.js";
const L = ({
  "data-testid": r = "load-more-sensor",
  isLoadingMore: i,
  onLoadMore: t
}) => {
  const { spinnerContainerStyles: s } = d(f), m = (e) => {
    e && (t ? t(e) : console.error("onLoadMore not implemented"));
  }, { ref: n } = p({
    onChange: m
  });
  return i ? /* @__PURE__ */ o(
    "div",
    {
      "data-testid": `${r}--spinner`,
      className: s,
      children: /* @__PURE__ */ o(a, { size: "sm" })
    }
  ) : /* @__PURE__ */ o(
    "div",
    {
      ref: n,
      "data-testid": r
    }
  );
};
export {
  L as LoadMoreSensor
};
//# sourceMappingURL=load-more-sensor.js.map
