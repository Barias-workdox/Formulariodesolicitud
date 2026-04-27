import type { ReactElement, ReactNode } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './sectioned-card.styles';

import type { StyleObject } from 'styletron-react';

interface SectionedCardOverrides {
  Root?: StyleObject;
  Header?: StyleObject;
  Body?: StyleObject;
  Footer?: StyleObject;
}

export interface SectionedCardProps {
  title?: ReactNode;
  footer?: ReactNode;
  /** Left side title component */
  headerEnhancer?: ReactElement;
  overrides?: SectionedCardOverrides;
  hasElevation?: boolean;
  children?: ReactNode;
}

/** Box for each section in the confirmation portal signature step */
export const SectionedCard = ({
  title,
  headerEnhancer,
  footer,
  overrides = {},
  hasElevation = false,
  children,
}: SectionedCardProps): ReactElement => {
  const { rootStyles, headerStyles, headerTitleStyles, bodyStyles, footerStyles } = useCss(styles, {
    hasElevation,
    hasBody: !!children,
    overrides,
  });

  return (
    <div className={rootStyles}>
      {(title || headerEnhancer) && (
        <div className={headerStyles}>
          <div className={headerTitleStyles}>
            {['number', 'string'].includes(typeof title) ? (
              <Text
                variant="h2"
                fontWeight="500"
                $style={styles.headerTitleTextStyles}
              >
                {title}
              </Text>
            ) : (
              title
            )}
          </div>
          {headerEnhancer}
        </div>
      )}
      {children && <div className={bodyStyles}>{children}</div>}
      {footer && <div className={footerStyles}>{footer}</div>}
    </div>
  );
};
