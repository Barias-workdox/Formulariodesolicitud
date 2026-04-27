import { useEffect, useState } from 'react';
import type { ComponentType, ReactElement } from 'react';

export interface WithIsHoveredProps {
  isHovered?: boolean;
}

interface HoverOptions {
  disabled?: boolean;
  onHoverStart?(): void;
  onHoverEnd?(): void;
}

/**
 * A function that takes a component and optional hover options, and
 * returns a new component with the `isHovered` prop injected.
 */
export function withIsHovered<P extends object>(
  WrappedComponent: ComponentType<P & WithIsHoveredProps>,
  options: HoverOptions = {},
) {
  return function WithIsHoveredComponent(props: P): ReactElement {
    const [isHovered, setIsHovered] = useState(false);
    const { disabled, onHoverStart, onHoverEnd } = options;

    /** Mouse enter handler event */
    const handleMouseEnter = (): void => {
      if (!disabled) {
        setIsHovered(true);
        onHoverStart?.();
      }
    };

    /** Mouse leave handler event */
    const handleMouseLeave = (): void => {
      if (!disabled) {
        setIsHovered(false);
        onHoverEnd?.();
      }
    };

    // to prevent to keep hovered state in the select when an option is selected
    useEffect(() => {
      /** clean is hovered handler */
      const cleanIsHovered = (): void => setIsHovered(false);

      window.addEventListener('click', cleanIsHovered);

      return (): void => window.removeEventListener('click', cleanIsHovered);
    }, []);

    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <WrappedComponent
          {...props}
          isHovered={isHovered}
        />
      </div>
    );
  };
}
