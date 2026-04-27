import type { ReactNode } from 'react';

import { themedUseStyletron } from '../../themes';

export interface SvgIconProps {
  svg: string | ReactNode;
  width?: string;
  height?: string;
}

/**
 * Get an SVG as string and return an adaptable image to parent
 *
 * @deprecated This component is deprecated inside the Design System because SVGs can now be directly used as React components.
 * Consider replacing instances of SvgIcon with inline SVG usage or importing SVGs as React components instead.
 *
 * @example
 * ```
 * import { ReactComponent as SvgIcon } from "./svg-icon.svg";
 *
 * <SvgIcon width="24px" height="24px" />
 * ```
 */
export const SvgIcon = ({ svg, width = 'auto', height = 'auto' }: SvgIconProps): JSX.Element => {
  const [css] = themedUseStyletron();

  return (
    <div
      className={css({
        width,
        height,
      })}
    >
      {typeof svg === 'string' ? (
        <img
          src={svg}
          alt="svg icon"
          className={css({ height: '100%', width: '100%' })}
        />
      ) : (
        svg
      )}
    </div>
  );
};
