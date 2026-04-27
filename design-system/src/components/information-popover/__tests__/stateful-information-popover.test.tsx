import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';

import { StatefulInformationPopover } from '../stateful-information-popover';

import type { StatefulInformationPopoverProps } from '../stateful-information-popover';
import type { RenderType } from 'test/test-utils';

const baseDataTestId = 'information-popover';
const triggerButtonText = 'Click me';
const titleText = 'Nostrud sint cillum voluptate ipsum ex laboris proident irure proident.';
const contentText = 'Sit ipsum occaecat ut ad veniam.';

const defaultProps: Omit<StatefulInformationPopoverProps, 'children'> = {
  'data-testid': baseDataTestId,
  content: contentText,
  title: titleText,
  showArrow: true,
};

const renderComponent = (props?: Partial<StatefulInformationPopoverProps>): RenderType =>
  render(
    <StatefulInformationPopover
      {...defaultProps}
      {...props}
    >
      <div>{triggerButtonText}</div>
    </StatefulInformationPopover>,
  );

describe('StatefulInformationPopover - tests', () => {
  it('should render the component', async () => {
    renderComponent();

    await userEvent.click(screen.getByText(triggerButtonText));

    expect(screen.getByTestId(`${baseDataTestId}__header--close`)).toBeInTheDocument();
    expect(screen.getByText(titleText)).toBeInTheDocument();
    expect(screen.getByText(contentText)).toBeInTheDocument();
  });

  it('should close the popover when the close button is clicked', async () => {
    renderComponent();

    expect(screen.queryByText(titleText)).not.toBeInTheDocument();

    await userEvent.click(screen.getByText(triggerButtonText));

    expect(screen.getByText(titleText)).toBeInTheDocument();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}__header--close`));

    await waitFor(() => expect(screen.queryByText(titleText)).not.toBeInTheDocument());
  });

  it('should render the component correctly when components have overrides', async () => {
    renderComponent({
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

    await userEvent.click(screen.getByText(triggerButtonText));

    expect(screen.getByTestId(`${baseDataTestId}__header-override`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}__content-override`)).toBeInTheDocument();

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });
});
