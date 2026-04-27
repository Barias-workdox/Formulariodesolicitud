import { describe, it, expect, vi } from 'vitest';

import { render, screen, fireEvent, renderUseTranslation } from '@test/test-utils';

import { HeaderEmoji } from './components/header-emoji';
import { HeaderComponent } from './header';

import type { HeaderProps } from './header.interfaces';

vi.mock('./header.provider', async () => {
  const actual = await vi.importActual('./header.provider');

  return {
    ...actual,
    useHeader: () => ({
      size: 'medium',
      dataTestId: 'header_test-header',
      isDisabled: false,
    }),
  };
});

const defaultProps: HeaderProps = {
  title: 'Test Header Title',
  dataTestId: 'test-header',
  onCollapsibleButtonClick: vi.fn(),
  iconButton: true,
};

const { t } = renderUseTranslation();

const renderHeader = (props: Partial<HeaderProps> = {}) => {
  return render(
    <HeaderComponent
      {...defaultProps}
      {...props}
    />,
  );
};

describe('Header', () => {
  it('should render header with title', () => {
    renderHeader();

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Test Header Title')).toBeInTheDocument();
  });

  it('should render with correct data-testid', () => {
    renderHeader({ dataTestId: 'custom-header' });

    expect(screen.getByTestId('header_custom-header')).toBeInTheDocument();
  });

  it('should render with default size xsmall when no size provided', () => {
    renderHeader();

    const header = screen.getByTestId('header_test-header');

    expect(header).toBeInTheDocument();
  });

  describe('Back button', () => {
    it('should render back button when onBackButtonClick is provided', () => {
      const onBackButtonClick = vi.fn();

      renderHeader({ onBackButtonClick });

      expect(screen.getByTestId('header_test-header--back-button')).toBeInTheDocument();
    });

    it('should not render back button when onBackButtonClick is not provided', () => {
      renderHeader();

      expect(screen.queryByTestId('header_test-header--back-button')).not.toBeInTheDocument();
    });

    it('should call onBackButtonClick when back button is clicked', () => {
      const onBackButtonClick = vi.fn();

      renderHeader({ onBackButtonClick });

      fireEvent.click(screen.getByTestId('header_test-header--back-button'));
      expect(onBackButtonClick).toHaveBeenCalledTimes(1);
    });

    it('should disable back button when header is disabled', () => {
      const onBackButtonClick = vi.fn();

      renderHeader({ onBackButtonClick, isDisabled: true });

      const backButton = screen.getByTestId('header_test-header--back-button');

      expect(backButton).toBeDisabled();
    });
  });

  describe('Close button', () => {
    it('should render close button when onClose is provided', () => {
      const onClose = vi.fn();

      renderHeader({ onClose });

      expect(screen.getByTestId('header_test-header--close-button')).toBeInTheDocument();
    });

    it('should not render close button when onClose is not provided', () => {
      renderHeader();

      expect(screen.queryByTestId('header_test-header--close-button')).not.toBeInTheDocument();
    });

    it('should disable close button when header is disabled', () => {
      const onClose = vi.fn();

      renderHeader({ onClose, isDisabled: true });

      const closeButton = screen.getByTestId('header_test-header--close-button');

      expect(closeButton).toBeDisabled();
    });
  });

  describe('Draggable icon', () => {
    it('should render draggable icon when isDraggable is true and size is not medium', () => {
      renderHeader({ isDraggable: true, size: 'small' });

      expect(screen.getByTestId('header_test-header--draggable')).toBeInTheDocument();
    });

    it('should not render draggable icon when isDraggable is false', () => {
      renderHeader({ isDraggable: false });

      expect(screen.queryByTestId('header_test-header--draggable')).not.toBeInTheDocument();
    });

    it('should not render draggable icon when size is medium even if isDraggable is true', () => {
      renderHeader({ isDraggable: true, size: 'medium' });

      expect(screen.queryByTestId('header_test-header--draggable')).not.toBeInTheDocument();
    });

    it('should disable draggable icon when header is disabled', () => {
      renderHeader({ isDraggable: true, isDisabled: true });

      const draggableIcon = screen.getByTestId('header_test-header--draggable');

      expect(draggableIcon).toBeDisabled();
    });
  });

  describe('Actions section', () => {
    it('should render overflow menu button always', () => {
      renderHeader();

      expect(screen.getByTestId('header_test-header--overflow-menu')).toBeInTheDocument();
    });

    it('should render expand button always', () => {
      renderHeader();

      expect(screen.getByTestId('header_test-header--expand')).toBeInTheDocument();
    });

    it('should render custom actions when provided', () => {
      const actions = <button data-testid="custom-action">Custom Action</button>;

      renderHeader({ actions });

      expect(screen.getByTestId('custom-action')).toBeInTheDocument();
    });

    it('should disable action buttons when header is disabled', () => {
      renderHeader({ isDisabled: true });

      expect(screen.getByTestId('header_test-header--overflow-menu')).toBeDisabled();
      expect(screen.getByTestId('header_test-header--expand')).toBeDisabled();
    });
  });

  describe('Enhancer', () => {
    it('should not render enhancer when provided', () => {
      const enhancer = <div data-testid="custom-enhancer">Enhancer</div>;

      renderHeader({ enhancer });

      expect(screen.queryByTestId('custom-enhancer')).not.toBeInTheDocument();
    });

    it('should render allowed enhancer when provided', () => {
      const enhancer = (
        <HeaderEmoji
          symbol="🔥"
          label="fire"
          data-testid="custom-enhancer"
        />
      );

      renderHeader({ enhancer });

      expect(screen.queryByTestId('custom-enhancer')).not.toBeInTheDocument();
    });

    it('should not render enhancer when not provided', () => {
      renderHeader();

      expect(screen.queryByTestId('custom-enhancer')).not.toBeInTheDocument();
    });
  });

  describe('Different sizes', () => {
    const sizes: Array<'xsmall' | 'small' | 'medium'> = ['xsmall', 'small', 'medium'];

    sizes.forEach((size) => {
      it(`should render correctly with size ${size}`, () => {
        renderHeader({ size });

        const header = screen.getByTestId('header_test-header');

        expect(header).toBeInTheDocument();
      });
    });
  });

  describe('Disabled state', () => {
    it('should apply disabled styling when isDisabled is true', () => {
      renderHeader({ isDisabled: true });

      const header = screen.getByTestId('header_test-header');

      expect(header).toBeInTheDocument();
    });

    it('should not apply disabled styling when isDisabled is false', () => {
      renderHeader({ isDisabled: false });

      const header = screen.getByTestId('header_test-header');

      expect(header).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should use semantic header element', () => {
      renderHeader();

      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should have proper aria-label for expand button', () => {
      renderHeader({ onCollapsibleButtonClick: vi.fn() });

      const expandButton = screen.getByTestId('header_test-header--expand');

      expect(expandButton).toHaveAttribute('aria-label', t('general.expand'));
    });

    it('should have proper aria-label for back button', () => {
      renderHeader({ onBackButtonClick: vi.fn() });

      const expandButton = screen.getByTestId('header_test-header--back-button');

      expect(expandButton).toHaveAttribute('aria-label', t('general.back'));
    });

    it('should have proper aria-label for close button', () => {
      renderHeader({ onClose: vi.fn() });

      const expandButton = screen.getByTestId('header_test-header--close-button');

      expect(expandButton).toHaveAttribute('aria-label', t('general.close'));
    });

    it('should show title in tooltip via TruncatedText', () => {
      renderHeader({ title: 'Very Long Title That Might Be Truncated' });

      expect(screen.getByText('Very Long Title That Might Be Truncated')).toBeInTheDocument();
    });
  });
});
