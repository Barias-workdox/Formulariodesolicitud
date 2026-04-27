import { userEvent } from '@testing-library/user-event';

import {
  afterEach,
  render,
  renderUseTranslation,
  screen,
  testHelpers,
  waitFor,
} from '@test/test-utils';

import { CopyToClipboardButton } from './copy-to-clipboard-button';

import type { CopyToClipboardButtonProps } from './copy-to-clipboard-button';
import type { RenderType } from '@test/test-utils';

const mockOnCopy = testHelpers.fn();

const defaultProps: CopyToClipboardButtonProps = {
  'data-testid': 'data-testid',
  text: 'Eu est ad irure aute anim reprehenderit eu.',
  onCopy: mockOnCopy,
};

// Required to mock the clipboard copy
let copiedText = '';

Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: testHelpers.fn((text) => {
      copiedText = text;

      return Promise.resolve();
    }),
  },
});

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CopyToClipboardButtonProps>): RenderType =>
  render(
    <CopyToClipboardButton
      {...defaultProps}
      {...props}
    />,
  );

describe('copy-to-clipboard-button tests', () => {
  beforeEach(() => {
    copiedText = '';

    testHelpers.clearAllMocks();
  });

  afterEach(async () => {
    // Clean up any pending tooltip timeouts by unhovering before test cleanup
    const button = screen.queryByRole('button');

    if (button) {
      await userEvent.unhover(button).catch(() => {
        // Ignore if button is already unmounted
      });
    }
  });

  it('should copy to clipboard correctly with default icon button implementation', async () => {
    renderComponent();

    const { t } = renderUseTranslation();

    const button = screen.getByRole('button');

    // Check the tooltip initial value
    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('copyToClipboardButton.defaultTooltipText'))).toBeInTheDocument();
    });

    await userEvent.click(screen.getByRole('button'));

    // Check the tooltip copied value
    await userEvent.hover(button);
    await waitFor(() => {
      expect(screen.getByText(t('copyToClipboardButton.copiedTooltipText'))).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(copiedText).toBe(defaultProps.text);
    });

    expect(mockOnCopy).toHaveBeenCalledTimes(1);
  });

  it('should copy to clipboard correctly with custom children implementation', async () => {
    renderComponent({ children: <div>test</div> });

    const element = screen.getByText('test');

    await userEvent.click(element);

    await waitFor(() => {
      expect(copiedText).toBe(defaultProps.text);
    });
  });
});
