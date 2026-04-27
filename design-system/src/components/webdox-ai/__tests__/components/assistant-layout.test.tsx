import { userEvent } from '@testing-library/user-event';

import { render, screen, testHelpers } from '@test/test-utils';

import { AssistantLayout } from '../../components';

import type { AssistantLayoutProps } from '../../components';
import type { RenderType } from '@test/test-utils';

const baseDataTestId = 'assistant-layout';
const headerTitle = 'Header title';
const customContent = 'Custom content';

const onCloseMock = testHelpers.fn();
const onSelectChangeMock = testHelpers.fn();

const defaultProps: AssistantLayoutProps = {
  'data-testid': baseDataTestId,
  children: customContent,
  selectedOption: [{ value: headerTitle }],
  selectOptions: [
    { value: 'Option 1', id: 'option1', label: 'Option 1' },
    { value: 'Option 2', id: 'option2', label: 'Option 2' },
  ],
  onSelectChange: onSelectChangeMock,
  onClose: onCloseMock,
};

const renderComponent = (props?: Partial<AssistantLayoutProps>): RenderType =>
  render(
    <AssistantLayout
      {...defaultProps}
      {...props}
    />,
  );

describe('AssistantLayout - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render layout correctly', () => {
    renderComponent();

    expect(screen.getByTestId(`${baseDataTestId}--brain-icon`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--close-button`)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--select`)).toBeInTheDocument();
    expect(screen.getByText(headerTitle)).toBeInTheDocument();
    expect(screen.getByText(customContent)).toBeInTheDocument();
  });

  it('should not render the select when there is no `selectOptions` variable defined', () => {
    renderComponent({ selectOptions: undefined });

    expect(screen.queryByTestId(`${baseDataTestId}--select`)).not.toBeInTheDocument();
  });

  it('should execute `onClose`function when close button is clicked', async () => {
    renderComponent();

    await userEvent.click(screen.getByTestId(`${baseDataTestId}--close-button`));

    expect(onCloseMock).toBeCalled();
  });
});
