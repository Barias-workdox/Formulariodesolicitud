import { useRef as c, useMemo as o } from "react";
const l = () => {
  const n = c(null);
  return o(() => {
    const u = (e) => {
    };
    return new Proxy(u, {
      /**
       * Intercepts the function call when the proxy is used as a function.
       * When React uses a callback ref, it calls the function with the DOM node.
       *
       * @param target - The target object.
       * @param thisArg - The `this` argument for the call.
       * @param args - The list of arguments for the call.
       */
      apply: (e, r, t) => {
        n.current = t[0] || null;
      },
      /**
       * Intercepts property access. Used to get `myRef.current`.
       *
       * @param target - The target object.
       * @param prop - The property being accessed.
       * @returns The value of the property.
       */
      get: (e, r) => r === "current" ? n.current : Reflect.get(e, r),
      /**
       * Intercepts property assignment. Used for `myRef.current = ...`.
       *
       * @param target - The target object.
       * @param prop - The property being assigned.
       * @param value - The value to assign.
       * @returns A boolean indicating whether the assignment was successful.
       */
      set: (e, r, t) => r === "current" ? (n.current = t, !0) : Reflect.set(e, r, t)
    });
  }, []);
};
export {
  l as useRefProxy
};
//# sourceMappingURL=use-ref-proxy.hook.js.map
