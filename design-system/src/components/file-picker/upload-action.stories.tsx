import { Button } from '../button';
import { DeprecatedComponentAlert, StoryLayout } from '../storybook';

import { UploadAction } from './upload-action';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/UploadAction (deprecated)',
  component: UploadAction,
  args: {
    children: <Button>Upload Action</Button>,
    onSelect: (acceptedFiles, rejectedFiles): void => {
      console.log({ acceptedFiles, rejectedFiles });
    },
  },
} as Meta<typeof UploadAction>;

/** A UploadAction */
const Template: StoryFn<typeof UploadAction> = (args) => {
  return (
    <StoryLayout>
      <DeprecatedComponentAlert name="FilePicker" />
      <UploadAction {...args} />
    </StoryLayout>
  );
};

export const Default = Template.bind({});
