import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { InformationPopoverContent } from '../components/information-popover-content';

import type { InformationPopoverContentProps } from '../components/information-popover-content';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover-content';
const titleText = 'Nostrud sint cillum voluptate ipsum ex laboris proident irure proident.';
const contentText = 'Sunt reprehenderit ut sit nostrud sit ad velit officia.';

const mockClose = testHelpers.fn();

const defaultProps: InformationPopoverContentProps = {
  'data-testid': baseDataTestId,
  title: titleText,
  content: contentText,
  close: mockClose,
};

const renderComponent = (props?: Partial<InformationPopoverContentProps>): RenderType =>
  render(
    <InformationPopoverContent
      {...defaultProps}
      {...props}
    />,
  );

describe('InformationPopoverContent - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}__header--close`)).toBeInTheDocument();
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  it('should execute `close` function when close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}__header--close`));

    expect(mockClose).toBeCalled();
  });

  it('should render the component correctly when components have overrides', async () => {
    renderComponent({
      overrides: {
        Header: {
          component: ({ title }) => (
            <div data-testid={`${baseDataTestId}__header-override`}>{title}</div>
          ),
        },
        Content: {
          component: ({ children }) => (
            <div data-testid={`${baseDataTestId}__content-override`}>{children}</div>
          ),
        },
      },
    });

    expect(screen.getByTestId(`${baseDataTestId}__header-override`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__content-override`)).toBeInTheDocument();

    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });
});
