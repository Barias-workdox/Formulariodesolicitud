import { OverrideObject } from '../../../themes/theme.interfaces';
import { AccordionOverrides } from 'baseui/accordion';
export type CollapsibleOverrides = Pick<AccordionOverrides, 'Content'> & {
    HeaderContainer?: OverrideObject;
    Title?: OverrideObject;
};
