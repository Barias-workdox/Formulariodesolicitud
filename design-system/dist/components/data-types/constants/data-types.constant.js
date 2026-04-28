import { Money as i, NotebookReference as o, CharacterWholeNumber as e, Boolean as T, List as _, Calendar as r, Email as A, TextAlignJustify as a, TextScale as l, DocumentUnknown as s } from "@carbon/icons-react";
const t = {
  directory: { icon: o },
  ref: { icon: o },
  money: { icon: i }
}, c = {
  string: { icon: l },
  text: { icon: a },
  email: { icon: A },
  date: { icon: r },
  list: { icon: _ },
  boolean: { icon: T },
  number: { icon: e },
  percentage: { icon: e }
}, D = { unknown: { icon: s } }, E = {
  ...t,
  ...c,
  ...D
}, P = Object.keys(E), m = P.flatMap((n) => ({
  id: n,
  label: n
})).filter(({ id: n }) => n !== "unknown"), k = Object.keys(t).map((n) => n).filter((n) => n !== "unknown"), b = Object.keys(c).map((n) => n).filter((n) => n !== "unknown");
export {
  t as COMPLEX_DATA_TYPE,
  k as COMPLEX_DATA_TYPE_IDS,
  E as DATA_TYPES,
  P as DATA_TYPES_IDS,
  m as DATA_TYPE_OPTIONS_IDS,
  c as PRIMITIVE_DATA_TYPE,
  b as PRIMITIVE_DATA_TYPE_IDS,
  D as UNKNOWN_DATA_TYPE
};
//# sourceMappingURL=data-types.constant.js.map
