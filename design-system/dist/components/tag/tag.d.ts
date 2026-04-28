import { SupportedKind } from './tag.interface';
import { TagProps as BaseTagProps } from 'baseui/tag';
export interface TagProps extends Omit<BaseTagProps, 'variant' | 'kind'> {
    'data-testid'?: string;
    kind?: SupportedKind;
    icon?: React.ReactNode;
    variant?: 'solid' | 'overlay';
    textMaxWidth?: string;
}
/**
 * Styled tag component, supporting variant and kind styles and an optional
 * icon component rendered in the left
 */
export declare function Tag({ 'data-testid': dataTestId, icon, children, kind, overrides, variant, closeable, ...rest }: TagProps): React.ReactElement;
