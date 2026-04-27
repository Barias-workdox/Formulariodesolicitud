import type { ReactNode } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './group-layout.styles';

type GroupLayoutProps = {
  header: {
    title: string;
    subtitle?: string;
    action?: ReactNode;
  };
  children: ReactNode;
};

/**
 * Component that serves as a container component that provides a structured layout with a header and body.
 * The header includes a title, an optional subtitle, and an optional action component.
 * The body section holds the main content passed as children.
 */
export const GroupLayout = ({
  header: { title, subtitle, action = <></> },
  children,
}: GroupLayoutProps): JSX.Element => {
  const {
    containerStyles,
    layoutHeaderContainerStyles,
    layoutHeaderTitleContainerStyles,
    layoutHeaderActionContainerStyles,
    layoutBodyStyles,
  } = useCss(styles);

  return (
    <div className={containerStyles}>
      <div className={layoutHeaderContainerStyles}>
        <div className={layoutHeaderTitleContainerStyles}>
          <Text
            variant="body"
            margin={0}
            fontWeight="500"
          >
            {title}
          </Text>

          {subtitle && (
            <Text
              variant="bodySmall"
              margin={0}
              fontWeight="400"
            >
              {subtitle}
            </Text>
          )}
        </div>

        <div className={layoutHeaderActionContainerStyles}>{action}</div>
      </div>

      <div className={layoutBodyStyles}>{children}</div>
    </div>
  );
};
