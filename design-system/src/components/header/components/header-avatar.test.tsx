import { render, screen } from '@testing-library/react';

import { HeaderProvider } from '../header.provider';

import { HeaderAvatar } from './header-avatar';

import type { HeaderAvatarProps } from './header-avatar';
import type { HeaderProviderProps } from '../header.provider';

const defaultProviderProps: HeaderProviderProps['defaultProps'] = {
  size: 'medium',
  dataTestId: 'header-test',
  isDisabled: false,
  title: 'Header Title',
};

const renderWithProvider = (
  providerProps: Partial<HeaderProviderProps['defaultProps']> = {},
  avatarProps: Partial<HeaderAvatarProps> = {},
) => {
  return render(
    <HeaderProvider defaultProps={{ ...defaultProviderProps, ...providerProps }}>
      <HeaderAvatar
        name="John Doe"
        {...avatarProps}
      />
    </HeaderProvider>,
  );
};

describe('HeaderAvatar', () => {
  it('should render avatar with correct name', () => {
    renderWithProvider();

    const [_, avatar] = screen.getAllByRole('img');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('alt', 'John Doe');
  });

  it('should compose correct data-testid', () => {
    renderWithProvider({ dataTestId: 'custom-header' });

    const avatar = screen.getByTestId('header_custom-header-avatar--root');

    expect(avatar).toBeInTheDocument();
  });

  it('should pass size from header context', () => {
    renderWithProvider({ size: 'small' });

    const [container] = screen.getAllByRole('img');

    expect(container).toBeInTheDocument();
  });

  it('should pass disabled state from header context', () => {
    renderWithProvider({ isDisabled: true });

    const [container] = screen.getAllByRole('img');

    expect(container.parentNode).toHaveAttribute('aria-disabled', 'true');
  });

  it('should not be disabled when header is not disabled', () => {
    renderWithProvider({ isDisabled: false });

    const [container] = screen.getAllByRole('img');

    expect(container.parentNode).not.toHaveAttribute('aria-disabled', 'true');
  });

  it('should pass through avatar props except omitted ones', () => {
    renderWithProvider(
      {},
      {
        name: 'Jane Smith',
      },
    );

    const [container, avatar] = screen.getAllByRole('img');

    expect(container).toHaveAttribute('aria-label', 'Jane Smith');
    expect(avatar).toHaveAttribute('alt', 'Jane Smith');
  });

  it('should render with different header sizes', () => {
    const sizes: Array<'xsmall' | 'small' | 'medium'> = ['xsmall', 'small', 'medium'];

    sizes.forEach((size) => {
      const { unmount } = renderWithProvider({ size, dataTestId: `header-${size}` });

      const [container] = screen.getAllByRole('img', { name: 'John Doe' });

      expect(container).toBeInTheDocument();

      unmount();
    });
  });

  it('should handle avatar with image source', () => {
    renderWithProvider(
      {},
      {
        name: 'John Doe',
        src: 'https://example.com/avatar.jpg',
      },
    );

    const [_, img] = screen.getAllByRole('img', { name: 'John Doe' });

    expect(img).toHaveAttribute('src', 'https://example.com/avatar.jpg');
  });

  it('should render fallback when no src provided', () => {
    renderWithProvider({}, { name: 'John Doe' });

    const avatar = screen.getByTestId('header_header-test-avatar--initials');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveTextContent('J');
  });
});
