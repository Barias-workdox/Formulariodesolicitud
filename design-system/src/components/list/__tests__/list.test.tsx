import { render, screen } from '@test/test-utils';

import { List } from '../list';

describe('list - tests', () => {
  it('should render table correctly', async () => {
    render(
      <List>
        <li>Example</li>
        <li>Example2</li>
        <li>Example3</li>
      </List>,
    );

    const list = screen.getByRole('list');

    expect(list).toBeInTheDocument();
    expect(list).toMatchSnapshot();
  });
});
