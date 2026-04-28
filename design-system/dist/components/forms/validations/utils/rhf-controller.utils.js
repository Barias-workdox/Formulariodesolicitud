const o = (r) => {
  if (!r || typeof r != "object")
    return;
  const e = r;
  if ("message" in e && typeof e.message == "string")
    return e.message;
  for (const t in e)
    if (Object.prototype.hasOwnProperty.call(e, t)) {
      const s = o(e[t]);
      if (s)
        return s;
    }
};
export {
  o as findFirstErrorMessage
};
//# sourceMappingURL=rhf-controller.utils.js.map
