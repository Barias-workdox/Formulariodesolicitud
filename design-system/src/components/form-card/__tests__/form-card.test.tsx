import { render, screen } from '@test/test-utils';

import { FormCard } from '../form-card';

import type { FormCardProps } from '../form-card.interfaces';
import type { RenderType } from '@test/test-utils';

const defaultProps: FormCardProps = {
  title: 'Test Title',
  headerTitle: 'Header Title',
  headerSubtitle: 'Header Subtitle',
  footerLabel: 'Footer Label',
  footerText: 'Footer Text',
  children: 'Test Body Content',
};

const renderComponent = (props?: Partial<FormCardProps>): RenderType =>
  render(
    <FormCard
      {...defaultProps}
      {...props}
    />,
  );

describe('FormCard', () => {
  it('should render the component with all required props', () => {
    renderComponent();

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Header Title')).toBeInTheDocument();
    expect(screen.getByText('Header Subtitle')).toBeInTheDocument();
    expect(screen.getByText('Footer Label')).toBeInTheDocument();
    expect(screen.getByText('Footer Text')).toBeInTheDocument();
    expect(screen.getByText('Test Body Content')).toBeInTheDocument();
  });

  it('should render navActions when provided', () => {
    renderComponent({
      navActions: <div data-testid="nav-actions">Nav Actions</div>,
    });

    expect(screen.getByTestId('nav-actions')).toBeInTheDocument();
  });

  it('should not render navActions when not provided', () => {
    renderComponent();

    expect(screen.queryByTestId('nav-actions')).not.toBeInTheDocument();
  });

  it('should render headerInfo when provided', () => {
    renderComponent({
      headerInfo: <div data-testid="header-info">Header Info Content</div>,
    });

    expect(screen.getByTestId('header-info')).toBeInTheDocument();
  });

  it('should not render headerInfo when not provided', () => {
    renderComponent();

    expect(screen.queryByTestId('header-info')).not.toBeInTheDocument();
  });

  it('should not render the headerSubtitle when not provided', () => {
    renderComponent({ headerSubtitle: undefined });

    expect(screen.queryByText('Header Subtitle')).not.toBeInTheDocument();
  });

  it('should render footerInfo when provided', () => {
    renderComponent({
      footerInfo: <div data-testid="footer-info">Footer Info Content</div>,
    });

    expect(screen.getByTestId('footer-info')).toBeInTheDocument();
  });

  it('should not render footerInfo when not provided', () => {
    renderComponent();

    expect(screen.queryByTestId('footer-info')).not.toBeInTheDocument();
  });

  it('should render footerActions when provided', () => {
    renderComponent({
      footerActions: <div data-testid="footer-actions">Footer Actions</div>,
    });

    expect(screen.getByTestId('footer-actions')).toBeInTheDocument();
  });

  it('should not render footerActions when not provided', () => {
    renderComponent();

    expect(screen.queryByTestId('footer-actions')).not.toBeInTheDocument();
  });

  it('should render children content', () => {
    renderComponent({
      children: <div data-testid="custom-children">Custom Children Content</div>,
    });

    expect(screen.getByTestId('custom-children')).toBeInTheDocument();
  });

  it('should not render the footer when footer props are not provided', () => {
    renderComponent({
      footerLabel: undefined,
      footerText: undefined,
      footerInfo: undefined,
      footerActions: undefined,
    });

    expect(screen.queryByText('Footer Label')).not.toBeInTheDocument();
    expect(screen.queryByText('Footer Text')).not.toBeInTheDocument();
  });
});
