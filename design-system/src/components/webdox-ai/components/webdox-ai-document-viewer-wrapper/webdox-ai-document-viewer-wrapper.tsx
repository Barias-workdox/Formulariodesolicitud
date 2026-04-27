import { useMemo, useState } from 'react';
import type { FunctionComponent, ReactNode } from 'react';

import { Popover } from 'baseui/popover';

import { CloseAction } from './components/close-action';
import { CopyAction } from './components/copy-action';
import { ExplainAction } from './components/explain-action';
import { TranslateAction } from './components/translate-action';
import { useTextSelection } from './hooks/use-text-selection.hook';
import {
  StyledButtonsContainer,
  StyledContainer,
} from './webdox-ai-document-viewer-wrapper.styles';

import type { CloseActionProps } from './components/close-action';
import type { CopyActionProps } from './components/copy-action';
import type { ExplainActionProps } from './components/explain-action';
import type { TranslateActionProps } from './components/translate-action';
import type {
  ActionButtonConfig,
  ActionButtonType,
} from './webdox-ai-document-viewer-wrapper.interfaces';
import type { LocaleOption } from '@components/utils';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface WebdoxAIDocumentViewerWrapperProps extends WithTestId {
  children: ReactNode;
  zIndex?: number;
  actions: ActionButtonConfig[];
  /** Callback to execute when copy action is executed. */
  onCopy(): void;
  /** Callback to execute when translate action is executed. */
  onTranslate(selectedText: string, language: LocaleOption): void;
  /** Callback to execute when explain action is executed. */
  onExplain(selectedText: string): void;
}

const actionButtonComponentMap: Record<
  ActionButtonType,
  FunctionComponent<CopyActionProps | CloseActionProps | TranslateActionProps | ExplainActionProps>
> = {
  close: CloseAction,
  copy: CopyAction,
  explain: ExplainAction,
  translate: TranslateAction,
};

/**
 * Wrapper component that enhances the document viewer with additional
 * functionalities specific to WebdoxAI.
 *
 * This component provides:
 * - Text selection capabilities with custom popover actions.
 */
export const WebdoxAIDocumentViewerWrapper = ({
  'data-testid': dataTestId = 'document-viewer-wrapper',
  actions,
  children,
  zIndex,
  onCopy,
  onExplain,
  onTranslate,
}: WebdoxAIDocumentViewerWrapperProps): JSX.Element => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const { resetSelection, onMouseUp, selectedText, selectionPositionNode } = useTextSelection({
    'data-testid': dataTestId,
    onResetSelection: () => setIsPopoverVisible(false),
    onSelectText: () => setIsPopoverVisible(true),
  });

  const visibleActions = useMemo(() => actions.filter(({ isVisible }) => isVisible), [actions]);

  /** Callback to close the popover. */
  const closePopover = (): void => {
    resetSelection();
  };

  /** Callback to handle translate action. */
  const handleTranslate = (selectedLanguage: LocaleOption): void =>
    onTranslate(selectedText, selectedLanguage);

  /** Callback to handle explain action. */
  const handleExplain = (): void => {
    onExplain(selectedText);
    closePopover();
  };

  return (
    <StyledContainer
      data-testid={dataTestId}
      onMouseUp={onMouseUp}
      onAuxClick={closePopover}
      onScrollCapture={closePopover}
    >
      <Popover
        autoFocus={false}
        isOpen={isPopoverVisible}
        placement="right"
        onClickOutside={closePopover}
        onEsc={closePopover}
        overrides={{
          Body: {
            style: {
              zIndex,
            },
          },
        }}
        content={
          <StyledButtonsContainer>
            {visibleActions.map(({ action, isDisabled }, index) => {
              const ActionComponent = actionButtonComponentMap[action];

              return (
                <ActionComponent
                  $isFirstChild={index === 0}
                  $isLastChild={index === visibleActions.length - 1}
                  data-testid={`${dataTestId}--${action}`}
                  disabled={isDisabled}
                  key={action}
                  onClose={closePopover}
                  onCopy={onCopy}
                  onTranslate={handleTranslate}
                  onExplain={handleExplain}
                  selectedText={selectedText}
                  zIndex={zIndex}
                />
              );
            })}
          </StyledButtonsContainer>
        }
      >
        {selectionPositionNode}
      </Popover>
      {children}
    </StyledContainer>
  );
};
