import { ROLE, SIZE } from 'baseui/modal';

import { render, screen, testHelpers } from '@test/test-utils';

import { ModalCloseButton } from './modal-close-button';

import type { ModalCloseButtonProps } from './modal-close-button';
import type { RenderType } from '@test/test-utils';

const defaultProps: ModalCloseButtonProps = {
  canClose: true,
  $animate: true,
  $closeable: true,
  $isFocusVisible: true,
  $isOpen: true,
  $isVisible: true,
  $role: ROLE.alertdialog,
  $size: SIZE.default,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<ModalCloseButtonProps>): RenderType =>
  render(
    <ModalCloseButton
      {...defaultProps}
      {...props}
    />,
  );

describe('modal-close-button - tests', () => {
  afterEach(() => {
    testHelpers.clearAllMocks();
  });

  it('should render the component if `canClose` = `true`', () => {
    renderComponent();

    expect(screen.getByLabelText('Close')).toBeInTheDocument();
  });

  it('should render empty component if `canClose` = `false`', async () => {
    renderComponent({ canClose: false });

    expect(screen.queryByLabelText('Close')).not.toBeInTheDocument();
  });
});
