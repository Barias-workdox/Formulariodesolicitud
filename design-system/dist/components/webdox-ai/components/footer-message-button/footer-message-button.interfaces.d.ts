import { IconButtonProps } from '../../../button/variants/icon-button/icon-button.interfaces';
import { PopoverOverrides } from 'baseui/popover';
export type FooterMessageButtonProps = React.PropsWithChildren<{
    'data-testid': string;
    disabled?: boolean;
    isLoading?: boolean;
    popoverOverrides?: PopoverOverrides;
    zIndex?: number;
    tooltipText?: string;
    buttonKind?: IconButtonProps['kind'];
    onClick?(): void;
}>;
