import { render, renderUseTranslation, screen } from '@test/test-utils';

import { PopoverMenuEmpty } from '../popover-menu-empty';

describe('PopoverMenuEmpty', () => {
  it('renders the empty message', () => {
    render(<PopoverMenuEmpty />);

    const { t } = renderUseTranslation();

    const emptyMessage = screen.getByText(t('dataTable.addColumnsEmpty'));

    expect(emptyMessage).toBeInTheDocument();
  });
});
