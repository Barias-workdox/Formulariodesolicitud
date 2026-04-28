const o = (i) => {
  const t = [];
  let n = !1;
  function u() {
    if (n || t.length === 0)
      return;
    const e = t.shift();
    if (!e)
      return;
    n = !0, i({
      ...e,
      callback: (c, l) => {
        n = !1, u(), setTimeout(() => {
          c ? e.callback(c, l) : e.callback(null, l);
        }, 0);
      }
    });
  }
  function s(e) {
    t.push(e), setTimeout(u, 0);
  }
  return s;
};
export {
  o as queue
};
//# sourceMappingURL=queue.js.map
