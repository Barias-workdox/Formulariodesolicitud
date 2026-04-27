import { useState } from 'react';
import type { ReactElement } from 'react';

import {
  DEFAULT_TEXT_SELECTION_POSITION,
  TEXT_SELECTION_MARGIN,
} from '../webdox-ai-document-viewer-wrapper.constants';
import { SelectionPositionNode } from '../webdox-ai-document-viewer-wrapper.styles';

import type { TextSelectionPosition } from '../webdox-ai-document-viewer-wrapper.interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

export interface IUseTextSelection {
  /** The selected text as a string. */
  selectedText: string;
  /**
   * A React node that serves as an indicator for the selection position.
   * This node is typically used to show others components on selected text position.
   */
  selectionPositionNode: ReactElement;
  /** Callback to execute when the event onMouseUp is detected. */
  onMouseUp(): void;
  /** Callback to execute to reset all selection conditions. */
  resetSelection(): void;
}

export interface UseTextSelectionProps extends WithTestId {
  /** Callback to execute when a text is selected. */
  onSelectText(): void;
  /** Callback to execute when selection is reset. */
  onResetSelection(): void;
}

/** Custom hook to handle text selection. */
export const useTextSelection = ({
  'data-testid': dataTestId,
  onSelectText,
  onResetSelection,
}: UseTextSelectionProps): IUseTextSelection => {
  const [selectionPosition, setSelectionPosition] = useState<TextSelectionPosition>(
    DEFAULT_TEXT_SELECTION_POSITION,
  );
  const [selectedText, setSelectedText] = useState('');

  /** Callback to execute to reset all selection conditions. */
  const resetSelection: IUseTextSelection['resetSelection'] = () => {
    onResetSelection();
    window.getSelection()?.removeAllRanges();
  };

  /** Callback to execute when the onMouseUp event is detected. */
  const handleMouseUp: IUseTextSelection['onMouseUp'] = () => {
    const selection = window.getSelection();
    const newSelectedText = selection?.toString().trim();

    if (selection && newSelectedText !== '') {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();

      onSelectText();

      const positionTop = rect.top - TEXT_SELECTION_MARGIN;

      setSelectionPosition({
        top:
          positionTop > DEFAULT_TEXT_SELECTION_POSITION.top
            ? positionTop
            : DEFAULT_TEXT_SELECTION_POSITION.top,
        left:
          rect.left > DEFAULT_TEXT_SELECTION_POSITION.left
            ? rect.left
            : DEFAULT_TEXT_SELECTION_POSITION.left,
      });
      setSelectedText(newSelectedText);
    }
  };

  return {
    selectedText,
    onMouseUp: handleMouseUp,
    resetSelection,
    selectionPositionNode: (
      <SelectionPositionNode
        data-testid={`${dataTestId}--selection-position-node`}
        $left={selectionPosition.left}
        $top={selectionPosition.top}
      />
    ),
  };
};
