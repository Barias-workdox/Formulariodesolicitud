import type { PropsWithChildren, ReactElement } from 'react';

import { BackgroundIcon } from '@components/background-icon';
import { Button } from '@components/button';
import { TruncatedText } from '@components/truncated-text';

import {
  StyledCardFooterWrapper,
  StyledCardHeaderWrapper,
  StyledCardWrapper,
  StyledTruncatedText,
} from './card.styled';
import { CardProvider, useCard } from './contexts/card.context';

import type { BackgroundIconProps } from '@components/background-icon/background-icon.interfaces';
import type { ButtonProps } from '@components/button';

export type BaseCardProps = { className?: string };

export type CardProps = PropsWithChildren<{ disabled?: boolean } & BaseCardProps>;

/**
 * Card Component
 */
export const Card = ({ children, disabled, className }: CardProps): ReactElement => {
  return (
    <CardProvider disabled={disabled}>
      <StyledCardWrapper
        className={className}
        $disabled={disabled}
      >
        {children}
      </StyledCardWrapper>
    </CardProvider>
  );
};

export type CardHeaderProps = PropsWithChildren<BaseCardProps>;

/**
 * Card Header Component
 */
export const CardHeader = ({ children, className }: CardHeaderProps): ReactElement => {
  return <StyledCardHeaderWrapper className={className}>{children}</StyledCardHeaderWrapper>;
};

export type CardBodyProps = PropsWithChildren<BaseCardProps>;

/**
 * Card Body Component
 */
export const CardBody = ({ children, className }: CardBodyProps): ReactElement => {
  return <div className={className}>{children}</div>;
};

export type CardFooterProps = PropsWithChildren<BaseCardProps>;

/**
 * Card Footer Component
 */
export const CardFooter = ({ children, className }: CardFooterProps): ReactElement => {
  return <StyledCardFooterWrapper className={className}>{children}</StyledCardFooterWrapper>;
};

export type CardActionProps = ButtonProps;

/**
 * Card Action Component
 */
export const CardAction = ({
  dataTestId = 'card__action-button',
  ...rest
}: ButtonProps): ReactElement => {
  const { disabled } = useCard();

  return (
    <Button
      data-testid={dataTestId}
      disabled={disabled}
      {...rest}
    />
  );
};

export type CardIconProps = BackgroundIconProps;

/**
 * Card Icon Component
 */
export const CardIcon = (props: CardIconProps): ReactElement => {
  const { disabled } = useCard();
  const iconColor = disabled ? 'neutralDepressed' : 'neutral';

  return (
    <BackgroundIcon
      size="24px"
      shape="square"
      backgroundColor="neutralWashed"
      iconColor={iconColor}
      {...props}
    />
  );
};

/**
 * Card Title Component
 */
export const CardTitle = ({ children }: PropsWithChildren<object>): ReactElement => {
  const { disabled } = useCard();
  const textColor = disabled ? 'neutralDepressed' : 'neutral';
  const truncatedTitleTextProps = {
    variant: 'body',
    margin: 0,
    fontWeight: 'bold',
    color: textColor,
  } as const;

  return (
    <StyledTruncatedText
      textProps={truncatedTitleTextProps}
      tooltipProps={{ content: children }}
    >
      {children}
    </StyledTruncatedText>
  );
};

const truncatedTextProps = {
  variant: 'bodySmall',
  margin: 0,
  color: 'neutral',
  fontWeight: '400',
} as const;

/**
 * Card Text Component
 */
export const CardText = ({ children }: PropsWithChildren<object>): ReactElement => {
  return (
    <TruncatedText
      maxLines={4}
      textProps={truncatedTextProps}
      tooltipProps={{ content: children }}
    >
      {children}
    </TruncatedText>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;
Card.Action = CardAction;
Card.Icon = CardIcon;
Card.Title = CardTitle;
Card.Text = CardText;
