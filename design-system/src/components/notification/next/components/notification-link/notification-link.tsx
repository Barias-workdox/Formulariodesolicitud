import { Link } from 'react-router-dom';

import { useCss } from '@components/utils/hooks/use-css';

import { notificationLinkStyles } from './notification-link.styles';

export type NotificationLinkProps = {
  'data-testid'?: string;
  /**
   * If `true`, the link safely redirects to the specified URL. If `false` the link
   * will redirect to a local path.
   *
   * Defaults to `false`
   */
  isExternal?: boolean;
  /** URL that will be redirected */
  path: string;
  text: string;
};

/** Component for rendering a notification link */
export const NotificationLink = ({
  'data-testid': dataTestId = 'notification-link',
  isExternal = false,
  path,
  text,
}: NotificationLinkProps): JSX.Element => {
  const { linkStyles } = useCss(notificationLinkStyles);

  if (isExternal) {
    return (
      <a
        data-testid={`${dataTestId}--external`}
        target="_blank"
        rel="noreferrer"
        href={path}
        className={linkStyles}
      >
        {text}
      </a>
    );
  }

  return (
    <Link
      data-testid={`${dataTestId}--internal`}
      to={path}
      className={linkStyles}
    >
      {text}
    </Link>
  );
};
