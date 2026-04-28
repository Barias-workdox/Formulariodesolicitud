const n = (e) => (s, t = !1) => {
  const o = `@vite-plugin::${e}: ${s}`;
  if (t) {
    console.error(o);
    return;
  }
  console.log(o);
};
export {
  n as composeVitePluginLog
};
//# sourceMappingURL=utils.js.map
