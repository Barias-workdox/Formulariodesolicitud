import { themedStyled } from '@themes/utilities';

import type { StyleObject } from 'styletron-react';

type TitleWrapperProps = {
  $hasLink?: boolean;
};

/**
 * Styled wrapper for the toast body content
 */
export const ToasterWrapper = themedStyled(
  'div',
  (): StyleObject => ({
    display: 'flex',
    alignItems: 'unset',
    flexDirection: 'column',
    height: '100%',
  }),
);

export const TitleWrapper = themedStyled<'div', TitleWrapperProps>(
  'div',
  ({ $hasLink }): StyleObject => ({
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100%',
    ...($hasLink && { marginBottom: '2px' }),
  }),
);

/**
 * Wrapper for the link so its focus outline only wraps its content
 */
export const LinkWrapper = themedStyled(
  'div',
  (): StyleObject => ({
    alignSelf: 'flex-start',
  }),
);
