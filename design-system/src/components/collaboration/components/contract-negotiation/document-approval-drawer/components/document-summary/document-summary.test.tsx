import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, waitFor } from '@test/test-utils';

import { mockNegotiableDocuments } from '../../../../../__mocks__/documents.mock';
import { getDocumentVersion } from '../../../utils/document-version';

import { DocumentSummary } from './document-summary';

import type { DocumentSummaryProps } from './document-summary';
import type { RenderType } from '@test/test-utils';

const [{ document: mockDocument }] = mockNegotiableDocuments;
const mockLastModificationText = 'Document last modification text';

const defaultProps: DocumentSummaryProps = {
  document: mockDocument,
  documentLastModificationText: mockLastModificationText,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentSummaryProps>): RenderType => {
  return render(
    <DocumentSummary
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentSummary - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    const {
      name,
      officeDocumentVersion: { versionNumber },
    } = mockDocument;

    expect(screen.getByText(t('contractNegotiationCollaboration.document'))).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(getDocumentVersion(versionNumber))).toBeInTheDocument();
    expect(
      screen.getByText(t('contractNegotiationCollaboration.lastModification')),
    ).toBeInTheDocument();
    expect(screen.getByText(mockLastModificationText)).toBeInTheDocument();
  });

  it('should display the tooltips correctly', async () => {
    renderComponent();

    const { name } = mockDocument;

    await userEvent.hover(screen.getByText(name));
    await userEvent.hover(screen.getByText(mockLastModificationText));

    await waitFor(() => {
      expect(screen.getAllByText(name).length).toEqual(2);
      expect(screen.getAllByText(mockLastModificationText).length).toEqual(2);
    });
  });
});
