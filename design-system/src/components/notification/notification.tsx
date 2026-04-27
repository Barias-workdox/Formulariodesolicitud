import { useMemo } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { Notification as BaseWebNotification, KIND } from 'baseui/notification';

import { useCss } from '@components/utils/hooks/use-css';

import { Text } from '../text';

import { ClearButton, StyledNotificationLink } from './components';
import {
  InnerContainerStyles,
  kindStyles,
  notificationOverrideStyles,
  notificationStyles,
} from './notification.styles';

import type { ToastProps } from 'baseui/toast';

export type KindStyleType = {
  icon: JSX.Element;
  borderColor: string;
  color: string;
  borderRadius: string;
  backgroundColor: string;
};

type LinkType = 'internal' | 'external';

export type NotificationProps = Omit<ToastProps, 'children'> & {
  /**
   * Value to be rendered in the body section of the notification component
   *
   * @deprecated Only required for legacy support, must use title and description properties
   */
  message?: string;
  duration?: number;
  'data-testid'?: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  /** Sets the notification title */
  title?: string;
  /** Sets the notification description */
  description?: ReactNode;
  /**
   * For the link to appear you must pass the properties linkText, linkPath
   *
   * Sets the link label
   */
  linkText?: string;
  /** Sets the link route, it can be a external or internal route */
  linkPath?: string;
  /** Set the type of link, external to redirect to another website or internal to redirect on a specific page path. */
  linkType?: LinkType;
  /** Sets a notification endEnhancer component, it will be displayed on the right side of the notification. */
  endEnhancer?: ReactElement;
};

/**
 * Styled version of Baseweb Notification component. It includes
 * the correct colors, close icon and the icon displayed on each kind (positive, negative, info, warning)
 * of notification.
 *
 * This component is updated to receive a title, description and link properties,
 * also the message property is deprecated.
 *
 * @deprecated Notification component is deprecated instead use `@webdoxclm/design-system/notification/next` component
 */
export const Notification = ({
  'data-testid': dataTestId = 'notification',
  message,
  duration = 5000,
  kind = KIND.positive,
  width = 'auto',
  closeable = true,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  title,
  description,
  linkPath,
  linkText,
  linkType = 'external',
  endEnhancer,
  ...props
}: NotificationProps): ReactElement => {
  const { theme } = useCss();
  const kindStyle = kindStyles(theme, kind);
  const { icon, color } = kindStyle;
  const { endEnhancerWrapper, notificationWrapper, textWrapper, titleStyles, verticalCenter } =
    useCss(notificationStyles);

  const bodyMessage = useMemo(() => description ?? message ?? '', [description, message]);
  const shouldRenderLink = linkPath && linkText;
  const shouldRenderEndEnhancer = shouldRenderLink || endEnhancer !== undefined;

  return (
    <BaseWebNotification
      kind={kind}
      autoHideDuration={duration}
      closeable={closeable}
      overrides={{
        CloseIcon: {
          component: ClearButton as React.ComponentType,
        },
        Body: {
          style: notificationOverrideStyles(theme, {
            marginTop,
            marginBottom,
            marginLeft,
            marginRight,
            width,
            kindStyle,
          }),
        },
        InnerContainer: {
          style: InnerContainerStyles(),
        },
      }}
      {...props}
    >
      <div
        data-testid={dataTestId}
        className={notificationWrapper}
      >
        <div className={verticalCenter}>
          <div className={verticalCenter}>{icon}</div>
          <div className={textWrapper}>
            <Text
              variant="bodySmall"
              color={color}
              margin={0}
            >
              {title && <strong className={titleStyles}>{title}</strong>}
              {bodyMessage}
            </Text>
          </div>
        </div>
        {shouldRenderEndEnhancer && (
          <div className={endEnhancerWrapper}>
            {shouldRenderLink && (
              <StyledNotificationLink
                data-testid={`${dataTestId}__link`}
                linkPath={linkPath}
                linkText={linkText}
                linkType={linkType}
              />
            )}
            {endEnhancer}
          </div>
        )}
      </div>
    </BaseWebNotification>
  );
};
