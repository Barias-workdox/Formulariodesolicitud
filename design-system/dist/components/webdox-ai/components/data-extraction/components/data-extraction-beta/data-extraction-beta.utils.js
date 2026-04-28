import { INLINE_INPUT_MODE as r } from "./data-extraction-beta.constants.js";
const i = (n) => {
  const { caption: t, input: e } = r;
  return t === n ? e : t;
}, s = ({
  metadataList: n,
  localValues: t,
  metadataId: e
}) => {
  const a = n.find(({ id: o }) => o === e);
  return t[e] !== a.value;
}, c = ({
  metadataList: n,
  localValues: t,
  prevMode: e
}) => Object.keys(e).reduce((a, o) => (s({ metadataList: n, localValues: t, metadataId: o }) ? a[o] = "input" : a[o] = "caption", a), {}), d = (n) => {
  const t = {};
  return n.forEach(({ id: e }) => {
    t[e] = "caption";
  }), t;
}, p = (n) => {
  const t = {};
  return n.forEach(({ id: e, value: a }) => {
    t[e] = a;
  }), t;
};
export {
  i as inlineInputToggle,
  s as isValueUpdated,
  p as mapMetadataListValue,
  d as mapMetadataMode,
  c as resetValues
};
//# sourceMappingURL=data-extraction-beta.utils.js.map
