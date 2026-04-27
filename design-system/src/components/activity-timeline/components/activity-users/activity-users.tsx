import type { ReactElement } from 'react';

import { Avatar } from '@components/avatar';
import { TitleLayout } from '@components/layouts';
import { Text } from '@components/text';
import { StatefulTooltip } from '@components/tooltip';
import { useCss } from '@components/utils/hooks/use-css';

import { styles } from './activity-users.styles';

import type { IActivity } from '@components/activity-timeline/activity-timeline.interfaces';

export type ActivityUsersProps = Pick<IActivity['extraData'], 'users'>;

/**
 * Component that displays a list of users in the activity timeline
 *
 * @deprecated Use the `Timeline` API instead
 */
export const ActivityUsers = ({ users = [] }: ActivityUsersProps): ReactElement => {
  const { containerStyles } = useCss(styles);

  return (
    <div>
      {users.map(({ id, firstName, lastName, email }) => {
        const fullName = `${firstName} ${lastName}`;

        return (
          <div
            key={`activity-new-user-${id}`}
            className={containerStyles}
          >
            <TitleLayout
              startEnhancer={
                <Avatar
                  name={fullName}
                  size="32px"
                />
              }
              titleText={
                <StatefulTooltip
                  showArrow
                  placement="bottom"
                  content={fullName}
                >
                  <Text
                    variant="bodySmall"
                    margin={0}
                    fontWeight="500"
                    $style={styles.textStyles()}
                  >
                    {fullName}
                  </Text>
                </StatefulTooltip>
              }
              subtitleText={
                <StatefulTooltip
                  showArrow
                  placement="bottom"
                  content={email}
                >
                  <Text
                    margin={0}
                    variant="bodySmall"
                    color="neutralSubdued"
                    $style={styles.textStyles()}
                  >
                    {email}
                  </Text>
                </StatefulTooltip>
              }
            />
          </div>
        );
      })}
    </div>
  );
};
