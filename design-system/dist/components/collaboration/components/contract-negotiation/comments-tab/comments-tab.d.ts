import { MessagesProps } from '../../../../messages';
export interface CommentsTabProps extends Pick<MessagesProps, 'currentUserId' | 'messages' | 'users' | 'isLoading' | 'canCreate' | 'onCreate' | 'onPageEnd'> {
    'data-testid'?: string;
    onClose(): void;
}
/**
 * CommentsTab is a component that renders the Messages component.
 */
export declare const CommentsTab: ({ "data-testid": dataTestId, currentUserId, messages, users, isLoading, canCreate, onCreate, onPageEnd, onClose, }: CommentsTabProps) => JSX.Element;
