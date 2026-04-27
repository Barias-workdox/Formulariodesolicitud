import { BasicMessageBoxActions } from '../basic-message-box-actions';

import { StyledContainer, StyledExtraActionsContainer } from './styled-components';

import type { MessageBoxActionsProps } from '../../message-box.interfaces';

/**
 * Component that renders the actions of the message box.
 * It is used to render the extra actions, primary button and secondary button.
 */
export const MessageBoxActions = ({
  extraActions,
  primaryButtonIcon,
  primaryButtonProps,
  primaryButtonText,
  secondaryButtonIcon,
  secondaryButtonProps,
  secondaryButtonText,
  onSecondaryButtonClick,
}: MessageBoxActionsProps): JSX.Element => {
  return (
    <StyledContainer>
      <StyledExtraActionsContainer>
        {extraActions && (
          <span
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
            role="presentation"
          >
            {extraActions}
          </span>
        )}
      </StyledExtraActionsContainer>
      <BasicMessageBoxActions
        onSecondaryButtonClick={onSecondaryButtonClick}
        primaryButtonIcon={primaryButtonIcon}
        primaryButtonProps={primaryButtonProps}
        primaryButtonText={primaryButtonText}
        secondaryButtonIcon={secondaryButtonIcon}
        secondaryButtonProps={secondaryButtonProps}
        secondaryButtonText={secondaryButtonText}
      />
    </StyledContainer>
  );
};
