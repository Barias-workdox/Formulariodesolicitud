import { render, screen, testHelpers } from '@test/test-utils';

import { WebdoxAIButton } from '../../components/webdox-ai-button';

import type { WebdoxAIButtonProps } from '../../components/webdox-ai-button';

const baseDataTestId = 'webdox-ai-button';

const onClickMock = testHelpers.fn();

const defaultProps: WebdoxAIButtonProps = {
  'data-testid': baseDataTestId,
  onClick: onClickMock,
};

const renderComponent = (props?: Partial<WebdoxAIButtonProps>) => {
  return render(
    <WebdoxAIButton
      {...defaultProps}
      {...props}
    />,
  );
};

describe('WebdoxAIButton - tests', () => {
  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByTestId(baseDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--brain-icon`)).toBeInTheDocument();
  });

  it('should render the component correctly when `isLoading` is `true`', () => {
    renderComponent({ isLoading: true });

    expect(screen.getByTestId(baseDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--brain-icon`)).toBeInTheDocument();
  });

  it('should render the component correctly when `hasError` is `true`', () => {
    renderComponent({ hasError: true });

    expect(screen.getByTestId(baseDataTestId)).toBeInTheDocument();
    expect(screen.getByTestId(`${baseDataTestId}--brain-icon`)).toBeInTheDocument();
  });
});
