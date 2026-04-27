import { DropPhoto } from '@carbon/icons-react';

import { FilePicker } from './file-picker';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/FilePicker',
  component: FilePicker,
  args: {
    'data-testid': 'file-picker-test',
    disabled: false,
    filename: undefined,
    isUploading: false,
    uploadProgress: 0,
    buttonIcon: undefined,
    onDelete: () => {
      console.log('onDelete');
    },
    onDownload: () => {
      console.log('onDownload');
    },
    onUpload: (acceptedFiles, rejectedFiles): void => {
      console.log('onUpload', { acceptedFiles, rejectedFiles });
    },
  },
} as Meta<typeof FilePicker>;

/** A FilePicker */
const Template: StoryFn<typeof FilePicker> = (args) => {
  return <FilePicker {...args} />;
};

export const Default = Template.bind({});

/** Custom template with buttonIcon */
export const WithIcon = Template.bind({});

WithIcon.args = {
  disabled: false,
  filename: undefined,
  isUploading: false,
  uploadProgress: 0,
  buttonText: 'FilePicker with Button Icon',
  buttonIcon: DropPhoto,
};

/** Custom template with the delete button active  */
export const Delete = Template.bind({});

Delete.args = {
  'data-testid': 'file-picker-test',
  disabled: true,
  isDeleting: false,
  showDeleteButton: true,
  filename: 'Name of the file.docx',
};

/** Custom template with accepted formats  */
export const WithAcceptedFormats = Template.bind({});

WithAcceptedFormats.args = {
  accept: [
    'application/pdf',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  disabled: false,
  filename: undefined,
  isUploading: false,
  uploadProgress: 0,
  buttonIcon: undefined,
};

export const DownloadFile = Template.bind({});

DownloadFile.args = {
  disabled: true,
  filename: 'Name of the file.docx',
};

/** Custom template showing upload in progress */
export const UploadInProgress = Template.bind({});

UploadInProgress.args = {
  disabled: false,
  filename: undefined,
  isUploading: true,
  uploadProgress: 65,
  buttonIcon: undefined,
};
