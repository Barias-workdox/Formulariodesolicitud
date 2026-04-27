import type { ReactElement, ReactNode } from 'react';

import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';

import { styles } from './collaboration-header.styles';
import { CollaborationHeaderTag } from './components';

import type { CollaborationStatus } from '../../../interfaces';

export interface CollaborationHeaderProps {
  collaborationName: string;
  customerName: string;
  status: CollaborationStatus;
  action?: ReactNode;
  options?: ReactNode;
}

/**
 * Header for collaboration details section in organisms.
 * Displays the name of the collaboration and the associated customer name.
 */
export const CollaborationHeader = ({
  collaborationName,
  customerName,
  status,
  action,
  options = <></>,
}: CollaborationHeaderProps): ReactElement => {
  const { headerContainerStyles, headerStyles, actionContainerStyles } = useCss(styles);

  return (
    <div className={headerContainerStyles}>
      <div className={headerStyles}>
        {action && <div className={actionContainerStyles}>{action}</div>}

        <StatefulTooltipNext
          showArrow
          placement="bottom"
          content={collaborationName}
        >
          <Text
            variant="bodySmall"
            color="neutralStrong"
            fontWeight="500"
            margin={0}
            $style={styles.textStyles()}
          >
            {collaborationName}
          </Text>
        </StatefulTooltipNext>
        <CollaborationHeaderTag status={status} />
        <StatefulTooltipNext
          showArrow
          placement="bottom"
          content={
            <DSTrans
              i18nKey="collaborationDetails.header.customerName"
              values={{ customerName }}
            />
          }
        >
          <Text
            variant="bodySmall"
            color="neutralDepressed"
            $style={styles.textStyles()}
            margin={0}
          >
            <DSTrans
              i18nKey="collaborationDetails.header.customerName"
              values={{ customerName }}
            />
          </Text>
        </StatefulTooltipNext>
      </div>

      {options}
    </div>
  );
};
