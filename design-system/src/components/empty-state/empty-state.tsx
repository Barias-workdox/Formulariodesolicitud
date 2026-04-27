import type { ReactElement, ReactNode } from 'react';

import { Button } from '@components/button';

import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { styles } from './empty-state.styles';

import type { ButtonProps } from '@components/button/button.interfaces';

type EmptyStateButtonProps = Pick<ButtonProps, 'onClick' | 'data-testid'> & {
  text: string;
  startEnhancer?: ButtonProps['startEnhancer'];
};

export interface EmptyStateProps {
  dataTestId?: string;
  title?: ReactNode;
  description?: ReactNode;
  Icon?: ReactNode;
  link?: { text: string; href: string };
  primaryButtonProps?: EmptyStateButtonProps;
  secondaryButtonProps?: EmptyStateButtonProps;
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
  dataTestId = 'empty-state',
  Icon,
  title,
  description,
  link,
  primaryButtonProps,
  secondaryButtonProps,
}: EmptyStateProps): ReactElement => {
  const { containerStyles, textsContainerStyles, buttonsContainerStyles, linkStyles, theme } =
    useCss(styles);

  const { text: primaryButtonText, ...primaryButtonPropsRest } = primaryButtonProps || {};
  const { text: secondaryButtonText, ...secondaryButtonPropsRest } = secondaryButtonProps || {};
  const { text: linkText, href: linkHref } = link || {};

  return (
    <div className={containerStyles}>
      {Icon && Icon}
      <div className={textsContainerStyles}>
        {title && (
          <Text
            variant="body"
            fontWeight="500"
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
            data-testid={`${dataTestId}__link`}
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
              data-testid={`${dataTestId}__secondary-button`}
              kind="secondary"
              size="32px"
              {...secondaryButtonPropsRest}
            >
              {secondaryButtonText}
            </Button>
          )}
          {primaryButtonProps && (
            <Button
              data-testid={`${dataTestId}__primary-button`}
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
