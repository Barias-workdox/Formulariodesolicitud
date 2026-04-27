import { Home } from '@carbon/icons-react';
import { within } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { SidebarProvider } from '@components/sidebar/sidebar.provider';
import { mockUseMedia } from '@test/__mocks__/use-media.mock';
import { render, screen, testHelpers } from '@test/test-utils';
import { mediaQueries } from '@tokens/breakpoints';

import { SidebarLink } from './sidebar-link';

import type { SidebarLinkProps } from './sidebar-link.interfaces';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();

const defaultProps: Omit<SidebarLinkProps, 'Icon'> = {
  href: '/home',
  text: 'Home',
  onClick: mockOnClick,
  isActive: false,
  isAvatar: false,
  isDisabled: false,
  variant: 'large',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<SidebarLinkProps>, isCollapsed = false): RenderType => {
  return render(
    <SidebarProvider defaultCollapsed={isCollapsed}>
      <SidebarLink
        {...defaultProps}
        Icon={Home}
        {...props}
      />
    </SidebarProvider>,
  );
};

describe('SidebarLink - test', () => {
  beforeEach(() => {
    // Default tests assume "desktop" behavior where the provider doesn't force collapse.
    mockUseMedia({
      [mediaQueries.large]: true,
    });
  });

  it('should render the component correctly with default props', () => {
    renderComponent();

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
  });

  it('should render avatar when isAvatar is true', () => {
    renderComponent({ isAvatar: true });

    expect(screen.getByText('H')).toBeInTheDocument(); // Avatar shows first letter of text
  });

  it('should hide text when sidebar is collapsed', () => {
    renderComponent({}, true);

    // Text should not be rendered in DOM when collapsed
    const textElement = screen.queryByText('Home');

    expect(textElement).not.toBeInTheDocument();

    // Only the icon should be visible
    expect(screen.getByTestId('sidebar-link__home__icon--wrapper')).toBeInTheDocument();
  });

  it('should show text when sidebar is expanded', () => {
    renderComponent({}, false); // Collapsed = false

    // Text should be rendered in DOM when expanded
    const textElement = screen.getByText('Home');

    expect(textElement).toBeInTheDocument();

    // Icon should also be visible
    expect(screen.getByTestId('sidebar-link__home__icon--wrapper')).toBeInTheDocument();
  });

  it('should show text when hideTextWhenCollapsed is false and sidebar is collapsed', () => {
    renderComponent({ hideTextWhenCollapsed: false }, true); // Collapsed = true

    const textElement = screen.getByText('Home');

    expect(textElement).toBeInTheDocument();
    expect(screen.getByTestId('sidebar-link__home__icon--wrapper')).toBeInTheDocument();
  });

  it('should not show tooltip when hideTextWhenCollapsed is false and sidebar is collapsed', async () => {
    renderComponent({ hideTextWhenCollapsed: false }, true); // Collapsed = true

    const link = screen.getByTestId('sidebar-link__home__link');

    await userEvent.hover(link);

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });

  it('should execute onClick when the link is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByRole('link'));

    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should render chevron when has subLinks and sidebar is expanded', () => {
    renderComponent(
      {
        subLinks: [{ href: '/sub', text: 'Sub Link', Icon: Home }],
      },
      false,
    ); // Expanded = false (not collapsed)

    expect(screen.getByTestId('sidebar-link__home__chevron')).toBeInTheDocument();
  });

  it('should not render chevron when has subLinks but sidebar is collapsed (default hideTextWhenCollapsed)', () => {
    renderComponent(
      {
        subLinks: [{ href: '/sub', text: 'Sub Link', Icon: Home }],
      },
      true,
    ); // Collapsed = true; no hideTextWhenCollapsed → default behavior hides chevron

    const chevron = screen.queryByTestId('sidebar-link__home__chevron');

    expect(chevron).not.toBeInTheDocument();
  });

  it('should render chevron when hideTextWhenCollapsed is false, has subLinks and sidebar is collapsed', () => {
    renderComponent(
      {
        hideTextWhenCollapsed: false,
        subLinks: [{ href: '/sub', text: 'Sub Link', Icon: Home }],
      },
      true,
    );

    expect(screen.getByTestId('sidebar-link__home__chevron')).toBeInTheDocument();
  });

  it('should mount sublink overlay on hover and unmount on hover end', async () => {
    renderComponent({
      subLinks: [
        { href: '/sub', text: 'Sub Link', Icon: Home },
        { href: '/sub-2', text: 'Sub Link 2', Icon: Home },
      ],
    });

    const link = screen.getByTestId('sidebar-link__home__link');

    expect(screen.queryByTestId('sidebar-sublink')).not.toBeInTheDocument();

    await userEvent.hover(link);

    const sublinkOverlay = screen.getByTestId('sidebar-sublink');

    expect(sublinkOverlay).toBeInTheDocument();
    expect(within(sublinkOverlay).getByText('Home')).toBeInTheDocument();
    expect(within(sublinkOverlay).getByText('Sub Link')).toBeInTheDocument();
    expect(within(sublinkOverlay).getByText('Sub Link 2')).toBeInTheDocument();

    await userEvent.unhover(link);

    expect(screen.queryByTestId('sidebar-sublink')).not.toBeInTheDocument();
  });

  it('should not mount sublink overlay when link is disabled', async () => {
    renderComponent({
      isDisabled: true,
      subLinks: [{ href: '/sub', text: 'Sub Link', Icon: Home }],
    });

    const link = screen.getByTestId('sidebar-link__home__link');

    await userEvent.hover(link);

    expect(screen.queryByTestId('sidebar-sublink')).not.toBeInTheDocument();
  });

  it('should not show tooltip when sidebar is collapsed and has subLinks', async () => {
    renderComponent(
      {
        subLinks: [{ href: '/sub', text: 'Sub Link', Icon: Home }],
      },
      true,
    ); // Collapsed = true

    const link = screen.getByTestId('sidebar-link__home__link');

    await userEvent.hover(link);

    // Tooltip should not mount when `content` is undefined (collapsed + hasSubLinks)
    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});
