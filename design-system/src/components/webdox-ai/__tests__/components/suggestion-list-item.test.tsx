import { render, screen, testHelpers } from '@test/test-utils';

import {
  SuggestionListItem,
  type SuggestionListItemProps,
} from '../../components/chat/chat-composer/suggestion-list';

const dataTestId = 'suggestion-item';
const defaultProps: SuggestionListItemProps = {
  'data-testid': dataTestId,
  children: 'Test Child',
  tooltipProps: {
    content: 'tooltip text',
  },
  onClick: testHelpers.fn(),
};

const renderComponent = (props?: Partial<SuggestionListItemProps>) => {
  return render(
    <SuggestionListItem
      {...defaultProps}
      {...props}
    />,
  );
};

describe('SuggestionListItem', () => {
  it('should render SuggestionListItem with given children', () => {
    renderComponent();
    const content = screen.getByTestId(`${dataTestId}-wrapper`);

    expect(content).toBeInTheDocument();
    expect(content).toHaveTextContent('Test Child');
  });
});
