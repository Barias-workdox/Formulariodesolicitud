import type { PropsWithChildren } from 'react';

import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';

import { styles } from '../../../../webdox-ai-button-information-popover.styles';

/** A component that renders default content for an information popover. */
export const DefaultContent = ({ children }: PropsWithChildren<object>): JSX.Element => {
  const { boldTextStyles, theme } = useCss(styles);

  return (
    <Text
      variant="bodySmall"
      margin={0}
      color={theme.colors.neutralSubdued}
    >
      <DSTrans
        components={{
          bold: <span className={boldTextStyles} />,
        }}
      >
        {children}
      </DSTrans>
    </Text>
  );
};
