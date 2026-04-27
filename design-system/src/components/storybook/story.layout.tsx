import type { PropsWithChildren } from 'react';

import { useCss } from '@components/utils/hooks/use-css';

/** Renders an alert with the deprecated component disclaimer */
export const StoryLayout = ({ children }: PropsWithChildren<object>): JSX.Element => {
  const { css, theme } = useCss();

  return (
    <section
      className={css({
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.spacingMd,
      })}
    >
      {children}
    </section>
  );
};
