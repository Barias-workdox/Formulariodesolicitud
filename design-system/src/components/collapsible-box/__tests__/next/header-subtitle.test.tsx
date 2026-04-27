import { HeaderSubtitle } from '@components/collapsible-box/next/components/panel/components/header-subtitle';
import { render, screen } from '@test/test-utils';

import type { HeaderSubtitleProps } from '@components/collapsible-box/next/components/panel/components/header-subtitle';
import type { RenderType } from '@test/test-utils';

const subtitleMock = 'Subtitle';
const collapsedSubtitleMock = 'Collapsed Subtitle';

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<HeaderSubtitleProps>): RenderType => {
  const { children = subtitleMock } = props || {};

  return render(<HeaderSubtitle {...props}>{children}</HeaderSubtitle>);
};

describe('HeaderSubtitle - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(subtitleMock)).toBeInTheDocument();
  });

  it('should render collapsed subtitle when $expanded is true', () => {
    renderComponent({ $expanded: true, collapsedSubtitle: collapsedSubtitleMock });

    expect(screen.getByText(collapsedSubtitleMock)).toBeInTheDocument();
  });

  it('should render children when $expanded is false', () => {
    renderComponent({ $expanded: false });

    expect(screen.getByText(subtitleMock)).toBeInTheDocument();
  });

  it('should render children when is a `ReactNode`', () => {
    renderComponent({ children: <div>{subtitleMock}</div> });

    expect(screen.getByText(subtitleMock)).toBeInTheDocument();
  });

  it('should render collapsed subtitle when is a `ReactNode` and $expanded is true', () => {
    renderComponent({ $expanded: true, collapsedSubtitle: <div>{collapsedSubtitleMock}</div> });

    expect(screen.getByText(collapsedSubtitleMock)).toBeInTheDocument();
  });
});
