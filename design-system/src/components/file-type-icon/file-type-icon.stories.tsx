import { FileTypeIcon } from './file-type-icon';
import { DEFAULT_ICON_SIZE } from './file-type-icon.constants';

import type { FileTypeIconProps } from './file-type-icon';
import type { FileType } from './file-type-icon.interfaces';
import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FileTypeIcon',
  component: FileTypeIcon,
  args: {
    'data-testid': 'file-type-icon',
    fileExtension: 'doc',
    size: DEFAULT_ICON_SIZE,
  },
} as Meta<typeof FileTypeIcon>;

/** A FileTypeIcon */
const Template: StoryFn<typeof FileTypeIcon> = (args) => {
  return <FileTypeIcon {...args} />;
};

export const Docx: StoryObj<FileTypeIconProps> = Template.bind({});

Docx.args = {
  fileExtension: 'docx',
};

export const Pdf: StoryObj<FileTypeIconProps> = Template.bind({});

Pdf.args = {
  fileExtension: 'pdf',
};

export const Ppt: StoryObj<FileTypeIconProps> = Template.bind({});

Ppt.args = {
  fileExtension: 'ppt',
};

export const Pptx: StoryObj<FileTypeIconProps> = Template.bind({});

Pptx.args = {
  fileExtension: 'pptx',
};

export const Csv: StoryObj<FileTypeIconProps> = Template.bind({});

Csv.args = {
  fileExtension: 'csv',
};

export const Xls: StoryObj<FileTypeIconProps> = Template.bind({});

Xls.args = {
  fileExtension: 'xls',
};

export const Xlsx: StoryObj<FileTypeIconProps> = Template.bind({});

Xlsx.args = {
  fileExtension: 'xlsx',
};

export const Png: StoryObj<FileTypeIconProps> = Template.bind({});

Png.args = {
  fileExtension: 'png',
};

export const Jpg: StoryObj<FileTypeIconProps> = Template.bind({});

Jpg.args = {
  fileExtension: 'jpg',
};

export const Jpeg: StoryObj<FileTypeIconProps> = Template.bind({});

Jpeg.args = {
  fileExtension: 'jpeg',
};

export const Msg: StoryObj<FileTypeIconProps> = Template.bind({});

Msg.args = {
  fileExtension: 'msg',
};

export const Txt: StoryObj<FileTypeIconProps> = Template.bind({});

Txt.args = {
  fileExtension: 'txt',
};

export const Zip: StoryObj<FileTypeIconProps> = Template.bind({});

Zip.args = {
  fileExtension: 'zip',
};

export const Lawgeex: StoryObj<FileTypeIconProps> = Template.bind({});

Lawgeex.args = {
  fileExtension: 'lawgeex',
};

export const UnknownFileType: StoryObj<FileTypeIconProps> = Template.bind({});

// Type casting is necessary here to avoid type errors.
UnknownFileType.args = {
  fileExtension: 'test' as FileType,
};
