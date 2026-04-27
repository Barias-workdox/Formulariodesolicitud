import { useState } from 'react';
import type { ReactElement, ReactNode } from 'react';

import { Eyedropper, ListDropdown } from '@carbon/icons-react';

import { Button, IconButton } from '../button';
import { CopyToClipboardButton } from '../copy-to-clipboard-button';
import { FeedbackButton } from '../feedback-button/feedback-button';
import { Text } from '../text';
import { useCss } from '../utils/hooks/use-css';

import { MessageAuthor } from './message-author';
import { MessageComposer } from './message-composer';
import { InlineComposerTextareaContainer } from './message-composer/containers/inline-composer-textarea-container';
import { MessageContent } from './message-content';
import { MessageDate } from './message-date';
import { MessageDelete } from './message-delete';
import { MessageContainer, MessageHeader } from './message-layout';
import { MessageList } from './message-list';
import { MessageOptionsPopover } from './message-options-popover';
import { Messages } from './messages';
import { NewMessageLabel } from './new-message-label';
import { cleanMentionsForPayload } from './utils/user-mention.utils';

import type { MessagesProps } from './messages';
import type { MessageActionResponse, MessageType, MessagesUser } from './messages.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import type { StyleObject } from 'styletron-react';

export default {
  title: 'Components/Content/Messages',
  component: Messages,
  args: {
    isLoading: false,
    isPaginated: true,
    isMentionable: true,
    canCreate: true,
    direction: 'normal',
    emptyMessage: undefined,
    overrides: undefined,
    'data-testid': 'data-testid',
  },
} as Meta<typeof Messages>;

const CustomMessageMenuComponent = (): JSX.Element => (
  <div>
    <CopyToClipboardButton
      data-testid="copy-to-clipboard-button"
      text="Quis adipisicing laborum anim commodo ad ea officia cupidatat anim."
      tooltipText="Copy the message"
    />
    <FeedbackButton
      data-testid="feedback-positive"
      feedbackKind="positive"
      isActive={false}
      onClick={(): void => console.log('clicked feedback positive')}
    />
    <FeedbackButton
      data-testid="feedback-negative"
      feedbackKind="negative"
      isActive={false}
      onClick={(): void => console.log('clicked feedback negative')}
    />
  </div>
);

