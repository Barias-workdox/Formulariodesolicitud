import { mentionsMock } from '@components/messages/__mocks__/mentions.mock';
import { cleanMentionsForPayload } from '@components/messages/utils/user-mention.utils';

import type { MessagesUser } from '@components/messages/messages.interfaces';

describe('cleanMentionsForPayload - tests', () => {
  it('should return the transformed message and the count of mentions', () => {
    const message =
      'Hello <span contenteditable="false" class="mention" data-user-id="1">@Example1</span>';

    const { content, mentions } = cleanMentionsForPayload(message, mentionsMock);

    expect(content).toBe(
      'Hello <span class="mentioned-user-container-class">[collaborator=Example1#1]</span>',
    );
    expect(mentions).toBe(1);
  });

  it('should replace multiple mentions correctly', () => {
    const message =
      'Hello <span contenteditable="false" class="mention" data-user-id="1">@Example1</span> and <span contenteditable="false" class="mention" data-user-id="2">@Example2</span>';
    const { content, mentions } = cleanMentionsForPayload(message, mentionsMock);

    expect(content).toBe(
      'Hello <span class="mentioned-user-container-class">[collaborator=Example1#1]</span> and <span class="mentioned-user-container-class">[stepResponsible=Example2#2]</span>',
    );
    expect(mentions).toBe(2);
  });

  it('should handle messages with no mentions correctly', () => {
    const message = 'Hello world';
    const { content, mentions } = cleanMentionsForPayload(message, mentionsMock);

    expect(content).toBe('Hello world');
    expect(mentions).toBe(0);
  });

  it('should replace line breaks correctly', () => {
    const message = 'Hello<br>world';
    const { content } = cleanMentionsForPayload(message, mentionsMock);

    expect(content).toBe('Hello<br>world');
  });

  it('should handle special characters in user names', () => {
    const specialUsers: MessagesUser[] = [
      { id: 3, name: 'Jöao Güidó #3 [Support](IT)', mentionModel: 'user' },
    ];
    const message =
      'Hello <span contenteditable="false" class="mention" data-user-id="3">@Jöao</span>';

    const { content } = cleanMentionsForPayload(message, specialUsers);

    expect(content).toBe(
      'Hello <span class="mentioned-user-container-class">[user=JoaoGuido3SupportIT#3]</span>',
    );
  });
});
