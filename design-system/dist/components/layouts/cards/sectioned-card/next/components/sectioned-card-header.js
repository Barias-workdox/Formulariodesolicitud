import { jsx as a } from "react/jsx-runtime";
import { useEffect as c } from "react";
import { Header as n } from "../../../../../header/header.container.js";
import { noop as f } from "../../../../../../utils/noop.js";
import { useSectionedCard as p } from "../sectioned-card.provider.js";
import { getBorderRadiusSize as z, getHeaderSize as S } from "../utils/get-size-map.js";
const C = (r) => {
  const { size: o, cornerSize: i, isDraggable: t, isDisabled: s, setActiveKey: e = f } = p();
  c(() => {
    e();
  }, [e]);
  const d = S(o), m = z(i);
  return /* @__PURE__ */ a(
    n,
    {
      ...r,
      isDraggable: t,
      isDisabled: s,
      size: d,
      borderRadius: m
    }
  );
};
export {
  C as SectionedCardHeader
};
//# sourceMappingURL=sectioned-card-header.js.map
