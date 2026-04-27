import { useEffect, useState, type ReactNode } from 'react';

import { action } from 'storybook/actions';

import { Text } from '@components/text';

import { FileDownloadManager } from '../file-download-manager';

import type { FileDownloadItem } from '../file-download-manager.interfaces';
import type { Meta, StoryFn } from '@storybook/react-vite';

const fileMock: FileDownloadItem = {
  id: '1',
  name: 'repositorio_descarga_25-02-2026.zip',
  fileType: 'zip' as const,
  documentsToDownload: 3,
  onDownload: () => action('Download file')(),
};

export default {
  title: 'Components/Progress & Validation/FileDownloadManager',
  component: FileDownloadManager,
  args: {
    // single-file form — the common case; pass an array for multi-file downloads
    files: fileMock,
    status: 'idle',
    onCloseDownload: () => action('Close download')(),
    onGoToDownloads: () => action('Go to downloads')(),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/PbZuyyTRGoXBcqFm848rvy/%F0%9F%92%A0-Nuclear-Components?node-id=26011-7536&t=mOJ1v6LsQeiASyBK-1',
    },
  },
} as Meta<typeof FileDownloadManager>;

const TemplateLayout = ({ children }: { children: ReactNode }): JSX.Element => (
  <div style={{ flex: 1, height: 'calc(100vh - 32px)', position: 'relative' }}>
    <div>
      <Text
        variant="body"
        margin={0}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia accusantium corrupti
        voluptatibus sapiente? Unde ipsum nobis optio dolor asperiores ea quo, debitis quibusdam,
        ipsam voluptates ratione repudiandae sit, natus alias?
      </Text>
      <Text
        variant="body"
        margin="0 16px"
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quasi fugit necessitatibus
        et animi, eaque reprehenderit rem eum veritatis nostrum ullam, aperiam, nam accusamus magni
        praesentium at nisi blanditiis voluptas!
      </Text>
      <Text
        variant="body"
        margin={0}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus voluptatum et nesciunt
        explicabo nemo at delectus, ea architecto blanditiis totam dignissimos porro iste ad sint
        enim consequuntur magni. Eius, iusto.
      </Text>
    </div>
    {children}
  </div>
);

const Template: StoryFn<typeof FileDownloadManager> = (args) => (
  <TemplateLayout>
    <FileDownloadManager {...args} />
  </TemplateLayout>
);

export const Idle = Template.bind({});

export const Downloading: StoryFn<typeof FileDownloadManager> = (args) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress < 100) {
      const timeout = setTimeout(() => setProgress((oldProgress) => oldProgress + 10), 500);

      return () => clearTimeout(timeout);
    } else {
      setProgress(0);
    }
  }, [progress]);

  return (
    <TemplateLayout>
      <FileDownloadManager
        {...args}
        status="downloading"
        files={[{ ...fileMock, downloadProgress: progress }]}
      />
    </TemplateLayout>
  );
};

export const Draggable = Template.bind({});

Draggable.args = {
  isDraggable: true,
};

export const Finished = Template.bind({});

Finished.args = {
  status: 'finished',
};

export const Error = Template.bind({});

Error.args = {
  status: 'error',
};

export const MultipleFiles: StoryFn<typeof FileDownloadManager> = (args) => {
  const files: FileDownloadItem[] = [
    fileMock,
    ...Array.from({ length: 50 }, (_, index) => ({
      ...fileMock,
      id: `${index + 2}`,
      name: `file_${index + 2}.pdf`,
      fileType: 'pdf' as const,
      onDownload: () => action(`Download file_${index + 2}.pdf`)(),
    })),
  ];

  return (
    <TemplateLayout>
      <FileDownloadManager
        {...args}
        files={files}
      />
    </TemplateLayout>
  );
};
