/**
 * Elevation tokens for consistent box-shadow effects across the application.
 * These values provide visual depth and hierarchy through shadow effects.
 * Each elevation level includes variants for all four directions (down, up, left, right).
 */

interface ElevationDirections {
  down: string;
  up: string;
  left: string;
  right: string;
}

export interface Elevations {
  sm: ElevationDirections;
  md: ElevationDirections;
  lg: ElevationDirections;
}

export const elevations: Elevations = {
  sm: {
    down: '0px 2px 4px -1px rgba(26,26,26,0.04), 0px 4px 8px -2px rgba(26,26,26,0.04)',
    up: '0px -2px 4px -1px rgba(26,26,26,0.04), 0px -4px 8px -2px rgba(26,26,26,0.04)',
    left: '-2px 0px 4px -1px rgba(26,26,26,0.04), -4px 0px 8px -2px rgba(26,26,26,0.04)',
    right: '2px 0px 4px -1px rgba(26,26,26,0.04), 4px 0px 8px -2px rgba(26,26,26,0.04)',
  },
  md: {
    down: '0px 4px 8px -2px rgba(26,26,26,0.10), 0px 8px 16px -4px rgba(26,26,26,0.08)',
    up: '0px -4px 8px -2px rgba(26,26,26,0.10), 0px -8px 16px -4px rgba(26,26,26,0.08)',
    left: '-4px 0px 8px -2px rgba(26,26,26,0.10), -8px 0px 16px -4px rgba(26,26,26,0.08)',
    right: '4px 0px 8px -2px rgba(26,26,26,0.10), 8px 0px 16px -4px rgba(26,26,26,0.08)',
  },
  lg: {
    down: '0px 8px 16px -4px rgba(26,26,26,0.10), 0px 16px 32px -8px rgba(26,26,26,0.08)',
    up: '0px -8px 16px -4px rgba(26,26,26,0.10), 0px -16px 32px -8px rgba(26,26,26,0.08)',
    left: '-8px 0px 16px -4px rgba(26,26,26,0.10), -16px 0px 32px -8px rgba(26,26,26,0.08)',
    right: '8px 0px 16px -4px rgba(26,26,26,0.10), 16px 0px 32px -8px rgba(26,26,26,0.08)',
  },
} as const;
