/** All Brain AI assistant constants */
export class AssistantConstants {
  public assistantTabs = {
    chat: 'chat',
    metadata: 'metadata',
  } as const;

  public assistantOptions = [
    {
      label: 'webdoxAI.assistantOptions.brainCompanion',
      value: 'webdoxAI.chat.assistantTitle',
      id: 'brainCompanion',
    },
    {
      label: 'webdoxAI.assistantOptions.legalWhisper',
      value: 'webdoxAI.chat.legalWhisperTitle',
      id: 'legalWhisper',
    },
  ] as const;

  public assistantOptionMap = {
    brainCompanion: 'brainCompanion',
    legalWhisper: 'legalWhisper',
  } as const;
}

export const assistantConstants = new AssistantConstants();
