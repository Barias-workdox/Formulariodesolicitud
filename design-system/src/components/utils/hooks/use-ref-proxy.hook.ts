import { useMemo, useRef, type MutableRefObject } from 'react';

/**
 * A type that represents a ref that can be used as a callback and as a ref object.
 * It's a function that can be passed to the `ref` prop, and it also has a `.current` property.
 */
export type ProxiedRef<T> = MutableRefObject<T | null> & ((node: T | null) => void);

/**
 * Custom React hook that creates a ref that can be used both as a callback ref and a normal ref object.
 * It returns a single value which is a Proxy.
 * This proxy can be passed to a `ref` attribute directly, and you can also access its `.current` property.
 * This is useful for when you need to handle the ref assignment via a callback but also want the convenience of a ref object.
 *
 * @typeparam T - The type of the element or value that the ref will hold.
 * @returns A proxied ref that can be used as both a callback and a ref object.
 *
 * @example
 * ```
 * const myRef = useRefProxy<HTMLDivElement>();
 *
 * useEffect(() => {
 *   // You can access the .current property like a normal ref
 *   if (myRef.current) {
 *     console.log(myRef.current);
 *   }
 * }, []);
 *
 * // You can use it as a callback ref
 * return <div ref={myRef}>Hello, World!</div>;
 * ```
 */
export const useRefProxy = <T>(): ProxiedRef<T> => {
  const ref = useRef<T | null>(null);

  // We use useMemo to ensure the proxy is created only once for the component's lifecycle.
  const proxy = useMemo(() => {
    /**
     * The target of the proxy must be a function for it to be callable.
     * React will call this function when the ref is attached to a DOM element.
     */
    const target = (_node: T | null): void => {
      // This body is a fallback, but the `apply` trap will intercept the call.
    };

    return new Proxy(target, {
      /**
       * Intercepts the function call when the proxy is used as a function.
       * When React uses a callback ref, it calls the function with the DOM node.
       *
       * @param target - The target object.
       * @param thisArg - The `this` argument for the call.
       * @param args - The list of arguments for the call.
       */
      apply: (target, thisArg, args): void => {
        ref.current = args[0] || null;
      },
      /**
       * Intercepts property access. Used to get `myRef.current`.
       *
       * @param target - The target object.
       * @param prop - The property being accessed.
       * @returns The value of the property.
       */
      get: (target, prop): T | null | ((node: T | null) => void) => {
        if (prop === 'current') {
          return ref.current;
        }

        return Reflect.get(target, prop);
      },
      /**
       * Intercepts property assignment. Used for `myRef.current = ...`.
       *
       * @param target - The target object.
       * @param prop - The property being assigned.
       * @param value - The value to assign.
       * @returns A boolean indicating whether the assignment was successful.
       */
      set: (target, prop, value): boolean => {
        if (prop === 'current') {
          ref.current = value;

          return true;
        }

        return Reflect.set(target, prop, value);
      },
    }) as ProxiedRef<T>;
  }, []);

  return proxy;
};
