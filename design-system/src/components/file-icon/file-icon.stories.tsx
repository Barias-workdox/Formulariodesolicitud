import { DeprecatedComponentAlert, StoryLayout } from '../storybook';

import { FileIcon } from './file-icon';

import type { Meta, StoryFn } from '@storybook/react-vite';

export default {
  title: 'Components/Content/FileIcon (deprecated)',
  component: FileIcon,
  args: {
    fileExtension: 'jpg',
    width: '50px',
    height: '50px',
  },
} as Meta<typeof FileIcon>;

/** A FileIcon */
const Template: StoryFn<typeof FileIcon> = (args) => {
  return (
    <StoryLayout>
      <DeprecatedComponentAlert name="FileTypeIcon" />
      <FileIcon {...args} />
    </StoryLayout>
  );
};

export const Pdf = Template.bind({});

Pdf.args = {
  fileExtension: 'pdf',
};

export const Csv = Template.bind({});

Csv.args = {
  fileExtension: 'csv',
};

export const Doc = Template.bind({});

Doc.args = {
  fileExtension: 'doc',
};

export const Docx = Template.bind({});

Docx.args = {
  fileExtension: 'docx',
};

export const DocVariantWord = Template.bind({});

DocVariantWord.args = {
  fileExtension: 'doc-variant-1',
};

export const Ppt = Template.bind({});

Ppt.args = {
  fileExtension: 'ppt',
};

export const Pptx = Template.bind({});

Pptx.args = {
  fileExtension: 'pptx',
};

export const PptxVariantPowerpoint = Template.bind({});

PptxVariantPowerpoint.args = {
  fileExtension: 'pptx-variant-1',
};

export const Xls = Template.bind({});

Xls.args = {
  fileExtension: 'xls',
};

export const Xlsx = Template.bind({});

Xlsx.args = {
  fileExtension: 'xlsx',
};

export const XlsVariantExcel = Template.bind({});

XlsVariantExcel.args = {
  fileExtension: 'xls-variant-1',
};

export const Png = Template.bind({});

Png.args = {
  fileExtension: 'png',
};

export const Jpg = Template.bind({});

Jpg.args = {
  fileExtension: 'jpg',
};

export const Jpeg = Template.bind({});

Jpeg.args = {
  fileExtension: 'jpeg',
};

export const Gif = Template.bind({});

Gif.args = {
  fileExtension: 'gif',
};

export const Psd = Template.bind({});

Psd.args = {
  fileExtension: 'psd',
};

export const Ai = Template.bind({});

Ai.args = {
  fileExtension: 'ai',
};

export const Eps = Template.bind({});

Eps.args = {
  fileExtension: 'eps',
};

export const Mov = Template.bind({});

Mov.args = {
  fileExtension: 'mov',
};

export const Mkv = Template.bind({});

Mkv.args = {
  fileExtension: 'mkv',
};

export const Mp4 = Template.bind({});

Mp4.args = {
  fileExtension: 'mp4',
};

export const Mp3 = Template.bind({});

Mp3.args = {
  fileExtension: 'mp3',
};

export const Avi = Template.bind({});

Avi.args = {
  fileExtension: 'avi',
};

export const Zip = Template.bind({});

Zip.args = {
  fileExtension: 'zip',
};

export const Txt = Template.bind({});

Txt.args = {
  fileExtension: 'txt',
};

export const Lawgeex = Template.bind({});

Lawgeex.args = {
  fileExtension: 'lawgeex',
};

export const MergedDocument = Template.bind({});

MergedDocument.args = {
  fileExtension: 'merged_document',
};

export const Process = Template.bind({});

Process.args = {
  fileExtension: 'process',
};

export const UnknownFileType = Template.bind({});

UnknownFileType.args = {
  fileExtension: 'test',
};

export const CustomWithAndHeight = Template.bind({});

CustomWithAndHeight.args = {
  width: '24px',
  height: '24px',
};
