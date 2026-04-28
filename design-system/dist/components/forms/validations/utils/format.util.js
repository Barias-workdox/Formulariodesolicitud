import { formatCHLNic as n, cleanCHLNic as o } from "../nic/chl/chl.format.js";
import { formatDefaultNic as l, cleanDefaultNic as m } from "../nic/default/default.format.js";
import { cleanMEXNic as N } from "../nic/mex/mex.format.js";
const r = /* @__PURE__ */ new Map([
  [
    "CHL",
    {
      cleanRawNic: o,
      formatRawNic: n
    }
  ],
  [
    "MEX",
    {
      cleanRawNic: N
    }
  ],
  // Default values
  [
    void 0,
    {
      cleanRawNic: m,
      formatRawNic: l
    }
  ]
]), f = ({ rawNic: a, countryCode: c }) => {
  var t;
  return (((t = r.get(c)) == null ? void 0 : t.cleanRawNic) ?? r.get(void 0).cleanRawNic)({ rawNic: a });
}, d = ({ rawNic: a = "", countryCode: c }) => {
  var e;
  if (a.trim() === "")
    return "";
  const i = f({ rawNic: a, countryCode: c });
  return (((e = r.get(c)) == null ? void 0 : e.formatRawNic) ?? r.get(void 0).formatRawNic)({ rawNic: i });
}, p = (a) => {
  if (a === void 0)
    return "";
  const c = a.replace(/[^0-9,]/g, ""), [i, t = ""] = c.split(","), e = i.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, "$1.");
  return c.includes(",") ? `${e || 0},${t}` : e;
};
export {
  r as allRawNicFormatMap,
  f as cleanRawNic,
  p as commaSeparatedAmount,
  d as formatRawNic
};
//# sourceMappingURL=format.util.js.map
