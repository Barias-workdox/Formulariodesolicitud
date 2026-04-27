import { Document } from '@carbon/icons-react';

import { render, screen } from '@test/test-utils';

import { EmptyState, type EmptyStateProps } from '../empty-state';

import type { RenderType } from '@test/test-utils';

const descriptionMock = 'Do anim aliquip incididunt ad est Lorem.';
const titleMock = 'Elit ut aute cupidatat in fugiat amet magna occaecat fugiat.';
const linkHrefMock = 'example.com';
const linkTextMock = 'Enim officia magna';
const primaryButtonTextMock = 'Nulla in tempor enim';
const secondaryButtonTextMock = 'Amet occaecat qui';

const defaultProps: EmptyStateProps = {
  description: descriptionMock,
  title: titleMock,
  Icon: Document,
  link: {
    href: linkHrefMock,
    text: linkTextMock,
  },
  primaryButtonProps: {
    text: primaryButtonTextMock,
  },
  secondaryButtonProps: {
    text: secondaryButtonTextMock,
  },
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<EmptyStateProps>): RenderType => {
  return render(
    <EmptyState
      {...defaultProps}
      {...props}
    />,
  );
};

describe('empty-state - tests', () => {
  test('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(descriptionMock)).toBeInTheDocument();
    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByText(linkTextMock)).toBeInTheDocument();
    expect(screen.getByText(primaryButtonTextMock)).toBeInTheDocument();
    expect(screen.getByText(secondaryButtonTextMock)).toBeInTheDocument();
  });

  test('should render with custom icon', () => {
    renderComponent({
      Icon: Document,
    });

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByText(descriptionMock)).toBeInTheDocument();
  });

  test('should render without optional elements', () => {
    renderComponent({
      title: titleMock,
      description: descriptionMock,
      link: undefined,
      primaryButtonProps: undefined,
      secondaryButtonProps: undefined,
    });

    expect(screen.getByText(titleMock)).toBeInTheDocument();
    expect(screen.getByText(descriptionMock)).toBeInTheDocument();
    expect(screen.queryByText(linkTextMock)).not.toBeInTheDocument();
    expect(screen.queryByText(primaryButtonTextMock)).not.toBeInTheDocument();
    expect(screen.queryByText(secondaryButtonTextMock)).not.toBeInTheDocument();
  });
});
