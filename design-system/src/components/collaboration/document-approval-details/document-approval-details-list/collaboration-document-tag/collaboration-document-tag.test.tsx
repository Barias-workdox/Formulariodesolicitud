import { render } from '@test/test-utils';

import { CollaborationDocumentTag } from './collaboration-document-tag';

import type { CollaborationDocumentTagProps } from './collaboration-document-tag';
import type { RenderType } from '@test/test-utils';

const defaultProps: CollaborationDocumentTagProps = {
  status: 'rejected',
  date: '2022-10-05T14:48:00.000Z',
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<CollaborationDocumentTagProps>): RenderType => {
  return render(
    <CollaborationDocumentTag
      {...defaultProps}
      {...props}
    />,
  );
};

describe('CollaborationDocumentTag - test', () => {
  it('should render correctly when the status is rejected', () => {
    const { getByText } = renderComponent();

    expect(getByText('Rechazó el documento', { exact: false })).toBeInTheDocument();
  });

  it('should render correctly when the status is pending', () => {
    const { getByText } = renderComponent({ status: 'pending' });

    expect(getByText('Aprobación pendiente')).toBeInTheDocument();
  });

  it('should render correctly when the status is approved', () => {
    const { getByText } = renderComponent({ status: 'approved' });

    expect(getByText('Aprobó el documento', { exact: false })).toBeInTheDocument();
  });
});
