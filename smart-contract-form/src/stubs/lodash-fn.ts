// Stub for lodash subpath imports (lodash/deburr, lodash/debounce, lodash/isEqual, etc.)
// Each is imported as a default and called as a function.
//
// Behavior by use case:
//  - lodash/deburr:   fn(str) => str  (identity on non-functions)
//  - lodash/debounce: fn(callback, ms) => callback (with .cancel/.flush attached)
//  - lodash/isEqual:  fn(a, b) => false
//  - lodash/isNil:    fn(v) => false
//
// A single export handles all cases: if called with a function as first arg,
// attach .cancel/.flush and return it (debounce). Otherwise return first arg as-is.

const stub: any = function (a?: unknown, _b?: unknown) {
  if (typeof a === 'function') {
    // debounce-like: return the function with cancel/flush
    (a as any).cancel = () => {};
    (a as any).flush = () => {};
    return a;
  }
  // deburr / isEqual / isNil: return value or false
  if (arguments.length >= 2) return false; // isEqual(a, b) → false
  return a; // deburr(str) → str, isNil(v) → v (truthy check done by caller)
};

export default stub;
