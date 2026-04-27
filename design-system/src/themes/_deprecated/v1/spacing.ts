/** @deprecated - only used in DS v1 */
export interface Spacing {
  /** @deprecated - only used in DS v1 */
  scale0: string;
  /** @deprecated - only used in DS v1 */
  scale1: string;
  /** @deprecated - only used in DS v1 */
  scale2: string;
  /** @deprecated - only used in DS v1 */
  scale3: string;
  /** @deprecated - only used in DS v1 */
  scale4: string;
  /** @deprecated - only used in DS v1 */
  scale5: string;
}

/**
 * Spacing used by default. Every padding, margin or gap should be approximated to one of these tokens in the app
 *
 * @deprecated - only used in DS v1
 */
export const spacingV1: Spacing = {
  scale0: '.25rem',
  scale1: '.5rem',
  scale2: '1rem',
  scale3: '1.5rem',
  scale4: '2rem',
  scale5: '3rem',
};
