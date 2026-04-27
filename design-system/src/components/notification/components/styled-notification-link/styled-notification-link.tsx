import { Link } from 'react-router-dom';

import { useCss } from '../../../utils/hooks/use-css';

import { linkStyles } from './styled-notification-link.styles';

import type { NotificationProps } from '../../notification';
import type { WithTestId } from '@interfaces/common.interfaces';

export type StyledNotificationLinkProps = Required<
  Pick<NotificationProps, 'linkText' | 'linkPath' | 'linkType'>
> &
  WithTestId;

/**
 * Gets the correct component to redirect based on its type 'internal' or 'external'.
 */
export const StyledNotificationLink = ({
  dataTestId = 'notification-link',
  linkPath,
  linkText,
  linkType,
}: StyledNotificationLinkProps): JSX.Element => {
  const { linkNotificationStyles } = useCss(linkStyles);

  return (
    <>
      {linkType === 'internal' ? (
        <Link
          data-testid={dataTestId}
          className={linkNotificationStyles}
          to={linkPath}
        >
          {linkText}
        </Link>
      ) : (
        <a
          data-testid={dataTestId}
          target="_blank"
          rel="noreferrer"
          className={linkNotificationStyles}
          href={linkPath}
        >
          {linkText}
        </a>
      )}
    </>
  );
};