const initialMessages: MessageType[] = [
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

const usersForMentions: MessagesUser[] = [
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

/**
 * Shared container for the messages stories.
 */
const Container = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <div
      style={{
        height: '600px',
        width: '500px',
        border: '1px solid #ccc',
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
};

/**
 * Cleans and add styles to a mention
 */
const getStyledMessage = (content: string, mentionClassName = ''): string => {
  return (
    content
      // we replace the mention className with the css-in-js generated className
      .replace(/mentioned-user-container-class/g, mentionClassName)
      // This transformation is returned by the backend.
      // Mentions are expected to be as:
      // `<span className="mentioned-user-container-class">@UserName lorem ipsum dolor sit amet</span>`
      .replace(/\[(user|stepResponsible|collaborator)=([^#]*)#\d\]/g, '@$2')
  );
};

/**
 * Simple usage of the messages organism.
 *
 * You can list messages, create messages and create mentions.
 *
 * MessageList ✅
 * MessageContainer ✅
 * MessageHeader ✅
 * MessageAuthorBar ✅
 * MessageAuthor ✅
 * MessageContent ✅
 * MessageDate ✅
 * MessageComposer ✅
 * MentionsPopover ✅
 * NewMessageLabel ✅
 * MessageDelete ❌
 * MessageOptionsPopover ❌
 */
const Template: StoryFn<typeof Messages> = ({
  isMentionable,
  isLoading,
  canCreate,
  direction,
  messages: argMessages = initialMessages,
}) => {
  const [messages, setMessages] = useState(argMessages);
  const [composerValue, setComposerValue] = useState('');
  const [localIsLoading, setLocalIsLoading] = useState(false);
  const { mentionStyles } = useCss({
    mentionStyles: {
      fontWeight: 500,
      color: '#000',
    } as StyleObject,
  });

  /**
   * Mock function to post a message
   */
  async function postMessage(newMessage): Promise<void> {
    // The composer value must be updated to detect later its changes
    setComposerValue(newMessage);
    setLocalIsLoading(true);

    setMessages([
      ...messages,
      {
        id: Math.random() * 1000000000,
        content: cleanMentionsForPayload(newMessage, usersForMentions).content,
        author: {
          id: 1,
          name: 'John Doe',
        },
        read: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // finally we clean the composer
    setComposerValue('');
    setLocalIsLoading(false);
  }

  return (
    <Container>
      <MessageList
        isLoading={localIsLoading}
        direction={direction}
      >
        {messages.map((message) => (
          <MessageContainer
            direction={direction}
            key={message.id}
            data-testid={`design-system__messages--message-container-${message.id}`}
          >
            {!message.read && <NewMessageLabel />}
            <MessageHeader>
              <MessageAuthor
                label={message.author?.label}
                barColor="brandSubdued"
                labelColor="brandMedium"
              >
                {message.author?.name}
              </MessageAuthor>
            </MessageHeader>
            <MessageContent>
              <span
                dangerouslySetInnerHTML={{
                  __html: getStyledMessage(message.content, mentionStyles),
                }}
              />
            </MessageContent>
            <MessageDate
              isEditing={false}
              createdAt={message.createdAt ?? ''}
              updatedAt={message.updatedAt ?? ''}
            />
          </MessageContainer>
        ))}
      </MessageList>
      {canCreate && (
        <MessageComposer
          data-testid="design-system__messages--message-composer"
          isMentionable={isMentionable}
          isDisabled={localIsLoading || isLoading}
          isLoading={localIsLoading || isLoading}
          users={usersForMentions}
          value={composerValue}
          onCreate={postMessage}
        />
      )}
    </Container>
  );
};

/**
 * Messages with empty state
 *
 * You can list messages, create messages and create mentions.
 *
 * MessageList ✅
 * MessageContainer ✅
 * MessageHeader ✅
 * MessageAuthorBar ✅
 * MessageAuthor ✅
 * MessageContent ✅
 * MessageDate ✅
 * MessageComposer ✅
 * MentionsPopover ✅
 * NewMessageLabel ✅
 * MessageDelete ❌
 * MessageOptionsPopover ❌
 */
const WithEmptyStateTemplate: StoryFn<typeof Messages> = ({
  isMentionable,
  isLoading,
  canCreate,
  direction,
  emptyMessage,
}) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [composerValue, setComposerValue] = useState('');
  const [localIsLoading, setLocalIsLoading] = useState(false);
  const { mentionStyles } = useCss({
    mentionStyles: {
      fontWeight: 500,
      color: '#000',
    } as StyleObject,
  });

  /**
   * Mock function to post a message
   */
  async function postMessage(newMessage): Promise<void> {
    // The composer value must be updated to detect later its changes
    setComposerValue(newMessage);
    setLocalIsLoading(true);

    setMessages([
      ...messages,
      {
        id: Math.random() * 1000000000,
        content: cleanMentionsForPayload(newMessage, usersForMentions).content,
        author: {
          id: 1,
          name: 'John Doe',
        },
        read: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ]);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    // finally we clean the composer
    setComposerValue('');
    setLocalIsLoading(false);
  }

  return (
    <Container>
      <MessageList
        emptyMessage={emptyMessage}
        isLoading={localIsLoading}
      >
        {messages.map((message) => (
          <MessageContainer
            direction={direction}
            key={message.id}
            data-testid={`design-system__messages--message-container-${message.id}`}
          >
            {!message.read && <NewMessageLabel />}
            <MessageHeader>
              <MessageAuthor
                label={message.author?.label}
                barColor="brandSubdued"
                labelColor="brandMedium"
              >
                {message.author?.name}
              </MessageAuthor>
            </MessageHeader>
            <MessageContent>
              <span
                dangerouslySetInnerHTML={{
                  __html: getStyledMessage(message.content, mentionStyles),
                }}
              />
            </MessageContent>
            <MessageDate
              isEditing={false}
              createdAt={message.createdAt ?? ''}
              updatedAt={message.updatedAt ?? ''}
            />
          </MessageContainer>
        ))}
      </MessageList>
      {canCreate && (
        <MessageComposer
          data-testid="design-system__messages--message-composer"
          isMentionable={isMentionable}
          isDisabled={localIsLoading || isLoading}
          isLoading={localIsLoading || isLoading}
          users={usersForMentions}
          value={composerValue}
          onCreate={postMessage}
        />
      )}
    </Container>
  );
};

export const WithEmptyState = WithEmptyStateTemplate.bind({});

export const WithCustomEmptyMessage = WithEmptyStateTemplate.bind({});

WithCustomEmptyMessage.args = {
  emptyMessage: (
    <Text
      variant="bodySmall"
      color="gray60"
      textAlign="center"
    >
      Custom Message
    </Text>
  ),
};

/**
 * Messages with options
 *
 * You can open the three dots menu that will show you the options of the message; edit or delete.
 *
 * MessageList ✅
 * MessageContainer ✅
 * MessageHeader ✅
 * MessageAuthorBar ✅
 * MessageAuthor ✅
 * MessageContent ✅
 * MessageDate ✅
 * MessageComposer ✅
 * MessageDelete ✅
 * MessageOptionsPopover ✅
 * MentionsPopover ❌
 * NewMessageLabel ❌
 */
const WithMessageOptionsTemplate: StoryFn<typeof Messages> = ({
  isLoading,
  isMentionable,
  canCreate = true,
  canUpdate = true,
  canDelete = true,
  direction,
}) => {
  const [messages, setMessages] = useState(initialMessages);

  /**
   * Mock to see the details of a message.
   */
  const MessageItem = ({ message }: { message: MessageType }): ReactElement => {
    const [isEditMode, setIsEditMode] = useState(false);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    /**
     * Mock to delete a message of the list.
     */
    const deleteMessage = (message: MessageType): void => {
      setMessages(messages.filter((_message) => _message !== message));
    };

    return (
      <MessageContainer
        data-testid={`message-${message.id}`}
        key={message.id}
        direction={direction}
      >
        <MessageHeader>
          <MessageAuthor
            label={message.author?.label}
            barColor="brandSubdued"
            labelColor="brandMedium"
          >
            {message.author?.name}
          </MessageAuthor>
          {(canUpdate || canDelete) && (
            <MessageOptionsPopover
              data-testid={`message-${message.id}__message-options`}
              isAuthor
              isLoading={isLoading}
              canDelete={canDelete}
              canUpdate={canUpdate}
              message={message}
              onEditClick={(): void => {
                setIsEditMode(true);
              }}
              onDeleteClick={(): void => {
                setShowDeleteConfirmation(true);
              }}
            />
          )}
        </MessageHeader>
        {isEditMode ? (
          <MessageComposer
            data-testid="design-system__messages--message-composer"
            isEditing
            isMentionable={isMentionable}
            value={message.content}
            users={usersForMentions}
            onUpdate={(): void => {
              alert('onUpdate');
            }}
            onCancel={(): void => {
              setIsEditMode(false);
            }}
          />
        ) : (
          <MessageContent>
            <span
              dangerouslySetInnerHTML={{
                __html: getStyledMessage(message.content),
              }}
            />
          </MessageContent>
        )}
        <MessageDate
          isEditing={isEditMode}
          createdAt={message.createdAt ?? ''}
          updatedAt={message.updatedAt ?? ''}
        />
        <MessageDelete
          show={showDeleteConfirmation}
          message={message}
          onCancel={(): void => {
            setShowDeleteConfirmation(false);
          }}
          onConfirm={(): void => {
            deleteMessage(message);
          }}
        />
      </MessageContainer>
    );
  };

  return (
    <Container>
      <MessageList isLoading={isLoading}>
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
          />
        ))}
      </MessageList>
      {canCreate && (
        <MessageComposer
          data-testid="design-system__messages--message-composer"
          isDisabled={isLoading}
          isLoading={isLoading}
          isMentionable={isMentionable}
          users={usersForMentions}
          value=""
          onCreate={(): void => {
            alert('onCreate');
          }}
        />
      )}
    </Container>
  );
};

/**
 * Minified implementation of messages, all content is set in the component props.
 */
const MinifiedImplementationTemplate: StoryFn<typeof Messages> = (args) => {
  const [messages, setMessages] = useState(args.messages ?? initialMessages);
  const [localIsLoading, setLocalIsLoading] = useState(args.isLoading);
  const [isSubmitting, setIsSubmitting] = useState(args.isSubmitting ?? false);

  /**
   * On page end will load more messages
   */
  async function loadMoreMessages(): Promise<void> {
    setLocalIsLoading(true);
    const newMessages: MessageType[] = [];

    do {
      // The message will be with min 40, max 300 characters length
      const messageLength = Math.floor(Math.min(Math.max(Math.random() * 300, 40), 300));

      // Get a fake message
      const response = await fetch(
        `https://fakerapi.it/api/v1/texts?_quantity=1&_characters=${messageLength}`,
      );

      const {
        data: [fakeData],
      } = await response.json();

      newMessages.push({
        id: Math.random() * Number.MAX_VALUE,
        content: fakeData.content,
        author: {
          id: 1,
          name: fakeData.author,
          label: Math.random() < 0.5 ? 'Colaborador' : 'Responsable',
        },
        read: true,
        createdAt: '2022-05-20T23:33:01.612Z',
        updatedAt: '2022-05-20T23:50:01.612Z',
      });

      // We repeat until get 3 messages
    } while (newMessages.length < 3);

    setMessages([...messages, ...newMessages]);
    setLocalIsLoading(false);
  }

  /**
   * Post a fake message, if the messages direction is "reverse" will insert it as the first item.
   */
  async function postMessage({
    content,
    mentions,
  }: {
    content: string;
    mentions: number;
  }): Promise<MessageActionResponse> {
    setIsSubmitting(true);

    console.log({ content, mentions });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const mockContentFormatted = content.replace(
      /\[(user|stepResponsible|collaborator)=(\w+)#\d\]/g,
      `@$2`,
    );

    if (args.direction === 'reverse') {
      setMessages([
        {
          id: Math.random() * Number.MAX_VALUE,
          content: mockContentFormatted,
          author: {
            id: 1,
            name: 'John Doe',
            label: Math.random() < 0.5 ? 'Colaborador' : 'Responsable',
          },
          read: true,
          createdAt: '2022-05-20T23:33:01.612Z',
          updatedAt: '2022-05-20T23:50:01.612Z',
        },
        ...messages,
      ]);
    } else if (args.direction === 'normal') {
      setMessages([
        ...messages,
        {
          id: Math.random() * Number.MAX_VALUE,
          content: mockContentFormatted,
          author: {
            id: 1,
            name: 'John Doe',
            label: Math.random() < 0.5 ? 'Colaborador' : 'Responsable',
          },
          read: true,
          createdAt: '2022-05-20T23:33:01.612Z',
          updatedAt: '2022-05-20T23:50:01.612Z',
        },
      ]);
    }

    setIsSubmitting(false);

    return { isSuccess: true };
  }

  const currentUser = {
    id: 1,
  };

  return (
    <div
      style={{
        height: '400px',
        width: '500px',
        border: '1px solid #ccc',
      }}
    >
      <Messages
        {...args}
        isLoading={localIsLoading || isSubmitting}
        isSubmitting={isSubmitting}
        currentUserId={currentUser.id}
        messages={messages}
        users={usersForMentions}
        onCreate={postMessage}
        onUpdate={async ({ message, mentions }): Promise<MessageActionResponse> => {
          alert(`onUpdate \n\n message: ${JSON.stringify(message)} \n\n mentions: ${mentions}`);

          return { isSuccess: true };
        }}
        onDelete={(): void => alert('onDelete')}
        onPageEnd={loadMoreMessages}
      />
    </div>
  );
};

export const BasicWithoutMessageOptions = Template.bind({});

BasicWithoutMessageOptions.parameters = {
  docs: {
    source: {
      code: `
const [messages, setMessages] = useState([]); // your messages

<>
  <MessageList isLoading={localIsLoading}>
    {messages.map((message) => (
      <MessageContainer direction={direction} key={message.id}>
        {!message.read && <NewMessageLabel />}
        <MessageHeader>
          <MessageAuthor label={message.author?.label} barColor="brandSubdued" labelColor="brandMedium">
            {message.author?.name}
          </MessageAuthor>
        </MessageHeader>
        <MessageContent>
          <span
            dangerouslySetInnerHTML={{
              __html: getStyledMessage(message.content, mentionStyles),
            }}
          />
        </MessageContent>
        <MessageDate
          isEditing={false}
          createdAt={message.createdAt ?? ''}
          updatedAt={message.updatedAt}
          locale="es"
        />
      </MessageContainer>
    ))}
  </MessageList>
  <MessageComposer
    isMentionable={isMentionable}
    isDisabled={localIsLoading || isLoading}
    isLoading={localIsLoading || isLoading}
    users={usersForMentions}
    value={composerValue}
    onCreate={postMessage}
  />
</>
`,
      language: 'jsx',
      type: 'auto',
    },
  },
};

export const WithMessageOptions = WithMessageOptionsTemplate.bind({});

WithMessageOptions.parameters = {
  docs: {
    source: {
      code: `
/**
 * Mock to see the details of a message.
 */
const MessageItem = ({ message }: { message: MessageType }): ReactElement => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  /**
   * Mock to delete a message of the list.
   */
  const deleteMessage = (message: MessageType): void => {
    setMessages(messages.filter((_message) => _message !== message));
  };

  return (
    <MessageContainer key={message.id} direction={direction}>
      <MessageHeader>
        <MessageAuthor label={message.author?.label} barColor="brandSubdued" labelColor="brandMedium">
          {message.author?.name}
        </MessageAuthor>
        {(canUpdate || canDelete) && (
          <MessageOptionsPopover
            isAuthor
            isLoading={isLoading}
            canDelete={canDelete}
            canUpdate={canUpdate}
            message={message}
            onEditClick={(): void => {
              setIsEditMode(true);
            }}
            onDeleteClick={(): void => {
              setShowDeleteConfirmation(true);
            }}
          />
        )}
      </MessageHeader>
      {isEditMode ? (
        <MessageComposer
          isEditing
          isMentionable={isMentionable}
          value={message.content}
          users={usersForMentions}
          onUpdate={(): void => {
            alert('onUpdate');
          }}
          onCancel={(): void => {
            setIsEditMode(false);
          }}
        />
      ) : (
        <MessageContent>
          <span
            dangerouslySetInnerHTML={{
              __html: getStyledMessage(message.content),
            }}
          />
        </MessageContent>
      )}
      <MessageDate
        isEditing={isEditMode}
        createdAt={message.createdAt ?? ''}
        updatedAt={message.updatedAt}
        locale="es"
      />
      <MessageDelete
        show={showDeleteConfirmation}
        message={message}
        onCancel={(): void => {
          setShowDeleteConfirmation(false);
        }}
        onConfirm={(): void => {
          deleteMessage(message);
        }}
      />
    </MessageContainer>
  );
};

const Messages = (): ReactElement => {
  const [messages, setMessages] = useState([]); // your messages

  return (
    <>
      <MessageList isLoading={isLoading}>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
      </MessageList>
      <MessageComposer
        isDisabled={isLoading}
        isLoading={isLoading}
        isMentionable={isMentionable}
        users={usersForMentions}
        value=""
        onCreate={(): void => {
          alert('onCreate');
        }}
      />
    </>
  );
}
`,
      language: 'jsx',
      type: 'auto',
    },
  },
};

export const MinifiedImplementation = MinifiedImplementationTemplate.bind({});

MinifiedImplementation.parameters = {
  docs: {
    source: {
      code: `
<Messages
  isLoading={localIsLoading || isSubmitting}
  isSubmitting={isSubmitting}
  currentUserId={currentUser.id}
  messages={messages}
  users={usersForMentions}
  onCreate={postMessage}
  onUpdate={async (): Promise<MessageActionResponse> => {
    alert('onUpdate');
    return { isSuccess: true };
  }}
  onDelete={(): void => alert('onDelete')}
  onPageEnd={loadMoreMessages}
/>`,
      language: 'jsx',
      type: 'auto',
    },
  },
};

/**
 * Minified implementation of messages, all content is set in the component props.
 */
const WithInquiryTemplate: StoryFn<typeof Messages> = (args) => {
  const [messages, setMessages] = useState<MessageType[]>([
    { ...initialMessages[0], status: 'active', type: 'inquiry' },
    { ...initialMessages[1], status: 'resolved', type: 'inquiry' },
    { ...initialMessages[2] },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const currentUser = {
    id: 1,
  };

  /** Handle inquiry click with fake loading */
  const handleInquiryClick = (message: MessageType): void => {
    console.log('clicked message inquiry:', message);
    setIsLoading(true);
    setTimeout(() => {
      setMessages((oldMessages) => {
        const foundMessageIndex = oldMessages.findIndex(({ id }) => id === message.id);
        const foundMessage = oldMessages[foundMessageIndex];

        oldMessages.splice(foundMessageIndex, 1, { ...foundMessage, status: 'resolved' });

        return oldMessages;
      });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        height: '400px',
        width: '500px',
        border: '1px solid #ccc',
      }}
    >
      <Messages
        {...args}
        canCreate={false}
        isLoading={false}
        currentUserId={currentUser.id}
        messages={messages}
        users={usersForMentions}
        isInquiryLoading={isLoading}
        onInquiryClick={handleInquiryClick}
      />
    </div>
  );
};

export const WithInquiry = WithInquiryTemplate.bind({});

/**
 * Minified implementation of messages, all content is set in the component props.
 */
export const MessagePosition = Template.bind({});

MessagePosition.args = {
  messages: [{ ...initialMessages[0] }, { ...initialMessages[1] }],
};

/**
 * Minified implementation of messages with data-testid for the messages, the textarea and the buttons
 */
const WithDataTestIdTemplate: StoryFn<typeof Messages> = (args) => {
  const [messages, setMessages] = useState(initialMessages);
  const [localIsLoading, setLocalIsLoading] = useState(args.isLoading);
  const [isSubmitting, setIsSubmitting] = useState(args.isSubmitting ?? false);

  /**
   * On page end will load more messages
   */
  async function loadMoreMessages(): Promise<void> {
    setLocalIsLoading(true);
    const newMessages: MessageType[] = [];

    do {
      // The message will be with min 40, max 300 characters length
      const messageLength = Math.floor(Math.min(Math.max(Math.random() * 300, 40), 300));

      // Get a fake message
      const response = await fetch(
        `https://fakerapi.it/api/v1/texts?_quantity=1&_characters=${messageLength}`,
      );

      const {
        data: [fakeData],
      } = await response.json();

      newMessages.push({
        id: Math.random() * Number.MAX_VALUE,
        content: fakeData.content,
        author: {
          id: 1,
          name: fakeData.author,
          label: Math.random() < 0.5 ? 'Colaborador' : 'Responsable',
        },
        read: true,
        createdAt: '2022-05-20T23:33:01.612Z',
        updatedAt: '2022-05-20T23:50:01.612Z',
      });

      // We repeat until get 3 messages
    } while (newMessages.length < 3);

    setMessages([...messages, ...newMessages]);
    setLocalIsLoading(false);
  }

  /**
   * Post a fake message, if the messages direction is "reverse" will insert it as the first item.
   */
  async function postMessage({
    content,
    mentions,
  }: {
    content: string;
    mentions: number;
  }): Promise<MessageActionResponse> {
    setIsSubmitting(true);

    console.log({ content, mentions });

    await new Promise((resolve) => setTimeout(resolve, 3000));

    const mockContentFormatted = content.replace(
      /\[(user|stepResponsible|collaborator)=(\w+)#\d\]/g,
      `@$2`,
    );

    if (args.direction === 'reverse') {
      setMessages([
        {
          id: Math.random() * Number.MAX_VALUE,
          content: mockContentFormatted,
          author: {
            id: 1,
            name: 'John Doe',
            label: Math.random() < 0.5 ? 'Colaborador' : 'Responsable',
          },
          read: true,
          createdAt: '2022-05-20T23:33:01.612Z',
          updatedAt: '2022-05-20T23:50:01.612Z',
        },
        ...messages,
      ]);
    } else if (args.direction === 'normal') {
      setMessages([
        ...messages,
        {
          id: Math.random() * Number.MAX_VALUE,
          content: mockContentFormatted,
          author: {
            id: 1,
            name: 'John Doe',
            label: Math.random() < 0.5 ? 'Colaborador' : 'Responsable',
          },
          read: true,
          createdAt: '2022-05-20T23:33:01.612Z',
          updatedAt: '2022-05-20T23:50:01.612Z',
        },
      ]);
    }

    setIsSubmitting(false);

    return { isSuccess: true };
  }

  const currentUser = {
    id: 1,
  };

  return (
    <div
      style={{
        height: '400px',
        width: '500px',
        border: '1px solid #ccc',
      }}
    >
      <Messages
        {...args}
        data-testid="testing-message-component"
        isLoading={localIsLoading || isSubmitting}
        isSubmitting={isSubmitting}
        currentUserId={currentUser.id}
        messages={messages}
        users={usersForMentions}
        onCreate={postMessage}
        onUpdate={async ({ message, mentions }): Promise<MessageActionResponse> => {
          alert(`onUpdate \n\n message: ${JSON.stringify(message)} \n\n mentions: ${mentions}`);

          return { isSuccess: true };
        }}
        onDelete={(): void => alert('onDelete')}
        onPageEnd={loadMoreMessages}
      />
    </div>
  );
};

export const WithDataTestId = WithDataTestIdTemplate.bind({});

export const LoadingMessage = MinifiedImplementationTemplate.bind({});

LoadingMessage.args = {
  messages: [
    { ...initialMessages[0], isLoading: true },
    { ...initialMessages[1] },
    { ...initialMessages[2] },
  ],
};

export const OverrideBarColors: StoryObj<MessagesProps> = MinifiedImplementationTemplate.bind({});

OverrideBarColors.args = {
  barColors: {
    authorColor: 'peace',
    otherUserColor: 'positiveDepressed',
  },
};

export const MessageCustomization = MinifiedImplementationTemplate.bind({});

MessageCustomization.args = {
  messages: [
    {
      ...initialMessages[0],
      isLoading: true,
      MenuComponent: <CustomMessageMenuComponent />,
    },
    {
      ...initialMessages[1],
      FooterComponent: (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text
            variant="bodySmall"
            margin={0}
            color="sweet"
          >
            A custom footer
          </Text>
          <Button
            startEnhancer={() => <Eyedropper />}
            kind="tertiary"
            size="compact"
          >
            Contract data
          </Button>
        </div>
      ),
    },
    {
      ...initialMessages[2],
      MenuComponent: <CustomMessageMenuComponent />,
    },
  ],
};

export const CustomComposerPlaceholder: StoryObj<MessagesProps> =
  MinifiedImplementationTemplate.bind({});

CustomComposerPlaceholder.args = {
  overrides: {
    MessageComposer: {
      props: {
        placeholder: 'Ask whatever you want...',
      },
    },
  },
};

export const EmptyMessageComponent: StoryObj<MessagesProps> = MinifiedImplementationTemplate.bind(
  {},
);

EmptyMessageComponent.args = {
  messages: [],
  isLoading: false,
  isPaginated: false,
  overrides: {
    MessageList: {
      props: {
        overrides: {
          emptyMessageComponent: (
            <div>
              <Text variant="body">Custom empty message component</Text>
            </div>
          ),
        },
      },
    },
  },
};

export const ComposerOverride: StoryObj<MessagesProps> = MinifiedImplementationTemplate.bind({});

ComposerOverride.args = {
  overrides: {
    MessageComposer: {
      component: () => (
        <div>
          <Text
            variant="body"
            textAlign="center"
            color="positiveMedium"
          >
            A custom component
          </Text>
        </div>
      ),
    },
  },
};

export const CustomComposerMaxHeight: StoryObj<MessagesProps> = MinifiedImplementationTemplate.bind(
  {},
);

CustomComposerMaxHeight.args = {
  overrides: {
    MessageComposer: {
      props: { $maxHeight: '8rem' },
    },
  },
};

export const OverridedComposerWithInlineVariant: StoryObj<MessagesProps> =
  MinifiedImplementationTemplate.bind({});

OverridedComposerWithInlineVariant.args = {
  overrides: {
    MessageComposer: {
      props: {
        overrides: { Textarea: { component: InlineComposerTextareaContainer } },
        $maxHeight: '10rem',
        variant: 'inline',
        startEnhancer: (
          <IconButton
            kind="tertiary"
            onClick={() => alert('startEnhancer clicked')}
          >
            <ListDropdown size={24} />
          </IconButton>
        ),
      },
    },
  },
};
