import { renderHook } from '@testing-library/react';

import { formatDateAsText } from '@components/utils/strings/date.utils';
import { renderUseTranslation } from '@test/test-utils';

import { documentVersionsMock1 } from '../../../__mocks__/collaboration.mock';
import { ContractNegotiationProviderMock } from '../../../__mocks__/contract-negotiation-provider.mock';
import { mockNegotiableDocuments } from '../../../__mocks__/documents.mock';

import { useDocumentLastModificationText } from './use-document-last-modification-text.hook';

const [{ document: documentMock }] = mockNegotiableDocuments;

describe('useDocumentLastModificationText - tests', () => {
  const { t } = renderUseTranslation();
  const [firstVersionMock, secondVersionMock] = documentVersionsMock1;

  it('should return the correct values when the document is negotiable and is the first version', () => {
    const { result } = renderHook(
      () =>
        useDocumentLastModificationText({
          document: documentMock,
          selectedDocumentVersion: firstVersionMock,
        }),
      {
        wrapper: ContractNegotiationProviderMock,
      },
    );

    const { updatedAt } = documentMock;
    const { firstName, lastName } = firstVersionMock.user;

    expect(result.current.lastModificationText).toEqual(
      t('contractNegotiationCollaboration.uploadedAt', {
        uploadedAt: formatDateAsText(updatedAt, 'es', true),
        uploadedBy: `${firstName} ${lastName}`,
      }),
    );
  });

  it('should return the correct values when the document is negotiable and is not the first version', () => {
    const { result } = renderHook(
      () =>
        useDocumentLastModificationText({
          document: documentMock,
          selectedDocumentVersion: secondVersionMock,
        }),
      {
        wrapper: ContractNegotiationProviderMock,
      },
    );

    const { updatedAt } = secondVersionMock;
    const { firstName, lastName } = secondVersionMock.user;

    expect(result.current.lastModificationText).toEqual(
      t('contractNegotiationCollaboration.updatedAt', {
        updatedAt: formatDateAsText(updatedAt, 'es', true),
        updatedBy: `${firstName} ${lastName}`,
      }),
    );
  });

  it('should return the correct values when the document is not negotiable', () => {
    const { result } = renderHook(
      () =>
        useDocumentLastModificationText({
          document: { ...documentMock, negotiable: false, officeDocumentVersion: undefined },
          selectedDocumentVersion: firstVersionMock,
        }),
      {
        wrapper: ContractNegotiationProviderMock,
      },
    );

    const { updatedAt } = documentMock;
    const { firstName, lastName } = firstVersionMock.user;

    expect(result.current.lastModificationText).toEqual(
      t('contractNegotiationCollaboration.uploadedAt', {
        uploadedAt: formatDateAsText(updatedAt, 'es', true),
        uploadedBy: `${firstName} ${lastName}`,
      }),
    );
  });
});
