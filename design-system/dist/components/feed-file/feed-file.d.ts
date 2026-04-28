import { PropsWithChildren } from 'react';
import { FeedFileProps } from './feed-file.interfaces';
/**
 * Displays an Styled document list item
 */
export declare const FeedFile: ({ "data-testid": dataTestId, document: { name, fileExt, type, webkitRelativePath }, tagProps, backgroundColor, children, showPath, }: PropsWithChildren<FeedFileProps>) => JSX.Element;
