import { userEvent } from '@testing-library/user-event';

import { render, screen, waitForElementToBeRemoved } from '@test/test-utils';

import { CollapsibleBox } from '../collapsible-box';

import type { CollapsibleBoxProps } from '../collapsible-box';
import type { RenderType } from '@test/test-utils';

const title = 'box title';
const icon = '👻';
const panelContent = 'lorem ipsum dolor sit amet';

const renderComponent = (props: Partial<CollapsibleBoxProps> = {}): RenderType =>
  render(
    <CollapsibleBox
      title={title}
      Icon={icon}
      {...props}
    >
      {panelContent}
    </CollapsibleBox>,
  );

describe('collapsible-box tests', () => {
  it('should render the component: icon, title and panel content', () => {
    renderComponent();

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(icon)).toBeInTheDocument();
    expect(screen.getByText(panelContent)).toBeInTheDocument();
  });

  it('should "not" render the panel when initial state is "not" expanded', () => {
    renderComponent({ initialState: { isExpanded: false } });

    expect(screen.queryByText(panelContent)).not.toBeInTheDocument();
  });

  it('should hide the panel when the header toggle button is clicked', async () => {
    renderComponent();

    const toggleButton = screen.getByLabelText(`${title} toggle button`);

    expect(screen.getByText(panelContent)).toBeInTheDocument();

    await userEvent.click(toggleButton);

    waitForElementToBeRemoved(screen.queryByText(panelContent));
  });

  it('should render with custom options component', () => {
    renderComponent({ options: <div>options</div> });

    expect(screen.getByText('options')).toBeInTheDocument();
  });
});
