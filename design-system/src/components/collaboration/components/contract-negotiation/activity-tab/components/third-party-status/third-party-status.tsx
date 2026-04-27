import type { ReactElement } from 'react';

import { CheckmarkFilled, WarningFilled } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { TitleLayout } from '@components/layouts';
import { Text } from '@components/text';
import { StatefulTooltip } from '@components/tooltip';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { useTranslation } from '@components/utils/i18n/utils';

import { styles } from './third-party-status.styles';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type {
  CollaborationActivityDocumentThirdParty,
  CollaborationResourceStatus,
} from '@components/collaboration/interfaces';
import type { DesignSystemColorType } from '@themes';

type FilteredCollaborationResourceStatus = Extract<
  CollaborationResourceStatus,
  'approved' | 'pending'
>;

const thirdPartyInformationVariants: Record<
  FilteredCollaborationResourceStatus,
  {
    text: string;
    icon: {
      Icon: CarbonIconType;
      color: DesignSystemColorType;
      backgroundColor: DesignSystemColorType;
    };
  }
> = {
  approved: {
    text: 'contractNegotiationCollaboration.activityTab.thirdParty.status.approved',
    icon: {
      Icon: CheckmarkFilled,
      color: 'positiveMedium',
      backgroundColor: 'positiveWashed',
    },
  },
  pending: {
    text: 'contractNegotiationCollaboration.activityTab.thirdParty.status.pending',
    icon: {
      Icon: WarningFilled,
      color: 'warningStrong',
      backgroundColor: 'warningWashed',
    },
  },
};

export interface ThirdPartyStatusProps {
  thirdParty: Omit<CollaborationActivityDocumentThirdParty, 'id'>;
}

/** Component that renders the status of a third party on a document of the collaboration */
export const ThirdPartyStatus = ({
  thirdParty: { name, status, approvedAt },
}: ThirdPartyStatusProps): ReactElement => {
  const { theme } = useCss(styles);

  const { formatDateAsText } = useDateUtilsWithLocale();
  const { t } = useTranslation();

  const {
    text,
    icon: { Icon, color, backgroundColor },
  } = thirdPartyInformationVariants[status as FilteredCollaborationResourceStatus];

  return (
    <TitleLayout
      startEnhancer={
        <div>
          <BackgroundIcon
            shape="round"
            Icon={Icon}
            iconColor={color}
            backgroundColor={backgroundColor}
            size="36px"
          />
        </div>
      }
      titleText={
        <StatefulTooltip
          showArrow
          placement="bottom"
          content={name}
        >
          <Text
            variant="bodySmall"
            margin={0}
            fontWeight="500"
            $style={styles.textStyles(theme)}
          >
            {name}
          </Text>
        </StatefulTooltip>
      }
      subtitleText={
        <Text
          variant="bodySmall"
          margin={0}
          color="neutralSubdued"
          $style={styles.textStyles(theme)}
        >
          {t(text, { date: formatDateAsText(approvedAt, true) })}
        </Text>
      }
    />
  );
};
