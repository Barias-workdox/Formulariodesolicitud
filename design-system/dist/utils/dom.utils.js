const s = ({
  element: o,
  tolerance: t = 0
}) => {
  if (!(o instanceof HTMLElement)) return !1;
  const { scrollHeight: l, scrollTop: r, clientHeight: c } = o;
  return l - r <= c + t;
}, n = ({
  element: o,
  tolerance: t = 0,
  behavior: l = "auto"
}) => {
  o instanceof HTMLElement && o.scrollTo({
    left: 0,
    top: o.scrollHeight + t,
    behavior: l
  });
};
export {
  n as scrollToBottom,
  s as validateIsScrolledToBottom
};
//# sourceMappingURL=dom.utils.js.map
