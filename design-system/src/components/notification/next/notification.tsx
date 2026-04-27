import { useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { Notification as BaseWebNotification } from 'baseui/notification';

import { BackgroundIcon } from '@components/background-icon';
import { Spinner } from '@components/spinner';
import { Text } from '@components/text';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { noop } from '@utils/noop';

import { NotificationLink } from './components';
import {
  StyledNotification,
  StyledNotificationActionContainer,
  StyledNotificationContent,
  StyledNotificationTexts,
  getTitleOverrides,
  getDescriptionOverrides,
  getNotificationBaseOverrides,
  iconVariants,
} from './notification.styles';

import type { CarbonIconType } from '@carbon/icons-react';
import type { SvgIconComponent } from '@interfaces/common.interfaces';
import type { ToastOverrides, ToastProps } from 'baseui/toast';

export type NotificationSize = 'default' | 'small';

export type NotificationKind = 'info' | 'infoAI' | 'warning' | 'positive' | 'negative';

export type NotificationDirection = 'horizontal' | 'vertical';

export type NotificationEventHandlers = Pick<
  ToastProps,
  'onClose' | 'onBlur' | 'onFocus' | 'onMouseEnter' | 'onMouseLeave'
>;

export type NotificationProps = {
  'data-testid'?: string;
  /** Determines whether to use a spinner instead of an icon. Defaults to `false` */
  showSpinner?: boolean;
  /** Defaults to `false` */
  closeable?: boolean;
  /** Defaults to `default` */
  size?: NotificationSize;
  /** Defaults to `info` */
  kind?: NotificationKind;
  overrides?: ToastOverrides;
  /** Text with bold font weight */
  title?: string;
  /** Default text that should be rendered */
  description: ReactElement | string;
  /** Custom actions that could be rendered in the notification. Ej: `Notification.Link`*/
  actions?: ReactNode;
  /** Determines whether the notification should be displayed in a horizontal or vertical layout. */
  direction?: NotificationDirection;
  /** Custom icon to be rendered in the notification. */
  Icon?: CarbonIconType | SvgIconComponent;
} & NotificationEventHandlers;

/**
 * Notification component to display a notification message with optional spinner,
 * icon, title, description, and actions.
 */
const Notification = ({
  'data-testid': dataTestId = 'notification',
  showSpinner = false,
  closeable = false,
  size = 'default',
  kind = 'info',
  overrides = {},
  title = '',
  description,
  direction = 'vertical',
  Icon,
  onClose = noop,
  onBlur = noop,
  onFocus = noop,
  onMouseEnter = noop,
  onMouseLeave = noop,
  actions = null,
}: NotificationProps): JSX.Element => {
  const { theme } = useCss();
  const mergedOverrides = useMemo(() => {
    const baseOverrides = getNotificationBaseOverrides({
      'data-testid': dataTestId,
      size,
      kind,
      theme,
    });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [dataTestId, size, kind, theme, overrides]);

  return (
    <BaseWebNotification
      data-testid={dataTestId}
      closeable={closeable}
      onClose={onClose}
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      overrides={mergedOverrides}
    >
      <StyledNotification>
        <StyledNotificationContent>
          {showSpinner ? (
            <Spinner
              data-testid={`${dataTestId}--spinner`}
              size="sm"
            />
          ) : (
            <BackgroundIcon
              data-testid={`${dataTestId}--icon-${kind}`}
              size="24px"
              {...iconVariants[kind]}
              {...(Icon && { Icon })}
            />
          )}

          <StyledNotificationTexts $direction={direction}>
            {title && (
              <Text
                variant="bodySmall"
                margin={0}
                overrides={getTitleOverrides(theme, kind)}
              >
                {title}
              </Text>
            )}

            <Text
              variant="bodySmall"
              margin={0}
              fontWeight="400"
              overrides={getDescriptionOverrides(theme, direction, Boolean(title), kind)}
            >
              {description}
            </Text>
          </StyledNotificationTexts>
        </StyledNotificationContent>

        {actions && (
          <StyledNotificationActionContainer $closeable={closeable}>
            {actions}
          </StyledNotificationActionContainer>
        )}
      </StyledNotification>
    </BaseWebNotification>
  );
};

Notification.Link = NotificationLink;

export { Notification };
