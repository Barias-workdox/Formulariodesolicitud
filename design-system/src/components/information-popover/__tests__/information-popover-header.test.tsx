import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { InformationPopoverHeader } from '../components/information-popover-header';

import type { InformationPopoverHeaderProps } from '../components/information-popover-header';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover-header';
const titleText = 'Nostrud sint cillum voluptate ipsum ex laboris proident irure proident.';

const mockOnClose = testHelpers.fn();

const defaultProps: Omit<InformationPopoverHeaderProps, 'children'> = {
  'data-testid': baseDataTestId,
  title: titleText,
  onClose: mockOnClose,
};

const renderComponent = (props?: Partial<InformationPopoverHeaderProps>): RenderType =>
  render(
    <InformationPopoverHeader
      {...defaultProps}
      {...props}
    />,
  );

describe('InformationPopoverHeader - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}--close`)).toBeInTheDocument();
    expect(screen.getByText(titleText)).toBeInTheDocument();
  });

  it('should execute `onClose` function when close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--close`));

    expect(mockOnClose).toBeCalled();
  });

  it('should render the component correctly when components have overrides', async () => {
    renderComponent({
      overrides: {
        CloseButton: {
          component: () => <div data-testid={`${baseDataTestId}__close-button-override`} />,
        },
        Root: {
          component: ({ children }) => (
            <div data-testid={`${baseDataTestId}__root-override`}>{children}</div>
          ),
        },
        Title: {
          component: ({ children }) => (
            <div data-testid={`${baseDataTestId}__title-override`}>{children}</div>
          ),
        },
      },
    });

    expect(screen.getByTestId(`${baseDataTestId}__close-button-override`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__root-override`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__title-override`)).toBeInTheDocument();

    expect(screen.getByText(titleText)).toBeInTheDocument();
  });
});
