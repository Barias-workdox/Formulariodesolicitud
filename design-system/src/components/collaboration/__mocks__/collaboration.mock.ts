import { mockActivityNewDocuments } from '@components/activity-timeline/__tests__/activities.mock';

import {
  ALLOWED_FILE_EXTENSIONS,
  CANCEL_ACTIVITY,
  COLLABORATION_APPROVALS_RESTART,
  COLLABORATION_COMMENT_ACTIVITY,
  COLLABORATION_DOCUMENT_VERSION_UPLOAD,
  CREATE_ACTIVITY,
  DELETED_DOCUMENTS,
  DELETED_THIRD_PARTIES,
  DOCUMENT_APPROVED_ACTIVITY,
  DOCUMENT_UPDATED_LOCALLY,
  DOWNLOAD_DOCUMENT_ACTIVITY,
  FINISH_ACTIVITY,
  NEW_DOCUMENTS,
  NEW_THIRD_PARTIES,
  VIEWED_DOCUMENT_ACTIVITY,
} from '../constants';

import { mockNegotiableDocuments, mockReadOnlyDocuments } from './documents.mock';

import type {
  AllowedFileExtensions,
  CollaborationActivity,
  CollaborationActivityDocument,
  CollaborationDetails,
  CollaborationSubtask,
  CollaborationUser,
  DocumentVersion,
  ThirdParty,
} from '../interfaces';

export const allowedFileExtensionsMock: AllowedFileExtensions = ALLOWED_FILE_EXTENSIONS;

export const userMock1: CollaborationUser = {
  email: 'example@mail.com',
  firstName: 'First Name',
  lastName: 'Last Name',
  id: 1,
};

export const collaborationDetailsMock1: CollaborationDetails = {
  name: 'Colaboración de NDA Servicios Informáticos',
  status: 'active',
  createdAt: '2023-08-29T12:55:03-04:00',
  updatedAt: '2023-08-29T12:55:03-04:00',
  message: 'Duis ipsum labore sunt esse culpa adipisicing id velit.',
  cancelledAt: null,
  finishedAt: null,
};

export const collaborationDetailsMock2: CollaborationDetails = {
  name: 'Colaboración de NDA Servicios Informáticos',
  status: 'finished',
  createdAt: '2023-08-29T12:55:03-04:00',
  updatedAt: '2023-08-29T12:55:03-04:00',
  cancelledAt: '2023-08-29T12:55:03-04:00',
  finishedAt: '2023-08-29T12:55:03-04:00',
};

export const collaborationResponsibleMock1: ThirdParty = {
  email: 'doctor-strange@mail.com',
  firstName: 'Doctor',
  lastName: 'Strange',
  id: 1,
};

export const thirdPartyMock1: ThirdParty = {
  email: 'example1@mail.com',
  firstName: 'Example 1',
  lastName: 'Last Name 1',
  id: 1,
};

export const thirdPartyMock2: ThirdParty = {
  email: 'example2@mail.com',
  firstName: 'Example 2',
  lastName: 'Last Name 2',
  id: 2,
};

export const collaborationSubtasksMock1: CollaborationSubtask[] = [
  {
    id: 1,
    thirdParty: thirdPartyMock1,
    createdAt: '2022-04-16T13:15:23.690-04:00',
    updatedAt: '2022-04-16T13:15:23.690-04:00',
    resources: [...mockNegotiableDocuments, ...mockReadOnlyDocuments],
  },
  {
    id: 2,
    thirdParty: thirdPartyMock2,
    createdAt: '2022-04-16T13:15:23.690-04:00',
    updatedAt: '2022-04-16T13:15:23.690-04:00',
    resources: [...mockNegotiableDocuments, ...mockReadOnlyDocuments],
  },
];

export const documentVersionsMock1: DocumentVersion[] = [
  {
    id: 1,
    documentId: 1,
    user: thirdPartyMock1,
    uuid: 'abcjsdh11',
    versionNumber: 1,
    updatedAt: '2024-11-26T13:50:17-03:00',
  },
  {
    id: 2,
    documentId: 2,
    user: thirdPartyMock1,
    uuid: 'abcjsdh12323',
    versionNumber: 2,
    updatedAt: '2024-11-27T13:50:17-03:00',
  },
  {
    id: 3,
    documentId: 2,
    user: thirdPartyMock1,
    uuid: 'abcjsdh1444',
    versionNumber: 3,
    updatedAt: '2024-11-28T13:50:17-03:00',
  },
];

export const collaborationSubtasksMock2: CollaborationSubtask[] = [
  {
    id: 1,
    thirdParty: thirdPartyMock1,
    createdAt: '2022-04-16T13:15:23.690-04:00',
    updatedAt: '2022-04-16T13:15:23.690-04:00',
    resources: [...mockNegotiableDocuments],
  },
  {
    id: 2,
    thirdParty: thirdPartyMock2,
    createdAt: '2022-04-16T13:15:23.690-04:00',
    updatedAt: '2022-04-16T13:15:23.690-04:00',
    resources: [...mockNegotiableDocuments],
  },
];

const [mockFirstDocument, mockSecondDocument] = mockNegotiableDocuments;

