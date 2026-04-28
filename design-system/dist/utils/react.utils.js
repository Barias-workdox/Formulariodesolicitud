import o, { Children as l, isValidElement as a } from "react";
import { isFragment as p } from "react-is";
const s = (e) => typeof e == "string" || typeof e == "number" ? String(e) : Array.isArray(e) ? l.toArray(e).map(s).join("") : a(e) ? s(e.props.children) : "", m = (e, t = []) => {
  if (p(e))
    return m(e.props.children, t);
  const n = [];
  return o.Children.forEach(e, (r) => {
    o.isValidElement(r) && typeof r.type != "string" && t.includes(r.type) ? n.push(r) : (console.warn(r), console.warn(
      "This element cannot be rendered, please use the allowed elements: ",
      t.map((i) => i.name).join(", ")
    ));
  }), n;
}, f = (e, t = []) => {
  let n;
  return o.Children.forEach(e, (r) => {
    if (o.isValidElement(r) && typeof r.type != "string" && t.includes(r.type)) {
      n = r;
      return;
    } else
      console.warn(
        "This element cannot be rendered, please use the allowed elements: ",
        t.map((i) => i.name).join(", ")
      );
  }), n;
};
export {
  m as getAllAllowedComponent,
  f as getAllowedComponent,
  s as getStringFromReactNode
};
//# sourceMappingURL=react.utils.js.map
