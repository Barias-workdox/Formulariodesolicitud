const s = ({ rawNic: e }) => {
  let l = `${e.slice(-4, -1)}-${e.substr(e.length - 1)}`;
  for (let t = 4; t < e.length; t += 3)
    l = e.slice(-3 - t, -t) + "." + l;
  return l.toUpperCase();
}, o = ({ rawNic: e }) => e.replace(/[^0-9kK]/gi, "").toUpperCase();
export {
  o as cleanCHLNic,
  s as formatCHLNic
};
//# sourceMappingURL=chl.format.js.map
