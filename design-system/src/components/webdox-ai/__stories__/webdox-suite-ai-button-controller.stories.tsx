import { useCallback } from 'react';

import { excludedControls } from '../../../../.storybook/preview';
import { WebdoxSuiteAIButtonController } from '../controllers/webdox-suite-ai-button-controller';

import type { WebdoxAIButtonInformationPopoverNextProps } from '../components';
import type { WebdoxSuiteAIButtonControllerProps } from '../controllers/webdox-suite-ai-button-controller';
import type { WebdoxAIOptionType } from '@components/webdox-ai/interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Controllers/WebdoxSuiteAIButtonController',
  component: WebdoxSuiteAIButtonController,
  args: {
    'data-testid': 'webdox-ai-button-controller',
    user: {
      firstName: 'Cristián',
    },
    options: [
      {
        type: 'legalWhisper',
      },
      {
        type: 'brainCompanion',
      },
    ],
    placement: 'bottomRight',
    onClick: (): void => alert('WebdoxSuiteAIButtonController - Click event'),
  },
  parameters: {
    controls: {
      exclude: [
        ...excludedControls,
        'popoverProps',
        'onClickOption',
        'user',
        'options',
        'isLoading',
        'errorType',
      ],
    },
  },
} as Meta<typeof WebdoxSuiteAIButtonController>;

/** A WebdoxSuiteAIButtonController */
const Template: StoryFn<typeof WebdoxSuiteAIButtonController> = (props) => {
  const handleOnSubmit: WebdoxAIButtonInformationPopoverNextProps['onSubmit'] = useCallback(
    ({ optionType, value }: { optionType: WebdoxAIOptionType; value: string }): void => {
      alert(`WebdoxSuiteAIButtonController - Submit Event: ${optionType} - ${value}`);
    },
    [],
  );

  const handleClick = (optionType: WebdoxAIOptionType) => {
    window.alert('You clicked on ' + optionType);
  };

  return (
    <WebdoxSuiteAIButtonController
      {...props}
      popoverProps={{
        onSubmit: handleOnSubmit,
      }}
      onClickOption={handleClick}
    />
  );
};

export const SuiteAIGreetings: StoryObj<WebdoxSuiteAIButtonControllerProps> = Template.bind({});

SuiteAIGreetings.storyName = 'Greetings - Suite AI';
SuiteAIGreetings.args = {
  options: [
    {
      type: 'legalWhisper',
      isLoading: true,
    },
    {
      type: 'brainCompanion',
      isLoading: true,
    },
  ],
};

export const LegalWhisperGreetings: StoryObj<WebdoxSuiteAIButtonControllerProps> = Template.bind(
  {},
);

LegalWhisperGreetings.storyName = 'Greetings - Legal Whisper';
LegalWhisperGreetings.args = {
  options: [
    {
      type: 'legalWhisper',
      isLoading: true,
    },
  ],
};

export const BrainCompanionGreetings: StoryObj<WebdoxSuiteAIButtonControllerProps> = Template.bind(
  {},
);

BrainCompanionGreetings.storyName = 'Greetings - Brain Companion';
BrainCompanionGreetings.args = {
  options: [
    {
      type: 'brainCompanion',
      isLoading: true,
    },
  ],
};

export const ActiveBrainCompanion: StoryObj<WebdoxSuiteAIButtonControllerProps> = Template.bind({});

ActiveBrainCompanion.storyName = 'Active - Brain Companion';
ActiveBrainCompanion.args = {
  options: [
    {
      type: 'brainCompanion',
    },
  ],
};

export const ActiveLegalWhisper: StoryObj<WebdoxSuiteAIButtonControllerProps> = Template.bind({});

ActiveLegalWhisper.storyName = 'Active - Legal Whisper';
ActiveLegalWhisper.args = {
  options: [
    {
      type: 'legalWhisper',
    },
  ],
};

export const BrainCompanionGenericError: StoryObj<WebdoxSuiteAIButtonControllerProps> =
  Template.bind({});

BrainCompanionGenericError.storyName = 'Error - Brain Companion Generic Error';
BrainCompanionGenericError.args = {
  options: [
    {
      type: 'legalWhisper',
    },
    {
      type: 'brainCompanion',
      errorType: 'fetchConversation',
    },
  ],
};

export const BrainCompanionEncryptedDocumentError: StoryObj<WebdoxSuiteAIButtonControllerProps> =
  Template.bind({});

BrainCompanionEncryptedDocumentError.storyName = 'Error - Brain Companion Encrypted Document';
BrainCompanionEncryptedDocumentError.args = {
  options: [
    {
      type: 'brainCompanion',
      errorType: 'encryptedDocument',
    },
  ],
};

export const BrainCompanionProcessFailedError: StoryObj<WebdoxSuiteAIButtonControllerProps> =
  Template.bind({});

BrainCompanionProcessFailedError.storyName = 'Error - Brain Companion Process Failed';
BrainCompanionProcessFailedError.args = {
  options: [
    {
      type: 'legalWhisper',
    },
    {
      type: 'brainCompanion',
      errorType: 'documentEnable',
    },
  ],
};

export const LegalWhisperGenericError: StoryObj<WebdoxSuiteAIButtonControllerProps> = Template.bind(
  {},
);

LegalWhisperGenericError.storyName = 'Error - Legal Whisper Generic';
LegalWhisperGenericError.args = {
  options: [
    {
      type: 'legalWhisper',
      errorType: 'createConversation',
    },
    {
      type: 'brainCompanion',
    },
  ],
};
