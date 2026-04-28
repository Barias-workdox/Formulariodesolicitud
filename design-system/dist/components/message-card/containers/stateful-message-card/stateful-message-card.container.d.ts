import { MessageCardBaseProps } from '../../components/message-card-base';
export type StatefulMessageCardProps = Omit<MessageCardBaseProps, 'isActive'>;
/** Stateful Message Card Component with internal isActive management */
export declare const StatefulMessageCard: ({ "data-testid": dataTestId, onFocus, onBlur, ...props }: StatefulMessageCardProps) => JSX.Element;
