import { Close } from '@carbon/icons-react';
import { StyledClose } from 'baseui/modal';

import { getColorsMap, heightMap } from '@components/button/button.styles';

import { themedWithStyle } from '../../../../themes';
import { useCss } from '../../../utils/hooks/use-css';

import type { KindType, SizeType } from '@components/button/button.interfaces';
import type { SharedStylePropsArg } from 'baseui/modal';

export type ModalCloseButtonProps = SharedStylePropsArg & { canClose: boolean };

const size: SizeType = 'compact';
const kind: KindType = 'control';

const CloseContainer = themedWithStyle(StyledClose, ({ $theme }) => ({
  top: $theme.spacing.spacingMd,
  right: $theme.spacing.spacingMd,
  height: heightMap[size],
  width: heightMap[size],
  ...getColorsMap({ $theme })[kind],
}));

/** Styled Custom Close button for modal */
export function ModalCloseButton({ canClose, ...restProps }: ModalCloseButtonProps): JSX.Element {
  const { theme } = useCss();

  return canClose ? (
    <CloseContainer
      aria-label="Close"
      {...restProps}
    >
      <Close
        size={20}
        color={theme.colors.neutralSubdued}
      />
    </CloseContainer>
  ) : (
    <></>
  );
}
