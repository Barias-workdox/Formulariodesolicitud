import { CheckboxControlProps } from '../../../../../../forms/components/checkbox';
import { DesignSystemTheme } from '../../../../../../../themes/theme.interfaces';
import { StyleObject } from 'styletron-react';
export declare const checkboxOverrides: CheckboxControlProps['formControlOverrides'];
export declare const styles: {
    textStyles: () => StyleObject;
    elementContainerStyles: () => StyleObject;
    elementStyles: (theme: DesignSystemTheme) => StyleObject;
    infoStyles: (theme: DesignSystemTheme) => StyleObject;
};
