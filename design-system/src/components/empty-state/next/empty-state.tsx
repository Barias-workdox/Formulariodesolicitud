import type { ReactElement, ReactNode } from 'react';

import { Document } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { Button } from '@components/button';
import { COMMON_HEIGHT_44 } from '@constants/common.constants';

import { Text } from '../../text';
import { useCss } from '../../utils/hooks/use-css';

import { styles } from './empty-state.styles';

import type { CarbonIconType } from '@carbon/icons-react/lib/CarbonIcon';
import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { ButtonProps } from '@components/button/button.interfaces';
import type { CommonHeight } from '@constants/common.constants';
import type { DesignSystemColorType } from '@themes';

type EmptyStateButtonProps = Pick<ButtonProps, 'onClick' | 'data-testid'> & {
  text: string;
  startEnhancer?: ButtonProps['startEnhancer'];
};

// Default props for BackgroundIcon
const defaultBackgroundIconProps: BackgroundIconProps = {
  size: COMMON_HEIGHT_44,
  Icon: Document,
  iconColor: 'brandStrong',
  backgroundColor: 'brandSubtle',
};

const DATA_TEST_ID = 'empty-state';

/**
 * Props for the EmptyState component.
 *
 * This component displays an empty state message with an icon, title, description,
 * optional link, and action buttons.
 */
export interface EmptyStateProps {
  // Background icon props
  /** The icon component to be rendered in the background. */
  Icon?: CarbonIconType;
  /** The size of the background icon. */
  size?: CommonHeight;
  /** The color of the icon. */
  iconColor?: DesignSystemColorType;
  /** The background color of the icon. */
  backgroundColor?: DesignSystemColorType;

  // Content props
  /** The title text to display in the empty state. */
  title?: ReactNode;
  /** The description text to display below the title. */
  description?: ReactNode;
  /** Optional link configuration with text and href. */
  link?: { text: string; href: string };

  // Action buttons props
  /** Configuration for the primary action button. */
  primaryButtonProps?: EmptyStateButtonProps;
  /** Configuration for the secondary action button. */
  secondaryButtonProps?: EmptyStateButtonProps;

  /** The data test id for the empty state. */
  dataTestId?: string;
}

/**
 * Represents an empty state component.
 *
 * This component is used to display an empty state message.
 * It is typically used when there are no items to display in the table.
 *
 * The component is composed by:
 * - An icon to be displayed in the empty state.
 * - A title and a description  of the empty state message.
 * - The link to provide additional information or actions.
 * - Two buttons: a primary button and a secondary button.
 *
 */
export const EmptyState = ({
  title,
  description,
  link,
  primaryButtonProps,
  secondaryButtonProps,
  Icon,
  size,
  iconColor,
  backgroundColor,
  dataTestId,
}: EmptyStateProps): ReactElement => {
  const { containerStyles, textsContainerStyles, buttonsContainerStyles, linkStyles, theme } =
    useCss(styles);

  const { text: primaryButtonText, ...primaryButtonPropsRest } = primaryButtonProps || {};
  const { text: secondaryButtonText, ...secondaryButtonPropsRest } = secondaryButtonProps || {};
  const { text: linkText, href: linkHref } = link || {};

  // Create background icon props object
  const backgroundIconProps: BackgroundIconProps = {
    ...(Icon && { Icon }),
    ...(size && { size }),
    ...(iconColor && { iconColor }),
    ...(backgroundColor && { backgroundColor }),
  };

  return (
    <div
      className={containerStyles}
      data-testid={`${DATA_TEST_ID}-${dataTestId}`}
    >
      <BackgroundIcon
        {...defaultBackgroundIconProps}
        {...backgroundIconProps}
      />
      <div className={textsContainerStyles}>
        {title && (
          <Text
            variant="body"
            fontWeight="500"
            textAlign="center"
            margin={0}
          >
            {title}
          </Text>
        )}
        {description && (
          <Text
            variant="bodySmall"
            textAlign="center"
            whiteSpace="pre-line"
            margin={0}
          >
            {description}
          </Text>
        )}
        {link && (
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            className={linkStyles}
          >
            <Text
              variant="bodySmall"
              color={theme.colors.brand}
              margin={0}
            >
              {linkText}
            </Text>
          </a>
        )}
      </div>

      {(primaryButtonProps || secondaryButtonProps) && (
        <div className={buttonsContainerStyles}>
          {secondaryButtonProps && (
            <Button
              kind="secondary"
              size="32px"
              {...secondaryButtonPropsRest}
            >
              {secondaryButtonText}
            </Button>
          )}
          {primaryButtonProps && (
            <Button
              size="32px"
              {...primaryButtonPropsRest}
            >
              {primaryButtonText}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
