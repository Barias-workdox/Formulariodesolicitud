import { StageOrder } from './staggered-animation.interfaces';
export interface StaggeredAnimationProps {
    children: React.ReactNode[];
    /** The base delay in milliseconds before the animation starts. Default is `100`.*/
    baseDelay?: number;
    /** The duration in milliseconds for each animation. Default is `300`.*/
    duration?: number;
    /** The order in which the child elements should be animated. Default is `asc`.*/
    order?: StageOrder;
}
/**
 * `StaggeredAnimation` is a component that animates its children
 * with a staggered effect. Each child will appear with a delay based on its index.
 *
 * @example
 * ```tsx
 * <StaggeredAnimation baseDelay={150} duration={300}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </StaggeredAnimation>
 * ```
 */
export declare const StaggeredAnimation: React.FC<StaggeredAnimationProps>;
