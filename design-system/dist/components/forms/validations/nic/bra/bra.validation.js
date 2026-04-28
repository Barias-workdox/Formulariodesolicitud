const n = ({
  /** The raw NIC string to validate. */
  rawNic: s
}) => {
  let r = 0, t;
  if (s = s.replace(/[^\d]/g, ""), s === "00000000000")
    return !1;
  for (let e = 1; e <= 9; e++)
    r += parseInt(s.substring(e - 1, e)) * (11 - e);
  if (t = r * 10 % 11, (t === 10 || t === 11) && (t = 0), t !== parseInt(s.substring(9, 10)))
    return !1;
  r = 0;
  for (let e = 1; e <= 10; e++)
    r += parseInt(s.substring(e - 1, e)) * (12 - e);
  return t = r * 10 % 11, (t === 10 || t === 11) && (t = 0), t === parseInt(s.substring(10, 11));
};
export {
  n as validateBRANic
};
//# sourceMappingURL=bra.validation.js.map
