import icon from '../../../assets/icons/doc.svg';

import type { Collaboration } from '../interfaces';

export const documentUploadMock: Collaboration = {
  id: 1,
  type: 'abc123',
  tasks: [
    {
      id: 1,
      kind: 'upload_documents',
      type: {
        id: 1,
        key: 'abcd',
        label: 'contrato',
      },
      category: {
        id: 2,
        key: 'abcd123',
        label: 'Manual',
      },
      reason:
        'Se solicita el borrador del contrato aprobado por el área legal para la transferencia y firma.',
      subtasks: [
        {
          id: 1,
          thirdParty: {
            id: 1,
            firstName: 'pepe',
            lastName: 'paco',
            email: 'pepe@paco.com',
          },
          createdAt: '2022-04-16T13:15:23.690-04:00',
          updatedAt: '2022-04-16T13:15:23.690-04:00',
          resources: [],
        },
      ],
    },
    {
      id: 2,
      kind: 'upload_documents',
      type: {
        id: 1,
        key: 'asd',
        label: 'antecedente',
      },
      category: {
        id: 2,
        key: 'abcd3',
        label: 'Copia carnet',
      },
      reason:
        'Adjuntar la copia de la cédula de identidad para los firmantes y el representante legal.',
      subtasks: [
        {
          id: 3,
          thirdParty: {
            id: 1,
            firstName: 'pepe',
            lastName: 'paco',
            email: 'pepe@paco.com',
          },
          createdAt: '2022-04-16T13:15:23.690-04:00',
          updatedAt: '2022-04-16T13:15:23.690-04:00',
          resources: [
            {
              document: {
                id: 1,
                url: icon,
                name: 'Adjuntar-la-copia-de-la-cédula-de-identidad-1234567899876423456789876543456789.docx',
                fileExt: 'docx',
                stepId: 1,
              },
              status: null,
              rejectionReason: null,
              createdAt: '2022-04-16T13:15:23.690-04:00',
              updatedAt: '2022-04-16T13:15:23.690-04:00',
            },
          ],
        },
        {
          id: 4,
          thirdParty: {
            id: 2,
            firstName: 'cosme',
            lastName: 'fulanito',
            email: 'cosme@paco.com',
          },
          createdAt: '2022-04-16T13:15:23.690-04:00',
          updatedAt: '2022-04-16T13:15:23.690-04:00',
          resources: [
            {
              document: {
                id: 1,
                url: icon,
                name: 'Document X',
                fileExt: 'pdf',
                stepId: 1,
              },
              status: null,
              rejectionReason: null,
              createdAt: '2022-09-25T13:15:03.001-04:00',
              updatedAt: '2022-10-29T13:15:03.001-04:00',
            },
          ],
        },
      ],
    },
    {
      id: 164,
      kind: 'upload_documents',
      reason: 'fdsfa',
      description: 'Documento 1999',
      subtasks: [
        {
          id: 298,
          status: 'pending',
          thirdParty: {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:06:37-04:00',
          updatedAt: '2025-04-10T01:06:37-04:00',
          required: true,
        },
        {
          id: 297,
          status: 'pending',
          thirdParty: {
            id: 1,
            firstName: 'Luis',
            lastName: 'Matos',
            email: 'lmatos+local@webdoxclm.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:06:37-04:00',
          updatedAt: '2025-04-10T01:06:37-04:00',
          required: true,
        },
        {
          id: 292,
          status: 'pending',
          thirdParty: {
            id: 1,
            firstName: 'Luis',
            lastName: 'Matos',
            email: 'lmatos+local@webdoxclm.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:04:57-04:00',
          updatedAt: '2025-04-10T01:04:57-04:00',
          required: true,
        },
        {
          id: 291,
          status: 'pending',
          thirdParty: {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:04:57-04:00',
          updatedAt: '2025-04-10T01:04:57-04:00',
          required: true,
        },
      ],
      category: {
        id: -1,
        key: '',
        label: '',
      },
      type: {
        id: -1,
        key: '',
        label: '',
      },
      documentFormats: [
        {
          id: 1,
          label: 'PDF',
          contentType: ['application/pdf'],
        },
      ],
      required: true,
    },
    {
      id: 165,
      kind: 'upload_documents',
      reason: 'qwerr',
      description: 'Documento 2',
      subtasks: [
        {
          id: 300,
          status: 'pending',
          thirdParty: {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:06:37-04:00',
          updatedAt: '2025-04-10T01:06:37-04:00',
          required: false,
        },
        {
          id: 299,
          status: 'pending',
          thirdParty: {
            id: 1,
            firstName: 'Luis',
            lastName: 'Matos',
            email: 'lmatos+local@webdoxclm.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:06:37-04:00',
          updatedAt: '2025-04-10T01:06:37-04:00',
          required: false,
        },
        {
          id: 294,
          status: 'pending',
          thirdParty: {
            id: 1,
            firstName: 'Luis',
            lastName: 'Matos',
            email: 'lmatos+local@webdoxclm.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:04:57-04:00',
          updatedAt: '2025-04-10T01:04:57-04:00',
          required: false,
        },
        {
          id: 293,
          status: 'pending',
          thirdParty: {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 1,
              label: 'PDF',
              contentType: ['application/pdf'],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:04:57-04:00',
          updatedAt: '2025-04-10T01:04:57-04:00',
          required: false,
        },
      ],
      category: {
        id: -1,
        key: '',
        label: '',
      },
      type: {
        id: -1,
        key: '',
        label: '',
      },
      documentFormats: [
        {
          id: 1,
          label: 'PDF',
          contentType: ['application/pdf'],
        },
      ],
      required: false,
    },
    {
      id: 166,
      kind: 'upload_documents',
      reason: 'rqwer',
      description: 'Doc 3',
      subtasks: [
        {
          id: 302,
          status: 'pending',
          thirdParty: {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 2,
              label: 'WORD',
              contentType: [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:06:37-04:00',
          updatedAt: '2025-04-10T01:06:37-04:00',
          required: false,
        },
        {
          id: 301,
          status: 'pending',
          thirdParty: {
            id: 1,
            firstName: 'Luis',
            lastName: 'Matos',
            email: 'lmatos+local@webdoxclm.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 2,
              label: 'WORD',
              contentType: [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:06:37-04:00',
          updatedAt: '2025-04-10T01:06:37-04:00',
          required: false,
        },
        {
          id: 296,
          status: 'pending',
          thirdParty: {
            id: 1,
            firstName: 'Luis',
            lastName: 'Matos',
            email: 'lmatos+local@webdoxclm.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 2,
              label: 'WORD',
              contentType: [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:04:57-04:00',
          updatedAt: '2025-04-10T01:04:57-04:00',
          required: false,
        },
        {
          id: 295,
          status: 'pending',
          thirdParty: {
            id: 2,
            firstName: 'John',
            lastName: 'Doe',
            email: 'john@doe.com',
            phoneNumber: null,
          },
          documentFormats: [
            {
              id: 2,
              label: 'WORD',
              contentType: [
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
              ],
            },
          ],
          resources: [],
          createdAt: '2025-04-10T01:04:57-04:00',
          updatedAt: '2025-04-10T01:04:57-04:00',
          required: false,
        },
      ],
      category: {
        id: -1,
        key: '',
        label: '',
      },
      type: {
        id: -1,
        key: '',
        label: '',
      },
      documentFormats: [
        {
          id: 2,
          label: 'WORD',
          contentType: [
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          ],
        },
      ],
      required: false,
    },
  ],
};
