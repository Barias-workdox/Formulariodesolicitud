import { CheckmarkFilled, Edit, Misuse } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';

import { InlineEditInputMode } from '../../inline-edit-input.interfaces';
import { StyledInputControlsContainer } from '../../styled-components';

import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type InputControlsProps = WithZIndex &
  WithTestId & {
    mode: InlineEditInputMode;
    disabled?: boolean;
    readOnly?: boolean;
    submitDisabled?: boolean;
    onCancel?(): void;
    onEdit?(): void;
    onSubmit?(): void;
  };

/**
 * Component that renders the input controls for the inline edit input.
 * It includes buttons for editing, submitting, and canceling the edit.
 */
export const InputControls = ({
  'data-testid': dataTestId,
  disabled,
  mode,
  onCancel,
  onEdit,
  onSubmit,
  readOnly,
  submitDisabled = false,
  zIndex,
}: InputControlsProps): JSX.Element => {
  const { t } = useTranslation();

  const isCaptionMode = mode === InlineEditInputMode.CAPTION;
  const disabledIconButton = disabled || readOnly;

  return (
    <StyledInputControlsContainer
      $captionMode={isCaptionMode}
      $disabled={disabled}
    >
      {isCaptionMode ? (
        <StatefulTooltipNext
          content={t('general.editContent')}
          showArrow
          zIndex={zIndex}
        >
          <IconButton
            data-testid={`${dataTestId}--edit-button`}
            size="24px"
            kind="ghost-tertiary"
            onClick={onEdit}
            disabled={disabledIconButton}
          >
            <Edit />
          </IconButton>
        </StatefulTooltipNext>
      ) : (
        <>
          <StatefulTooltipNext
            content={t('general.confirmEdit')}
            showArrow
            zIndex={zIndex}
          >
            <IconButton
              data-testid={`${dataTestId}--submit-button`}
              size="24px"
              kind="positive"
              onClick={onSubmit}
              disabled={disabledIconButton || submitDisabled}
            >
              <CheckmarkFilled />
            </IconButton>
          </StatefulTooltipNext>
          <StatefulTooltipNext
            content={t('general.cancelEdit')}
            showArrow
            zIndex={zIndex}
          >
            <IconButton
              data-testid={`${dataTestId}--cancel-button`}
              size="24px"
              kind="control"
              onClick={onCancel}
              disabled={disabledIconButton}
            >
              <Misuse />
            </IconButton>
          </StatefulTooltipNext>
        </>
      )}
    </StyledInputControlsContainer>
  );
};
