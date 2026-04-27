import { render, renderUseTranslation, screen, testHelpers } from '@test/test-utils';

import { FormCardStepActions } from '../form card-step-actions';

import type { FormCardStepActionsProps } from '../form-card.interfaces';
import type { RenderType } from '@test/test-utils';

const { t } = renderUseTranslation();

const defaultProps: FormCardStepActionsProps = {
  currentStep: 1,
  totalSteps: 10,
  tagLabel: 'Tag Label',
  actionButton: { text: 'Button Label', onClick: testHelpers.fn() },
};

const renderComponent = (props?: Partial<FormCardStepActionsProps>): RenderType =>
  render(
    <FormCardStepActions
      {...defaultProps}
      {...props}
    />,
  );

describe('FormCardStepActions', () => {
  it('should render the step indicator text', () => {
    renderComponent();

    expect(
      screen.getByText(
        t('general.stepOf', { current: defaultProps.currentStep, steps: defaultProps.totalSteps }),
      ),
    ).toBeInTheDocument();
  });

  it('should render the tag when tagLabel is provided', () => {
    renderComponent({ tagLabel: 'Test Tag' });

    expect(screen.getByText('Test Tag')).toBeInTheDocument();
  });

  it('should not render the tag when tagLabel is not provided', () => {
    renderComponent({ tagLabel: undefined });

    expect(screen.queryByText('Tag Label')).not.toBeInTheDocument();
  });

  it('should render the button when actionButton is provided', () => {
    renderComponent({ actionButton: { text: 'Test Button', onClick: testHelpers.fn() } });

    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('should not render the button when actionButton is not provided', () => {
    renderComponent({ actionButton: undefined });

    expect(screen.queryByText('Button Label')).not.toBeInTheDocument();
  });

  it('should render both tag and button when both are provided', () => {
    renderComponent({
      tagLabel: 'My Tag',
      actionButton: { text: 'My Button', onClick: testHelpers.fn() },
    });

    expect(screen.getByText('My Tag')).toBeInTheDocument();
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });
});
