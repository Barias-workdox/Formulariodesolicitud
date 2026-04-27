import type { CollaborationResource } from '../interfaces';

export const documentPreviewUrlMock1 =
  'https://docs.google.com/document/d/e/2PACX-1vT-Qld9qmcRHujG3qXY7Fylz4y660ObF9Lk_KgDb6kozeE3m24EP5zgNhXGcGD1DDy01UB3PJjdEjn-/pub?embedded=true';

export const documentAttachmentUrlMock1 =
  'https://raw.githubusercontent.com/WolfgangFahl/pdfindexer/refs/heads/master/test/pdfsource1/LoremIpsum.pdf';

export const documentPreviewUrlMock2 =
  'https://docs.google.com/document/d/e/2PACX-1vSrNEMW8O4FYjcGZxTsjodSfrxeD-n0gpHxr6vME7UkhUEEI3oFPTr23nBtYboSJs6LKdn1LhkSiOM2/pub?embedded=true';

export const mockNegotiableDocuments: CollaborationResource[] = [
  {
    id: 1,
    status: 'approved',
    approvedAt: '2023-11-23T19:13:45.690-04:00',
    document: {
      fileExt: 'doc',
      id: 11,
      name: 'example-1.doc',
      url: documentPreviewUrlMock1,
      negotiable: true,
      updatedAt: '2022-04-16T13:15:23.690-04:00',
      officeDocumentVersion: {
        id: 1,
        uuid: 'abcdefg1',
        documentId: 11,
        versionNumber: 3,
        updatedAt: '2022-04-17T13:15:23.690-04:00',
        user: {
          id: 12345,
          email: 'peter-parker@mail.com',
          firstName: 'Peter',
          lastName: 'Parker',
        },
      },
    },
  },
  {
    id: 2,
    status: 'pending',
    document: {
      fileExt: 'doc',
      id: 12,
      name: 'example-12.doc',
      url: documentPreviewUrlMock2,
      negotiable: true,
      updatedAt: '2022-04-16T13:15:23.690-04:00',
      officeDocumentVersion: {
        id: 2,
        uuid: 'jsdajsdh',
        documentId: 12,
        versionNumber: 3,
        updatedAt: '2022-04-18T13:15:23.690-04:00',
        user: {
          id: 1234,
          email: 'tony-stark@mail.com',
          firstName: 'Tony',
          lastName: 'Stark',
        },
      },
    },
  },
];

export const mockReadOnlyDocuments: CollaborationResource[] = [
  {
    id: 3,
    document: {
      fileExt: 'doc',
      id: 2,
      name: 'Example 2',
      url: '',
      updatedAt: '2022-04-16T13:15:23.690-04:00',
    },
  },
];
