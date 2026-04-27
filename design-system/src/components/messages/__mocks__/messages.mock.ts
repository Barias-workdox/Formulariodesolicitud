import type { MessageType } from '../messages.interfaces';

export const messagesMock: MessageType[] = [
  {
    id: 1,
    content: 'Lorem ipsum dolor sit amet',
    author: {
      id: 1,
      name: 'John Doe',
      label: 'Colaborador',
    },
    read: true,
    createdAt: '2022-05-20T23:33:01.612Z',
    updatedAt: '2022-05-20T23:50:01.612Z',
  },
  {
    id: 2,
    content:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    author: {
      id: 2,
      name: 'Mary Smith',
      label: 'Responsable',
    },
    read: true,
    createdAt: '2022-05-20T23:33:01.612Z',
    updatedAt: '2022-05-20T23:33:01.612Z',
  },
  {
    id: 3,
    content:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    author: {
      id: 1,
      name: 'John Doe',
    },
    read: false,
    createdAt: '2022-05-20T23:33:01.612Z',
    updatedAt: '2022-05-20T23:33:01.612Z',
  },
];
