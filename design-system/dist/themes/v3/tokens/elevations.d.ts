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
export declare const elevations: Elevations;
export {};
