import type { InformationPopoverContentProps } from './components/information-popover-content';
import type { InformationPopoverHeaderProps } from './components/information-popover-header';
import type { OverrideObject, Overrides } from '../../themes/theme.interfaces';
import type { TextProps } from '@components/text';
import type { PopoverOverrides } from 'baseui/popover';

export interface InformationPopoverOverrides extends Overrides, PopoverOverrides {
  PopoverContent?: OverrideObject<InformationPopoverContentProps>;
}

export interface InformationPopoverContentOverrides {
  Header?: OverrideObject<InformationPopoverHeaderProps>;
  Content?: OverrideObject<TextProps>;
}
