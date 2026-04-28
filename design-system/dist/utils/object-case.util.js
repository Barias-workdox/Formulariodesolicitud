import t from "lodash";
function a(e, s) {
  if (typeof e != "object" || e === null)
    return e;
  if (Array.isArray(e))
    return e.map((n) => a(n, s));
  const r = {};
  for (const [n, c] of Object.entries(e))
    r[s(n)] = a(c, s);
  return r;
}
const k = (e) => a(e, t.snakeCase), u = (e) => a(e, t.camelCase), C = (e) => t.snakeCase(e);
export {
  u as keysToCamelCase,
  k as keysToSnakeCase,
  C as valueToSnakeCase
};
//# sourceMappingURL=object-case.util.js.map
