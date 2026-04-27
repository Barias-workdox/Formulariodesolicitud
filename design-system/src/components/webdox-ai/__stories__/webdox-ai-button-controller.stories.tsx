import { useCallback, useState } from 'react';

import { excludedControls } from '../../../../.storybook/preview';
import { WebdoxAIButtonController } from '../controllers/webdox-ai-button-controller';

import type { WebdoxAIButtonControllerProps } from '../controllers/webdox-ai-button-controller';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Modules/WebdoxAI/Controllers/WebdoxAIButtonController',
  component: WebdoxAIButtonController,
  args: {
    'data-testid': 'webdox-ai-button-controller',
    user: {
      firstName: 'Cristián',
    },
    isLoading: false,
    hasError: false,
    onClick: (): void => alert('WebdoxAIButtonController - Click event'),
  },
  parameters: {
    controls: {
      exclude: [...excludedControls, 'popoverProps'],
    },
  },
} as Meta<typeof WebdoxAIButtonController>;

/** A WebdoxAIButtonController */
const Template: StoryFn<typeof WebdoxAIButtonController> = (props) => {
  const [isOpen, setIsOpen] = useState(true);

  /** Function to handle open event. */
  const handleOpen = useCallback(() => setIsOpen(true), []);

  /** Function to handle close event. */
  const handleClose = useCallback(() => setIsOpen(false), []);

  const handleSendClick = useCallback(
    (value: string): void => {
      handleClose();
      alert('WebdoxAIButtonController - Click event: ' + value);
    },
    [handleClose],
  );

  return (
    <>
      <WebdoxAIButtonController
        {...props}
        popoverProps={{
          isOpen,
          onOpen: handleOpen,
          onClose: handleClose,
          onSendClick: handleSendClick,
        }}
      />
    </>
  );
};

export const Default = Template.bind({});

export const DocumentProcessing: StoryObj<WebdoxAIButtonControllerProps> = Template.bind({});

DocumentProcessing.args = {
  isLoading: true,
};

export const GenericError: StoryObj<WebdoxAIButtonControllerProps> = Template.bind({});

GenericError.args = {
  hasError: true,
};

export const ProcessFailedError: StoryObj<WebdoxAIButtonControllerProps> = Template.bind({});

ProcessFailedError.args = {
  hasError: true,
  errorType: 'documentEnable',
};

export const EncryptedDocumentError: StoryObj<WebdoxAIButtonControllerProps> = Template.bind({});

EncryptedDocumentError.args = {
  hasError: true,
  errorType: 'encryptedDocument',
};
