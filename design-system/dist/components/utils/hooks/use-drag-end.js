import { useCallback as x } from "react";
function g(l) {
  const c = x(
    (p) => {
      const e = JSON.parse(JSON.stringify(l)), { destination: n, source: r } = p;
      if (!n || (n == null ? void 0 : n.index) === (r == null ? void 0 : r.index))
        return e;
      if ((n == null ? void 0 : n.index) === (r == null ? void 0 : r.index))
        return;
      const [o] = e.splice(r == null ? void 0 : r.index, 1);
      return e.splice(n == null ? void 0 : n.index, 0, o), e;
    },
    [l]
  ), f = x(
    (p) => {
      const e = JSON.parse(JSON.stringify(l));
      return e.splice(p, 1), e;
    },
    [l]
  );
  return {
    onDragEnd: c,
    onRemoveElement: f
  };
}
export {
  g as useDragEnd
};
//# sourceMappingURL=use-drag-end.js.map
