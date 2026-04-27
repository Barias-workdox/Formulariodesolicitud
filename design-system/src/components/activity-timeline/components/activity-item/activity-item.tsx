import { useMemo } from 'react';
import type { ReactNode } from 'react';

import { Step } from 'baseui/progress-steps';

import { Text } from '@components/text';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { useDateUtilsWithLocale } from '@components/utils/hooks/use-date-util-with-locale';
import { DSTrans } from '@components/utils/i18n/translation-component';

import { getOverrides } from './activity-item.overrides';
import { styles } from './activity-item.styles';

import type { IActivity } from '@components/activity-timeline/activity-timeline.interfaces';
import type { StepOverrides, StepProps } from 'baseui/progress-steps';

export interface ActivityItemProps
  extends
    Pick<IActivity, 'type' | 'createdAt' | 'description' | 'overrides'>,
    Omit<StepProps, 'overrides'> {
  'data-testid'?: string;
  children?: ReactNode;
}

/**
 * Renders a single item in an activity timeline.
 *
 * @deprecated Use the `Timeline` API instead
 */
export const ActivityItem = ({
  'data-testid': dataTestId = 'activity-item',
  type,
  description,
  createdAt,
  children,
  overrides: { Icon } = {},
  ...others
}: ActivityItemProps): JSX.Element => {
  const { activityContentStyles } = useCss(styles);
  const { formatDateAsText } = useDateUtilsWithLocale();

  const mergedOverrides: StepOverrides = useMemo(() => {
    const baseOverrides: StepOverrides = getOverrides({ dataTestId, type });

    return mergeOverridesDeep(baseOverrides, { Icon });
  }, [Icon, dataTestId, type]);

  return (
    <Step
      {...others}
      isActive
      title={
        <Text
          variant="bodySmall"
          margin={0}
          color="neutralSubdued"
          $style={styles.textStyles()}
        >
          <DSTrans values={{ ignoreErrors: true }}>{description}</DSTrans>
        </Text>
      }
      overrides={mergedOverrides}
    >
      <div className={activityContentStyles}>
        {children}
        <Text
          variant="bodySmall"
          margin={0}
          color="neutralSubdued"
        >
          {formatDateAsText(createdAt, true)}
        </Text>
      </div>
    </Step>
  );
};
