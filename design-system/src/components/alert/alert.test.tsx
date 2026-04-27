import { render, screen } from '@test/test-utils';

import { Alert } from './alert';

import type { AlertProps } from './alert';

const alertLabel = 'An Alert';

const defaultProps: AlertProps = {
  kind: 'warning',
};

test('Alert is displayed correctly', () => {
  render(<Alert {...defaultProps}>{alertLabel}</Alert>);
  expect(screen.getByText(alertLabel)).toBeInTheDocument();
});
