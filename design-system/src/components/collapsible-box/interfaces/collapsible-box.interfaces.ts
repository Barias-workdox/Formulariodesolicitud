import type { OverrideObject } from '@themes/theme.interfaces';
import type { AccordionOverrides } from 'baseui/accordion';

export type CollapsibleOverrides = Pick<AccordionOverrides, 'Content'> & {
  HeaderContainer?: OverrideObject;
  Title?: OverrideObject;
};
