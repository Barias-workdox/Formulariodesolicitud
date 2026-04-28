import { PropsWithChildren, ReactElement } from 'react';
import { BackgroundIconProps } from '../background-icon/background-icon.interfaces';
import { ButtonProps } from '../button';
export type BaseCardProps = {
    className?: string;
};
export type CardProps = PropsWithChildren<{
    disabled?: boolean;
} & BaseCardProps>;
/**
 * Card Component
 */
export declare const Card: {
    ({ children, disabled, className }: CardProps): ReactElement;
    Header: ({ children, className }: CardHeaderProps) => ReactElement;
    Body: ({ children, className }: CardBodyProps) => ReactElement;
    Footer: ({ children, className }: CardFooterProps) => ReactElement;
    Action: ({ dataTestId, ...rest }: ButtonProps) => ReactElement;
    Icon: (props: CardIconProps) => ReactElement;
    Title: ({ children }: PropsWithChildren<object>) => ReactElement;
    Text: ({ children }: PropsWithChildren<object>) => ReactElement;
};
export type CardHeaderProps = PropsWithChildren<BaseCardProps>;
/**
 * Card Header Component
 */
export declare const CardHeader: ({ children, className }: CardHeaderProps) => ReactElement;
export type CardBodyProps = PropsWithChildren<BaseCardProps>;
/**
 * Card Body Component
 */
export declare const CardBody: ({ children, className }: CardBodyProps) => ReactElement;
export type CardFooterProps = PropsWithChildren<BaseCardProps>;
/**
 * Card Footer Component
 */
export declare const CardFooter: ({ children, className }: CardFooterProps) => ReactElement;
export type CardActionProps = ButtonProps;
/**
 * Card Action Component
 */
export declare const CardAction: ({ dataTestId, ...rest }: ButtonProps) => ReactElement;
export type CardIconProps = BackgroundIconProps;
/**
 * Card Icon Component
 */
export declare const CardIcon: (props: CardIconProps) => ReactElement;
/**
 * Card Title Component
 */
export declare const CardTitle: ({ children }: PropsWithChildren<object>) => ReactElement;
/**
 * Card Text Component
 */
export declare const CardText: ({ children }: PropsWithChildren<object>) => ReactElement;
