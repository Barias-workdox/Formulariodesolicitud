import { userEvent } from '@testing-library/user-event';

import {
  render,
  renderUseTranslation,
  replaceHtmlTagsFromText,
  screen,
  waitFor,
} from '@test/test-utils';

import { CollaborationHeader } from '../collaboration-header';

import type { CollaborationHeaderProps } from '../collaboration-header';
import type { RenderType } from '@test/test-utils';

const mockCollaborationName = 'Example collaboration name';
const mockCustomerName = 'Example customer name';

const defaultProps: CollaborationHeaderProps = {
  collaborationName: mockCollaborationName,
  customerName: mockCustomerName,
  status: 'active',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CollaborationHeaderProps>): RenderType => {
  return render(
    <CollaborationHeader
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CollaborationHeader - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    const { container } = renderComponent();

    expect(screen.getByText(mockCollaborationName)).toBeInTheDocument();
    expect(screen.getByText(t('collaborationDetails.status.active'))).toBeInTheDocument();
    expect(container).toHaveTextContent(
      replaceHtmlTagsFromText(
        t('collaborationDetails.header.customerName', { customerName: mockCustomerName }),
      ),
    );
  });

  it('should display the tooltips correctly', async () => {
    renderComponent();

    await userEvent.hover(screen.getByText(mockCollaborationName));

    await waitFor(() => {
      expect(screen.getAllByText(mockCollaborationName).length).toEqual(2);
    });
  });

  it('should render a custom action on the header', () => {
    renderComponent({ action: <div>Action</div> });

    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
