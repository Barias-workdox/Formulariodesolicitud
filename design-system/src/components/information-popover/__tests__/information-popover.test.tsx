import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { InformationPopover } from '../information-popover';

import type { InformationPopoverProps } from '../information-popover';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const titleText = 'Nostrud sint cillum voluptate ipsum ex laboris proident irure proident.';
const contentText = 'Sit ipsum occaecat ut ad veniam.';

const closeMock = testHelpers.fn();

const defaultProps: Omit<InformationPopoverProps, 'children'> = {
  'data-testid': baseDataTestId,
  content: contentText,
  title: titleText,
  showArrow: true,
  isOpen: false,
  close: closeMock,
};

const renderComponent = (props?: Partial<InformationPopoverProps>): RenderType =>
  render(
    <InformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </InformationPopover>,
  );

describe('InformationPopover - tests', () => {
  it('should render the component when `open` is `true`', async () => {
    renderComponent({ isOpen: true });

    expect(screen.getByTestId(`${baseDataTestId}__header--close`)).toBeInTheDocument();
    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should not render the component when `open` is `false`', async () => {
    renderComponent({ isOpen: false });

    expect(screen.queryByTestId(`${baseDataTestId}__header--close`)).not.toBeInTheDocument();
    expect(screen.queryByText(titleText)).not.toBeInTheDocument();
    expect(screen.queryByText(contentText)).not.toBeInTheDocument();
  });

  it('should call `close` function the close button is clicked', async () => {
    renderComponent({ isOpen: true });

    await userEvent.click(screen.getByTestId(`${baseDataTestId}__header--close`));

    expect(closeMock).toHaveBeenCalled();
  });

  it('should render the component correctly when components have overrides', async () => {
    renderComponent({
      isOpen: true,
      overrides: {
        PopoverContent: {
          props: {
            overrides: {
              Header: {
                component: () => <div data-testid={`${baseDataTestId}__header-override`} />,
              },
              Content: {
                component: ({ children }) => (
                  <div data-testid={`${baseDataTestId}__content-override`}>{children}</div>
                ),
              },
            },
          },
        },
      },
    });

    expect(screen.getByTestId(`${baseDataTestId}__header-override`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__content-override`)).toBeInTheDocument();

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });
});
