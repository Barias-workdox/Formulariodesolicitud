import { SublinkProps } from './sublink.interfaces';
export type { SublinkItem, SublinkPosition } from './sublink.interfaces';
/**
 * A component that renders a sublink with a title and a list of items.
 * Items use React Router Link for client-side navigation (no refresh).
 */
export declare const Sublink: import('react').ForwardRefExoticComponent<SublinkProps & import('react').RefAttributes<HTMLDivElement>>;
