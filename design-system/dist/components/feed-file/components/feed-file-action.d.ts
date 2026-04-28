import { ReactNode } from 'react';
import { FeedFileActionProps, FeedFileActionType } from '../feed-file.interfaces';
/**
 * Returns a `FeedFileAction` icon based on action prop (`FeedFileActionType`)
 */
export declare const getFeedFileActionIcon: (currentAction: FeedFileActionType) => ReactNode;
/**
 * Action button (`view`, `download`, `delete`) for `FeedFile` component.
 */
export declare const FeedFileAction: ({ "data-testid": dataTestId, action, disabled, buttonKind, onClick, }: FeedFileActionProps) => JSX.Element;
