import { Star } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import {
  mockNegotiableDocuments,
  mockReadOnlyDocuments,
} from '@components/collaboration/__mocks__/documents.mock';

import { ACTIVITY_ICON_CONTAINER_SIZE } from '../components/activity-item/components/activity-icon/activity-icon.constants';

import type { IActivity } from '../activity-timeline.interfaces';

const [{ document: mockNegotiable1 }, { document: mockNegotiable2 }] = mockNegotiableDocuments;
const [{ document: mockBackground1 }] = mockReadOnlyDocuments;

export const mockActivityNewDocuments: IActivity = {
  id: 1,
  type: 'new-document',
  description: 'John Cena añadió nuevos documentos a la negociación de contratos:',
  createdAt: '2023-01-01T13:00:23.690-04:00',
  extraData: {
    documents: [mockNegotiable1, mockNegotiable2, mockBackground1],
  },
};

export const mockActivityDeletedDocuments: IActivity = {
  id: 1,
  type: 'delete',
  description: 'John Cena eliminó un documento de la negociación de contratos:',
  createdAt: '2023-01-02T13:16:23.690-04:00',
  extraData: {
    documents: [mockNegotiable1, mockNegotiable2, mockBackground1],
  },
};

export const mockActivityNewUsers: IActivity = {
  id: 1,
  type: 'new-user',
  description: 'John Cena agregó nuevos usuarios a la negociación de contratos.',
  createdAt: '2023-01-01T13:15:23.690-04:00',
  extraData: {
    users: [
      { id: 1, email: 'ricksanchez@tutanota.com', firstName: 'Rick', lastName: 'Sanchez' },
      { id: 2, email: 'mortysmith@outlook.com', firstName: 'Morty', lastName: 'Smith' },
    ],
  },
};

export const mockActivityDeletedUsers: IActivity = {
  id: 1,
  type: 'delete',
  description: 'John Cena eliminó a un usuario de la negociación de contratos:',
  createdAt: '2023-01-02T13:04:23.690-04:00',
  extraData: {
    users: [
      { id: 1, email: 'ricksanchez@tutanota.com', firstName: 'Rick', lastName: 'Sanchez' },
      { id: 2, email: 'mortysmith@outlook.com', firstName: 'Morty', lastName: 'Smith' },
    ],
  },
};

export const activitiesMock1: IActivity[] = [
  {
    id: 1,
    type: 'flag',
    description: 'Joaquín Ugarte inició una nueva colaboración de negociación de contratos.',
    createdAt: '2022-04-16T13:15:23.690-04:00',
    extraData: {
      comment:
        'Comentario de prueba donde el responsable adjunta el mensaje que viene desde la configuración.',
    },
  },
  {
    id: 2,
    type: 'view',
    description: 'Carolina Rodriguez visualizó el documento ”nombre-del-documento.docx”.',
    createdAt: '2022-04-17T14:15:23.690-04:00',
  },
  {
    id: 3,
    type: 'download',
    description: 'Carolina Rodriguez descargó el documento ”nombre-del-documento.docx”.',
    createdAt: '2022-04-18T15:15:23.690-04:00',
  },
  {
    id: 4,
    type: 'upload',
    description:
      'Carolina Rodriguez cargó una nueva versión del documento ”nombre-del-documento.docx” (Versión 4.0).',
    createdAt: '2022-04-19T16:15:23.690-04:00',
  },
  {
    id: 5,
    type: 'warning',
    description:
      'Se han reiniciado las aprobaciones debido a que se cargó una nueva versión en el documento ”nombre-del-documento.docx”',
    createdAt: '2022-04-20T17:15:23.690-04:00',
  },
  {
    id: 6,
    type: 'comment',
    description: 'Carolina Rodriguez hizo un comentario:',
    createdAt: '2022-04-21T18:15:23.690-04:00',
    extraData: {
      comment: 'Comentario de prueba de Carolina Rodriguez.',
    },
  },
  {
    id: 7,
    type: 'approved',
    description:
      'Carolina Rodriguez aprobó la versión 3.0 del documento ”nombre-del documento.docx”.',
    createdAt: '2022-04-22T19:15:23.690-04:00',
    extraData: {
      comment: 'Comentario de prueba donde un usuario menciona a otro durante la colaboración.',
    },
  },
  {
    id: 8,
    type: 'rejected',
    description: 'Carolina Rodriguez canceló la colaboración de negociación de contrato.',
    createdAt: '2022-04-23T20:15:23.690-04:00',
    extraData: {
      comment: 'Comentario de prueba donde el responsable cancela la colaboración.',
    },
  },
  {
    id: 9,
    type: 'document',
    description: 'Joaquín Ugarte solicitó un nuevo contrato.',
    createdAt: '2022-04-24T21:15:23.690-04:00',
  },
  {
    id: 10,
    type: 'request',
    description: 'Joaquín Ugarte creó una nueva solicitud.',
    createdAt: '2022-04-25T22:15:23.690-04:00',
  },
  {
    id: 11,
    type: 'flow',
    description: 'Se ha iniciado un nuevo Workflow: Prestación de servicios - CaseBank Int.',
    createdAt: '2022-04-26T23:16:23.690-04:00',
  },
  {
    ...mockActivityNewDocuments,
    id: 12,
  },
  {
    ...mockActivityDeletedDocuments,
    id: 13,
  },
  {
    ...mockActivityNewUsers,
    id: 14,
  },
  {
    ...mockActivityDeletedUsers,
    id: 15,
  },
  {
    id: 16,
    type: 'custom',
    description: 'Carolina Rodriguez generó un activity custom',
    createdAt: '2022-04-24T01:15:23.690-04:00',
    overrides: {
      Icon: {
        component: () => (
          <BackgroundIcon
            data-testid="activity-timeline__12-activity--custom-icon"
            backgroundColor="powerSubtle"
            iconColor="powerStrong"
            Icon={Star}
            size={ACTIVITY_ICON_CONTAINER_SIZE}
          />
        ),
      },
    },
  },
];
