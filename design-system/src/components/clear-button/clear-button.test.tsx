import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { ClearButton } from './clear-button';

import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

/** Utility to render component quickly with default props */
const renderComponent = (): RenderType => {
  return render(<ClearButton onClick={mockOnClick} />);
};

describe('ClearButton - tests', () => {
  const { t } = renderUseTranslation();

  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component', () => {
    renderComponent();
    expect(screen.getByTitle(t('general.close'))).toBeInTheDocument();
  });

  it('should execute correctly when the component is clicked', async () => {
    renderComponent();
    expect(mockOnClick.mock.calls.length).toBe(0);
    await userEvent.click(screen.getByRole('button'));
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
