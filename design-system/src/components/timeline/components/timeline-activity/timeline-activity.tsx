import { useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { Text } from '@components/text';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';

import { TimelineStep } from '../timeline-step';

import { getOverrides } from './timeline-activity.overrides';
import { styles } from './timeline-activity.styles';

import type { TimelineStepProps } from '../timeline-step';

type Overrides = TimelineStepProps['overrides'];

export type TimelineActivityProps = {
  title: string;
  subtitle: string;
  indicator: ReactNode;
  children?: ReactNode;
  isLast?: TimelineStepProps['isLast'];
  overrides?: Pick<Overrides, 'IconContainer'>;
};

/** Timeline step created to represent an activity with a custom indicator of the step */
export const TimelineActivity = ({
  title,
  subtitle,
  indicator,
  children = <></>,
  isLast,
  overrides: { IconContainer } = {},
}: TimelineActivityProps): ReactElement => {
  const { contentStyles } = useCss(styles);

  const mergedOverrides: Overrides = useMemo(() => {
    const baseOverrides: Overrides = getOverrides({ indicator });

    return mergeOverridesDeep(baseOverrides, { Icon: indicator, IconContainer });
  }, [indicator, IconContainer]);

  return (
    <TimelineStep
      isActive
      isLast={isLast}
      overrides={mergedOverrides}
      title={
        <Text
          variant="bodySmall"
          margin={0}
          color="neutralSubdued"
          $style={styles.textStyles()}
        >
          <DSTrans
            i18nKey={title}
            values={{ ignoreErrors: true }}
          />
        </Text>
      }
    >
      <div className={contentStyles}>
        {children}

        <Text
          variant="bodySmall"
          margin={0}
          color="neutralSubdued"
        >
          <DSTrans
            i18nKey={subtitle}
            values={{ ignoreErrors: true }}
          />
        </Text>
      </div>
    </TimelineStep>
  );
};
