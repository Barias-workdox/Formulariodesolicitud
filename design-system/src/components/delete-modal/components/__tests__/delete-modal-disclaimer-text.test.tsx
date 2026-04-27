import { render, screen } from '@test/test-utils';

import { DeleteModalDisclaimerText } from '../delete-modal-disclaimer-text';

import type { DeleteModalDisclaimerTextProps } from '../delete-modal-disclaimer-text';

const defaultProps: DeleteModalDisclaimerTextProps = {
  text: 'Disclaimer text',
};

const renderComponent = (props?: Partial<DeleteModalDisclaimerTextProps>) =>
  render(
    <DeleteModalDisclaimerText
      {...defaultProps}
      {...props}
    />,
  );

describe('DeleteModalDisclaimerText', () => {
  it('should render the disclaimer text', () => {
    renderComponent();

    expect(screen.getByText(defaultProps.text)).toBeInTheDocument();
  });
});
