import { useRef, type MutableRefObject } from 'react';

import { userEvent } from '@testing-library/user-event';

import { render, renderHook, renderUseTranslation, screen, testHelpers } from '@test/test-utils';
import { noop } from '@utils/noop';

import { ResizeColumnLine } from '../resize-column-line';

const { t } = renderUseTranslation();

describe('ResizeColumnLine', () => {
  const {
    result: { current: columnRef },
  } = renderHook<MutableRefObject<HTMLDivElement>, undefined>(() =>
    useRef<HTMLDivElement>(document.createElement('div')),
  );

  beforeEach(() => {
    testHelpers.clearAllMocks();
  });

  it('handles mouse down event and starts column resizing', async () => {
    const updateWidth = testHelpers.fn();

    render(
      <ResizeColumnLine
        columnRef={columnRef}
        updateWidth={updateWidth}
        setIsResizeHovered={noop}
      />,
    );

    const container = screen.getByLabelText(t('dataTable.ariaLabels.resizeColumnLine'));

    await userEvent.pointer({ target: container, keys: '[MouseLeft>]' });

    expect(document.body.style.cursor).toBe('col-resize');
    expect(document.body.style.userSelect).toBe('none');
    expect(updateWidth).not.toHaveBeenCalled();
  });

  it('handles mouse up event and ends column resizing', async () => {
    const updateWidth = testHelpers.fn();

    render(
      <ResizeColumnLine
        columnRef={columnRef}
        updateWidth={updateWidth}
        setIsResizeHovered={noop}
      />,
    );

    const container = screen.getByLabelText(t('dataTable.ariaLabels.resizeColumnLine'));

    await userEvent.pointer({ target: container, keys: '[MouseLeft>][/MouseLeft]' });

    expect(document.body.style.cursor).toBe('unset');
    expect(document.body.style.userSelect).toBe('unset');
    expect(updateWidth).toHaveBeenCalledTimes(1);
  });
});
