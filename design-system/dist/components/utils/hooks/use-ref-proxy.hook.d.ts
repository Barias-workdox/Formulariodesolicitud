import { MutableRefObject } from 'react';
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
export declare const useRefProxy: <T>() => ProxiedRef<T>;
