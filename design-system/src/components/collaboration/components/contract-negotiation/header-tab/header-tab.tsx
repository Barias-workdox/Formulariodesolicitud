import type { ReactElement } from 'react';

import { Close } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { IconButton } from '@components/button';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './header-tab.styles';

import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';

export type HeaderTabProps = {
  'data-testid': string;
  title: string;
  startEnhancerProps?: BackgroundIconProps;
  onClose(): void;
};

/** Reusable component that renders a heading for a tab container */
export const HeaderTab = ({
  'data-testid': dataTestId,
  title,
  startEnhancerProps,
  onClose,
}: HeaderTabProps): ReactElement => {
  const { tabHeaderStyles, tabHeaderTitleStyles, theme } = useCss(styles);

  return (
    <div className={tabHeaderStyles}>
      <div className={tabHeaderTitleStyles}>
        {startEnhancerProps && <BackgroundIcon {...startEnhancerProps} />}
        <Text
          variant="bodySmall"
          margin={0}
          fontWeight="500"
          color={theme.colors.neutralStrong}
        >
          {title}
        </Text>
      </div>
      <IconButton
        data-testid={`${dataTestId}--close`}
        size="32px"
        onClick={onClose}
      >
        <Close />
      </IconButton>
    </div>
  );
};
