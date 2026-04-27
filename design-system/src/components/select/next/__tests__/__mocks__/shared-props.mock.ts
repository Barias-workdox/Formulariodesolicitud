import type { SharedProps } from 'baseui/input';
import type { SharedStylePropsArg } from 'baseui/select';

/**
 * Mocked shared props for Select component.
 */
export const sharedPropsMock: SharedStylePropsArg & SharedProps = {
  $adjoined: 'none',
  $disabled: false,
  $isReadOnly: false,
  $size: 'default',
  $type: 'search',
};
