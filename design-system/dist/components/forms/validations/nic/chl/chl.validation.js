import { cleanRawNic as s } from "../../utils/format.util.js";
const i = ({ rawNic: l }) => {
  if (l === "")
    return !0;
  const r = s({ rawNic: l, countryCode: "CHL" }).toUpperCase();
  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(r))
    return !1;
  let t = parseInt(r.slice(0, -1), 10), o = 0, e = 1;
  for (; t > 0; )
    e = (e + t % 10 * (9 - o++ % 6)) % 11, t = Math.floor(t / 10);
  return (e > 0 ? `${e - 1}` : "K") === r.slice(-1);
};
export {
  i as validateCHLNic
};
//# sourceMappingURL=chl.validation.js.map
