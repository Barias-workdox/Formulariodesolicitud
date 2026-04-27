import type { MessageType, MessagesUser } from '@components/messages';

export const messagesMock1: MessageType[] = [
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
  {
    id: 4,
    content: 'Sed ut.',
    author: {
      id: 1,
      name: 'John Doe',
    },
    read: false,
    createdAt: '2022-05-20T23:33:01.612Z',
    updatedAt: '2022-05-20T23:33:01.612Z',
  },
  {
    id: 5,
    content: 'Sed ut nde omnis iste natus error sit voluptatem accusantium dolorem.',
    author: {
      id: 2,
      name: 'Mary Smith',
      label: 'Responsable',
    },
    read: false,
    createdAt: '2022-05-20T23:33:01.612Z',
    updatedAt: '2022-05-20T23:33:01.612Z',
  },
];

export const stakeholdersMock1: MessagesUser[] = [
  {
    id: 1,
    name: 'Mary Smith',
    email: 'mary@smith.com',
    label: '(RESPONSABLE)',
    mentionModel: 'stepResponsible',
  },
  {
    id: 2,
    name: 'John Doe',
    email: 'john@doe.com',
    label: '(COLABORADOR)',
    mentionModel: 'collaborator',
  },
  {
    id: 3,
    name: 'Emily Blake',
    email: 'emily@blake.me',
    label: '(USER)',
    mentionModel: 'user',
  },
  {
    id: 4,
    name: 'Adam Smith (Economy.III) [Mastering] _:;|@#¢∞¬÷“”≠´',
    email: 'asmith@ec.nmy',
    label: '(USER)',
    mentionModel: 'user',
  },
];
