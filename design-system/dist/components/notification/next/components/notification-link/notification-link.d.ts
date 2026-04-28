export type NotificationLinkProps = {
    'data-testid'?: string;
    /**
     * If `true`, the link safely redirects to the specified URL. If `false` the link
     * will redirect to a local path.
     *
     * Defaults to `false`
     */
    isExternal?: boolean;
    /** URL that will be redirected */
    path: string;
    text: string;
};
/** Component for rendering a notification link */
export declare const NotificationLink: ({ "data-testid": dataTestId, isExternal, path, text, }: NotificationLinkProps) => JSX.Element;
