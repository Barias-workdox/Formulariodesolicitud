import { InformationPopoverContentProps } from './components/information-popover-content';
import { InformationPopoverHeaderProps } from './components/information-popover-header';
import { OverrideObject, Overrides } from '../../themes/theme.interfaces';
import { TextProps } from '../text';
import { PopoverOverrides } from 'baseui/popover';
export interface InformationPopoverOverrides extends Overrides, PopoverOverrides {
    PopoverContent?: OverrideObject<InformationPopoverContentProps>;
}
export interface InformationPopoverContentOverrides {
    Header?: OverrideObject<InformationPopoverHeaderProps>;
    Content?: OverrideObject<TextProps>;
}
