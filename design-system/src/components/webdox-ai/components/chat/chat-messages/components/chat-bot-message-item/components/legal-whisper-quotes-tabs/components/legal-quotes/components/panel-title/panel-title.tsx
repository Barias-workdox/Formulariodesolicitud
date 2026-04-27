import type { PropsWithChildren, ReactElement } from 'react';

import { Link } from '@components/link';
import { TruncatedText } from '@components/truncated-text';

export type PanelTitleProps = PropsWithChildren<{
  url?: string;
  zIndex?: number;
}>;

/**
 * `PanelTitle` component renders a styled link if a valid URL is provided,
 * otherwise, it renders a styled text element.
 */
export const PanelTitle = ({ children, url = '', zIndex }: PanelTitleProps): ReactElement => {
  const isUrlValid = url !== '';

  return (
    <TruncatedText
      textProps={{
        variant: 'bodySmall',
        margin: 0,
        fontWeight: '500',
        color: 'neutralStrong',
      }}
      tooltipProps={{
        content: children,
        zIndex,
      }}
    >
      {isUrlValid ? (
        <Link
          fontWeight="500"
          size="small"
          dataTestid="panel-title__link"
          href={url}
          onClick={(event: React.MouseEvent<HTMLAnchorElement>) => event.stopPropagation()}
        >
          {children}
        </Link>
      ) : (
        children
      )}
    </TruncatedText>
  );
};
