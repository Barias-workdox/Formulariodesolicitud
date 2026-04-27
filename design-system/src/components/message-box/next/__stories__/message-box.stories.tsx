import { useEffect, useState } from 'react';

import { Close, SendAlt } from '@carbon/icons-react';

import { useMarkdownConverter } from '@hooks/use-markdown-converter.hook';

import { MessageBox, CompactMessageBox } from '..';
import { TextEditorToolbar } from '../components/text-editor-toolbar';
import { QuickActionsPlugin } from '../plugins';

import {
  MessageBoxSlotExample,
  RichTextStoryLayout,
  QuickActionsMenuExample,
} from './story-layout';

import type { MessageBoxPlugin, MessageBoxValue } from '../message-box.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import type { StyleObject } from 'styletron-react';

interface MessageBoxArgs {
  disabled: boolean;
  isLoading: boolean;
  maxHeight: StyleObject['maxHeight'];
  plugins: MessageBoxPlugin[];
  placeholder: string;
  showActionsSlot: boolean;
  showAddonsSlot: boolean;
  showSecondaryButton: boolean;
}

export default {
  title: 'Components/Inputs/MessageBox/Next',
  component: MessageBox,
  args: {
    disabled: false,
    isLoading: false,
    showSecondaryButton: false,
    placeholder: 'Write your message here...',
    maxHeight: '200px',
    showAddonsSlot: false,
    showActionsSlot: false,
  },
  parameters: {
    controls: {
      include: [
        'disabled',
        'isLoading',
        'showSecondaryButton',
        'placeholder',
        'maxHeight',
        'showAddonsSlot',
        'showActionsSlot',
      ],
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=18662-11427&p=f&t=c9K5leSeAk91LLjV-0',
    },
  },
} as Meta<typeof MessageBox>;

const Template: StoryFn<MessageBoxArgs> = ({
  disabled,
  isLoading,
  maxHeight,
  plugins,
  placeholder,
  showActionsSlot,
  showAddonsSlot,
  showSecondaryButton,
}: MessageBoxArgs) => {
  return (
    <MessageBox
      disabled={disabled}
      maxHeight={maxHeight}
      plugins={plugins}
      richTextEnabled
      placeholder={placeholder}
      onSecondaryButtonClick={() => alert('Cancel')}
      onSubmit={() => alert('Submit')}
      primaryButtonIcon={<SendAlt />}
      secondaryButtonIcon={<Close />}
      primaryButtonProps={{ isLoading }}
      primaryButtonText="Submit"
      secondaryButtonText={showSecondaryButton ? 'Cancel' : undefined}
      addons={
        showAddonsSlot ? <MessageBoxSlotExample>Addons Slot</MessageBoxSlotExample> : undefined
      }
      extraActions={
        showActionsSlot ? <MessageBoxSlotExample>Actions Slot</MessageBoxSlotExample> : undefined
      }
    />
  );
};

// eslint-disable-next-line no-empty-pattern
const RichTextTemplate: StoryFn<MessageBoxArgs> = ({}: MessageBoxArgs) => {
  const [value, setValue] = useState<MessageBoxValue>({ textValue: '', HTMLValue: '' });
  const [markdownToHtmlValue, setMarkdownToHtmlValue] = useState<string>('');
  const [htmlToMarkdownValue, setHtmlToMarkdownValue] = useState<string>('');

  const { htmlToMarkdown, markdownToHtml } = useMarkdownConverter();

  /**
   * Converts the HTML value to a markdown value
   * when the HTML value changes
   */
  useEffect(() => {
    if (value.HTMLValue) {
      htmlToMarkdown(value.HTMLValue).then(setHtmlToMarkdownValue);
    }
  }, [value.HTMLValue, htmlToMarkdown]);

  /**
   * Converts the markdown value to a HTML value
   * when the markdown value changes
   */
  useEffect(() => {
    if (htmlToMarkdownValue) {
      markdownToHtml(htmlToMarkdownValue).then(setMarkdownToHtmlValue);
    }
  }, [htmlToMarkdownValue, markdownToHtml]);

  return (
    <RichTextStoryLayout
      value={value}
      htmlToMarkdownValue={htmlToMarkdownValue}
      markdownToHtmlValue={markdownToHtmlValue}
    >
      <MessageBox
        addons={<TextEditorToolbar />}
        onChange={setValue}
        onSecondaryButtonClick={() => alert('Cancel')}
        onSubmit={() => alert('Submit')}
        placeholder="Write your message here..."
        primaryButtonIcon={<SendAlt />}
        primaryButtonText="Submit"
        richTextEnabled
      />
    </RichTextStoryLayout>
  );
};

const CompactVariantTemplate: StoryFn<MessageBoxArgs> = ({
  disabled,
  isLoading,
  showSecondaryButton,
  placeholder,
  maxHeight,
  showAddonsSlot,
}: MessageBoxArgs) => {
  return (
    <CompactMessageBox
      disabled={disabled}
      maxHeight={maxHeight}
      placeholder={placeholder}
      onSecondaryButtonClick={() => alert('Cancel')}
      onSubmit={() => alert('Submit')}
      primaryButtonIcon={<SendAlt />}
      primaryButtonProps={{ isLoading }}
      secondaryButtonIcon={<Close />}
      primaryButtonText="Submit"
      secondaryButtonText={showSecondaryButton ? 'Cancel' : undefined}
      addons={
        showAddonsSlot ? <MessageBoxSlotExample>Addons Slot</MessageBoxSlotExample> : undefined
      }
    />
  );
};

export const Default: StoryObj<MessageBoxArgs> = Template.bind({});

export const WithQuickActions: StoryObj<MessageBoxArgs> = Template.bind({});

WithQuickActions.args = {
  plugins: [
    QuickActionsPlugin({ customRender: (query) => <QuickActionsMenuExample query={query} /> }),
  ],
  placeholder: 'Type / to trigger a quick action',
};

export const WithRichTextControls: StoryObj<MessageBoxArgs> = RichTextTemplate.bind({});

WithRichTextControls.parameters = {
  controls: {
    include: [],
  },
};

export const CompactVariant: StoryObj<MessageBoxArgs> = CompactVariantTemplate.bind({});

CompactVariant.parameters = {
  controls: {
    include: [
      'disabled',
      'isLoading',
      'showSecondaryButton',
      'placeholder',
      'maxHeight',
      'showAddonsSlot',
    ],
  },
};
