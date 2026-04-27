import { themedStyled } from '@themes/utilities';

import { useHeader } from '../header.provider';
import { composeDataTestId } from '../utils/compose-data-test-id';
import { getIconSize } from '../utils/size-maps';

import type { HeaderSize } from '../header.interfaces';

export interface HeaderEmojiProps {
  symbol: string;
  label?: string;
}

const EmojiSpan = themedStyled<'span', { $size: HeaderSize; $isDisabled: boolean }>(
  'span',
  ({ $size, $isDisabled }) => ({
    opacity: $isDisabled ? 0.2 : 1,
    fontSize: getIconSize($size),
  }),
);

/**
 * Header emoji component.
 */
const HeaderEmoji = ({ symbol, label }: HeaderEmojiProps): JSX.Element => {
  const { size, dataTestId, isDisabled = false } = useHeader();

  const testId = composeDataTestId(`${dataTestId}-emoji`);

  return (
    <EmojiSpan
      role="img"
      $size={size ?? 'medium'}
      aria-label={label ? label : ''}
      aria-hidden={label ? 'false' : 'true'}
      data-testid={testId}
      $isDisabled={isDisabled}
    >
      {symbol}
    </EmojiSpan>
  );
};

export { HeaderEmoji };
