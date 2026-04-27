import { activityDocumentsMock1 } from '../../__mocks__/collaboration.mock';
import { mockNegotiableDocuments } from '../../__mocks__/documents.mock';
import {
  generalDocumentsStatuses,
  getActivitySelectedDocument,
} from '../business/contract-negotiation.business';

import type {
  CollaborationActivityDocument,
  CollaborationResourceStatusInfo,
} from '../../interfaces';

describe('getActivitySelectedDocument - tests', () => {
  it('should return the second activity document as selected', () => {
    const [, { document }] = mockNegotiableDocuments;
    const [, secondDocument] = activityDocumentsMock1;

    expect(
      getActivitySelectedDocument(activityDocumentsMock1, document),
    ).toStrictEqual<CollaborationActivityDocument>(secondDocument);
  });

  it('should return the first activity document if the selected document is not negotiable', () => {
    const [firstDocument] = activityDocumentsMock1;

    expect(
      getActivitySelectedDocument(activityDocumentsMock1, { id: -1, negotiable: false }),
    ).toStrictEqual<CollaborationActivityDocument>(firstDocument);
  });
});

describe('generalDocumentsStatuses - tests', () => {
  it(`should return the statues in an array ['approved', 'pending']`, () => {
    expect(
      generalDocumentsStatuses([
        { thirdParties: [{ status: 'approved' }, { status: 'approved' }] },
        { thirdParties: [{ status: 'pending' }, { status: 'approved' }] },
      ]),
    ).toStrictEqual<CollaborationResourceStatusInfo[]>(['approved', 'pending']);
  });

  it(`should return the status of 'approved' for the first third party`, () => {
    const [thirdPartyStatus] = generalDocumentsStatuses([
      { thirdParties: [{ status: 'approved' }, { status: 'approved' }] },
    ]);

    expect(thirdPartyStatus).toBe<CollaborationResourceStatusInfo>('approved');
  });

  it(`should return the status of 'pending' for the first third party`, () => {
    const [thirdPartyStatus] = generalDocumentsStatuses([
      { thirdParties: [{ status: 'pending' }, { status: 'approved' }] },
    ]);

    expect(thirdPartyStatus).toBe<CollaborationResourceStatusInfo>('pending');
  });
});
