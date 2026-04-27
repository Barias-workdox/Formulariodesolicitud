import type { ReactElement } from 'react';

import { themedUseStyletron } from '../../themes';
import { sanitizeUrl } from '../../utils/url.utils';

import { getLinkStyles, styledLinkTextColors } from './link.styles';

import type { LinkProps } from './link.interfaces';

export { styledLinkTextColors };

export type { LinkProps, LinkKind, LinkSize, StyledLinkTextColorsProps } from './link.interfaces';

/**
 * Link Component
 *
 * A versatile link component that supports various states and use cases:
 * - Inline links within text or paragraphs
 * - Links in footers, tooltips, cards, popovers, toast, etc.
 * - States: default, hover, visited, focus, disabled
 * - Opens in new tab by default (_blank)
 * - Supports both external and internal URLs
 */
export const Link = ({
  dataTestId,
  underlined = true,
  children,
  href,
  disabled = false,
  kind = 'default',
  size = 'medium',
  target = '_blank',
  onClick,
  fontWeight,
  ...rest
}: LinkProps): ReactElement => {
  const [css, theme] = themedUseStyletron();

  // Generate dataTestId from href if not provided
  const finalDataTestId = dataTestId || (href ? `link__${sanitizeUrl(href)}` : 'link');

  // Security props with configurable target
  const securityProps = { rel: 'noopener noreferrer', target };

  const linkStyles = getLinkStyles(theme, {
    disabled,
    underlined,
    kind,
    size,
    fontWeight,
  });

  return (
    <a
      data-testid={`${finalDataTestId}--link`}
      href={disabled ? undefined : href}
      onClick={disabled ? undefined : onClick}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      className={css(linkStyles)}
      {...(!disabled && securityProps)}
      {...rest}
    >
      {children}
    </a>
  );
};
