import { render, screen } from '@test/test-utils';

import { SectionedCard } from './sectioned-card';

import type { SectionedCardProps } from './sectioned-card';
import type { RenderType } from '@test/test-utils';

const mockTitle = 'Title text';
const contentText = 'Children text';

/** Utility to render component */
const renderComponent = (props?: Partial<SectionedCardProps>): RenderType => {
  const defaultProps: SectionedCardProps = {
    title: mockTitle,
    children: <div>{contentText}</div>,
  };

  return render(
    <SectionedCard
      {...defaultProps}
      {...props}
    />,
  );
};

describe('sectioned-card tests', () => {
  it('renders correctly', () => {
    renderComponent();

    const title = screen.getByText(mockTitle);
    const content = screen.getByText(contentText);

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
  });

  it('renders header enhancer correctly', () => {
    const enhancerText = 'Enhancer text';

    renderComponent({ headerEnhancer: <>{enhancerText}</> });

    const enhancer = screen.getByText(contentText);

    expect(enhancer).toBeInTheDocument();
  });
});
