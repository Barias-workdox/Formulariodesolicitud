import { render, screen } from '@test/test-utils';

import { documentUploadMock } from '../document-upload.mocks';

import { DocumentUploadDetailsReason } from './document-upload-details-reason';

import type { RenderType } from '@test/test-utils';

const defaultProps = {
  reason: documentUploadMock.tasks[0].reason,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: { reason?: string }): RenderType => {
  return render(
    <DocumentUploadDetailsReason
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentUploadDetailsReason - test', () => {
  it('should render correctly', () => {
    renderComponent();

    expect(screen.getByText(defaultProps.reason)).toBeInTheDocument();
  });
});
