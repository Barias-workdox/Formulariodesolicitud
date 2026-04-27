import { Tag } from '@components/tag/next';
import { useThousandSeparatorLocale } from '@hooks/use-thousand-separator-locale';

import type { WithTestId } from '@interfaces/common.interfaces';

export type ItemLabelCounterProps = WithTestId & {
  isActive: boolean;
  disabled: boolean;
  counter?: number;
};

/**
 * `ItemLabelCounter` is a component used to display a counter or supplementary text
 * alongside a label in a navigation menu.
 *
 * This component adjusts its style based on the `isActive` and `disabled` states
 *
 * TODO: Replace this component with the new Tag component when it is developed.
 */
export const ItemLabelCounter = ({
  dataTestId = 'item-label-counter',
  isActive,
  disabled,
  counter = 0,
}: ItemLabelCounterProps): JSX.Element => {
  const formattedCounter = useThousandSeparatorLocale(counter);

  return (
    <Tag
      data-testid={dataTestId}
      kind={isActive ? 'brand' : 'neutral'}
      variant="outlined"
      shape="pill"
      disabled={disabled}
      size="sm"
    >
      {formattedCounter}
    </Tag>
  );
};
