import { Attributes, PropsWithChildren, ReactElement } from 'react';
/**
 * This component is used to create a container for a popover menu.
 * It can contain multiple menu items, titles, or other components as its children.
 */
export declare const PopoverMenu: {
    (props: PropsWithChildren<Attributes>): ReactElement;
    Container: import('styletron-react').StyletronComponent<"div", {}>;
    Title: import('styletron-react').StyletronComponent<"div", {}>;
    List: import('styletron-react').StyletronComponent<"ul", {}>;
    Item: ({ dataTestId, children, $styles, disabled, onClick, }: {
        'data-testid'?: string;
        dataTestId?: string;
    } & {
        children: import('react').ReactNode;
        disabled?: boolean;
        $styles?: import('styletron-standard').StyleObject;
        onClick(): void;
    }) => ReactElement;
    Empty: () => ReactElement;
};
