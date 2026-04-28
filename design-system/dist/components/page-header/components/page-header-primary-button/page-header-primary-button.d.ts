import { ReactElement } from 'react';
import { ButtonProps } from '../../../button';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type PageHeaderPrimaryButtonProps = Partial<Pick<ButtonProps, 'children' | 'data-testid' | 'onClick' | 'startEnhancer' | 'disabled' | 'isLoading'>> & WithTestId;
/**
 * A component to render primary button for page header.
 */
export declare const PageHeaderPrimaryButton: ({ dataTestId, children, ...rest }: PageHeaderPrimaryButtonProps) => ReactElement;
