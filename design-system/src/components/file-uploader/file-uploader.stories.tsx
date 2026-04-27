import { useState } from 'react';

import { DEFAULT_FILE_EXTENSIONS } from '../utils/constants/file.constants';

import { FileUploader } from './file-uploader';
import { DEFAULT_FILE_EXTENSION_NAMES } from './utils/file-uploader.constants';

import type { FileType } from './interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Pickers/FileUploader',
  component: FileUploader,
  args: {
    'data-testid': 'data-testid',
    accept: DEFAULT_FILE_EXTENSIONS,
    acceptedExtensionsNames: DEFAULT_FILE_EXTENSION_NAMES,
    disabled: false,
    multiple: true,
    selectedFiles: [],
    onDrop: (accepted) => console.log({ accepted }),
  },
} as Meta<typeof FileUploader>;

/** Default File Uploader */
const Template: StoryFn<typeof FileUploader> = (args) => {
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([]);

  const handleOnDrop = (accepted: File[]): void => {
    setSelectedFiles(accepted.map(({ size }) => ({ size })));
  };

  return (
    <FileUploader
      {...args}
      selectedFiles={selectedFiles}
      onDrop={handleOnDrop}
    />
  );
};

export const Default = Template.bind({});

/**
 * File Uploader with accepted extensions array
 */
export const AcceptedFileExtensions = Template.bind({}) as Meta<typeof FileUploader>;

AcceptedFileExtensions.args = {
  accept: ['.doc', '.docx'],
  acceptedExtensionsNames: 'Word',
};

/**
 * Select a single document
 */
export const Disabled = Template.bind({}) as Meta<typeof FileUploader>;

Disabled.args = {
  disabled: true,
};

/**
 * Select a single document
 */
export const SingleDocumentSelection = Template.bind({}) as Meta<typeof FileUploader>;

SingleDocumentSelection.args = {
  multiple: false,
};

/**
 * Custom title
 */
export const CustomTitle = Template.bind({}) as Meta<typeof FileUploader>;

CustomTitle.args = {
  title:
    'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
};

/** Default File Uploader */
const FilesSelectedTemplate: StoryFn<typeof FileUploader> = (args) => {
  const [selectedFiles, setSelectedFiles] = useState<FileType[]>([{ size: 2000 }, { size: 893 }]);

  const handleOnDrop = (accepted: File[]): void => {
    setSelectedFiles(accepted.map(({ size }) => ({ size })));
  };

  return (
    <FileUploader
      {...args}
      selectedFiles={selectedFiles}
      onDrop={handleOnDrop}
    />
  );
};

/**
 * File Uploader with some file selection
 */
export const FilesSelected = FilesSelectedTemplate.bind({}) as Meta<typeof FileUploader>;

/**
 * File Uploader with directory selection
 */
export const WithDirectorySelection = Template.bind({}) as Meta<typeof FileUploader>;

WithDirectorySelection.args = {
  directorySelection: true,
};
