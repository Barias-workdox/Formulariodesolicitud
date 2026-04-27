import { userEvent } from '@testing-library/user-event';

import { render, screen, waitFor } from '@test/test-utils';

import { StatefulTooltip } from './stateful-tooltip';

const defaultProps = {
  content: 'test tooltip',
  children: 'children',
};

test('StatefulTooltip is displayed correctly', async () => {
  render(<StatefulTooltip {...defaultProps} />);

  const childrenText = screen.getByText(defaultProps.children);

  expect(childrenText).toBeInTheDocument();

  // Check the tooltip is not rendered in the document
  expect(screen.queryByText(defaultProps.content)).not.toBeInTheDocument();

  // Check the tooltip is rendered in the document
  await userEvent.hover(childrenText);
  await waitFor(() => {
    expect(screen.getByText(defaultProps.content)).toBeInTheDocument();
  });
});
