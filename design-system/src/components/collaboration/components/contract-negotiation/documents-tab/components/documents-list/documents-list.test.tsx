import { userEvent } from '@testing-library/user-event';

import { render, renderUseTranslation, screen, testHelpers, waitFor } from '@test/test-utils';

import {
  mockNegotiableDocuments,
  mockReadOnlyDocuments,
} from '../../../../../__mocks__/documents.mock';

import { DocumentsList } from './documents-list';

import type { DocumentsListProps } from './documents-list';
import type { RenderType } from '@test/test-utils';

const mockOnClick = testHelpers.fn();
const mockHeadingText = 'Heading text';
const [
  {
    document: { id: mockSelectedDocumentId },
  },
] = mockNegotiableDocuments;

const defaultProps: DocumentsListProps = {
  documents: mockNegotiableDocuments,
  listHeadingText: mockHeadingText,
  selectedDocumentId: mockSelectedDocumentId,
  onClick: mockOnClick,
};

/** Utility to render component quickly with default props and allows overrides of every prop */
const renderComponent = (props?: Partial<DocumentsListProps>): RenderType => {
  return render(
    <DocumentsList
      {...defaultProps}
      {...props}
    />,
  );
};

describe('DocumentsList - tests', () => {
  const { t } = renderUseTranslation();

  it('should render the component correctly', () => {
    renderComponent();

    expect(screen.getByText(mockHeadingText)).toBeInTheDocument();

    mockNegotiableDocuments.forEach(({ document: { name }, status }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(
        screen.getByText(t(`collaborationDetails.documentStatus.${status}`)),
      ).toBeInTheDocument();
    });
  });

  it('should display the tooltips correctly', async () => {
    renderComponent();

    mockNegotiableDocuments.forEach(async ({ document: { name } }) => {
      await userEvent.hover(screen.getByText(name));

      await waitFor(() => {
        expect(screen.getAllByText(name).length).toEqual(2);
      });
    });
  });

  it('should render the component correctly when documents have no status', () => {
    renderComponent({ documents: mockReadOnlyDocuments });

    expect(screen.getByText(mockHeadingText)).toBeInTheDocument();

    for (const {
      document: { name },
    } of mockReadOnlyDocuments) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }
  });

  it('should execute onClick function when some document is clicked', async () => {
    renderComponent();

    const [
      {
        document: { name: documentName, id: documentId },
      },
    ] = mockNegotiableDocuments;

    await userEvent.click(screen.getByText(documentName));

    expect(mockOnClick).toHaveBeenCalledWith(documentId);
  });
});
