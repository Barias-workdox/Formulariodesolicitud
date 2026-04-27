import { Text } from '@components/text';
import { getAllAllowedComponent } from '@utils/react.utils';

import { ALLOWED_FOOTER_ACTIONS_ELEMENTS } from './constants/allowed-elements.constant';
import { FooterActionsWrapper, FooterWrapper } from './footer.styled';
import { composeDataTestId } from './utils/compose-data-test-id';
import { getGapSize, getPaddingSize } from './utils/size-maps';

import type { FooterProps } from './footer.interfaces';

/**
 * Footer component to be used within other components.
 */
export const FooterComponent = ({
  text,
  dataTestId,
  size = 'small',
  borderRadius = 'borderSm',
  slot,
  isDisabled,
  actions,
}: FooterProps): JSX.Element => {
  const slotElement = slot;

  const shouldRenderText = Boolean(text) && size !== 'large';
  const shouldRenderSlot = Boolean(slotElement);

  const paddingSize = getPaddingSize(size);
  const gapSize = getGapSize(size);
  const allowedActions = getAllAllowedComponent(actions, ALLOWED_FOOTER_ACTIONS_ELEMENTS);

  const testId = composeDataTestId(dataTestId ?? '');
  const textColor = isDisabled ? 'neutralDepressed' : 'neutral';

  return (
    <FooterWrapper
      data-testid={testId}
      role="contentinfo"
      $borderRadius={borderRadius}
      $padding={paddingSize}
      $isDisabled={isDisabled}
      $gap={gapSize}
    >
      {shouldRenderSlot && slotElement}
      {shouldRenderText && (
        <Text
          variant="microCopy"
          color={textColor}
          margin={0}
        >
          {text}
        </Text>
      )}

      <FooterActionsWrapper $gap={gapSize}>{allowedActions}</FooterActionsWrapper>
    </FooterWrapper>
  );
};
