import type { ReactElement } from 'react';

import { SidebarProvider } from '@components/sidebar/sidebar.provider';
import { render, screen, testHelpers } from '@test/test-utils';

import { SidebarHeader } from '../sidebar-header';

const defaultProps = {
  children: 'Header content',
};

const renderWithProvider = (ui: ReactElement): ReturnType<typeof render> =>
  render(<SidebarProvider>{ui}</SidebarProvider>);

describe('SidebarHeader', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('renders children', () => {
    renderWithProvider(<SidebarHeader {...defaultProps} />);

    expect(screen.getByText('Header content')).toBeInTheDocument();
  });

  it('renders the sidebar trigger when showTrigger is true (default)', () => {
    renderWithProvider(<SidebarHeader {...defaultProps} />);

    expect(screen.getByRole('link', { name: /expandir menú|colapsar menú/i })).toBeInTheDocument();
  });

  it('does not render the trigger when showTrigger is false', () => {
    renderWithProvider(
      <SidebarHeader
        {...defaultProps}
        showTrigger={false}
      />,
    );

    expect(
      screen.queryByRole('link', { name: /colapsar menú|expandir menú/i }),
    ).not.toBeInTheDocument();
  });

  it('shows expand aria-label when sidebar is collapsed', () => {
    render(
      <SidebarProvider defaultCollapsed>
        <SidebarHeader {...defaultProps} />
      </SidebarProvider>,
    );

    expect(screen.getByRole('link', { name: /expandir menú/i })).toBeInTheDocument();
  });
});
