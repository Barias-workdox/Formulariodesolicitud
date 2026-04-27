import { act, renderHook, testHelpers } from '@test/test-utils';

import { useTextSelection } from '../../components/webdox-ai-document-viewer-wrapper/hooks/use-text-selection.hook';
import {
  DEFAULT_TEXT_SELECTION_POSITION,
  TEXT_SELECTION_MARGIN,
} from '../../components/webdox-ai-document-viewer-wrapper/webdox-ai-document-viewer-wrapper.constants';

import type { UseTextSelectionProps } from '../../components/webdox-ai-document-viewer-wrapper/hooks/use-text-selection.hook';

const mockRect = new DOMRect(100, 200, 0, 0);
const mockSelectedText = 'selected text';
const mockRemoveAllRanges = testHelpers.fn();

// Mock the window.getSelection function
const mockGetSelection = (selectedText: string, rect?: DOMRect) => {
  const range = {
    getBoundingClientRect: () => rect ?? mockRect,
  };

  return {
    toString: () => selectedText,
    getRangeAt: () => range,
    removeAllRanges: mockRemoveAllRanges,
  } as unknown as Selection;
};

afterEach(() => {
  testHelpers.clearAllMocks();
});

beforeAll(() => {
  testHelpers
    .spyOn(window, 'getSelection')
    .mockImplementation(() => mockGetSelection(mockSelectedText));
});

describe('useTextSelection - tests', () => {
  const defaultProps: UseTextSelectionProps = {
    'data-testid': 'test-id',
    onSelectText: testHelpers.fn(),
    onResetSelection: testHelpers.fn(),
  };

  it('should initialize with default values', () => {
    const { result } = renderHook(() => useTextSelection(defaultProps));

    const { selectionPositionNode, selectedText } = result.current;

    expect(selectedText).toBe('');
    expect(selectionPositionNode).toBeDefined();
  });

  it('should handle text selection correctly', () => {
    const { result } = renderHook(() => useTextSelection(defaultProps));

    act(() => {
      result.current.onMouseUp();
    });

    const { selectionPositionNode, selectedText } = result.current;

    expect(defaultProps.onSelectText).toHaveBeenCalled();
    expect(selectedText).toBe(mockSelectedText);
    expect(selectionPositionNode.props.$top).toBe(mockRect.top - TEXT_SELECTION_MARGIN);
    expect(selectionPositionNode.props.$left).toBe(mockRect.left);
  });

  it('should handle text selection correctly when text position is out of view', () => {
    testHelpers
      .spyOn(window, 'getSelection')
      .mockImplementationOnce(() =>
        mockGetSelection(mockSelectedText, new DOMRect(-100, -200, 0, 0)),
      );

    const { result } = renderHook(() => useTextSelection(defaultProps));

    act(() => {
      result.current.onMouseUp();
    });

    const { selectionPositionNode, selectedText } = result.current;

    expect(defaultProps.onSelectText).toHaveBeenCalled();
    expect(selectedText).toBe(mockSelectedText);
    expect(selectionPositionNode.props.$top).toBe(DEFAULT_TEXT_SELECTION_POSITION.top);
    expect(selectionPositionNode.props.$left).toBe(DEFAULT_TEXT_SELECTION_POSITION.left);
  });

  it('should handle empty text selection', () => {
    testHelpers.spyOn(window, 'getSelection').mockImplementationOnce(() => mockGetSelection(''));

    const { result } = renderHook(() => useTextSelection(defaultProps));

    act(() => {
      result.current.onMouseUp();
    });

    const { selectedText } = result.current;

    expect(selectedText).toBe('');
  });

  it('should reset selection', () => {
    const { result } = renderHook(() => useTextSelection(defaultProps));

    act(() => {
      result.current.resetSelection();
    });

    expect(defaultProps.onResetSelection).toHaveBeenCalled();
    expect(mockRemoveAllRanges).toHaveBeenCalled();
  });
});
