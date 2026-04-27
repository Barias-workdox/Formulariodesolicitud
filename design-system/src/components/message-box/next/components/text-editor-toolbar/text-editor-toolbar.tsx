import { TextBold, TextItalic, TextUnderline } from '@carbon/icons-react';

import { useTranslation } from '@components/utils';

import { useTextEditorToolbar } from '../../hooks';
import { composeTextEditorToolbarTestId } from '../../utils';

import { ToolbarButton } from './components';
import { StyledContainer } from './styled-components';

/**
 * TextEditorToolbar is a component that renders the toolbar for the text editor.
 *
 * It must be used within the text editor context and the message box context to work properly.
 */
export const TextEditorToolbar = (): JSX.Element => {
  const {
    canBold,
    canItalic,
    canUnderline,
    disabled,
    isBold,
    isItalic,
    isUnderline,
    handleBold,
    handleItalic,
    handleUnderline,
  } = useTextEditorToolbar();

  const { t } = useTranslation();

  return (
    <StyledContainer>
      {canBold && (
        <ToolbarButton
          ariaLabel={t('messageBox.ariaLabels.boldButton')}
          dataTestId={composeTextEditorToolbarTestId('__bold-button')}
          disabled={disabled}
          isActive={isBold}
          onClick={handleBold}
        >
          <TextBold />
        </ToolbarButton>
      )}
      {canItalic && (
        <ToolbarButton
          ariaLabel={t('messageBox.ariaLabels.italicButton')}
          dataTestId={composeTextEditorToolbarTestId('__italic-button')}
          disabled={disabled}
          isActive={isItalic}
          onClick={handleItalic}
        >
          <TextItalic />
        </ToolbarButton>
      )}
      {canUnderline && (
        <ToolbarButton
          ariaLabel={t('messageBox.ariaLabels.underlineButton')}
          dataTestId={composeTextEditorToolbarTestId('__underline-button')}
          disabled={disabled}
          isActive={isUnderline}
          onClick={handleUnderline}
        >
          <TextUnderline />
        </ToolbarButton>
      )}
    </StyledContainer>
  );
};
