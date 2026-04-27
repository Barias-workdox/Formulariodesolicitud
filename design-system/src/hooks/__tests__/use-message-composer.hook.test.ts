import type { ClipboardEvent, KeyboardEvent } from 'react';

import { useMessageComposer } from '@hooks/use-message-composer/use-message-composer.hook';
import { act, renderHook, testHelpers } from '@test/test-utils';

vi.mock('react', async () => {
  const actual = await vi.importActual('react');

  const mockTextareaDiv = document.createElement('div');

  mockTextareaDiv.contentEditable = 'true';
  document.body.appendChild(mockTextareaDiv);

  return {
    ...actual,
    useRef: vi.fn().mockReturnValue({ current: mockTextareaDiv }),
  };
});

beforeEach(() => {
  testHelpers.clearAllMocks();
});

describe('useMessageComposer', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useMessageComposer({}));

    expect(result.current.value).toBe('');
  });

  it('should update value when `handleChange` is called', () => {
    const onChangeMock = vi.fn();
    const { result } = renderHook(() =>
      useMessageComposer({ defaultValue: '', onChange: onChangeMock }),
    );

    act(() => {
      result.current.handleChange('Example');
    });

    expect(result.current.value).toBe('Example');
    expect(onChangeMock).toHaveBeenCalledWith('Example');
  });

  it('should handle pasting sanitized content', () => {
    const pastedText = 'Test<br>Text';

    const mockEvent = {
      preventDefault: vi.fn(),
      clipboardData: {
        getData: vi.fn().mockReturnValue(pastedText),
      },
    } as unknown as ClipboardEvent<HTMLDivElement>;

    const { result } = renderHook(() => useMessageComposer({}));

    act(() => {
      result.current.handlePaste(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result.current.textareaRef.current?.innerHTML).toBe(pastedText);
  });

  it('should prevent paste a text longer than `maxLength`', () => {
    const mockEvent = {
      preventDefault: vi.fn(),
      clipboardData: {
        getData: vi.fn().mockReturnValue('12345'),
      },
    } as unknown as ClipboardEvent<HTMLDivElement>;

    const { result } = renderHook(() => useMessageComposer({ maxLength: 4 }));

    act(() => {
      result.current.handlePaste(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(result.current.textareaRef.current?.innerHTML).toBe('1234');
  });

  it('should prevent adding characters if `maxLength` is exceeded', () => {
    const { result } = renderHook(() => useMessageComposer({ maxLength: 5 }));
    const mockEvent = {
      key: 'a',
      preventDefault: vi.fn(),
      currentTarget: { textContent: '12345' },
    } as unknown as KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDown(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  it('should call `onCreate` when `Enter` is pressed without `Shift`', () => {
    const onCreateMock = vi.fn();

    const { result } = renderHook(() =>
      useMessageComposer({ defaultValue: 'Test', onCreate: onCreateMock }),
    );
    const mockEvent = {
      key: 'Enter',
      shiftKey: false,
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDown(mockEvent);
    });

    expect(mockEvent.preventDefault).toHaveBeenCalled();
    expect(onCreateMock).toHaveBeenCalledWith('Test');
  });

  it('should not call onCreate when Enter is pressed with Shift', () => {
    const onCreateMock = vi.fn();
    const { result } = renderHook(() =>
      useMessageComposer({ defaultValue: 'Test', onCreate: onCreateMock }),
    );
    const mockEvent = {
      key: 'Enter',
      shiftKey: true,
      preventDefault: vi.fn(),
    } as unknown as KeyboardEvent<HTMLDivElement>;

    act(() => {
      result.current.handleKeyDown(mockEvent);
    });

    expect(mockEvent.preventDefault).not.toHaveBeenCalled();
    expect(onCreateMock).not.toHaveBeenCalled();
  });
});