export const activityDocumentsMock1: CollaborationActivityDocument[] = [
  {
    id: mockFirstDocument.document.id,
    fileExt: mockFirstDocument.document.fileExt,
    name: mockFirstDocument.document.name,
    label: mockFirstDocument.document.name,
    officeDocumentVersion: mockFirstDocument.document.officeDocumentVersion,
    updatedAt: mockFirstDocument.document.updatedAt,
    thirdParties: [
      {
        id: thirdPartyMock1.id,
        name: `${thirdPartyMock1.firstName} ${thirdPartyMock1.lastName}`,
        approvedAt: mockFirstDocument.approvedAt,
        status: mockFirstDocument.status,
      },
      {
        id: thirdPartyMock2.id,
        name: `${thirdPartyMock2.firstName} ${thirdPartyMock2.lastName}`,
        approvedAt: mockFirstDocument.approvedAt,
        status: mockFirstDocument.status,
      },
    ],
  },
  {
    id: mockSecondDocument.document.id,
    fileExt: mockSecondDocument.document.fileExt,
    name: mockSecondDocument.document.name,
    label: mockSecondDocument.document.name,
    officeDocumentVersion: mockSecondDocument.document.officeDocumentVersion,
    updatedAt: mockSecondDocument.document.updatedAt,
    thirdParties: [
      {
        id: thirdPartyMock1.id,
        name: `${thirdPartyMock1.firstName} ${thirdPartyMock1.lastName}`,
        approvedAt: mockSecondDocument.approvedAt,
        status: mockSecondDocument.status,
      },
      {
        id: thirdPartyMock2.id,
        name: `${thirdPartyMock2.firstName} ${thirdPartyMock2.lastName}`,
        approvedAt: mockSecondDocument.approvedAt,
        status: mockSecondDocument.status,
      },
    ],
  },
];

const {
  extraData: { documents: mockActivityDocuments },
} = mockActivityNewDocuments;

export const collaborationActivitiesMock1: CollaborationActivity[] = [
  {
    id: 1,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T12:55:03-04:00',
    key: CREATE_ACTIVITY,
  },
  {
    id: 2,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T13:55:03-04:00',
    key: DOCUMENT_APPROVED_ACTIVITY,
    parameters: {
      documentVersion: 1,
      comment: 'Ipsum aliquip in proident Lorem et Lorem.',
      documentName: 'example-document.doc',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 4,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T15:55:03-04:00',
    key: VIEWED_DOCUMENT_ACTIVITY,
    parameters: {
      documentName: 'example-document.doc',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 5,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T16:55:03-04:00',
    key: DOWNLOAD_DOCUMENT_ACTIVITY,
    parameters: {
      documentName: 'example-document.doc',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 6,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T16:55:03-04:00',
    key: COLLABORATION_COMMENT_ACTIVITY,
    parameters: {
      comment: 'Fugiat in in reprehenderit elit in velit et ipsum occaecat Lorem in nulla eiusmod.',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 7,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T20:55:03-04:00',
    key: CANCEL_ACTIVITY,
    parameters: {
      comment: 'Quis ipsum mollit culpa proident Lorem est id Lorem enim anim excepteur.',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 8,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T21:55:03-04:00',
    key: FINISH_ACTIVITY,
    parameters: {
      comment: 'Magna laborum labore ullamco ad ut.',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 9,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T22:55:03-04:00',
    key: COLLABORATION_DOCUMENT_VERSION_UPLOAD,
    parameters: {
      documentVersion: 1,
      documentName: 'example-document2.doc',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 10,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T23:55:03-04:00',
    key: COLLABORATION_APPROVALS_RESTART,
    parameters: {
      documentName: 'example-document1.doc',
    },
    owner: {
      firstName: 'Carlos',
      lastName: 'Segundo',
      email: 'carlossegundo@mail.com',
      id: 1,
    },
  },
  {
    id: 11,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T23:55:03-04:00',
    key: NEW_DOCUMENTS,
    parameters: {
      documents: mockActivityDocuments,
    },
    owner: {
      firstName: 'John',
      lastName: 'Cena',
      email: 'johncena@mail.com',
      id: 1,
    },
  },
  {
    id: 12,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T23:55:03-04:00',
    key: DELETED_DOCUMENTS,
    parameters: {
      documents: mockActivityDocuments,
    },
    owner: {
      firstName: 'John',
      lastName: 'Cena',
      email: 'johncena@mail.com',
      id: 1,
    },
  },
  {
    id: 13,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T23:55:03-04:00',
    key: NEW_THIRD_PARTIES,
    parameters: {
      thirdParties: [
        { id: 1, email: 'ricksanchez@tutanota.com', firstName: 'Rick', lastName: 'Sanchez' },
        { id: 2, email: 'mortysmith@outlook.com', firstName: 'Morty', lastName: 'Smith' },
      ],
    },
    owner: {
      firstName: 'John',
      lastName: 'Cena',
      email: 'johncena@mail.com',
      id: 1,
    },
  },
  {
    id: 14,
    collaboration: collaborationDetailsMock1,
    createdAt: '2023-08-29T23:55:03-04:00',
    key: DELETED_THIRD_PARTIES,
    parameters: {
      thirdParties: [
        { id: 1, email: 'ricksanchez@tutanota.com', firstName: 'Rick', lastName: 'Sanchez' },
        { id: 2, email: 'mortysmith@outlook.com', firstName: 'Morty', lastName: 'Smith' },
      ],
    },
    owner: {
      firstName: 'John',
      lastName: 'Cena',
      email: 'johncena@mail.com',
      id: 1,
    },
  },
  {
    id: 15,
    collaboration: collaborationDetailsMock1,
    createdAt: '2024-01-25T23:55:03-04:00',
    key: DOCUMENT_UPDATED_LOCALLY,
    parameters: {
      documentVersion: 5,
      documentName: 'document.doc',
    },
    owner: {
      firstName: 'John',
      lastName: 'Cena',
      email: 'johncena@mail.com',
      id: 1,
    },
  },
];
